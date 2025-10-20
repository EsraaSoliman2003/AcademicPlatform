import React from "react";

export default function CourseModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-darkBg rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />

        <h2 className="text-2xl font-bold text-lightText dark:text-darkText mb-2">
          {course.title}
        </h2>
        <p className="text-grayText dark:text-grayTextDark mb-4">
          {course.description}
        </p>

        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="font-semibold text-primary text-lg">
              {course.price === 0 ? "مجاني" : `${course.price} ريال`}
            </span>
          </div>
          <div className="text-sm text-grayText dark:text-grayTextDark">
            {course.duration}
          </div>
        </div>

        <button
          onClick={() => onEnroll(course)}
          className="bg-primary hover:bg-primaryHover text-white w-full py-3 rounded-xl transition duration-200 font-medium"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}
