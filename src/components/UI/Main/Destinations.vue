<template>
  <section class="bg-light text-golden py-12 px-6" id="destinations">
    <div class="max-w-6xl mx-auto space-y-10">
      <div
        v-for="(item, idx) in destinations[store.current]"
        :key="idx"
        class="border border-golden/60 rounded-xl p-6 bg-dark shadow-md"
      >
        <!-- title -->
        <h2 class="text-2xl font-bold mb-2">{{ item.title }}</h2>
        <p class="text-sm text-golden/70 mb-6">{{ item.comment }}</p>

        <!-- program -->
        <div class="space-y-6 mb-6">
          <div
            v-for="(activities, title) in item.program"
            :key="title"
            class="bg-light/20 p-4 rounded-lg border border-golden/20"
          >
            <h3 class="font-semibold text-lg text-golden mb-2">{{ title }}</h3>

            <ul
              class="list-disc pl-5 space-y-1 text-md text-light font-bold tracking-wide"
            >
              <li v-for="(activity, i) in activities" :key="i">
                {{ activity }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Book button -->
        <a
          href="#booking"
          class="inline-block mt-4 px-6 py-2 bg-golden text-dark font-semibold rounded-lg hover:bg-golden/80 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import destinations from "../../../../destinations";
import { useMainStore } from "../../../stores/main";
const store = useMainStore();
</script>
