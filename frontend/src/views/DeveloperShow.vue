<template>
  <div>
    <TheNavbar />
    <div class="div-card div-card-form">
      <div class="div-title-form">
        <h1>Developer's information</h1>
      </div>
      <hr />
      <div class="div-information-form">
        <div class="div-item-form">
          <h2>Name</h2>
          <p class="p-data-info">{{ developer.nome }}</p>
        </div>
        <div class="div-item-form">
          <h2>Birthdate</h2>
          <p class="p-data-info">{{ developer.nascimento | moment }}</p>
        </div>
        <div class="div-item-form">
          <h2>Social number (CPF)</h2>
          <p class="p-data-info">{{ developer.cpf }}</p>
        </div>
      </div>
      <div class="div-button-box">
        <button class="button default-button-color" @click="editDeveloper">
          Edit
        </button>
        <button class="button delete-button-color" @click="removeDeveloper">
          Delete
        </button>
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

<style lang="scss" scoped></style>