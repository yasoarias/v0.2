<template>
  <div class="homepage">
    <header :class="{ 'dark-mode': isDarkMode }">
      <div class="content-container header-content">
        <div class="logo-container">
          <img :src="logoPath" alt="Razz Rel Events Logo" class="logo" />
        </div>
        <nav>
          <router-link to="/">Home</router-link>
          <div class="dropdown">
            <button class="dropbtn" @click="toggleDropdown">Packages</button>
            <div class="dropdown-content" v-show="isDropdownOpen">
              <router-link to="/packages/wedding">Wedding</router-link>
              <router-link to="/packages/debut">Debut</router-link>
              <router-link to="/packages/kiddie-party"
                >Kiddie Party</router-link
              >
              <router-link to="/packages/christening">Christening</router-link>
            </div>
          </div>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
        <div class="user-actions">
          <button @click="toggleDarkMode" class="dark-mode-toggle">
            {{ isDarkMode ? "☀️" : "🌙" }}
          </button>
          <div class="user-icon" @click="toggleLoginModal">
            <span>👤</span>
          </div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <div class="hero">
        <button class="book-now" @click="handleBookNowClick">BOOK NOW</button>
      </div>
    </main>
    <AboutUS />

    <!-- Login Modal -->
    <Login
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      @close="closeModal"
      @login="handleLogin"
      @switchToRegister="switchToRegister"
    />

    <!-- Register Modal -->
    <Register
      v-if="isModalOpen && activeModal === 'register'"
      :isOpen="isModalOpen"
      @close="closeModal"
      @register="handleRegister"
      @switchToLogin="switchToLogin"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import logoImage from "@/assets/logo.png";
import backgroundImage from "@/assets/bck.png";
import AboutUS from "./aboutUS.vue"; // Import the new AboutUS component
import Login from "./login.vue";
import Register from "./register.vue";

const router = useRouter();
const isDarkMode = ref(false);
const isDropdownOpen = ref(false);
const isModalOpen = ref(false);
const activeModal = ref("login");

const logoPath = ref(logoImage);
const backgroundImageUrl = ref(backgroundImage);

// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};

const handleBookNowClick = () => {
  console.log("Book Now clicked");
  // Add your booking logic here
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  if (!event.target.closest(".dropdown")) {
    isDropdownOpen.value = false;
  }
};

const toggleLoginModal = () => {
  isModalOpen.value = !isModalOpen.value;
  activeModal.value = "login";
};

const closeModal = () => {
  isModalOpen.value = false;
};

const switchToRegister = () => {
  activeModal.value = "register";
};

const switchToLogin = () => {
  activeModal.value = "login";
};

const handleLogin = (credentials) => {
  console.log("Login credentials received:", credentials);
  // Handle login logic
  closeModal();
};

const handleRegister = (userData) => {
  console.log("Registration data received:", userData);
  // Handle registration logic
  closeModal();
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>
