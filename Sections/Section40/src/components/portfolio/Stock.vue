<template>
  <div class="p-2 col-sm-6 col-md-4">
    <div class="card w-100">
      <div class="card-body">
        <h3 class="card-title">
          {{ stock.name }}
          <small class="text-muted">
            Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }}
          </small>
        </h3>
        <div class="d-flex">
          <input
            type="number"
            class="form-control me-2"
            placeholder="Quantity"
            v-model="quantity"
            :class="{ 'border border-danger': insufficientQuantity }"
          />
          <button
            class="btn text-nowrap"
            :class="{
              'btn-success': !insufficientQuantity,
              'btn-danger': insufficientQuantity,
            }"
            @click="sellStock"
            :disabled="quantity <= 0 || isNaN(quantity) || insufficientQuantity"
          >
            {{ insufficientQuantity ? "Insufficient Quantity" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions("portfolio", {
      placeSellOrder: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
  props: {
    stock: Object,
  },
};
</script>