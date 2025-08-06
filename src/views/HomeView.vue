<script setup>
import witNews1 from '../assets/images/wit-news-1.png';
import eventSatria from '../assets/images/event-satria.jpg';
import eventJss from '../assets/images/event-jss.jpg';
import busanStem from '../assets/images/busan-stem.png';
import csr from '../assets/images/csr.png';
import carousel1 from '../assets/images/carousel1.png';
import carousel2 from '../assets/images/carousel2.png';
import carousel3 from '../assets/images/carousel3.png';
import carousel4 from '../assets/images/carousel4.png';
import carousel5 from '../assets/images/carousel5.png';
import CollinImage from '../assets/images/Collin.jpeg';
import NathanWangidjajaImage from '../assets/images/Nathan Wangidjaja.jpeg';
import ValerieImage from '../assets/images/Valerie.jpeg';
import KaitlynGosaktiImage from '../assets/images/Kaitlyn Gosakti.jpeg';
import ClaireImage from '../assets/images/Claire.jpeg';
import AaronWahidImage from '../assets/images/Aaron Wahid.jpeg';
import RachaelImage from '../assets/images/Rachael.jpeg';
import SharronTaniaPutriImage from '../assets/images/Sharron Tania Putri.jpeg';
import { Modal } from "flowbite";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { showToast } from "../plugins/acsys";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();
const authStore = useAuthStore();
const newsImages = {
  'wit-news-1.png': witNews1,
  'event-satria.jpg': eventSatria,
  'event-jss.jpg': eventJss,
  'busan-stem.png': busanStem,
  'csr.jpg': csr,
};

const localNewsData = [
{
    imageFileName: 'event-satria.jpg',
    title: 'SATRiA 2025: Smart AI & Tech Competition for a Rising Indonesia',
    content: 'National competition aimed at fostering innovation and technical skills among Indonesian students. The event focuses on Artificial Intelligence and technology, challenging participants to develop creative solutions to real-world problems.',
  },
  {
    imageFileName: 'wit-news-1.png',
    title: 'WIT 2024: The 9th World Innovative Technology',
    content: 'At WIT 2024: the 9th World Innovative Technology held in South Korea, students from Indonesia successfully won 2 gold medals, 1 silver medal, and 3 bronze medals in the coding competition category. BUSAN Academy was involved in training these talented students. They were trained for 6 months (twice a week, 3-4 hours per day).',
  },
  {
    imageFileName: 'event-jss.jpg',
    title: 'ARTIFICIAL INTELLIGENCE IN EDUCATION',
    content: 'We feel incredibly privileged to have been invited to participate in the Jakarta Scholars Symposium where our Director, Mr. Budi Chang, got the opportunity to present his knowledge on a subject that is very important to us: "Artificial Intelligence in Education: Preparing Students for the Future"!',
  },
  {
    imageFileName: 'busan-stem.png',
    title: 'UNVEILING THE THREATS OF AI IN CYBERSECURITY',
    content: 'BUSAN Academy is honored to have partnered with Youth In STEM and grateful for the opportunity to participate in the talk show. Dr. Handri Santoso S.Si, M.Eng., serving as both a tutor at BUSAN Academy and a keynote speaker for Youth In STEM, further enriched the discussion of Cyber security and Threats of AI with his expertise.',
  },
  {
    imageFileName: 'csr.jpg',
    title: 'CODING TEACHER TRAINING',
    content: 'BUSAN Academy is thrilled to announce the successful completion of our CSR Coding Teachers Training Python in 2023! This training equipped teachers with Python programming skills to educate the next generation about coding\'s importance. We believe this knowledge will benefit both teachers and their students. See you at other BUSAN Academy activities in 2024!',
  },
];

