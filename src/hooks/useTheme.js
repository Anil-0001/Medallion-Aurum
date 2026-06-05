"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "medallion-aurum-theme";

export function useTheme() {
  const subscribe = (callback) => {
    window.addEventListener("storage", callback);
    window.addEventListener("medallion-theme-change", callback);

    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("medallion-theme-change", callback);
    };
  };

  const getSnapshot = () => {
    if (typeof window === "undefined") return "dark";
    return (
      window.localStorage.getItem(STORAGE_KEY) ||
      document.documentElement.dataset.theme ||
      "dark"
    );
  };

  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const nextTheme = stored || document.documentElement.dataset.theme || "dark";
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const updateTheme = (nextTheme) => {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.dispatchEvent(new Event("medallion-theme-change"));
  };

  const toggleTheme = () => {
    updateTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, setTheme: updateTheme, toggleTheme };
}
