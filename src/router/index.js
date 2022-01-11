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
      {
        path: "add-category",
        name: "AddCategory",
        component: () => import("@/views/AddCategory"),
      },
      {
        path: "add-product",
        name: "AddProduct",
        component: () => import("@/views/AddProduct"),
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
    path: "/basket",
    name: "Basket",
    component: () => import("@/views/Basket"),
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

router.beforeEach((to, from, next) => {
  const notAuthReqired = ["AuthLogin"];
  if (notAuthReqired.includes(to.name)) {
    next();
  } else {
    store
      .dispatch("auth/getInfo")
      .then(() => {
        next();
      })
      .catch(() => {
        next({
          name: "AuthLogin",
        });
      });
  }
});

export default router;
