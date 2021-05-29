<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <rud-server
        v-for="server in servers"
        :key="server.id"
        :server="server"
      />
    </ul>
  </div>
</template>

<script>
import rudServer from "./Server.vue";
export default {
  data() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Warning" },
        { id: 4, status: "Normal" },
        { id: 5, status: "Normal" },
      ],
    };
  },
  components: {
    rudServer,
  },
};
</script>

<style>
</style>
