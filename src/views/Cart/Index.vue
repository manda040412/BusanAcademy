<script setup>
import { Icon } from "@iconify/vue";
import axios from "axios";
import { ref as sRef, set } from "firebase/database";
import { Modal } from "flowbite";
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { formatNumber, showToast } from "../../plugins/acsys";
import { db } from "../../plugins/firebase.js";
import { useAuthStore } from "../../store/auth";
import { useCartStore } from "../../store/cart";

const authStore = useAuthStore();
const cartStore = useCartStore();

const router = useRouter();

const loading = ref(false);

// Firebase
const firebaseApp = ref(app);

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/storage/`;

// Confirmation modal
const targetEl = ref(null);
const modal = ref(null);

const options = {
  placement: "center",
  backdrop: "dynamic",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  closable: true,
};

const instanceOptions = ref({
  id: "confirmation-modal",
  message: "Are you sure you want to delete this item?",
  data: {},
  override: true,
  type: "confirm",
});

const formData = ref({
  referral_code: "",
});

const cartItems = ref([]);

const fetchCartItems = async () => {
  loading.value = true;
  try {
    const { data } = await axios.get("user/keranjang");

    cartItems.value = data.data.map((item) => ({
      ...item,
      participant_id:
        authStore.data.register_as === "Peserta"
          ? authStore.data.participants[0].id
          : null,
      participant_type:
        authStore.data.register_as === "Peserta"
          ? authStore.data.participants[0].type
          : null,
    }));
  } catch (error) {
    showToast("Failed to fetch cart items", "error");
  } finally {
    loading.value = false;
  }
};

const confirmDelete = (data) => {
  instanceOptions.value.data = data;
  instanceOptions.value.message = `Are you sure you want to delete ${data.kursus.name} from cart?`;
  instanceOptions.value.type = "delete";

  if (modal.value) {
    modal.value.show();
  }
};

const deleteItem = async (data) => {
  try {
    await axios.delete(`user/keranjang/${data.id}`);

    cartItems.value = cartItems.value.filter((item) => item.id !== data.id);

    showToast("Item deleted successfully", "success");

    cartStore.getTotalItems();
  } catch (error) {
    showToast("Failed to delete item", "error");
  } finally {
    if (modal.value) modal.value.hide();
  }
};

const confirmCheckout = () => {
  if (cartItems.value.some((item) => !item.course_schedule_id)) {
    return showToast("Please select a schedule for each course", "error");
  }

  if (
    authStore.data.register_as !== "Peserta" &&
    cartItems.value.some((item) => !item.participant_id)
  ) {
    return showToast("Please select a participant for each course", "error");
  }

  instanceOptions.value.message = "Are you sure you want to checkout?";
  instanceOptions.value.type = "checkout";

  if (modal.value) {
    modal.value.show();
  }
};

const checkout = async () => {
  try {
    formData.value = {
      ...formData.value,
      details: cartItems.value.map((item) => ({
        course_schedule_id: item.course_schedule_id,
        course_id: item.kursus.id,
        participant_id: item.participant_id,
        participant_type: authStore.data.participants.find(
          (participant) => participant.id === item.participant_id
        ).type,
      })),
    };

    loading.value = true;

    const { data } = await axios.post("user/checkout", formData.value);

    if (!addDataToFirebase(Date.now())) {
      throw new Error("Checkout failed");
    }

    showToast("Checkout succesfull", "success");

    modal.value.hide();

    cartItems.value = [];
    cartStore.getTotalItems();

    router.push("/dashboard");
  } catch (error) {
    console.error(error);
    showToast("Checkout failed", "error");
  } finally {
    loading.value = false;
  }
};

const addDataToFirebase = async (time) => {
  if (set(sRef(db, "pendaftaran/" + time), authStore.data.name)) {
    return true;
  }
  return false;
};

onBeforeMount(() => {
  fetchCartItems();
});

onMounted(() => {
  // Initialize the modal
  if (!modal.value) {
    targetEl.value = document.getElementById(instanceOptions.value.id);

    if (targetEl.value) {
      modal.value = new Modal(targetEl.value, options);
    } else {
      console.error("Modal element with ID 'confirmation-modal' not found.");
    }
  }
});

onBeforeUnmount(() => {
  if (modal.value) {
    modal.value.destroy();
    modal.value = null;
  }
});
</script>

<template>
  <div class="container mx-auto p-6 pt-28">
    <!-- Confirmation Modal -->
    <div
      id="confirmation-modal"
      tabindex="-1"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <button
            type="button"
            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            @click="modal.hide()"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-4 md:p-5 text-center">
            <svg
              class="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500">
              {{ instanceOptions.message }}
            </h3>
            <button
              type="button"
              class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              @click="
                instanceOptions.type === 'delete'
                  ? deleteItem(instanceOptions.data)
                  : checkout()
              "
            >
              Yes
            </button>
            <button
              type="button"
              class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              @click="modal.hide()"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Indicator -->
    <div class="text-center mb-6" v-if="loading">
      <div class="relative inline-block">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>

    <div v-show="!loading">
      <!-- Header -->
      <h2
        class="text-2xl font-bold text-primary mb-6 text-center md:text-left"
        v-if="cartItems.length"
      >
        Your Learning Plan
      </h2>

      <!-- Main Content Section -->
      <div class="grid grid-cols-12 gap-6" v-if="cartItems.length">
        <!-- Left Column -->
        <div
          class="col-span-12 md:col-span-12 lg:col-span-8 space-y-6 max-h-[665px] overflow-y-auto pr-2 px p-2"
        >
          <!-- Learning Plan Card -->
          <template v-for="item in cartItems">
            <div
              class="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
            >
              <!-- Course Details -->
              <div class="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  :src="baseUrl + item.kursus.thumbnail_url"
                  class="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h3 class="text-lg font-bold">{{ item.kursus.name }}</h3>
                  <p class="text-gray-600">
                    {{ "1" }} x Rp{{ formatNumber(item.kursus.price) }}
                  </p>

                  <select
                    class="mt-2 border rounded-md text-sm p-2 sm:w-auto md:w-[15rem]"
                    v-model="item.course_schedule_id"
                  >
                    <option
                      v-for="schedule in item.kursus.jadwal"
                      :value="schedule.id"
                    >
                      {{ schedule.day }},
                      {{ schedule.start_time.slice(0, 5) }} -
                      {{ schedule.end_time.slice(0, 5) }}
                    </option>
                  </select>

                  <select
                    v-if="authStore.data.register_as !== 'Peserta'"
                    class="mt-2 ml-4 border rounded-md text-sm p-2 sm:w-[13rem] md:w-[15rem]"
                    v-model="item.participant_id"
                  >
                    <option value="null" selected disabled>
                      Select Participant
                    </option>
                    <option
                      v-for="participant in authStore.data.participants.sort(
                        (a, b) => a.name.localeCompare(b.name)
                      )"
                      :value="participant.id"
                    >
                      {{ participant.name }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Delete Icon -->
              <button
                class="text-red-500 hover:text-red-700"
                @click="confirmDelete(item)"
              >
                <Icon icon="tabler-trash" class="w-6 h-6" />
              </button>
            </div>
          </template>
        </div>

        <!-- Right Column -->
        <div class="col-span-12 md:col-span-12 lg:col-span-4">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12">
              <div
                class="bg-white shadow-lg rounded-lg p-6 space-y-6 self-start"
              >
                <!-- Payment -->
                <div>
                  <h3 class="font-bold text-gray-800">Payment</h3>
                </div>

                <!-- Bank Account Section -->
                <div>
                  <div class="border border-gray-300 rounded-md p-4">
                    <h3 class="font-bold text-center">
                      BCA 11000222334 a/n Budi Chang
                    </h3>
                  </div>
                </div>

                <!-- Whatsapp Button -->
                <a
                  class="button flex items-center justify-center gap-2 mt-4 text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
                  :href="`https://api.whatsapp.com/send/?phone=6281385371513&text=Hello,%20I%20am%20${authStore.data.name}.%20I%20just%20completed%20the%20payment.%20Please%20confirm.%20Thank%20you!&type=phone_number&app_absent=0`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="tabler-brand-whatsapp" class="w-6 h-6" />
                  Send Proof of Payment
                </a>
              </div>
            </div>

            <div class="col-span-12">
              <div
                class="bg-white shadow-lg rounded-lg p-6 space-y-6 col-span-12 md:col-span-6 lg:col-span-4 self-start"
              >
                <!-- Referral Code -->
                <div>
                  <h3 class="font-bold text-gray-800">Referral Code</h3>
                  <input
                    type="text"
                    placeholder="Enter referral code (Leave empty if none)"
                    v-model="formData.referral_code"
                    class="w-full mt-2 border border-gray-300 rounded-md p-2"
                  />
                </div>

                <!-- Total Section -->
                <div>
                  <h3 class="font-bold text-gray-800">Total</h3>
                  <div class="border border-gray-300 rounded-md p-4 space-y-2">
                    <div v-for="item in cartItems" :key="item.id">
                      <div class="flex justify-between text-gray-600">
                        <span>{{ item.kursus.name }}</span>
                        <span>Rp{{ formatNumber(item.kursus.price) }}</span>
                      </div>
                    </div>

                    <div
                      class="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold"
                    >
                      <span>Total</span>
                      <span>
                        Rp{{
                          formatNumber(
                            cartItems.reduce(
                              (acc, item) => acc + item.kursus.price,
                              0
                            )
                          )
                        }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Checkout Button -->
                <button
                  class="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-blue-900 transition"
                  @click="confirmCheckout"
                >
                  Checkout
                </button>

                <span class="text-sm"
                  >*Please send proof of payment before checkout</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart Placeholder -->
      <div class="text-center" v-if="!cartItems.length">
        <h3 class="text-2xl font-bold text-gray-600">Your cart is empty</h3>
        <p class="text-gray-500 mt-2">
          Start your learning journey by adding a course to your cart.
        </p>
      </div>
    </div>
  </div>
</template>
