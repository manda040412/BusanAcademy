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
          <h3 class="text-2xl font-bold mb-5">Mathematics</h3>
          <p>
            Melatih keterampilan dalam berpikir secara rasional dan logis,
            menganalisis sesuatu, mengkomunikasikan ide, merumuskan, memecahkan
            dan menafsirkan solusi dan menggunakan nya secara sistematik dan
            terstruktur.
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
                  <td>Data Science 2 / R Programming</td>
                </tr>
                <tr>
                  <td>Statictics 1</td>
                  <td>Statistics 2</td>
                  <td>Machine Learning</td>
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
                  <div class="text-lg font-black">Statistics 1</div>
                  Statistik I menjelaskan prinsip-prinsip dasar metode statistik
                  dan metode analisis sederhana yang dapat diterapkan pada
                  berbagai bidang bisnis dan ekonomi terapan. Topik yang dibahas
                  diantaranya adalah statistik deskriptif, konsep probabilitas,
                  distribusi diskrit dan kontinu.
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
                  <div class="text-lg font-black">Statistics 2</div>
                  Statistics 2 membahas prinsip-prinsip pengujian statistik dan
                  analisis data sederhana. Topik yang diajarkan antara lain
                  pengujian hipotesis pada suatu populasi, pengolahan,
                  pemodelan, dan analisa data regresi linear menggunakan Python.
                  Selain itu juga akan diperkenalkan dengan konsep time series
                  dan forecasting.
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
                  <div class="text-lg font-black">Data Science 2</div>
                  Data Science 2 mempersiapkan peserta untuk memperoleh
                  keterampilan dan pengetahuan praktis untuk mengelola
                  proyek-proyek ilmu data di industri, misalkan menganalisa data
                  dan membuat keputusan bisnis dengan bantuan algoritma dan
                  statistik. Mahasiswa yang mengambil mata kuliah ini harus
                  memiliki pengetahuan dasar tentang pemrograman dan statistik
                  Python.
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
                  <div class="text-lg font-black">Machine Learning</div>
                  Mempersiapkan peserta untuk memahami berbagai algoritma atau
                  cara untuk mendapatkan prediksi yang tepat mengenai studi
                  kasus yang diberikan, sehingga dapat mendukung proses
                  pengambilan keputusan menggunakan Python.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-white p-5 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-5">Major</h3>
          <div role="alert" class="alert mb-2">
            <span>Applied Mathematics</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Data Science</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Statistics</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Actuary</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Business Mathematics</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Acturial Science</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
