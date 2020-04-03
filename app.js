const TOKEN = "token"

App({
  // 对象：对象是存放在内存中，小程序关闭掉，对象也会销毁
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2.判断token是否有值
    if (token && token.length !== 0) {
      // 已经有token,验证token是否过期
      this.check_token(token) //验证token是否过期
    } else {
      // 没有token ，进行登录操作
      this.login()
    }
  },
  // 验证 操作
  check_token(token) {
    console.log("执行了验证token操作");
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "POST",
      header: {
        token
      },
      success:  (res) => {
        if (!res.data.errCode) {
          this.globalData.token = token
        }else{
          this.login()
        }

      },
      fail: function (res) {
        console.log(res);

      }

    })
  },
  // 登录 操作
  login() {
    console.log("执行了登录操作");

    wx.login({
      complete: (res) => {
        // 1.获取code
        const code = res.code;

        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            //  1.取出token
            const token = res.data.token;
            // 2.将token保存在globalData中
            this.globalData.token = token;

            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)

          }
        })
      },
    })
  }
})