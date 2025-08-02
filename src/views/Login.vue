<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { showToast } from "../plugins/acsys";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";

const authStore = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();

const formData = ref({
  username: "",
  password: "",
});

const directToRegister = (event) => {
  event.preventDefault();
  router.push("/register");
};

const submit = async () => {
  try {
    const { data } = await axios.post("/auth/login", formData.value);

    showToast("Login Successfull", "success");

    authStore.login(data.user, data.token);

    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    const response3 = await axios.get("user/total-item-keranjang");
    cartStore.total_items = response3.data;

    if (data.user.role.id === 1) {
      router.push({ path: "/", replace: true });
      return;
    }

    router.push({ path: "/dashboard", replace: true });
  } catch (error) {
    showToast("Login failed", "error");
  }
};
</script>

<template>
  <section class="bg-gray-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0"
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
            <!-- Email Input with Icon -->
            <div class="relative">
              <label
                for="username"
                class="block mb-1 text-sm font-medium text-gray-900"
              >
                Username
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
                  name="username"
                  id="username"
                  v-model="formData.username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-8 py-2 text-sm"
                  placeholder="username"
                  required
                />
              </div>
            </div>

            <!-- Password Input with Icon -->
            <div class="relative">
              <label
                for="password"
                class="block mb-1 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div class="flex items-center">
                <!-- Password Icon (Login Icon) -->
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

            <!-- Remember me and Forgot password -->
            <div class="flex items-center justify-between">
              <!-- <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 cursor-pointer"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500">
                    Remember me
                  </label>
                </div>
              </div> -->
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <!-- Sign In Button -->
            <button
              type="submit"
              class="w-full text-white bg-primary-400 hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>

            <p class="text-sm font-medium text-gray-700 text-center">
              Don't have an account?
              <span
                class="font-semibold text-primary-600 hover:underline cursor-pointer"
                @click="directToRegister"
              >
                Register Now!
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
