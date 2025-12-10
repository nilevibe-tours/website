<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative w-full h-[75vh] md:h-[90vh]">
      <img
        src="/assets/hero.jpg"
        alt="Explore Egypt with Nile Vibe"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30 backdrop-blur-[3px]"></div>
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
      >
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to <span class="text-[#CBA135]">Nile Vibe</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-200 max-w-2xl">
          Discover Egypt’s most breathtaking destinations with tailored 5-star
          tours.
        </p>
        <router-link
          to="/tours"
          class="mt-6 px-10 py-3 bg-[#CBA135] text-dark rounded-full font-semibold text-lg hover:bg-[#e5b658] transition-transform duration-300 hover:-translate-y-1 shadow-xl"
        >
          Explore Tours
        </router-link>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="pt-20 pb-10 bg-[#F8F1E5]">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-14">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div
            v-for="(item, index) in whyList"
            :key="index"
            class="reveal opacity-0 flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            <i :class="['pi', item.icon, 'text-[#CBA135] text-5xl']"></i>
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Destinations -->
    <section class="container mx-auto px-6 pt-20">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
        Top Destinations
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <div
          v-for="d in destinations"
          :key="d.name"
          class="reveal opacity-0 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
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
    <section class="container mx-auto px-6 pt-20">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
        Popular Packages
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="tour in tourData"
          :key="tour.title"
          class="reveal opacity-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
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

    <!-- Book Now -->
    <section class="container mx-auto px-6 pt-20">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
        Book Now!
      </h2>
      <Form />
    </section>

    <!-- Final CTA -->
    <section class="container mx-auto px-6 py-20">
      <div
        class="reveal opacity-0 mx-auto max-w-3xl bg-white shadow-xl rounded-2xl p-12 text-center"
      >
        <h3 class="text-3xl font-bold text-gray-900">
          Ready for Your Egyptian Adventure?
        </h3>
        <p class="text-gray-600 text-lg max-w-xl mx-auto mt-3">
          Our team is here to help you plan an unforgettable experience.
        </p>
        <router-link
          to="/contact"
          class="mt-6 inline-block bg-[#0B1E36] text-white px-10 py-3 rounded-xl text-lg font-semibold hover:bg-[#122c4d] transition"
        >
          Contact Us Now!
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import "primeicons/primeicons.css";
import Form from "../UI/Form.vue";
import tourData from "../../../public/tours/tourData";
import { onMounted } from "vue";

const whyList = [
  {
    icon: "pi-map-marker",
    title: "Local Expertise",
    desc: "Our guides know every hidden corner of Egypt.",
  },
  {
    icon: "pi-star",
    title: "5-Star Service",
    desc: "Top-quality service for maximum comfort.",
  },
  {
    icon: "pi-globe",
    title: "Custom Tours",
    desc: "Fully tailored itineraries to match your needs.",
  },
];

const destinations = [
  { name: "Aswan" },
  { name: "Cairo" },
  { name: "Hurghada" },
  { name: "Luxor" },
  { name: "Marsa Alam" },
  { name: "Marsa Matruh" },
  { name: "Sharm El Sheikh" },
];

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
