<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr />
        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import rudHeader from "./Header.vue";
export default {
  components: {
    rudHeader,
  },
};
</script>

<style>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity 0.20s ease;
  animation: slide-in 0.20s ease-out forwards;
}

.slide-leave-active {
  opacity: 0;
  transition: opacity 0.20s ease;
  animation: slide-out 0.20s ease-out forwards;
}
.slide-leave {
  opacity: 1;
}

@keyframes slide-in {
  from {
    transform: translateX(10px);
  }
  to {
    transform: translateX(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(10px);
  }
}
</style>
