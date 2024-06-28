import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({

  lang: "zh-CN",
  title: "⭕💰跑路",
  description: "⭕你的💰💰，然后跑路",

  theme: hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "瑜笙",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://api.botqsign.icu/logo",

  repo: "yusheng929/yusheng929.github.io",

  docsDir: "my-docs/src",

  navbar: [
  {
    text: "首页",
    icon: "laptop-code",
    link: "/",
    activeMatch: "^/$",
  },
  {
    text: "公共QSign文档",
    icon: "laptop-code",
    link: "/qsign.md",
    activeMatch: "^/qsign",
  },
  {
    text: "模块下载",
    icon: "laptop-code",
    link: "http://mk.botqsign.icu",
  },
  {
    text: "友情链接",
    icon: "laptop-code",
    link: "/link.md",
    activeMatch: "^/link",
  },
  {
    text: "联系方式",
    icon: "laptop-code",
    link: "https://t.me/quanqianpaolu",
  },
  ],
  sidebar: [
  {
    text: "首页",
    icon: "laptop-code",
    link: "/",
    activeMatch: "^/$",
  },
  {
    text: "公共QSign文档",
    icon: "laptop-code",
    link: "/qsign.md",
    activeMatch: "^/qsign",
  },
  {
    text: "联系方式",
    icon: "laptop-code",
    link: "https://t.me/quanqianpaolu",
  },
  ],

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "签名提供者之一",
    intro: "/intro.html",
    medias: {
      Telegram: "https://t.me/quanqianpaoluyuanshenjiaoliuqun",
      Gitee: "https://gitee.com/theqingyao",
      GitHub: "https://github.com/yusheng929",
    },
  },
  
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  
  plugins: {
    blog: true,
     comment: {
       provider: "Waline",
       serverURL: "https://pinglun.botqsign.icu",
     },

    components: {
      components: ["Badge", "VPCard"],
    },
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
}),
});
