import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbarStore } from "../store/snackbarStore";

export default function Payment() {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbarStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!formData.name || !formData.email || !formData.cardNumber) {
    //   showSnackbar("⚠️ الرجاء ملء جميع الحقول المطلوبة", "error");
    //   return;
    // }

    showSnackbar("تم الدفع بنجاح، تم إضافة الكورس إلى حسابك", "success");
    navigate("/courses");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  ">
      <div className="bg-white  rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-200 ">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 ">
          💳 صفحة الدفع
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              الاسم الكامل
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              رقم البطاقة
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 ">
                تاريخ الانتهاء
              </label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 ">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                maxLength="3"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-300"
          >
            إتمام الدفع
          </button>
        </form>
      </div>
    </div>
  );
}
