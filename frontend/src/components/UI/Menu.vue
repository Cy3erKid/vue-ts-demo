<template>
  <div class="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold">DEMO APP</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn"> Dashboard </router-link>
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn"> Community </router-link>
        <router-link to="/about" class="btn btn-ghost btn-sm rounded-btn"> About </router-link>
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn"> Contact </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default {
  name: "Menu",
  components: {},
  setup() {
    return {
      navigation,
    };
  },
};
</script>
