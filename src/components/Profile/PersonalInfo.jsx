// PersonalInfo.jsx - محسن
import React from "react";

export default function PersonalInfo({ userData }) {
  return (
    <section className="bg-white   rounded-2xl shadow-md dark:shadow-navbarDark p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-primary dark:text-accentColor mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        المعلومات الشخصية
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
        <div><span className="font-medium text-lightText dark:text-darkText">الاسم الكامل:</span> {userData.name}</div>
        <div><span className="font-medium text-lightText dark:text-darkText">البريد الإلكتروني:</span> {userData.email}</div>
        <div><span className="font-medium text-lightText dark:text-darkText">رقم الهاتف:</span> {userData.phone}</div>
        <div><span className="font-medium text-lightText dark:text-darkText">الدولة:</span> {userData.country}</div>
        <div><span className="font-medium text-lightText dark:text-darkText">تاريخ التسجيل:</span> {userData.joinDate}</div>
        <div><span className="font-medium text-lightText dark:text-darkText">النوع:</span> {userData.gender}</div>
      </div>
    </section>
  );
}