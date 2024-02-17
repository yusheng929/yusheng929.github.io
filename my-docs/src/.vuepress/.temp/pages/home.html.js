import comp from "/root/my-docs/src/.vuepress/.temp/pages/home.html.vue"
const data = JSON.parse("{\"path\":\"/home.html\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"https://theme-hope-assets.vuejs.press/logo.svg\",\"heroText\":\"你博客的名称\",\"heroFullScreen\":true,\"tagline\":\"你可以在这里放置你的口号与标语\",\"description\":\"footer: 自定义你的页脚文字 \"},\"headers\":[],\"readingTime\":{\"minutes\":0.17,\"words\":51},\"filePathRelative\":\"home.md\",\"excerpt\":\"<p>footer: 自定义你的页脚文字</p>\\n\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
