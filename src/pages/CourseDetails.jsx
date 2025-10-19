import React from "react";
import { useParams } from "react-router-dom";
import CourseIntro from "../components/CourseDetails/CourseIntro";
import VideoPlayer from "../components/CourseDetails/VideoPlayer";
import VideoList from "../components/CourseDetails/VideoList";
import CourseInfoSidebar from "../components/CourseDetails/CourseInfoSidebar";

export default function CourseDetails() {
  const { id } = useParams();

  // Mock data (استبدليه لاحقًا بالبيانات من الـ API)
  const course = {
    id,
    title: "Introduction to Web Development",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to start your journey as a web developer.",
    image:
      "https://images.unsplash.com/photo-1581091012184-5c7b3f6b2a2a?auto=format&fit=crop&w=800&q=80",
    instructor: "John Doe",
    duration: "6 hours",
    rating: 4.8,
    videos: [
      { id: 1, title: "Getting Started with HTML", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 2, title: "CSS Fundamentals", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
      { id: 3, title: "Intro to JavaScript", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 mt-20">
      {/* المحتوى الرئيسي */}
      <div className="flex-1">
        <CourseIntro
          image={course.image}
          title={course.title}
          description={course.description}
        />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VideoPlayer videoUrl={course.videos[0].url} />
            <VideoList videos={course.videos} />
          </div>
          <CourseInfoSidebar
            instructor={course.instructor}
            duration={course.duration}
            rating={course.rating}
          />
        </div>
      </div>
    </div>
  );
}
