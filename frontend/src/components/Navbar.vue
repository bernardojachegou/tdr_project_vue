<template>
  <header>
    <div class="links">
      <router-link :to="{ name: 'DeveloperList' }">
        <a>Listar</a>
      </router-link>
      <router-link :to="{ name: 'DeveloperCreate' }">
        <a>Criar</a>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
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

header .links {
  font-size: 22px;
  font-weight: bold;
}

.links a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
}

.links a:hover {
  border-bottom: 1px solid white;
}

.links a + a {
  margin-left: 32px;
}
</style>
