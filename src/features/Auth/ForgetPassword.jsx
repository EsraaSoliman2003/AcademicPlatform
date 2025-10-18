import { useState } from "react";
import { useAuthStore } from "./store";
import AuthContainer from "../../components/Auth/AuthContainer";
import AuthInput from "../../components/Auth/AuthInput";
import AuthActions from "../../components/Auth/AuthActions";
import "./Auth.css";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const forgetPassword = useAuthStore((state) => state.forgetPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    await forgetPassword(email);
  };

  return (
    <AuthContainer title="استعادة كلمة المرور">
      <form onSubmit={handleSubmit} dir="rtl" className="space-y-8">
        <AuthInput
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          iconPath="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />

        <AuthActions
          buttonText="إرسال رابط الاستعادة"
          bottomText="تذكرت كلمة المرور؟"
          bottomLinkText="تسجيل الدخول"
          bottomLinkHref="/login"
        />
      </form>
    </AuthContainer>
  );
}
