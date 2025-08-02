<script setup>
import { RouterView, useRoute } from "vue-router";

import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

const route = useRoute();
</script>

<template>
  <div>
    <Navbar />

    <RouterView />

    <Footer v-if="route.path !== '/cart' && route.path !== '/dashboard'" />
  </div>
</template>
