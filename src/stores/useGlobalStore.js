import { create } from 'zustand';
export const useGlobalStore = create((set, get) => ({
  pageTitle: null,
  setPageTitle: (item) => {
    set({ pageTitle: item });
  },
}));
