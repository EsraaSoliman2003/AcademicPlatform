import React, { useState } from "react";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";
import { useSnackbarStore } from "../../store/snackbarStore";

export default function CourseList({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { showSnackbar } = useSnackbarStore();

  const handleEnroll = (course) => {
    if (course.price === 0) {
      showSnackbar("تم إضافة الكورس إلى حسابك الشخصي", "success");
      setSelectedCourse(null);
    } else {
      window.location.href = "/payment";
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={handleEnroll}
        />
      )}
    </>
  );
}
