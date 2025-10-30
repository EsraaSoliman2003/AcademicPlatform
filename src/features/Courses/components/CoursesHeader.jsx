import React, { useState } from "react";

export default function CoursesHeader({ onSearch, totalCourses }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bg-white   rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-lightText dark:text-darkText">
            الكورسات المتاحة
          </h1>
          <p className="text-grayText dark:text-grayTextDark mt-2">
            اكتشف {totalCourses} كورس في مختلف التخصصات
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن كورس، موضوع، أو مدرس..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-2xl 
                       focus:ring-2 focus:ring-primary focus:border-transparent
                       dark:bg-gray-700 dark:text-white transition-colors duration-200"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary 
                       transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}