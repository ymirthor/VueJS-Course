<template>
  <div>
    <p>Please select a User</p>
    <hr />
    <ul class="list-group">
      <router-link
        tag="li"
        class="list-group-item"
        style="cursor: pointer"
        to="/user/1"
      >
        <a>User 1</a>
      </router-link>
      <router-link
        tag="li"
        class="list-group-item"
        style="cursor: pointer"
        to="/user/2"
      >
        <a>User 2</a>
      </router-link>
      <router-link
        tag="li"
        class="list-group-item"
        style="cursor: pointer"
        to="/user/3"
      >
        <a>User 3</a>
      </router-link>
    </ul>
  </div>
</template>