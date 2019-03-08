// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    nvabarData: {
      // 设置为true，显示左侧按钮
      showCapsule: true,
      // 返回首页icon
      home: true,
      // 返回上一页icon
      back: false,
      // 中间文字
      title: '通用头部'
    },
    tipsData: {
      title: '我是首页的tips',
      icon: 'warn_light'
    },
    loadingData: {
      title: '加载中'
    },
    height: app.globalData.height * 2 + 25,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  onLoad: function () {}
})
