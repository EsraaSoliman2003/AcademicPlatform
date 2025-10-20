import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "../../features/Auth/store";
import DesktopNavbar from "./DesktopNavbar";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/imgs/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const role = user?.role || "test";
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const menuRef = useRef(null);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (location.pathname === "/" && scrollY < window.innerHeight - 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 h-[72px] text-darkText transition-all duration-300 font-arabic flex
        ${isTransparent ? "bg-transparent" : "bg-darkBg"}`}
    >
      <div className="w-full flex items-center justify-between px-8">
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
