import store from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/basket",
    name: "basket",
    // meta: {
    //   requiresAuth: true,
    // },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BasketView.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/views/CardDetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.getAuthInfo) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
