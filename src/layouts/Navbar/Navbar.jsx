import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import NavbarDropdown from "./NavbarDropdown";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // 📌 Detect scroll beyond 100vh
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Support button
  const handleSupport = () => {
    alert("صفحة الدعم قادمة قريبًا!");
    setDropdownOpen(false);
  };

  // License button
  const handleLicense = () => {
    alert("تفاصيل الرخصة قادمة قريبًا!");
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
      className={`w-full fixed top-0 left-0 z-50 h-[72px] text-darkText transition-all duration-navbar font-arabic flex justify-end
        ${isScrolled ? "bg-darkBg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-end px-6 py-4 max-w-7xl">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:text-primaryHover transition-colors duration-navbar relative group"
        >
          {/* MyStructure */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="w-full hidden md:flex gap-10 items-center justify-end">
          <NavbarLinks />
          <NavbarDropdown
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
            dropdownRef={dropdownRef}
            handleSupport={handleSupport}
            handleLicense={handleLicense}
          />
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-darkText focus:outline-none bg-transparent p-3 rounded-full hover:bg-white/10 transition-all duration-navbar focus:outline-none border-none hover:border-none"
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSupport={handleSupport}
        handleLicense={handleLicense}
        menuRef={menuRef}
      />
    </header>
  );
}
