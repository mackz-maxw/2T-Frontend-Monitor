<<<<<<< HEAD
//引入axios拦截器
import axios from "@/service/interceptors.service";

const ApiService = {

  //创建不同的网络请求方法
  get(resource, slug = "", params,headers) {
    return axios
    .get(`${resource}/${slug}`, { params,headers})
    .catch(error => {
      throw error.response;
    });
  },

  post(resource, params, headers) {
    return axios
    .post(`${resource}`, params, {headers})
    .catch(error => {
      throw error.response;
    });
  },

  patch(resource, params, slug = "",headers) {
    return axios
    .patch(`${resource}/${slug}`, params,{headers})
    .catch(error => {
      throw error.response;
    });
  },

  put(resource, params, slug = "",headers) {
    return axios
    .put(`${resource}/${slug}`, params,{headers})
    .catch(error => {
      throw error.response;
    });
  },

  delete(resource, params, slug = "",headers) {
    return axios
      .delete(`${resource}/${slug}`, { params ,headers})
      .catch(error => {
        throw error.response;
      });
  }
};

=======
//引入axios拦截器
import axios from "@/service/interceptors.service";

const ApiService = {

  //创建不同的网络请求方法
  get(resource, slug = "", params,headers) {
    return axios
    .get(`${resource}/${slug}`, { params,headers})
    .catch(error => {
      throw error.response;
    });
  },

  post(resource, params, headers) {
    return axios
    .post(`${resource}`, params, {headers})
    .catch(error => {
      throw error.response;
    });
  },

  patch(resource, params, slug = "",headers) {
    return axios
    .patch(`${resource}/${slug}`, params,{headers})
    .catch(error => {
      throw error.response;
    });
  },

  put(resource, params, slug = "",headers) {
    return axios
    .put(`${resource}/${slug}`, params,{headers})
    .catch(error => {
      throw error.response;
    });
  },

  delete(resource, params, slug = "",headers) {
    return axios
      .delete(`${resource}/${slug}`, { params ,headers})
      .catch(error => {
        throw error.response;
      });
  }
};

>>>>>>> ede040898ede27acfabcd414bc62cc44597544f6
export default ApiService;