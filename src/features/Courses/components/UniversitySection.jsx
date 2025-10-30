import React from "react";
import CourseList from "./CourseList";

export default function UniversitySection({ university, courses }) {
  if (courses.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6 p-4 bg-white   rounded-2xl shadow-md">
        <img
          src={university.logo}
          alt={university.name}
          className="w-16 h-16 rounded-xl object-cover border-2 border-primary"
        />
        <div>
          <h2 className="text-2xl font-bold text-lightText ">
            {university.name}
          </h2>
          <p className="text-grayText  mt-1">
            {courses.length} كورس متاح
          </p>
        </div>
      </div>

      <CourseList courses={courses} />
    </section>
  );
}