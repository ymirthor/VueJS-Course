<template>
  <div class="container">
    <rud-process-bar :progress="quotes.length" :capacity="maxQuotes" />
    <rud-quote-input @addQuote="addQuote"></rud-quote-input>
    <rud-quotes-grid :quotes="quotes"></rud-quotes-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          <p>Info: Click on a Quote to delete it!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rudProcessBar from "./components/ProgressBar.vue";
import rudInfo from "./components/Info.vue";
import rudQuoteInput from "./components/QuoteInput.vue";
import rudQuotesGrid from "./components/QuotesGrid.vue";

export default {
  data() {
    return {
      quotes: [],
      maxQuotes: 10,
    };
  },
  components: {
    rudProcessBar,
    rudInfo,
    rudQuoteInput,
    rudQuotesGrid,
  },
  methods: {
    addQuote(text) {
      if (this.quotes.length >= 10) return alert('Please delete Quotes first!');
      this.quotes.push(text);
    },
  },
};
</script>

<style>
</style>
