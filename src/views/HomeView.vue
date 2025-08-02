<script setup>
import witNews1 from '../assets/images/wit-news-1.png';
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
import axios from "axios";
import { Modal } from "flowbite";
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { showToast } from "../plugins/acsys";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();
const authStore = useAuthStore();
const newsImages = {
  'wit-news-1.png': witNews1,
  'event-jss.jpg': eventJss,
  'busan-stem.png': busanStem,
  'csr.jpg': csr,
};

const localNewsData = [
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
    imageFileName: 'busan-stem.png', // Sesuaikan dengan nama file gambar yang sebenarnya
    title: 'UNVEILING THE THREATS OF AI IN CYBERSECURITY',
    content: 'BUSAN Academy is honored to have partnered with Youth In STEM and grateful for the opportunity to participate in the talk show. Dr. Handri Santoso S.Si, M.Eng., serving as both a tutor at BUSAN Academy and a keynote speaker for Youth In STEM, further enriched the discussion of Cyber security and Threats of AI with his expertise.',
  },
  {
    imageFileName: 'csr.jpg', // Sesuaikan dengan nama file gambar yang sebenarnya
    title: 'CODING TEACHER TRAINING',
    content: 'BUSAN Academy is thrilled to announce the successful completion of our CSR Coding Teachers Training Python in 2023! This training equipped teachers with Python programming skills to educate the next generation about coding\'s importance. We believe this knowledge will benefit both teachers and their students. See you at other BUSAN Academy activities in 2024!',
  },
];

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/storage/`;

// const carouselImages = [
//   {
//     image: "carousel1.png",
//     background: false,
//     title: "",
//     main_description: "",
//     description: "",
//     button: false,
//   },
//   {
//     image: "carousel2.png",
//     background: false,
//     title: "",
//     main_description: "",
//     description: "",
//     button: false,
//   },
//   {
//     image: "carousel3.png",
//     background: false,
//     title: "",
//     main_description: "",
//     description: "",
//     button: false,
//   },
//   {
//     image: "carousel4.png",
//     background: false,
//     title: "",
//     main_description: "",
//     description: "",
//     button: false,
//   },
//   {
//     image: "new-program.png",
//     background: true,
//     title: "New Programs Launching!",
//     main_description:
//       "Dear Sobat BUSAN! We're launching something new in our programs!",
//     description:
//       "NEW CLASSES! Yes, new classes! While learning at BUSAN Academy used to be 1on1 private classes, now BUSAN Academy offers regular group classes!",
//     button: true,
//     button_title: "Read More",
//     // route: "/project-mentoring", // route to the page
//     url: "https://www.instagram.com/p/C_xrLrAzt_h/?igsh=NnE3ODE2a204dDhi",
//   },
//   {
//     image: "main-1.png",
//     background: true,
//     title: "Are You Ready",
//     main_description:
//       "Ingin Kuliah dalam Bidang STEM (Science Technology Engineering Mathematics)? <br/> Tahukah Anda bahwa jurusan STEM mengharuskan mahasiswa mengambil <br /> programming / coding pada semester awal?",
//     description: "",
//     button: true,
//     button_title: "Contact Our Consultants",
//     url: "https://api.whatsapp.com/send/?phone=6281385371513&text&type=phone_number&app_absent=0", // a href
//   },
//   {
//     image: "main-2.png",
//     background: true,
//     title: "Transforming STEM Education With Coding",
//     main_description:
//       "Dengan pengalaman puluhan tahun mengajar STEM di kampus dan kesuksesan dalam mempersiapkan ratusan calon mahasiswa dengan skills programming, kami siap melakukan <br /> transformasi dalam pembelajaran STEM melalui coding.",
//     description: "",
//     button: true,
//     button_title: "Students and Alumni",
//     modal_target: "students-and-alumni",
//   },
//   {
//     image: "main-3.png",
//     background: true,
//     title: "Transforming STEM Education With Coding",
//     main_description: "The 5 Most Popular Courses",
//     description:
//       "Python Programmming <br /> Java Programming <br /> AI and Machine Learning <br /> Data Science <br /> Internet of Things <br />",
//     button: true,
//     button_title: "Join Trial Class Now",
//     url: "https://forms.gle/UeAhhd9Jq6eLcqiy9",
//   },
//   {
//     image: "main-3.png",
//     background: true,
//     title: "Get a Free Trial Class",
//     main_description:
//       "Hubungi course consultant kami dan nikmati pengalaman seru dan asyik belajar STEM melalui coding.",
//     description: "",
//     button: true,
//     button_title: "Register Me",
//     url: "https://forms.gle/UeAhhd9Jq6eLcqiy9",
//   },
// ];

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
  // 'Sharron Tania Putri.jpeg': SharronTaniaPutriImage, // Uncomment jika gambar sudah ada
};

const localAlumniCards = [
  {
    name: "Collin Junus",
    // Gunakan properti 'image' untuk nama file lokal
    image: "Collin.jpeg",
    // Tambahkan properti 'sekolah_atau_universitas' agar konsisten dengan API
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
    image: "", // Jika tidak ada gambar, biarkan kosong. Akan pakai fallback di template.
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

// const cards = [
//   {
//     name: "Collin Junus",
//     university: "Yale University, United States",
//     image: "Collin.jpeg",
//   },
//   {
//     name: "Nathan Widjaja",
//     university: "Columbia University, United States",
//     image: "Nathan Wangidjaja.jpeg",
//   },
//   {
//     name: "Valerie Kalip",
//     university: "University of Pennsylvania, United States",
//     image: "Valerie.jpeg",
//   },
//   {
//     name: "Kaitlyn Gosakti",
//     university: "Brown University, United States",
//     image: "Kaitlyn Gosakti.jpeg",
//   },
//   {
//     name: "Claire Aurelia Shyle",
//     university: "Imperial College London, London",
//     image: "Claire.jpeg",
//   },
//   {
//     name: "Sharron Tania Putri",
//     university: "University of California, United States",
//     image: "", // Add correct image path
//   },
//   {
//     name: "Aaron Wahid",
//     university: "Cornell University, United States",
//     image: "Aaron Wahid.jpeg",
//   },
//   {
//     name: "Rachel Priscilla Widjaja",
//     university: "National University of Singapore, Singapore",
//     image: "Rachael.jpeg",
//   },
// ];

const alumnis = ref(localAlumniCards);

const fetchAlumnis = async () => {
    try {
        const { data } = await axios.get("publik/alumni");
        if (data.data && data.data.length > 0) {
            alumnis.value = data.data; // Gunakan data dari API jika ada
        } else {
            // Jika API kosong atau gagal, gunakan data lokal
            alumnis.value = localAlumniCards; // Langsung gunakan localAlumniCards, tidak perlu map lagi
            console.warn("API for alumni returned empty or failed, using local data.");
        }
    } catch (error) {
        console.error("Error fetching alumni from API:", error);
        // Jika terjadi error saat fetching, gunakan data lokal
        alumnis.value = localAlumniCards; // Langsung gunakan localAlumniCards sebagai fallback
        console.warn("Error fetching alumni from API, using local data as fallback.");
    }
};

const news = ref([]);

const fetchNews = async () => {
  try {
    const { data } = await axios.get("publik/berita");

    news.value = data;
  } catch (error) {
    console.error(error);
  }
};

const selectedCategory = ref(null);

const items = ref({
  school_or_universities: [],
  categories: [],
  courses: [],
  course: {},
  selected_shecule: {},
});

const handleModal = async (target) => {
  document.getElementById(target).setAttribute("open", true);
};

// Course detail modal
const targetEl = ref(null);
const modal = ref(null);

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

// instance options object
const instanceOptions = {
  id: "course-detail-modal",
  override: true,
};

const showDetailCourse = async (course_id) => {
  const course = items.value.courses.find((course) => course.id === course_id);

  if (!course) return;

  items.value.course = course;

  modal.value.show();
};

// Fetch school or universities
// const fetchSchools = async () => {
//   try {
//     const { data } = await axios.get("publik/sekolah-atau-universitas", {
//       params: {
//         sorter: {
//           columnKey: "rank",
//           order: "asc",
//         },
//       },
//     });

//     items.value.school_or_universities = data.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

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

// Update fetchSchools function:
const fetchSchools = async () => {
  try {
    const { data } = await axios.get("publik/sekolah-atau-universitas");
    if (data && data.data && data.data.length > 0) {
      items.value.school_or_universities = data.data;
    } else {
      // Use full list as fallback
      items.value.school_or_universities = fullUniversityList;
    }
  } catch (error) {
    console.error("Error fetching schools:", error);
    // Use full list as fallback
    items.value.school_or_universities = fullUniversityList;
  }
};

const fetchCategories = async () => {
  try {
    const { data } = await axios.get("publik/kategori");

    items.value.categories = data.data;

    // Select first id
    if (data.data.length > 0) {
      setTimeout(() => {
        const firstCheckbox = document.querySelector(
          `input[name="category${data.data[0].id}"]`
        );

        if (firstCheckbox) {
          firstCheckbox.checked = true;
          showDetail(data.data[0].id);
        }
      }, 200);
    }
  } catch (error) {
    console.error(error);
  }
};

const showDetail = async (category_id) => {
  const category = items.value.categories.find(
    (category) => category.id === category_id
  );

  if (!category) return;

  const existingCourses = new Set(
    items.value.courses.map((course) => course.id)
  );

  category.kursus.forEach((course) => {
    if (existingCourses.has(course.id)) {
      items.value.courses = items.value.courses.filter(
        (c) => c.id !== course.id
      );
    } else {
      items.value.courses.push(course);
    }
  });
};

const addSelectedSchedule = async (schedule) => {
  items.value.selected_shecule = schedule;
};

const addItemToCart = async (item) => {
  try {
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

    const formData = {
      course_id: item.course.id,
      course_schedule_id: item.selected_shecule.id,
      quantity: 1,
      price: item.course.price,
      discount_type: item.course.discount_type,
      discount: item.course.discount,
      total: item.course.price - item.course.discount,
    };

    const { data } = await axios.post("user/keranjang", formData);

    showToast("Item added to cart", "success");

    cartStore.getTotalItems();

    document
      .getElementsByName("schedule")
      .forEach((radio) => (radio.checked = false));
  } catch (error) {
    showToast("Failed to add item to cart", "error");
  }
};

onBeforeMount(async () => {
  try {
    await Promise.all([
      fetchAlumnis(),
      fetchSchools(),
      fetchNews(),
      fetchCategories(),
    ]);
  } catch (error) {
    console.error("Error in onBeforeMount:", error);
  }
});

const scrollContainer = ref(null); // Reference to the scrollable container
let scrollAmount = 0; // Track the scroll amount
let scrollInterval = null; // Store the interval ID

// Auto-scroll logic
onMounted(() => {
  scrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      // Calculate remaining scrollable distance
      const maxScroll =
        scrollContainer.value.scrollWidth - scrollContainer.value.clientWidth;

      // If not at the end, continue scrolling
      if (scrollAmount < maxScroll) {
        scrollContainer.value.scrollBy({ left: 350, behavior: "smooth" });
        scrollAmount += 350;
      } else {
        // Scroll back to the start smoothly
        scrollContainer.value.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0; // Reset scroll amount
      }
    }
  }, 3000); // Adjust the interval time (milliseconds) as needed

  // Initialize the modal
  targetEl.value = document.getElementById("course-detail-modal");
  modal.value = new Modal(targetEl.value, options, instanceOptions);
});

// Clear the auto-scroll interval when the component is unmounted
onBeforeUnmount(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
});

// add
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
        <!-- Rest of your slide template remains the same -->
        <div
          v-if="slide.background"
          class="relative top-0 w-full h-full flex justify-center"
          style="background: rgba(24, 29, 56,)"
        />
        <!-- ...existing template code... -->
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

    <div class="container mx-auto px-10" id="our-learning-solutions">
      <!-- Our learning solutions -->
      <div class="my-10">
        <h2 class="text-3xl font-bold text-center mb-5">
          Our Learning Solutions
        </h2>
      </div>

      <div class="my-10 sm:px-0 md:px-48">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-center"
        >
          <!-- Card 1 -->
          <div class="bg-white shadow-lg rounded-lg">
            <img
              src="../assets/images/coding-class.webp"
              alt="Coding Class"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Coding Class for High School</h2>
              <p class="text-gray-600 mt-2">
                Python, Java, Swift, C/C++, JavaScript, PHP, etc.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white shadow-lg rounded-lg">
            <img
              src="../assets/images/in-house-training.webp"
              alt="In-House Training"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">In-House Training</h2>
              <p class="text-gray-600 mt-2">
                Intro to AI, Prompt Engineering, Data Science, Machine Learning,
                etc.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white shadow-lg rounded-lg">
            <img
              src="../assets/images/project-mentoring.webp"
              alt="Project Mentoring"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Project Mentoring Class</h2>
              <p class="text-gray-600 mt-2">
                Web Apps, Mobile Apps, Data Science, Machine Learning, etc.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-white shadow-lg rounded-lg">
            <img
              src="../assets/images/bootcamp.webp"
              alt="Bootcamp"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold">Bootcamp & Short Course</h2>
              <p class="text-gray-600 mt-2">
                AI Projects, IoT Projects, XR Projects (V+AR+MR), etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Our courses -->
      <!-- <div class="my-5">
        <h2 class="text-3xl font-bold text-center">Our Courses</h2>
      </div>

      <div class="my-5 sm:px-0 md:px-28">
        <div class="overflow-x-auto flex flex-row whitespace-nowrap gap-x-6">
          <ul v-for="category in items.categories" :key="category.id">
            <li>
              <input
                type="checkbox"
                :id="category.id"
                class="hidden peer"
                @change="showDetail(category.id)"
                :name="'category' + category.id"
              />
              <label
                :for="category.id"
                class="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 hover:bg-gray-50"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">
                    {{ category.name }}
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div> -->

        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div
            v-for="course in items.courses"
            :key="course.id"
            class="bg-white shadow-lg rounded-lg text-center relative cursor-pointer"
            @click="showDetailCourse(course.id)"
          > -->
            <!-- Slot Badge (Top-left) -->
            <!-- <div
              class="absolute top-2 font-bold left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs z-10"
            >
              {{ course.slots }} Slots
            </div> -->

            <!-- Discount Badge (Top-right) -->
            <!-- <div
              v-if="course.discount > 0"
              class="absolute top-2 font-bold right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs z-10"
            >
              {{
                course.discount_type === "%"
                  ? course.discount + "%"
                  : (course.discount / 1000).toFixed(0) + "K"
              }}
              Off
            </div> -->

            <!-- Image with Overlay -->
            <!-- <div class="relative">
              <img
                :src="baseUrl + course.thumbnail_url"
                :alt="course.name"
                class="w-full h-48 object-cover"
              /> -->
              <!-- Overlay -->
              <!-- <div
                class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
              ></div>
            </div>

            <div class="p-4">
              <h2 class="text-xl font-bold">{{ course.name }}</h2>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Alumni -->
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
                :src="card.image_url // Jika ada image_url dari API
                        ? baseUrl + card.image_url
                        : (card.image && localAlumniImages[card.image]) // Jika ada nama gambar lokal DAN gambar itu sudah di-import
                          ? localAlumniImages[card.image]
                          : '/path/to/default-placeholder.jpg' // <-- Tambahkan path ke gambar placeholder default jika gambar tidak ada
                    "
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

      <!-- News & Event -->
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
    <!-- Students and alumni modal  -->
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

    <!-- Detail course modal -->
    <div
      id="course-detail-modal"
      data-modal-backdrop="static"
      tabindex="-1"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
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
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <p class="text-base leading-relaxed text-gray-500">
              {{ items.course.description }}
            </p>

            <div class="grid grid-cols-3 gap-6">
              <ul v-for="(data, index) in items.course.jadwal" :key="data.id">
                <li>
                  <!-- Unique ID for each radio button and same name attribute -->
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

          <!-- Modal footer -->
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
