<template>
  <div class="col-xs-12 col-sm-6">
    <template v-if="server === null">
      <p>Select a server from the list to view details</p>
    </template>
    <template v-else>
      <p>Server#{{ server.id }}'s status is {{ server.status }}</p>
      <hr />
      <button @click="resetStatus">Change status back to Normal</button>
    </template>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data() {
    return {
      server: null,
    };
  },
  created() {
    serverBus.$on("requestsDetails", (server) => {
      this.server = server;
    });
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    },
  },
};
</script>
<style>
</style>
