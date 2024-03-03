import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "l-less's blog",
      description: "--HELLO WORLD--",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "l-less的博客",
      description: "--HELLO WORLD--",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
