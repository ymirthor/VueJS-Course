<template>
  <div class="quote-block">
    <h1>
      <slot name="title">Default title</slot>
    </h1>
    <div class="quote">
      <slot name="quote"></slot>
    </div>
    <hr />
    <div class="author">
      <slot name="author"></slot>
    </div>
    <slot>Deafult slot</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.quote-block {
  border: 1px solid black;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
.quote {
  color: red;
}
.author {
  text-align: right;
  padding-right: 60px;
}
</style>