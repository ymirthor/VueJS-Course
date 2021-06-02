<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-onmy:click="increaseCounter">Increase!</button>
        {{ counter }}
        <br />
        <label>Type text here: </label>
        <input type="text" v-onmy:input="changeText" />
        <br />
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    onmy: {
      bind(el, binding, vnode) {
        if (typeof binding.value != "function")
          throw "expected to get passed in a function";

        el.addEventListener(binding.arg, binding.value);
      },
    },
  },
  data() {
    return {
      counter: 0,
      text: "",
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    changeText(event) {
      this.text = event.target.value;
    },
  },
};
</script>

<style>
</style>
