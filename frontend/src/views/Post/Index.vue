<template>
  <div class="header flex items-end justify-between mb-12">
    <div class="title">
      <p class="text-4xl font-bold text-gray-800 mb-4">Lastest articles</p>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-5 mt-10">
    <template v-if="!errPost">
      <div class="" v-for="post in Posts" :key="post.id">
        <div class="card text-center shadow-2xl bordered">
          <figure>
            <img
              :src="`https://picsum.photos/400/300.webp?random=${post.id}`"
              class="
                inset-0
                w-full
                h-full
                object-cover
                rounded-bl-none rounded-br-none rounded-t-md
                bg-gray-100
              "
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
              <router-link
                :to="{ name: `ViewPost`, params: { postId: post.id } }"
                class="btn btn-outline btn-accent"
                >More info</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PostService from "@/composables/post";

export default defineComponent({
  name: "Posts",
  setup() {
    const Posts = ref({});
    const loadPost = ref(false);
    const errPost = ref(false);
    const getPosts = async () => {
      loadPost.value = true;
      try {
        Posts.value = await PostService.getPost()
          .then((res) => {
            return res;
          })
          .catch((err) => {
            return err;
          });
        loadPost.value = false;
      } catch (error) {
        loadPost.value = false;
        error.value = true;
      }
    };

    getPosts();
    return { Posts, loadPost, errPost };
  }
});
</script>
