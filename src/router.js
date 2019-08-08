import Vue from "vue";
import Router from "vue-router";
import progressBar from "@/plugins/progressBar";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Axios from "axios";
import Cookies from "js-cookie";

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
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/signup",
      name: "Sign Up",
      components: SignUp,
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
        import(
          /* webpackChunkName: "create-instance" */ "./views/create/Instance.vue"
        )
    },
    {
      path: "/instance/:id",
      name: "instance",
      component: () => import("./views/instance/item.vue")
    },
  ]
});

const validateSession = async () => {
  try {
    const sid = Cookies.get("sid");
    if (!sid) {
      return false;
    }
    const req = await Axios.get("https://api.cloud.robotmafia.io/billing", {
      params: {
        out: "bjson",
        auth: sid,
        func: "desktop"
      }
    });
    if (req.data.error) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    console.error(e);
  }
};

// router.beforeEach(async (to, from, next) => {
//   const sessionValid = await validateSession();
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !sessionValid) next("login");
//   else if (!requiresAuth && sessionValid) next("home");
//   else next();
// });

router.beforeResolve((to, from, next) => {
  // if (to.name) {
  //   progressBar.start();
  // }
  next();
});

router.afterEach((to, from) => {
  // progressBar.done();
});

export default router;
