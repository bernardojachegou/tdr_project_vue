<template>
  <header>
    <div class="links">
      <router-link :to="{ name: 'DeveloperList' }">
        <a>List</a>
      </router-link>
      <div class="vl"></div>
      <router-link :to="{ name: 'DeveloperCreate' }">
        <a>Add</a>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 32px 0px;
  text-align: center;
  border-bottom: 1px solid white;
  box-sizing: border-box;
}

header .vl {
  border-left: 2px solid white;
  height: 28px;
}

header .links {
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.links a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: 0 8px;
}

.links a:hover {
  color: #befff5;
}

.links a + a {
  margin-left: 32px;
}
</style>
