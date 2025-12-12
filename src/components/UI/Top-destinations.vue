<template>
  <section class="container mx-auto px-6 pt-20">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
      Top Destinations
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto"
    >
      <router-link
        :to="`/package/${d.title}`"
        v-for="d in tourData"
        :key="d.title"
        class="reveal opacity-0 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
      >
        <img
          :src="d.image"
          :alt="d.title"
          loading="lazy"
          class="w-full h-full max-h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div class="absolute inset-0 bg-black/10 backdrop-blur-[3px]"></div>

        <div
          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"
        ></div>
        <h3
          class="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white tracking-wide"
        >
          {{ d.title }}
        </h3>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import tourData from "../../../public/tours/tourData.js";
</script>

<style></style>
