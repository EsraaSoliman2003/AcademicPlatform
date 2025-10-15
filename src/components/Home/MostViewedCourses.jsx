import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CourseCard from "./CourseCard";
import CustomPagination from "./CustomPagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MostViewedCourses() {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const colors = {
    bg: "#f9fafb",
    text: "#1e293b",
    primary: "#10b981",
    gray: "#64748b",
  };

  const courses = [
    {
      id: 1,
      title: "React المتقدم - من الصفر إلى الاحتراف",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=80",
      views: 1245,
      rating: 4.9,
      students: 856,
      duration: "32 ساعة",
      price: "149 ريال",
      original: "299 ريال",
      level: "متقدم",
      description:
        "تعلم بناء تطبيقات ويب تفاعلية باستخدام أحدث إصدارات React مع مشاريع عملية حقيقية.",
    },
    {
      id: 2,
      title: "Node.js و Express - تطوير الويب الخلفي",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=80",
      views: 987,
      rating: 4.8,
      students: 723,
      duration: "28 ساعة",
      price: "129 ريال",
      original: "259 ريال",
      level: "متوسط",
      description:
        "أنشئ تطبيقات خادم قوية باستخدام Node.js و Express مع قواعد البيانات والتوثيق.",
    },
    {
      id: 3,
      title: "Tailwind CSS - التصميم الحديث للويب",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=500&q=80",
      views: 856,
      rating: 4.7,
      students: 645,
      duration: "18 ساعة",
      price: "99 ريال",
      original: "199 ريال",
      level: "مبتدئ",
      description:
        "إتقان إطار عمل Tailwind CSS لإنشاء واجهات مستخدم جميلة وسريعة الاستجابة.",
    },
    {
      id: 4,
      title: "JavaScript المتقدم - مفاهيم حديثة",
      image:
        "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=500&q=80",
      views: 1345,
      rating: 4.9,
      students: 1123,
      duration: "35 ساعة",
      price: "169 ريال",
      original: "339 ريال",
      level: "متقدم",
      description:
        "تعمق في JavaScript مع ES6+ و patterns متقدمة وبناء تطبيقات معقدة.",
    },
    {
      id: 5,
      title: "Python - تحليل البيانات والتعلم الآلي",
      image:
        "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=500&q=80",
      views: 923,
      rating: 4.8,
      students: 789,
      duration: "40 ساعة",
      price: "179 ريال",
      original: "359 ريال",
      level: "متقدم",
      description:
        "تعلم تحليل البيانات والذكاء الاصطناعي باستخدام Python ومكتباتها المتقدمة.",
    },
    {
      id: 6,
      title: "Flutter - تطوير التطبيقات المتحركة",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=80",
      views: 765,
      rating: 4.6,
      students: 543,
      duration: "30 ساعة",
      price: "139 ريال",
      original: "279 ريال",
      level: "متوسط",
      description: "أنشئ تطبيقات جوال سريعة وجذابة باستخدام Flutter و Dart.",
    },
  ];

  const handleBulletClick = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: colors.bg }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${encodeURIComponent(colors.primary)}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            أكثر الكورسات <span style={{ color: colors.primary }}>مشاهدة</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.gray }}
          >
            اكتشف الكورسات التي يفضلها الطلاب حول العالم لتحقيق أهدافهم
            التعليمية
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            className="pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} colors={colors} />
              </SwiperSlide>
            ))}
          </Swiper>

          <CustomPagination
            colors={colors}
            totalSlides={courses.length}
            activeIndex={activeIndex}
            onBulletClick={handleBulletClick}
          />
        </div>
      </div>
    </section>
  );
}
