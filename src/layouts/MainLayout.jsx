import Navbar from "./Navbar/Navbar";
import CustomSnackbar from "../components/Snackbar/CustomSnackbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-lightBg transition-colors duration-navbar flex-row-reverse">
      <Navbar />
      <main className="flex-1 min-h-[calc(100vh-72px)] items-center justify-center">
        {children}
      </main>

      {/* Global Snackbar */}
      <CustomSnackbar />
    </div>
  );
}
