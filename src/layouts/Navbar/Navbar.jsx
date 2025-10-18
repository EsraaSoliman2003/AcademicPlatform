import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import NavbarDropdown from "./NavbarDropdown";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import logo from "../../assets/imgs/logo.png";

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
      className={`w-full fixed top-0 left-0 z-50 h-[72px] text-darkText transition-all duration-navbar font-arabic flex
        ${isScrolled ? "bg-darkBg" : "bg-transparent"}`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Rafiq Academy Logo"
            className="w-32 h-32 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="w-full hidden md:flex gap-7 items-center justify-end">
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
          <Menu size={40} />
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
