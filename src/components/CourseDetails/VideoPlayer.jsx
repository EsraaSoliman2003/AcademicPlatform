import React from "react";

export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="w-full bg-black rounded-2xl overflow-hidden shadow-md">
      <video
        src={videoUrl}
        controls
        className="w-full h-[400px] object-cover"
      />
    </div>
  );
}
