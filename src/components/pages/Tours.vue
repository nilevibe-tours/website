<template>
  <div class="py-10">
    <top-destinations />
    <packages />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Packages from "../UI/Packages.vue";
import TopDestinations from "../UI/Top-destinations.vue";

onMounted(() => {
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate-fadeIn");
        observer.unobserve(entry.target);
      }
    });
  });
  revealElements.forEach((el) => observer.observe(el));
});
</script>

<style></style>
