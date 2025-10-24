import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExamsScheduleModal from "./ExamsScheduleModal";
import CourseCard from "../common/CourseCard";
import coursesData from "../../data/data.json";

export default function EnrolledCoursesSection() {
  const navigate = useNavigate();
  const [isExamsModalOpen, setIsExamsModalOpen] = useState(false);

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-red-600 border-b border-gray-200 pb-2">
          الدورات المسجّلة
        </h3>
        <button
          onClick={() => setIsExamsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm"
        >
          عرض مواعيد الامتحانات
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {coursesData.EnrelledCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => navigate(`/courses/${course.id}`)}
            mode={"profile"}
          />
        ))}
      </div>

      <ExamsScheduleModal
        isOpen={isExamsModalOpen}
        onClose={() => setIsExamsModalOpen(false)}
      />
    </section>
  );
}
