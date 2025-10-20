import { useEffect } from "react";
import { useSnackbarStore } from "../../store/snackbarStore";
import styles from "./CustomSnackbar.module.css";
import { CheckCircle, XCircle, Info } from "lucide-react";

export default function CustomSnackbar() {
  const { open, message, severity, closeSnackbar } = useSnackbarStore();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => closeSnackbar(), 4000);
      return () => clearTimeout(timer);
    }
  }, [open, closeSnackbar]);

  if (!open) return null;

  const icon =
    severity === "success" ? (
      <CheckCircle size={18} />
    ) : severity === "error" ? (
      <XCircle size={18} />
    ) : (
      <Info size={18} />
    );

  return (
    <div
      className={`${styles.snackbar} ${
        severity === "success"
          ? styles.success
          : severity === "error"
          ? styles.error
          : styles.info
      }`}
    >
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.message}>{message}</span>
      </div>
      <button className={styles.closeBtn} onClick={closeSnackbar}>
        &times;
      </button>
    </div>
  );
}