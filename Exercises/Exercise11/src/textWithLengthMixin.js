export const textWithLength = {
  computed: {
    textWithLength() {
      return this.text + ` (${this.text.length})`
    }
  }
};