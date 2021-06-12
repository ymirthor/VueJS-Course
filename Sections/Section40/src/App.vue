<template>
  <div>
    <rud-header></rud-header>
    <transition name="slide" mode="out-in">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
import rudHeader from "./components/Header.vue";

export default {
  components: {
    rudHeader,
  },
  created() {
    console.log("settings stocks");
    this.$store.dispatch("stocks/initStocks");
  },
};
</script>

<style>
small {
  font-size: 50%;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}
</style>