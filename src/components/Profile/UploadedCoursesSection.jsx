import React from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../common/CourseCard";

export default function UploadedCoursesSection() {
  const navigate = useNavigate();

  const uploadedCourses = [
    {
      id: 7,
      title: "React المتقدم - من الصفر إلى الاحتراف",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=80",
      views: 1245,
      rating: 4.9,
      students: 856,
      duration: "32 ساعة",
      price: "149 ريال",
      original: "299 ريال",
      level: "متقدم",
      description:
        "تعلم بناء تطبيقات ويب تفاعلية باستخدام أحدث إصدارات React مع مشاريع عملية حقيقية.",
      hasExam: true,
      examSchedule: [
        { date: "2025-11-01", time: "10:00 صباحًا" },
        { date: "2025-11-15", time: "02:00 مساءً" },
      ],
    },
  ];

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
        {uploadedCourses.map((course) => (
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
