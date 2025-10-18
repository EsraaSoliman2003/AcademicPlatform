import { create } from "zustand";
import api from "../../api/axios";
import { useSnackbarStore } from "../../store/snackbarStore";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,

  register: async (formData) => {
    const { showSnackbar } = useSnackbarStore.getState();
    try {
      const res = await api.post("/auth/sign-up", formData);
      showSnackbar("Registered successfully!", "success");
      return res.data;
    } catch (err) {
      console.error(err);
      showSnackbar("Registration failed. Check your data.", "error");
    }
  },

  login: async ({ email, password }) => {
    const { showSnackbar } = useSnackbarStore.getState();
    try {
      const res = await api.post("/auth/sign-in", { email, password });
      const token = res.data.token || res.data.data?.token;

      localStorage.setItem("token", token);
      set({ user: res.data.user || res.data.data?.user, token });

      showSnackbar("Logged in successfully!", "success");
      return true;
    } catch (err) {
      console.error(err);
      showSnackbar("Invalid credentials.", "error");
      return false;
    }
  },

  forgetPassword: async (email) => {
    const { showSnackbar } = useSnackbarStore.getState();
    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await api.post("/password/forget-password", formData, {
        headers: {
          Accept: "application/json",
        },
      });

      showSnackbar("Password reset link sent successfully!", "success");
      return res.data;
    } catch (err) {
      console.error(err);
      showSnackbar("Failed to send reset link. Check the email.", "error");
      return null;
    }
  },

  logout: async () => {
    const { showSnackbar } = useSnackbarStore.getState();
    try {
      await api.post("/auth/sign-out");
      showSnackbar("Logged out successfully!", "success");
    } catch (err) {
      console.log(err);
      console.warn("Logout request failed (maybe token expired).");
      showSnackbar("Logout failed!", "error");
    }
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
