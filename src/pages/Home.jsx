import { useEffect, useState } from "react";
import HomeMain from "../components/Home/HomeMain";
import CategoriesSection from "../components/Home/CategoriesSection";
import MostViewedCourses from "../components/Home/MostViewedCourses";
import PlatformStats from "../components/Home/PlatformStats";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopCircles = [
    { size: 200, left: 5, top: 10, opacity: 0.25, duration: 36, delay: 3 },
    { size: 150, left: 20, top: 8, opacity: 0.3, duration: 25, delay: 1 },
    { size: 180, left: 40, top: 5, opacity: 0.35, duration: 28, delay: 4 },
    { size: 220, left: 70, top: 12, opacity: 0.3, duration: 32, delay: 6 },
    { size: 170, left: 85, top: 8, opacity: 0.25, duration: 31, delay: 2 },

    { size: 90, left: 10, top: 25, opacity: 0.4, duration: 20, delay: 5 },
    { size: 130, left: 35, top: 25, opacity: 0.3, duration: 26, delay: 2 },
    { size: 100, left: 60, top: 22, opacity: 0.28, duration: 23, delay: 3 },
    { size: 140, left: 78, top: 30, opacity: 0.35, duration: 27, delay: 1 },

    { size: 200, left: 8, top: 50, opacity: 0.28, duration: 34, delay: 4 },
    { size: 180, left: 30, top: 55, opacity: 0.3, duration: 32, delay: 5 },
    { size: 150, left: 55, top: 50, opacity: 0.25, duration: 30, delay: 2 },
    { size: 120, left: 75, top: 52, opacity: 0.3, duration: 29, delay: 1 },
    { size: 100, left: 90, top: 48, opacity: 0.35, duration: 26, delay: 3 },

    { size: 220, left: 5, top: 70, opacity: 0.3, duration: 35, delay: 2 },
    { size: 180, left: 25, top: 72, opacity: 0.25, duration: 33, delay: 5 },
    { size: 150, left: 45, top: 75, opacity: 0.28, duration: 29, delay: 1 },
    { size: 120, left: 70, top: 68, opacity: 0.3, duration: 24, delay: 3 },
    { size: 160, left: 85, top: 65, opacity: 0.26, duration: 27, delay: 4 },

    { size: 90, left: 15, top: 85, opacity: 0.3, duration: 31, delay: 2 },
    { size: 100, left: 35, top: 90, opacity: 0.4, duration: 29, delay: 5 },
    { size: 130, left: 60, top: 88, opacity: 0.32, duration: 28, delay: 3 },
    { size: 110, left: 80, top: 92, opacity: 0.25, duration: 30, delay: 6 },
    { size: 150, left: 50, top: 95, opacity: 0.3, duration: 35, delay: 4 },
  ];

  const mobileCircles = [
    { size: 130, left: 8, top: 4, opacity: 0.32, duration: 32, delay: 2 },
    { size: 110, left: 28, top: 6, opacity: 0.35, duration: 27, delay: 1 },
    { size: 90, left: 55, top: 3, opacity: 0.28, duration: 25, delay: 3 },
    { size: 120, left: 78, top: 7, opacity: 0.3, duration: 30, delay: 4 },

    { size: 100, left: 12, top: 22, opacity: 0.35, duration: 26, delay: 2 },
    { size: 80, left: 35, top: 18, opacity: 0.3, duration: 28, delay: 1 },
    { size: 140, left: 65, top: 25, opacity: 0.25, duration: 33, delay: 5 },
    { size: 100, left: 85, top: 28, opacity: 0.28, duration: 24, delay: 3 },

    { size: 130, left: 8, top: 45, opacity: 0.3, duration: 29, delay: 2 },
    { size: 100, left: 30, top: 48, opacity: 0.27, duration: 27, delay: 4 },
    { size: 110, left: 55, top: 50, opacity: 0.35, duration: 25, delay: 1 },
    { size: 80, left: 80, top: 52, opacity: 0.3, duration: 31, delay: 6 },

    { size: 140, left: 10, top: 70, opacity: 0.32, duration: 33, delay: 5 },
    { size: 100, left: 40, top: 68, opacity: 0.28, duration: 29, delay: 3 },
    { size: 100, left: 20, top: 64, opacity: 0.28, duration: 29, delay: 3 },
    { size: 100, left: 35, top: 63, opacity: 0.28, duration: 29, delay: 3 },
    { size: 120, left: 70, top: 72, opacity: 0.26, duration: 30, delay: 2 },
    { size: 90, left: 88, top: 75, opacity: 0.3, duration: 26, delay: 4 },

    { size: 110, left: 15, top: 88, opacity: 0.35, duration: 34, delay: 3 },
    { size: 90, left: 50, top: 90, opacity: 0.3, duration: 28, delay: 1 },
    { size: 120, left: 80, top: 92, opacity: 0.27, duration: 31, delay: 2 },
    { size: 120, left: 0, top: 97, opacity: 0.27, duration: 31, delay: 2 },
  ];

  const circles = isMobile ? mobileCircles : desktopCircles;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {circles.map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              borderColor: `rgba(16, 185, 129, ${circle.opacity})`,
              backgroundColor: `rgba(16, 185, 129, ${circle.opacity / 2})`,
              animation: `floatSlow ${circle.duration}s ease-in-out infinite`,
              animationDelay: `${circle.delay}s`,
            }}
          />
        ))}
      </div>

      <HomeMain />
      <CategoriesSection />
      <MostViewedCourses />
      <PlatformStats />
    </div>
  );
}
