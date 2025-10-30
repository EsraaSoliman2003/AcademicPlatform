import React from "react";
import CourseCard from "../../../components/common/CourseCard";
import { useNavigate } from "react-router-dom";

export default function CourseList({ courses }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onClick={() => navigate(`/courses/info/${course.id}`)}
        />
      ))}
    </div>
  );
}
