import { Link } from "react-router-dom";

export default function GuestLinks({ isMobile, onLinkClick }) {
  const links = [
    { key: "home", label: "الرئيسية", path: "/" },
    { key: "about", label: "من نحن", path: "/about" },
    { key: "contact", label: "تواصل معنا", path: "/contact" },
  ];

  return (
    <>
      {links.map((item) => (
        <Link
          key={item.key}
          to={item.path}
          onClick={onLinkClick}
          className={`${
            isMobile
              ? "w-full flex items-center justify-center gap-0 py-2 text-lightText text-lg hover:text-primaryHover bg-transparent rounded-lg transition-all duration-300 text-base font-medium group hover:bg-gray-100"
              : "text-darkText font-medium hover:text-primaryHover transition-colors duration-300 relative group"
          }`}
        >
          {item.label}
          {!isMobile && (
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-300 group-hover:w-full"></span>
          )}
        </Link>
      ))}

      <div
        className={`${
          isMobile ? "flex flex-col space-y-3 mt-3" : "flex items-center gap-3"
        }`}
      >
        <Link
          to="/login"
          onClick={onLinkClick}
          className="relative bg-gradient-to-r from-primary to-primaryHover text-darkText px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:text-darkText text-sm font-medium overflow-hidden group"
        >
          <span className="relative z-10">تسجيل الدخول</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primaryHover to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
        <Link
          to="/register"
          onClick={onLinkClick}
          className="relative border-[2px] border-primary text-primary px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:text-darkText text-sm font-medium overflow-hidden group"
        >
          <span className="relative z-10">التسجيل</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-primaryHover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </>
  );
}
