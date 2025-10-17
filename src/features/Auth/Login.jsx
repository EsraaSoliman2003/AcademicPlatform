import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthInput from "../../components/Auth/AuthInput";
import AuthActions from "../../components/Auth/AuthActions";
import "./Auth.css";

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
    <AuthContainer title="تسجيل الدخول">
      <form onSubmit={handleSubmit} dir="rtl" className="space-y-8">
        <AuthInput
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          iconPath="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />

        <AuthInput
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconPath="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />

        <div className="flex items-center justify-between text-sm text-gray-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-primary w-4 h-4 cursor-pointer"
            />
            <span>تذكرني</span>
          </label>
          <a
            href="/register"
            className="text-primary hover:text-primaryHover transition"
          >
            نسيت كلمة المرور؟
          </a>
        </div>

        <AuthActions
          buttonText="تسجيل الدخول"
          bottomText="ليس لديك حساب؟"
          bottomLinkText="سجل الآن"
          bottomLinkHref="/register"
        />
      </form>
    </AuthContainer>
  );
}
