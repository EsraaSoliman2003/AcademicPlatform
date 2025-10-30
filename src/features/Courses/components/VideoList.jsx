import React from "react";

export default function VideoList({ videos, onSelect }) {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Course Videos
      </h3>
      <ul className="space-y-3">
        {videos.map((video) => (
          <li
            key={video.id}
            onClick={() => onSelect(video)}
            className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition"
          >
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
