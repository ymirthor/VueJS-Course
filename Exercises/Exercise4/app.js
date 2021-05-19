new Vue({
  el: '#exercise',
  data: {
    effectClasses: { 
      highlight: true, 
      shrink: false 
    },
    big: "big",
    className: "red",
    shape: "wide",
    isYellow: true,
    myStyle: {
      backgroundColor: "red",
      height: "100px",
      width: "100px"
    },
    progressBar: {
      height: "20px",
      backgroundColor: "black",
      width: "10px"
    }
  },
  methods: {
    startEffect: function() {
      vm = this;
      setInterval(function() {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
      vm = this;
      let progress = 10;
      let increment = 120
      setInterval(function() {
        progress += increment;
        increment = increment <= 0 ? 0 : increment / 2;
        vm.progressBar.width = progress + 'px';
      }, 500);
    }
  }
});
