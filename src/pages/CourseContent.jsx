import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseIntro from "../components/CourseContent/CourseIntro";
import VideoPlayer from "../components/CourseContent/VideoPlayer";
import VideoList from "../components/CourseContent/VideoList";
import CourseInfoSidebar from "../components/CourseContent/CourseInfoSidebar";
import CourseOwnerActions from "../components/CourseContent/CourseOwnerActions";
import EditCourseModal from "../components/CourseContent/EditCourseModal";
import coursesData from "../data/data.json";

export default function CourseContent() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const currentUser = { id: 7 };

  useEffect(() => {
    const foundCourse = coursesData.courses.find((c) => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      setCurrentVideo(foundCourse.videos[0]);
    }
  }, [id]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading course...
      </div>
    );
  }

  const isOwner = currentUser.id === course.instructorId;

  const handleEditClick = () => setIsEditOpen(true);
  const handleSaveCourse = (updatedData) => {
    setCourse((prev) => ({ ...prev, ...updatedData }));
  };
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      alert("Course deleted!");
    }
  };
  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 mt-20">
      <div className="flex-1">
        <CourseIntro
          image={course.image}
          title={course.title}
          description={course.description}
        />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VideoPlayer videoUrl={currentVideo?.url} />

            <VideoList videos={course.videos} onSelect={handleVideoSelect} />
          </div>

          {isOwner ? (
            <CourseOwnerActions
              onAddLesson={() => alert("Add Lesson clicked")}
              onEdit={handleEditClick}
              onDelete={handleDelete}
              onCreateExam={() => alert("Create Exam clicked")}
            />
          ) : (
            <CourseInfoSidebar
              instructor={course.instructor}
              duration={course.duration}
              rating={course.rating}
            />
          )}
        </div>
      </div>

      <EditCourseModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        course={course}
        onSave={handleSaveCourse}
      />
    </div>
  );
}
