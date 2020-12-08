import Vue from "vue";
import VueRouter from "vue-router";
import DeveloperList from "../views/DeveloperList";
import DeveloperCreate from "../views/DeveloperCreate";
import DeveloperShow from "../views/DeveloperShow";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: {
      name: "DeveloperList",
    },
  },
  {
    path: "/developers",
    name: "DeveloperList",
    component: DeveloperList,
  },
  {
    path: "/developers/create",
    name: "DeveloperCreate",
    component: DeveloperCreate,
  },
  {
    path: "/developers/show",
    name: "DeveloperShow",
    component: DeveloperShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
