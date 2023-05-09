import { create } from 'zustand'

export const useStore = create((set) => ({
  semesterDoc:{},
  setSemesterDoc: (doc) => set((state) => ({ semesterDoc: doc })),
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))