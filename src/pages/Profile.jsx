// Profile.jsx - الملف الرئيسي
import React, { useState } from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import PersonalInfo from "../components/Profile/PersonalInfo";
import EnrolledCoursesSection from "../components/Profile/EnrolledCoursesSection";
import UploadedCoursesSection from "../components/Profile/UploadedCoursesSection"; // إضافة المكون الجديد
import ProgressStats from "../components/Profile/ProgressStats";
import SettingsSection from "../components/Profile/SettingsSection";
import EditProfileModal from "../components/Profile/EditProfileModal";
import ChangePasswordModal from "../components/Profile/ChangePasswordModal";

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "إسراء سليمان",
    email: "esraa@example.com",
    phone: "+201234567890",
    country: "مصر",
    joinDate: "10 أكتوبر 2025",
    gender: "أنثى"
  });

  const handleUpdateUserData = (newData) => {
    setUserData(newData);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText py-10 px-6 md:px-20 transition-colors duration-300">
      <ProfileHeader
        userData={userData}
        onEditProfile={() => setIsEditModalOpen(true)}
      />
      <PersonalInfo userData={userData} />
      <EnrolledCoursesSection />
      <UploadedCoursesSection />
      <ProgressStats />
      <SettingsSection onChangePassword={() => setIsPasswordModalOpen(true)} />

      {/* نماذج التعديل */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        userData={userData}
        onUpdate={handleUpdateUserData}
      />

      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
}