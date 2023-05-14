import { create } from 'zustand';

export const useStore = create((set) => ({
  semesterDoc: {},
  setSemesterDoc: (doc) => set((state) => ({ semesterDoc: doc })),
  lcpCourses: [],
  setLcpCourses: (coursesRes) =>
    set((state) => {
      return {
        lcpCourses: coursesRes.map((res) => res.data),
      };
    }),
  isLcpGpaCalc:true,
  setIsLcpGpaCalc: (value) => set((state) => ({ isLcpGpaCalc: value })),
}));
