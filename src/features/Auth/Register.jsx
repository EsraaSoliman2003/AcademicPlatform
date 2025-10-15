import { useState } from "react";
import { useAuthStore } from "./store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t, i18n } = useTranslation();
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
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="flex items-center justify-center bg-lightBg dark:bg-darkBg transition-colors duration-navbar"
    >
      <form
        className="flex flex-col gap-4 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-80 transition-all duration-navbar"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-primary dark:text-primaryHover text-center mb-2">
          {t("register")}
        </h2>

        <input
          type="text"
          name="name"
          placeholder={t("name")}
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded dark:bg-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded dark:bg-transparent"
        />
        <input
          type="password"
          name="password"
          placeholder={t("password")}
          value={formData.password}
          onChange={handleChange}
          required
          className="p-2 border rounded dark:bg-transparent"
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder={t("confirmPassword")}
          value={formData.password_confirmation}
          onChange={handleChange}
          required
          className="p-2 border rounded dark:bg-transparent"
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primaryHover text-white rounded-lg py-2 mt-2"
        >
          {t("register")}
        </button>

        <p className="text-sm text-center mt-2 text-gray-500">
          {t("alreadyHaveAccount")}{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-primary cursor-pointer hover:underline"
          >
            {t("login")}
          </span>
        </p>
      </form>
    </div>
  );
}
