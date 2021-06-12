<template>
  <div>
    <rud-stock
      v-for="stock in stocks"
      v-bind:key="stock.id"
      class="d-inline-flex justify-content-center flex-fill"
      :stock="stock"
    >
    </rud-stock>
  </div>
</template>

<script>
import rudStock from "./Stock.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    rudStock,
  },
  computed: {
    ...mapGetters("stocks", ["stocks"]),
  },
};
</script>

<style>
</style>