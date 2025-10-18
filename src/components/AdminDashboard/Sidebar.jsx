import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Book, Users, University, BarChart3, LogOut } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "الرئيسية", path: "/admin", icon: <Home size={20} /> },
    { name: "الكورسات", path: "/admin/courses", icon: <Book size={20} /> },
    { name: "المستخدمين", path: "/admin/users", icon: <Users size={20} /> },
    { name: "الجامعات", path: "/admin/universities", icon: <University size={20} /> },
    { name: "التقارير", path: "/admin/reports", icon: <BarChart3 size={20} /> },
  ];

  return (
    <aside className="w-64 bg-red-600 text-white flex flex-col min-h-screen">
      <div className="text-center py-6 text-2xl font-bold border-b border-red-400">
        لوحة التحكم
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition ${
                isActive
                  ? "bg-white text-red-600 font-semibold"
                  : "hover:bg-red-500"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-red-400">
        <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg hover:bg-red-500 transition">
          <LogOut size={20} /> تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
