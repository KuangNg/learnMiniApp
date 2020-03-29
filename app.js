// 注册一个小程序
// 生命周期
App({
  // 小程序初始化完成时
  onLaunch: function () {
    // console.log("小程序初始化完成时:onlaunch");
    // 获取用户信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
      }
    })
  },
  // 小程序显示出来时
  onShow: function (options) {
    // options 是展示首页的详细  scene为用什么方式打开的小程序，官网中有对应的数字
    //     {scene: 1001, path: "pages/home/home", query: {…}}
    // path: "pages/home/home"
    // query: {}
    // scene: 1001
    // __proto__: Object
    console.log(options);
  },
  // 小程序隐藏时
  onHide: function () {

  },
  // 小程序产生一些错误
  onError: function (msg) {

  },
  globalData:{
    name:"mm",
    age:18
  }
})