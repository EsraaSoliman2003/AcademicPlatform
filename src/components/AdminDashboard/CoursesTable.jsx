import React from "react";

export default function CoursesTable() {
  const courses = [
    { id: 1, name: "React للمبتدئين", instructor: "د. أحمد", price: 99, students: 200 },
    { id: 2, name: "Python لتحليل البيانات", instructor: "د. سارة", price: 149, students: 350 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4 text-red-600">إدارة الكورسات</h2>
      <table className="w-full text-right border-t">
        <thead>
          <tr className="bg-red-50 text-red-600">
            <th className="p-3">#</th>
            <th className="p-3">اسم الكورس</th>
            <th className="p-3">المدرب</th>
            <th className="p-3">السعر</th>
            <th className="p-3">الطلاب</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{c.id}</td>
              <td className="p-3">{c.name}</td>
              <td className="p-3">{c.instructor}</td>
              <td className="p-3 text-green-600">${c.price}</td>
              <td className="p-3">{c.students}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
