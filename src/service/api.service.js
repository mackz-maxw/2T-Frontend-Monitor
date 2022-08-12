import Vue from "vue";
//引入axios拦截器
import axios from "@/service/interceptors.service";
import VueAxios from "vue-axios";

const ApiService = {
  //初始化方法用vue-axios组件
  init() {
    Vue.use(VueAxios, axios);
    //设置api的baseURL
    Vue.axios.defaults.baseURL = "https://127.0.0.1:3000";
  },
   
  //创建不同的网络请求方法
  get(resource, slug = "", params) {
    return Vue.axios.get(`${resource}/${slug}`, { params }).catch(error => {
      throw error.response;
    });
  },

  post(resource, params, config) {
    return Vue.axios.post(`${resource}`, params, config).catch(error => {
      throw error.response;
    });
  },

  patch(resource, params, slug = "") {
    return Vue.axios.patch(`${resource}/${slug}`, params).catch(error => {
      throw error.response;
    });
  },

  put(resource, params, slug = "") {
    return Vue.axios.put(`${resource}/${slug}`, params).catch(error => {
      throw error.response;
    });
  },

  delete(resource, params, slug = "") {
    return Vue.axios
      .delete(`${resource}/${slug}`, { data: params })
      .catch(error => {
        throw error.response;
      });
  }
};

export default ApiService;