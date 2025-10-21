import React from "react";
import { useNavigate } from "react-router-dom";

export default function UploadedCoursesSection() {
  const navigate = useNavigate();

  // بيانات الدورات المرفوعة (مثال، يمكن جلبها من API)
  const uploadedCourses = [
    {
      id: 1,
      title: "دورة تصميم واجهات المستخدم",
      youtubeLink: "https://www.youtube.com/watch?v=example1",
      description: "تعلم تصميم واجهات مستخدم جذابة باستخدام Figma.",
      duration: "15 ساعة",
    },
    {
      id: 2,
      title: "أساسيات البرمجة بلغة Python",
      youtubeLink: "https://www.youtube.com/watch?v=example2",
      description: "مقدمة في البرمجة باستخدام Python للمبتدئين.",
      duration: "20 ساعة",
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
      {uploadedCourses.length === 0 ? (
        <p className="text-gray-500 text-center">لم تقم برفع أي دورات بعد.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {uploadedCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="p-4 border border-gray-200 rounded-xl hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${course.youtubeLink.split("v=")[1]}/hqdefault.jpg`}
                alt={course.title}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />
              <h4 className="font-medium text-gray-800">{course.title}</h4>
              <p className="text-sm text-gray-500 mt-1">مدة الدورة: {course.duration}</p>
              <p className="text-sm text-gray-500 mt-1">{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}