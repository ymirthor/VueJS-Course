<template>
  <li class="list-group-item" @click="getServerDetails" style="cursor: pointer">
    Server #{{ server.id }}
  </li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: {
    server: Object
  },
  methods: {
    getServerDetails() {
      serverBus.$emit("requestsDetails", this.server);
    },
  },
};
</script>