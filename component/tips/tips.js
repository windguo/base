const app = getApp()
Component({
	options: {
		addGlobalClass: true,
	},
	properties: {
		tipsData: {   //tipsData   由父页面传递的数据，变量名字自命名
			type: Object,
			value: {},
			observer: function (newVal, oldVal) { }
		}
	},
	data: {
		textData: [
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
			{
				nickName: "wang",
				reward: "2"
			},
		],
		StatusBar: app.globalData.StatusBar,
		CustomBar: app.globalData.CustomBar,
		height: '',
		//默认值  默认显示左上角
		tipsData: {
			showCapsule: 1
		}
	},
	attached: function () {
		// 获取是否是通过分享进入的小程序
		this.setData({
			share: app.globalData.share
		})
		// 定义导航栏的高度   方便对齐
		this.setData({
			height: app.globalData.height
		})
	},
	methods: {
		// 返回上一页面
		_navback() {
			wx.navigateBack()
		},
		//返回到首页
		_backhome() {
			wx.switchTab({
				url: '/pages/index/index',
			})
		}
	}

}) 