<template>
  <header class="header-navbar">
    <div class="div-links">
      <router-link :to="{ name: 'DeveloperList' }">
        <a class="a-link">List</a>
      </router-link>
      <div class="div-vertical-line"></div>
      <router-link :to="{ name: 'DeveloperCreate' }">
        <a class="a-link">Add</a>
      </router-link>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
export default {
  name: "TheNavbar",
};
</script>

<style lang="scss" scoped></style>
