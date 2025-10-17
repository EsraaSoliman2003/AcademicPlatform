import { Mail, Lock, User } from "lucide-react";

export default function AuthInput({
  type,
  placeholder,
  value,
  onChange,
  name,
}) {
  // اختيار الأيقونة بناءً على نوع الإدخال
  const getIcon = () => {
    switch (type) {
      case "email":
        return (
          <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-primary group-hover:text-primary transition-colors duration-navbar" />
        );
      case "password":
        return (
          <Lock className="w-5 h-5 text-gray-400 group-focus-within:text-primary group-hover:text-primary transition-colors duration-navbar" />
        );
      case "text":
        return (
          <User className="w-5 h-5 text-gray-400 group-focus-within:text-primary group-hover:text-primary transition-colors duration-navbar" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="group relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border-b text-white hover:border-primary focus:border-primary focus:outline-none focus-visible:outline-none pb-2 transition-all duration-navbar ease-in-out placeholder-gray-400"
        style={{ transition: "border-color 0.3s ease, color 0.3s ease" }}
      />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        {getIcon()}
      </div>
    </div>
  );
}
