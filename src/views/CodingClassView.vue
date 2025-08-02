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
    <div class="container mx-10 px-3 my-10">
      <h2 class="text-3xl font-bold text-center mb-5">
        CODING LESSONS FOR COMPUTING MAJORS
      </h2>
      <p class="text-center">
        Coding lessons for prospective students of computing majors (Computer
        Science, Data Science, Information Systems, Computer Engineering, Cyber
        Security, Software Engineering) or STEM majors.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        <div class="card w-100 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="../assets/images/python.png"
              class="img-fluid w-20 relative"
              alt="Python"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Python</h2>
            <ul>
              <li>Python Programming 1</li>
              <li>Python Programming 2</li>
              <li>Python Programming 3</li>
            </ul>
            <div class="card-actions mt-5">
              <a
                href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
                target="_blank"
                class="btn btn-primary"
              >
                Enroll
              </a>
            </div>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="../assets/images/java.png"
              class="img-fluid w-20 relative"
              alt="Python"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Java</h2>
            <ul>
              <li>Java Programming 1</li>
              <li>Java Programming 2</li>
              <li>Java Programming 3</li>
            </ul>
            <div class="card-actions mt-5">
              <a
                href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
                target="_blank"
                class="btn btn-primary"
              >
                Enroll
              </a>
            </div>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="../assets/images/js.png"
              class="img-fluid w-20 relative"
              alt="Python"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Javascript</h2>
            <ul>
              <li>Javascript Programming 1</li>
              <li>Javascript Programming 2</li>
              <li>Javascript Programming 3</li>
            </ul>
            <div class="card-actions mt-5">
              <a
                href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
                target="_blank"
                class="btn btn-primary"
              >
                Enroll
              </a>
            </div>
          </div>
        </div>
        <div class="card w-100 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="../assets/images/c++.png"
              class="img-fluid w-20 relative"
              alt="Python"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">C++</h2>
            <ul>
              <li>C++ Programming 1</li>
              <li>C++ Programming 2</li>
              <li>C++ Programming 3</li>
            </ul>
            <div class="card-actions mt-5">
              <a
                href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
                target="_blank"
                class="btn btn-primary"
              >
                Enroll
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-10 my-10">
      <h2 class="text-3xl font-bold text-center">Bootcamp</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <div role="alert" class="alert">
          <span>Python Programming</span>
        </div>
        <div role="alert" class="alert">
          <span>Java Programming</span>
        </div>
        <div role="alert" class="alert">
          <span>Javascript Programming</span>
        </div>
        <div role="alert" class="alert">
          <span>C++ Programming</span>
        </div>
        <div role="alert" class="alert">
          <span>Intro to Artificial Intelligence</span>
        </div>
        <div role="alert" class="alert">
          <span>Intro to Internet of Things</span>
        </div>
        <div role="alert" class="alert">
          <span>Intro to Data Science</span>
        </div>
        <div role="alert" class="alert">
          <span>Intro to 3D Modeling</span>
        </div>
      </div>

      <!-- Note -->
      <p class="text-sm text-gray-600 mt-5">
        Each course will be taught over 2 days, @ 3 hours/meeting/day. Minimum 6
        students per class (group). For more information, call
        <a
          href="https://api.whatsapp.com/send/?phone=6281385371513&text&type=phone_number&app_absent=0"
          class="font-bold text-primary underline"
        >
          +62 813-8537-1513
        </a>
      </p>
    </div>
  </div>
</template>