const carousels = ref([
  {
    image: carousel1,
    background: true,
    title: "Slide 1 Title",
    subtitle: "Slide 1 Subtitle",
    content: "Slide 1 Content",
    button: true,
    button_type: "Link",
    button_text: "Learn More",
    button_reference: "#"
  },
  {
    image: carousel2,
    background: true,
    title: "Slide 2 Title",
    subtitle: "Slide 2 Subtitle",
    content: "Slide 2 Content",
    button: true,
    button_type: "Link",
    button_text: "Learn More",
    button_reference: "#"
  },
  {
    image: carousel5,
    background: true,
    title: "Slide 5 Title",
    subtitle: "Slide 5 Subtitle",
    content: "Slide 5 Content",
    button: true,
    button_type: "Link",
    button_text: "Learn More",
    button_reference: "#"
  },
  {
    image: carousel3,
    background: true,
    title: "Slide 3 Title",
    subtitle: "Slide 3 Subtitle",
    content: "Slide 3 Content",
    button: true,
    button_type: "Link",
    button_text: "Learn More",
    button_reference: "#"
  },
  {
    image: carousel4,
    background: true,
    title: "Slide 4 Title",
    subtitle: "Slide 4 Subtitle",
    content: "Slide 4 Content",
    button: true,
    button_type: "Link",
    button_text: "Learn More",
    button_reference: "#"
  }
]);

const localAlumniImages = {
  'Collin.jpeg': CollinImage,
  'Nathan Wangidjaja.jpeg': NathanWangidjajaImage,
  'Valerie.jpeg': ValerieImage,
  'Kaitlyn Gosakti.jpeg': KaitlynGosaktiImage,
  'Claire.jpeg': ClaireImage,
  'Aaron Wahid.jpeg': AaronWahidImage,
  'Rachael.jpeg': RachaelImage,
  'Sharron Tania Putri.jpeg': SharronTaniaPutriImage,
};

const localAlumniCards = [
  {
    name: "Collin Junus",
    image: "Collin.jpeg",
    sekolah_atau_universitas: { name: "Yale University, United States" }
  },
  {
    name: "Nathan Widjaja",
    image: "Nathan Wangidjaja.jpeg",
    sekolah_atau_universitas: { name: "Columbia University, United States" }
  },
  {
    name: "Valerie Kalip",
    image: "Valerie.jpeg",
    sekolah_atau_universitas: { name: "University of Pennsylvania, United States" }
  },
  {
    name: "Kaitlyn Gosakti",
    image: "Kaitlyn Gosakti.jpeg",
    sekolah_atau_universitas: { name: "Brown University, United States" }
  },
  {
    name: "Claire Aurelia Shyle",
    image: "Claire.jpeg",
    sekolah_atau_universitas: { name: "Imperial College London, London" }
  },
  {
    name: "Sharron Tania Putri",
    image: "Sharron Tania Putri.jpeg",
    sekolah_atau_universitas: { name: "University of California, United States" }
  },
  {
    name: "Aaron Wahid",
    image: "Aaron Wahid.jpeg",
    sekolah_atau_universitas: { name: "Cornell University, United States" }
  },
  {
    name: "Rachel Priscilla Widjaja",
    image: "Rachael.jpeg",
    sekolah_atau_universitas: { name: "National University of Singapore, Singapore" }
  },
];

const alumnis = ref(localAlumniCards); // Menggunakan data lokal secara langsung
const news = ref(localNewsData); // Menggunakan data lokal secara langsung

const selectedCategory = ref(null);

const items = ref({
  school_or_universities: [],
  categories: [],
  courses: [],
  course: {},
  selected_shecule: {},
});

