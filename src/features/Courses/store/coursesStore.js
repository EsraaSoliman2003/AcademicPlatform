import { create } from "zustand";

export const useCoursesStore = create((set) => ({
  courses: [],
  setCourses: (data) => set({ courses: data }),
  addCourse: (newCourse) =>
    set((state) => ({ courses: [...state.courses, newCourse] })),
  updateCourse: (id, updated) =>
    set((state) => ({
      courses: state.courses.map((c) => (c.id === id ? updated : c)),
    })),
  deleteCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    })),
}));
