// pages/touch/touch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:["衣服","食品","生活用品"]
  },
  // event为事件触发详情
  handleTouchStart(event) {
    console.log("handleTouchStart", event);

  },
  handleTouchMove() {
    console.log("handleTouchMove");

  },
  handleTouchEnd() {
    console.log("handleTouchEnd");

  },
  // handleTap 和handleLongTap  两者中不可能同时触发，handleTap在350ms之前触发，和handleLongTap在350ms之后触发
  handleTap(event) {
    console.log("handleTap-----", event);
  },
  handleLongTap() {
    console.log("handleLongTap");
  },
  handleOuter(event) {
    console.log(event);

  },
  handleInner(event) {
    console.log(event);

  },
  // 获取内容
  handleClick(event) {
    console.log(event);
    var result =  event.currentTarget.dataset
    var name = result.item
    var i = result.index
    console.log(name,i);
    
  },
  handleCaptureView1() {
    console.log("handleCaptureView1");

  },
  handleBindView1(){
    console.log("handleBindView1");
    
  },
  
  handleCaptureView2() {
    console.log("handleCaptureView2");

  },
  handleBindView2(){
    console.log("handleBindView2");
    
  },
  handleCaptureView3() {
    console.log("handleCaptureView3");

  },
  handleBindView3(){
    console.log("handleBindView3");
    
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