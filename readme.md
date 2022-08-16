# Vue 3 + TypeScript + Vite前端监控系统  
## 提交了网络请求相关api  
·url设置在src/service/api.service.js的第11行<br>
·“server response error: ”开头的console提示在src/service/interceptors.service.js的第25行  
## 提交了前端页面框架（包括导航栏src/components/Nav.vue和菜单src/components/CustomSlider.vue）  
·index.html是加载动画，vue会自动跳转到加载的src/App.vue（App.vue里不能添加样式，否则自动跳转会失效）<br>
·所有样式都在src/index.css<br>
·导航栏和菜单固定，计划通过主页面（App.vue）的router-view标签与菜单tab的单击事件绑定实现页面跳转<br>
·后续页面创建后，计划添加至router-view的component，页面再创建子component添加图表、表格等<br>
