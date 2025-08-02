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
          <h3 class="text-2xl font-bold mb-5">Science</h3>
          <p>
            Melatih kemampuan dalam menggunakan pengetahuan ilmiah dan memproses
            penyelidikan dan penelitian yang dapat digunakan untuk
            mengidentifikasi bukti dan menjawab permasalahan dalam kehidupan.
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
                  <td>Biology</td>
                  <td>Bio Technology</td>
                </tr>
                <tr>
                  <td>Statistics 1</td>
                  <td>Chemistry</td>
                  <td>Food Technology</td>
                </tr>
              </tbody>
            </table>

            <!-- note -->
            <p class="text-sm text-gray-500 mt-3">
              Note : Boleh ambil tambahan 1 course di jurusan lain selama jadwal
              tidak bentrok dengan course wajib.
            </p>
          </div>
        </div>
        <div class="bg-white p-5 rounded-lg shadow-md">
          <h3 class="text-2xl font-bold mb-5">Major</h3>
          <div role="alert" class="alert mb-2">
            <span>Food Technology</span>
          </div>
          <div role="alert" class="alert">
            <span>Bio Technology</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
