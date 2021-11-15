<template>
  <div class="profile">
    <UserProfile />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import UserProfile from "@/components/user/Profile.vue";
export default defineComponent({
  name: "Profile",
  components: {
    UserProfile,
  },
});
</script>
