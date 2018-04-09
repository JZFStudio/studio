# Vue

### Vue实例

* el - 挂载的元素

    ```
    var data = { a: 1 }
    var vm = new Vue({
      el: '#example',
      data: data
    })
    vm.$data === data // -> true
    vm.$el === document.getElementById('example') // -> true
    // $watch 是一个实例方法
    vm.$watch('a', function (newVal, oldVal) {
      // 这个回调将在 `vm.a`  改变后调用
    })
    ```

    > 不要在实例属性或者回调函数中使用回掉函数，因为 this 指向的并不是 Vue 实例

* data - 每个 Vue 实例都会代理其 data 对象里所有的属性

    ```
    var data = { abc: 1 }
    var vm = new Vue{
        data: data
    };

    vm.abc === data.abc // true
    ```

* 生命周期

  * beforeCreate

  * created

  * beforeMount

  * mounted

  * beforeUpdate

  * updated

  * beforeDestroy

  * destroyed

### 核心基本功能

* v-model 表单数据绑定

    ```
    v-model="变量名“
    ```

    修饰符：

    * .lazy —— 在默认情况下， v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步
    * .number —— 如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值
    * .trim —— 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入

* v-bind  数据双向绑定

    ```
    v-bind:title="变量名"  //可缩写为:title="变量名"
    ```

    > 用 v-bind 绑定 class/style 时，可以直接跟键值对形式的对象，或类型为对象的变量名（在data里定义该变量），也可以跟多变量的数组（

* v-if    显示隐藏

    ```
    v-if="变量名（布尔值）"
    ```

    可以使用 v-else 指令来表示 v-if 的“else 块”：

    ```
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>
    ```

    > v-else 元素必须紧跟在 v-if 或者 v-else-if 元素的后面——否则它将不会被识别。

    v-else-if，顾名思义，充当 v-if 的“else-if 块”。可以链式地使用多次：

    ```
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    ```

    > 2.1.0 新增并且类似于 v-else，v-else-if 必须紧跟在 v-if 或者 v-else-if 元素之后。

* template

    把一个 \<template> 元素当做包装元素，并在上面使用 v-if。最终的渲染结果不会包含 \<template> 元素。

    ```
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    ```

* v-for   循环插入DOM

    ```
    v-for="item in list"
    ```

* v-on    绑定事件

    ```
    v-on:click="函数名" //可缩写为:@click="函数名"
    ```

    Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：

    ```
    <input v-on:keyup.13="submit">
    ```

    记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：

    ```
    <input v-on:keyup.enter="submit">
    <!-- 缩写语法 -->
    <input @keyup.enter="submit">
    ```

    全部的按键别名：

    * .enter
    * .tab
    * .delete (捕获 “删除” 和 “退格” 键)
    * .esc
    * .space
    * .up
    * .down
    * .left
    * .right

    可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

    ```
    // 可以使用 v-on:keyup.f1
    Vue.config.keyCodes.f1 = 112
    ```

* 组件

    ```
    Vue.component('组件名', {
        props: ['prop1', 'prop2'...],   //自定义属性
        template: '<span>组件示例</span><i>{{prop1}}'   //引用传入的自定义属性值
    })
    ```

    通过Vue构造器传入的各种选项大多数都可以在组件里用。 data 是一个例外，它必须是函数。 实际上，如果你这么做：

    ```
    Vue.component('my-component', {
      template: '<span>{{ message }}</span>',
      data: {
        message: 'hello'
      }
    })
    ```

    那么 Vue 会停止，并在控制台发出警告，告诉你在组件中 data 必须是一个函数。理解这种规则的存在意义很有帮助，让我们假设用如下方式来绕开Vue的警告：

    ```
    var data = { counter: 0 };
    data: function () {
        return data
      }
    ```

    由于组件共享了同一个 data ， 因此增加一个 counter 会影响所有组件！这不对。我们可以通过为每个组件返回全新的 data 对象来解决这个问题：

    ```
    data: function () {
      return {
        counter: 0
      }
    }
    ```

*  组件之间协同工作

    在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。

    * Prop -- 要让子组件使用父组件的数据，需要通过子组件的props选项。

        ```
        Vue.component('child', {
          // 声明 props
          props: ['message'],
          // 就像 data 一样，prop 可以用在模板内
          // 同样也可以在 vm 实例中像 “this.message” 这样使用
          template: '<span>{{ message }}</span>'
        })
        ```

        动态 Prop 用 v-bind

    * Prop 验证

        ```
        Vue.component('example', {
          props: {
            // 基础类型检测 （`null` 意思是任何类型都可以）
            propA: Number,
            // 多种类型
            propB: [String, Number],
            // 必传且是字符串
            propC: {
              type: String,
              required: true
            },
            // 数字，有默认值
            propD: {
              type: Number,
              default: 100
            },
            // 数组／对象的默认值应当由一个工厂函数返回
            propE: {
              type: Object,
              default: function () {
                return { message: 'hello' }
              }
            },
            // 自定义验证函数
            propF: {
              validator: function (value) {
                return value > 10
              }
            }
          }
        })
        ```

### 构建

默认 NPM 包导出的是运行时构建。为了使用独立构建，在 webpack 配置中添加下面的别名：

```
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
}
```

对于 Browserify，可以添加一个别名到 package.json 中：

```
"browser": {
  "vue": "vue/dist/vue.common"
}
```

链接：

[Vue官网](https://vuejs.org/)

[Vue中文官网](https://cn.vuejs.org/)

[Vue-GitHub](https://github.com/vuejs/vue)

### 开发过程中遇到的问题及解决方案

* 页面渲染完成时调用某些方法

    修改数据后调用 this.$nextTick，首次加载时在 mounted 函数里面调用 this.$nextTick

    ```
    this.$nextTick(function(){
        //DOM已更新
    })
    ```

* 如何实现在函数中触发路由跳转

    ```
    this.$router.push({path:'路由'});
    ```

