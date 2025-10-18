import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import libraryBg from "../../assets/imgs/library.jpg";
import personImg from "../../assets/imgs/person.png";
import styles from "../../assets/animation/animation.module.css";
import { Search } from "lucide-react";

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    "نقدم لك أفضل المنصات التعليمية لتطوير مهاراتك والوصول لأقصى إمكانياتك. اكتشف الدورات، المشاريع، والموارد التي تساعدك على التعلم بشكل عملي واحترافي.",
    "انطلق في رحلة التعلم مع أحدث التقنيات وأساليب التعليم الحديثة. طور نفسك في مجالات البرمجة، التصميم، الذكاء الاصطناعي وغيرها.",
    "انضم إلى مجتمعنا التعليمي المتطور وكن جزءاً من شبكة من المحترفين. احصل على شهادات معتمدة تعزز مسيرتك المهنية.",
    "تعلم بالسرعة التي تناسبك مع مرونة كاملة في الوصول للمحتوى. مواد تعليمية شاملة تناسب جميع المستويات.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${libraryBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
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
            مرحباً بكم في منصتنا
          </h1>

          <div className="h-24 mb-6 flex items-center justify-center xl:justify-end">
            <p
              className={`
                text-white/80 max-w-md md:max-w-lg mx-auto xl:mx-0 text-base md:text-lg leading-relaxed
                transition-all duration-500 ease-in-out
                ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"}
              `}
            >
              {texts[currentTextIndex]}
            </p>
          </div>

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

      {/* 🌊 Waves exactly like Elzero website */}
      <svg
        className={`absolute bottom-0 left-0 w-full h-28 z-10`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={styles.parallax}>
          <use href="#gentle-wave" x="48" y="0" fill="rgba(226,244,238,0.7)" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(226,244,2385,0.5)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(226,244,2385,0.3)" />
          <use href="#gentle-wave" x="48" y="7" fill="#f9fafb" />
        </g>
      </svg>
    </div>
  );
}
