<template>
  <div class="container">
    <div class="grid md:grid-rows-none grid-cols-6 md:gap-4 mb-5">
      <div class="md:col-start-3 col-start-10 md:col-span-2 bordered sm:w-full">
        <div class="card shadow-2xl">
          <figure>
            <img :src="`https://picsum.photos/400/250.webp?random`" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ Profile.name }}</h2>
            <div class="divider divider-vertical"></div>
            <p>
              <label for="website" class="font-bold">Email : </label>
              <a
                class="link-secondary font-bold font-mono"
                :href="`mailto: ${Profile.email}`"
                >{{ Profile.email }}</a
              >
            </p>
            <p>
              <label for="website" class="font-bold">Phone : </label>
              {{ Profile.phone }}
            </p>
            <p>
              <label for="website" class="font-bold">Website : </label>
              <a
                class="link-secondary font-bold font-mono"
                :href="`https://${Profile.website}`"
                target="_blank"
                >{{ Profile.website }}</a
              >
            </p>
            <div class="divider divider-horizontal" />

            <h2 class="card-title">Company</h2>
            <p v-for="(company, i) in Profile.company" :key="i">
              <label for="website" class="font-bold"
                >{{ i.toUpperCase() }} :</label
              >
              {{ company }}
            </p>

            <div class="card-actions justify-end">
              <div>
                <label for="my-modal-2" class="btn btn-primary">Edit</label>
                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                <div id="edit-profile" class="modal">
                  <div class="modal-box">
                    <div class="modal-body">
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Name"
                          v-bind:value="Profile.name"
                          class="input input-bordered"
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Email : </span>
                        </label>
                        <input
                          type="email"
                          :value="Profile.email"
                          placeholder="Email"
                          class="input input-bordered"
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Phone</span>
                        </label>
                        <input
                          type="tel"
                          :value="Profile.phone"
                          placeholder="Phone"
                          class="input input-bordered"
                        />
                      </div>
                    </div>

                    <div class="modal-action">
                      <button @click="updateProfile" for="my-modal-2" class="btn btn-primary"
                        >Update</button
                      >
                      <label for="my-modal-2" class="btn">Close</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-3xl font-semibold font-mono">Posts</h2>
    <div class="divider divider-horizontal"></div>
    <div class="grid grid-cols-3 gap-3">
      <div class="" v-for="post in Posts" :key="post.id">
        <div class="card text-center shadow-2xl">
          <figure class="px-10 pt-10">
            <img
              :src="`https://picsum.photos/400/300.webp?random=${post.id}`"
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
              <a href="/post/view" class="btn btn-outline btn-accent"
                >More info</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import User from "@/types/User";
import Post from "@/types/Post";

export default defineComponent({
  name: "Profile",
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
    };
  },
  props: {
    userId: {
      type: String,
      default: null,
    },
    Profile: {} as () => User,
    isLoading: {
      type: Boolean,
      default: false,
    },
    Posts: {} as () => Post,
    postLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateProfile(){
      console.log(this.fullName)
    }
  },
});
</script>
