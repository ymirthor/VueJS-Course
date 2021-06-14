<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p v-if="!auth" style="color: red">
      You should only get here if you're authenticated!
    </p>
    <p v-if="auth">Your mail address: {{ email }}</p>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.$store.dispatch("getUser");
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

</style>