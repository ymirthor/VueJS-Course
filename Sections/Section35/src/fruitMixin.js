export const fruitMixin = {
  data() {
    return {
      filterText: "",
      fruits: ["Apple", "Banana", "Orange", "Pear"],
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((el) => {
        return el.match(this.filterText);
      });
    },
  },
  created() {
    console.log('Created');
  }
}