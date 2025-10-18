import React from "react";
import CoursesTable from "../../components/AdminDashboard/CoursesTable";

export default function ManageCourses() {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-red-600 mb-6">إدارة الكورسات</h1>
      <CoursesTable />
    </div>
  );
}
