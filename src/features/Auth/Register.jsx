import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthInput from "../../components/Auth/AuthInput";
import AuthActions from "../../components/Auth/AuthActions";
import "./Auth.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(form);
    if (success) navigate("/profile");
  };

  return (
    <AuthContainer title="إنشاء حساب جديد">
      <form onSubmit={handleSubmit} dir="rtl" className="space-y-8">
        <AuthInput
          type="text"
          placeholder="الاسم الكامل"
          value={form.name}
          onChange={handleChange}
          iconPath="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
          name="name"
        />
        <AuthInput
          type="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={handleChange}
          iconPath="M16 12a4 4 0 10-8 0 4 4 0 008 0z"
          name="email"
        />
        <AuthInput
          type="password"
          placeholder="كلمة المرور"
          value={form.password}
          onChange={handleChange}
          iconPath="M12 15v2m-6 4h12..."
          name="password"
        />

        <AuthActions
          buttonText="إنشاء الحساب"
          bottomText="لديك حساب بالفعل؟"
          bottomLinkText="تسجيل الدخول"
          bottomLinkHref="/login"
        />
      </form>
    </AuthContainer>
  );
}
