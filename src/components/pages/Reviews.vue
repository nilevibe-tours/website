<template>
  <div class="pt-20 px-6 flex flex-col gap-8">
    <h2 class="text-3xl md:text-4xl font-bold text-center">
      Leave us a review
    </h2>

    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-xl p-6 rounded-2xl space-y-5 w-full max-w-xl mx-auto"
      id="form"
    >
      <!-- Full Name -->
      <div>
        <label class="block font-semibold mb-1"> Full Name </label>
        <input
          v-model="guest.name"
          type="text"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
          name="name"
          id="name"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block font-semibold mb-1"> Email </label>
        <input
          v-model="guest.email"
          type="email"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
          required
          name="email"
          id="email"
        />
      </div>
      <!-- Notes -->
      <div>
        <label class="block font-semibold mb-1"> Notes </label>
        <textarea
          v-model="guest.notes"
          name="notes"
          id="notes"
          rows="3"
          class="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:ring-light-blue"
        ></textarea>
      </div>

      <!-- Submit -->
      <div class="w-full flex flex-col justify-center items-center gap-3">
        <button
          type="submit"
          class="w-max mx-auto hover:text-white border border-golden text-golden font-bold p-3 rounded-xl hover:bg-golden transition"
          :disabled="loading"
        >
          {{ loading ? "sending" : "Leave a review" }}
        </button>

        <p
          v-if="success"
          class="flex items-center justify-center gap-2 mt-4 text-green-700 font-semibold text-lg animate-fadeIn"
        >
          <i class="pi pi-check-circle text-green-600 text-xl"></i>

          <span
            class="px-3 py-1 bg-green-50 border border-green-200 rounded-xl shadow-sm"
          >
            We have received your review successfully!
          </span>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const guest = ref({
  isReview: false,
  name: "",
  email: "",
  notes: "",
});

const loading = ref(false);
const success = ref(false);

async function handleSubmit() {
  loading.value = true;
  success.value = false;

  try {
    const res = await fetch("/api/sendMsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest.value),
    });

    if (res.ok) {
      success.value = true;

      guest.value = {
        name: "",
        email: "",
        notes: "",
      };
    } else {
      console.console(await res.json());
    }
  } catch (err) {
    console.error("ERROR:", err);
  }

  loading.value = false;
}
</script>
