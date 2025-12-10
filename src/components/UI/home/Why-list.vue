<template>
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
</template>

<script setup>
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
</script>

<style></style>
