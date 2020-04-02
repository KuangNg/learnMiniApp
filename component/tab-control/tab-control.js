// component/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textval: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentActive: 0
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      // console.log(event);
      // console.log(this.properties.textval);//["衣服", "裤子", "帽子"]
      
// 1.获取传入的index
      var index = event.currentTarget.dataset.index
// 2.改变记录的currentIndex
      this.setData({
        currentActive:index
      })
      // 3.发出自定义事件
      this.triggerEvent("textclick",{index,value:this.properties.textval[index]},{})
    }
  }
})