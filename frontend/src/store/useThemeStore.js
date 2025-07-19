import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: typeof window !== "undefined"
    ? localStorage.getItem("preferred-theme") || "forest"
    : "forest",
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-theme", theme);
    }
    set({ theme });
  },
}));
