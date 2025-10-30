# 🚀 Academic Learning Platform - React + Tailwind

A modern, responsive, and interactive React + Tailwind CSS project setup for Etqan Learning Platform, an educational platform focused on learning, assessments, and exercises in Arabic. It features a clean layout, reusable components, responsive design, animated hero sections, and student-friendly dashboards. Perfect for universities, schools, and online course platforms.

---

## 📁 Project Structure

```
Rafeeq/
├── public/                     # Public assets (images, favicon, etc.)
│   └── icon.png                # Favicon
├── src/
│   ├── api/                    # API call logic and configurations
│   │   └── axios.js            # Axios instance for API requests
│   ├── assets/                 # Compiled assets (used in code)
│   │   ├── imgs/                 # Static images for projects, profile, etc.
│   │   └── animation/          # Animations from Lottie
│   ├── components/             # Reusable UI components
│   │   ├── common/
│   │   │   └── CourseCard.jsx
│   │   ├── Home/             # Navigation bar components
│   │   │   ├── HomeMain.jsx
│   │   │   ├── CategoriesSection.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── MostViewedCourses.jsx
│   │   │   ├── CustomPagination.jsx
│   │   │   ├── NavigationButtons.jsx
│   │   │   └── PlatformStatus.jsx
│   │   ├── AdminDashboard/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── StatsCards.jsx
│   │   │   ├── CoursesTable.jsx
│   │   │   ├── UsersTable.jsx
│   │   │   └── UniversityManager.jsx
│   │   ├── Courses/
│   │   │   ├── CoursesList.jsx
│   │   │   ├── CoursesHeader.jsx
│   │   │   ├── CoursesFilter.jsx
│   │   │   ├── UniversitySection.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── Pagination.jsx
│   │   ├── CourseContent/
│   │   │   ├── CourseInfoSidebar.jsx
│   │   │   ├── CourseIntro.jsx
│   │   │   ├── CourseManagement.jsx
│   │   │   ├── EditCourseModal.jsx
│   │   │   ├── ExamsList.jsx
│   │   │   ├── PdfList.jsx
│   │   │   ├── VideoList.jsx
│   │   │   ├── VideoPdfModal.jsx
│   │   │   └── VideoPlayer.jsx
│   │   ├── Profile/
│   │   │   ├── ChangePasswordModal.jsx
│   │   │   ├── EditProfileModal.jsx
│   │   │   ├── ProfileHeader.jsx
│   │   │   ├── PersonalInfo.jsx
│   │   │   ├── ExamsScheduleModal.jsx
│   │   │   ├── UploadedCoursesSection.jsx
│   │   │   ├── EnrolledCoursesSection.jsx
│   │   │   ├── ProgressStats.jsx
│   │   │   └── SettingsSection.jsx
│   │   ├── Snackbar/
│   │   │   ├── CustomSnackbar.jsx
│   │   │   └── CustomSnackbar.module.css
│   │   └── Auth/
│   │       ├── AuthActions.jsx
│   │       ├── AuthContainer.jsx
│   │       └── AuthInput.jsx
│   ├── features/               # Feature-specific modules
│   │   ├── auth/
│   │   │   ├── Auth.css
│   │   │   ├── login.jsx       # Login component
│   │   │   ├── register.jsx    # Register component
│   │   │   ├── ForgetPassword.jsx
│   │   │   └── store.js        # Auth-related state management
│   │   └── courses/
│   │       ├── api/
│   │       │   └── CourseApi.js
│   │       ├── components/
│   │       │   ├── CoursesList.jsx
│   │       │   ├── CoursesHeader.jsx
│   │       │   ├── CoursesFilter.jsx
│   │       │   ├── UniversitySection.jsx
│   │       │   ├── EmptyState.jsx
│   │       │   ├── CourseInfoSidebar.jsx
│   │       │   ├── CourseIntro.jsx
│   │       │   ├── CourseManagement.jsx
│   │       │   ├── EditCourseModal.jsx
│   │       │   ├── ExamsList.jsx
│   │       │   ├── PdfList.jsx
│   │       │   ├── VideoList.jsx
│   │       │   ├── VideoPdfModal.jsx
│   │       │   ├── Pagination.jsx.js
│   │       │   └── VideoPlayer.jsx.js
│   │       ├── pages/
│   │       │   ├── AddCourse.jsx
│   │       │   ├── CourseContent.jsx
│   │       │   ├── CourseInfo.jsx
│   │       │   ├── Courses.jsx
│   │       │   ├── CreateExam.jsx
│   │       │   ├── EditExam.jsx
│   │       │   ├── Exam.jsx
│   │       │   └── index.js
│   │       ├── store/
│   │       │   └── coursesStore.js
│   │       └── index.js
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Hook for fetching data
│   ├── layouts/                # Layout components
│   │   ├── Navbar/             # Navigation bar components
│   │   │   ├── Navbar.jsx
│   │   │   ├── DesktopNavbar.jsx
│   │   │   ├── MobileMenu.jsx
│   │   │   ├── NavbarLinksSwitcher.jsx
│   │   │   └── NavbarLinks/
│   │   │       ├── GuestLinks.jsx
│   │   │       ├── UserLinks.jsx
│   │   │       ├── TeacherLinks.jsx
│   │   │       └── AdminLinks.jsx
│   │   ├── Fotter/             # Navigation bar components
│   │   │   └── Fotter.js
│   │   └── MainLayout.jsx      # Main layout with header and footer
│   ├── pages/                  # Page-level components
│   │   ├── About.jsx
│   │   ├── AddCourse.jsx
│   │   ├── Contact.jsx
│   │   ├── CourseContent.jsx
│   │   ├── CourseInfo.jsx
│   │   ├── Courses.jsx
│   │   ├── CreateExam.jsx
│   │   ├── EditExam.jsx
│   │   ├── Exam.jsx
│   │   ├── Home.jsx
│   │   ├── Payment.jsx
│   │   ├── Profile.jsx
│   │   ├── Admin/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ManageCourses.jsx
│   │   │   ├── ManageUsers.jsx
│   │   │   ├── ManageUniversities.jsx
│   │   │   └── Reports.jsx
│   │   └── NotFound.jsx.jsx
│   ├── router/                 # Routing logic
│   │   ├── ScrollToTop.jsx
│   │   ├── approuter.jsx       # Centralized route definitions
│   │   └── privateroute.jsx    # Protected routes for authenticated users
│   ├── store/                  # State management
│   │   └── snackbarStore.js
│   ├── utils/                  # Helper functions
│   │   └── helpers.js          # Utility functions (e.g., formatDate)
│   ├── App.jsx                 # Main app component
│   ├── index.css                 # Global styles
│   ├── main.jsx                # Application entry point
├── .env                        # Environment variables
├── .gitignore                  # Files to ignore in Git
├── index.html
├── package.json                # Project metadata and dependencies
├── README.md                   # This file
└── tailwind.config.js          # Set main colors
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/EsraaSoliman2003/AcademicPlatform.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd AcademicPlatform
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**

   ```bash
   npm run preview
   ```

---

## 🎨 Tech Stack

- ⚛️ **React 19** — Frontend library
- ⚡ **Vite** — Fast build tool
- 💅 **Tailwind CSS** — Utility-first CSS framework
- 🧩 **React Router DOM** — Routing and navigation
- 🧠 **Zustand** — Lightweight and scalable state management
- 📡 **Axios** — HTTP client for API requests

---

## 🧭 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Run development server   |
| `npm run build`   | Build production files   |
| `npm run preview` | Preview production build |

---

## 📦 Environment Variables

Create a `.env` file in the root folder:

```
VITE_API_URL=https://api.smarerp.com
VITE_AUTH_TOKEN=your-auth-token
```

Access inside the app:

```js
const apiUrl = import.meta.env.VITE_API_URL;
const authToken = import.meta.env.VITE_AUTH_TOKEN;
```

---

## 📘 Recommended Extensions (VS Code)

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier** — Code formatter
- **ESLint** — JavaScript linting

---

## 👨‍💻 Author

**Esraa Soliman**  
Full Stack Developer — Passionate about building modern ERP solutions.  
[LinkedIn](https://www.linkedin.com/in/esraa-soliman-7b132a249) | [GitHub](https://github.com/EsraaSoliman2003)

---

## 📜 License

This project is licensed under the **MIT License** — free to use and modify.
