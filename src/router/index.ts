import { createRouter, createWebHashHistory } from 'vue-router'
import layout from "@/layout/index.vue";

export const publicRoutes = [
  // {
  //   path: "/",
  //   // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
  //   component: layout,
  //   // redirect: "/profile",
  //   children: [
  //     {
  //       path: "/404",
  //       name: "404",
  //       component: () => import("@/views/error-page/404"),
  //     },
  //     {
  //       path: "/401",
  //       name: "401",
  //       component: () => import("@/views/error-page/401"),
  //     },
  //   ],
  // },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
];

export const privateRoutes = [
  {
    path: "/",
    component: layout,
    meta: {
      title: "article",
      icon: "article",
    },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "articleRanking",
          icon: "article-ranking",
        },
      },
      // {
      //   path: "/article/:id",
      //   component: () => import("@/views/article-detail/index"),
      //   meta: {
      //     title: "articleDetail",
      //   },
      // },
      // {
      //   path: "/article/create",
      //   component: () => import("@/views/article-create/index"),
      //   meta: {
      //     title: "articleCreate",
      //     icon: "article-create",
      //   },
      // },
      // {
      //   path: "/article/editor/:id",
      //   component: () => import("@/views/article-create/index"),
      //   meta: {
      //     title: "articleEditor",
      //   },
      // },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...privateRoutes,...publicRoutes]
})

export default router
