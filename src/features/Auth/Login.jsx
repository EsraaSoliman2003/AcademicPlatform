import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t, i18n } = useTranslation();
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
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="flex items-center justify-center bg-lightBg dark:bg-darkBg transition-colors duration-navbar"
    >
      <form
        className="flex flex-col gap-4 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-80 transition-all duration-navbar"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-primary dark:text-primaryHover text-center mb-2">
          {t("login")}
        </h2>

        <input
          type="email"
          placeholder={t("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded dark:bg-transparent"
        />
        <input
          type="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border rounded dark:bg-transparent"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primaryHover text-white rounded-lg py-2 mt-2"
        >
          {t("login")}
        </button>
      </form>
    </div>
  );
}
