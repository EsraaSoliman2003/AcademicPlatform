// use Navbar
import Navbar from "./Navbar/Navbar";
import { useTranslation } from "react-i18next";
import CustomSnackbar from "../components/Snackbar/CustomSnackbar";

export default function MainLayout({ children }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div
      className={`min-h-screen flex flex-col overflow-x-hidden bg-lightBg dark:bg-darkBg transition-colors duration-navbar
      ${isArabic ? "flex-row-reverse" : "flex-row"}
      `}
    >
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-72px)] flex items-center justify-center">
        {children}
      </main>

      {/* Global Snackbar */}
      <CustomSnackbar />
    </div>
  );
}

// use Sidebar
// import Sidebar from "./Sidebar/Sidebar";
// import { useTranslation } from "react-i18next";

// export default function MainLayout({ children }) {
//   const { i18n } = useTranslation();
//   const isArabic = i18n.language === "ar";

//   return (
//     <div
//       className={`min-h-screen flex overflow-x-hidden bg-lightBg dark:bg-darkBg transition-colors duration-navbar ${
//         isArabic ? "flex-row-reverse" : "flex-row"
//       }`}
//     >
//       <Sidebar />
//       <main className="flex-1 p-6 flex items-center justify-center min-h-screen">
//         {children}
//       </main>
//     </div>
//   );
// }
