<template>
  <section class="container mx-auto px-6 pt-20">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
      Popular Packages
    </h2>
    <div
      v-if="isPopular"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="tour in tourData.slice(0, 3)"
        :key="tour.title"
        class="reveal opacity-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
      >
        <img
          :alt="tour.title"
          :src="tour.image || 'https://via.placeholder.com/400x250'"
          loading="lazy"
          class="h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div class="p-6 flex flex-col gap-4">
          <h3 class="text-xl font-semibold">{{ tour.title }}</h3>
          <div class="text-gray-600 text-sm flex justify-between">
            <span><i class="pi pi-hourglass"></i> {{ tour.duration }}</span>
            <span v-if="tour.price"
              ><i class="pi pi-money-bill"></i> {{ tour.price }}</span
            >
          </div>
          <ul
            class="border-l-4 border-[#CBA135] pl-4 text-gray-700 space-y-1 text-sm"
          >
            <li v-for="item in tour.program['Why This Tour?']" :key="item">
              {{ item }}
            </li>
          </ul>
          <router-link
            :to="`/package/${tour.title}`"
            class="mt-4 bg-[#0B1E36] text-white py-2 px-4 rounded-xl text-center hover:bg-[#122c4d] transition"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="tour in tourData"
        :key="tour.title"
        class="reveal opacity-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
      >
        <img
          :alt="tour.title"
          :src="tour.image || 'https://via.placeholder.com/400x250'"
          loading="lazy"
          class="h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div class="p-6 flex flex-col gap-4">
          <h3 class="text-xl font-semibold">{{ tour.title }}</h3>
          <div class="text-gray-600 text-sm flex justify-between">
            <span><i class="pi pi-hourglass"></i> {{ tour.duration }}</span>
            <span v-if="tour.price"
              ><i class="pi pi-money-bill"></i> {{ tour.price }}</span
            >
          </div>
          <ul
            class="border-l-4 border-[#CBA135] pl-4 text-gray-700 space-y-1 text-sm"
          >
            <li v-for="item in tour.program['Why This Tour?']" :key="item">
              {{ item }}
            </li>
          </ul>
          <router-link
            :to="`/package/${tour.title}`"
            class="mt-4 bg-[#0B1E36] text-white py-2 px-4 rounded-xl text-center hover:bg-[#122c4d] transition"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["isPopular"]);
import tourData from "../../../public/tours/tourData.js";
</script>

<style></style>
