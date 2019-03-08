const app = getApp()
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
	loadingData: { // navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },
  data: {
    top: 0,
    left: 0
  },
  lifetimes: {
    attached() {
      console.log('attached---')
      let _this = this
      wx.getSystemInfo({
        success: function (res) {
          console.log('res----', res)
          _this.setData({
            left: (res.windowWidth - 100) / 2,
            top: (res.windowHeight - 100) / 2
          })
        }
      })
    }
  },
  methods: {
    // 返回上一页面
    _navback() {
      console.log('点击了返回上一页')
      wx.navigateBack()
    },
    // 返回到首页
    _backhome() {
      console.log('点击了返回首页')
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  }

})
