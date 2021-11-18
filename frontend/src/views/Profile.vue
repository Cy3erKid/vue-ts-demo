<template>
  <div class="profile">
    <UserProfile
      :Profile="User"
      :isLoading="loading"
      :postLoading="loadPost"
      :Posts="Posts"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserProfile from "@/components/user/Profile.vue";
import UserService from "@/composables/users";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Profile",
  components: {
    UserProfile,
  },
  setup() {
    const loading = ref(false);
    const Posts = ref({});
    const User = ref({});
    const error = ref(false);
    const router = useRoute();
    const loadPost = ref(false);
    const errPost = ref(false);

    const getUser = async () => {
      loading.value = true;
      const id = router.params.userId;
      try {
        loading.value = false;
        User.value = await UserService.getUserById(`${id}`).then((res) => res);
      } catch (error) {
        loading.value = false;
        error.value = true;
      }
    };

    const getPosts = async () => {
      loadPost.value = true;
      try {
        const id = router.params.userId;
        Posts.value = await UserService.getPostByUserId(`${id}`).then(
          (res) => res
        );
        loadPost.value = false;
      } catch (error) {
        loadPost.value = false;
        errPost.value = true;
      }
    };

    getPosts();
    getUser();

    return {
      User,
      error,
      Posts,
      errPost,
      loadPost,
      loading,
    };
  },
});
</script>
