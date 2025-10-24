import coursesData from "../../data/data.json";

export default function ExamsScheduleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const now = new Date();

  const coursesWithUpcomingExams = coursesData.courses
    .map((course) => {
      const upcomingExams = course.exams.filter((exam) => {
        const examStart = new Date(exam.date);
        const examEnd = new Date(
          examStart.getTime() + exam.durationMinutes * 60000
        );
        return now <= examEnd;
      });
      return { ...course, exams: upcomingExams };
    })
    .filter((course) => course.exams.length > 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">
            مواعيد الامتحانات
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {coursesWithUpcomingExams.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            لا توجد امتحانات قادمة.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700 border-b border-gray-200">
                    اسم الدورة
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700 border-b border-gray-200">
                    تاريخ الامتحان
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700 border-b border-gray-200">
                    الوقت
                  </th>
                </tr>
              </thead>
              <tbody>
                {coursesWithUpcomingExams.map((course) =>
                  course.exams.map((exam) => {
                    const examDate = new Date(exam.date);
                    const dateStr = examDate.toLocaleDateString("ar-EG");
                    const timeStr = examDate.toLocaleTimeString("ar-EG", {
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <tr
                        key={`${course.id}-${exam.examId}`}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-4 py-3 text-right text-gray-800 border-b border-gray-200">
                          {course.title}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600 border-b border-gray-200">
                          {dateStr}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600 border-b border-gray-200">
                          {timeStr}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
