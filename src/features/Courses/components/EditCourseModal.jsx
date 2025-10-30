import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export default function EditCourseModal({ open, onClose, course, onSave }) {
  const [formData, setFormData] = useState({
    title: course.title,
    description: course.description,
    image: course.image,
    videos: course.videos || [],
    pdfs: course.pdfs || [],
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

  const handlePdfChange = (index, field, value) => {
    const updatedPdfs = [...formData.pdfs];
    updatedPdfs[index][field] = value;
    setFormData({ ...formData, pdfs: updatedPdfs });
  };

  const handleAddPdf = () => {
    const newPdf = { id: Date.now(), title: "", url: "" };
    setFormData({ ...formData, pdfs: [...formData.pdfs, newPdf] });
  };

  const handleDeletePdf = (index) => {
    const updatedPdfs = formData.pdfs.filter((_, i) => i !== index);
    setFormData({ ...formData, pdfs: updatedPdfs });
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
            className="border border-gray-300 rounded-lg p-2"
          />

          <label className="font-semibold text-gray-700">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* 🎥 Video List */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800 text-lg">Videos</h3>
            <button
              onClick={handleAddVideo}
              className="flex items-center gap-1 text-sm bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            >
              <Plus size={16} /> Add Video
            </button>
          </div>

          {formData.videos.map((video, index) => (
            <div
              key={video.id}
              className="border rounded-lg p-3 mb-2 space-y-2"
            >
              <input
                type="text"
                value={video.title}
                onChange={(e) =>
                  handleVideoChange(index, "title", e.target.value)
                }
                placeholder="Video Title"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                value={video.url}
                onChange={(e) =>
                  handleVideoChange(index, "url", e.target.value)
                }
                placeholder="Video URL"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <button
                onClick={() => handleDeleteVideo(index)}
                className="flex items-center gap-1 text-red-500 text-sm mt-1"
              >
                <Trash2 size={16} /> Remove Video
              </button>
            </div>
          ))}
        </div>

        {/* 📄 PDF List */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800 text-lg">PDFs</h3>
            <button
              onClick={handleAddPdf}
              className="flex items-center gap-1 text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
            >
              <Plus size={16} /> Add PDF
            </button>
          </div>

          {formData.pdfs.map((pdf, index) => (
            <div key={pdf.id} className="border rounded-lg p-3 mb-2 space-y-2">
              <input
                type="text"
                value={pdf.title}
                onChange={(e) =>
                  handlePdfChange(index, "title", e.target.value)
                }
                placeholder="PDF Title"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <input
                type="text"
                value={pdf.url}
                onChange={(e) => handlePdfChange(index, "url", e.target.value)}
                placeholder="PDF URL"
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
              <button
                onClick={() => handleDeletePdf(index)}
                className="flex items-center gap-1 text-red-500 text-sm mt-1"
              >
                <Trash2 size={16} /> Remove PDF
              </button>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
