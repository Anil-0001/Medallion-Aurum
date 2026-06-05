"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-7 w-14 items-center rounded-full border border-white/20 bg-black/20 p-1 text-white backdrop-blur-xl sm:h-8 sm:w-16 lg:h-9 lg:w-20"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="absolute left-1.5 text-white/75 sm:left-2">
        <Sun size={11} className="lg:h-[13px] lg:w-[13px]" />
      </span>
      <span className="absolute right-1.5 text-white/75 sm:right-2">
        <Moon size={11} className="lg:h-[13px] lg:w-[13px]" />
      </span>
      <motion.span
        className={
          isDark
            ? "relative z-10 flex h-5 w-5 translate-x-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] transition-transform duration-300 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            : "relative z-10 flex h-5 w-5 translate-x-7 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] transition-transform duration-300 sm:h-6 sm:w-6 sm:translate-x-8 lg:h-7 lg:w-7 lg:translate-x-11"
        }
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        {isDark ? <Sun size={11} className="lg:h-3.5 lg:w-3.5" /> : <Moon size={11} className="lg:h-3.5 lg:w-3.5" />}
      </motion.span>
    </button>
  );
}
