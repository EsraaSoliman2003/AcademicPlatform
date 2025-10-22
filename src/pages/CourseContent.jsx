import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseIntro from "../components/CourseContent/CourseIntro";
import VideoPlayer from "../components/CourseContent/VideoPlayer";
import VideoList from "../components/CourseContent/VideoList";
import PdfList from "../components/CourseContent/PdfList";
import CourseInfoSidebar from "../components/CourseContent/CourseInfoSidebar";
import CourseOwnerActions from "../components/CourseContent/CourseOwnerActions";
import EditCourseModal from "../components/CourseContent/EditCourseModal";
import coursesData from "../data/data.json";

export default function CourseContent() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPdf, setCurrentPdf] = useState(null);
  const [activeTab, setActiveTab] = useState("videos");
  const [isEditOpen, setIsEditOpen] = useState(false);

  const currentUser = { id: 7 };

  useEffect(() => {
    const foundCourse = coursesData.courses.find((c) => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);
      setCurrentVideo(foundCourse.videos[0]);
      if (foundCourse.pdfs?.length) setCurrentPdf(foundCourse.pdfs[0]);
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
            {/* 🔹 Tabs Switcher */}
            <div className="flex mb-4 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex-1 py-2 text-center font-semibold transition ${
                  activeTab === "videos"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                🎥 Videos
              </button>
              <button
                onClick={() => setActiveTab("pdfs")}
                className={`flex-1 py-2 text-center font-semibold transition ${
                  activeTab === "pdfs"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                📄 PDFs
              </button>
            </div>

            {/* 🔹 Content Area */}
            {activeTab === "videos" ? (
              <>
                <VideoPlayer videoUrl={currentVideo?.url} />

                <VideoList videos={course.videos} onSelect={setCurrentVideo} />
              </>
            ) : (
              <>
                {currentPdf ? (
                  <div className="border rounded-lg overflow-hidden shadow">
                    <iframe
                      src={currentPdf.url}
                      title={currentPdf.title}
                      className="w-full h-[500px]"
                    ></iframe>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-10">
                    No PDFs available
                  </p>
                )}
                <PdfList pdfs={course.pdfs} onSelect={setCurrentPdf} />
              </>
            )}
          </div>

          {/* 🔹 Sidebar / Owner Actions */}
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
