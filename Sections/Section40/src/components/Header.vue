<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      <ul class="navbar-nav me-auto flex-row">
        <router-link
          to="/portfolio"
          activeClass="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          to="/stocks"
          activeClass="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ms-auto flex-row">
        <li class="nav-link">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown mt-2">
          <a
            class="nav-link dropdown-toggle"
            role="button"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            Save & Load
          </a>
          <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
            <li>
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </li>
          </ul>
        </li>
        <strong class="navbar-text mt-2">Funds: {{ funds | currency }}</strong>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters["portfolio/funds"];
    },
  },
  methods: {
    ...mapActions("stocks", ["randomizeStocks"]),
    ...mapActions({
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters["portfolio/funds"],
        stockPortfolio: this.$store.getters["portfolio/stockPortfolio"],
        stocks: this.$store.getters["stocks/stocks"],
      };
      this.$http.put("stocks.json", data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>

<style>
.active > a {
  color: black !important;
  font-weight: 600;
}
</style>