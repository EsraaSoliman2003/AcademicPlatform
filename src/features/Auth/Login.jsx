import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) navigate("/profile");
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
          تسجيل الدخول
        </h2>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="كلمة السر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primaryHover text-white rounded-lg py-2 mt-2"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}
