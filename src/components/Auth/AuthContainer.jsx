import libraryBg from "../../assets/library.jpg";

export default function AuthContainer({ title, subtitle, children }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lightBg to-gray-100 overflow-hidden relative"
      style={{
        backgroundImage: `url(${libraryBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary opacity-10 rounded-full animate-bounce delay-700"></div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 bg-white/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-200 text-sm">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
