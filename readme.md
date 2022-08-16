# Vue 3 + TypeScript + Vite前端监控系统
## 提交了网络请求相关api
·url设置在src/service/api.service.js的第11行

·“server response error: ”开头的console提示在src/service/interceptors.service.js的第25行


## 关于图表 
封装文件在\src\views\pages\bars的userPie，具体实践请参考\src\views\pages的perfomanceView.vue和\src\views\pages\bars的option.js文件
______
用法: 1）在script里 import HelloEcharts from "./bars/userPie.vue";
      import { option1, option2 } from "./bars/option";
      <br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2）只需要去https://echarts.apache.org/examples/zh  (或类似的网站) 找到对应的JS代码，模仿json文件将网页提供的代码粘贴到JSON文件里面即可，注意!如有option={}以外的(i.e. var value = 7)  一般放在外面   
      <br>
      json 默认格式 export const option ={}
      
      
