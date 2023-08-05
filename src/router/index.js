import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_TILTLE),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TILTLE}/${to.name}`;
  next();
});
export default router;
