import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StatusIcon = ({ status }) => {
  const icons = {
    قادم: "🕒",
    متاح: "✅",
    انتهى: "❌",
    مكتمل: "✔️",
    غائب: "⏰",
  };

  return <span className="text-xl ml-2">{icons[status]}</span>;
};

const StatusBadge = ({ status, students }) => {
  if (students !== undefined && students !== null) {
    return (
      <div className="inline-flex items-center px-3 py-1 rounded-full border bg-gray-100 text-gray-800 border-gray-200">
        👥 الطلاب: {students}
      </div>
    );
  }

  if (status === "متاح") return null;

  const statusColors = {
    قادم: "bg-blue-100 text-blue-800 border-blue-200",
    انتهى: "bg-gray-100 text-gray-800 border-gray-200",
    مكتمل: "bg-purple-100 text-purple-800 border-purple-200",
    غائب: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full border ${statusColors[status]}`}
    >
      <StatusIcon status={status} />
      <span className="font-medium">{status}</span>
    </div>
  );
};

export default function ExamsList({ exams }) {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatus = (exam) => {
    const examStart = new Date(exam.date);
    const examEnd = new Date(
      examStart.getTime() + exam.durationMinutes * 60000
    );

    if (exam.studentStatus === "مكتمل") return "مكتمل";
    if (exam.studentStatus === "غائب") return "غائب";
    if (currentTime < examStart) return "قادم";
    if (currentTime >= examStart && currentTime <= examEnd) return "متاح";
    return "انتهى";
  };

  const getTimeRemaining = (exam) => {
    const examStart = new Date(exam.date);
    const examEnd = new Date(
      examStart.getTime() + exam.durationMinutes * 60000
    );

    if (currentTime < examStart) {
      const diff = examStart - currentTime;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return ` يبدأ بعد: ${hours} ساعة ${minutes} دقيقة`;
    }

    if (currentTime >= examStart && currentTime <= examEnd) {
      const diff = examEnd - currentTime;
      const minutes = Math.floor(diff / (1000 * 60));
      return ` متبقي: ${minutes} دقيقة`;
    }

    return "";
  };

  const handleStartExam = (exam) => {
    const examStart = new Date(exam.date);
    const examEnd = new Date(
      examStart.getTime() + exam.durationMinutes * 60000
    );

    if (currentTime >= examStart && currentTime <= examEnd) {
      navigate(`/exam/${exam.examId}`)
    } else {
      alert("لا يمكن بدء الامتحان الآن");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div dir="rtl" className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800 text-right border-b pb-2">
        📝 قائمة الامتحانات
      </h2>

      {exams.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">لا توجد امتحانات متاحة حالياً</p>
        </div>
      ) : (
        exams.map((exam) => {
          const status = getStatus(exam);
          const timeRemaining = getTimeRemaining(exam);

          return (
            <div
              key={exam.examId}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 text-right">
                      {exam.title}
                    </h3>
                    <StatusBadge status={status} students={exam.students} />
                  </div>

                  <div className="space-y-2 text-right">
                    <p className="text-gray-600">
                      <span className="font-medium">📅 التاريخ: </span>
                      {formatDate(exam.date)}
                    </p>

                    <p className="text-gray-600">
                      <span className="font-medium">⏱️ المدة: </span>
                      {exam.durationMinutes} دقيقة
                    </p>

                    {timeRemaining && (
                      <p
                        className={`text-sm ${
                          status === "متاح"
                            ? "text-green-600 font-semibold"
                            : "text-blue-600"
                        }`}
                      >
                        {timeRemaining}
                      </p>
                    )}

                    {exam.score !== null && exam.score !== undefined && (
                      <p className="text-green-600 font-semibold text-lg">
                        🏆 الدرجة: {exam.score}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  {(exam.students === undefined || exam.students === null) &&
                    status === "متاح" && (
                      <button
                        onClick={() => handleStartExam(exam)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        🚀 بدء الامتحان
                      </button>
                    )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
