import { Globe, Sun, Moon } from "lucide-react";

export default function SidebarControls({ theme, toggleTheme, language, toggleLanguage }) {
  return (
    <div
      className="
        flex items-center justify-between p-5
        border-t border-gray-200 dark:border-gray-800
        bg-gray-50 dark:bg-gray-800/50
        transition-colors duration-300
      "
    >
      {/* Language toggle */}
      <button
        onClick={toggleLanguage}
        className="
          flex items-center gap-2 px-4 py-2
          bg-gradient-to-r from-blue-500 to-purple-600
          dark:from-blue-600 dark:to-purple-700
          text-white rounded-full
          hover:from-blue-600 hover:to-purple-700
          dark:hover:from-blue-700 dark:hover:to-purple-800
          hover:shadow-lg
          transition-all duration-300 ease-in-out
          text-sm font-semibold
        "
      >
        <Globe size={16} />
        {language === "en" ? "العربية" : "English"}
      </button>

      {/* Theme toggle */}
      <button
        onClick={toggleTheme}
        className="
          p-2 rounded-full
          bg-gradient-to-r from-gray-100 to-gray-200
          dark:from-gray-700 dark:to-gray-800
          text-blue-600 dark:text-yellow-400
          hover:from-gray-200 hover:to-gray-300
          dark:hover:from-gray-600 dark:hover:to-gray-700
          hover:shadow-lg
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500
        "
        aria-label="Toggle Theme"
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>
    </div>
  );
}
