<template>
  <div class="homepage">
    <header :class="{ 'dark-mode': isDarkMode }">
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
            <router-link to="/packages/kiddie-party">Kiddie Party</router-link>
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
    </header>

    <main class="main-content">
      <div class="hero">
        <div class="hero-content">
          <button class="book-now" @click="handleBookNowClick">BOOK NOW</button>
        </div>
      </div>
    </main>

    <!-- New footer section -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>We Would Love to Have You Visit Us soon!</p>
          <p>Contact Number: 09123456789</p>
          <p>Email: razz.rel.events@gmail.com</p>
        </div>
        <div class="footer-right">
          <p>Follow Us!</p>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>All Rights Reserved 2024</p>
      </div>
    </footer>

    <!-- Login Modal -->
    <Login
      :isOpen="isLoginModalOpen"
      @close="closeLoginModal"
      @login="handleLogin"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Login from "./Login.vue";
import logoImage from "../assets/logo.png";
import backgroundImage from "../assets/bck.png";

const router = useRouter();
const isDarkMode = ref(false);
const isDropdownOpen = ref(false);
const isLoginModalOpen = ref(false);

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
  isLoginModalOpen.value = !isLoginModalOpen.value;
};

const closeLoginModal = () => {
  isLoginModalOpen.value = false;
};

const handleLogin = (credentials) => {
  console.log("Login credentials received:", credentials);
  // Here you would typically handle the login logic
  // For example, calling an API and storing the user's session
  closeLoginModal();
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
/* ... existing styles ... */

.user-icon {
  cursor: pointer;
}
</style>
