<template>
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-[#0B1E36]">
      Testimonials
    </h2>

    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      <li
        v-for="review in reviews"
        :key="review.name"
        class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition hover:-translate-y-1 hover:shadow-2xl relative h-fit"
      >
        <p class="text-gray-700 leading-relaxed mb-4">“{{ review.review }}”</p>
        <i
          class="pi pi-star-fill absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 text-golden text-4xl"
        >
        </i>
        <p class="text-[#0B1E36] font-semibold text-sm text-right">
          {{ review.name }} <i class="pi pi-pencil text-xs"></i>
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reviews } from "../../../../public/tours/reviews";
</script>
