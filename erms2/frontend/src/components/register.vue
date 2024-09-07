<template>
  <div class="register-modal" v-if="isOpen">
    <div class="register-content">
      <div class="logo-container">
        <img :src="logoPath" alt="Razz Rel Events Logo" class="logo" />
      </div>
      <h2 class="register-title">Register</h2>
      <form @submit.prevent="handleRegister">
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
            type="email"
            id="email"
            v-model="email"
            placeholder="Email"
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
        <div class="form-group">
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div class="form-actions">
          <button type="submit">REGISTER</button>
        </div>
      </form>
      <div class="login-option">
        Already have an account?
        <a href="#" @click.prevent="$emit('switchToLogin')">Login</a>
      </div>
      <button class="close-btn" @click="$emit('close')">&times;</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoImage from "../assets/logo.png";

const props = defineProps(["isOpen"]);
const emit = defineEmits(["close", "register", "switchToLogin"]);

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const logoPath = ref(logoImage);

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }
  console.log("Registration attempted", {
    username: username.value,
    email: email.value,
    password: password.value,
  });
  emit("register", {
    username: username.value,
    email: email.value,
    password: password.value,
  });
  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};
</script>

<style scoped>
/* You can leave this empty or remove it entirely if you're not adding any component-specific styles */
</style>
