<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'rudQuote'">Quote</button>
        <button @click="selectedComponent = 'rudAuthor'">Author</button>
        <button @click="selectedComponent = 'rudNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import rudQuote from "./components/Quote.vue";
import rudAuthor from "./components/Author.vue";
import rudNew from "./components/New.vue";
export default {
  data() {
    return {
      quote: "Hello there",
      author: "Obiwan Kenobi",
      selectedComponent: "rudQuote",
    };
  },
  components: {
    rudQuote,
    rudAuthor,
    rudNew,
  },
};
</script>

<style>
</style>
