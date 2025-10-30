import React from "react";

export default function PdfList({ pdfs = [], onSelect }) {
  return (
    <div className="mt-4 bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Course PDFs</h3>
      <ul className="space-y-2">
        {pdfs.map((pdf) => (
          <li
            key={pdf.id}
            className="cursor-pointer p-2 rounded hover:bg-blue-50 transition"
            onClick={() => onSelect(pdf)}
          >
            📘 {pdf.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
