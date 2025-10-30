import React from "react";

export default function CoursesFilter({ filters, onFilterChange, universities }) {
  const filterOptions = {
    category: [
      { value: "all", label: "جميع التخصصات" },
      { value: "برمجة", label: "برمجة وتطوير" },
      { value: "تصميم", label: "تصميم" },
      { value: "إدارة", label: "إدارة أعمال" },
      { value: "علم البيانات", label: "علم البيانات" },
      { value: "لغات", label: "لغات" }
    ],
    level: [
      { value: "all", label: "جميع المستويات" },
      { value: "مبتدئ", label: "مبتدئ" },
      { value: "متوسط", label: "متوسط" },
      { value: "متقدم", label: "متقدم" }
    ],
    price: [
      { value: "all", label: "جميع الأسعار" },
      { value: "free", label: "مجاني" },
      { value: "paid", label: "مدفوع" }
    ],
    rating: [
      { value: "all", label: "جميع التقييمات" },
      { value: "4.5", label: "⭐ 4.5+ ⭐" },
      { value: "4.0", label: "⭐ 4.0+ ⭐" },
      { value: "3.5", label: "⭐ 3.5+ ⭐" }
    ]
  };

  return (
    <div className="bg-white   rounded-2xl shadow-lg p-6 border border-gray-200  sticky top-4">
      <h3 className="text-lg font-semibold text-lightText  mb-6 pb-2 border-b border-gray-200 ">
        🔍 تصفية النتائج
      </h3>

      <div className="space-y-6">
        {/* فلتر الجامعة */}
        <div>
          <label className="block text-sm font-medium text-lightText  mb-3">
            الجامعة
          </label>
          <select
            value={filters.university}
            onChange={(e) => onFilterChange("university", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  rounded-xl 
                     focus:ring-2 focus:ring-primary focus:border-transparent
                       transition-colors duration-200"
          >
            <option value="all">جميع الجامعات</option>
            {universities.map(uni => (
              <option key={uni.id} value={uni.id}>
                {uni.name}
              </option>
            ))}
          </select>
        </div>

        {/* فلتر التخصص */}
        <div>
          <label className="block text-sm font-medium text-lightText  mb-3">
            التخصص
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  rounded-xl 
                     focus:ring-2 focus:ring-primary focus:border-transparent
                       transition-colors duration-200"
          >
            {filterOptions.category.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* فلتر المستوى */}
        <div>
          <label className="block text-sm font-medium text-lightText  mb-3">
            المستوى
          </label>
          <div className="space-y-2">
            {filterOptions.level.map(option => (
              <label key={option.value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="level"
                  value={option.value}
                  checked={filters.level === option.value}
                  onChange={(e) => onFilterChange("level", e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="mr-2 text-sm text-grayText ">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* فلتر السعر */}
        <div>
          <label className="block text-sm font-medium text-lightText  mb-3">
            السعر
          </label>
          <div className="space-y-2">
            {filterOptions.price.map(option => (
              <label key={option.value} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value={option.value}
                  checked={filters.price === option.value}
                  onChange={(e) => onFilterChange("price", e.target.value)}
                  className="text-primary focus:ring-primary"
                />
                <span className="mr-2 text-sm text-grayText ">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* فلتر التقييم */}
        <div>
          <label className="block text-sm font-medium text-lightText  mb-3">
            التقييم
          </label>
          <select
            value={filters.rating}
            onChange={(e) => onFilterChange("rating", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  rounded-xl 
                     focus:ring-2 focus:ring-primary focus:border-transparent
                       transition-colors duration-200"
          >
            {filterOptions.rating.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* زر إعادة الضبط */}
        <button
          onClick={() => {
            onFilterChange("university", "all");
            onFilterChange("category", "all");
            onFilterChange("level", "all");
            onFilterChange("price", "all");
            onFilterChange("rating", "all");
          }}
          className="w-full py-2 border border-gray-300  text-grayText 
                    rounded-xl hover:bg-gray-50 
                   transition-colors duration-200 font-medium"
        >
          إعادة الضبط
        </button>
      </div>
    </div>
  );
}