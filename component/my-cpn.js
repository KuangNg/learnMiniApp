// component/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // pageLifetimes:{
  //   show: function() {
  //     // 页面被展示
  //     console.log("页面显示完成");
      
  //   },
  //   hide: function() {
  //     // 页面被隐藏
  //     console.log("页面被隐藏");
  //   },
  //   resize: function(size) {
  //     // 页面尺寸变化
  //     console.log("页面尺寸变化");
      
  //   }
  // },
  lifetimes:{
    lifetimes: {
      attached:function(){
        // 在组件实例进入页面节点树时执行
        console.log("在组件实例进入页面节点树时执行");
        
      },
      detached: function() {
        // 在组件实例被从页面节点树移除时执行
        console.log("在组件实例被从页面节点树移除时执行");
        
      },
    },
    // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log("在组件实例进入页面节点树时执行");
      
    },
    error:function(error){
      console.log(error);
      
    }

  }
})
