<template>
  <div>
    <Navbar />
    <div>
      <div class="card table-container">
        <div class="title">
          <h1>Cadastro de desenvolvedor</h1>
        </div>
        <hr />
        <div class="information">
          <div class="item">
            <h4>Nome:</h4>
            <input type="text" placeholder="Nome completo" v-model="form.nome"/>
            <p v-show="!form.nome">* Campo obrigatório</p>
          </div>
          <div class="item">
            <h4>Data de Nascimento:</h4>
            <input type="text" placeholder="XX/XX/XXXX" v-model="form.nascimento" v-mask="['##/##/####']"/>
            <p v-show="!form.nascimento">* Campo obrigatório</p>
          </div>
          <div class="item">
            <h4>CPF:</h4>
            
            <input type="text" placeholder="Somente números" v-model="form.cpf" v-mask="['###.###.###-##']"/>
            <p v-show="!form.cpf">* Campo obrigatório</p>
          </div>
        </div>
        <button class="button" @click="addDeveloper" :disabled="disableSave">Enviar</button>
        
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import api from '../services/api';
import {mask} from 'vue-the-mask';

export default {
  directives: {mask},
  name: "DevCreate",
  data: () => ({
    form: {
      nome: '',
      nascimento: '',
      cpf: '',
    },
  }),
  methods: {
    addDeveloper() {
      api.post('/developers', this.form).then(() => this.form = {}, (err) => console.log(err))
    }
  },
  computed: {
    disableSave() {
      return !this.form.nome || !this.form.nascimento || !this.form.cpf
    }
  },
  components: {
    Navbar
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
}

.table-container {
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 48px 0;
}

.table-container .button {
  width: 200px;
  padding: 12px;
  border-radius: 6px;
  outline: none;
  background-color: #2d3d5b;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  border: 2px solid #2d3d5b;

}

.button:hover:enabled {
  color: #405782;
  background-color: white;
  border: 2px solid #405782;
}

.information .item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0;
}

.information .item h4 {
  font-size: 18px;
}

.information .item p {
  color: #befff5;
  font-size: 16px;
  margin-left: 8px;
}

.information .item input {
  margin-left: 10px;
  padding: 10px;
  color: black;
  outline: none;
  border-radius: 6px;
  width: 250px;
  font-size: 14px;
}
</style>
