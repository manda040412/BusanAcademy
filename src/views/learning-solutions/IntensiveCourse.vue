<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center space-x-4 mb-8">
        <div class="w-16 h-16 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <i class="fas fa-brain text-white text-2xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-[#303972]">Intensive Course (6 / 9 / 12 months)</h1>
          <p class="text-gray-600 mt-2">Designed for <strong>aspiring professionals</strong>, this <strong>intensive course</strong> offers <strong>in-depth learning</strong> in today’s most in-demand technologies — <strong>AI</strong>, <strong>Machine Learning</strong>, and <strong>Data Science</strong> — at an <strong>affordable price</strong>.
            As part of a flexible <strong>program</strong> with scheduled breaks, it also provides <strong>valuable certifications</strong> to boost your <strong>career prospects</strong>. The course is divided into quarters and modules must be taken as a complete package.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Program Overview</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Variable duration (6, 9, or 12 months) based on concentration</li>
            <li>Divided into quarters (up to 3 quarters for longer programs)</li>
            <li>Modules must be taken as a complete package</li>
            <li>3 sessions per week</li>
            <li>3 hours per session</li>
            <li>Project-based learning</li>
            <li>Hands-on workshops & case studies</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[#303972]">Key Learning Areas</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Fundamental to Advanced Python Programming</li>
            <li>Core AI & Machine Learning Concepts</li>
            <li>Comprehensive Data Science & Analytics Techniques</li>
            <li>Real-world Industry Projects & Portfolios</li>
          </ul>
        </div>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold text-[#303972] mb-6">Available Concentrations</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-semibold text-xl mb-4 text-[#303972]">Python and AI (6 months)</h3>
              <ul class="space-y-2 text-gray-600">
                <li><span class="font-medium text-[#4F46E5]">PPY201</span> - Python I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY202</span> - Python II</li>
                <li><span class="font-medium text-[#4F46E5]">AI201</span> - AI Fundamentals I</li>
                <li><span class="font-medium text-[#4F46E5]">AI202</span> - AI Fundamentals II</li>
                <li><span class="font-medium text-[#4F46E5]">PJ201</span> - Project (Python Apps)</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-semibold text-xl mb-4 text-[#303972]">Python for AI (9 months)</h3>
              <ul class="space-y-2 text-gray-600">
                <li><span class="font-medium text-[#4F46E5]">PPY201</span> - Python I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY202</span> - Python II</li>
                <li><span class="font-medium text-[#4F46E5]">AI201</span> - AI Fundamentals I</li>
                <li><span class="font-medium text-[#4F46E5]">AI202</span> - AI Fundamentals II</li>
                <li><span class="font-medium text-[#4F46E5]">PPY301</span> - Python for AI I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY302</span> - Python for AI II</li>
                <li><span class="font-medium text-[#4F46E5]">PJ201</span> - Project (Python Apps)</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-semibold text-xl mb-4 text-[#303972]">AI and Machine Learning (12 months)</h3>
              <ul class="space-y-2 text-gray-600">
                <li><span class="font-medium text-[#4F46E5]">PPY201</span> - Python I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY202</span> - Python II</li>
                <li><span class="font-medium text-[#4F46E5]">PPY301</span> - Python for AI I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY302</span> - Python for AI II</li>
                <li><span class="font-medium text-[#4F46E5]">AI201</span> - Introduction to AI</li>
                <li><span class="font-medium text-[#4F46E5]">AI202</span> - Generative AI</li>
                <li><span class="font-medium text-[#4F46E5]">AI301</span> - Machine Learning I</li>
                <li><span class="font-medium text-[#4F46E5]">AI302</span> - Machine Learning II</li>
                <li><span class="font-medium text-[#4F46E5]">PJ201</span> - Project 1 (Python Apps)</li>
                <li><span class="font-medium text-[#4F46E5]">PJ301</span> - Project 2 (AI Apps)</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-semibold text-xl mb-4 text-[#303972]">Data Science (12 months)</h3>
              <ul class="space-y-2 text-gray-600">
                <li><span class="font-medium text-[#4F46E5]">PPY201</span> - Python I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY202</span> - Python II</li>
                <li><span class="font-medium text-[#4F46E5]">PPY301</span> - Python for AI I</li>
                <li><span class="font-medium text-[#4F46E5]">PPY302</span> - Python for AI II</li>
                <li><span class="font-medium text-[#4F46E5]">AI201</span> - Introduction to AI</li>
                <li><span class="font-medium text-[#4F46E5]">AI202</span> - Generative AI</li>
                <li><span class="font-medium text-[#4F46E5]">DS101</span> - Data Science I</li>
                <li><span class="font-medium text-[#4F46E5]">DS102</span> - Data Science II</li>
                <li><span class="font-medium text-[#4F46E5]">PJ201</span> - Project 1 (Python Apps)</li>
                <li><span class="font-medium text-[#4F46E5]">PJ401</span> - Project 2 (DS Project)</li>
              </ul>
            </div>
        </div>
      </div>

      <div class="mt-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-md shadow-sm" role="alert">
        <div class="flex items-center">
          <div class="py-1"><i class="fas fa-info-circle text-blue-500 mr-2"></i></div>
          <div>
            <p class="font-bold">Important Note:</p>
            <p class="text-sm">These modules are designed as a comprehensive package and should be taken as a complete set for optimal learning outcomes.</p>
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

<script>
export default {
  name: 'IntensiveCourse'
}
</script>

<style scoped>
/* You might need to import Font Awesome if you haven't already. */
/* Example for Vue CLI: In your main.js or a global CSS file */
/* @import '@fortawesome/fontawesome-free/css/all.min.css'; */
</style>