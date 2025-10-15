import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import NavbarDropdown from "./NavbarDropdown";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../../store/themeStore";
import { Menu } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setDropdownOpen(false);
  };

  // Toggle theme
  const handleThemeToggle = () => {
    toggleTheme();
    setDropdownOpen(false);
  };

  // Support button
  const handleSupport = () => {
    alert("Support page coming soon!");
    setDropdownOpen(false);
  };

  // License button
  const handleLicense = () => {
    alert("License details coming soon!");
    setDropdownOpen(false);
  };

  // Close Dropdown When Click Outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 h-[72px] bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText backdrop-blur-sm shadow-[0_2px_6px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_6px_rgba(255,255,255,0.05)] transition-all duration-navbar ${
        i18n.language === "ar" ? "font-arabic" : "font-sans"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:text-primaryHover transition-colors duration-navbar relative group"
        >
          MyStructure
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center">
          <NavbarLinks />
          <NavbarDropdown
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            dropdownRef={dropdownRef}
            handleSupport={handleSupport}
            handleLicense={handleLicense}
            toggleLanguage={toggleLanguage}
            handleThemeToggle={handleThemeToggle}
            theme={theme}
            i18n={i18n}
            t={t}
          />
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-lightText dark:text-darkText focus:outline-none bg-transparent p-1 rounded-full hover:bg-white/10 dark:hover:bg-gray-900/20 transition-all duration-navbar"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleLanguage={toggleLanguage}
        handleThemeToggle={handleThemeToggle}
        handleSupport={handleSupport}
        handleLicense={handleLicense}
        theme={theme}
        i18n={i18n}
        t={t}
        menuRef={menuRef}
      />
    </header>
  );
}
