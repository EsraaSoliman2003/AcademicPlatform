import React, { useState, useMemo } from "react";
import CoursesHeader from "../components/Courses/CoursesHeader";
import CoursesFilter from "../components/Courses/CoursesFilter";
import UniversitySection from "../components/Courses/UniversitySection";
import EmptyState from "../components/Courses/EmptyState";
import Pagination from "../components/Courses/Pagination";
import coursesData from "../data/data.json";

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

  const universitiesData = useMemo(() => {
    const grouped = {};

    coursesData.NewCourses.forEach((course) => {
      if (!grouped[course.university]) {
        grouped[course.university] = {
          id: Object.keys(grouped).length + 1,
          name: course.university,
          logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=100&q=80",
          courses: [],
        };
      }
      grouped[course.university].courses.push(course);
    });

    return Object.values(grouped);
  }, []);

  const filteredUniversities = useMemo(() => {
    return universitiesData
      .map((university) => ({
        ...university,
        courses: university.courses.filter((course) => {
          const matchesUniversity =
            filters.university === "all" ||
            university.name === filters.university;
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
            matchesLevel &&
            matchesPrice &&
            matchesRating &&
            matchesSearch
          );
        }),
      }))
      .filter((university) => university.courses.length > 0);
  }, [filters, universitiesData]);

  const allFilteredCourses = filteredUniversities.flatMap((u) => u.courses);
  const totalPages = Math.ceil(allFilteredCourses.length / coursesPerPage);
  const currentCourses = allFilteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

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
          <div className="lg:w-1/4">
            <CoursesFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              universities={universitiesData}
            />
          </div>

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
