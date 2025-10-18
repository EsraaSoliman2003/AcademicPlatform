import React from "react";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "React المتقدم - من الصفر إلى الاحتراف",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=80",
      views: 1245,
      rating: 4.9,
      students: 856,
      duration: "32 ساعة",
      price: "149 ريال",
      original: "299 ريال",
      level: "متقدم",
      description:
        "تعلم بناء تطبيقات ويب تفاعلية باستخدام أحدث إصدارات React مع مشاريع عملية حقيقية.",
    },
    {
      id: 2,
      title: "Node.js و Express - تطوير الويب الخلفي",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=80",
      views: 987,
      rating: 4.8,
      students: 723,
      duration: "28 ساعة",
      price: "129 ريال",
      original: "259 ريال",
      level: "متوسط",
      description:
        "أنشئ تطبيقات خادم قوية باستخدام Node.js و Express مع قواعد البيانات والتوثيق.",
    },
    {
      id: 3,
      title: "Tailwind CSS - التصميم الحديث للويب",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=500&q=80",
      views: 856,
      rating: 4.7,
      students: 645,
      duration: "18 ساعة",
      price: "99 ريال",
      original: "199 ريال",
      level: "مبتدئ",
      description:
        "إتقان إطار عمل Tailwind CSS لإنشاء واجهات مستخدم جميلة وسريعة الاستجابة.",
    },
    {
      id: 4,
      title: "JavaScript المتقدم - مفاهيم حديثة",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=500&q=80",
      views: 1345,
      rating: 4.9,
      students: 1123,
      duration: "35 ساعة",
      price: "169 ريال",
      original: "339 ريال",
      level: "متقدم",
      description:
        "تعمق في JavaScript مع ES6+ و patterns متقدمة وبناء تطبيقات معقدة.",
    },
    {
      id: 5,
      title: "Python - تحليل البيانات والتعلم الآلي",
      image:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=500&q=80",
      views: 923,
      rating: 4.8,
      students: 789,
      duration: "40 ساعة",
      price: "179 ريال",
      original: "359 ريال",
      level: "متقدم",
      description:
        "تعلم تحليل البيانات والذكاء الاصطناعي باستخدام Python ومكتباتها المتقدمة.",
    },
    {
      id: 6,
      title: "Flutter - تطوير التطبيقات المتحركة",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
      views: 765,
      rating: 4.6,
      students: 543,
      duration: "30 ساعة",
      price: "139 ريال",
      original: "279 ريال",
      level: "متوسط",
      description: "أنشئ تطبيقات جوال سريعة وجذابة باستخدام Flutter و Dart.",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-red-600 mb-4 border-b border-gray-200 pb-2">
        الدورات المسجّلة
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 border border-gray-200 rounded-xl hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-3 h-40 w-full object-cover"
            />
            <h4 className="font-medium text-gray-800">{course.title}</h4>
            <p className="text-sm text-gray-500 mt-1">مدة الدورة: {course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
