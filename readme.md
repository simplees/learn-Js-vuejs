# learn-vuejs
> 我学习vuejs的过程、思考、与Demo记录

## 先把官网教程看一遍,跟着做些简单的demo
> [地址:http://cn.vuejs.org/guide/index.html](http://cn.vuejs.org/guide/index.html)

* 1. 下载安装vuejs
```
npm install vue
//在用 Vue.js 构建大型应用时推荐使用 NPM 安装，NPM 能很好地和诸如 Webpack 或 Browserify 的 CommonJS 模块打包器配合使用。Vue.js 也提供配套工具来开发单文件组件。

``

* 数据绑定
```
v-text="message" 或者 {{ message }}

new Vue(
    el:'#app' //绑定作用域
    data: {
        message:'Hello Vuejs'
    }
)

````

* 双向绑定
```
即将v-text 和v-model同时设置
```

* 渲染列表用v-for
```
<div id="#app"> //作用域
<ul>
    <li v-for = 'todo in todos'>
        {{todo.text}}
    </li>
</ul>
</div>


new Vue({
    el: '#app',
    data: {
        todos:[
        { text: 'learn1'},
        { text: '2'},
        { text: '3' }
    ]
}

})

```

* 处理用户输入 v-on:click = 'method'
```
v-on:click = 'msg'

new Vue({
    el: '#app',
    data:{
    msg: 'hello'
},
methods:{
    msg: function () {
    this.msg = this.msg.split('').reverse().join('')
}

}
})
```

* 综合示例
<div id = "app">





