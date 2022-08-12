import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

//网络请求api
import ApiService from '@/service/api.service.js';
ApiService.init();

createApp(App).mount('#app')
