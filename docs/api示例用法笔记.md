# Vuejs api示例用法笔记
> 记录碰到的查阅的vuejs api,进行标记,以表示自己的熟练度,其实这很需要一个工具


## 2015 1123

### 过滤器 debounce
> http://cn.vuejs.org/api/#debounce
```
//延迟500毫秒
<input @keyup="onKeyup | debounce 500">
```

