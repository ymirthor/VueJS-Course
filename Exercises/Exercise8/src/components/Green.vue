<template>
  <div>
    <slot name="info"></slot>
    <hr />
    <slot></slot>
    <hr />
    <strong>I am green</strong>
    <hr />
    <slot name="title"></slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid green;
  background-color: lightgreen;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>