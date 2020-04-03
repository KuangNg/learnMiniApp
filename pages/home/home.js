// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // <!-- 显示消息提示框 -->
  handleShowToast() {
    wx.showToast({
      title: '这是toast',
      icon: "loading",
      mask: true,
      duration: 1500,
      success: (res) => {
        console.log("接口调用成功的回调函数");

      },
      fail: function (error) {
        console.log("接口调用失败的回调函数");

      },
      complete: function () {
        console.log("接口调用结束的回调函数（调用成功、失败都会执行）");

      }
    })
  },
  // 显示模态对话框
  handleShowModal() {
    wx.showModal({
      title: "是否确定",
      cancelColor: "red",
      content: "这是一个模态框",
      success: function (res) {
        console.log(res);
        if (res.cancel) {
          console.log("点击了取消按钮");

        }
        if (res.confirm) {
          console.log("点击了确定按钮");

        }
      }
    })
  },
  // 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(() => {
      wx.hideLoading({
        complete: (res) => {
          console.log(res)
        },
      })
    }, 1000)
  },
  // 显示操作菜单
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ["相机", "相册"],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function (options) {
    return {
      title: "hi,小程序",
      imageUrl: "../../assets/tarBar/207a202aead6d53a468fbdfc430cca17.jpeg",
      path:"/pages/about/about"
    }
  }
})