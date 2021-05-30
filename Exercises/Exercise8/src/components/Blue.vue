<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <slot></slot>
    <strong>I am blue</strong>
    <slot name="info"></slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>