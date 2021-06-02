new Vue({
	el: '#app',
  data: {
    color: 'green',
    width: 100
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})