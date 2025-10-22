import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export default function EditCourseModal({ open, onClose, course, onSave }) {
  const [formData, setFormData] = useState({
    title: course.title,
    description: course.description,
    image: course.image,
    videos: course.videos || [],
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...formData.videos];
    updatedVideos[index][field] = value;
    setFormData({ ...formData, videos: updatedVideos });
  };

  const handleAddVideo = () => {
    const newVideo = { id: Date.now(), title: "", url: "" };
    setFormData({ ...formData, videos: [...formData.videos, newVideo] });
  };

  const handleDeleteVideo = (index) => {
    const updatedVideos = formData.videos.filter((_, i) => i !== index);
    setFormData({ ...formData, videos: updatedVideos });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[95%] max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Edit Course</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={22} />
          </button>
        </div>

        {/* Course Info */}
        <div className="flex flex-col gap-3 mb-6">
          <label className="font-semibold text-gray-700">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Course Title"
            className="border border-gray-300 rounded-lg p-2"
          />

          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Course Description"
            className="border border-gray-300 rounded-lg p-2 h-24 resize-none"
          />

          <label className="font-semibold text-gray-700">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Videos Section */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Course Videos
            </h3>
            <button
              onClick={handleAddVideo}
              className="flex items-center gap-1 text-primary font-medium hover:underline"
            >
              <Plus size={18} /> Add Video
            </button>
          </div>

          {formData.videos.length === 0 ? (
            <p className="text-gray-500 italic">No videos yet.</p>
          ) : (
            formData.videos.map((video, index) => (
              <div
                key={video.id}
                className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">
                    Video {index + 1}
                  </span>
                  <button
                    onClick={() => handleDeleteVideo(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <input
                  value={video.title}
                  onChange={(e) =>
                    handleVideoChange(index, "title", e.target.value)
                  }
                  placeholder="Video Title"
                  className="w-full border border-gray-300 rounded-lg p-2 mb-2"
                />
                <input
                  value={video.url}
                  onChange={(e) =>
                    handleVideoChange(index, "url", e.target.value)
                  }
                  placeholder="Video URL"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            ))
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
