import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
const routes = [
  // home路径重定向到根路径
  {
    path: "/home",
    redirect: "/",
  },
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
