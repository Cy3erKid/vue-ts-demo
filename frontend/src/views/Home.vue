<template>
  <div class="home">
    <Users />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Users from "@/components/user/Users.vue";

export default defineComponent({
  name: "Home",
  components: {
    Users
  },
});
</script>
