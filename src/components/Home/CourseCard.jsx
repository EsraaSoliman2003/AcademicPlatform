import { Eye, Star, Users, Clock } from "lucide-react";

const CourseCard = ({ course, colors }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border relative">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="text-white text-right">
            <h4 className="font-bold text-lg mb-2">ماذا ستتعلم؟</h4>
            <p className="text-sm opacity-90 leading-relaxed">
              {course.description ||
                "مهارات متقدمة في التطوير وإنشاء مشاريع حقيقية"}
            </p>
          </div>
        </div>

        <span
          className="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full text-white z-10"
          style={{ backgroundColor: colors.primary }}
        >
          {course.level}
        </span>

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center gap-1 z-10">
          <Eye size={12} />
          <span>{course.views}</span>
        </div>
      </div>

      <div className="p-4 text-right">
        <h3
          className="font-semibold text-lg mb-3 leading-tight"
          style={{ color: colors.text }}
        >
          {course.title}
        </h3>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>

          <div
            className="flex items-center gap-1 text-sm"
            style={{ color: colors.gray }}
          >
            <Users size={16} />
            <span>{course.students}</span>
          </div>

          <div
            className="flex items-center gap-1 text-sm"
            style={{ color: colors.gray }}
          >
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
        </div>

        <div
          className="flex justify-between items-center pt-4 border-t"
          style={{ borderColor: "#e2e8f0" }}
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg" style={{ color: colors.text }}>
              {course.price}
            </span>
            <span
              className="line-through text-sm"
              style={{ color: colors.gray }}
            >
              {course.original}
            </span>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            style={{
              backgroundColor: colors.primary,
              boxShadow: `0 4px 10px ${colors.primary}40`,
            }}
          >
            <span className="relative z-10">ابدأ الآن</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}20, transparent)`,
          boxShadow: `0 0 60px ${colors.primary}30`,
        }}
      ></div>
    </div>
  );
};

export default CourseCard;
