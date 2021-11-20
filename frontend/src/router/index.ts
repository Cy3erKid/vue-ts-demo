import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";
import PostDetail from "@/views/Post/Detail.vue";
import Posts from "@/views/Post/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/profile/:userId",
    name: "Profile",
    component: Profile
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/post/:postId",
    name: "ViewPost",
    component: PostDetail
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
