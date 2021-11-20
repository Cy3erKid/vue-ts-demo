import Post from "@/types/Post";

import { toRefs, reactive } from "vue";
import axios from "axios";

const PostService = {
  getPost: async () => {
    const postItems = reactive({ items: {} as Post });

    await axios
      .get(`api/posts`)
      .then((result) => {
        postItems.items = result.data.posts;
      })
      .catch((err) => {
        return err;
      });

    return { ...toRefs(postItems.items) };
  },
  getPostByID: async (Id: string) => {
    const Post = reactive({ item: {} as Post });
    await axios
      .get(`/api/posts/${Id}`)
      .then((result) => {
        Post.item = result.data.post;
      })
      .catch((err) => {
        return err;
      });

    return { ...toRefs(Post.item) };
  },
};

export default PostService;
