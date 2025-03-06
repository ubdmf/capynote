import { defineConfig } from "vitepress";
import { docsNav } from "../../src/utils/generateNavbar.mts";
import { sidebar } from "../../src/utils/generateSidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/capynote/",
  title: "午羊的记事本",
  description: "AI 时代的个人知识库",
  head: [["link", { rel: "icon", href: "/capynote/aibotlogo.ico" }]],
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: "deep",
    logo: "/aibotlogo.webp",
    search: {
      provider: "local", // 使用本地搜索
    },
    nav: docsNav,

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © capykyo 2023",
    },
  },
});
