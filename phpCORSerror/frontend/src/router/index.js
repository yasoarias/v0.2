import { createRouter, createWebHistory } from "vue-router";
import userLogin from "@/components/userLogin.vue";
import userRegister from "@/components/userRegister.vue";
import eventList from "@/components/eventList.vue";
import createEvent from "@/components/createEvent.vue";

const routes = [
  { path: "/login", component: userLogin },
  { path: "/register", component: userRegister },
  { path: "/events", component: eventList },
  { path: "/createEvent", component: createEvent },
  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
