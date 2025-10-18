import React, { useState, useMemo } from "react";
import CoursesHeader from "../components/Courses/CoursesHeader";
import CoursesFilter from "../components/Courses/CoursesFilter";
import UniversitySection from "../components/Courses/UniversitySection";
import EmptyState from "../components/Courses/EmptyState";
import Pagination from "../components/Courses/Pagination";

export default function Courses() {
  const [filters, setFilters] = useState({
    university: "all",
    category: "all",
    level: "all",
    price: "all",
    rating: "all",
    search: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // ✅ لفينا البيانات داخل useMemo عشان تثبت بين الريندرات
  const universitiesData = useMemo(
    () => [
      {
        id: 1,
        name: "جامعة القاهرة",
        logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=100&q=80",
        courses: [
          {
            id: 1,
            title: "React المتقدم - من الصفر إلى الاحتراف",
            image:
              "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=500&q=80",
            category: "برمجة",
            level: "متقدم",
            price: 149,
            originalPrice: 299,
            rating: 4.9,
            students: 856,
            duration: "32 ساعة",
            instructor: "د. أحمد محمد",
            description:
              "تعلم بناء تطبيقات ويب تفاعلية باستخدام أحدث إصدارات React",
          },
          {
            id: 2,
            title: "Node.js و Express - تطوير الويب الخلفي",
            image:
              "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=80",
            category: "برمجة",
            level: "متوسط",
            price: 129,
            originalPrice: 259,
            rating: 4.8,
            students: 723,
            duration: "28 ساعة",
            instructor: "د. محمد علي",
            description: "أنشئ تطبيقات خادم قوية باستخدام Node.js و Express",
          },
        ],
      },
      {
        id: 2,
        name: "جامعة عين شمس",
        logo: "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=100&q=80",
        courses: [
          {
            id: 3,
            title: "Python - تحليل البيانات والتعلم الآلي",
            image:
              "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=500&q=80",
            category: "علم البيانات",
            level: "متقدم",
            price: 179,
            originalPrice: 359,
            rating: 4.8,
            students: 789,
            duration: "40 ساعة",
            instructor: "د. سارة أحمد",
            description:
              "تعلم تحليل البيانات والذكاء الاصطناعي باستخدام Python",
          },
          {
            id: 4,
            title: "إدارة المشاريع الاحترافية",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
            category: "إدارة",
            level: "متوسط",
            price: 99,
            originalPrice: 199,
            rating: 4.7,
            students: 456,
            duration: "24 ساعة",
            instructor: "د. خالد إبراهيم",
            description: "إتقان مهارات إدارة المشاريع باستخدام منهجيات Agile",
          },
        ],
      },
      {
        id: 3,
        name: "جامعة الإسكندرية",
        logo: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80",
        courses: [
          {
            id: 5,
            title: "التصميم الجرافيكي باستخدام Adobe",
            image:
              "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80",
            category: "تصميم",
            level: "مبتدئ",
            price: 89,
            originalPrice: 179,
            rating: 4.6,
            students: 345,
            duration: "20 ساعة",
            instructor: "د. منى سعيد",
            description: "تعلم أساسيات التصميم الجرافيكي باستخدام أدوبي",
          },
        ],
      },
    ],
    []
  );

  // 🧠 دالة التصفية
  const filteredUniversities = useMemo(() => {
    return universitiesData
      .map((university) => ({
        ...university,
        courses: university.courses.filter((course) => {
          const matchesUniversity =
            filters.university === "all" ||
            university.id.toString() === filters.university;
          const matchesCategory =
            filters.category === "all" || course.category === filters.category;
          const matchesLevel =
            filters.level === "all" || course.level === filters.level;
          const matchesPrice =
            filters.price === "all" ||
            (filters.price === "free" ? course.price === 0 : course.price > 0);
          const matchesRating =
            filters.rating === "all" ||
            course.rating >= parseFloat(filters.rating);
          const matchesSearch =
            filters.search === "" ||
            course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            course.description
              .toLowerCase()
              .includes(filters.search.toLowerCase());

          return (
            matchesUniversity &&
            matchesCategory &&
            matchesLevel &&
            matchesPrice &&
            matchesRating &&
            matchesSearch
          );
        }),
      }))
      .filter((university) => university.courses.length > 0);
  }, [filters, universitiesData]);

  // 🧮 حساب الكورسات للترقيم
  const allFilteredCourses = filteredUniversities.flatMap((u) => u.courses);
  const totalPages = Math.ceil(allFilteredCourses.length / coursesPerPage);
  const currentCourses = allFilteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  // 🧭 دوال التحكم
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
  };

  const handleSearch = (searchTerm) => {
    setFilters((prev) => ({ ...prev, search: searchTerm }));
    setCurrentPage(1);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-lightBg dark:bg-darkBg py-8 px-4 md:px-8 lg:px-20 mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <CoursesHeader
          onSearch={handleSearch}
          totalCourses={allFilteredCourses.length}
        />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* 🧩 القائمة الجانبية للفلاتر */}
          <div className="lg:w-1/4">
            <CoursesFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              universities={universitiesData}
            />
          </div>

          {/* 📚 المحتوى الرئيسي */}
          <div className="lg:w-3/4">
            {filteredUniversities.length > 0 ? (
              <>
                {filteredUniversities.map((university) => (
                  <UniversitySection
                    key={university.id}
                    university={university}
                    courses={currentCourses.filter((course) =>
                      university.courses.some((c) => c.id === course.id)
                    )}
                  />
                ))}

                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