// Data statis untuk universitas
const fullUniversityList = [
  { id: 1, rank: 8, name: "University Of California, Berkeley (QS #17)" },
  { id: 2, rank: 9, name: "Imperial College London (QS #2)" },
  { id: 3, rank: 10, name: "Yale University (QS #21)" },
  { id: 4, rank: 14, name: "University Of Pennsylvania (QS #15)" },
  { id: 5, rank: 17, name: "National University of Singapore (QS #8)" },
  { id: 6, rank: 18, name: "Columbia University (QS #38)" },
  { id: 7, rank: 19, name: "University Of California, Los Angeles (QS #46)" },
  { id: 8, rank: 20, name: "Cornell University (QS #16)" },
  { id: 9, rank: 21, name: "University Of Toronto (QS #29)" },
  { id: 10, rank: 22, name: "University College London (QS #22)" },
  { id: 11, rank: 23, name: "University of Michigan-Ann Arbor (QS #45)" },
  { id: 12, rank: 25, name: "University Of Washington (QS #81)" },
  { id: 13, rank: 30, name: "Nanyang Technological University (QS #12)" },
  { id: 14, rank: 31, name: "Northwestern University (QS #42)" },
  { id: 15, rank: 33, name: "New York University (QS #55)" },
  { id: 16, rank: 34, name: "University Of California, San Diego (QS #66)" },
  { id: 17, rank: 35, name: "University Of Hong Kong (QS #11)" },
  { id: 18, rank: 38, name: "LMU Munich (QS #58)" },
  { id: 19, rank: 39, name: "University Of Melbourne (QS #19)" },
  { id: 20, rank: 41, name: "University Of British Columbia (QS #40)" },
  { id: 21, rank: 44, name: "Chinese University Of Hong Kong (QS #32)" },
  { id: 22, rank: 46, name: "University Of Illinois At Urbana-Champaign (QS #70)" },
  { id: 23, rank: 50, name: "University Of Texas At Austin (QS #68)" },
  { id: 24, rank: 53, name: "University Of Manchester (QS #35)" },
  { id: 25, rank: 56, name: "University Of Wisconsin-Madison (QS #110)" },
  { id: 26, rank: 58, name: "Brown University (QS #69)" },
  { id: 27, rank: 59, name: "Monash University (QS #36)" },
  { id: 28, rank: 61, name: "University Of Sydney (QS #25)" },
  { id: 29, rank: 66, name: "The Hong Kong University Of Science And Technology (QS #44)" },
  { id: 30, rank: 67, name: "University Of California, Santa Barbara (QS #179)" }
];
items.value.school_or_universities = fullUniversityList; // Menggunakan data lokal secara langsung

// Data statis untuk kursus dan kategori (contoh data)
const staticCategories = [
  {
    id: 1,
    name: 'Programming',
    kursus: [
      { id: 101, name: 'Python for Beginners', description: 'This course is for...', price: 500000, discount_type: 'percent', discount: 10, jadwal: [{ id: 1, day: 'Monday', start_time: '14:00:00', end_time: '16:00:00' }] },
      { id: 102, name: 'Web Development', description: 'Learn to build websites...', price: 750000, discount_type: 'fixed', discount: 50000, jadwal: [{ id: 2, day: 'Tuesday', start_time: '10:00:00', end_time: '12:00:00' }] },
    ],
  },
  {
    id: 2,
    name: 'Data Science',
    kursus: [
      { id: 201, name: 'Machine Learning Basics', description: 'An introduction to ML...', price: 1000000, discount_type: 'none', discount: 0, jadwal: [{ id: 3, day: 'Wednesday', start_time: '13:00:00', end_time: '15:00:00' }] },
    ],
  },
];
items.value.categories = staticCategories; // Menggunakan data lokal secara langsung
items.value.courses = staticCategories.flatMap(cat => cat.kursus); // Menggabungkan semua kursus

const showDetailCourse = (course_id) => {
  const course = items.value.courses.find((course) => course.id === course_id);
  if (!course) return;
  items.value.course = course;
  modal.value.show();
};

const addSelectedSchedule = (schedule) => {
  items.value.selected_shecule = schedule;
};

