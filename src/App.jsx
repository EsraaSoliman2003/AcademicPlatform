import { useLocation } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import MainLayout from "./layouts/MainLayout";

function App() {
  const location = useLocation();
  const noLayoutRoutes = ["/login", "/register"];
  const isNoLayout = noLayoutRoutes.includes(location.pathname);

  return isNoLayout ? (
    <AppRouter />
  ) : (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}

export default App;
