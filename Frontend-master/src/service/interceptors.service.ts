import axios from "axios";

const interceptor = axios.create({
  headers:{
    'Content-Type':'application/json;charset=utf-8'
  },
  baseURL:import.meta.env.VITE_APP_BASE_API
});

//request拦截器
interceptor.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

//response拦截器
interceptor.interceptors.response.use(
    //成功
   function(response) {
     return response.data;
   },
   //错误
   //TODO: 定义error码
   function(error) {
    console.error('server response error: ' + error);
     return Promise.reject(error);
   }
 );

 export default interceptor;