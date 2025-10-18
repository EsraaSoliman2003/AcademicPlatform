import React from "react";
import UniversityManager from "../../components/AdminDashboard/UniversityManager";

export default function ManageUniversities() {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-red-600 mb-6">إدارة الجامعات</h1>
      <UniversityManager />
    </div>
  );
}
