import { Link } from "react-router-dom";
import { LifeBuoy, FileText, Globe, Sun, Moon } from "lucide-react";
import "./MobileMenu.css";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  toggleLanguage,
  handleThemeToggle,
  handleSupport,
  handleLicense,
  theme,
  i18n,
  t,
  menuRef,
}) {
  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-x-0 top-16 bg-lightBg dark:bg-darkBg backdrop-blur-md text-center border-t border-gray-200 dark:border-gray-700 shadow-lg py-6 z-50 animate-slide-down"
        >
          <nav className="flex flex-col space-y-5 px-4 max-w-md mx-auto">
            {["home", "about", "contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "home" ? "" : item}`}
                className="relative text-lightText dark:text-darkText text-lg font-semibold hover:text-primaryHover dark:hover:text-primaryHover transition-colors duration-navbar ease-in-out group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{t(item)}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryHover group-hover:w-full transition-all duration-navbar ease-in-out"></span>
              </Link>
            ))}

            {/* ✅ Register button */}
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="relative bg-gradient-to-r from-primaryHover to-primary text-white px-6 py-3 rounded-lg transition-all duration-navbar shadow-md hover:shadow-lg text-base font-semibold overflow-hidden group"
            >
              <span className="relative z-10">
                {t("register") || "Register"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primaryHover opacity-0 group-hover:opacity-100 transition-opacity duration-navbar"></span>
            </Link>

            {/* ✅ Login button */}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="relative bg-gradient-to-r from-primary to-primaryHover text-white px-6 py-3 rounded-lg transition-all duration-navbar shadow-md hover:shadow-lg text-base font-semibold overflow-hidden group"
            >
              <span className="relative z-10">{t("login") || "Login"}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primaryHover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-navbar"></span>
            </Link>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <button
                onClick={() => {
                  handleSupport();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-3 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover bg-transparent dark:bg-gray-800/50 rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100 dark:hover:bg-gray-700/50"
              >
                <LifeBuoy
                  size={20}
                  className="transition-transform duration-navbar"
                />
                <span>{t("support")}</span>
              </button>

              <button
                onClick={() => {
                  handleLicense();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-3 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover bg-transparent dark:bg-gray-800/50 rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100 dark:hover:bg-gray-700/50"
              >
                <FileText
                  size={20}
                  className="transition-transform duration-navbar"
                />
                <span>{t("license")}</span>
              </button>

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-3 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover bg-transparent dark:bg-gray-800/50 rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100 dark:hover:bg-gray-700/50"
              >
                <Globe
                  size={20}
                  className="transition-transform duration-navbar"
                />
                <span>{i18n.language === "en" ? "العربية" : "English"}</span>
              </button>

              <button
                onClick={() => {
                  handleThemeToggle();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-3 text-lightText dark:text-darkText hover:text-primaryHover dark:hover:text-primaryHover bg-transparent dark:bg-gray-800/50 rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100 dark:hover:bg-gray-700/50"
              >
                {theme === "light" ? (
                  <Moon
                    size={20}
                    className="transition-transform duration-navbar"
                  />
                ) : (
                  <Sun
                    size={20}
                    className="transition-transform duration-navbar"
                  />
                )}
                <span>
                  {theme === "light" ? t("DarkMode") : t("LightMode")}
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
