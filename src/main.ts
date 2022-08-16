import { createApp } from 'vue'
// import './style.scss'
// import './index.css'
import App from './App.vue'
import router from './router/index'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
// //网络请求api
// import ApiService from '@/service/api.service.js';


// import {useMonitor} from '../utils/monitor/index.js'
// useMonitor();

// const app=createApp(App);
// app .use(router)
//     .mount('#app')
