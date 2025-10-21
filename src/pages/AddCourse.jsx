import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCoursePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    youtubeLink: "",
    description: "",
    duration: "",
    category: "",
    level: "",
    price: "",
    originalPrice: "",
    thumbnail: null,
    requirements: "",
    targetAudience: "",
    language: "",
    videos: [],
  });
  const [errors, setErrors] = useState({});

  // دالة لتحديث بيانات النموذج الأساسية
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // دالة لتحديث بيانات الفيديوهات
  const handleVideoChange = (index, e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => {
      const updatedVideos = [...prev.videos];
      updatedVideos[index] = {
        ...updatedVideos[index],
        [name]: files ? files[0] : value,
      };
      return { ...prev, videos: updatedVideos };
    });
    if (errors[`video-${index}-${name}`]) {
      setErrors((prev) => ({ ...prev, [`video-${index}-${name}`]: "" }));
    }
  };

  // دالة لإضافة فيديو جديد
  const addVideo = () => {
    setFormData((prev) => ({
      ...prev,
      videos: [...prev.videos, { youtubeLink: "", pdf: null, title: "" }],
    }));
  };

  // دالة لحذف فيديو
  const removeVideo = (index) => {
    setFormData((prev) => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index),
    }));
    setErrors((prev) => {
      const updatedErrors = { ...prev };
      Object.keys(updatedErrors).forEach((key) => {
        if (key.startsWith(`video-${index}-`)) {
          delete updatedErrors[key];
        }
      });
      return updatedErrors;
    });
  };

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "عنوان الدورة مطلوب";
    if (!formData.youtubeLink || !formData.youtubeLink.includes("youtube.com/watch?v="))
      newErrors.youtubeLink = "يرجى إدخال رابط يوتيوب صالح";
    if (!formData.description) newErrors.description = "وصف الدورة مطلوب";
    if (!formData.duration) newErrors.duration = "مدة الدورة مطلوبة";
    if (!formData.category) newErrors.category = "اختر فئة الدورة";
    if (!formData.level) newErrors.level = "اختر مستوى الدورة";
    if (!formData.price || isNaN(formData.price) || formData.price <= 0)
      newErrors.price = "السعر يجب أن يكون رقمًا صحيحًا";
    if (!formData.originalPrice || isNaN(formData.originalPrice) || formData.originalPrice <= 0)
      newErrors.originalPrice = "السعر الأصلي يجب أن يكون رقمًا صحيحًا";
    if (!formData.thumbnail) newErrors.thumbnail = "صورة الدورة مطلوبة";
    if (!formData.requirements) newErrors.requirements = "المتطلبات الأساسية مطلوبة";
    if (!formData.targetAudience) newErrors.targetAudience = "الجمهور المستهدف مطلوب";
    if (!formData.language) newErrors.language = "اختر لغة الدورة";
    if (formData.videos.length === 0) newErrors.videos = "يجب إضافة فيديو واحد على الأقل";

    formData.videos.forEach((video, index) => {
      if (!video.youtubeLink || !video.youtubeLink.includes("youtube.com/watch?v=")) {
        newErrors[`video-${index}-youtubeLink`] = "رابط يوتيوب صالح مطلوب";
      }
      if (!video.title) {
        newErrors[`video-${index}-title`] = "عنوان الفيديو مطلوب";
      }
    });

    return newErrors;
  };

  // التعامل مع إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "videos") {
        formData.videos.forEach((video, index) => {
          data.append(`videos[${index}][youtubeLink]`, video.youtubeLink);
          data.append(`videos[${index}][title]`, video.title);
          if (video.pdf) {
            data.append(`videos[${index}][pdf]`, video.pdf);
          }
        });
      } else if (key === "thumbnail" && formData.thumbnail) {
        data.append("thumbnail", formData.thumbnail);
      } else {
        data.append(key, formData[key]);
      }
    });

    console.log("بيانات الدورة:", Object.fromEntries(data));
    navigate("/profile");
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-100 py-10 px-6 md:px-20 mt-20"
    >
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b border-gray-200 pb-3">
          إضافة دورة جديدة
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* عنوان الدورة */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                عنوان الدورة
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                placeholder="أدخل عنوان الدورة"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* رابط يوتيوب الرئيسي */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                رابط فيديو يوتيوب الرئيسي
              </label>
              <input
                type="url"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.youtubeLink ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                placeholder="https://www.youtube.com/watch?v=..."
              />
              {errors.youtubeLink && <p className="text-red-500 text-sm mt-1">{errors.youtubeLink}</p>}
            </div>

            {/* مدة الدورة */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                مدة الدورة
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.duration ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                placeholder="مثال: 20 ساعة"
              />
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>

            {/* الفئة */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                فئة الدورة
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.category ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
              >
                <option value="">اختر الفئة</option>
                <option value="برمجة">برمجة</option>
                <option value="تصميم">تصميم</option>
                <option value="تحليل بيانات">تحليل بيانات</option>
                <option value="تسويق">تسويق</option>
                <option value="إدارة">إدارة</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* المستوى */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                مستوى الدورة
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.level ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
              >
                <option value="">اختر المستوى</option>
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="متقدم">متقدم</option>
              </select>
              {errors.level && <p className="text-red-500 text-sm mt-1">{errors.level}</p>}
            </div>

            {/* اللغة */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                لغة الدورة
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.language ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
              >
                <option value="">اختر اللغة</option>
                <option value="العربية">العربية</option>
                <option value="الإنجليزية">الإنجليزية</option>
                <option value="الفرنسية">الفرنسية</option>
              </select>
              {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language}</p>}
            </div>

            {/* السعر */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                السعر (ريال)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                placeholder="أدخل السعر الحالي"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>

            {/* السعر الأصلي */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                السعر الأصلي (ريال)
              </label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${errors.originalPrice ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                placeholder="أدخل السعر الأصلي"
              />
              {errors.originalPrice && <p className="text-red-500 text-sm mt-1">{errors.originalPrice}</p>}
            </div>
          </div>

          {/* وصف الدورة */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              وصف الدورة
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
              rows="5"
              placeholder="اكتب وصفًا تفصيليًا للدورة"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* المتطلبات الأساسية */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              المتطلبات الأساسية
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.requirements ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
              rows="3"
              placeholder="اكتب المتطلبات الأساسية للدورة"
            />
            {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
          </div>

          {/* الجمهور المستهدف */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              الجمهور المستهدف
            </label>
            <textarea
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.targetAudience ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
              rows="3"
              placeholder="من هم الجمهور المستهدف لهذه الدورة؟"
            />
            {errors.targetAudience && <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>}
          </div>

          {/* صورة الدورة */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              صورة الدورة
            </label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleChange}
              accept="image/*"
              className={`w-full px-4 py-3 border ${errors.thumbnail ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
            />
            {errors.thumbnail && <p className="text-red-500 text-sm mt-1">{errors.thumbnail}</p>}
            {formData.thumbnail && (
              <img
                src={URL.createObjectURL(formData.thumbnail)}
                alt="Course Thumbnail Preview"
                className="mt-3 h-48 w-auto rounded-lg object-cover shadow-md"
              />
            )}
          </div>

          {/* قسم الفيديوهات */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                فيديوهات الدورة
              </label>
              <button
                type="button"
                onClick={addVideo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-sm"
              >
                إضافة فيديو
              </button>
            </div>
            {errors.videos && <p className="text-red-500 text-sm mt-1">{errors.videos}</p>}
            {formData.videos.map((video, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-5 mb-4 bg-gray-50 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-700">فيديو {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeVideo(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  {/* عنوان الفيديو */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      عنوان الفيديو
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={video.title}
                      onChange={(e) => handleVideoChange(index, e)}
                      className={`w-full px-4 py-3 border ${errors[`video-${index}-title`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                      placeholder="أدخل عنوان الفيديو"
                    />
                    {errors[`video-${index}-title`] && <p className="text-red-500 text-sm mt-1">{errors[`video-${index}-title`]}</p>}
                  </div>
                  {/* رابط يوتيوب */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      رابط يوتيوب
                    </label>
                    <input
                      type="url"
                      name="youtubeLink"
                      value={video.youtubeLink}
                      onChange={(e) => handleVideoChange(index, e)}
                      className={`w-full px-4 py-3 border ${errors[`video-${index}-youtubeLink`] ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm`}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                    {errors[`video-${index}-youtubeLink`] && <p className="text-red-500 text-sm mt-1">{errors[`video-${index}-youtubeLink`]}</p>}
                  </div>
                  {/* ملف PDF */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ملف PDF (اختياري)
                    </label>
                    <input
                      type="file"
                      name="pdf"
                      onChange={(e) => handleVideoChange(index, e)}
                      accept="application/pdf"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 shadow-sm"
                    />
                    {video.pdf && (
                      <p className="text-sm text-gray-600 mt-2">تم رفع: {video.pdf.name}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* أزرار الإرسال والإلغاء */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
            >
              إضافة الدورة
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}