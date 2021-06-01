<template>
  <div class="container">
    <form v-if="!submitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <rud-full-name v-model="fullName"></rud-full-name>
          <div class="form-group">
            <label>Email address</label>
            <input v-model="email" type="email" class="form-control" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label>Store Data?</label>
            <br />
            <input type="radio" value="Yes" v-model="storeData" /> Yes
            <input type="radio" value="No" v-model="storeData" /> No
          </div>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <button
            type="submit"
            @click.prevent="submitted = true"
            class="btn btn-primary"
          >
            Submit
          </button>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rudFullName from "./FullName.vue";

export default {
  data() {
    return {
      fullName: "Ýmir Þórleifsson",
      email: "",
      password: "",
      storeData: "Yes",
      submitted: false,
    };
  },
  components: {
    rudFullName,
  },
};
</script>

<style>
</style>
