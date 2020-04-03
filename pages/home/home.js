// pages/home/home.js
import request from '../../server/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    // 1. 原生的网络请求调用
    this.get_data_orgin()
    // 2.利用pormise 封装
    request({
      url: "http://httpbin.org",
      method:"Get",
      data:{
        name:"张三"
      }
    }).then(res => {
      console.log(res);

    }).catch(err => {
      console.log(err);

    })
  },
  get_data_orgin() {
    // 网络请求
    // get 请求 ，并且传递参数
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   data:{
    //     name:"bote"
    //   },
    //   success:function(res){
    //     console.log(res);

    //   }
    // })
    // post 请求 并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:"POST",
    //   data:{
    //     page:2
    //   },
    //   success:function(res){
    //     console.log(res);

    //   },
    //   fail:function(err){
    //     console.log(err);

    //   }
    // })
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