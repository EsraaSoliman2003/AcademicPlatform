import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../data/data.json";

export default function Exam() {
  const { examId } = useParams();
  const [exam, setExam] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem(`examAnswers_${examId}`);
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, [examId]);

  useEffect(() => {
    let foundExam = null;
    for (let course of coursesData.courses) {
      foundExam = course.exams?.find((e) => e.examId === parseInt(examId));
      if (foundExam) break;
    }
    if (foundExam) {
      foundExam.questions = foundExam.questions.filter(
        (q) => q.type === "multiple-choice" || q.type === "true-false"
      );

      setExam(foundExam);

      const examStart = new Date(foundExam.date);
      const examEnd = new Date(
        examStart.getTime() + foundExam.durationMinutes * 60000
      );
      setTimeLeft(Math.max(0, Math.floor((examEnd - new Date()) / 1000)));
    }
  }, [examId]);

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      localStorage.setItem(`examAnswers_${examId}`, JSON.stringify(answers));
    }
  }, [answers, examId]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(
      () => setTimeLeft((prev) => Math.max(prev - 1, 0)),
      1000
    );
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Student answers:", answers);
      alert("تم تسليم الامتحان بنجاح!");
      localStorage.removeItem(`examAnswers_${examId}`);
      setIsSubmitting(false);
    }, 1500);
  };

  if (!exam)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            لم يتم العثور على الامتحان
          </h2>
          <p className="text-gray-600">
            الرجاء التحقق من رابط الامتحان والمحاولة مرة أخرى
          </p>
        </div>
      </div>
    );

  const progress =
    ((exam.durationMinutes * 60 - timeLeft) / (exam.durationMinutes * 60)) *
    100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {exam.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{new Date(exam.date).toLocaleDateString("ar-EG")}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>المدة: {exam.durationMinutes} دقيقة</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                الوقت المتبقي
              </span>
              <span
                className={`text-lg font-bold ${timeLeft < 600 ? "text-red-600" : "text-gray-800"}`}
              >
                {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${progress > 80 ? "bg-red-500" : progress > 60 ? "bg-yellow-500" : "bg-green-500"}`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {timeLeft > 0 ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  أسئلة الامتحان
                </h2>
                <span className="mr-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {exam.questions.length} سؤال
                </span>
              </div>

              <div className="space-y-6">
                {exam.questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {idx + 1}
                      </span>
                      <p className="font-medium text-gray-800 text-lg pt-1">
                        {q.question}
                      </p>
                    </div>

                    {q.type === "multiple-choice" && (
                      <div className="space-y-2 ml-11">
                        {q.options.map((opt, i) => (
                          <label
                            key={i}
                            className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors duration-150"
                          >
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={i}
                              checked={answers[q.id] === i}
                              onChange={() => handleChange(q.id, i)}
                              className="hidden"
                            />
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${answers[q.id] === i ? "border-blue-500" : "border-gray-400"}`}
                            >
                              {answers[q.id] === i && (
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                              )}
                            </div>
                            <span className="text-gray-700">{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {q.type === "true-false" && (
                      <div className="flex space-x-4 space-x-reverse ml-11">
                        <label className="flex-1 flex items-center p-3 rounded-lg border border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors duration-150">
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value="true"
                            checked={answers[q.id] === "true"}
                            onChange={() => handleChange(q.id, "true")}
                            className="hidden"
                          />
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${answers[q.id] === "true" ? "border-green-500" : "border-gray-400"}`}
                          >
                            {answers[q.id] === "true" && (
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            )}
                          </div>
                          <span className="text-gray-700 font-medium">صح</span>
                        </label>
                        <label className="flex-1 flex items-center p-3 rounded-lg border border-gray-200 hover:bg-red-50 cursor-pointer transition-colors duration-150">
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value="false"
                            checked={answers[q.id] === "false"}
                            onChange={() => handleChange(q.id, "false")}
                            className="hidden"
                          />
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${answers[q.id] === "false" ? "border-red-500" : "border-gray-400"}`}
                          >
                            {answers[q.id] === "false" && (
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            )}
                          </div>
                          <span className="text-gray-700 font-medium">خطأ</span>
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-xl font-medium text-white shadow-md transition-all duration-200 flex items-center ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      جاري التسليم...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      تسليم الإجابات
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              انتهى وقت الامتحان
            </h2>
            <p className="text-gray-600 mb-6">
              عذراً، لقد انتهى الوقت المخصص لهذا الامتحان
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              العودة للخلف
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
