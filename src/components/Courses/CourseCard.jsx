import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  const isDiscounted = course.originalPrice > course.price;

  return (
    <div
      onClick={handleClick}
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
        {isDiscounted && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
            خصم {Math.round((1 - course.price / course.originalPrice) * 100)}%
          </div>
        )}
      </div>

      <div className="p-4">
        <h3
          className="font-bold text-lightText dark:text-darkText line-clamp-2 group-hover:text-primary 
                     transition-colors duration-200"
        >
          {course.title}
        </h3>

        <p className="text-grayText dark:text-grayTextDark text-sm mt-2 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center gap-4 mt-3 text-sm text-grayText dark:text-grayTextDark">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            <span>{course.students} طالب</span>
          </div>
          <div>{course.duration}</div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            {isDiscounted ? (
              <>
                <span className="text-lg font-bold text-primary">
                  {course.price} ريال
                </span>
                <span className="text-sm text-grayText dark:text-grayTextDark line-through">
                  {course.originalPrice} ريال
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary">
                {course.price} ريال
              </span>
            )}
          </div>

          <button
            className="bg-primary hover:bg-primaryHover text-white px-4 py-2 rounded-xl 
                           transition-colors duration-200 font-medium text-sm"
          >
            سجل الآن
          </button>
        </div>
      </div>
    </div>
  );
}