// Fungsi ini tidak akan melakukan panggilan API POST lagi
const addItemToCart = (item) => {
  if (!authStore.isLoggedIn) {
    showToast("Please login first", "error");
    return;
  }
  if (Object.keys(item.selected_sheule).length === 0) {
    showToast("Please select a schedule", "error");
    return;
  }
  if (cartStore.total_items >= 10) {
    showToast("You can only add up to 10 items", "error");
    return;
  }

  // Logika di bawah ini hanya simulasi karena tidak ada API POST
  // Anda harus menerapkan logika penambahan item ke store atau state lokal
  // untuk membuat fungsionalitas ini bekerja tanpa backend.
  showToast("Item added to cart (simulated)", "success");
  cartStore.getTotalItems();
  document
    .getElementsByName("schedule")
    .forEach((radio) => (radio.checked = false));
};

const scrollContainer = ref(null);
let scrollAmount = 0;
let scrollInterval = null;

onMounted(() => {
  scrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      const maxScroll = scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;
      if (scrollAmount < maxScroll) {
        scrollContainer.value.scrollBy({ left: 350, behavior: "smooth" });
        scrollAmount += 350;
      } else {
        scrollContainer.value.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0;
      }
    }
  }, 3000);

  const targetEl = document.getElementById("course-detail-modal");
  const options = {
    placement: "center",
    backdrop: "dynamic",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
    closable: true,
    onHide: () => {
      items.value.selected_shecule = {};
      document
        .getElementsByName("schedule")
        .forEach((radio) => (radio.checked = false));
    },
  };
  const instanceOptions = {
    id: "course-detail-modal",
    override: true,
  };
  const modal = new Modal(targetEl, options, instanceOptions);
});

onBeforeUnmount(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
});
</script>

