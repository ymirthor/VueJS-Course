<template>
  <ul class="nav nav-pills">
    <router-link :to="{ name: 'home' }" tag="li" active-class="active" exact>
      <a>Home</a>
    </router-link>
    <router-link :to="{ name: 'users' }" tag="li" active-class="active">
      <a>Users</a>
    </router-link>
  </ul>
</template>
