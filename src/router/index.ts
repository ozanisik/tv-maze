import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainPage from "../views/main-page/MainPage.vue";
import DetailPage from "../views/detail-page/DetailPage.vue";
import { RouteName } from "./RouteName";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteName.MainPage,
    component: MainPage,
  },
  {
    path: "/detail-page/:show_id",
    name: RouteName.DetailPage,
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
