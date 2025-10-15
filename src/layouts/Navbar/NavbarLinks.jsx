import { Link } from "react-router-dom";
import { useAuthStore } from "../../features/Auth/store";

export default function NavbarLinks() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      {user
        ? [
            { key: "home", label: "الرئيسية" },
            { key: "about", label: "من نحن" },
            { key: "profile", label: "الملف الشخصي" },
          ].map((item) => (
            <Link
              key={item.key}
              to={`/${item.key === "home" ? "" : item.key}`}
              className="text-lightText font-medium hover:text-primaryHover transition-colors duration-navbar relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
            </Link>
          ))
        : [
            { key: "home", label: "الرئيسية" },
            { key: "about", label: "من نحن" },
            { key: "contact", label: "تواصل معنا" },
          ].map((item) => (
            <Link
              key={item.key}
              to={`/${item.key === "home" ? "" : item.key}`}
              className="text-lightText font-medium hover:text-primaryHover transition-colors duration-navbar relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primaryHover transition-all duration-navbar group-hover:w-full"></span>
            </Link>
          ))}

      {!user && (
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primaryHover transition-all duration-navbar shadow-glass text-sm font-medium"
          >
            تسجيل الدخول
          </Link>

          <Link
            to="/register"
            className="border-[2px] border-primary text-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-navbar shadow-glass text-sm font-medium"
          >
            التسجيل
          </Link>
        </div>
      )}
    </>
  );
}
