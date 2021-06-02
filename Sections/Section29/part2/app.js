let data = {
  status: 'Critical'
}

Vue.component('rud-cmp', {
  data: function () {
    return data;
  },
  template: '<p>Server Status: {{ status }}<button @click="changeStatus">Change status</button></p>',
  methods: {
    changeStatus: function () {
      this.status = 'Oh no bad'
    }
  }
});

new Vue({
  el: '#app'
});
