<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = ref([]);
const items = ref({
  schools: [],
});

// Comprehensive mock data based on THE World University Rankings
const mockData = [
  { rank: 8, name: "University Of California, Berkeley", latitude: 37.8719, longitude: -122.2585 },
  { rank: 9, name: "Imperial College London", latitude: 51.4988, longitude: -0.1749 },
  { rank: 10, name: "Yale University", latitude: 41.3163, longitude: -72.9223 },
  { rank: 14, name: "University Of Pennsylvania", latitude: 39.9522, longitude: -75.1932 },
  { rank: 17, name: "National University of Singapore", latitude: 1.2966, longitude: 103.7764 },
  { rank: 18, name: "Columbia University", latitude: 40.8075, longitude: -73.9626 },
  { rank: 19, name: "University Of California, Los Angeles", latitude: 34.0689, longitude: -118.4452 },
  { rank: 20, name: "Cornell University", latitude: 42.4534, longitude: -76.4735 },
  { rank: 21, name: "University Of Toronto", latitude: 43.6629, longitude: -79.3957 },
  { rank: 22, name: "University College London", latitude: 51.5246, longitude: -0.1340 },
  { rank: 23, name: "University of Michigan-Ann Arbor", latitude: 42.2780, longitude: -83.7382 },
  { rank: 25, name: "University Of Washington", latitude: 47.6553, longitude: -122.3035 },
  { rank: 30, name: "Nanyang Technological University", latitude: 1.3483, longitude: 103.6831 },
  { rank: 31, name: "Northwestern University", latitude: 42.0565, longitude: -87.6753 },
  { rank: 33, name: "New York University", latitude: 40.7295, longitude: -73.9965 },
  { rank: 34, name: "University Of California, San Diego", latitude: 32.8801, longitude: -117.2340 },
  { rank: 35, name: "University Of Hong Kong", latitude: 22.2829, longitude: 114.1367 },
  { rank: 36, name: "LMU Munich", latitude: 48.1507, longitude: 11.5810 },
  { rank: 39, name: "University Of Melbourne", latitude: -37.7964, longitude: 144.9612 },
  { rank: 41, name: "University Of British Columbia", latitude: 49.2606, longitude: -123.2460 },
  { rank: 44, name: "Chinese University Of Hong Kong", latitude: 22.4196, longitude: 114.2068 },
  { rank: 46, name: "University Of Illinois At Urbana-Champaign", latitude: 40.1020, longitude: -88.2272 },
  { rank: 50, name: "University Of Texas At Austin", latitude: 30.2849, longitude: -97.7341 },
  { rank: 53, name: "University Of Manchester", latitude: 53.4668, longitude: -2.2339 },
  { rank: 56, name: "University Of Wisconsin-Madison", latitude: 43.0766, longitude: -89.4125 },
  { rank: 58, name: "Brown University", latitude: 41.8268, longitude: -71.4025 },
  { rank: 59, name: "Monash University", latitude: -37.9144, longitude: 145.1300 },
  { rank: 61, name: "University Of Sydney", latitude: -33.8886, longitude: 151.1873 },
  { rank: 66, name: "The Hong Kong University Of Science And Technology", latitude: 22.3363, longitude: 114.2635 },
  { rank: 67, name: "University Of California, Santa Barbara", latitude: 34.4140, longitude: -119.8489 },
  { rank: 80, name: "City University Of Hong Kong", latitude: 22.3370, longitude: 114.1721 },
  { rank: 83, name: "UNSW Sydney", latitude: -33.9173, longitude: 151.2313 }
];

const fetchSchools = () => {
  try {
    // Use mock data directly instead of API call
    items.value.schools = mockData.map((item) => ({
      school_rank: item.rank,
      school_name: item.name,
    }));

    locations.value = mockData
      .filter((item) => {
        const isValidLat = item?.latitude !== null && !isNaN(item.latitude) && item.latitude >= -90 && item.latitude <= 90;
        const isValidLng = item?.longitude !== null && !isNaN(item.longitude) && item.longitude >= -180 && item.longitude <= 180;
        return isValidLat && isValidLng;
      })
      .map((item) => ({
        name: item.name,
        coords: [item.latitude, item.longitude],
      }));

    if (locations.value.length > 0) {
      initMap();
    }
  } catch (error) {
    console.error("Error in fetchSchools:", error);
  }
};

const initMap = () => {
  // Clear existing map container if it exists
  const container = document.getElementById('map-container');
  if (container) {
    container.innerHTML = '';
  }

  const map = L.map("map-container").setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers with custom popup style
  locations.value.forEach((location) => {
    const marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`
      <div class="text-center p-2">
        <b class="text-lg block mb-1">${location.name}</b>
      </div>
    `);
  });
};

