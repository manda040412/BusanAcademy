<script setup>
import { Icon } from "@iconify/vue";
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";

const router = useRouter();

const authStore = useAuthStore();
const cartStore = useCartStore();

const isDropdownOpen = ref(false);

const closeAllDetails = () => {
  const details = document.querySelectorAll("details");
  details.forEach((detail) => {
    detail.removeAttribute("open");
  });
};

window.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "summary") {
    if (event.target.parentElement.getAttribute("open")) {
      closeAllDetails();
    }
  } else {
    closeAllDetails();

    if (
      event.target.className &&
      (typeof event.target.className === "string"
        ? !event.target.className.includes("profile-button")
        : !event.target.className.baseVal?.includes("profile-button"))
    ) {
      isDropdownOpen.value = false;
    }
  }
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const clickHandler = async (e) => {
  if (!e.target.id) return;

  const url = window.location.pathname.split("/").pop();

  // Remove active classes from all active elements
  const activeElements = document.querySelectorAll(".disable-focus");

  activeElements.forEach((element) => {
    element.classList.remove(
      "router-link-active",
      "router-link-exact-active",
      "disable-focus",
      "hover-none"
    );
  });

  await delay(100);

  let targetElement;

  if (e.target.id === "home") {
    if (url) router.push("/");

    targetElement = document.querySelectorAll(".home");
    window.scrollTo(0, 0);
  }
  // } else if (e.target.id === "stem") {
  //   if (url) router.push("/");

  //   await delay(150);

  //   targetElement = document.querySelectorAll(`.${e.target.id}`);
  //   document
  //     .getElementById(e.target.id + "-content")
  //     .scrollIntoView({ behavior: "smooth" });
  // }
  else {
    targetElement = document.querySelectorAll(`.${e.target.id}`);

    await nextTick();

    router.push("/" + e.target.id);
  }

  // Add active classes to the target element
  if (targetElement) {
    targetElement.forEach((element) => {
      element.classList.add(
        "router-link-active",
        "router-link-exact-active",
        "disable-focus",
        "hover-none"
      );
    });
  }
};

const removeActiveClasses = () => {
  const activeElements = document.querySelectorAll(".disable-focus");

  activeElements.forEach((element) => {
    element.classList.remove(
      "router-link-active",
      "router-link-exact-active",
      "disable-focus",
      "hover-none"
    );
  });
};

const logout = () => {
  authStore.logout();

  window.location.href = "/login";
};

onMounted(() => {
  const url = window.location.pathname.split("/").pop();

  if (url) {
    const elements = document.querySelectorAll(`.${url}`);

    elements.forEach((element) => {
      element.classList.add(
        "router-link-active",
        "router-link-exact-active",
        "disable-focus",
        "hover-none"
      );
    });

    return;
  } else {
    const home = document.querySelectorAll(".home");

    home.forEach((element) => {
      element.classList.add(
        "router-link-active",
        "router-link-exact-active",
        "disable-focus",
        "hover-none"
      );
    });
  }
});
</script>

