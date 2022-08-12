import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//网络请求api
import ApiService from '@/service/api.service.js';
ApiService.init();

createApp(App).mount('#app')
