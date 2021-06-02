Vue.component('rud-cmp', {
  data: function () {
    return data = {
      status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }}<button @click="changeStatus">Change status</button></p>',
  methods: {
    changeStatus: function () {
      this.status = 'OK'
    }
  }
});

new Vue({
  el: '#app'
});
