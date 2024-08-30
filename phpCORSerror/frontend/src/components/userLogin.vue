<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            v-model="username"
            placeholder="Username"
            type="text"
            required
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <button type="submit" class="btn-submit">Login</button>
      </form>
      <p class="message">{{ message }}</p>
      <button @click="$router.push('/register')" class="btn-toggle">
        Don't have an account? Register
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://localhost/ems-test/api/login.php",
          {
            username: this.username,
            password: this.password,
          }
        );
        if (response.data.status === "success") {
          this.$router.push("/events");
        } else {
          this.message = response.data.message;
        }
      } catch (error) {
        this.message = "Login failed. Please try again.";
      }
    },
  },
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.auth-form {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-submit {
  background-color: #1877f2;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: #165eab;
}

.message {
  color: red;
  margin-top: 10px;
}

.btn-toggle {
  margin-top: 20px;
  background: none;
  border: none;
  color: #1877f2;
  cursor: pointer;
  font-size: 14px;
}

.btn-toggle:hover {
  text-decoration: underline;
}
</style>
