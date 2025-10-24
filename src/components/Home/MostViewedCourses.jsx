import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CourseCard from "../common/CourseCard";
import CustomPagination from "./CustomPagination";
import coursesData from "../../data/data.json";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MostViewedCourses() {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const colors = {
    text: "#1e293b",
    primary: "#10b981",
    gray: "#64748b",
  };

  const handleBulletClick = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            أكثر الكورسات{" "}
            <span style={{ color: colors.primary }}>مشاهدة</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.gray }}
          >
            اكتشف الكورسات التي يفضلها الطلاب حول العالم لتحقيق أهدافهم
            التعليمية
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="pb-12"
        >
          {coursesData.NewCourses.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard
                course={course}
                colors={colors}
                onClick={() => navigate(`/courses/info/${course.id}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <CustomPagination
          colors={colors}
          totalSlides={5}
          activeIndex={activeIndex}
          onBulletClick={handleBulletClick}
        />
      </div>
    </section>
  );
}
