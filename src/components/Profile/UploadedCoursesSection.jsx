import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../common/CourseCard";
import coursesData from "../../data/data.json";

export default function UploadedCoursesSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-red-600 border-b border-gray-200 pb-2">
          الدورات التي قمت برفعها
        </h3>
        <button
          onClick={() => navigate("/add-course")}
          className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          إضافة دورة جديدة
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coursesData.UploadedCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => navigate(`/courses/${course.id}`)}
            mode={"profile"}
          />
        ))}
      </div>
    </section>
  );
}
