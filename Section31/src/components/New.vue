<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  activated() {
    console.log("Activated");
  },
  deactivated() {
    console.log("Deactivated");
  },
};
</script>

<style>
</style>