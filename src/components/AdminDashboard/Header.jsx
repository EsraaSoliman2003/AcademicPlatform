import React from "react";
import { Bell, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold text-red-600">مرحبًا، المدير 👋</h1>

      <div className="flex items-center gap-5">
        <button className="relative text-gray-600 hover:text-red-600">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-3 h-3"></span>
        </button>
        <UserCircle size={28} className="text-gray-700 hover:text-red-600 cursor-pointer" />
      </div>
    </header>
  );
}
