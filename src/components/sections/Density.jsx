"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Layers3, Leaf, SunMedium, Wind } from "lucide-react";

const densityPoints = [
  {
    icon: Layers3,
    value: "4",
    label: "Floors",
    text: "A grounded scale that keeps daily living calmer.",
  },
  {
    icon: SunMedium,
    value: "Sky",
    label: "Light",
    text: "Homes planned around openness and natural brightness.",
  },
  {
    icon: Wind,
    value: "Air",
    label: "Air",
    text: "A setting shaped for cross-ventilation and breathing room.",
  },
  {
    icon: Leaf,
    value: "Calm",
    label: "Nature",
    text: "Landscape-led planning with space between moments.",
  },
];

export default function Density() {
  return (
    <section
      id="density"
      className="relative flex min-h-[100svh] items-start overflow-hidden bg-[var(--bg)] px-4 py-8 text-[var(--text)] sm:items-center sm:px-6 sm:py-14"
    >
      <Image
        src="/density/density.jpg"
        alt="The Medallion Aurum low density living"
        fill
        sizes="100vw"
        quality={74}
        className="object-cover"
      />
      <div className="density-overlay absolute inset-0 bg-[linear-gradient(90deg,var(--bg),rgba(5,5,5,0.46)_42%,rgba(5,5,5,0.68))]" />
      <div className="density-overlay absolute inset-0 bg-[linear-gradient(180deg,var(--header),transparent_36%,var(--bg))] opacity-55" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Low Density Living
          </p>
          <h2 className="mt-3 max-w-4xl text-[1.7rem] font-normal leading-tight text-white sm:mt-4 sm:text-3xl md:text-5xl">
            Designed For <span className="text-[#f4d36f]">Peace,</span>
            <span className="block text-[#f4d36f]">Not Density</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            In a city of towers, we chose to stay grounded. Four floors. More sky.
            More light. More you.
          </p>

          <a
            href="#story"
            className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:mt-9 sm:text-xs sm:tracking-[0.26em]"
          >
            Scroll
            <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-2.5 sm:gap-3"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {densityPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="density-card min-h-[118px] border border-[var(--line)] p-3 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--gold-dark)] sm:min-h-40 sm:p-5"
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[#f4d36f] bg-black/20 text-[#f4d36f] sm:h-11 sm:w-11">
                    <Icon size={16} />
                  </span>
                  <span className="text-xl font-semibold leading-none text-white sm:text-3xl">
                    {item.value}
                  </span>
                </div>
                <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:mt-5 sm:text-[10px] sm:tracking-[0.24em]">
                  {item.label}
                </p>
                <p className="mt-1.5 text-[11px] leading-4 text-white/75 sm:mt-2 sm:text-sm sm:leading-6">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
