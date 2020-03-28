// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"kuang",
      students:[
        {id:1,age:18,name:'kobe'},
        {id:2,age:16,name:'bike'},
        {id:3,age:18,name:'bulav'},
        {id:4,age:19,name:"miko"},
      ],
      count:0
  },
  handAdd(){
    // console.log("按钮点击了");
    //1. 错误的做法：界面是不会刷新
    // this.data.count += 1
    //2.this.setData
    this.setData({
      count : this.data.count+1
    })
    
  },
  handSub(){
    this.setData({
      count: this.data.count-1
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
  onShareAppMessage: function () {

  }
})