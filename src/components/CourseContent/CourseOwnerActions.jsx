// src/components/CourseContent/CourseOwnerActions.jsx
import React from "react";
import { Plus, Edit, Trash2, FileCheck } from "lucide-react";

export default function CourseOwnerActions({ onEdit, onDelete, onCreateExam }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Manage Course
      </h3>

      <div className="flex flex-col gap-3">
        <button
          onClick={onEdit}
          className="flex items-center justify-center gap-2 bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition"
        >
          <Edit size={18} /> Edit Course
        </button>

        <button
          onClick={onDelete}
          className="flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
        >
          <Trash2 size={18} /> Delete Course
        </button>

        <button
          onClick={onCreateExam}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
        >
          <FileCheck size={18} /> Create Exam
        </button>
      </div>
    </div>
  );
}
