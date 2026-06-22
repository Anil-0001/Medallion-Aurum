"use client";

import { useEffect, useState } from "react";
import {
  getIndianScheduledTheme,
  getMsUntilNextIndianThemeChange,
  useTheme,
} from "@/hooks/useTheme";

export default function ThemeScheduleManager() {
  const { setTheme } = useTheme();
  const [scheduledTheme, setScheduledTheme] = useState(null);

  useEffect(() => {
    let timerId;

    const openChangePrompt = () => {
      setScheduledTheme(getIndianScheduledTheme());
    };

    const scheduleNextPrompt = () => {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(openChangePrompt, getMsUntilNextIndianThemeChange() + 250);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        scheduleNextPrompt();
      }
    };

    scheduleNextPrompt();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearTimeout(timerId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const confirmThemeChange = () => {
    if (scheduledTheme) {
      setTheme(scheduledTheme, { source: "auto" });
    }

    window.location.reload();
  };

  if (!scheduledTheme) return null;

  return (
    <div className="theme-schedule-modal" role="dialog" aria-modal="true" aria-label="Theme update">
      <div className="theme-schedule-backdrop" />
      <div className="theme-schedule-panel">
        <span>Theme Update</span>
        <h2>The site mode is ready to change</h2>
        <p>
          It is now time for the scheduled {scheduledTheme} mode based on Indian time.
          You can still switch between light and dark mode manually whenever you want.
        </p>
        <button type="button" onClick={confirmThemeChange}>
          OK
        </button>
      </div>

      <style>{`
        .theme-schedule-modal {
          position: fixed;
          inset: 0;
          z-index: 2147483647;
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .theme-schedule-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(10px);
        }

        .theme-schedule-panel {
          position: relative;
          z-index: 1;
          width: min(100%, 420px);
          border: 1px solid rgba(214, 178, 95, 0.5);
          border-radius: 18px;
          background:
            radial-gradient(circle at 50% 0%, rgba(214, 178, 95, 0.18), transparent 44%),
            #11100d;
          padding: 28px;
          color: #ffffff;
          text-align: center;
          box-shadow: 0 34px 100px rgba(0, 0, 0, 0.48);
        }

        .theme-schedule-panel span {
          color: var(--accent-strong);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .theme-schedule-panel h2 {
          margin-top: 10px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 400;
          line-height: 1.12;
        }

        .theme-schedule-panel p {
          margin-top: 13px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.65;
        }

        .theme-schedule-panel button {
          width: 100%;
          min-height: 48px;
          margin-top: 20px;
          border-radius: 999px;
          background: var(--accent-strong);
          color: #080808;
          font-size: 15px;
          font-weight: 800;
        }

        [data-theme="light"] .theme-schedule-panel {
          background:
            radial-gradient(circle at 50% 0%, rgba(154, 117, 39, 0.14), transparent 44%),
            #ffffff;
          color: var(--heading);
        }

        [data-theme="light"] .theme-schedule-panel h2 {
          color: var(--heading);
        }

        [data-theme="light"] .theme-schedule-panel p {
          color: var(--muted);
        }

        @media (max-width: 420px) {
          .theme-schedule-panel {
            padding: 24px 18px 18px;
          }

          .theme-schedule-panel h2 {
            font-size: 25px;
          }
        }
      `}</style>
    </div>
  );
}
