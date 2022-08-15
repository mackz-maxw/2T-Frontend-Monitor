import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index'

//网络请求api
// import ApiService from '@/service/api.service.js';
// ApiService.init();

import {useMonitor} from '../utils/monitor/index.js'
useMonitor();

createApp(App).use(router).mount('#app')
