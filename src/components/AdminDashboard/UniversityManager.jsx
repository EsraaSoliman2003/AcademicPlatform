import React from "react";

export default function UniversityManager() {
  const universities = [
    { id: 1, name: "جامعة القاهرة", courses: 25 },
    { id: 2, name: "جامعة عين شمس", courses: 18 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4 text-red-600">إدارة الجامعات</h2>
      <table className="w-full text-right border-t">
        <thead>
          <tr className="bg-red-50 text-red-600">
            <th className="p-3">#</th>
            <th className="p-3">اسم الجامعة</th>
            <th className="p-3">عدد الكورسات</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((u) => (
            <tr key={u.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{u.id}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.courses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
