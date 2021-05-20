let cmp = {
  data: function () {
    return {
      status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }}<button @click="changeStatus">Change status</button></p>',
  methods: {
    changeStatus: function () {
      this.status = 'OK'
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'rud-cmp': cmp
  }
});

new Vue({
  el: '#app2'
});

// This is how to set it up globally
// Vue.component('rud-cmp', { ... })