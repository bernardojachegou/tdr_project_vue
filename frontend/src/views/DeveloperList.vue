<template>
  <div>
    <TheNavbar />
    <div class="table-container">
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthdate</th>
            <th>Social number (CPF)</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="developer in developers" :key="developer.id">
            <td>{{ developer.nome }}</td>
            <td>{{ developer.nascimento | moment }}</td>
            <td>{{ developer.cpf }}</td>
            <td><a @click="seeDeveloper(developer)">See</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
import api from "../services/api";
import moment from "moment";

export default {
  name: "DevList",
  components: {
    TheNavbar,
  },
  data: () => ({
    developers: Array,
  }),
  methods: {
    moment: function () {
      return moment();
    },
    seeDeveloper(payload) {
      this.$router.push({
        name: "DeveloperShow",
        params: {
          developer: payload,
        },
      });
      console.log(payload);
    },
  },
  created() {
    api.get("/developers").then((value) => (this.developers = value.data));
  },
  filters: {
    moment: function (date) {
      return moment(date).format("DD MMM YYYY");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/list.scss";
</style>
