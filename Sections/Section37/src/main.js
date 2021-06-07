import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://subtle-isotope-316123-default-rtdb.europe-west1.firebasedatabase.app/';
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method == 'POST') req.method = 'PUT';
  next(res => {
    res.json = () => ({messages: res.body})
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
