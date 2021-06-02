<template>
  <div class="row">
    <rud-quote v-for="(quote, i) in quotes" @click.native="removeQuote(i)">
      {{ quote }}
    </rud-quote>
  </div>
</template>

<script>
import rudQuote from "./Quote.vue";

export default {
  components: {
    rudQuote,
  },
  props: {
    quotes: Array[String],
  },
  methods: {
    removeQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
};
</script>