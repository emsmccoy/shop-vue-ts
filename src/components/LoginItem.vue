<template>
  <div>
    <form @submit.prevent="submitForm">
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Login extends Vue {
  [x: string]: any;
  email = "";
  password = "";
  errorMessage = "";

  async submitForm() {
    if (!this.email || !this.password) {
      this.errorMessage = "Please enter an email and password.";
      return;
    }

    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("token", response.data.token);
      this.$router.push("/products");
    } catch (error) {
      this.errorMessage = "Invalid email or password.";
    }
  }
}
</script>
