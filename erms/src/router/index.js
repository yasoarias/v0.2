import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  //   {
  //     path: "/packages",
  //     name: "Packages",
  //     component: () => import("../components/Packages.vue"),
  //   },
  //   {
  //     path: "/gallery",
  //     name: "Gallery",
  //     component: () => import("../components/Gallery.vue"),
  //   },
  //   {
  //     path: "/tracking",
  //     name: "Tracking",
  //     component: () => import("../components/Tracking.vue"),
  //   },
  //   {
  //     path: "/contact",
  //     name: "Contact",
  //     component: () => import("../components/Contact.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
