import { Link } from "react-router-dom";
import libraryBg from "../../assets/library.jpg";
import personImg from "../../assets/person.png";
import styles from "./HomeMain.module.css";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${libraryBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay dark */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main Section */}
      <main className="relative flex flex-wrap justify-between items-center w-full max-w-[1200px] h-full px-6 z-10">
        <div
          className={`flex-1 relative h-full hidden xl:block ${styles.animateSlideUp}`}
        >
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

          <div
            dir="rtl"
            className="relative max-w-2xl mx-auto xl:mx-0 mb-8 group"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <input
                type="text"
                placeholder="ابحث عن دورات، مشاريع، موارد..."
                className="w-full px-6 text-white bg-transparent focus:outline-none placeholder:text-white/60 rtl:text-right text-lg"
              />
              <Link className="bg-gradient-to-r from-primary to-primaryHover hover:from-primaryHover hover:to-primary text-darkText hover:text-darkText px-8 py-4 transition-all duration-300 flex items-center gap-2 hover:shadow-lg rounded-2xl">
                <Search className="w-5 h-5" />
                <span>بحث</span>
              </Link>
            </div>

            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primaryHover/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
          </div>

          <Link className="bg-primary text-darkText hover:text-darkText px-6 py-3 rounded-lg hover:bg-primaryHover transition-all w-fit mx-auto xl:mx-0">
            ابدأ الآن
          </Link>
        </div>
      </main>
    </div>
  );
}
