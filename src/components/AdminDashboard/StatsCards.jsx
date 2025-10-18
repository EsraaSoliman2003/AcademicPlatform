import React from "react";
import { Users, BookOpen, University, DollarSign } from "lucide-react";

export default function StatsCards() {
  const stats = [
    { title: "عدد المستخدمين", value: "1,245", icon: <Users />, color: "bg-red-100 text-red-600" },
    { title: "عدد الكورسات", value: "85", icon: <BookOpen />, color: "bg-red-100 text-red-600" },
    { title: "عدد الجامعات", value: "12", icon: <University />, color: "bg-red-100 text-red-600" },
    { title: "الإيرادات", value: "$12,430", icon: <DollarSign />, color: "bg-red-100 text-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center justify-between">
          <div>
            <h4 className="text-gray-500 text-sm">{stat.title}</h4>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
          <div className={`p-3 rounded-full ${stat.color}`}>{stat.icon}</div>
        </div>
      ))}
    </div>
  );
}
