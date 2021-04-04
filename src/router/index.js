import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore",
    name: "Explore",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "explore" */ "../views/explore/"),
  },
  {
    path: "/direct",
    name: "Direct",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "direct" */ "../views/direct/"),
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile/"),
      children: [
        {
          path: "/",
          name: "ProfilePost",
          component: () =>
            import(/* webpackChunkName: "profilepost" */ "../views/profile/post"),
        },
        {
          path: "save",
          name: "ProfileSave",
          component: () =>
            import(/* webpackChunkName: "profilesave" */ "../views/profile/save"),
        },
        {
          path: "igtv",
          name: "ProfileIGTV",
          component: () =>
            import(/* webpackChunkName: "profileIGTV" */ "../views/profile/igtv"),
        },
        {
          path: "tag",
          name: "ProfileTag",
          component: () =>
            import(/* webpackChunkName: "profiletag" */ "../views/profile/tag"),
        },
      ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
