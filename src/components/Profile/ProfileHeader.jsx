// ProfileHeader.jsx - محسن
import React, { useState, useRef } from "react";
import personImg from "../../assets/imgs/person.png";

export default function ProfileHeader({ userData, onEditProfile }) {
  const [profileImage, setProfileImage] = useState(personImg);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white dark:bg-darkBg rounded-2xl shadow-lg dark:shadow-navbarDark p-6 flex flex-col md:flex-row items-center md:items-start gap-6 mt-20 mb-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="relative">
        <img
          src={profileImage}
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-primary object-cover shadow-md"
        />
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-darkBg"></span>
        
        {/* زر تغيير الصورة */}
        <button
          onClick={triggerFileInput}
          className="absolute bottom-0 left-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primaryHover transition-colors duration-200"
          title="تغيير الصورة"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
      </div>

      <div className="flex-1 text-center md:text-right">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-darkText">{userData.name}</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">الطالب في منصة رفيق للتعلم</p>

        <div className="flex justify-center md:justify-end gap-3 mt-4">
          <button 
            onClick={onEditProfile}
            className="bg-gradient-to-r from-primary to-primaryHover text-white px-5 py-2 rounded-lg font-medium shadow hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            تعديل الملف الشخصي
          </button>

          <button 
            onClick={triggerFileInput}
            className="border border-primary text-primary dark:text-accentColor px-5 py-2 rounded-lg font-medium hover:bg-lightPrimary dark:hover:bg-opacity-20 hover:shadow transition-all duration-300"
          >
            تغيير الصورة
          </button>
        </div>
      </div>
    </div>
  );
}