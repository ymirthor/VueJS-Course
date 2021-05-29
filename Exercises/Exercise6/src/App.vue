<template>
  <div class="container">
    <rud-header></rud-header>
    <hr />
    <div class="row">
      <rud-server-list></rud-server-list>
      <rud-server-details></rud-server-details>
    </div>
    <hr />
    <rud-manage-servers></rud-manage-servers>
  </div>
</template>

<script>
import rudHeader from "./components/Header.vue";
import rudManageServers from "./components/ManageServers.vue";
import rudServerList from "./components/ServerList.vue";
import rudServerDetails from "./components/ServerDetails.vue";

export default {
  components: {
    rudHeader,
    rudManageServers,
    rudServerList,
    rudServerDetails,
  },
};
</script>
