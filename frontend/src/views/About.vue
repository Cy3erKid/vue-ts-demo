<template>
  <Header title="ABOUT PAGE" />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/UI/Header.vue";

export default defineComponent({
  name: "About",
  components: {
    Header,
  },
});
</script>
