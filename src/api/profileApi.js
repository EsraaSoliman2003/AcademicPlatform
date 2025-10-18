// ✅ src/api/profileApi.js

import axios from "axios";

// العنوان الأساسي للـ API (غيريه لما يجهز السيرفر)
const BASE_URL = `${import.meta.env.VITE_API_URL}/profile`;

export const profileApi = {
  getProfile: `${BASE_URL}/get`,           // GET
  updateProfile: `${BASE_URL}/update`,     // PUT
  uploadImage: `${BASE_URL}/upload-image`, // POST
  changePassword: `${BASE_URL}/password`,  // PUT
};

// 🧩 دوال جاهزة للتعامل مع الـ API
export const fetchProfile = async (token) => {
  try {
    const res = await axios.get(profileApi.getProfile, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    throw error;
  }
};

export const updateProfile = async (data, token) => {
  try {
    const res = await axios.put(profileApi.updateProfile, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error updating profile:", error);
    throw error;
  }
};

export const uploadProfileImage = async (file, token) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(profileApi.uploadImage, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error uploading image:", error);
    throw error;
  }
};

export const changePassword = async (data, token) => {
  try {
    const res = await axios.put(profileApi.changePassword, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.error("❌ Error changing password:", error);
    throw error;
  }
};
