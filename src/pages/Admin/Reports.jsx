import React from "react";
import { BarChart3 } from "lucide-react";

export default function Reports() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-20">
      <div className="flex items-center gap-2 mb-4 text-red-600">
        <BarChart3 size={22} />
        <h1 className="text-2xl font-bold">التقارير والإحصائيات</h1>
      </div>
      <p className="text-gray-600">سيتم عرض المخططات والإحصائيات هنا قريبًا 📊</p>
    </div>
  );
}