<template>
  <div class="pt-[68px]">
    <Carousel
      :autoplay="5000"
      :transition="1000"
      pause-autoplay-on-hover
      :wrap-around="true"
      style="width: 100%; height: 100% !important"
    >
      <Slide v-for="slide in carousels" :key="slide.title" style="width: 100%">
        <div class="hero h-full w-full md:h-full md:w-full">
          <img :src="slide.image" :alt="slide.title" />
          <div
            v-if="slide.background"
            class="relative top-0 w-full h-full flex justify-center"
            style="background: rgba(24, 29, 56,)"
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <div class="container mx-auto px-10" id="our-learning-solutions">
      <div class="my-10">
        <h2 class="text-3xl font-bold text-center mb-5">
          Our Learning Solutions
        </h2>
      </div>

      <div class="my-10 sm:px-0 md:px-48">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center"
        >
          <div
            class="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="router.push('/regular-class')"
          >
            <img
              src="../assets/images/regular.png"
              alt="Regular Class"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Regular Class</h2>
              <p class="text-gray-600 mt-2">
                Designed for 10th-11th grade students for deep programming dives.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="router.push('/weekend-class')"
          >
            <img
              src="../assets/images/weekend.png"
              alt="Weekend Class"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Weekend Class</h2>
              <p class="text-gray-600 mt-2">
                Fast-track for professionals and educators in tech.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="router.push('/small-group')"
          >
            <img
              src="../assets/images/small.png"
              alt="Small Group"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Small Group</h2>
              <p class="text-gray-600 mt-2">
                Focused foundation for 12th grade and first-year university.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="router.push('/intensive-course')"
          >
            <img
              src="../assets/images/intensive.png"
              alt="Intensive Course"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Intensive Course</h2>
              <p class="text-gray-600 mt-2">
                In-depth AI, ML, Data Science for aspiring professionals.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="router.push('/bootcamp')"
          >
            <img
              src="../assets/images/bootcamp.png"
              alt="Bootcamp"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Bootcamp</h2>
              <p class="text-gray-600 mt-2">
                Compact, intensive 2-day programs for rapid skill acquisition.
              </p>
            </div>
          </div>

          <div
            class="bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
            @click="router.push('/project-mentoring')"
          >
            <img
              src="../assets/images/project.png"
              alt="Project Mentoring"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Project Mentoring</h2>
              <p class="text-gray-600 mt-2">
                Create portfolio-ready projects for university applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="my-10 px-10">
        <h2 class="text-3xl font-bold text-center">Our Alumni</h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 sm:px-0 md:px-24"
      >
        <div
          class="flex space-x-6 p-6 overflow-x-auto scroll-smooth"
          ref="scrollContainer"
        >
          <div
            v-for="(card, index) in alumnis"
            :key="index"
            class="flex items-center bg-white shadow-lg rounded-lg overflow-hidden w-96 shrink-0"
          >
            <img
              :src="(card.image && localAlumniImages[card.image]) || '/path/to/default-placeholder.jpg'"
              :alt="card.name"
              class="h-24 w-24 object-cover rounded-full m-4"
            />
            <div>
              <h2 class="text-lg font-bold text-gray-800">{{ card.name }}</h2>
              <p class="text-sm text-gray-600">
                {{ card.sekolah_atau_universitas ? card.sekolah_atau_universitas.name : card.university }}
              </p>
            </div>
          </div>
        </div>
        <div class="my-5 sm:px-0 md:px-24">
          <span class="text-lg font-semibold block text-center mb-8">
            We have prepared the coding skills of more than 250 students who are currently studying or have finished studying at the top 100 universities in the world according to the Times Higher Education World University Rankings 2025.
          </span>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <template v-for="school in items.school_or_universities" :key="school.id">
              <div class="bg-[#F8F9FF] rounded-lg flex items-center p-4 hover:shadow-lg transition-shadow">
                <div class="badge bg-[#4F46E5] text-white border-0 font-semibold">#{{ school.rank }}</div>
                <span class="font-medium text-[#303972] ml-3">{{ school.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <hr />
      <div class="my-10">
        <h2 class="text-3xl font-bold text-center">News & Event</h2>
      </div>

      <div class="container mx-auto md:px-24 my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div
            class="col-span-1"
            v-for="item in localNewsData" :key="item.imageFileName"
          >
            <div class="card w-100 h-[100%] bg-primary-400 text-primary-content">
              <div class="card-body items-center text-center">
                <img
                  :src="newsImages[item.imageFileName]" class="w-full h-60 object-cover rounded-lg"
                  :alt="item.title" />
                <h1 class="card-title my-2 font-bold text-white">
                  {{ item.title }}
                </h1>
                <p class="text-white tracking-wide">
                  {{ item.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dialog id="students-and-alumni" class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <img
          src="../assets/images/maps.jpg"
          alt="Students and Alumni"
          class="w-full h-100 object-cover rounded-lg"
        />
      </div>
      <form method="dialog" class="modal-backdrop bg-black bg-opacity-50">
        <button>close</button>
      </form>
    </dialog>

    <div
      id="course-detail-modal"
      data-modal-backdrop="static"
      tabindex="-1"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow">
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
          >
            <h3 class="text-xl font-semibold text-gray-900">
              {{ items.course.name }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="course-detail-modal"
              @click="modal.hide()"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5 space-y-4">
            <p class="text-base leading-relaxed text-gray-500">
              {{ items.course.description }}
            </p>

            <div class="grid grid-cols-3 gap-6">
              <ul v-for="(data, index) in items.course.jadwal" :key="data.id">
                <li>
                  <input
                    type="radio"
                    :id="'schedule-' + data.id"
                    name="schedule"
                    class="hidden peer"
                    @click="addSelectedSchedule(data)"
                  />
                  <label
                    :for="'schedule-' + data.id"
                    class="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 hover:bg-gray-50"
                  >
                    <div class="block">
                      <div class="w-full text-lg font-semibold">
                        {{ data.day }}
                      </div>
                      <div class="w-full text-sm font-normal">
                        {{ data.start_time.slice(0, 5) }} -
                        {{ data.end_time.slice(0, 5) }}
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-between"
          >
            <button
              @click="modal.hide()"
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Close
            </button>
            <button
              data-modal-hide="static-modal"
              type="button"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="addItemToCart(items)"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  min-height: 350px;
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>