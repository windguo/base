// pages/start/start.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		height: wx.getSystemInfoSync().windowHeight,
		index:1,
		autoplay:true
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},
	onSlideChangeEnd: function (e) {
		var that = this;
		that.setData({
			index: e.detail.current + 1
		});
		console.log('vindexindex', this.data.index);
		if (this.data.index == 4){
			this.setData({
				//autoplay:false
			})
		}
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})