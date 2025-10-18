import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "../../features/Auth/store";
import DesktopNavbar from "./DesktopNavbar";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/imgs/logo.png"; // استيراد الشعار
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const role = user?.role || "guest";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // تحديد ما إذا كان الجهاز محمولًا
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  // تأثير التمرير (scroll effect)
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

  // تحديث حالة isMobile عند تغيير حجم النافذة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 h-[72px] text-darkText transition-all duration-300 font-arabic flex
        ${isScrolled ? "bg-darkBg" : "bg-transparent"}`}
    >
      <div className="w-full flex items-center justify-between px-8">
        {/* الشعار */}
        <Link to="/">
          <img
            src={logo}
            alt="Rafiq Academy Logo"
            className="w-32 h-32 object-contain"
          />
        </Link>

        {isMobile ? (
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            menuRef={menuRef}
            role={role}
          />
        ) : (
          <DesktopNavbar role={role} />
        )}
      </div>
    </header>
  );
}