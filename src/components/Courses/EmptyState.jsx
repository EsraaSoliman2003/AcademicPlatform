import React from "react";

export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-lightText  mb-4">
          لا توجد نتائج
        </h3>
        
        <p className="text-grayText  mb-8">
          لم نتمكن من العثور على أي كورسات تطابق معايير البحث الخاصة بك. 
          حاول تعديل الفلاتر أو مصطلحات البحث.
        </p>
        
        <button
          onClick={() => window.location.reload()}
          className="bg-primary hover:bg-primaryHover text-white px-8 py-3 rounded-2xl 
                   transition-colors duration-200 font-medium"
        >
          عرض جميع الكورسات
        </button>
      </div>
    </div>
  );
}