<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center space-x-4 mb-8">
        <div class="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <i class="fas fa-users text-white text-2xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-[#303972]">Small Group (3 months)</h1>
          <p class="text-gray-600 mt-2">Tailored for <strong>12th grade students</strong> and <strong>first-year university students</strong> who want to <strong>build a strong foundation</strong> in <strong>programming</strong> before entering or during their early university journey.
            This class offers a <strong>supportive, focused environment</strong> to help students gain <strong>academic confidence</strong> and <strong>technical readiness</strong>.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Program Overview</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>3-month focused study group</li>
            <li>2 sessions per week</li>
            <li>2 hours per session</li>
            <li>Maximum 3 students per group for personalized attention</li>
            <li>Designed for university preparation or supplementary learning</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Key Learning Focus</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>In-depth understanding of core programming languages</li>
            <li>Fundamental concepts in Computer Science domains</li>
            <li>Preparation for university-level coursework</li>
            <li>Collaborative problem-solving in a small setting</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-graduation-cap text-[#4F46E5] mr-2"></i> Programming Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">Python Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PPY202</span> - Python II</li>
            <li><span class="font-medium text-[#4F46E5]">PPY203</span> - Python III</li>
            <li class="font-bold text-[#303972] mt-3">C/C++ Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PCP202</span> - C/C++ II</li>
            <li><span class="font-medium text-[#4F46E5]">PCP203</span> - C/C++ III</li>
            <li class="font-bold text-[#303972] mt-3">Java Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PJV202</span> - Java II</li>
            <li><span class="font-medium text-[#4F46E5]">PJV203</span> - Java III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-robot text-[#4F46E5] mr-2"></i> Artificial Intelligence Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">AI202</span> - AI Fundamentals II</li>
            <li><span class="font-medium text-[#4F46E5]">AI203</span> - AI Fundamentals III</li>
            <li><span class="font-medium text-[#4F46E5]">AI302</span> - ML Fundamentals II</li>
            <li><span class="font-medium text-[#4F46E5]">AI303</span> - ML Fundamentals III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-microchip text-[#4F46E5] mr-2"></i> Computer Science Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">CSP110</span> - Intro to Database</li>
            <li><span class="font-medium text-[#4F46E5]">CSP210</span> - Intro to Discrete Math</li>
            <li><span class="font-medium text-[#4F46E5]">CSP220</span> - Intro to Linear Algebra</li>
            <li><span class="font-medium text-[#4F46E5]">CSP230</span> - Intro to Statistics</li>
            <li><span class="font-medium text-[#4F46E5]">CSP310</span> - Intro to Networking</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md shadow-sm" role="alert">
        <div class="flex items-center">
          <div class="py-1"><i class="fas fa-info-circle text-blue-500 mr-2"></i></div>
          <div>
            <p class="font-bold">Important Note:</p>
            <p class="text-sm">Participants choose one of the two main tracks (Programming for Universities or Computer Science Preparation) for their focused small group study.</p>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <a
          href="https://forms.gle/UeAhhd9Jq6eLcqiy9"
          target="_blank"
          class="inline-block bg-[#4F46E5] text-white px-8 py-3 rounded-lg hover:bg-[#4338CA] transition-colors"
        >
          Register Now
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// If you're using Composition API with <script setup>,
// no explicit export is needed for component name.
</script>

<style scoped>
/* Remember to import Font Awesome if you haven't globally in your project */
/* e.g., in main.js or a base CSS file: @import '@fortawesome/fontawesome-free/css/all.min.css'; */
</style>