import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseInfoSidebar from "../components/CourseContent/CourseInfoSidebar";
import CourseIntro from "../components/CourseContent/CourseIntro";
import CourseManagement from "../components/CourseContent/CourseManagement";
import EditCourseModal from "../components/CourseContent/EditCourseModal";
import ExamsList from "../components/CourseContent/ExamsList";
import PdfList from "../components/CourseContent/PdfList";
import VideoList from "../components/CourseContent/VideoList";
import VideoPdfModal from "../components/CourseContent/VideoPdfModal";
import VideoPlayer from "../components/CourseContent/VideoPlayer";
import coursesData from "../data/data.json";
import { useNavigate } from "react-router-dom";

export default function CourseContent() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentPdf, setCurrentPdf] = useState(null);
  const [activeTab, setActiveTab] = useState("videos");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isVideoPdfModalOpen, setIsVideoPdfModalOpen] = useState(false);
  const [currentModalType, setCurrentModalType] = useState(null);
  const [currentEditData, setCurrentEditData] = useState(null);

  useEffect(() => {
    const allCourses = [
      ...(coursesData.EnrolledCourses || []),
      ...(coursesData.UploadedCourses || []),
    ];

    const foundCourse = allCourses.find((c) => c.id === parseInt(id));
    if (foundCourse) {
      setCourse(foundCourse);

      const firstVideo = foundCourse.videos?.[0];
      if (firstVideo) setCurrentVideo(firstVideo);

      const firstPdf = foundCourse.pdfs?.[0];
      if (firstPdf) setCurrentPdf(firstPdf);
    }
  }, [id]);

  const isOwner = coursesData.UploadedCourses.find(
    (c) => c.id === parseInt(id)
  );

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        جاري تحميل الدورة...
      </div>
    );
  }

  const handleAddVideo = () => {
    setCurrentModalType("video");
    setCurrentEditData(null);
    setIsVideoPdfModalOpen(true);
  };

  const handleEditVideo = (video) => {
    setCurrentModalType("video");
    setCurrentEditData(video);
    setIsVideoPdfModalOpen(true);
  };

  const handleSaveVideo = (videoData) => {
    if (currentEditData) {
      setCourse((prev) => ({
        ...prev,
        videos: prev.videos.map((v) => (v.id === videoData.id ? videoData : v)),
      }));
    } else {
      setCourse((prev) => ({
        ...prev,
        videos: [...(prev.videos || []), videoData],
      }));
    }
  };

  const handleDeleteVideo = (videoId) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الفيديو؟")) {
      setCourse((prev) => ({
        ...prev,
        videos: prev.videos.filter((v) => v.id !== videoId),
      }));
    }
  };

  const handleAddPdf = () => {
    setCurrentModalType("pdf");
    setCurrentEditData(null);
    setIsVideoPdfModalOpen(true);
  };

  const handleEditPdf = (pdf) => {
    setCurrentModalType("pdf");
    setCurrentEditData(pdf);
    setIsVideoPdfModalOpen(true);
  };

  const handleSavePdf = (pdfData) => {
    if (currentEditData) {
      setCourse((prev) => ({
        ...prev,
        pdfs: prev.pdfs.map((p) => (p.id === pdfData.id ? pdfData : p)),
      }));
    } else {
      setCourse((prev) => ({
        ...prev,
        pdfs: [...(prev.pdfs || []), pdfData],
      }));
    }
  };

  const handleDeletePdf = (pdfId) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الملف؟")) {
      setCourse((prev) => ({
        ...prev,
        pdfs: prev.pdfs.filter((p) => p.id !== pdfId),
      }));
    }
  };

  const handleCreateExam = () => {
    const newExam = {
      examId: Date.now(),
      title: "امتحان جديد",
      date: new Date().toISOString(),
      durationMinutes: 30,
      questions: [],
      studentStatus: "متاح",
    };

    setCourse((prev) => ({
      ...prev,
      exams: [...(prev.exams || []), newExam],
    }));

    navigate(`/exam/${newExam.examId}`);
  };

  const handleEditExam = (exam) => {
    navigate(`/exam/${exam.examId}`);
  };

  const handleDeleteExam = (examId) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الامتحان؟")) {
      setCourse((prev) => ({
        ...prev,
        exams: prev.exams.filter((exam) => exam.examId !== examId),
      }));
    }
  };

  const handleSaveCourse = (updatedData) => {
    setCourse((prev) => ({ ...prev, ...updatedData }));
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
                🎥 الفيديوهات
              </button>
              <button
                onClick={() => setActiveTab("pdfs")}
                className={`flex-1 py-2 text-center font-semibold transition ${
                  activeTab === "pdfs"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                📄 الملفات
              </button>
              <button
                onClick={() => setActiveTab("exams")}
                className={`flex-1 py-2 text-center font-semibold transition ${
                  activeTab === "exams"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                📝 الامتحانات
              </button>
            </div>

            {/* 🔹 Content Area */}
            {activeTab === "videos" ? (
              <>
                <VideoPlayer videoUrl={currentVideo?.url} />
                <VideoList videos={course.videos} onSelect={setCurrentVideo} />
              </>
            ) : activeTab === "exams" ? (
              <ExamsList exams={course.exams || []} />
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
                    لا توجد ملفات متاحة
                  </p>
                )}
                <PdfList pdfs={course.pdfs} onSelect={setCurrentPdf} />
              </>
            )}
          </div>

          {/* 🔹 Sidebar / Owner Actions */}
          {isOwner ? (
            <CourseManagement
              course={course}
              onAddVideo={handleAddVideo}
              onEditVideo={handleEditVideo}
              onDeleteVideo={handleDeleteVideo}
              onAddPdf={handleAddPdf}
              onEditPdf={handleEditPdf}
              onDeletePdf={handleDeletePdf}
              onCreateExam={handleCreateExam}
              onEditExam={handleEditExam}
              onDeleteExam={handleDeleteExam}
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

      {/* Modals */}
      <EditCourseModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        course={course}
        onSave={handleSaveCourse}
      />

      <VideoPdfModal
        open={isVideoPdfModalOpen}
        onClose={() => setIsVideoPdfModalOpen(false)}
        type={currentModalType}
        data={currentEditData}
        onSave={currentModalType === "video" ? handleSaveVideo : handleSavePdf}
      />
    </div>
  );
}
