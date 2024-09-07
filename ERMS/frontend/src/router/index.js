import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ContactUs from "../components/ContactUs.vue";
import Gallery from "../components/Gallery.vue";
// import Packages from "../components/Packages.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUs,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  // {
  //   path: "/packages",
  //   name: "Packages",
  //   component: Packages,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
