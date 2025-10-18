import React from "react";
import StatsCards from "../../components/AdminDashboard/StatsCards";
import CoursesTable from "../../components/AdminDashboard/CoursesTable";
import UsersTable from "../../components/AdminDashboard/UsersTable";

export default function Dashboard() {
  return (
    <div className="mt-20">
      <StatsCards />
      <CoursesTable />
      <UsersTable />
    </div>
  );
}
