# Vue 3 + TypeScript + Vite前端监控系统
## 提交了网络请求相关api
·url设置在src/service/api.service.js的第11行

·“server response error: ”开头的console提示在src/service/interceptors.service.js的第25行


## 关于图表 
封装文件在\src\views\pages\bars的userPie，具体实践请参考\src\views\pages的perfomanceView.vue和\src\views\pages\bars的option.js文件
______
用法: 1）在script里 import MCharts from "@/components/MCharts/MCharts.vue";
      import { option1, option2 } from "自己的json";
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2）只需要去https://echarts.apache.org/examples/zh  (或类似的网站) 找到对应的JS代码，模仿json文件将网页提供的代码粘贴到JSON文件里面即可，注意!如有option={}以外的(i.e. var value = 7)  一般放在最上面   
       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3)  在要插入的地方 输入类似 ```<HelloEcharts :option="option" />``` 具体实现与script相结合
      <br>
      <hr>

     
##  重要！！！
   如果图没有正常加载等待修复resize bug即可
## ScoreCircle（百分比圆）

```html
 <ScoreCircle :score="10" :green="80" :warn="65" :border-size=".3rem" :show-bg="true" style="fontSize:3rem" ></ScoreCircle>
```

`score`:中间显示的分数，区间[0,100]

`green`:显示为绿色良好的阈值，`score`低于`green`显示黄色警告，默认85

`warn`:显示为黄色警告的阈值，`score`低于`green`显示红色危险，默认60

`border-size`:控制边框一圈的粗细，默认`.3rem`

`show-bg`:控制背景色的显示，默认`true`

* 对组件的属性如`style`、`class`会附加在组建中间的数字上，可自定义数字样式
* 组件的大小由父容器的宽度决定，自适应为正圆形，因此如果父容器高度小于宽度，会出现组件超出容器的情况
* 使用可见`/test/js`页面

## MDropDown（带名称下拉框）组件

<MDropDown name="下拉3" @select="tapselect" :menu-list="menuList"></MDropDown>
      
`name`:下拉框名称，显示在下拉框前
`select`:下拉选择事件，返回`menu-list`绑定的数据中选择的`item`
`menu-list`:下拉框绑定的列表
* 使用可见首页