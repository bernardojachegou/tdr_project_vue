<template>
  <div>
    <Navbar />
    <div class="card table-container">
      <table width="100%">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de nascimento</th>
            <th>CPF</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="developer in developers" :key="developer.id">
            <td>{{developer.nome}}</td>
            <td>{{developer.nascimento}}</td>
            <td>{{developer.cpf}}</td>
            <td><a @click="seeDeveloper(developer)">Ver</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import api from '../services/api';

export default {
  name: "DevList",
  components: {
    Navbar,
  },
  data: () => ({
    developers: Array
  }),
  methods: {
    seeDeveloper(payload) {
      this.$router.push({
        name: 'DeveloperShow',
        params: {
          developer: payload,
        }
      }) 
      console.log(payload)
    }
  },
  created() {
    api.get('/developers')
    .then((value) => this.developers = value.data)
  }
};
</script>

<style scoped>
.card {
  background-color: #2d5b54;
  border-radius: 24px;
  width: 800px;
  min-height: 400px;
  margin: 45px auto;
  display: flex;
}

.table-container {
  padding: 40px;
  box-sizing: border-box;
}

.table-container table {
  border-spacing: 0;
}

.table-container th {
  text-align: left;
  text-transform: uppercase;
  font-size: 16px;
}

.table-container td,
.table-container th {
  padding: 16px;
  border-bottom: 1px solid #d9d9d9;
}

.table-container tbody tr:last-child td {
  border-bottom: none;
}

.table-container tbody tr td:first-child {
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: center;
}

.table-container tbody tr td:last-child a,
.table-container > a {
  background-color: #2d3d5b;
  padding: 8px 24px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  transition: 100ms;
}

.table-container tbody tr td:last-child a:hover {
  background-color: #40826d;
  color: white;
}

.table-container thead tr th:last-child,
.table-container td:last-child {
  text-align: center;
}
</style>
