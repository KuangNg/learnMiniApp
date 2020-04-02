// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    isshow:true
  },
  hanleIsShow(){
    this.setData({
      isshow: !this.data.isshow
    })
  },
  handleAdd(event){
    console.log(event);
    
    this.setData({
      current:this.data.current+1
    })
  },
  handleTabClick(event){
    console.log(event);
    
  },
  handleAddClick(){
    // 获取组件对象，通过组件的  id/class
    // 每个组件中都有  this.selectComponent("class/id")
    var my_sel = this.selectComponent("#mySel-id")
    console.log(my_sel);

    // 在页面中通过组件对象来修改 组件数组
    // 第一种方式 
    // my_sel.setData({
    //   current:my_sel.data.current +20
    // })


    // 第二种方式 使用组件中的方法 进行修改，工作中经常使用
    my_sel.incremental(10)
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