import React from "react";
import { Star } from "lucide-react";

export default function CourseCard({ course, mode = "default", onClick }) {
  const isProfileMode = mode === "profile";

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-darkBg rounded-2xl shadow-lg overflow-hidden border border-gray-200 
                dark:border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!isProfileMode && (
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                course.level === "مبتدئ"
                  ? "bg-green-100 text-green-800"
                  : course.level === "متوسط"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {course.level}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lightText dark:text-darkText line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {course.title}
        </h3>

        {!isProfileMode && (
          <p className="text-grayText dark:text-grayTextDark text-sm line-clamp-2">
            {course.description}
          </p>
        )}

        <div className="flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
          <div className="flex items-center gap-1">
            <span>⏱️</span> <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            👥 <span>{course.students} طالب</span>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            المدرّس:
          </span>{" "}
          {course.instructor}
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700 mt-2">
          <span className="text-primary font-semibold text-base">
            {course.price === 0 ? "مجاني" : `${course.price} ريال`}
          </span>

          {!isProfileMode ? (
            <button className="text-sm bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition">
              التفاصيل
            </button>
          ) : (
            <button className="text-sm border border-primary text-primary px-3 py-1 rounded-lg hover:bg-primary hover:text-white transition">
              ابدأ الكورس
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
