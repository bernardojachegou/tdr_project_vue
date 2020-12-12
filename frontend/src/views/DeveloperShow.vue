<template>
  <div>
    <Navbar />
    <div class="card table-container">
      <div class="title">
        <h1>Developer's information</h1>
      </div>
      <hr />
      <div class="information">
        <div class="item">
          <h4>Name</h4>
          <p>{{ developer.nome }}</p>
        </div>
        <div class="item">
          <h4>Birthdate</h4>
          <p>{{ developer.nascimento | moment }}</p>
        </div>
        <div class="item">
          <h4>Social number (CPF)</h4>
          <p>{{ developer.cpf }}</p>
        </div>
      </div>
      <div class="button-box">
        <button class="button edit" @click="editDeveloper">Edit</button>
        <button class="button delete" @click="removeDeveloper">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import moment from "moment";
import api from "../services/api";
export default {
  name: "DeveloperShow",
  components: {
    Navbar,
  },
  data: () => ({
    developer: Object,
  }),
  created() {
    if (!this.$route.params.developer) {
      return this.$router.push("/list");
    }
    this.developer = this.$route.params.developer;
  },
  methods: {
    moment: function () {
      return moment();
    },
    removeDeveloper() {
      api.delete(`/developers/${this.$route.params.developer.id}`).then(
        () => {
          return this.$router.push("/list");
        },
        (err) => console.log(err)
      );
    },
    editDeveloper() {
      this.$router.push({
        name: "DeveloperCreate",
        params: {
          developer: this.developer,
        },
      });
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD/MMM/YYYY");
    },
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
  line-height: 50px;
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

.table-container .button-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-box .button {
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

.button:hover {
  background-color: #202633;
}

.button-box .delete {
  background-color: rgb(138, 28, 50);
}

.button-box .delete:hover {
  background-color: rgb(77, 14, 27);
}
</style>