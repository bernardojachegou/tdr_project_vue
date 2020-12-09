<template>
  <div>
    <Navbar />
    <div class="card table-container">
      <div class="title">
        <h1>Informações sobre o desenvolvedor</h1>
      </div>
      <hr />
      <div class="information">
        <div class="item">
          <h4>Nome:</h4>
          <p>{{developer.nome}}</p>
        </div>
        <div class="item">
          <h4>Data de Nascimento:</h4>
          <p>{{developer.nascimento}}</p>
        </div>
        <div class="item">
          <h4>CPF:</h4>
          <p>{{developer.cpf}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "DeveloperShow",
  components: {
    Navbar,
  },
  data: () => ({
    developer: Object
  }),
    created() {
      if(!this.$route.params.developer) {
        return this.$router.push("/list")
      }
      this.developer = this.$route.params.developer

  },
};
</script>

<style scoped>
.card {
  background-color: #2d5b54;
  border-radius: 24px;
  width: 800px;
  min-height: 400px;
  margin: 45px auto;
}

.table-container {
  padding: 40px;
  box-sizing: border-box;
}

.table-container hr {
  border-top: 1px solid white;
  width: 100%;
}

.table-container .title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-container .information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 48px 0;
}

.information .item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0;
}

.information .item h4 {
  font-size: 24px;
}

.information .item p {
  font-size: 18px;
  margin-left: 12px;
  border-bottom: 1px solid white;
}
</style>