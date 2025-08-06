<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center space-x-4 mb-8">
        <div class="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <i class="fas fa-chalkboard-teacher text-white text-2xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-[#303972]">Regular Class (3 Months Per Track)</h1>
          <p class="text-gray-600 mt-2">The Regular Course is designed for students with a <strong>more flexible schedule</strong> who still want to dive <strong>deep into programming</strong> through structured <strong>weekday sessions</strong>.
            Perfect for <strong>10th–11th grade students</strong> who wish to explore programming in-depth at a <strong>comfortable pace</strong>.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Program Overview</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>3-month comprehensive program <strong>per chosen learning track</strong></li>
            <li>2 sessions per week</li>
            <li>2 hours per session</li>
            <li>Hands-on learning with practical exercises</li>
            <li>Ideal for beginners and intermediate learners</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Course Structure</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Choose one complete learning package/track</li>
            <li>Each package covers foundational to intermediate concepts</li>
            <li>Designed for structured skill development</li>
            <li>Learn from experienced instructors</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-code text-[#4F46E5] mr-2"></i> Programming Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">Python Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PPY201</span> - Python I</li>
            <li><span class="font-medium text-[#4F46E5]">PPY202</span> - Python II</li>
            <li><span class="font-medium text-[#4F46E5]">PPY203</span> - Python III</li>
            <li class="font-bold text-[#303972] mt-3">C/C++ Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PCP201</span> - C/C++ I</li>
            <li><span class="font-medium text-[#4F46E5]">PCP202</span> - C/C++ II</li>
            <li><span class="font-medium text-[#4F46E5]">PCP203</span> - C/C++ III</li>
            <li class="font-bold text-[#303972] mt-3">Java Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PJV201</span> - Java I</li>
            <li><span class="font-medium text-[#4F46E5]">PJV202</span> - Java II</li>
            <li><span class="font-medium text-[#4F46E5]">PJV203</span> - Java III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-robot text-[#4F46E5] mr-2"></i> Artificial Intelligence Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">AI Fundamentals:</li>
            <li><span class="font-medium text-[#4F46E5]">AI201</span> - AI Fundamentals I</li>
            <li><span class="font-medium text-[#4F46E5]">AI202</span> - AI Fundamentals II</li>
            <li><span class="font-medium text-[#4F46E5]">AI203</span> - AI Fundamentals III</li>
            <li class="font-bold text-[#303972] mt-3">Machine Learning Fundamentals:</li>
            <li><span class="font-medium text-[#4F46E5]">AI301</span> - Machine Learning Fundamentals I</li>
            <li><span class="font-medium text-[#4F46E5]">AI302</span> - Machine Learning Fundamentals II</li>
            <li><span class="font-medium text-[#4F46E5]">AI303</span> - Machine Learning Fundamentals III</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-chart-line text-[#4F46E5] mr-2"></i> Data Science Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">Data Science Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">DS201</span> - Data Science I</li>
            <li><span class="font-medium text-[#4F46E5]">DS202</span> - Data Science II</li>
            <li><span class="font-medium text-[#4F46E5]">DS203</span> - Data Science III</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md shadow-sm" role="alert">
        <div class="flex items-center">
          <div class="py-1"><i class="fas fa-info-circle text-blue-500 mr-2"></i></div>
          <div>
            <p class="font-bold">Important Note:</p>
            <p class="text-sm">For the Regular Class, participants must choose and enroll in one complete "package" or track (e.g., all Programming modules, all AI modules, or all Data Science modules). Each chosen track runs for <strong>3 months</strong>.</p>
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
// no explicit export is needed for component name unless you're
// integrating with tools that require it (e.g., DevTools).
</script>

<style scoped>
/* Remember to import Font Awesome if you haven't globally in your project */
/* e.g., in main.js or a base CSS file: @import '@fortawesome/fontawesome-free/css/all.min.css'; */
</style>