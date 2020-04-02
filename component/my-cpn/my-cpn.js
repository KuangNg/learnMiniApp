// component/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textval: {
      type: String,
      value: "我是默认值",
      observer: function (newVal , oldVal) {
          console.log(newVal,oldVal);        
      }
    },

  },
  // 为组件添加样式
  externalClasses:["textstyle"],
  options: {
    // 设置组件和页面是否互相影响   apply-shared ：不影响 
    // styleIsolation:"shared"
  },
  /**
   * 组件的初始数据
   */
  data: {
    title: "我是标题"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})