<template>
  <div>
    <Navbar />
    <div>
      <div class="card table-container">
        <div class="title">
          <h1>Developer register</h1>
        </div>
        <hr />
        <div class="information">
          <div class="item">
            <h4>Name</h4>
            <input
              type="text"
              placeholder="Complete name"
              v-model="form.name"
            />
            <p v-show="!form.name">* Required</p>
          </div>
          <div class="item">
            <h4>Birthdate</h4>
            <input
              type="date"
              placeholder="XX/XX/XXXX"
              v-model="form.birthdate"
            />
            <p v-show="!form.birthdate">* Required</p>
          </div>
          <div class="item">
            <h4>Social number (CPF)</h4>

            <input
              type="text"
              placeholder="Only numbers"
              v-model="form.socialNumber"
              v-mask="['###.###.###-##']"
            />
            <p v-show="!form.socialNumber">* Required</p>
          </div>
        </div>
        <button class="button" @click="addDeveloper" :disabled="disableSave">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import api from "../services/api";
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  name: "DevCreate",
  data: () => ({
    form: {
      name: "",
      birthdate: "",
      socialNumber: "",
    },
  }),
  created() {
    if (this.$route.params.developer) {
      this.form.name = this.$route.params.developer.nome;
      this.form.birthdate = this.$route.params.developer.nascimento;
      this.form.socialNumber = this.$route.params.developer.cpf;
    }
  },
  methods: {
    addDeveloper() {
      const form = {
        nome: this.form.name,
        nascimento: this.form.birthdate,
        cpf: this.form.socialNumber,
      };

      if (this.$route.params.developer) {
        api.put(`/developers/${this.$route.params.developer.id}`, form).then(
          () => {
            return this.$router.push("/list");
          },
          (err) => console.log(err)
        );
        return;
      }

      api.post("/developers", form).then(
        () => (this.form = {}),
        (err) => console.log(err)
      );
    },
  },
  computed: {
    disableSave() {
      return !this.form.name || !this.form.birthdate || !this.form.socialNumber;
    },
  },
  components: {
    Navbar,
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
  line-height: 50px;
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
  margin: 0 12px;
  border-radius: 6px;
  outline: none;
  background-color: #2d3d5b;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 200ms;
}

.button:hover:enabled {
  background-color: #202633;
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
