import React, { useState } from "react";
import { Settings, Video, FileText, ClipboardList, Plus } from "lucide-react";

export default function CourseManagement({
  course,
  onAddVideo,
  onEditVideo,
  onDeleteVideo,
  onAddPdf,
  onEditPdf,
  onDeletePdf,
  onCreateExam,
  onEditExam,
  onDeleteExam,
}) {
  const [activeTab, setActiveTab] = useState("videos");

  const tabs = [
    { id: "videos", label: "الفيديوهات", icon: Video },
    { id: "pdfs", label: "ملفات PDF", icon: FileText },
    { id: "exams", label: "الامتحانات", icon: ClipboardList },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Settings size={24} />
          إدارة المحتوى
        </h3>
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          👥 الطلاب: {course.students}
        </h3>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 font-medium transition-all ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="max-h-96 overflow-y-auto">
        {activeTab === "videos" && (
          <VideosManagement
            videos={course.videos || []}
            onEdit={onEditVideo}
            onDelete={onDeleteVideo}
            onAdd={onAddVideo}
          />
        )}

        {activeTab === "pdfs" && (
          <PdfsManagement
            pdfs={course.pdfs || []}
            onEdit={onEditPdf}
            onDelete={onDeletePdf}
            onAdd={onAddPdf}
          />
        )}

        {activeTab === "exams" && (
          <ExamsManagement
            exams={course.exams || []}
            onCreate={onCreateExam}
            onEdit={onEditExam}
            onDelete={onDeleteExam}
          />
        )}
      </div>
    </div>
  );
}

const VideosManagement = ({ videos, onEdit, onDelete, onAdd }) => (
  <div className="space-y-4">
    <button
      onClick={onAdd}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
    >
      <Plus size={18} />
      إضافة فيديو جديد
    </button>
    {videos.length === 0 ? (
      <p className="text-gray-500 text-center py-8">لا توجد فيديوهات</p>
    ) : (
      videos.map((video) => (
        <div
          key={video.id}
          className="flex justify-between items-center border rounded-lg p-4"
        >
          <div className="flex items-center gap-3">
            <Video size={20} className="text-blue-600" />
            <div>
              <h4 className="font-medium text-gray-800">{video.title}</h4>
              <p className="text-sm text-gray-600">{video.duration}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(video)}
              className="text-yellow-600 hover:text-yellow-800 px-3 py-1 rounded"
            >
              تعديل
            </button>
            <button
              onClick={() => onDelete(video.id)}
              className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
            >
              حذف
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);

const PdfsManagement = ({ pdfs, onEdit, onDelete, onAdd }) => (
  <div className="space-y-4">
    <button
      onClick={onAdd}
      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
    >
      <Plus size={18} />
      إضافة ملف PDF جديد
    </button>
    {pdfs.length === 0 ? (
      <p className="text-gray-500 text-center py-8">لا توجد ملفات PDF</p>
    ) : (
      pdfs.map((pdf) => (
        <div
          key={pdf.id}
          className="flex justify-between items-center border rounded-lg p-4"
        >
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-green-600" />
            <div>
              <h4 className="font-medium text-gray-800">{pdf.title}</h4>
              <p className="text-sm text-gray-600">{pdf.pages} صفحة</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(pdf)}
              className="text-yellow-600 hover:text-yellow-800 px-3 py-1 rounded"
            >
              تعديل
            </button>
            <button
              onClick={() => onDelete(pdf.id)}
              className="text-red-600 hover:text-red-800 px-3 py-1 rounded"
            >
              حذف
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);

import { useNavigate } from "react-router-dom";

const ExamsManagement = ({ exams }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <button
        onClick={() => navigate("/exam/create/new")}
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
      >
        <Plus size={18} />
        إنشاء امتحان جديد
      </button>

      {exams.map((exam) => (
        <div
          key={exam.examId}
          className="border rounded-lg p-4 flex justify-between items-start"
        >
          <div>
            <h4 className="font-semibold text-gray-800">{exam.title}</h4>
            <p className="text-sm text-gray-600">
              {exam.date} • {exam.durationMinutes} دقيقة
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/exam/edit/${exam.examId}`)}
              className="text-yellow-600 hover:text-yellow-800 px-3 py-1 rounded"
            >
              تعديل
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
