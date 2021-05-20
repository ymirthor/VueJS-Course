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
import RUDHeader from "./components/Header.vue";
import RUDManageServers from "./components/ManageServers.vue";
import RUDServerList from "./components/ServerList.vue";
import RUDServerDetails from "./components/ServerDetails.vue";

export default {
  components: {
    "rud-header": RUDHeader,
    "rud-manage-servers": RUDManageServers,
    "rud-server-list": RUDServerList,
    "rud-server-details": RUDServerDetails,
  },
};
</script>
