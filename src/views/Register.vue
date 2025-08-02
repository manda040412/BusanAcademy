<script setup>
import { Icon } from "@iconify/vue";
import axios from "axios";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { showToast } from "../plugins/acsys";

const router = useRouter();

const formData = ref({
  name: "",
  username: "",
  email: "",
  register_as: null,
  phone_number: "",
  whatsapp_number: "",
  number_of_participants: 1,
  participants: [
    {
      participant_name: "",
      grade: null,
    },
  ],
  password: "",
});

const directToLogin = (event) => {
  event.preventDefault();
  router.push("/login");
};

const submit = async () => {
  try {
    // Checker for empty or null value
    for (const key in formData.value) {
      if (formData.value[key] === "" || formData.value[key] === null) {
        showToast("Please fill all fields", "error");

        return;
      }
    }

    // Checker for empty or null value in participants
    for (const participant of formData.value.participants) {
      for (const key in participant) {
        if (participant[key] === "" || participant[key] === null) {
          showToast("Please fill all fields", "error");

          return;
        }
      }
    }

    // If password is less than 8 characters
    if (formData.value.password.length < 8) {
      showToast("Password must be at least 8 characters", "error");

      return;
    }

    const { data } = await axios.post("/auth/register", formData.value);

    showToast("Register Successfull", "success");

    router.push({ path: "/login", replace: true });
  } catch (error) {
    if (error.response.data.message === "Username harus berupa huruf kecil.") {
      showToast("Username must be lowercase", "error");
    } else {
      showToast(error.response.data.message, "error");
    }
  }
};

// Watchers
watch(
  () => formData.value.name,
  (value) => {
    // Upercase every first letter of the name
    formData.value.name = value.replace(/\b\w/g, (char) => char.toUpperCase());
  }
);

watch(
  () => formData.value.register_as,
  (value) => {
    if (value === "Peserta") {
      formData.value.participants = [
        {
          participant_name: formData.value.name || "",
          grade: null,
        },
      ];
    } else {
      formData.value.number_of_participants = 1;
      formData.value.participants = [
        {
          participant_name: "",
          grade: null,
        },
      ];
    }
  }
);

watch(
  () => formData.value.number_of_participants,
  (value) => {
    if (value > 5) {
      formData.value.number_of_participants = 5;

      showToast("Maximum participants is 5", "error");

      return;
    }

    let currentParticipants = formData.value.participants || [];

    const newParticipants = Array.from({ length: value }, (_, index) => {
      return (
        currentParticipants[index] || { participant_name: "", grade: null }
      );
    });

    formData.value.participants = newParticipants;
  }
);
</script>

