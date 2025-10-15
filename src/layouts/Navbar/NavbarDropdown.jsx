import { useAuthStore } from "../../features/Auth/store";
import {
  Settings,
  LifeBuoy,
  FileText,
  Globe,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";

export default function NavbarDropdown({
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
  handleSupport,
  handleLicense,
}) {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  return (
    <div
      dir="rtl"
      className="relative inline-block text-left"
      ref={dropdownRef}
    >
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="p-3 bg-transparent rounded-full transition-all duration-300 focus:outline-none"
      >
        <Settings className="w-6 h-6 text-primary" />
      </button>

      {dropdownOpen && (
        <div className="overflow-hidden absolute right-0 mt-2 w-52 origin-top-right rounded-xl bg-white border border-gray-200 shadow-xl transition-all duration-200 ease-out animate-fadeIn">
          <div>
            {/* Support */}
            <button
              onClick={handleSupport}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-all"
            >
              <LifeBuoy size={18} />
              <span>الدعم</span>
            </button>

            {/* License */}
            <button
              onClick={handleLicense}
              className="bg-transparent border-none rounded-none flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-all"
            >
              <FileText size={18} />
              <span>الرخصة</span>
            </button>

            {/* Logout */}
            {user && (
              <button
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
                className="
                  flex items-center gap-3 w-full px-4 py-2 text-sm 
                  text-red-600
                  bg-transparent border-none rounded-none
                  hover:bg-red-100
                  hover:text-red-800
                  transition-all duration-200
                "
              >
                <LogOut size={18} />
                <span>تسجيل الخروج</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
