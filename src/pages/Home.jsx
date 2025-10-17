import HomeMain from "../components/Home/HomeMain";
import CategoriesSection from "../components/Home/CategoriesSection";
import MostViewedCourses from "../components/Home/MostViewedCourses";
import PlatformStats from "../components/Home/PlatformStats";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 200 + 50;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const opacity = 0.2 + Math.random() * 0.4;
          return (
            <div
              key={i}
              className="absolute rounded-full border-2"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                borderColor: `rgba(16, 185, 129, ${opacity})`,
                backgroundColor: `rgba(16, 185, 129, ${opacity / 2})`,
                animation: `floatSlow ${20 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          );
        })}
      </div>

      <HomeMain />
      <CategoriesSection />
      <MostViewedCourses />
      <PlatformStats />
    </div>
  );
}
