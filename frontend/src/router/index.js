import { createRouter, createWebHistory } from "vue-router";
import CatsPage from "@/views/CatsPage";
import ContentPage from "@/views/ContentPage";

const routes = [
  {
    path: "/",
    name: "Cats",
    component: CatsPage,
  },
  {
    path: "/content",
    name: "SiteContent",
    component: ContentPage,
  },
  {
    path: "/cats/:alias",
    name: "cat",
    component: import("@/views/CatDetails"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
