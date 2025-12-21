<template>
  <section class="container mx-auto px-6 pt-20">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-14">
      Transfer Services
    </h2>

    <div class="max-w-4xl mx-auto">
      <!-- Main description -->
      <p class="text-lg text-gray-700 text-center mb-10">
        Reliable and comfortable transportation solutions for your journey in
        Upper Egypt. Our transfer services cover both Aswan and Luxor, including
        airport transfers and internal transportation within both cities.
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Aswan Services -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div class="flex items-center mb-4">
            <div
              class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3"
            >
              <div class="pi pi-map-marker text-2xl text-blue-600"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Aswan Transfers</h3>
          </div>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check text-green-500 mt-0.5"></i>
              <span>Aswan International Airport transfers</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check text-green-500 mt-0.5"></i>

              <span>Internal city transportation</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check text-green-500 mt-0.5"></i>

              <span>Hotel to attractions transfers</span>
            </li>
          </ul>
        </div>

        <!-- Luxor Services -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div class="flex items-center mb-4">
            <div
              class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3"
            >
              <div class="pi pi-map-marker text-2xl text-amber-600"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Luxor Transfers</h3>
          </div>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <i class="pi pi-check text-green-500 mt-0.5"></i>

              <span>Luxor International Airport transfers</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check text-green-500 mt-0.5"></i>

              <span>Internal city transportation</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-check text-green-500 mt-0.5"></i>

              <span>Temple and valley transfers</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Note Section -->
      <div class="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div class="flex items-start">
          <svg
            class="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h4 class="font-bold text-gray-800 mb-2">Service Coverage</h4>
            <p class="text-gray-700">
              Our transfer services comprehensively cover both
              <span class="font-semibold">Aswan</span> and
              <span class="font-semibold">Luxor</span>, including airport
              transfers at both international airports and internal
              transportation within both cities. Whether you need to reach your
              hotel, visit historical sites, or travel between locations, we
              provide comfortable and reliable transportation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
