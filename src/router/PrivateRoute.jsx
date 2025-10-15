import { useAuthStore } from "../features/Auth/store";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
