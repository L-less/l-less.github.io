import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  '/',
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "how to visit github", icon: "pen-to-square", link: "cherry" },
      { text: "class-note-1", icon: "pen-to-square", link: "dragonfruit" },
    ],
  },
  {
    text: "Write",
    icon: "fa-pencil-square",
    prefix: "https://gitee.com/L-less/blog/new/main/src/posts",
  }
]);
