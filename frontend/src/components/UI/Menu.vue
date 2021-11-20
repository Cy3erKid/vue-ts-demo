<template>
  <div class="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold">DEMO APP</span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn"> Dashboard </router-link>
        <router-link to="/posts" class="btn btn-ghost btn-sm rounded-btn"> Community </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Menu"
};
</script>
