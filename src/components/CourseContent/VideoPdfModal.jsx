// src/components/CourseContent/VideoPdfModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Upload, Video, FileText } from 'lucide-react';

export default function VideoPdfModal({ 
  open, 
  onClose, 
  type, // 'video' or 'pdf'
  data, // existing data for edit
  onSave 
}) {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    duration: '',
    pages: '',
    order: 1
  });

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || '',
        url: data.url || '',
        duration: data.duration || '',
        pages: data.pages || '',
        order: data.order || 1
      });
    }
  }, [data]);

  const handleSave = () => {
    const saveData = {
      id: data?.id || Date.now(),
      ...formData
    };
    onSave(saveData);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[95%] max-w-md shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {type === 'video' ? (
              <Video className="text-blue-600" size={24} />
            ) : (
              <FileText className="text-green-600" size={24} />
            )}
            <h2 className="text-xl font-bold text-gray-800">
              {data ? 'تعديل' : 'إضافة'} {type === 'video' ? 'فيديو' : 'ملف PDF'}
            </h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              العنوان
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder={`أدخل عنوان ${type === 'video' ? 'الفيديو' : 'الملف'}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              رابط {type === 'video' ? 'الفيديو' : 'الملف'}
            </label>
            <input
              type="text"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="https://example.com/file"
            />
          </div>

          {type === 'video' ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                المدة (دقيقة:ثانية)
              </label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="15:30"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                عدد الصفحات
              </label>
              <input
                type="number"
                value={formData.pages}
                onChange={(e) => setFormData({ ...formData, pages: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-3"
                placeholder="12"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ترتيب العرض
            </label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
              className="w-full border border-gray-300 rounded-lg p-3"
              min="1"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition"
          >
            إلغاء
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}