<template>
  <div class="navbar bg-base-100 fixed z-50 shadow-lg">
    <div class="navbar-start flex justify-between w-full lg:w-3/6">
      <a href="/" class="text-xl flex flex-row align-middle justify-center">
        <span class="flex align-middle items-center font-bold">
          BUSAN ACADEMY
        </span>
      </a>

      <div class="dropdown dropdown-end">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost md:w-full lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-md w-[45vh] -mt-1 lg:hidden"
        >
          <li class="mb-1">
            <button id="home" class="home" @click="clickHandler">Home</button>
          </li>
          <!-- <li class="mb-1">
            <button id="stem" class="stem" type="button" @click="clickHandler">
              STEM
            </button>
          </li> -->
          <li class="mb-1">
            <details open>
              <summary class="hover:menu-dropdown-toggle menu-dropdown-show">
                Learning Solutions
              </summary>
              <ul>
                <li>
                  <button
                    id="regular-class"
                    class="regular-class"
                    @click="clickHandler"
                  >
                    Regular Class
                  </button>
                </li>
                <li>
                  <button
                    id="weekend-class"
                    class="weekend-class"
                    @click="clickHandler"
                  >
                    Weekend Class
                  </button>
                </li>
                <li>
                  <button
                    id="small-group"
                    class="small-group"
                    @click="clickHandler"
                  >
                    Small Group
                  </button>
                </li>
                <li>
                  <button
                    id="intensive-course"
                    class="intensive-course"
                    @click="clickHandler"
                  >
                    Intensive Course
                  </button>
                </li>
                <li>
                  <button
                    id="bootcamp"
                    class="bootcamp"
                    @click="clickHandler"
                  >
                    Bootcamp
                  </button>
                </li>
                <li>
                  <button
                    id="project-mentoring"
                    class="project-mentoring"
                    @click="clickHandler"
                  >
                    Project Mentoring
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li class="mb-1">
            <button id="about-us" class="about-us" @click="clickHandler">
              About Us
            </button>
          </li>
          <li class="mb-1">
            <button id="contact-us" class="contact-us" @click="clickHandler">
              Contact Us
            </button>
          </li>
          <li>
            <a
              href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
              target="_blank"
              class="btn-success font-bold"
            >
              Join Trial Class!
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-center hidden lg:flex">
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 font-bold text-sm">
          <li class="mb-1">
            <button id="home" class="home" @click="clickHandler">Home</button>
          </li>
          <!-- <li>
            <button id="stem" class="stem" type="button" @click="clickHandler">
              STEM
            </button>
          </li> -->
          <li>
            <details>
              <summary class="hover:menu-dropdown-toggle menu-dropdown-show">
                Learning Solutions
              </summary>
              <ul
                class="w-[350px] bg-gray-100 rounded-md -mt-ul menu-dropdown menu-dropdown-show"
              >
                <li>
                  <button
                    id="regular-class"
                    class="regular-class"
                    @click="clickHandler"
                  >
                    Regular Class
                  </button>
                </li>
                <li>
                  <button
                    id="weekend-class"
                    class="weekend-class"
                    @click="clickHandler"
                  >
                    Weekend Class
                  </button>
                </li>
                <li>
                  <button
                    id="small-group"
                    class="small-group"
                    @click="clickHandler"
                  >
                    Small Group
                  </button>
                </li>
                <li>
                  <button
                    id="intensive-course"
                    class="intensive-course"
                    @click="clickHandler"
                  >
                    Intensive Course
                  </button>
                </li>
                <li>
                  <button
                    id="bootcamp"
                    class="bootcamp"
                    @click="clickHandler"
                  >
                    Bootcamp
                  </button>
                </li>
                <li>
                  <button
                    id="project-mentoring"
                    class="project-mentoring"
                    @click="clickHandler"
                  >
                    Project Mentoring
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button id="about-us" class="about-us" @click="clickHandler">
              About Us
            </button>
          </li>
          <li>
            <button id="contact-us" class="contact-us" @click="clickHandler">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-end hidden lg:flex space-x-4">
      <!-- <router-link
        v-if="!authStore.isLoggedIn"
        to="/login"
        class="btn btn-primary font-bold text-sm px-4 py-2"
        id="login"
      >
        Login
      </router-link> -->

      <div class="flex items-center">
        <!-- Icon -->
        <!-- <div class="flex items-center space-x-4">
          <div
            v-if="authStore.isLoggedIn && authStore.data?.role?.id !== 1"
            @click="router.push('/cart') && removeActiveClasses()"
            class="relative p-2 rounded-full cursor-pointer hover:bg-gray-200 hover:shadow-md transition duration-300"
          > -->
            <!-- Badge -->
            <!-- <span
              v-if="cartStore.total_items > 0"
              class="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 bg-red-600 text-white text-xs font-bold rounded-full"
            >
              {{ cartStore.total_items }}
            </span>

            <span>
              <Icon
                icon="tabler-shopping-cart"
                class="text-2xl text-gray-600 hover:text-gray-800"
              />
            </span>
          </div>
        </div> -->

        <!-- Divider -->
        <!-- <div
          class="h-6 w-px bg-gray-300 mx-4"
          v-if="authStore.isLoggedIn"
        ></div> -->

        <!-- Profile -->
        <!-- <div
          v-if="authStore.isLoggedIn"
          class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-primary rounded-full cursor-pointer profile-button"
          @click="isDropdownOpen = true"
        > -->
          <!-- <span class="font-medium text-white profile-button">
            {{
              (authStore.data?.username || '') // <-- CHANGE THIS LINE
                .split(" ")
                .slice(0, 2)
                .map((word) => word.charAt(0).toUpperCase())
                .join("")
            }}
          </span>
        </div> -->

        <!-- Dropdown menu -->
        <div
          v-if="isDropdownOpen"
          class="absolute -mt-1 right-5 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow z-50"
          style="top: 100%"
        >
          <ul
            class="text-sm text-gray-700"
            aria-labelledby="dropdownDividerButton"
          >
            <li v-if="authStore.data?.role.id !== 1">
              <button
                @click="router.push('/dashboard') && removeActiveClasses()"
                class="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Dashboard
              </button>
            </li>
          </ul>
          <div class="py-2">
            <button
              @click="logout"
              class="block px-4 py-2 text-sm text-left text-red-500 hover:text-red-600 w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
        target="_blank"
        class="btn btn-success text-sm px-4 py-2"
      >
        Join Trial Class!
      </a>
    </div>
  </div>
</template>
