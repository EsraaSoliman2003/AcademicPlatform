import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../features/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../features/Auth/Register";
import ForgetPassword from "../features/Auth/ForgetPassword";
import ContactUs from "../pages/ContactUs";
import Courses from "../pages/Courses";
import Dashboard from "../pages/Admin/Dashboard";
import ManageCourses from "../pages/Admin/ManageCourses";
import ManageUsers from "../pages/Admin/ManageUsers";
import ManageUniversities from "../pages/Admin/ManageUniversities";
import Reports from "../pages/Admin/Reports";
import CourseContent from "../pages/CourseContent";
import Payment from "../pages/Payment";
import AddCourse from "../pages/AddCourse";
import CourseInfo from "../pages/CourseInfo";
import ScrollToTop from "./ScrollToTop";


export default function AppRouter() {
  return (
    <>
      <ScrollToTop /> {/* 👈 بيرجّع الصفحة لأعلى عند التنقل */}
      <Routes>
        {/* Global Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Protected Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseContent />} />
        <Route path="/courses/info/:id" element={<CourseInfo />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/courses" element={<ManageCourses />} />
        <Route path="/admin/users" element={<ManageUsers />} />
        <Route path="/admin/universities" element={<ManageUniversities />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
