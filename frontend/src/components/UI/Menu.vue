<template>

  <nav as="nav" class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <div
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
          </div>
        </div>
        <div
          class="flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-0">
              <router-link
                to="/"
                class="text-white px-3 py-2 rounded-md text-sm font-medium"
                >Dashboard</router-link
              >
              <router-link
                to="/about"
                class="text-white px-3 py-2 rounded-md text-sm font-medium"
                >Posts</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        ></div>
      </div>
    </div>
  </nav>
  
</template>

<script>
import Header from './Header.vue'
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default {
  name: "Menu",
  components: {
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>
