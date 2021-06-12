<template>
  <div class="p-2 col-sm-6 col-md-4">
    <div class="card w-100">
      <div class="card-body">
        <h3 class="card-title">
          {{ stock.name }}
          <small class="text-muted">Price: {{ stock.price | currency }} </small>
        </h3>
        <div class="d-flex">
          <input
            type="number"
            class="form-control me-2"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ 'border border-danger': insufficientFunds }"
          />
          <button
            class="btn text-nowrap"
            :class="{
              'btn-success': !insufficientFunds,
              'btn-danger': insufficientFunds,
            }"
            @click="buyStock"
            :disabled="quantity <= 0 || isNaN(quantity) || insufficientFunds"
          >
            {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: Object,
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters["portfolio/funds"];
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("stocks/buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style>
</style>