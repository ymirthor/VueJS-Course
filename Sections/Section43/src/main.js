import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://subtle-isotope-316123-default-rtdb.europe-west1.firebasedatabase.app';


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
