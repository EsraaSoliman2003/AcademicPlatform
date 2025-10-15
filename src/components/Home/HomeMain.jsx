import libraryBg from "../../assets/library.jpg";
import personImg from "../../assets/person.png";
import styles from "./HomeMain.module.css";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${libraryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay dark */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Section */}
      <main className="relative flex flex-wrap justify-between items-center w-full max-w-[1200px] h-full px-6 z-10">
        <div className={`flex-1 relative h-full hidden xl:block ${styles.animateSlideUp}`}>
          <img
            src={personImg}
            alt="hero"
            className="absolute left-0 bottom-0 w-[550px] rounded-lg shadow-2xl"
          />
        </div>

        <div
          className={`flex-1 text-center xl:text-right text-white z-10 w-full xl:w-auto ${styles.animateSlideInRight}`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            مرحبا بكم في منصتنا
          </h1>

          <p className="text-white/80 mb-6 max-w-md md:max-w-lg mx-auto xl:mx-0 text-base md:text-lg leading-relaxed">
            نقدم لك أفضل المنصات التعليمية لتطوير مهاراتك والوصول لأقصى
            إمكانياتك. اكتشف الدورات، المشاريع، والموارد التي تساعدك على التعلم
            بشكل عملي واحترافي.
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primaryHover transition-all w-fit mx-auto xl:mx-0">
            ابدأ الآن
          </button>
        </div>
      </main>
    </div>
  );
}
