<template>
  <section class="relative w-screen h-screen overflow-hidden">
    <!-- Slider Images -->
    <div class="absolute inset-0 w-full h-full">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-1000"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <img
          :src="slide"
          alt="Slide Image"
          class="w-full h-full object-cover"
        />
        ssss
      </div>
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div
      class="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      style="will-change: transform, opacity"
    >
      <h1
        class="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight"
      >
        Discover Egypt with
        <span class="text-light-blue font-sans whitespace-nowrap"
          >NileVibe Tours</span
        >
      </h1>

      <p class="mt-6 text-sm md:text-2xl max-w-3xl drop-shadow-md">
        From the Nubian villages to the magnificent temples of Karnak, embark on
        a journey through Egypt's timeless wonders. Your adventure starts here!
      </p>

      <a
        href="#booking"
        class="mt-8 px-8 py-4 text-xl bg-light-blue font-semibold rounded-full hover:bg-golden transition duration-300 shadow-lg"
      >
        Book Now
      </a>

      <!-- Navigation Dots -->
      <div class="flex mt-8 gap-3">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="w-4 h-4 rounded-full cursor-pointer"
          :class="currentSlide === index ? 'bg-light-blue' : 'bg-white/50'"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  "slides/slide1.jpg",
  "slides/slide2.jpg",
  "slides/slide3.jpg",
  "slides/slide4.jpg",
]; // ضع مسارات الصور هنا

const currentSlide = ref(0);
let interval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  interval = setInterval(nextSlide, 2000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
h1,
p,
a {
  backface-visibility: hidden;
}
</style>
