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
          <section class="w-full mt-5 sm:m-2 text-left">
            <h6 class="font-bold text-lg md:text-xl">INVOICE</h6>
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
                {{ mainData.document.number }}/INV/FN/BSA/{{
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
            Invoice To:
            {{ mainData.participant.name }}
          </h6>
          <h6 class="text-sm md:text-lg font-semibold mb-1">
            Phone Number:
            {{ mainData.participant.registration.phone_number }}
          </h6>
          <h6 class="text-sm md:text-lg font-semibold mb-1">
            Whatsapp Number:
            {{ mainData.participant.registration.whatsapp_number }}
          </h6>
        </section>
      </section>

      <section class="mt-2 overflow-auto">
        <table
          class="whitespace-nowrap table-auto w-full border-collapse border border-gray-300 text-sm md:text-base"
        >
          <thead>
            <tr>
              <th class="text-center border border-gray-300 px-4 py-2">No</th>
              <th class="text-center border border-gray-300 px-4 py-2">
                Course
              </th>
              <th class="text-center border border-gray-300 px-4 py-2">
                Quantity
              </th>
              <th class="text-center border border-gray-300 px-4 py-2">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="mainData?.learning_request?.details?.length"
              v-for="(data, x) in mainData.learning_request.details"
              :key="x"
              class="text-center border-t"
            >
              <td class="border border-gray-300 px-4 py-2">{{ x + 1 }}</td>
              <td class="border border-gray-300 px-4 py-2">
                {{ data.course.name }}
              </td>
              <td class="border border-gray-300 px-4 py-2">1</td>
              <td class="border border-gray-300 px-4 py-2">
                Rp{{ formatNumber(data.price) }}
              </td>
            </tr>
            <tr v-if="!mainData?.learning_request?.details?.length">
              <td
                class="text-center border border-gray-300 px-4 py-2"
                colspan="4"
              >
                No data
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr v-if="mainData" class="font-bold">
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Total
              </td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Rp{{
                  formatNumber(
                    mainData.learning_request.details.reduce(
                      (acc, cur) => acc + cur.price,
                      0
                    )
                  )
                }}
              </td>
            </tr>
            <tr v-if="mainData" class="font-bold">
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Discount
              </td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Rp{{
                  formatNumber(
                    mainData.discount_type === "percentage"
                      ? (mainData.discount_percentage / 100) *
                          mainData.grandtotal
                      : mainData.discount_amount
                  )
                }}
              </td>
            </tr>
            <tr v-if="mainData" class="font-bold">
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Referral Discount
              </td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Rp{{
                  formatNumber(
                    mainData.referral_discount_type === "percentage"
                      ? (mainData.referral_discount_percentage / 100) *
                          mainData.grandtotal
                      : mainData.referral_discount_amount
                  )
                }}
              </td>
            </tr>
            <tr v-if="mainData" class="font-bold">
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Total After Discount
              </td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Rp{{ formatNumber(mainData.grandtotal) }}
              </td>
            </tr>
            <tr v-if="mainData" class="font-bold">
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Payment
              </td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Rp{{ formatNumber(mainData.amount) }}
              </td>
            </tr>
            <tr v-if="mainData" class="font-bold">
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300"></td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Remaining Payment
              </td>
              <td class="text-center border border-gray-300 px-4 py-2">
                Rp{{ formatNumber(mainData.grandtotal - mainData.amount) }}
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section class="flex flex-col mt-3">
        <h6 class="text-sm font-semibold me-3">Syarat & Instruksi :</h6>
        <span>
          Pembayaran dilakukan ke rekening
          <span v-if="items.variables['first_bank_name']">
            {{ items.variables["first_bank_name"] + " : " }}
          </span>
          <strong v-if="items.variables['first_account_number']">
            {{ items.variables["first_account_number"] }} a.n
          </strong>
          <strong v-if="items.variables['first_account_owner']">
            {{ items.variables["first_account_owner"] }}.
          </strong>

          <span v-if="items.variables['second_bank_name']">
            {{ items.variables["second_bank_name"] + " : " }}
          </span>
          <strong v-if="items.variables['second_account_number'] > 0">
            {{ items.variables["second_account_number"] }} a.n
          </strong>
          <strong v-if="items.variables['second_account_owner']">
            {{ items.variables["second_account_owner"] }}.
          </strong>
          <br />
          Bukti transfer dapat dikirimkan melalui WA:
          <a
            class="text-decoration-none"
            href="https://wa.me/6281385371513"
            target="_blank"
          >
            <strong>+62 813-8537-1513</strong>
          </a>
        </span>
      </section>
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
import { formatNumber, showToast } from "../plugins/acsys";

const route = useRoute();
const id = ref(route.query.id);

// State
const loading = ref(false);

// Data
const mainData = ref({});
const items = ref({
  variables: [],
});

// Fetch Data
const fetchQuotation = async () => {
  loading.value = true;

  try {
    const { data } = await axios.get("marketing/invoices", {
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

const fetchVariables = async () => {
  try {
    const { data } = await axios.get("setting-variables", {
      params: {
        key: [
          "first_bank_name",
          "first_account_number",
          "first_account_owner",
          "second_bank_name",
          "second_account_number",
          "second_account_owner",
        ],
        type: "bank",
      },
    });

    items.value.variables = data.data.reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
  } catch (error) {
    showToast(error.response?.data?.message || error.message, "error");
  }
};

const triggerPrint = () => {
  window.print();
};

onMounted(() => {
  if (id.value) {
    fetchQuotation();
    fetchVariables();
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
