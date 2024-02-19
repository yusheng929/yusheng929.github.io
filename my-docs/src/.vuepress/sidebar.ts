import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "公共QSign",
      icon: "laptop-code",
      prefix: "README.md",
      link: "/",
      children: "structure",
    },
    {
      text: "配置Miao-Yunzai",
      icon: "laptop-code",
      prefix: "./yunzai.md",
      link: "/yunzai",
      children: "structure",
    },
  ],
});
