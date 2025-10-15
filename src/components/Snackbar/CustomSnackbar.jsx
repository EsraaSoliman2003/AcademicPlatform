import { useSnackbarStore } from "../../store/snackbarStore";
import styles from "./CustomSnackbar.module.css";

export default function CustomSnackbar() {
  const { open, message, severity, closeSnackbar } = useSnackbarStore();

  if (!open) return null;

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
      <span>{message}</span>
      <button className={styles.closeBtn} onClick={closeSnackbar}>
        &times;
      </button>
    </div>
  );
}
