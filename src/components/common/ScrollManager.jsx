"use client";

import { useEffect, useLayoutEffect } from "react";

export default function ScrollManager() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const forceTop = () => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    forceTop();
    window.requestAnimationFrame(forceTop);
    const timers = [80, 240, 700, 1400, 2600, 4200].map((delay) =>
      window.setTimeout(forceTop, delay)
    );

    window.addEventListener("pageshow", forceTop);
    window.addEventListener("load", forceTop);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("pageshow", forceTop);
      window.removeEventListener("load", forceTop);

      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return null;
}
