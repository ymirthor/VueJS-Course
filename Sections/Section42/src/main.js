import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://subtle-isotope-316123-default-rtdb.europe-west1.firebasedatabase.app';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
