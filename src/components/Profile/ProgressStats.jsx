import React from "react";

export default function ProgressStats() {
  const stats = [
    { label: "دورة مكتملة", value: 12 },
    { label: "دورات حالية", value: 4 },
    { label: "اختبارات منجزة", value: 15 },
    { label: "نسبة التقدم الكلية", value: "90%" },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-red-600 mb-4 border-b border-gray-200 pb-2">
        الإحصائيات والتقدم
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 bg-red-50 rounded-lg">
            <h4 className="text-2xl font-bold text-red-600">{stat.value}</h4>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
