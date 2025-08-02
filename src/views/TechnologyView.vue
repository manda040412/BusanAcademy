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
          <h3 class="text-2xl font-bold mb-5">Technology</h3>
          <p>
            Melatih pengetahuan bagaimana cara menggunakan, menganalisa dan
            memahami teknologi sebagai sarana yang dapat mempengaruhi, memenuhi,
            dan mempermudah kehidupan.
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
                  <td>Python Programming 2 / #</td>
                  <td>Java Programming</td>
                </tr>
                <tr>
                  <td>Database Systems</td>
                  <td>Data Science 1 *</td>
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
                  <div class="text-lg font-black">Database System</div>
                  Mempersiapkan peserta untuk memahami konsep dasar dari
                  database dan perintah/query untuk menginput, membaca, dan
                  memanipulasi data di dalam database sebagai gudang untuk
                  penyimpanan data.
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
                  <div class="text-lg font-black">Python Programming 2</div>
                  Mempersiapkan peserta untuk memahami konsep lanjutan dari
                  pemrograman Python beserta dengan cara pakai dan memecahkan
                  masalah pada studi kasus yang diberikan.
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
                  <div class="text-lg font-black">C / C++ Programming</div>
                  Memberikan konsep dasar pemrograman C/C++ kepada para peserta.
                  Course ini juga dapat memperdalam pemahaman peserta terhadap
                  konsep pemrograman berbasis obyek.
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
                  <div class="text-lg font-black">Java Programming</div>
                  Memberikan pemahaman tentang dasar-dasar pemrograman Java dan
                  memperdalam pengetahuan pemrograman berbasis obyek kepada para
                  peserta.
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
            <span>Computer Science</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Information Systems</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Software Engineering</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Cyber Security</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Information Technology</span>
          </div>
          <div role="alert" class="alert mb-2">
            <span>Artificial Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
