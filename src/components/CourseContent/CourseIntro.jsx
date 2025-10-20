import React from "react";

export default function CourseIntro({ image, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/3 h-56 object-cover"
      />
      <div className="p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
