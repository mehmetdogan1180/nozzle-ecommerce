import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/layouts/Dashboard"),
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home"),
      },
    ],
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next({
          name: "AuthLogin",
        });
      }
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/layouts/Auth"),
    redirect: { name: "AuthLogin" },
    children: [
      {
        path: "login",
        name: "AuthLogin",
        component: () => import("@/views/auth/Login"),
      },
    ],
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next();
      } else {
        next({
          name: "Dashboard",
        });
      }
    },
  },
];

const isAuthenticated = () => {
  return !!store.state.auth.id;
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
