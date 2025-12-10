<template>
  <div class="w-screen h-screen overflow-x-hidden bg-[#F8F1E5]">
    <NavBar />
    <router-view class="min-h-screen"></router-view>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "./components/UI/Nav-bar.vue";
import Footer from "./components/UI/Footer.vue";
</script>

<style></style>
