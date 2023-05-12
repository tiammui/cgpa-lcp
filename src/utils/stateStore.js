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
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
