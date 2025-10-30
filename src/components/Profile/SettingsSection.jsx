// SettingsSection.jsx - محسن
import React from "react";

export default function SettingsSection({ onChangePassword }) {
  return (
    <section className="bg-white   rounded-2xl shadow-md  p-6 border border-gray-200  transition-colors duration-300">
      <h3 className="text-xl font-semibold text-primary  mb-4 border-b border-gray-200  pb-2">
        الإعدادات
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={onChangePassword}
          className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          تغيير كلمة المرور
        </button>
        <button className="border border-red-500 text-red-500 hover:bg-red-50   px-5 py-2 rounded-lg font-medium transition-colors duration-200">
          حذف الحساب
        </button>
      </div>
    </section>
  );
}