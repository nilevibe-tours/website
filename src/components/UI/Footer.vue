<template>
  <footer
    class="bg-dark text-center sm:text-start text-white pt-8 border-t border-golden/20"
  >
    <div
      class="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
    >
      <!-- Company Links -->
      <div class="flex flex-col items-center md:items-start gap-4">
        <h3 class="text-xl font-semibold mb-2">Company</h3>
        <ul class="flex flex-col md:flex-row gap-4 text-sm">
          <li>
            <router-link to="/contact" class="footer-link">Contact</router-link>
          </li>
          <li>
            <router-link to="/tours" class="footer-link">Tours</router-link>
          </li>
          <li>
            <router-link to="/about" class="footer-link">About</router-link>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="flex flex-col items-center md:items-start gap-2">
        <h3 class="text-xl font-semibold mb-2">Contact</h3>
        <ul class="text-sm space-y-1">
          <li><i class="pi pi-phone mr-2"></i> +20 128 017 3604</li>
          <li><i class="pi pi-envelope mr-2"></i> nilevibetours@gmail.com</li>
        </ul>
      </div>

      <!-- Social Media -->
      <div class="flex flex-col items-center md:items-start gap-2">
        <h3 class="text-xl font-semibold mb-2">Follow Us</h3>
        <ul class="flex gap-4">
          <li>
            <a
              href="https://www.facebook.com/NileVibeTours"
              target="_blank"
              class="social-icon text-xl"
            >
              <i
                class="pi pi-facebook hover:text-blue-600 transition-colors"
              ></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/nilevibetours/"
              class="social-icon text-xl"
            >
              <i
                class="pi pi-instagram hover:text-[#CBA135] transition-colors"
              ></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://wa.me/+201278926242"
              class="social-icon text-xl"
            >
              <i
                class="pi pi-whatsapp hover:text-green-500 transition-colors"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Line -->
    <div class="container mx-auto px-6 mt-6 border-t border-golden/20">
      <p class="text-center text-sm text-white/60 py-2">
        All rights reserved © 2025 Nile Vibe Tours
      </p>
    </div>
  </footer>
</template>

<script setup>
import "primeicons/primeicons.css";
</script>

<style scoped>
.footer-link {
  @apply hover:text-[#CBA135] transition-colors duration-300;
}

.social-icon {
  @apply cursor-pointer transition-transform duration-300 hover:scale-110;
}
</style>
