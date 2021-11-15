<template>
  <div class="container">
    <div class="grid md:grid-rows-none grid-cols-6 md:gap-4 mb-5">
      <div class="md:col-start-3 col-start-10 md:col-span-2 bordered sm:w-full">
        <div class="card shadow-2xl">
          <figure>
            <img :src="`https://picsum.photos/400/250.webp?random`" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ User.name }}</h2>
            <div class="divider divider-vertical"></div>
            <p>
              <label for="website" class="font-bold">Email : </label>
              <a
                class="link-secondary font-bold font-mono"
                :href="`mailto: ${User.email}`"
                >{{ User.email }}</a
              >
            </p>
            <p>
              <label for="website" class="font-bold">Phone : </label>
              {{ User.phone }}
            </p>
            <p>
              <label for="website" class="font-bold">Website : </label>
              <a
                class="link-secondary font-bold font-mono"
                :href="`https://${User.website}`"
                target="_blank"
                >{{ User.website }}</a
              >
            </p>
            <div class="divider divider-horizontal" />

            <h2 class="card-title">Company</h2>
            <p v-for="(company, i) in User.company" :key="i">
              <label for="website" class="font-bold">{{ i.toUpperCase() }} :</label> {{ company }}
            </p>

            <div class="card-actions justify-end">
              <div>
                <label for="my-modal-2" class="btn btn-primary">Edit</label>
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div id="edit-profile" class="modal">
                  <div class="modal-box">
                    <p>
                      Enim dolorem dolorum omnis atque necessitatibus.
                      Consequatur aut adipisci qui iusto illo eaque. Consequatur
                      repudiandae et. Nulla ea quasi eligendi. Saepe velit autem
                      minima.
                    </p>
                    <div class="modal-action">
                      <label for="my-modal-2" class="btn btn-primary"
                        >Accept</label
                      >
                      <label for="my-modal-2" class="btn">Close</label>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-3xl font-semibold font-mono">Posts</h2>
    <div class="divider divider-horizontal"></div>
    <div class="grid grid-cols-3 gap-3">
      <div class="" v-for="post in Post" :key="post.id">
        <div class="card text-center shadow-2xl">
          <figure class="px-10 pt-10">
            <img
              :src="`https://picsum.photos/400/300.webp?random=${post.id}`"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <div class="h-auto overflow-ellipsis overflow-hidden">
              <p class="overflow-ellipsis overflow-hidden">
                {{ post.body }}
              </p>
            </div>

            <div class="justify-center card-actions">
              <a href="/" class="btn btn-outline btn-accent">More info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Users from "@/composables/users";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Profile",
  props: {
    userId: {
      type: String,
      default: null,
    },
  },
  setup() {
    const User = ref({});
    const Post = ref({});
    const isLoading = ref(false);
    const postLoading = ref(false);
    const errPost = ref(false);
    const error = ref(false);
    const router = useRoute();

    const getUser = async () => {
      isLoading.value = true;
      const id = router.params.userId;
      try {
        User.value = await Users.getUserById(`${id}`).then((res) => res);
        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
        error.value = true;
      }
    };

    const getPosts = async () => {
      postLoading.value = true;
      try {
        const id = router.params.userId;
        Post.value = await Users.getPostByUserId(`${id}`).then((res) => res);
        postLoading.value = false;
      } catch (error) {
        postLoading.value = false;
        errPost.value = true;
      }
    };

    getUser();
    getPosts();

    return { isLoading, User, error, Post };
  },
});
</script>
