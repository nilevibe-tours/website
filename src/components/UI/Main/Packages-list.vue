<template>
  <section
    id="destinations"
    :dir="store.current === 'ar' ? 'rtl' : 'ltr'"
    class="bg-light text-light-blue py-16 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-extrabold mb-10 tracking-wide text-center text-dark"
      >
        {{ store.current === "ar" ? "الباقات" : "Packages" }}
      </h2>

      <ul
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-stretch"
      >
        <!-- اللغة اه ولا لا -->
        <DestinationCard
          v-for="(item, idx) in packages"
          :key="idx"
          :item="item"
        />
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "../../../stores/main";
import packages from "../../../../public/packages";
import DestinationCard from "../Packages/Card.vue";

const store = useMainStore();
</script>
