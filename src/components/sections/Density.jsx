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
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] px-6 py-20 text-[var(--text)] sm:py-24"
    >
      <Image
        src="/hero/hero1.jpg"
        alt="The Medallion Aurum low density living"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="density-overlay absolute inset-0 bg-[linear-gradient(90deg,var(--bg),rgba(5,5,5,0.46)_42%,rgba(5,5,5,0.68))]" />
      <div className="density-overlay absolute inset-0 bg-[linear-gradient(180deg,var(--header),transparent_36%,var(--bg))] opacity-55" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
            Low Density Living
          </p>
          <h2 className="mt-5 max-w-4xl text-5xl font-normal leading-none text-white md:text-7xl">
            Designed For <span className="text-[#f4d36f]">Peace,</span>
            <span className="mt-2 block text-[#f4d36f]">Not Density</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
            In a city of towers, we chose to stay grounded. Four floors. More sky.
            More light. More you.
          </p>

          <a
            href="#story"
            className="mt-9 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]"
          >
            Scroll
            <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2"
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
                className="density-card min-h-40 border border-[var(--line)] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--gold-dark)]"
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-[#f4d36f] bg-black/20 text-[#f4d36f]">
                    <Icon size={19} />
                  </span>
                  <span className="text-3xl font-semibold leading-none text-white">
                    {item.value}
                  </span>
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
