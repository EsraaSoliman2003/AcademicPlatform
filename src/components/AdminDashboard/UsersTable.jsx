import React from "react";

export default function UsersTable() {
  const users = [
    { id: 1, name: "إسراء سليمان", email: "esraa@example.com", role: "طالب" },
    { id: 2, name: "أحمد علي", email: "ahmed@example.com", role: "مدرب" },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4 text-red-600">إدارة المستخدمين</h2>
      <table className="w-full text-right border-t">
        <thead>
          <tr className="bg-red-50 text-red-600">
            <th className="p-3">#</th>
            <th className="p-3">الاسم</th>
            <th className="p-3">البريد الإلكتروني</th>
            <th className="p-3">الدور</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{u.id}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
