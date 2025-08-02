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
    <div class="container mx-auto px-3 my-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div class="bg-white p-5 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-5">Engineering</h3>
          <p>
            Melatih pemahaman dan pengetahuan untuk mendesain, mengaplikasikan,
            mereplikasi serta merekayasa sebuah karya berupa peralatan, sistem
            dan mesin yang dapat mempermudah dan mempercepat proses produksi
            barang dan jasa manusia.
          </p>

          <div class="overflow-x-auto mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th>Trisemester 1</th>
                  <th>Trisemester 2</th>
                  <th>Trisemester 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Python Programming 1</td>
                  <td>Data Science 1 *</td>
                  <td>Robotics</td>
                </tr>
                <tr>
                  <td>Electronics 1</td>
                  <td>Electronics 2</td>
                  <td>Internet of Things</td>
                </tr>
              </tbody>
            </table>

            <!-- note -->
            <p class="text-sm text-gray-500 mt-3">
              # Choose Python II or C/C++ <br />
              * Data Science 2 ditawarkan diluar paket.
            </p>

            <ul
              class="timeline timeline-snap-icon timeline-compact timeline-vertical mt-3"
            >
              <li>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <div class="text-lg font-black">Python Programming 1</div>
                  Mempersiapkan peserta untuk memahami computational thinking
                  dan pemrograman Python secara fundamental.
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
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <div class="text-lg font-black">Electronics 1</div>
                  Mempersiapkan peserta untuk memahami elektronika secara
                  fundamental, sebagai dasar dalam sistem elektronika, khususnya
                  Robotika / IoT
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
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <div class="text-lg font-black">Data Science</div>
                  Memberikan pemahaman dasar-dasar sistem basis data, membuat
                  pemodelan data, membangun basis data terbaik yang akan
                  diterapkan pada sistem informasi.
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
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <div class="text-lg font-black">Electronics 2</div>
                  Mempersiapkan peserta dalam memahami sistem digital, sebagai
                  dasar dalam sistem berbasis microcontroller pada Robotika /
                  sistem IoT
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
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <div class="text-lg font-black">Robotics</div>
                  Memberikan dasar pengetahuan dunia robotika serta skills set
                  dasar agar peserta dapat mengembangkan sebuah robot yang dapat
                  berfungsi untuk menyelesaikan tugas (task) tertentu.
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
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end mb-10">
                  <div class="text-lg font-black">Internet of Things</div>
                  Course ini mempersiapkan peserta dalam konsep perancangan,
                  desain, dan pembuatan sistem IoT dalam kasus nyata (real
                  case).
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white p-5 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-5">Major</h3>
          <div role="alert" class="alert mb-2">
            <span>Computer Engineering</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Electrical Engineering</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Computer Science</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Computer Systems</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Information Technology</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Informatics</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
