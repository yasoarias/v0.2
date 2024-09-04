<template>
  <div class="homepage">
    <header :class="{ 'dark-mode': isDarkMode }">
      <div class="logo-container">
        <img :src="logoPath" alt="Razz Rel Events Logo" class="logo" />
      </div>
      <nav>
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </nav>
      <div class="user-actions">
        <button @click="toggleDarkMode" class="dark-mode-toggle">
          {{ isDarkMode ? "☀️" : "🌙" }}
        </button>
        <div class="user-icon">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logoImage from "../assets/logo.png";
import backgroundImage from "../assets/bck.png";

const router = useRouter();
const isDarkMode = ref(false);

const logoPath = ref(logoImage);
const backgroundImageUrl = ref(backgroundImage);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  console.log("Dark mode toggled:", isDarkMode.value); // Add this line for debugging
};

const handleBookNowClick = () => {
  console.log("Book Now clicked");
  // Add your booking logic here
};

// Other functions remain the same
</script>
