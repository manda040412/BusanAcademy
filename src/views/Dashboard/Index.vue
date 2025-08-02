<script setup>
import { Icon } from "@iconify/vue";
import axios from "axios";
import jsPDF from "jspdf";
import { onBeforeMount, ref } from "vue";
import { ordinalSuffix } from "../../plugins/acsys";
import { useAuthStore } from "../../store/auth";

const authStore = useAuthStore();

const loading = ref(false);

const paymentStatus = ref([]);

const ongoingCourses = ref([]);
const completedCourses = ref([]);

const selectedParticipant = ref(authStore.data.participants[0].name);

const certificates = ref([]);

const fetchPaymentStatus = async () => {
  loading.value = true;

  try {
    const { data } = await axios.get("user/status-pembayaran");

    paymentStatus.value = data.flatMap((item) =>
      item.details.map((detail) => ({
        ...detail,
        participant_name: item.participant_name,
        status: item.status,
        cancel: item.cancel,
        has_invoice: item.has_invoice,
        invoice_id: item.invoice_id,
        payment_status: item.payment_status,
      }))
    );
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const fetchAbsences = async () => {
  loading.value = true;

  try {
    const { data } = await axios.get("user/absensi");

    ongoingCourses.value = data.data.filter(
      (absence) => absence.status === 1 || absence.status === true
    );
    completedCourses.value = data.data.filter(
      (absence) => absence.status === 0 || absence.status === false
    );
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const fetchCertificates = async () => {
  loading.value = true;

  try {
    const { data } = await axios.get("user/sertifikat");

    certificates.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const downloadCertificate = async (certificate) => {
  // Define the resolution for smaller output
  const widthInPixels = 430; // Slightly reduced width of the certificate in pixels
  const heightInPixels = 300; // Slightly reduced height of the certificate in pixels

  // Create a new jsPDF instance with smaller dimensions
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [widthInPixels, heightInPixels], // Smaller resolution
  });

  // Load the background image
  const img = new Image();
  img.src =
    certificate.type === "Sertifikat Partisipasi"
      ? "/src/assets/images/certificate-participation.jpg"
      : "/src/assets/images/certificate-completion.jpg"; // Replace with your image path

  // Wait for the image to load
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  // Scale the content by 1.01
  doc.scale(1.01, 1.01);

  // Draw the background image at full resolution
  doc.addImage(img, "JPG", 0, 0, widthInPixels, heightInPixels);

  // Add certificate text, scaling font size proportionally to the canvas dimensions
  doc.setFontSize(10); // Adjusted font size for smaller clarity
  doc.setTextColor("#000");
  doc.setFont("helvetica", "bold");
  doc.text(
    `NO. ${certificate.number}/CER/${
      certificate.group_code
    }/BSA/${new Date().toLocaleDateString("id-ID", {
      month: "numeric",
    })}/${new Date().toLocaleDateString("id-ID", { year: "numeric" })}`,
    widthInPixels / 2,
    80,
    {
      align: "center",
    }
  );

  doc.setFontSize(20);
  doc.setTextColor("#005EAE");
  doc.text(`${certificate.participant_name}`, widthInPixels / 2, 145, {
    align: "center",
  });

  doc.setFontSize(20);
  doc.text(`${certificate.course_name}`, widthInPixels / 2, 190, {
    align: "center",
  });

  // Save the PDF
  doc.save(
    `Certificate ${
      certificate.type === "Sertifikat Partisipasi"
        ? "Participation"
        : "Completion"
    } ${certificate.participant_name}.pdf`
  );
};

onBeforeMount(async () => {
  await Promise.all([
    fetchAbsences(),
    fetchPaymentStatus(),
    fetchCertificates(),
  ]);
});
</script>
<template>
  <div class="container mx-auto p-6 pt-28">
    <!-- Loading Indicator -->
    <div class="text-center mb-6" v-if="loading">
      <div class="relative inline-block">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-4 py-4" v-if="!loading">
      <!-- Dashboard Section -->
      <div
        class="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 items-center"
      >
        <h2 class="text-2xl font-bold text-primary">
          Welcome, {{ authStore.data.name }}
        </h2>

        <div
          class="flex flex-col w-[25%]"
          v-if="authStore.data.register_as !== 'Peserta'"
        >
          <label
            for="participant"
            class="block text-sm font-medium text-gray-900 mb-2"
          >
            Select Participant
          </label>
          <select
            v-model="selectedParticipant"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option
              v-for="participant in authStore.data.participants.sort((a, b) =>
                a.name.localeCompare(b.name)
              )"
              :key="participant.id"
              :value="participant.name"
            >
              {{ participant.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        <!-- Right Column (4 columns) -->
        <div class="col-span-12">
          <!-- Validation Progress Card -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Validation on Progress
            </h3>
            <!-- Validation Progress Table -->
            <table class="w-full text-left table-auto text-wrap">
              <thead>
                <tr>
                  <th class="border-b py-2">Participant Name</th>
                  <th class="border-b py-2">Course Name</th>
                  <th class="border-b py-2">Status</th>
                  <th class="border-b py-2 text-center">View Invoice</th>
                </tr>
              </thead>
              <tbody
                v-for="item in paymentStatus.filter(
                  (item) => item.participant_name === selectedParticipant
                )"
                :key="item.id"
              >
                <tr>
                  <td class="border-b py-2">{{ item.participant_name }}</td>
                  <td class="border-b py-2">{{ item.course.name }}</td>
                  <td
                    class="border-b py-2"
                    :class="
                      item.cancel
                        ? 'text-red-500'
                        : item.has_invoice
                        ? item.payment_status === 'DP'
                          ? 'text-primary'
                          : item.payment_status === 'Lunas'
                          ? 'text-green-500'
                          : 'text-yellow-500'
                        : item.status
                        ? 'text-yellow-500'
                        : 'text-green-500'
                    "
                  >
                    {{
                      item.cancel
                        ? "Canceled"
                        : item.has_invoice
                        ? item.payment_status === "DP"
                          ? "DP"
                          : item.payment_status === "Lunas"
                          ? "Paid"
                          : "Pending"
                        : item.status
                        ? "Pending"
                        : "Waiting For Payment"
                    }}
                  </td>
                  <td class="border-b py-2 text-center">
                    <a
                      v-if="item.has_invoice"
                      :href="`/invoice?id=${item.invoice_id}`"
                      target="_blank"
                      class="text-blue-500 hover:text-blue-700 flex justify-center items-center"
                    >
                      <Icon icon="tabler:file-invoice" />
                    </a>
                    <p v-else>Invoice Not Ready</p>
                  </td>
                </tr>
              </tbody>
              <tfoot v-if="!paymentStatus.length">
                <tr>
                  <td class="border-b py-2 text-center" colspan="4">
                    No data available
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-7">
          <!-- Ongoing Courses Card -->
          <div class="bg-white shadow-md rounded-lg p-6 mb-6">
            <div class="flex items-center">
              <span class="text-primary text-3xl">
                <Icon icon="tabler:book" />
              </span>
              <h3 class="text-lg font-semibold text-gray-800 ml-4">
                {{
                  ongoingCourses.filter(
                    (item) => item.participant.name === selectedParticipant
                  ).length
                }}
                Ongoing Courses
              </h3>
            </div>

            <!-- Table of Ongoing Courses -->
            <table
              class="w-full text-left table-auto mt-4"
              v-if="
                ongoingCourses.filter(
                  (item) => item.participant.name === selectedParticipant
                ).length
              "
            >
              <thead>
                <tr>
                  <th class="border-b py-2">Course Name</th>
                  <th class="border-b py-2">Meeting</th>
                  <th class="border-b py-2">Duration</th>
                  <th class="border-b py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody
                v-for="data in ongoingCourses.filter(
                  (item) => item.participant.name === selectedParticipant
                )"
                :key="data.id"
              >
                <tr>
                  <td class="border-b py-2">{{ data.course.name }}</td>
                  <td class="border-b py-2">{{ data.meeting }}</td>
                  <td class="border-b py-2">
                    {{ data.total_duration }} Minute
                  </td>
                  <td class="border-b py-2 text-center">
                    <div class="flex justify-center items-center">
                      <a
                        class="text-blue-500 hover:text-blue-700 flex justify-center items-center"
                        :href="`/absence?id=${data.id}`"
                        target="_blank"
                      >
                        <Icon icon="tabler:file-text" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Completed Courses Card -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="flex items-center">
              <span class="text-green-500 text-3xl">
                <!-- Tabler Icon for completed courses -->
                <Icon icon="tabler:check" />
              </span>
              <h3 class="text-lg font-semibold text-gray-800 ml-4">
                {{
                  completedCourses.filter(
                    (item) => item.participant.name === selectedParticipant
                  ).length
                }}
                Completed Courses
              </h3>
            </div>

            <!-- Table of Completed Courses -->
            <table
              class="w-full text-left table-auto mt-4"
              v-if="
                completedCourses.filter(
                  (item) => item.participant.name === selectedParticipant
                ).length
              "
            >
              <thead>
                <tr>
                  <th class="border-b py-2">Course</th>
                  <th class="border-b py-2">Meeting</th>
                  <th class="border-b py-2">Duration</th>
                  <th class="border-b py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody
                v-for="data in completedCourses.filter(
                  (item) => item.participant.name === selectedParticipant
                )"
                :key="data.id"
              >
                <tr>
                  <td class="border-b py-2">{{ data.course.name }}</td>
                  <td class="border-b py-2">
                    {{ ordinalSuffix(data.meeting - 1) }}
                  </td>
                  <td class="border-b py-2">
                    {{ data.total_duration }} Minute
                  </td>
                  <td class="border-b py-2 text-center">
                    <div class="flex justify-center items-center">
                      <a
                        class="text-blue-500 hover:text-blue-700 flex justify-center items-center"
                        :href="`/student-progress?id=${data.id}`"
                        target="_blank"
                      >
                        <Icon icon="tabler:file-text" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-5">
          <!-- Statistic Card -->
          <div class="bg-white shadow-md rounded-lg p-6 mb-6">
            <div class="flex flex-col items-start">
              <!-- Title -->
              <h3 class="text-xl font-semibold mb-1">
                Total Learning Duration
              </h3>
            </div>
            <!-- Content -->
            <div class="flex justify-between items-center">
              <!-- Text Duration -->
              <div>
                <span class="text-5xl font-bold">
                  {{
                    (ongoingCourses
                      .filter(
                        (item) => item.participant.name === selectedParticipant
                      )
                      .reduce((acc, item) => acc + item.total_duration, 0) +
                      completedCourses
                        .filter(
                          (item) =>
                            item.participant.name === selectedParticipant
                        )
                        .reduce((acc, item) => acc + item.total_duration, 0)) /
                    60
                  }}h
                </span>
                <!-- Adjust the duration dynamically -->
              </div>
              <!-- Circular Graph -->
              <div class="relative">
                <svg
                  class="w-24 h-24 transform rotate-90"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <!-- Background circle -->
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#E5E7EB"
                    stroke-width="2"
                  ></circle>
                  <!-- Foreground circle -->
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#2f4d77"
                    stroke-width="2"
                    :stroke-dasharray="`${
                      ((ongoingCourses
                        .filter(
                          (item) =>
                            item.participant.name === selectedParticipant
                        )
                        .reduce((acc, item) => acc + item.total_duration, 0) +
                        completedCourses
                          .filter(
                            (item) =>
                              item.participant.name === selectedParticipant
                          )
                          .reduce(
                            (acc, item) => acc + item.total_duration,
                            0
                          )) /
                        (720 *
                          (ongoingCourses.filter(
                            (item) =>
                              item.participant.name === selectedParticipant
                          ).length +
                            completedCourses.filter(
                              (item) =>
                                item.participant.name === selectedParticipant
                            ).length))) *
                        100 || 0
                    }, 100`"
                    stroke-dashoffset="0"
                    stroke-linecap="round"
                  ></circle>
                </svg>
                <div
                  class="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-400"
                >
                  {{
                    (ongoingCourses
                      .filter(
                        (item) => item.participant.name === selectedParticipant
                      )
                      .reduce((acc, item) => acc + item.total_duration, 0) +
                      completedCourses
                        .filter(
                          (item) =>
                            item.participant.name === selectedParticipant
                        )
                        .reduce((acc, item) => acc + item.total_duration, 0)) /
                    60
                  }}h
                </div>
              </div>
            </div>
          </div>

          <!-- Certificates Card -->
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="flex items-center">
              <span class="text-blue-500 text-3xl">
                <!-- Tabler Icon for certificates -->
                <Icon icon="tabler:certificate" />
              </span>
              <h3 class="text-lg font-semibold text-gray-800 ml-4">
                {{
                  certificates.filter(
                    (certificate) =>
                      certificate.participant_name === selectedParticipant
                  ).length
                }}
                Certificates
              </h3>
            </div>

            <!-- Scrollable List of Certificates -->
            <div
              class="mt-4 max-h-96 overflow-y-auto"
              v-if="
                certificates.filter(
                  (certificate) =>
                    certificate.participant_name === selectedParticipant
                ).length
              "
            >
              <table class="w-full text-left table-auto">
                <thead>
                  <tr>
                    <th class="border-b py-2">Course</th>
                    <th class="border-b py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody
                  v-for="certificate in certificates.filter(
                    (certificate) =>
                      certificate.participant_name === selectedParticipant
                  )"
                  :key="certificate.id"
                >
                  <tr>
                    <td class="border-b py-2">
                      {{ certificate.course_name }}
                      {{
                        "(" +
                        (certificate.type === "Sertifikat Partisipasi"
                          ? "Participation"
                          : "Completion") +
                        ")"
                      }}
                    </td>
                    <td
                      class="border-b py-2 !text-center cursor-pointer"
                      @click="downloadCertificate(certificate)"
                    >
                      <div class="flex justify-center items-center">
                        <button
                          class="text-blue-500 hover:text-blue-700 flex justify-center items-center"
                        >
                          <Icon icon="tabler:download" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
