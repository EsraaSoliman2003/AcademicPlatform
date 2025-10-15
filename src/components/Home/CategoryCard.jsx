import React from "react";

export default function CategoryCard({
  icon,
  title,
  description,
  buttonText,
  gradient,
  stats,
  onClick,
}) {
  return (
    <div
      className={`relative group bg-white/90 rounded-[2rem] shadow-xl border border-transparent hover:border-primary/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:rotate-1`}
    >
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br ${gradient} opacity-10 skew-x-12`}
      ></div>

      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} rounded-bl-[3rem] opacity-20`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr ${gradient} rounded-tl-[3rem] opacity-20`}
      ></div>

      <div className="relative z-10 p-8 flex flex-col justify-between h-full text-center">
        <div
          className={`mx-auto mb-6 p-5 rounded-2xl bg-gradient-to-r ${gradient} text-white shadow-lg w-fit`}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-extrabold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        <button
          onClick={onClick}
          className={`relative px-6 py-3 rounded-full font-semibold bg-gradient-to-r ${gradient} text-white shadow-md hover:shadow-lg transition-all duration-300`}
        >
          {buttonText}
        </button>

        <div className="absolute top-4 right-4 bg-white/80 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {stats}
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-3xl transition duration-700`}
      ></div>
    </div>
  );
}
