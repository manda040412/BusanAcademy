<template>
  <section
    v-if="mainData"
    class="print-container w-screen h-screen overflow-hidden flex items-center justify-center"
  >
    <!-- Hidden Container for Image Capture -->
    <section
      id="capture-container"
      class="hidden w-[1920px] h-[1080px] top-0 left-0 bg-white"
    >
      <section
        id="certificate"
        class="w-full h-full flex flex-col justify-center items-center bg-center bg-no-repeat bg-contain relative overflow-hidden certificate"
      >
        <!-- Certificate Number -->
        <h3
          class="absolute text-center font-bold text-black top-[13rem] left-1/2 transform -translate-x-1/2 text-lg"
        >
          NO. {{ mainData.number }}/CER/{{ mainData.group_code }}/BSA/{{
            new Date().toLocaleDateString("id-ID", { month: "numeric" })
          }}/{{ new Date().toLocaleDateString("id-ID", { year: "numeric" }) }}
        </h3>

        <!-- Participant Name -->
        <h1
          class="absolute text-blue-700 font-bold text-center top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-lg md:text-3xl"
        >
          {{ mainData.participant_name }}
        </h1>

        <!-- Course Name -->
        <h2
          class="absolute text-blue-700 font-bold text-center top-[58%] left-1/2 transform -translate-x-1/2 text-3xl"
        >
          {{ mainData.course_name }}
        </h2>
      </section>
    </section>

    <section id="certificate-image"></section>

    <button
      class="mb-4 mr-4 print-button !w-16 !h-16 rounded-full bg-primary flex items-center justify-center text-2xl"
      :disabled="!replaceToImage"
      style="position: fixed; inset-block-end: 0; inset-inline-end: 0"
      @click="triggerPrint"
    >
      <Icon icon="tabler-arrow-bar-to-down" size="40" color="white" />
    </button>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import axios from "axios";
import domtoimage from "dom-to-image";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { showToast } from "../plugins/acsys";

const route = useRoute();
const id = ref(route.query.id);
const participant_id = ref(route.query.participant_id);

// State
const loading = ref(false);

// Data
const mainData = ref({});
const replaceToImage = ref(false);
const imageUrl = ref("");

// Fetch Data
const fetchData = async () => {
  loading.value = true;

  try {
    const { data } = await axios.get("user/detail-sertifikat", {
      params: {
        id: id.value,
        participant_id: participant_id.value,
        type: "Sertifikat Kelulusan",
      },
    });

    mainData.value = data;

    // Add a delay to ensure everything is rendered properly before capturing
    setTimeout(() => {
      const captureContainer = document.getElementById("capture-container");

      // Temporarily show the hidden container
      // captureContainer.classList.add("fixed");
      // captureContainer.classList.remove("hidden");

      const scaleFactor = window.devicePixelRatio || 1;

      // Use dom-to-image to capture the content with higher resolution
      domtoimage
        .toPng(captureContainer, {
          quality: 1, // Max quality for JPG
          width: captureContainer.offsetWidth * scaleFactor, // Scale by pixel ratio
          height: captureContainer.offsetHeight * scaleFactor, // Scale by pixel ratio
          style: {
            transform: `scale(${scaleFactor})`, // Scale the content
            transformOrigin: "top left",
            width: `${captureContainer.offsetWidth}px`, // Ensure original width
            height: `${captureContainer.offsetHeight}px`, // Ensure original height
          },
        })
        .then((dataUrl) => {
          const img = new Image();
          img.src = dataUrl;

          // Replace the content with the image
          replaceToImage.value = true;

          document.querySelector("#certificate-image").appendChild(img);

          imageUrl.value = dataUrl;

          // Hide the container after capture
          // captureContainer.classList.add("hidden");
          // captureContainer.classList.remove("fixed");
        })
        .catch((error) => {
          console.error("Gagal membuat gambar sertifikat", error);
        });
    }, 2000);
  } catch (error) {
    showToast(error.response?.data?.message || error.message, "error");
  } finally {
    loading.value = false;
  }
};

const downloadImage = () => {
  const url = imageUrl.value;

  if (url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = `Sertifikat Partisipasi - ${mainData.value.participant_name}.png`;
    a.click(); // Trigger the download
  } else {
    showToast("Gagal mengunduh sertifikat", "error");
  }
};

const triggerPrint = () => {
  downloadImage();
};

onMounted(() => {
  if (id.value) {
    fetchData();
  }
});
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

.v-application__wrap {
  background: #fff;
  color: #000 !important;
}

h6 {
  color: #000 !important;
}

.certificate {
  background-image: url("/src/assets/images/certificate-participation.jpg");
}

.text-blue {
  color: #2c5e86;
}

.print-container {
  width: 100%;
  height: 100%;
}

.hidden {
  display: none;
}

.fixed {
  display: block !important;
  visibility: visible !important;
}

@media print {
  /* Reset margins and padding */
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .print-container > section {
    background-image: url("../../../src/assets/images/certificate-participation.jpg");
    position: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.01) !important; /* Slightly scale up the content */
    transform-origin: top left; /* Prevent shifting */
    inset: 0 !important;
    width: 100vw; /* Ensure full width */
    height: 100vh; /* Ensure full height */
    overflow: hidden;
  }

  /* Remove print margins */
  @page {
    margin: 0;
    size: A4 landscape;
  }

  /* Hide Vue Devtools container (optional) */
  #__vue-devtools-container__ {
    display: none !important;
  }

  /* Remove outlines and unwanted shadows */
  * {
    outline: 0 !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
  }
}
</style>
