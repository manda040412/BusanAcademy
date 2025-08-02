<template>
  <!-- PDF Content Here -->
  <section
    v-if="Object.keys(mainData).length"
    class="print-container px-4 sm:px-6 md:px-10 pt-5"
  >
    <section class="px-4 sm:px-6 pt-5">
      <!-- 👉 Left Content -->
      <section class="print-info block md:flex md:justify-between">
        <section class="w-full md:w-1/2 sm:m-1">
          <section class="flex flex-row items-center mb-4">
            <!-- 👉 Logo -->
            <img
              alt="Logo"
              class="image me-2 h-[150px] w-[180px] md:h-[100px] md:w-[120px]"
              src="/src/assets/logo/busan-logo-1.png"
            />

            <!-- 👉 Address -->
            <section class="text-black text-left mt-2 md:mt-0">
              <p class="mb-0">Ruko 91 District</p>
              <p class="mb-0">Pagedangan, Kec. Pagedangan</p>
              <p class="mb-0">Kabupaten Tangerang, Banten 15339</p>
              <p class="mb-0">info@busanacademy.com</p>
              <p class="mb-0">+62 813-8537-1513</p>
            </section>
          </section>
        </section>

        <!-- 👉 Right Content -->
        <section class="mt-5 sm:m-2">
          <section class="w-full mt-5 sm:m-2 text-left md:text-right">
            <h6 class="font-bold text-lg md:text-xl">PROGRESS</h6>
            <h6 class="font-medium text-sm md:text-lg">
              {{
                new Date().toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            </h6>

            <p class="mb-0 text-black text-sm md:text-base">
              <span class="font-weight-semibold">No.</span>
              <span class="font-weight-semibold">
                {{ mainData.document.number }}/PPR/AC/BSA/{{
                  new Date().toLocaleDateString("en-GB", {
                    month: "numeric",
                  })
                }}/{{
                  new Date().toLocaleDateString("en-GB", {
                    year: "numeric",
                  })
                }}
              </span>
            </p>
          </section>
        </section>
      </section>

      <hr class="border border-gray-100 w-full mt-3 md:mt-0" />

      <!-- 👉 Info Details -->
      <section
        class="flex flex-wrap md:flex-nowrap justify-between align-center mt-3"
      >
        <section class="w-full md:w-1/2 sm:ma-3 text-left">
          <h6 class="text-sm md:text-lg font-semibold mb-1">
            Participant:
            {{ mainData.participant.name }}
          </h6>
          <h6 class="text-sm md:text-lg font-semibold mb-1">
            Course:
            {{ mainData.course.name }}
          </h6>
          <h6 class="text-sm md:text-lg font-semibold mb-1">
            Tutor:
            {{ mainData.tutor.name }}
          </h6>
        </section>
      </section>

      <section class="mt-2 overflow-auto">
        <table
          class="whitespace-nowrap table-auto w-full border-collapse border border-gray-300 text-sm md:text-base"
        >
          <tbody v-if="mainData?.details?.length">
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
                width="50%"
              >
                TOTAL PRESENCE
              </th>
              <td class="border border-gray-300 px-4 py-2" />
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ mainData.total_presence }}
              </td>
            </tr>
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                rowspan="2"
                scope="col"
              >
                PROJECT
              </th>
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                First Project
              </td>
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ mainData.midterm_score || "-" }}
              </td>
            </tr>
            <tr>
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                Second Project
              </td>
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ mainData.endterm_score || "-" }}
              </td>
            </tr>
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                TOTAL PROJECT SCORE
              </th>
              <td class="border border-gray-300 px-4 py-2" />
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{
                  (mainData.midterm_score || 0) + (mainData.endterm_score || 0)
                }}
              </td>
            </tr>
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                PROJECT SCORE (60%)
              </th>
              <td class="border border-gray-300 px-4 py-2" />
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ parseFloat(mainData.project_score ?? 0).toFixed(1) }}
              </td>
            </tr>
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                ASSIGNMENT SCORE (40%)
              </th>
              <td class="border border-gray-300 px-4 py-2" />
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ parseFloat(mainData.exercise_score ?? 0).toFixed(1) }}
              </td>
            </tr>
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                FINAL SCORE
              </th>
              <td class="border border-gray-300 px-4 py-2" />
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ parseFloat(mainData.final_score ?? 0).toFixed(1) }}
              </td>
            </tr>
            <tr>
              <th
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                GRADE
              </th>
              <td class="border border-gray-300 px-4 py-2" />
              <td
                class="text-center border border-gray-300 px-4 py-2"
                scope="col"
              >
                {{ mainData.grade }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr v-if="!mainData?.details?.length">
              <td
                class="text-center border border-gray-300 px-4 py-2"
                colspan="4"
              >
                No data
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      <div class="grid grid-cols-12 gap-4 mt-4">
        <!-- Note and Recommendation Section -->
        <div class="col-span-12 md:col-span-6">
          <section>
            <h6 class="text-sm font-semibold mb-1">Note:</h6>
            <span>{{ mainData.note || "-" }}</span>

            <h6 class="text-sm font-semibold mt-3 mb-1">Recommendation:</h6>
            <span>{{ mainData.recommendation || "-" }}</span>
          </section>
        </div>

        <!-- Empty Spacer Column -->
        <div class="col-span-12 md:col-span-3"></div>

        <!-- Signature Section -->
        <div class="col-span-12 md:col-span-3">
          <section class="flex flex-col">
            <p class="mb-2">
              Tangerang,
              {{
                new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }}
            </p>

            <span v-if="mainData.tutor.signature" class="mb-2">
              <img
                :alt="mainData.tutor.signature"
                class="w-40 h-24"
                :src="`${baseUrl}${mainData.tutor.signature_url}`"
              />
            </span>

            <p class="font-semibold">{{ mainData.tutor.name }}</p>
          </section>
        </div>
      </div>
    </section>

    <button
      class="mb-4 mr-4 print-button !w-16 !h-16 rounded-full bg-primary flex items-center justify-center text-2xl"
      style="position: fixed; inset-block-end: 0; inset-inline-end: 0"
      @click="triggerPrint"
    >
      <Icon icon="tabler-printer" size="24" color="white" />
    </button>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { showToast } from "../plugins/acsys";

const route = useRoute();
const id = ref(route.query.id);

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/storage/`;

// State
const loading = ref(false);

// Data
const mainData = ref({});
const items = ref({
  variables: [],
});

// Fetch Data
const fetchData = async () => {
  loading.value = true;

  try {
    const { data } = await axios.get("academic/absences", {
      params: {
        filters: {
          id: id.value,
          is_active: 1,
        },
      },
    });

    mainData.value = data.data[0];
  } catch (error) {
    showToast(error.response?.data?.message || error.message, "error");
  } finally {
    loading.value = false;
  }
};

const triggerPrint = () => {
  window.print();
};

onMounted(() => {
  if (id.value) {
    fetchData();
  }
});
</script>

<style>
.v-application__wrap {
  background: #fff;
  color: #000 !important;
}

h6 {
  color: #000 !important;
}

.whatsapp-button {
  display: none !important;
}

.print-container {
  min-height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px; /* Adjust as necessary */
}

@media print {
  @page {
    size: A4;
    background-color: #fff !important;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    inline-size: 100% !important;
  }

  .print-container {
    width: 100%;
    margin: 0 auto;
    padding: 0 !important;
  }

  .print-info {
    display: flex !important;
  }

  .image {
    width: 120px !important;
    height: 100px !important;
  }

  #__vue-devtools-container__ {
    display: none !important;
  }

  * {
    outline: 0 !important;
    box-shadow: none !important;
    box-sizing: border-box;
  }
}
</style>
