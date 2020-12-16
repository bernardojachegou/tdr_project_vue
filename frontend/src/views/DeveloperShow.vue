<template>
  <div>
    <TheNavbar />
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
/* eslint-disable */
import TheNavbar from "@/components/TheNavbar";
import api from "@/services/api";
import moment from "moment";

export default {
  name: "DeveloperShow",
  components: {
    TheNavbar,
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

<style lang="scss" scoped>
@import "@/scss/modules/developerShow.scss";
</style>