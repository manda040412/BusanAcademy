import axios from "axios";
import { initFlowbite } from "flowbite";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp, nextTick } from "vue";
import App from "./App.vue";
import { showToast } from "./plugins/acsys";
import router from "./router";
import { useAuthStore } from "./store/auth";
import { useCartStore } from "./store/cart";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

initFlowbite();

app.use(router);
app.use(pinia);

app.mount("#app");

// Set axios base URL
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL + "/api";

// Set Authorization header if token exists in localStorage
const authStore = useAuthStore();

const cartStore = useCartStore();

if (authStore.token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${authStore.token}`;
}

// Wait for the router to be fully ready before executing logic
nextTick(async () => {
  // Wait for the router to be ready (in case of any asynchronous routing)
  await router.isReady();

  // Determine if the current route is not "pendaftaran" (registration page)
  const authCheck = router.currentRoute.value.meta.requiresAuth;

  // Register axios interceptor for response handling
  axios.interceptors.response.use(
    (response) => response, // If the response is successful, just return it
    (error) => {
      if (error.response && error.response.status === 401) {
        showToast("Please login first", "error");
        authStore.logout();

        // remove this element class
        document
          .querySelector(
            ".bg-gray-900\\/50.dark\\:bg-gray-900\\/80.fixed.inset-0.z-40"
          )
          ?.remove();

        // If the response status is 401 and the current route is not "pendaftaran", log out
        router.push({ name: "login" }); // Redirect to the login page
        // window.location.href = "/login";
      }

      return Promise.reject(error); // Reject the error to continue the promise chain
    }
  );

  // Fetch user data only if authCheck is true (i.e., user is authenticated)
  if (authCheck || authStore.isLoggedIn) {
    try {
      const response = await axios.get("/auth/me");
      authStore.data = response.data;

      const response2 = await axios.get("user/peserta");
      authStore.peserta = response2.data.data;

      const response3 = await axios.get("user/total-item-keranjang");
      cartStore.total_items = response3.data;
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }
});
