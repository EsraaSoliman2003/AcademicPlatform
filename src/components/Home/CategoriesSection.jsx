import React from "react";
import CategoryCard from "./CategoryCard";
import { BookOpen, DollarSign, Sparkles } from "lucide-react";

export default function CategoriesSection() {
  const courses = [
    {
      id: 1,
      icon: <BookOpen size={40} />,
      title: "كورسات مجانية",
      description:
        "اكتشف مكتبة ضخمة من الكورسات المجانية التي تناسب جميع المستويات.",
      buttonText: "ابدأ التعلم",
      gradient: "from-emerald-400 to-cyan-500",
      stats: "150+ كورس",
    },
    {
      id: 2,
      icon: <DollarSign size={40} />,
      title: "كورسات مدفوعة",
      description: "تعلم من أفضل المدربين بكورسات احترافية ومحتوى متقدم.",
      buttonText: "تصفح الكورسات",
      gradient: "from-purple-500 to-pink-500",
      stats: "80+ كورس",
    },
    {
      id: 3,
      icon: <Sparkles size={40} />,
      title: "أحدث الكورسات",
      description: "تابع أحدث الإصدارات لتظل على اطلاع دائم بكل جديد.",
      buttonText: "شاهد الآن",
      gradient: "from-amber-400 to-orange-500",
      stats: "25+ جديد",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-lightText mb-6">
            ارفع{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primaryHover">
              مهاراتك{" "}
            </span>
            وطور آفاقك التعليمية
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            انطلق في رحلتك التعليمية مع أفضل الكورسات المجانية والمدفوعة والأحدث
            دائمًا
          </p>
        </div>

        <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CategoryCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
