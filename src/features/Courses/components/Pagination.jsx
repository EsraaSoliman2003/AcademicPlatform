import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pages.push("...");
    }
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300  rounded-xl 
                 disabled:opacity-50 disabled:cursor-not-allowed
                 hover:bg-gray-50 transition-colors duration-200"
      >
        السابق
      </button>

      <div className="flex gap-2">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`px-4 py-2 rounded-xl transition-colors duration-200 ${
              currentPage === page
                ? "bg-primary text-white"
                : "border border-gray-300  hover:bg-gray-50 "
            } ${typeof page !== "number" ? "cursor-default" : ""}`}
            disabled={typeof page !== "number"}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300  rounded-xl 
                 disabled:opacity-50 disabled:cursor-not-allowed
                 hover:bg-gray-50 transition-colors duration-200"
      >
        التالي
      </button>
    </div>
  );
}