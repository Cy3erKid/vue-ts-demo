<template>
  <div class="header flex items-end justify-between mb-12">
    <div class="title">
      <p class="text-4xl font-bold text-gray-800 mb-4">{{ Post.title }}</p>
    </div>
  </div>
  <figure>
    <img
      :src="`https://picsum.photos/1200/800.webp?random=${Post.id}`"
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
  <template v-if="!errPost">
    <div class="text-center shadow-2xl bordered">
      <div class="card-body">
        <div class="h-auto overflow-ellipsis overflow-hidden">
          <p class="overflow-ellipsis overflow-hidden">
            {{ Post.body }}
          </p>
        </div>
        <!-- <div class="justify-center card-actions">
              <router-link
                :to="{ name: `ViewPost`, params: { postId: Post.id } }"
                class="btn btn-outline btn-accent"
                >More info</router-link
              >
            </div> -->
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PostService from "@/composables/post";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Posts",
  setup() {
    const Post = ref({});
    const loadPost = ref(false);
    const errPost = ref(false);
    const route = useRoute();
    const id = route.params.postId;
    const getPost = async () => {
      loadPost.value = true;
      try {
        Post.value = await PostService.getPostByID(`${id}`)
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

    getPost();
    return { Post, loadPost, errPost };
  },
});
</script>
