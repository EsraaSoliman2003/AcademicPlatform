import { Link } from "react-router-dom";
import { LifeBuoy, FileText, Globe, Sun, Moon } from "lucide-react";
import "./MobileMenu.css";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  handleSupport,
  handleLicense,
  menuRef,
}) {
  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-x-0 top-0 bg-lightBg backdrop-blur-md text-center border-t border-gray-200 shadow-lg py-6 z-50 animate-slide-down"
        >
          <nav className="flex flex-col space-y-5 px-4 max-w-md mx-auto">
            <div className="border-b border-gray-200">
              <Link
                to="/"
                className="w-full flex items-center justify-center gap-0 py-2 text-lightText text-lg hover:text-primaryHover bg-transparent rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                className="w-full flex items-center justify-center gap-0 py-2 text-lightText text-lg hover:text-primaryHover bg-transparent rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-0 py-2 text-lightText text-lg hover:text-primaryHover bg-transparent rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                تواصل معنا
              </Link>
              s
            </div>

            {/* ✅ Register button */}
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="relative bg-gradient-to-r from-primaryHover to-primary text-darkText px-6 py-3 rounded-lg transition-all duration-navbar shadow-md hover:shadow-lg hover:text-darkText font-semibold overflow-hidden group"
            >
              <span className="relative z-10">تسجيل</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primaryHover opacity-0 group-hover:opacity-100 transition-opacity duration-navbar"></span>
            </Link>

            {/* ✅ Login button */}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="relative bg-gradient-to-r from-primary to-primaryHover text-darkText px-6 py-3 rounded-lg transition-all duration-navbar shadow-md hover:shadow-lg hover:text-darkText text-base font-semibold overflow-hidden group"
            >
              <span className="relative z-10">تسجيل الدخول</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primaryHover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-navbar"></span>
            </Link>

            <div className="border-t border-gray-200 pt-4">
              <Link
                onClick={() => {
                  handleSupport();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-3 text-lightText hover:text-primaryHover bg-transparent rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100"
              >
                <LifeBuoy
                  size={20}
                  className="transition-transform duration-navbar"
                />
                <span>الدعم</span>
              </Link>

              <Link
                onClick={() => {
                  handleLicense();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-3 py-3 text-lightText hover:text-primaryHover bg-transparent rounded-lg transition-all duration-navbar text-base font-medium group hover:bg-gray-100"
              >
                <FileText
                  size={20}
                  className="transition-transform duration-navbar"
                />
                <span>الرخصة</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
