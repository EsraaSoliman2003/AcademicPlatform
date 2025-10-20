export default function CourseCard({ course, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-darkBg rounded-2xl shadow-lg overflow-hidden border border-gray-200 
                dark:border-gray-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              course.level === "مبتدئ"
                ? "bg-green-100 text-green-800"
                : course.level === "متوسط"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lightText dark:text-darkText line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {course.title}
        </h3>
        <p className="text-grayText dark:text-grayTextDark text-sm mt-2 line-clamp-2">
          {course.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-semibold">
            {course.price === 0 ? "مجاني" : `${course.price} ريال`}
          </span>
          <button className="text-sm bg-primary text-white px-3 py-1 rounded-lg">
            التفاصيل
          </button>
        </div>
      </div>
    </div>
  );
}
