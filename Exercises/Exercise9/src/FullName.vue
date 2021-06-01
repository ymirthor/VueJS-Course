<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input
        :value="firstName"
        type="text"
        class="form-control"
        @input="nameChanged(true, $event)"
      />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input
        :value="lastName"
        type="text"
        class="form-control"
        @input="nameChanged(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      this.value = isFirst
        ? event.target.value + " " + this.lastName
        : this.firstName + " " + event.target.value;
      this.$emit("input", this.value);
    },
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    },
  },
};
</script>