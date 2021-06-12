<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your mail address: {{ email }}</p>
  </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
  data() {
    return {
      email: "",
    };
  },
  created() {
    axios
      .get("/users.json")
      .then((res) => {
        let data = Object.entries(res.data).map((x) => ({ id: x[0], ...x[1] }));
        this.email = data[data.length - 1].email;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>