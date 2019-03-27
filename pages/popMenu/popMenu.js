Page({
	data: {
		isPopping: false,//是否已经弹出
		animPlus: {},//旋转动画
		animCollect: {},//item位移,透明度
		animTranspond: {},//item位移,透明度
		animInput: {},//item位移,透明度
	},
	//点击弹出
	plus: function () {
		if (this.data.isPopping) {
			//缩回动画
			this.popp();
			this.setData({
				isPopping: false
			})
		} else if (!this.data.isPopping) {
			//弹出动画
			this.takeback();
			this.setData({
				isPopping: true
			})
		}
	},
	input: function () {
		console.log("input")
	},
	transpond: function () {
		console.log("transpond")
	},
	collect: function () {
		console.log("collect")
	},
	//弹出动画
	popp: function () {
		//plus顺时针旋转
		var animationPlus = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		var animationcollect = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		var animationTranspond = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		var animationInput = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		animationPlus.rotateZ(180).step();
		animationcollect.translate(-20, -60).rotateZ(180).opacity(1).step();
		animationTranspond.translate(-70, 0).rotateZ(180).opacity(1).step();
		animationInput.translate(-20, 60).rotateZ(180).opacity(1).step();
		this.setData({
			animPlus: animationPlus.export(),
			animCollect: animationcollect.export(),
			animTranspond: animationTranspond.export(),
			animInput: animationInput.export(),
		})
	},
	//收回动画
	takeback: function () {
		//plus逆时针旋转
		var animationPlus = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		var animationcollect = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		var animationTranspond = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		var animationInput = wx.createAnimation({
			duration: 200,
			timingFunction: 'ease-out'
		})
		animationPlus.rotateZ(0).step();
		animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
		animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
		animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
		this.setData({
			animPlus: animationPlus.export(),
			animCollect: animationcollect.export(),
			animTranspond: animationTranspond.export(),
			animInput: animationInput.export(),
		})
	}
})