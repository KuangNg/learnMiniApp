// component/my-event/my-event.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {

      },
      // -------------组件中监听生命周期函数-----------
      // 1.监听所在页面的生命周期
      pageLifetimes: {
        show() {
          console.log("监听组件所在页面显示出来时");
        },
        hide() {
          console.log("监听组件爱你所在页面隐藏起来时");

        },
        resize() {
          console.log("监听页面尺寸的改变");

        }
      },

      // 2.监听组件本身的生命周期
      lifetimes: {
        created() {
          console.log("组件被创建");

        },
        attached() {
          console.log("组件被添加到页面中");

        },
        ready() {
          console.log("组件被渲染出来");

        },
        moved() {
          console.log("组件被移动到节点树另一个位置");

        },
        detached() {
          console.log("组件被移除掉");

        }
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
          handleAdd() {
            // console.log("---------");
            // 通过triggerEvent方法 连接外界触发组件的事件
            this.triggerEvent("add", {
              name: "我是组件的值"
            }, {})
          }
        }
      })