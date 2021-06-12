<template>
  <div>
    <h3 v-if="stockPortfolio.length === 0">You have no stocks</h3>
    <rud-stock
      v-for="stock in stockPortfolio"
      v-bind:key="stock.id"
      class="d-inline-flex justify-content-center flex-fill"
      :stock="stock"
    ></rud-stock>
  </div>
</template>

<script>
import rudStock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("portfolio", ["stockPortfolio"]),
  },
  components: {
    rudStock,
  },
};
</script>

<style>
</style>