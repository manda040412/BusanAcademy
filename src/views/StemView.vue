<script setup>
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>
<template>
  <div class="pt-[68px]">
    <div class="container mx-auto px-10">
      <!-- What is stem -->
      <div class="my-10">
        <h2 class="text-3xl font-bold text-center mb-5">What is STEM?</h2>
        <p class="text-center font-semibold">
          STEM merupakan singkatan dari Science, Technology, Engineering dan
          Mathematics. STEM telah menjadi fondasi dalam dunia pendidikan dan
          inovasi dalam dunia ini. Sebagian besar teknologi canggih dan
          pekerjaan terkait, ada hubungannya dengan kelompok studi ini.
        </p>
      </div>

      <div class="my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="col-span-1">
            <div
              class="card w-100 h-[100%] bg-primary-400 text-primary-content"
            >
              <div class="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-flask"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-lisnecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 3l6 0" />
                  <path d="M10 9l4 0" />
                  <path
                    d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6"
                  />
                </svg>
                <h2 class="card-title my-2">Science</h2>
                <p>
                  Melatih kemampuan dalam menggunakan pengetahuan ilmiah dan
                  memproses penyelidikan dan penelitian yang dapat digunakan
                  untuk mengidentifikasi bukti dan menjawab permasalahan dalam
                  kehidupan.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div
              class="card w-100 h-[100%] bg-primary-400 text-primary-content"
            >
              <div class="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-cpu"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"
                  />
                  <path d="M9 9h6v6h-6z" />
                  <path d="M3 10h2" />
                  <path d="M3 14h2" />
                  <path d="M10 3v2" />
                  <path d="M14 3v2" />
                  <path d="M21 10h-2" />
                  <path d="M21 14h-2" />
                  <path d="M14 21v-2" />
                  <path d="M10 21v-2" />
                </svg>
                <h2 class="card-title my-2">Technology</h2>
                <p>
                  Melatih pengetahuan bagaimana cara menggunakan, menganalisa
                  dan memahami teknologi sebagai sarana yang dapat mempengaruhi,
                  memenuhi, dan mempermudah kehidupan.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div
              class="card w-100 h-[100%] bg-primary-400 text-primary-content"
            >
              <div class="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-settings-up"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12.501 20.93c-.866 .25 -1.914 -.166 -2.176 -1.247a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.074 .26 1.49 1.296 1.252 2.158"
                  />
                  <path d="M19 22v-6" />
                  <path d="M22 19l-3 -3l-3 3" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                </svg>
                <h2 class="card-title my-2">Engineering</h2>
                <p>
                  Melatih pemahaman dan pengetahuan untuk mendesain,
                  mengaplikasikan, mereplikasi serta merekayasa sebuah karya
                  berupa peralatan, sistem dan mesin yang dapat mempermudah dan
                  mempercepat proses produksi barang dan jasa manusia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <div
              class="card w-100 h-[100%] bg-primary-400 text-primary-content"
            >
              <div class="card-body items-center text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-numbers"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 10v-7l-2 2" />
                  <path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" />
                  <path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" />
                  <path d="M6.5 10h3" />
                </svg>
                <h2 class="card-title my-2">Mathematics</h2>
                <p>
                  Melatih keterampilan dalam berpikir secara rasional dan logis,
                  menganalisis sesuatu, mengkomunikasikan ide, merumuskan,
                  memecahkan dan menafsirkan solusi dan menggunakan nya secara
                  sistematik dan terstruktur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stem Preparation -->
      <div class="stem-preparation-anchor" id="stem-preparation-content" />

      <div class="my-10 px-14">
        <h2 class="text-3xl font-bold text-center mb-5">Stem Preparation</h2>
        <p class="text-center">
          1 year full course program for students who will take one of the major
          STEM courses (Science, Technology, Engineering, and Mathematics). This
          program prepares prospective students who will be studying in STEM
          with an introductory course. There are 6 subjects to be given in the
          trimester and can be completed in 1 year.
        </p>
      </div>

      <div class="my-10">
        <ul class="timeline timeline-vertical hidden lg:flex">
          <li>
            <div class="timeline-start">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="../assets/images/science.jpg" />
                </figure>
                <div
                  class="card-body d-flex flex-row justify-between items-center"
                >
                  <h2 class="card-title">Science</h2>
                  <router-link to="courses/science" class="link">
                    See more
                  </router-link>
                </div>
              </div>
            </div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-end">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="../assets/images/technology.jpg" />
                </figure>
                <div
                  class="card-body d-flex flex-row justify-between items-center"
                >
                  <h2 class="card-title">Technology</h2>
                  <router-link to="courses/technology" class="link">
                    See more
                  </router-link>
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-start">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="../assets/images/engineering.jpg" />
                </figure>
                <div
                  class="card-body d-flex flex-row justify-between items-center"
                >
                  <h2 class="card-title">Engineering</h2>
                  <router-link to="courses/engineering" class="link">
                    See more
                  </router-link>
                </div>
              </div>
            </div>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="timeline-end">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src="../assets/images/mathemathic.jpg" />
                </figure>
                <div
                  class="card-body d-flex flex-row justify-between items-center"
                >
                  <h2 class="card-title">Mathematics</h2>
                  <router-link to="courses/mathematics" class="link">
                    See more
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
          <div class="card card-compact w-100 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/images/science.jpg" />
            </figure>
            <div class="card-body d-flex flex-row justify-between items-center">
              <h2 class="card-title">Science</h2>
              <router-link to="courses/science" class="link">
                See more
              </router-link>
            </div>
          </div>
          <div class="card card-compact w-100 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/images/technology.jpg" />
            </figure>
            <div class="card-body d-flex flex-row justify-between items-center">
              <h2 class="card-title">Technology</h2>
              <router-link to="courses/technology" class="link">
                See more
              </router-link>
            </div>
          </div>
          <div class="card card-compact w-100 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/images/engineering.jpg" />
            </figure>
            <div class="card-body d-flex flex-row justify-between items-center">
              <h2 class="card-title">Engineering</h2>
              <router-link to="courses/engineering" class="link">
                See more
              </router-link>
            </div>
          </div>
          <div class="card card-compact w-100 bg-base-100 shadow-xl">
            <figure>
              <img src="../assets/images/mathemathic.jpg" />
            </figure>
            <div class="card-body d-flex flex-row justify-between items-center">
              <h2 class="card-title">Matematics</h2>
              <router-link to="courses/mathematics" class="link">
                See more
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
