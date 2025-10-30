import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coursesData from "../../../data/data.json";
import { useNavigate } from "react-router-dom";

export default function Exam() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const [exam, setExam] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem(`examAnswers_${examId}`);
    const savedScore = localStorage.getItem(`examScore_${examId}`);
    const savedSubmitted = localStorage.getItem(`examSubmitted_${examId}`);

    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedScore) setScore(parseInt(savedScore));
    if (savedSubmitted === "true") setIsSubmitted(true);
  }, [examId]);

  useEffect(() => {
    let foundExam = null;
    for (let course of coursesData.EnrelledCourses) {
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
    localStorage.setItem(`examAnswers_${examId}`, JSON.stringify(answers));
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
    if (!isSubmitted) {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      let correctCount = 0;
      exam.questions.forEach((q) => {
        if (q.type === "multiple-choice" && answers[q.id] === q.answer)
          correctCount++;
        if (q.type === "true-false" && answers[q.id] === q.answer)
          correctCount++;
      });

      setScore(correctCount);
      setIsSubmitted(true);

      localStorage.setItem(`examScore_${examId}`, correctCount);
      localStorage.setItem(`examSubmitted_${examId}`, "true");

      setIsSubmitting(false);
      alert(
        `تم تسليم الامتحان بنجاح! نتيجتك: ${correctCount} / ${exam.questions.length}`
      );
    }, 1000);
  };

  if (!exam)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
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
                <span>{new Date(exam.date).toLocaleDateString("ar-EG")}</span>
              </div>
              <div className="flex items-center">
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

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                أسئلة الامتحان
              </h2>
              <span className="mr-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {exam.questions.length} سؤال
              </span>
            </div>

            <div className="space-y-6">
              {exam.questions.map((q, idx) => {
                return (
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
                        {q.options.map((opt, i) => {
                          const correct = i === q.answer;
                          const selected = answers[q.id] === i;
                          return (
                            <label
                              key={i}
                              className={`flex items-center p-3 rounded-lg border transition-colors duration-150 cursor-pointer
                                ${isSubmitted ? (correct ? "bg-green-100 border-green-500" : selected ? "bg-red-100 border-red-500" : "bg-white") : "hover:bg-blue-50"}`}
                            >
                              <input
                                type="radio"
                                name={`q-${q.id}`}
                                value={i}
                                checked={selected}
                                onChange={() => handleChange(q.id, i)}
                                disabled={isSubmitted}
                                className="hidden"
                              />
                              <div
                                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${selected ? "border-blue-500" : "border-gray-400"}`}
                              >
                                {selected && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                )}
                              </div>
                              <span className="text-gray-700">{opt}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}

                    {q.type === "true-false" && (
                      <div className="flex space-x-4 space-x-reverse ml-11">
                        {["true", "false"].map((val) => {
                          const correct = val === q.answer;
                          const selected = answers[q.id] === val;
                          return (
                            <label
                              key={val}
                              className={`flex-1 flex items-center p-3 rounded-lg border transition-colors duration-150 cursor-pointer
                                ${isSubmitted ? (correct ? "bg-green-100 border-green-500" : selected ? "bg-red-100 border-red-500" : "bg-white") : "hover:bg-blue-50"}`}
                            >
                              <input
                                type="radio"
                                name={`q-${q.id}`}
                                value={val}
                                checked={selected}
                                onChange={() => handleChange(q.id, val)}
                                disabled={isSubmitted}
                                className="hidden"
                              />
                              <div
                                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${selected ? "border-blue-500" : "border-gray-400"}`}
                              >
                                {selected && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                )}
                              </div>
                              <span className="text-gray-700 font-medium">
                                {val === "true" ? "صح" : "خطأ"}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!isSubmitted && (
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-xl font-medium text-white shadow-md transition-all duration-200 flex items-center ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"}`}
                >
                  {isSubmitting ? "جاري التسليم..." : "تسليم الإجابات"}
                </button>
              </div>
            )}

            {isSubmitted && (
              <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg text-center space-y-4">
                <div className="text-green-700 text-2xl font-extrabold flex items-center justify-center space-x-2 rtl:space-x-reverse">
                  <span>✅ تم التسليم</span>
                  <span className="text-xl font-bold text-gray-800">
                    نتيجتك: {score} / {exam.questions.length}
                  </span>
                </div>

                <button
                  onClick={() => navigate(-1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg font-medium w-full md:w-1/2 mx-auto"
                >
                  العودة للخلف
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
