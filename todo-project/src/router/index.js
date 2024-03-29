import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
  path: "/register",
  name: "Register",
  component: () =>
    import("../components/Register.vue"),
},
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../components/Login.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
