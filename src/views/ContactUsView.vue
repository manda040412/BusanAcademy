<script setup>
import { onMounted } from "vue";

// Contact information data
const contactInfo = [
  {
    icon: "map-pin",
    title: "Address",
    content: "91 District B8, BSD City",
    link: null
  },
  {
    icon: "phone",
    title: "Phone",
    content: "+62 813-8537-1513",
    link: "tel:+6281385371513"
  },
  {
    icon: "mail",
    title: "Email",
    content: "info@busanacademy.com",
    link: "mailto:hello@BusanAcademy.ID"
  },
  {
    icon: "brand-instagram",
    title: "Instagram",
    content: "@busanacademy.id",
    link: "https://www.instagram.com/busanacademy.id/"
  }
];
</script>

<template>
  <div class="min-h-screen bg-white pt-20">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <h1 class="text-4xl font-bold text-center mb-12 text-[#303972]">Contact Us</h1>

      <div class="max-w-6xl mx-auto">
        <!-- Contact Information -->
        <div class="bg-gray-50 p-8 rounded-2xl shadow-sm mb-8">
          <h2 class="text-2xl font-bold mb-8 text-[#303972]">Contact Information</h2>
          
          <div class="grid grid-cols-1 gap-6">
            <div 
              v-for="(item, index) in contactInfo" 
              :key="index"
              class="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm"
            >
              <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="`icon icon-tabler icon-tabler-${item.icon}`"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path v-if="item.icon === 'map-pin'" d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  <path v-if="item.icon === 'phone'" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path v-if="item.icon === 'mail'" d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10zM3 7l9 6l9 -6" />
                  <path v-if="item.icon === 'brand-instagram'" d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4zM12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M16.5 7.5l0 .01" />
                </svg>
              </div>
              
              <div class="flex-1">
                <h3 class="font-medium text-gray-700 mb-1">{{ item.title }}</h3>
                <a 
                  v-if="item.link" 
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {{ item.content }}
                </a>
                <span v-else class="text-gray-600">
                  {{ item.content }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="bg-gray-50 p-8 rounded-2xl shadow-sm">
          <h2 class="text-2xl font-bold mb-8 text-[#303972]">Our Location</h2>
          <div class="rounded-xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.8801052961173!2d106.638616!3d-6.295211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd3be29f0547%3A0x660f009eec45f604!2sBUSAN%20Academy!5e0!3m2!1sid!2sid!4v1726124293110!5m2!1sid!2sid"
              class="w-full h-[400px]"
              style="border:0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="BUSAN Academy Location"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  @apply text-blue-600;
}

.rounded-xl {
  border-radius: 1rem;
}

.rounded-2xl {
  border-radius: 1.5rem;
}
</style>
