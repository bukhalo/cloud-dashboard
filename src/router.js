import Vue from "vue";
import Router from "vue-router";
import progressBar from "@/plugins/progressBar";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/instances",
      name: "Инстансы",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "instances" */ "./views/Instances.vue")
    },
    {
      path: "/create/instance",
      name: "Создать новый инстанс",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "create-instance" */ "./views/create/Instance.vue")
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    progressBar.start();
  }
  next();
});

router.afterEach((to, from) => {
  progressBar.done();
});

export default router;