onMounted(() => {
  fetchSchools();
});
</script>

<template>
  <div class="pt-[68px]">
    <!-- Hero Section -->
    <div class="hero bg-base-200">
      <img
        src="../assets/images/header-image.png"
        style="max-height: 100%; width: 100%"
      />
      <div
        class="top-0 w-full h-full flex justify-center"
        style="background: rgba(24, 29, 56, 0.7)"
      >
        <div class="hero-content text-center text-white">
          <div class="max-w-xl">
            <h1 class="text-5xl font-bold">Story Of Us</h1>
            <p class="py-6 font-semibold">
              BUSAN Academy was established by an IT and Computer Science
              practitioner that has experience in more than 25 years teaching
              computer science and information technology in various well-known
              universities and schools in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="my-10 px-10">
        <!-- <h2 class="text-3xl font-bold text-center mb-10">Success Story</h2>
        <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <div class="text-lg font-bold">Hour of Code Impact</div>
              We participated in teaching more than 3000 students in Hour of Code, a Global Coding campaign by code.org.
            </div>
            <hr class="bg-primary" />
          </li>
          
          <li>
            <hr class="bg-primary" />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="timeline-end mb-10">
              <div class="text-lg font-bold">Top University Success</div>
              We taught more than 500 high school students, 77 of them are now studying in World's Top 100 University Rankings.
            </div>
            <hr class="bg-primary" />
          </li>
          
          <li>
            <hr class="bg-primary" />
            <div class="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="timeline-start md:text-end mb-10">
              <div class="text-lg font-bold">School Partnerships</div>
              We taught more than 300 primary-secondary students from international, national-plus, and top national schools in Indonesia.
            </div>
          </li>
        </ul> -->

        <!-- Vision & Mission Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div class="card w-100 bg-blue-100 shadow-lg">
            <div class="card-body">
              <h2 class="card-title">BUSAN's VISION</h2>
              <p>
                Asia is the region with the fastest growing technology adoption
                in the world and Indonesia is one of the countries contributing
                to this growth. Therefore, the need for skilled professionals,
                especially in STEM fields, is greatly increased. Our programs
                and curriculum are developed by specialists in computer science,
                engineering, and technology education who have decades of
                experience in preparing Indonesian digital talents at various
                well-known campuses in Indonesia and abroad.
              </p>
            </div>
          </div>
          <div class="card w-100 bg-blue-100 shadow-lg">
            <div class="card-body">
              <h2 class="card-title">BUSAN's MISSION</h2>
              <p>
                We offer high quality programs and curriculum to sharpen our
                student's skills to compete not only in Indonesia, BUSAN Academy
                has a mission to help prepare students with the aim of pursuing
                higher education in STEM fields.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- STEM Section -->
      <div class="my-10 px-10">
        <h2 class="text-3xl font-bold text-center mb-5">WHAT's STEM?</h2>
        <p class="text-center">
          STEM (Science, Technology, Engineering, and Mathematics) is an
          integrated learning experience that combines all four subjects to
          foster students' creativity via real-world problem-solving. STEM
          fields have grown rapidly, no longer confined to educational
          institutions in the United States but have spread throughout the
          world. STEM programs have always driven the economy and will continue
          in the future. From online learning to 3D printing, Artificial
          Intelligence, Virtual Reality, Metaverse, to Internet of Things (IoT),
          STEM programs offer the world so many new technologies and become
          leaders in addressing the main problems in people's daily lives.
        </p>
      </div>

      <!-- Map Section -->
      <div class="my-10 px-10">
        <div id="map-container" class="h-[600px] z-0 relative rounded-lg shadow-lg"></div>
      </div>

      <!-- Schools List Section -->
      <div class="my-5 px-10">
        <span class="font-weight-bold">
          We have prepared the coding skills of more than 100 students who are
          currently studying or have finished studying at the top 250
          universities in the world according to the Times Higher Education
          World University Rankings 2025.
        </span>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          <template v-for="school in items.schools">
            <div role="alert" class="alert">
              <div class="badge badge-secondary">#{{ school.school_rank }}</div>
              <span>{{ school.school_name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import 'leaflet/dist/leaflet.css';

#map-container {
  width: 100%;
  min-height: 600px;
  background-color: #f5f5f5;
}

.leaflet-container {
  font-family: inherit;
}

.leaflet-popup-content {
  margin: 10px;
  font-size: 14px;
}

.timeline-vertical::before {
  background-color: #4F46E5;
}

.timeline-middle svg {
  background-color: white;
  border-radius: 50%;
  padding: 2px;
}

.timeline hr {
  height: 2px;
}
</style>