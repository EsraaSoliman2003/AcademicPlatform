import React from "react";
import { Star } from "lucide-react";

export default function CourseInfoSidebar({ instructor, duration, rating }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Course Information
      </h3>
      <div className="flex justify-between text-gray-600">
        <span>Instructor:</span>
        <span className="font-medium text-gray-800">{instructor}</span>
      </div>
      <div className="flex justify-between text-gray-600">
        <span>Duration:</span>
        <span className="font-medium text-gray-800">{duration}</span>
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <span>Rating:</span>
        <div className="flex items-center gap-1">
          <Star size={18} className="text-yellow-500" />
          <span className="font-medium text-gray-800">{rating}</span>
        </div>
      </div>
    </div>
  );
}
