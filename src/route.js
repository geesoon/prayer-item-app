import renderPrayer from "./components/renderPrayer.vue";

export const routes = [
  {
    path: "/",
    name: "main",
    components: {
      default: renderPrayer,
    },
  },
  { path: "/redirect-me", redirect: { name: "home" } },
  { path: "*", redirect: "/" },
];
