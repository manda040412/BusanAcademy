<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center space-x-4 mb-8">
        <div class="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <i class="fas fa-calendar-alt text-white text-2xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-[#303972]">Weekend Class (1-Month Fast Track)</h1>
          <p class="text-gray-600 mt-2">Designed for <strong>professionals</strong> and <strong>educators</strong> looking to explore <strong>cutting-edge technologies</strong> such as <strong>AI</strong>, <strong>Programming</strong>, and <strong>Data Science</strong> in a <strong>concise yet comprehensive format</strong>.
            Perfect for those seeking a <strong>high-impact learning experience</strong> without disrupting their weekday schedule.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Program Overview</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>1-month fast track weekend program</li>
            <li>4 weekend sessions (specifically on Saturdays)</li>
            <li>2 hours per session (total 8 hours)</li>
            <li>Concise, focused learning modules</li>
            <li>Small group learning for personalized attention</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Key Learning Focus</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Foundational skills in your chosen domain</li>
            <li>Hands-on practice with core concepts</li>
            <li>Quick insights into complex topics</li>
            <li>Practical application of learned material</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-laptop-code text-[#4F46E5] mr-2"></i> Programming Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">Python Basic Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PPY101</span> - Python Basic I</li>
            <li><span class="font-medium text-[#4F46E5]">PPY102</span> - Python Basic II</li>
            <li class="font-bold text-[#303972] mt-3">Python for AI Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">PPY301</span> - Python for AI I</li>
            <li><span class="font-medium text-[#4F46E5]">PPY302</span> - Python for AI II</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-brain text-[#4F46E5] mr-2"></i> Artificial Intelligence Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">AI Basic Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">AI101</span> - AI Basic I</li>
            <li><span class="font-medium text-[#4F46E5]">AI102</span> - AI Basic II</li>
            <li class="font-bold text-[#303972] mt-3">Machine Learning Basic Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">AI201</span> - Machine Learning Basic I</li>
            <li><span class="font-medium text-[#4F46E5]">AI202</span> - Machine Learning Basic II</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-chart-pie text-[#4F46E5] mr-2"></i> Data Science Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li class="font-bold text-[#303972]">Data Science Modules:</li>
            <li><span class="font-medium text-[#4F46E5]">DS101</span> - Data Science I</li>
            <li><span class="font-medium text-[#4F46E5]">DS102</span> - Data Science II</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md shadow-sm" role="alert">
        <div class="flex items-center">
          <div class="py-1"><i class="fas fa-info-circle text-blue-500 mr-2"></i></div>
          <div>
            <p class="font-bold">Choose Your Focus:</p>
            <p class="text-sm">Participants will select one dedicated track (Programming, Artificial Intelligence, or Data Science) to focus on during the 1-month program.</p>
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