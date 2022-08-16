import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
const srcPath = path.resolve(__dirname, 'src');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
	alias: [
		{ find: '@', replacement: srcPath },
	],
},
  server: {
		port: 8080,
		proxy: {
			'/upload': {
				target: ' http://monitor-api.twotomatoes.org.cn:10086', // 日志服务器  
				changeOrigin: true
			},
			[`${loadEnv('production', process.cwd()).VITE_APP_BASE_API}`]: {
				target: ' http://monitor-api.twotomatoes.org.cn:10086', // 目标服务  
				changeOrigin: true
			},
			[`${loadEnv('development', process.cwd()).VITE_APP_BASE_API}`]: {
				target: ' http://monitor-api.twotomatoes.org.cn:10086', // 目标服务  
				changeOrigin: true
			}
		}
	}
})
