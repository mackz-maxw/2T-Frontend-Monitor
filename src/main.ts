import { createApp } from 'vue'
import './style.scss'
import './index.css'
import App from './App.vue'
import router from './router/index'

//网络请求api
import ApiService from '@/service/api.service.js';


import {useMonitor} from '../utils/monitor/index.js'
useMonitor();

const app=createApp(App);
app .use(router)
    .mount('#app')
