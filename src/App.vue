<script setup>
import { Icon } from "@iconify/vue";
import { RouterView } from "vue-router";
import { Toaster } from "vue-sonner";
</script>

<template>
  <div>
    <RouterView />

    <Toaster expand position="top-center" rich-colors :visible-toasts="5" />

    <a
      href="https://wa.me/6281385371513"
      target="_blank"
      class="whatsapp-button"
    >
      <Icon icon="tabler-brand-whatsapp" />
    </a>
  </div>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px; /* Slightly larger for better visibility */
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-decoration: none; /* Remove link underline */
}

.whatsapp-button svg {
  width: 30px;
  height: 30px;
  color: white;
}
</style>
