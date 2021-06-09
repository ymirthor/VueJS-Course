<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <rud-result></rud-result>
        <rud-another-result></rud-another-result>
        <hr />
        <rud-counter></rud-counter>
        <rud-another-counter></rud-another-counter>
        <hr />
        <input type="text" v-model="value" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import rudCounter from "./components/Counter.vue";
import rudResult from "./components/Result.vue";
import rudAnotherResult from "./components/AnotherResult.vue";
import rudAnotherCounter from "./components/AnotherCounter.vue";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    },
  },
  components: {
    rudCounter,
    rudAnotherCounter,
    rudResult,
    rudAnotherResult,
  },
};
</script>

