import { create } from 'zustand';
export const useGlobalStore = create((set, get) => ({
  pageTitle: null,
  setPageTitle: (item) => {
    set({ pageTitle: item });
  },
  theme: localStorage.getItem('blaze') || 'dark',
  setTheme: (theme) => {
    localStorage.setItem('blaze', theme);
    set({ theme });
  },
}));
