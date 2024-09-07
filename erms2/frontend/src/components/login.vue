<template>
  <div class="login-modal" v-if="isOpen">
    <div class="login-content">
      <div class="logo-container">
        <img :src="logoPath" alt="Razz Rel Events Logo" class="logo" />
      </div>
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Username"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="form-actions">
          <button type="submit">LOGIN</button>
        </div>
      </form>
      <div class="register-option">
        Don't have an account?
        <a href="#" @click.prevent="$emit('switchToRegister')">Register</a>
      </div>
      <button class="close-btn" @click="$emit('close')">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoImage from "../assets/logo.png"; // Make sure this path is correct

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close", "login", "switchToRegister"]);

const username = ref("");
const password = ref("");
const logoPath = ref(logoImage);

const handleLogin = () => {
  console.log("Login attempted", {
    username: username.value,
    password: password.value,
  });
  emit("login", { username: username.value, password: password.value });
  username.value = "";
  password.value = "";
};
</script>
