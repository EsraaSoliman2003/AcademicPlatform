import { useEffect, useRef, useState } from "react";
import styles from "../../assets/animation/animation.module.css";
import NavbarLinksSwitcher from "./NavbarLinksSwitcher";
import { Menu } from "lucide-react";

export default function MobileMenu({ isOpen, setIsOpen, menuRef, role }) {
  const localMenuRef = useRef(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (menuRef?.current || localMenuRef.current) &&
        !menuRef?.current?.contains(e.target) &&
        !localMenuRef.current?.contains(e.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, menuRef, setIsOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) setIsVisible(false);
  };

  return (
    <>
      <button
        className="md:hidden text-darkText focus:outline-none bg-transparent p-3 rounded-full hover:bg-white/10 hover:border-none transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={36} />
      </button>

      {isVisible && (
        <div
          ref={menuRef || localMenuRef}
          className={`fixed inset-x-0 top-0 bg-lightBg backdrop-blur-md text-center border-t border-gray-200 shadow-lg py-6 z-50
            ${isOpen ? styles.menuOpenAnimation : styles.menuCloseAnimation}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <nav className="flex flex-col space-y-5 px-4 max-w-md mx-auto">
            <div className="border-b border-gray-200">
              <NavbarLinksSwitcher
                role={role}
                isMobile={true}
                onLinkClick={() => setIsOpen(false)}
              />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
