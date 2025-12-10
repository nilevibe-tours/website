<template>
  <div class="overflow-x-hidden">
    <Hero />

    <WhyList />

    <TopDestinations />

    <Packages :is-popular="true" />

    <Contact />

    <CTA />
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";

import { onMounted } from "vue";

import Hero from "../UI/home/Hero.vue";
import WhyList from "../UI/home/Why-list.vue";
import TopDestinations from "../UI/Top-destinations.vue";
import Packages from "../UI/Packages.vue";
import Contact from "../UI/Contact.vue";
import CTA from "../UI/home/CTA.vue";

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

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
