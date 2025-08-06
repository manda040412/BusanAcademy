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
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center space-x-4 mb-8">
        <div class="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <i class="fas fa-handshake text-white text-2xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-[#303972]">Project Mentoring (6 months)</h1>
          <p class="text-gray-600 mt-2">A <strong>compact and intensive program</strong> designed to help you grasp the <strong>fundamentals</strong> and real-world <strong>use cases</strong> of <strong>AI and other technologies</strong>.
            Ideal for those aiming to <strong>apply to international universities</strong> and stand out with a strong <strong>tech-based portfolio</strong> and <strong>personalized mentorship</strong>.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Program Overview</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>6-month intensive project-based mentoring</li>
            <li>Flexible scheduling for personalized sessions</li>
            <li>Focus on building a strong project portfolio</li>
            <li>Guidance from experienced industry mentors</li>
            <li>Ideal for college admissions or career preparation</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Mentoring Focus</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>End-to-end project development lifecycle</li>
            <li>Practical application of programming & tech skills</li>
            <li>Problem-solving and debugging strategies</li>
            <li>Portfolio presentation and documentation</li>
            <li>Industry best practices and tools</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-laptop-code text-[#4F46E5] mr-2"></i> Web Development
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">WB101</span> - Web Development I</li>
            <li><span class="font-medium text-[#4F46E5]">WB102</span> - Web Development II</li>
            <li><span class="font-medium text-[#4F46E5]">WB103</span> - Web Development III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-mobile-alt text-[#4F46E5] mr-2"></i> Mobile Development
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">MD201</span> - Mobile Development I</li>
            <li><span class="font-medium text-[#4F46E5]">MD202</span> - Mobile Development II</li>
            <li><span class="font-medium text-[#4F46E5]">MD203</span> - Mobile Development III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-robot text-[#4F46E5] mr-2"></i> AI Applications
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">AI401</span> - AI Applications Development I</li>
            <li><span class="font-medium text-[#4F46E5]">AI402</span> - AI Applications Development II</li>
            <li><span class="font-medium text-[#4F46E5]">AI403</span> - AI Applications Development III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-wifi text-[#4F46E5] mr-2"></i> Internet of Things (IoT)
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">IOT301</span> - IoT Project I</li>
            <li><span class="font-medium text-[#4F46E5]">IOT302</span> - IoT Project II</li>
            <li><span class="font-medium text-[#4F46E5]">IOT303</span> - IoT Project III</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md shadow-sm" role="alert">
        <div class="flex items-center">
          <div class="py-1"><i class="fas fa-info-circle text-blue-500 mr-2"></i></div>
          <div>
            <p class="font-bold">Choose Your Project Focus:</p>
            <p class="text-sm">Participants will select one project track (Web Development, Mobile Development, AI Applications, or Internet of Things) to specialize in during the 6-month mentoring program.</p>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a
          href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
          target="_blank"
          class="inline-block bg-[#4F46E5] text-white px-8 py-3 rounded-lg hover:bg-[#4338CA] transition-colors"
        >
          Register for Mentoring
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Remember to import Font Awesome if you haven't globally in your project */
/* e.g., in main.js or a base CSS file: @import '@fortawesome/fontawesome-free/css/all.min.css'; */
</style>