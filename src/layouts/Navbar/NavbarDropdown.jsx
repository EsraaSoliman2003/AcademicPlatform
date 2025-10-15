import { useAuthStore } from "../../features/Auth/store";
import {
  Settings,
  LifeBuoy,
  FileText,
  Globe,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";

export default function NavbarDropdown({
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
  handleSupport,
  handleLicense,
  toggleLanguage,
  handleThemeToggle,
  theme,
  i18n,
  t,
}) {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="relative inline-block text-left"
      ref={dropdownRef}
    >
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="p-3 bg-transparent rounded-full transition-all duration-300 focus:outline-none"
      >
        <Settings className="w-6 h-6 text-primary dark:text-primary" />
      </button>

      {dropdownOpen && (
        <div className="overflow-hidden absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-200 ease-out animate-fadeIn">
          <div>
            {/* Support */}
            <button
              onClick={handleSupport}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              <LifeBuoy size={18} />
              <span>{t("support")}</span>
            </button>

            {/* License */}
            <button
              onClick={handleLicense}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              <FileText size={18} />
              <span>{t("license")}</span>
            </button>

            {/* Language */}
            <button
              onClick={toggleLanguage}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              <Globe size={18} />
              <span>{i18n.language === "en" ? "العربية" : "English"}</span>
            </button>

            {/* Theme */}
            <button
              onClick={handleThemeToggle}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-white transition-all"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              <span>{theme === "light" ? t("DarkMode") : t("LightMode")}</span>
            </button>

            {/* Logout */}
            {user && (
              <button
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
                className="
                  flex items-center gap-3 w-full px-4 py-2 text-sm 
                  text-red-600 dark:text-red-400 
                  bg-transparent border-none rounded-none
                  hover:bg-red-100 dark:hover:bg-red-700 
                  hover:text-red-800 dark:hover:text-red-200
                  transition-all duration-200
                "
              >
                <LogOut size={18} />
                <span>{t("logout") || "Logout"}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
