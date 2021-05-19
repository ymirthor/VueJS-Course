new Vue({
	el: '#app',
	data: {
  	counter: 0,
  	secondCounter: 0
  },
  computed: { // Computed analyzes the methods and is not executed unless variables that are 
              // relevant are changed.
    output: function() {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: { // Not as optimized as computed but useful when doing async since that is not
           // possible with computed.
    counter: function(value) {
      var vm = this; // this is to make data availble in the closure below
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: { // Methods however are executed every time. This is why computed are 
             // is often the way to go
    result: function() {
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  }
})