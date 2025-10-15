import { create } from "zustand";

export const useSnackbarStore = create((set) => ({
  open: false,
  message: "",
  severity: "success", // success, error, info
  showSnackbar: (msg, sev = "success") =>
    set({ open: true, message: msg, severity: sev }),
  closeSnackbar: () => set({ open: false }),
}));
