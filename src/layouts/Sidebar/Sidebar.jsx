import { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../../store/themeStore";
import SidebarLinks from "./SidebarLinks";
import SidebarControls from "./SidebarControls";
import { Home, Info, Settings, LogIn } from "lucide-react";
import { useAuthStore } from "../../features/Auth/store";

export default function Sidebar() {
  const { theme, toggleTheme } = useThemeStore();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = user
    ? [
        { name: t("home"), path: "/", icon: <Home size={20} /> },
        { name: t("about"), path: "/about", icon: <Info size={20} /> },
        { name: t("profile"), path: "/profile", icon: <Settings size={20} /> },
      ]
    : [
        { name: t("home"), path: "/", icon: <Home size={20} /> },
        { name: t("about"), path: "/about", icon: <Info size={20} /> },
        { name: t("login"), path: "/login", icon: <LogIn size={20} /> },
      ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className={`
            md:hidden fixed top-4 right-4 z-50 p-2 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-600 text-white
            hover:from-blue-600 hover:to-purple-700
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} />
        </button>
      )}

      <aside
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className={`
          fixed inset-y-0 z-40 flex flex-col w-64 h-screen
          bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
          border-r border-gray-200 dark:border-gray-800 shadow-lg
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : i18n.language === "ar" ? "translate-x-64" : "-translate-x-64"}
          md:translate-x-0 md:flex md:w-64
        `}
      >
        <div
          className="
            p-6 text-2xl font-extrabold tracking-tight
            bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800
            text-transparent bg-clip-text
            border-b border-gray-200 dark:border-gray-800
            transition-colors duration-300
          "
        >
          MyStructure
        </div>

        <SidebarLinks links={links} onLinkClick={() => setIsOpen(false)} />
        <SidebarControls
          theme={theme}
          toggleTheme={toggleTheme}
          language={i18n.language}
          toggleLanguage={toggleLanguage}
        />
        {user && (
          <button
            onClick={() => logout()}
            className="m-5 w-[calc(100%-2rem)] flex items-center justify-center gap-2 px-4 py-2
               bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            <LogIn size={18} className="rotate-180" />
            {t("logout") || "Logout"}
          </button>
        )}

        <div
          className="
            p-4 text-center text-xs font-medium
            text-gray-500 dark:text-gray-400
            border-t border-gray-200 dark:border-gray-800
            transition-colors duration-300
          "
        >
          © {new Date().getFullYear()} MyStructure
        </div>
      </aside>

      {isOpen && (
        <div
          className="
            md:hidden fixed inset-0 bg-black/50 z-30
            transition-opacity duration-300
          "
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
