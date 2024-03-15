import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '帮助文档',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    plugins: {
      mdEnhance: {
      align: true,
      alert: true,
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
      comment: {
       provider: "Waline",
       serverURL: "https://pinglun.botqsign.icu",
     },
    },

    navbar: [
    {
        text: "首页",
        link: "/",
        icon: "home",
        activeMatch: "^/",
      },
      {
    text: "联系方式",
    icon: "laptop-code",
    link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=nmgX9UiuKJD1J_jZBmH7VftZ69iBkh5i&authKey=ElhhVv0EjlO2cj%2Bpys%2BymALb1xSeyl95G79hVT6GIgd8asQVnoGiuDXlcdAsXAEj&noverify=0&group_code=595480404",
  },
    ],
  }),

  bundler: viteBundler(),
})