<template>
  <section class="bg-gray-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-2xl xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl justify-center font-semibold text-gray-900"
          >
            <img
              class="w-13 h-12 mr-2"
              src="/src/assets/logo/busan-logo-1.png"
              alt="logo"
            />
            BUSAN ACADEMY
          </a>

          <hr />

          <form class="space-y-4 md:space-y-6" @submit.prevent="submit">
            <div class="grid sm:grid-cols-12 md:grid-cols-12 gap-4">
              <!-- Name -->
              <div class="relative sm:col-span-12 md:col-span-6">
                <label
                  for="name"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4 opacity-70"
                    >
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.546 2.196A2 2 0 0 0 2 12v1h12v-1a2 2 0 0 0-1.454-1.804A5.978 5.978 0 0 0 8 9Z"
                      />
                    </svg>
                  </span>
                  <input
                    name="name"
                    id="name"
                    v-model="formData.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>

              <!-- Username -->
              <div class="relative sm:col-span-12 md:col-span-6">
                <label
                  for="username"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4 opacity-70"
                    >
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.546 2.196A2 2 0 0 0 2 12v1h12v-1a2 2 0 0 0-1.454-1.804A5.978 5.978 0 0 0 8 9Z"
                      />
                    </svg>
                  </span>
                  <input
                    name="username"
                    id="username"
                    v-model="formData.username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    placeholder="Username"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="relative sm:col-span-12 md:col-span-6">
                <label
                  for="email"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500 opacity-70">
                    <Icon icon="tabler-mail" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="formData.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <!-- Register As -->
              <div class="relative sm:col-span-12 md:col-span-6">
                <label
                  for="register_as"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Register As
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4 opacity-70"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </span>
                  <select
                    v-model="formData.register_as"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    required
                  >
                    <option value="null" disabled selected>
                      Select Register As
                    </option>
                    <option value="Bapak">Mister</option>
                    <option value="Ibu">Madam</option>
                    <option value="Peserta">Participant</option>
                  </select>
                </div>
              </div>

              <!-- Phone Number -->
              <div class="relative sm:col-span-12 md:col-span-6">
                <label
                  for="phone_number"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4 opacity-70"
                    >
                      <path
                        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.27 11.36 11.36 0 004.25 1.23 1 1 0 011 .99v3.48a1 1 0 01-.89 1 19 19 0 01-17.92-17.92A1 1 0 014 4h3.5a1 1 0 01.99 1 11.36 11.36 0 001.23 4.26 1 1 0 01-.27 1.1l-2.2 2.2z"
                      />
                    </svg>
                  </span>
                  <input
                    name="phone_number"
                    id="phone_number"
                    v-model="formData.phone_number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>

              <!-- WhatsApp Number -->
              <div class="relative sm:col-span-12 md:col-span-6">
                <label
                  for="whatsapp_number"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  WhatsApp Number
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500 opacity-70">
                    <Icon icon="tabler-brand-whatsapp" />
                  </span>
                  <input
                    name="whatsapp_number"
                    id="whatsapp_number"
                    v-model="formData.whatsapp_number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    placeholder="WhatsApp Number"
                    required
                  />
                </div>
              </div>

              <div class="relative sm:col-span-12 md:col-span-12">
                <label
                  for="number_of_participants"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Number of Participants
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500 opacity-70">
                    <Icon icon="tabler-users-group" />
                  </span>

                  <input
                    name="number_of_participants"
                    id="number_of_participants"
                    v-model="formData.number_of_participants"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    placeholder="Number of Participants"
                    type="number"
                    min="0"
                    max="10"
                    style="
                      appearance: textfield;
                      -moz-appearance: textfield;
                      -webkit-appearance: none;
                    "
                    required
                    :disabled="formData.register_as === 'Peserta'"
                  />
                </div>
              </div>

              <div
                v-for="(participant, index) in formData.participants"
                :key="index"
                class="relative sm:col-span-12 md:col-span-12"
              >
                <div class="grid sm:grid-cols-12 md:grid-cols-12 gap-4">
                  <div class="relative sm:col-span-12 md:col-span-6">
                    <label
                      for="participant"
                      class="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Participant {{ index + 1 }}
                    </label>
                    <div class="flex items-center">
                      <!-- Email Icon -->
                      <span class="absolute left-3 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="w-4 h-4 opacity-70"
                        >
                          <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a5.978 5.978 0 0 0-4.546 2.196A2 2 0 0 0 2 12v1h12v-1a2 2 0 0 0-1.454-1.804A5.978 5.978 0 0 0 8 9Z"
                          />
                        </svg>
                      </span>

                      <input
                        :name="`participant_name_${index}`"
                        :id="`participant_name_${index}`"
                        v-model="participant.participant_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                        placeholder="Participant Name"
                        required
                      />
                    </div>
                  </div>

                  <div class="relative sm:col-span-12 md:col-span-6">
                    <label
                      for="grade"
                      class="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Grade
                    </label>
                    <div class="flex items-center">
                      <!-- Email Icon -->
                      <span class="absolute left-3 text-gray-500 opacity-70">
                        <Icon icon="tabler-book-2" />
                      </span>

                      <select
                        :name="`grade_${index}`"
                        :id="`grade_${index}`"
                        v-model="participant.grade"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                      >
                        <option value="null" disabled selected>
                          Select Grade
                        </option>
                        <option value="TK">TK</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                        <option value="SMK">SMK</option>
                        <option value="Lainnya">Lainnya</option>
                        <!-- <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="College">College</option>
                        <option value="Teacher">Teacher</option> -->
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Password -->
              <div class="relative sm:col-span-12">
                <label
                  for="password"
                  class="block mb-1 text-sm font-medium text-gray-900"
                >
                  Password (Min. 8 Characters)
                </label>
                <div class="flex items-center">
                  <span class="absolute left-3 text-gray-500 opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4 opacity-70"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                    required
                    v-model="formData.password"
                  />
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="mt-4">
              <button
                type="submit"
                class="w-full text-white bg-primary-400 hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
            </div>

            <p class="text-sm font-medium text-gray-700 text-center">
              Already have an account?
              <span
                class="font-semibold text-primary-600 hover:underline cursor-pointer"
                @click="directToLogin"
              >
                Login Now!
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
