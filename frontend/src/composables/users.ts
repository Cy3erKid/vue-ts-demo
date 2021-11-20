import User from "@/types/User";
import Post from "@/types/Post";

import { toRefs, reactive } from "vue";
import axios from "axios";

const User = {
  getUsers: async () => {
    const usersLists = reactive({ users: {} as User });
    await axios
      .get(`api/users`)
      .then((result) => {
        usersLists.users = result.data.users;
      })
      .catch((err) => {
        return err;
      });
    return { ...toRefs(usersLists.users) };
  },
  getUserById: async (id: string) => {
    const user = reactive({ User });
    await axios
      .get(`/api/users/id/${id}`)
      .then((result) => {
        user.User = result.data.user;
      })
      .catch((err) => {
        return err;
      });
    return { ...toRefs(user.User) };
  },
  getPostByUserId: async (userId: string) => {
    const post = reactive({ items: {} as Post });
    await axios
      .get(`/api/users/${userId}/posts`)
      .then((result) => {
        post.items = result.data.posts;
      })
      .catch((err) => {
        return err;
      });

    return { ...toRefs(post.items) };
  },
  updatUserProfile: async (data: any) => {
    const profile = reactive({ item: {} as User });
    await axios
      .put(`/api/users/update/${data.id}`, data)
      .then((result) => {
        profile.item = result.data.users;
      })
      .catch((err) => {
        return err;
      });

    return { ...toRefs(profile.item) };
  },
};

export default User;
