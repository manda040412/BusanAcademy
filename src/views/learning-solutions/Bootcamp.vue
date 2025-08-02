<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center space-x-4 mb-8">
        <div class="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <i class="fas fa-rocket text-white text-2xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-[#303972]">Bootcamp (2 days)</h1>
          <p class="text-gray-600 mt-2">A <strong>compact and intensive program</strong> designed to help you grasp the <strong>fundamentals</strong> and real-world <strong>use cases</strong> of <strong>AI and other technologies</strong>.  
    Each course can be <strong>completed in just 2 days</strong>, with specialized tracks such as <strong>Web Development</strong> and <strong>AI for Specific Roles</strong>.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Program Overview</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>2-day intensive bootcamp</li>
            <li>8 hours per day (total 16 hours)</li>
            <li>Hands-on workshops and practical exercises</li>
            <li>Focused learning in specialized tracks</li>
            <li>Guidance from industry-experienced instructors</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Bootcamp Focus</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Rapid skill acquisition in selected domain</li>
            <li>Practical tools and application strategies</li>
            <li>Tailored content for specific audience needs (for AI)</li>
            <li>Project-based learning approach</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-globe text-[#4F46E5] mr-2"></i> Web Development Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">WB111</span> - Web Design I</li>
            <li><span class="font-medium text-[#4F46E5]">WB112</span> - Web Design II</li>
            <li><span class="font-medium text-[#4F46E5]">WB121</span> - Web Programming I</li>
            <li><span class="font-medium text-[#4F46E5]">WB122</span> - Web Programming II</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="font-semibold text-xl mb-4 text-[#303972] flex items-center">
            <i class="fas fa-brain text-[#4F46E5] mr-2"></i> Artificial Intelligence Track
          </h3>
          <ul class="space-y-2 text-gray-600">
            <li><span class="font-medium text-[#4F46E5]">AI101S</span> - AI for Students</li>
            <li><span class="font-medium text-[#4F46E5]">AI101E</span> - AI for Educators</li>
            <li><span class="font-medium text-[#4F46E5]">AI101P</span> - AI for Professionals</li>
            <li><span class="font-medium text-[#4F46E5]">AI201E</span> - GenAI for Educators</li>
            <li><span class="font-medium text-[#4F46E5]">AI201P</span> - GenAI for Professionals</li>
          </ul>
        </div>
      </div>

      <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md shadow-sm" role="alert">
        <div class="flex items-center">
          <div class="py-1"><i class="fas fa-info-circle text-blue-500 mr-2"></i></div>
          <div>
            <p class="font-bold">Note on Enrollment:</p>
            <p class="text-sm">Participants choose one specialized track (Web Development OR one of the AI for [Role] options) for the 2-day bootcamp.</p>
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