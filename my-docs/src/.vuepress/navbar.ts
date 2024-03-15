import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "laptop-code",
    prefix: "./README.md",
    link: "/",
  },
  {
    text: "公共QSign文档",
    icon: "laptop-code",
    prefix: "./QSign.md",
    link: "/QSign",
  },
  {
    text: "联系方式",
    icon: "laptop-code",
    link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=nmgX9UiuKJD1J_jZBmH7VftZ69iBkh5i&authKey=ElhhVv0EjlO2cj%2Bpys%2BymALb1xSeyl95G79hVT6GIgd8asQVnoGiuDXlcdAsXAEj&noverify=0&group_code=595480404",
  },
]);
