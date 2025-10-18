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
│   │   ├── Home/             # Navigation bar components
│   │   │   ├── HomeMain.jsx   
│   │   │   ├── CategoriesSection.jsx
│   │   │   ├── CategoryCard.jsx      
│   │   │   ├── MostViewedCourses.jsx
│   │   │   ├── CourseCard.jsx  
│   │   │   ├── CustomPagination.jsx
│   │   │   ├── NavigationButtons.jsx
│   │   └── Auth/
│   │       ├── AuthActions.jsx      
│   │       ├── AuthContainer.jsx 
│   │       └── AuthInput.jsx        
│   ├── features/               # Feature-specific modules
│   │   └──── auth/
│   │       ├── Auth.css       
│   │       ├── login.jsx       # Login component
│   │       ├── register.jsx    # Register component
│   │       └── store.js        # Auth-related state management
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetch.js         # Hook for fetching data
│   ├── layouts/                # Layout components
│   │   ├── Navbar/             # Navigation bar components
│   │   │   ├── Navbar.jsx      # Navbar component
│   │   │   ├── Navbar.module.css
│   │   │   └── index.js
│   │   ├── Fotter/             # Navigation bar components
│   │   │   └── Fotter.js
│   │   └── MainLayout.jsx      # Main layout with header and footer
│   ├── pages/                  # Page-level components
│   │   ├── Home.jsx 
│   │   ├── About.jsx 
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx.jsx
│   ├── router/                 # Routing logic
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