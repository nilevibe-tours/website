<template>
  <section class="pt-24 pb-20">
    <!-- Hero Section -->
    <div
      class="relative h-[45vh] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg"
    >
      <img src="/icon.png" class="w-full h-full object-contain bg-white p-8" />

      <!-- Soft Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"
      ></div>

      <h1
        class="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide text-center px-6"
      >
        About Nile Vibe Tours
      </h1>
    </div>

    <!-- Who We Are -->
    <div class="container mx-auto px-6 max-w-5xl mt-20">
      <h2 class="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-5">
        Who We Are
      </h2>
      <p class="text-gray-700 leading-relaxed text-lg md:text-xl">
        Nile Vibe Tours is a travel agency based in Aswan, committed to creating
        memorable adventures across Egypt. From the beautiful Nile to historical
        landmarks and vibrant cities, we design well-crafted, affordable, and
        immersive tour packages that showcase the true spirit of Egypt.
      </p>
    </div>

    <!-- Mission -->
    <div class="container mx-auto px-6 max-w-5xl mt-20">
      <h2 class="text-3xl md:text-4xl font-bold text-[#0B1E36] mb-5">
        Our Mission
      </h2>
      <p class="text-gray-700 leading-relaxed text-lg md:text-xl">
        To deliver exceptional travel experiences blending culture, adventure,
        luxury, and relaxation — ensuring every traveler leaves Egypt with
        unforgettable memories that last a lifetime.
      </p>
    </div>

    <!-- Why Choose Us -->
    <div class="container mx-auto px-6 max-w-6xl mt-24">
      <h2
        class="text-3xl md:text-4xl font-bold text-[#0B1E36] text-center mb-14"
      >
        Why Choose Us?
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="p-7 bg-white rounded-2xl shadow-md border-l-4 border-[#CBA135] hover:shadow-xl transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-2">Expert Guides</h3>
          <p class="text-gray-700">
            Our team includes local professionals who know Egypt’s landscape,
            culture, and hidden gems like no one else.
          </p>
        </div>

        <div
          class="p-7 bg-white rounded-2xl shadow-md border-l-4 border-[#CBA135] hover:shadow-xl transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-2">Affordable Packages</h3>
          <p class="text-gray-700">
            We deliver premium travel experiences at competitive and accessible
            prices for everyone.
          </p>
        </div>

        <div
          class="p-7 bg-white rounded-2xl shadow-md border-l-4 border-[#CBA135] hover:shadow-xl transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-2">24/7 Support</h3>
          <p class="text-gray-700">
            Our support team is available around the clock — before, during, and
            after your trip.
          </p>
        </div>
      </div>

      <router-link
        to="/contact"
        class="mt-12 mx-auto block w-fit bg-[#0B1E36] text-white px-12 py-3.5 rounded-xl text-lg font-semibold hover:bg-[#122c4d] transition shadow-md"
      >
        Contact Us Now!
      </router-link>
    </div>
  </section>
</template>
