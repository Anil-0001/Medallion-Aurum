"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="relative inline-flex h-7 w-14 items-center rounded-full border border-white/20 bg-black/20 p-1 text-white backdrop-blur-xl sm:h-8 sm:w-16 lg:h-9 lg:w-20"
      role="group"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="absolute left-1 z-20 h-5 w-5 cursor-pointer rounded-full sm:h-6 sm:w-6 lg:h-7 lg:w-7"
        aria-label="Dark theme"
        title="Dark theme"
      />
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="absolute right-1 z-20 h-5 w-5 cursor-pointer rounded-full sm:h-6 sm:w-6 lg:h-7 lg:w-7"
        aria-label="Light theme"
        title="Light theme"
      />
      <span className="absolute left-1.5 flex h-5 w-5 items-center justify-center text-white sm:left-2 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <Moon size={11} className="lg:h-[13px] lg:w-[13px]" />
      </span>
      <span className="absolute right-1.5 flex h-5 w-5 items-center justify-center text-white sm:right-2 sm:h-6 sm:w-6 lg:h-7 lg:w-7">
        <Sun size={11} className="lg:h-[13px] lg:w-[13px]" />
      </span>
      <motion.span
        className={
          isDark
            ? "relative z-10 flex h-5 w-5 translate-x-0 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            : "relative z-10 flex h-5 w-5 translate-x-7 items-center justify-center rounded-full bg-[var(--accent)] text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-6 sm:w-6 sm:translate-x-8 lg:h-7 lg:w-7 lg:translate-x-11"
        }
        aria-hidden="true"
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        {isDark ? <Moon size={11} className="lg:h-3.5 lg:w-3.5" /> : <Sun size={11} className="lg:h-3.5 lg:w-3.5" />}
      </motion.span>
    </div>
  );
}
