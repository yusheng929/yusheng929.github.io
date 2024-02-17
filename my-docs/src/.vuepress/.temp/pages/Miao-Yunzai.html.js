import comp from "/root/my-docs/src/.vuepress/.temp/pages/Miao-Yunzai.html.vue"
const data = JSON.parse("{\"path\":\"/Miao-Yunzai.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"懒得写，先咕咕咕 \"},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"Miao-Yunzai.md\",\"excerpt\":\"<p>懒得写，先咕咕咕</p>\\n\",\"autoDesc\":true}")
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
