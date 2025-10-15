import HomeMain from "../components/Home/HomeMain";
import CategoriesSection from "../components/Home/CategoriesSection";
import MostViewedCourses from "../components/Home/MostViewedCourses";

export default function Home() {
  return (
    <>
      <HomeMain />
      <CategoriesSection />
      <MostViewedCourses />
    </>
  );
}
