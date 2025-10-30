import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import coursesData from "../data/data.json";
import { useSnackbarStore } from "../store/snackbarStore";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  BarChart3,
  BookOpen,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

export default function CourseInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

  const course = coursesData.NewCourses.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100   flex items-center justify-center px-4">
        <div className="text-center bg-white  rounded-2xl p-8 shadow-xl max-w-md w-full">
          <div className="w-20 h-20 bg-red-100  rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800  mb-2">
            الكورس غير موجود
          </h2>
          <p className="text-gray-600  mb-6">
            عذراً، لم نتمكن من العثور على الكورس المطلوب
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg font-medium w-full"
          >
            العودة للخلف
          </button>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    if (course.price === 0) {
      showSnackbar("✅ تم إضافة الكورس بنجاح!", "success");
      navigate(-1);
    } else {
      navigate("/payment", {
        state: {
          from: location.pathname,
          courseId: course.id,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100  ">
      {/* Header */}
      <div className="bg-white  shadow-sm border-b border-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600  hover:text-primary  transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>العودة</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800 ">
                تفاصيل الكورس
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.price === 0
                      ? "bg-green-500 text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {course.price === 0 ? "مجاني" : `${course.price} ريال`}
                </span>
              </div>
            </div>

            {/* Course Title & Description */}
            <div className="bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
              <h1 className="text-3xl font-bold text-gray-900  mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-600  leading-relaxed text-lg">
                {course.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
              <h2 className="text-xl font-bold text-gray-900  mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                ماذا ستتعلم في هذا الكورس؟
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningOutcomes?.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-600 "
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{outcome}</span>
                  </div>
                )) || (
                  <>
                    <div className="flex items-center gap-3 text-gray-600 ">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>مهارات عملية في مجال {course.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 ">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>مشاريع عملية وتطبيقات حقيقية</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 ">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>أفضل الممارسات وأحدث التقنيات</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 ">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>شهادة معتمدة بعد الانتهاء</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Course Info & Enrollment */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <div className="bg-white  rounded-2xl p-6 shadow-xl border border-gray-200  sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {course.price === 0 ? "مجاني" : `${course.price} ريال`}
                </div>
                <p className="text-gray-500  text-sm">
                  {course.price === 0
                    ? "ابدأ التعلم الآن"
                    : "ادفع مرة واحدة واحصل على وصول دائم"}
                </p>
              </div>

              <button
                onClick={handleEnroll}
                className="w-full bg-primary hover:bg-primaryHover text-white py-4 rounded-xl transition-all duration-300 hover:shadow-lg font-semibold text-lg mb-4 flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                {course.price === 0 ? "ابدأ التعلم مجاناً" : "اشترك الآن"}
              </button>

              <div className="text-center text-sm text-gray-500 ">
                ✅ وصول فوري • ⏱️ وصول مدى الحياة • 📱 تعلم على جميع الأجهزة
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
              <h3 className="text-lg font-bold text-gray-900  mb-4">
                تفاصيل الكورس
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100  rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-600 ">
                      المدة
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900 ">
                    {course.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100  rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-600 ">
                      الطلاب
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900 ">
                    {course.students}+
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-100  rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span className="text-gray-600 ">
                      التقييم
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 ">
                      {course.rating}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100  rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-gray-600 ">
                      المستوى
                    </span>
                  </div>
                  <span
                    className={`font-semibold px-3 py-1 rounded-full text-sm ${
                      course.level === "مبتدئ"
                        ? "bg-green-100 text-green-800  "
                        : course.level === "متوسط"
                          ? "bg-yellow-100 text-yellow-800  "
                          : "bg-red-100 text-red-800  "
                    }`}
                  >
                    {course.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white  rounded-2xl p-6 shadow-lg border border-gray-200 ">
              <h3 className="text-lg font-bold text-gray-900  mb-4">
                ماذا تحصل عليه؟
              </h3>
              <div className="space-y-3">
                {[
                  "📺 فيديوهات تعليمية عالية الجودة",
                  "📚 موارد قابلة للتحميل",
                  "🏆 شهادة إتمام معتمدة",
                  "💬 دعم مباشر من المدرب",
                  "📱 وصول مدى الحياة",
                  "🔄 تحديثات مجانية مستقبلية",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-600 "
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
