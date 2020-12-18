<template>
  <div>
    <TheNavbar />
    <div>
      <div class="div-card div-card-form">
        <div class="div-title-form">
          <h1>Developer register</h1>
        </div>
        <hr />
        <div class="div-information-form">
          <div class="div-item-form">
            <h2>Name</h2>
            <input
              class="input-data"
              type="text"
              placeholder="Complete name"
              v-model="form.name"
            />
            <p class="p-required-validation-form" v-show="!form.name">
              * Required
            </p>
          </div>
          <div class="div-item-form">
            <h2>Birthdate</h2>
            <input class="input-data" type="date" v-model="form.birthdate" />
            <p class="p-required-validation-form" v-show="!form.birthdate">
              * Required
            </p>
          </div>
          <div class="div-item-form">
            <h2>Social number (CPF)</h2>

            <input
              class="input-data"
              type="text"
              placeholder="Only numbers"
              v-model="form.socialNumber"
              v-mask="['###.###.###-##']"
            />
            <p class="p-required-validation-form" v-show="!form.socialNumber">
              * Required
            </p>
          </div>
        </div>
        <div class="div-button-box">
          <button class="button" @click="addDeveloper" :disabled="disableSave">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import TheNavbar from "@/components/TheNavbar";
import api from "@/services/api";
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
      console.log(this.$route.params.developer);
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
    TheNavbar,
  },
};
</script>

<style lang="scss"></style>
