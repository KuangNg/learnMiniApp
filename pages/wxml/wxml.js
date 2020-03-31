// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 52,
    moives: [
      ['雷神', "8分", "35元"],
      ['复仇者联盟', "9.3分", "40元"],
      ['超人', "8.6分", "38元"],
      ['海贼王', "9.5分", "30元"]
    ]
  },
  handleSwiteColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleCheck() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleAdd() {
    this.setData({
      score: this.data.score - 0 + 6
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000)
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