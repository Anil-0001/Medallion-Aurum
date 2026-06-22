"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "medallion-aurum-theme";
const SOURCE_KEY = "medallion-aurum-theme-source";
const THEME_CHANGE_EVENT = "medallion-theme-change";
const IST_OFFSET_MINUTES = 330;
const LIGHT_START_HOUR = 7;
const DARK_START_HOUR = 19;

export function getIndianScheduledTheme(date = new Date()) {
  const istDate = new Date(date.getTime() + IST_OFFSET_MINUTES * 60 * 1000);
  const hour = istDate.getUTCHours();

  return hour >= LIGHT_START_HOUR && hour < DARK_START_HOUR ? "light" : "dark";
}

export function getMsUntilNextIndianThemeChange(date = new Date()) {
  const istDate = new Date(date.getTime() + IST_OFFSET_MINUTES * 60 * 1000);
  const hour = istDate.getUTCHours();
  const nextHour = hour < LIGHT_START_HOUR ? LIGHT_START_HOUR : hour < DARK_START_HOUR ? DARK_START_HOUR : LIGHT_START_HOUR;
  const nextIstBoundary = Date.UTC(
    istDate.getUTCFullYear(),
    istDate.getUTCMonth(),
    istDate.getUTCDate() + (hour >= DARK_START_HOUR ? 1 : 0),
    nextHour,
    0,
    0,
    0
  );

  return Math.max(0, nextIstBoundary - istDate.getTime());
}

const getPreferredTheme = () => {
  if (typeof window === "undefined") return "dark";

  const source = window.localStorage.getItem(SOURCE_KEY);
  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (source === "manual" && (stored === "light" || stored === "dark")) {
    return stored;
  }

  return getIndianScheduledTheme();
};

const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
  };
};

const getSnapshot = () => getPreferredTheme();

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = getPreferredTheme();
  }, []);

  const updateTheme = (nextTheme, options = {}) => {
    const source = options.source || "manual";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    window.localStorage.setItem(SOURCE_KEY, source);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  const toggleTheme = () => {
    updateTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, setTheme: updateTheme, toggleTheme };
}
