<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-compact" v-if="!error">
      <thead>
        <tr>
          <th>Name</th>
          <th>Website / Company</th>
          <th>UserName</th>
          <th>
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="isLoading">
          <td colspan="4" class="px-6 py-4">
            <div class="text-sm text-gray-900 text-center">Please wait..</div>
          </td>
        </tr>
        <template v-else>
          <tr v-for="user in users" :key="user.id">
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img
                      :src="`https://picsum.photos/400/300.webp?random=${user.id}`"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ user.name }}</div>
                  <div class="text-sm opacity-50">{{ user.email }}</div>
                  <div class="text-sm text-gray-500">
                    {{ user.phone }}
                  </div>
                </div>
              </div>
              
            </td>
            <td>
              <div class="text-sm text-gray-900">{{ user.website }}</div>
              <div class="text-sm text-gray-500">{{ user.company.name }}</div>
            </td>
            <td>
              {{ user.username }}
            </td>
            <td>
              <router-link
                :to="{ name: `Profile`, params: { userId: user.id } }"
                class="text-indigo-600"
                >Profile</router-link
              >
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <template v-else>
      <div class="block m-auto p-5">
        <h4 class="text-center">Something went wrong...</h4>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Users from "@/composables/users";
export default defineComponent({
  name: "Users",
  setup() {
    const users = ref({});
    const isLoading = ref(false);
    const error = ref(false);

    const getUsers = async () => {
      isLoading.value = true;
      try {
        users.value = await Users.getUsers().then((res) => res);
        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
        error.value = true;
      }
    };
    getUsers();

    return { isLoading, users, error };
  },
});
</script>
