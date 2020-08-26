export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("./components/mainBody.vue"),
    },
  },
  {
    path: "/user",
    components: {
      default: () => import("./components/userProfile.vue"),
    },
  },
  {
    path: "/prayerlist/kgc",
    components: {
      default: () => import("./components/prayerList/kgc.vue"),
    },
  },
  {
    path: "/prayerlist/btgc",
    components: {
      default: () => import("./components/prayerList/btgc.vue"),
    },
  },
  {
    path: "/prayerlist/jbgc",
    components: {
      default: () => import("./components/prayerList/jbgc.vue"),
    },
  },
  {
    path: "/user",
    components: {
      default: () => import("./components/userProfile.vue"),
    },
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: "/" },
];
