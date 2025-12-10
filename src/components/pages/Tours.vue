<template>
  <div class="container mx-auto px-6 pt-20 pb-8">
    <section class="container mx-auto px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
        Top Destinations
      </h2>

      <div></div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <div
          v-for="d in destinations"
          :key="d.name"
          class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        >
          <img
            :src="`/assets/${d.name}.jpg`"
            :alt="d.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"
          ></div>
          <h3
            class="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white tracking-wide"
          >
            {{ d.name }}
          </h3>
        </div>
      </div>
    </section>

    <!-- Popular Packages -->
    <section class="container mx-auto px-6 pt-10">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
        Popular Packages
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="tour in tourData"
          :key="tour.title"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <img
            :src="tour.image || 'https://via.placeholder.com/400x250'"
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
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";
import tourData from "../../../public/tours/tourData.js";

const destinations = [
  { name: "Aswan" },
  { name: "Cairo" },
  { name: "Hurghada" },
  { name: "Luxor" },
  { name: "Marsa Alam" },
  { name: "Marsa Matruh" },
  { name: "Sharm El Sheikh" },
];
</script>
