import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
const routes = [
  // home路径重定向到根路径
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
    routes,
});

export default router;
