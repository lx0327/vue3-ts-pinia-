import { createRouter, createWebHistory } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { nextTick } from "vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        layout: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
      meta: {
        layout: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: {
        layout: false,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const store = useCounterStore();
  if (to.name !== "login" && !store.token) next({ name: "login" });
  else {
    console.log(store.token);
    next();
  }
});
export default router;
