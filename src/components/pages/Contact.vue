<template>
  <div class="pt-20 pb-16 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-gray-600 text-lg max-w-xl mx-auto mb-6">
        We're here to help you plan the perfect Egyptian experience. Send us
        your inquiry and our team will get back to you shortly.
      </p>

      <ul class="flex justify-center gap-6 text-3xl mb-3">
        <li class="hover:scale-110 transition-transform">
          <a
            href="https://www.facebook.com/NileVibeTours"
            target="_blank"
            class="text-blue-600"
          >
            <i class="pi pi-facebook"></i>
          </a>
        </li>

        <li class="hover:scale-110 transition-transform">
          <a
            href="https://www.instagram.com/nilevibetours/"
            target="_blank"
            class="text-pink-600"
          >
            <i class="pi pi-instagram"></i>
          </a>
        </li>

        <li class="hover:scale-110 transition-transform">
          <a
            href="https://wa.me/+201278926242"
            target="_blank"
            class="text-green-600"
          >
            <i class="pi pi-whatsapp"></i>
          </a>
        </li>
      </ul>

      <p class="text-xl font-semibold tracking-wide text-gray-900 mb-6">
        Or contact us using the form below
      </p>
    </div>

    <!-- Form Card -->
    <Form />
  </div>
</template>

<script setup>
import Form from "../UI/Form.vue";
import "primeicons/primeicons.css";
</script>

<style>
/* Optional: يمكنك إبقاء fadeIn لو حبيت تضيف animation CSS لاحقًا */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.7s ease-out forwards;
}
</style>
