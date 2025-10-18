import React from "react";
import UsersTable from "../../components/AdminDashboard/UsersTable";

export default function ManageUsers() {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-red-600 mb-6">إدارة المستخدمين</h1>
      <UsersTable />
    </div>
  );
}
