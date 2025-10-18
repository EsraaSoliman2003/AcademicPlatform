// SettingsSection.jsx - محسن
import React from "react";

export default function SettingsSection({ onChangePassword }) {
  return (
    <section className="bg-white dark:bg-darkBg rounded-2xl shadow-md dark:shadow-navbarDark p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-primary dark:text-accentColor mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        الإعدادات
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={onChangePassword}
          className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          تغيير كلمة المرور
        </button>
        <button className="border border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 dark:hover:bg-opacity-20 px-5 py-2 rounded-lg font-medium transition-colors duration-200">
          حذف الحساب
        </button>
      </div>
    </section>
  );
}