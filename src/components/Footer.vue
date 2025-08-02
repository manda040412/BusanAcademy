<script setup>
import { nextTick } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

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

    targetElement = document.getElementById("home");
    window.scrollTo(0, 0);
  } else if (e.target.id === "stem") {
    if (url) router.push("/");

    await delay(150);

    targetElement = document.querySelector(`.${e.target.id}`);
    document
      .getElementById(e.target.id + "-content")
      .scrollIntoView({ behavior: "smooth" });
  } else {
    targetElement = document.querySelector(`.${e.target.id}`);

    await nextTick();

    router.push("/" + e.target.id);
  }

  // Add active classes to the target element
  if (targetElement) {
    targetElement.classList.add(
      "router-link-active",
      "router-link-exact-active",
      "disable-focus",
      "hover-none"
    );
  }
};
</script>

<template>
  <footer class="footer p-10 bg-gray-900 text-base-content">
    <aside>
      <a href="/">
        <img src="../assets/images/busan-logo.png" class="h-[150px]" />
      </a>
    </aside>
    <nav class="text-white">
      <h6 class="footer-title">Site Map</h6>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScFljgSSengUeHa6DlkZeZ1Jh4NvC-62CHqv-tIcs4sYLAjHQ/viewform"
        target="_blank"
        class="link link-hover"
      >
        Join Us
      </a>
      <a
        class="link link-hover"
        href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
        target="_blank"
      >
        Free Trial
      </a>
      <button id="about-us" class="about-us" @click="clickHandler">
        About Us
      </button>
    </nav>
    <nav class="text-white">
      <h6 class="footer-title">Contact</h6>
      <a
        class="link link-hover"
        href="https://api.whatsapp.com/send/?phone=6281385371513&text&type=phone_number&app_absent=0"
        target="_blank"
        >+62 813-8537-1513</a
      >
      <a> hello@BusanAcademy.ID</a>
    </nav>
    <nav class="text-white">
      <h6 class="footer-title">Operational Time</h6>
      <p>Monday - Friday: 09.00 - 17.00</p>
      <p>Saturday - Sunday: <span class="text-red-500">Closed</span></p>
    </nav>
  </footer>

  <footer
    class="footer px-10 py-4 border-t bg-gray-900 text-base-content border-base-300"
  >
    <aside class="text-left grid-flow-col text-white">
      <p>
        91 District B8, BSD City
      </p>
    </aside>
    <nav class="md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a
          class="text-white"
          href="https://www.instagram.com/busanacademy.id/?hl=id"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-instagram"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
            />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
        <a
          class="text-white"
          href="https://www.facebook.com/people/busanacademyid/100087396644675/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-facebook"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </a>
        <a
          class="text-white"
          href="https://wa.me/6281385371513"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-whatsapp"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path
              d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
            />
          </svg>
        </a>
      </div>
    </nav>
  </footer>
</template>
