import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/404",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/invoice",
      name: "invoice",
      component: () => import("../views/Invoice.vue"),
    },
    {
      path: "/absence",
      name: "absence",
      component: () => import("../views/Absence.vue"),
    },
    {
      path: "/student-progress",
      name: "student-progress",
      component: () => import("../views/StudentProgress.vue"),
    },
    {
      path: "/",
      name: "main",
      component: () => import("../layouts/Main.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/stem",
          name: "stem",
          component: () => import("../views/StemView.vue"),
        },
        {
          path: "/coding-class",
          name: "coding-class",
          component: () => import("../views/CodingClassView.vue"),
        },
        {
          path: "/project-mentoring",
          name: "project-mentoring",
          component: () => import("../views/learning-solutions/ProjectMentoringView.vue"),
        },
        {
          path: "/courses/science",
          name: "science",
          component: () => import("../views/ScienceView.vue"),
        },
        {
          path: "/courses/technology",
          name: "technology",
          component: () => import("../views/TechnologyView.vue"),
        },
        {
          path: "/courses/engineering",
          name: "engineering",
          component: () => import("../views/EngineeringView.vue"),
        },
        {
          path: "/courses/mathematics",
          name: "mathematics",
          component: () => import("../views/MathematicsView.vue"),
        },
        {
          path: "/about-us",
          name: "about-us",
          component: () => import("../views/AboutUsView.vue"),
        },
        {
          path: "/contact-us",
          name: "contact-us",
          component: () => import("../views/ContactUsView.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../views/Cart/Index.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../views/Dashboard/Index.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/regular-class",
          name: "regular-class",
          component: () => import("../views/learning-solutions/RegularClass.vue"),
          meta: {
            title: "Regular Class - Python, Java, C++ Programming"
          }
        },
        {
          path: "/weekend-class",
          name: "weekend-class",
          component: () => import("../views/learning-solutions/WeekendClass.vue"),
          meta: {
            title: "Weekend Class - AI & Machine Learning"
          }
        },
        {
          path: "/small-group",
          name: "small-group",
          component: () => import("../views/learning-solutions/SmallGroup.vue"),
          meta: {
            title: "Small Group - Computer Science Preparation"
          }
        },
        {
          path: "/intensive-course",
          name: "intensive-course",
          component: () => import("../views/learning-solutions/IntensiveCourse.vue"),
          meta: {
            title: "Intensive Course - AI & Data Science"
          }
        },
        {
          path: "/bootcamp",
          name: "bootcamp",
          component: () => import("../views/learning-solutions/Bootcamp.vue"),
          meta: {
            title: "Bootcamp - AI for Professionals"
          }
        },
        {
          path: "/project-mentoring-class",
          name: "project-mentoring-class",
          component: () => import("../views/learning-solutions/ProjectMentoringView.vue"),
          meta: {
            title: "Project Mentoring - Web & Mobile Development"
          }
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authStore = useAuthStore();

    if (!authStore.isLoggedIn) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
