import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import router from './router/index'

import {useMonitor} from '../utils/monitor/index.js'
useMonitor();
createApp(App).use(router).mount('#app')

