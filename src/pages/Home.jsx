import HomeMain from "../components/Home/HomeMain";
import CategoriesSection from "../components/Home/CategoriesSection";
import MostViewedCourses from "../components/Home/MostViewedCourses";
import PlatformStats from "../components/Home/PlatformStats";

export default function Home() {
  return (
    <>
      <HomeMain />
      <CategoriesSection />
      <MostViewedCourses />
      <PlatformStats />
    </>
  );
}
