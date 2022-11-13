import { createRouter, createWebHistory } from "vue-router";
import PlannerView from "../views/PlanningView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: PlannerView,
    },
  ],
});

export default router;
