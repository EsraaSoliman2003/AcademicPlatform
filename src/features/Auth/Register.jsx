import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(formData);
    if (res) navigate("/login");
  };

  return (
    <div
      dir="rtl"
      className="flex items-center justify-center bg-lightBg transition-colors duration-navbar"
    >
      <form
        className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow-lg w-80 transition-all duration-navbar"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-primary text-center mb-2">
          التسجيل
        </h2>

        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="كلمة السر"
          value={formData.password}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="تأكيد كلمة السر"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primaryHover text-white rounded-lg py-2 mt-2"
        >
          التسجيل
        </button>

        <p className="text-sm text-center mt-2 text-gray-500">
          لديك حساب بالفعل؟
          <span
            onClick={() => navigate("/login")}
            className="text-primary cursor-pointer hover:underline"
          >
            تسجيل الدخول
          </span>
        </p>
      </form>
    </div>
  );
}
