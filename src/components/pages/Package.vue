<template>
  <div
    v-if="object"
    class="min-h-screen bg-gray-50 py-8 md:py-12 px-4 md:px-6 mt-10"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header for mobile -->
      <div class="md:hidden mb-6">
        <h1 class="text-3xl font-bold text-center text-[#0B1E36] mb-4">
          {{ object.title }}
        </h1>
        <p class="text-center text-[#CBA135] text-lg font-semibold">
          {{ object.duration }} — {{ object.price }}
        </p>
      </div>

      <!-- Main content grid -->
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Left column -->
        <div class="lg:w-2/5">
          <div class="sticky top-8 space-y-6">
            <div class="rounded-2xl shadow-xl overflow-hidden">
              <img
                :src="object.image"
                class="w-full h-64 md:h-80 lg:h-96 object-cover"
                :alt="object.title"
              />
            </div>

            <div
              class="hidden lg:block bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h1 class="text-2xl font-bold text-[#0B1E36] mb-3">
                {{ object.title }}
              </h1>
              <p class="text-[#CBA135] text-lg font-semibold mb-6">
                {{ object.duration }} — {{ object.price }}
              </p>

              <button
                class="w-full py-3 bg-[#0B1E36] text-white rounded-xl text-lg font-semibold shadow hover:bg-[#122c4d] transition duration-300"
                @click="handleBooking"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <!-- Right column -->
        <div class="lg:w-3/5">
          <div class="space-y-6">
            <div
              class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 transition-transform duration-300 hover:shadow-xl"
            >
              <h2
                class="text-xl md:text-2xl font-bold text-[#0B1E36] mb-5 pb-3 border-b border-gray-100"
              >
                Customize Your Experience
              </h2>
              <div class="flex gap-4 items-start">
                <p class="text-gray-800 leading-relaxed text-lg">
                  We can adjust the program according to your preference. If you
                  like, we can shorten the itinerary or spread it over fewer
                  days—everything can be arranged to suit your
                  comfort and convenience.
                </p>
              </div>
            </div>
            <div
              v-for="(items, section) in object.program"
              :key="section"
              class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 transition-transform duration-300 hover:shadow-xl"
            >
              <h2
                class="text-xl md:text-2xl font-bold text-[#0B1E36] mb-5 pb-3 border-b border-gray-100"
              >
                {{ section }}
              </h2>
              <ul class="space-y-4">
                <li
                  v-for="item in items"
                  :key="item"
                  class="flex gap-4 items-start"
                >
                  <span
                    class="text-[#CBA135] text-xl font-bold mt-1 flex-shrink-0"
                    >•</span
                  >
                  <span class="text-gray-800 leading-relaxed text-lg">{{
                    item
                  }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="lg:hidden mt-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div class="text-center">
              <p class="text-[#CBA135] text-xl font-semibold mb-2">
                {{ object.duration }} — {{ object.price }}
              </p>
              <button
                class="w-full max-w-sm mx-auto py-4 bg-[#0B1E36] text-white rounded-xl text-lg font-semibold shadow hover:bg-[#122c4d] transition duration-300"
                @click="handleBooking"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import tourData from "../../../public/tours/tourData";
import { useRouter } from "vue-router";
import useMainStore from "../../stores/main";
const store = useMainStore();
const props = defineProps(["title"]);
const object = ref(null);
const router = useRouter();

const handleBooking = () => {
  store.updateDestination(object.value.title);
  router.push("/contact");
};

onMounted(() => {
  if (!props.title) {
    router.replace("/");
    return;
  }

  const found = tourData.find(
    (e) => e.title.toLowerCase() === props.title.toLowerCase()
  );

  if (!found) {
    router.replace("/");
    return;
  }

  object.value = found;
});
</script>
