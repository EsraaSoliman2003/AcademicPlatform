import HomeMain from "../components/Home/HomeMain";
import CategoriesSection from "../components/Home/CategoriesSection";
import MostViewedCourses from "../components/Home/MostViewedCourses";
import PlatformStats from "../components/Home/PlatformStats";

export default function Home() {
  const circles = [
    { size: 180, left: 10, top: 10, opacity: 0.35, duration: 28, delay: 2 },
    { size: 120, left: 35, top: 5, opacity: 0.25, duration: 32, delay: 5 },
    { size: 90, left: 70, top: 8, opacity: 0.4, duration: 25, delay: 3 },
    { size: 160, left: 50, top: 15, opacity: 0.3, duration: 30, delay: 1 },
    { size: 110, left: 85, top: 5, opacity: 0.45, duration: 26, delay: 4 },

    { size: 200, left: 5, top: 35, opacity: 0.25, duration: 35, delay: 6 },
    { size: 130, left: 25, top: 40, opacity: 0.38, duration: 24, delay: 2 },
    { size: 90, left: 60, top: 42, opacity: 0.32, duration: 27, delay: 1 },
    { size: 150, left: 80, top: 30, opacity: 0.28, duration: 22, delay: 3 },
    { size: 100, left: 45, top: 50, opacity: 0.4, duration: 29, delay: 5 },
    { size: 70, left: 15, top: 55, opacity: 0.3, duration: 31, delay: 2 },
    { size: 95, left: 25, top: 45, opacity: 0.37, duration: 33, delay: 3 },
    { size: 140, left: 75, top: 48, opacity: 0.26, duration: 21, delay: 4 },
    { size: 200, left: 90, top: 25, opacity: 0.3, duration: 36, delay: 2 },
    { size: 200, left: 20, top: 25, opacity: 0.3, duration: 36, delay: 2 },

    { size: 220, left: 10, top: 70, opacity: 0.28, duration: 38, delay: 3 },
    { size: 160, left: 35, top: 75, opacity: 0.33, duration: 29, delay: 5 },
    { size: 120, left: 55, top: 80, opacity: 0.3, duration: 32, delay: 4 },
    { size: 100, left: 75, top: 85, opacity: 0.35, duration: 27, delay: 2 },
    { size: 140, left: 90, top: 70, opacity: 0.25, duration: 34, delay: 6 },
    { size: 90, left: 5, top: 90, opacity: 0.4, duration: 23, delay: 1 },
    { size: 130, left: 25, top: 95, opacity: 0.36, duration: 31, delay: 3 },
    { size: 180, left: 50, top: 92, opacity: 0.3, duration: 26, delay: 5 },
    { size: 110, left: 70, top: 95, opacity: 0.27, duration: 28, delay: 4 },
    { size: 150, left: 85, top: 88, opacity: 0.29, duration: 33, delay: 2 },
  ];

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
