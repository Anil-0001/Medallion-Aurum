"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Car, Gem, MapPinned, ShieldCheck, Trees } from "lucide-react";

const storyCards = [
  {
    icon: Building2,
    eyebrow: "Crafted Structure",
    title: "Mivan Technology",
    number: "01",
  },
  {
    icon: Trees,
    eyebrow: "Open Planning",
    title: "82% Open Green Area",
    number: "02",
  },
  {
    icon: MapPinned,
    eyebrow: "Prime Mohali",
    title: "Sector 67 Address",
    number: "03",
  },
  {
    icon: Car,
    eyebrow: "Arrival Comfort",
    title: "Podium Parking",
    number: "04",
  },
  {
    icon: Gem,
    eyebrow: "Lifestyle Layer",
    title: "Clubhouse, Spa & Sports",
    number: "05",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Trust First",
    title: "RERA-Led Clarity",
    number: "06",
  },
];

export default function Story() {
  return (
    <section
      id="story"
      className="relative flex min-h-[100svh] items-start overflow-hidden px-4 py-8 text-[var(--text)] sm:items-center sm:px-6 sm:py-14"
    >
      <Image
        src="/hero/hero4.jpg"
        alt="The Medallion Aurum story"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="story-overlay absolute inset-0 bg-[linear-gradient(90deg,var(--bg),transparent_54%,var(--bg))] opacity-60" />
      <div className="story-overlay absolute inset-0 bg-[linear-gradient(180deg,var(--header),transparent_38%,var(--bg))] opacity-62" />
      <div className="story-overlay absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--gold),transparent_34%)] opacity-12" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 sm:gap-7 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            The Aurum Story
          </p>
          <h2 className="mt-3 max-w-3xl text-[1.7rem] font-normal leading-tight text-white sm:mt-4 sm:text-3xl md:text-5xl">
            A rare <span className="text-[#f4d36f]">open-living</span> address in Mohali.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7">
            Built around scale, openness and daily calm, Aurum pairs Sector 67 access with
            Mivan construction, podium planning and club-led amenities.
          </p>

          <div className="mt-4 flex flex-nowrap gap-1.5 sm:mt-5 sm:flex-wrap sm:gap-2">
            {["8.6 Acres", "82% Open Area", "3 & 4 BHK", "Sector 67 Mohali"].map((item) => (
              <span
                key={item}
                className={`border border-[#f4d36f] bg-black/20 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.18em] ${
                  item === "Sector 67 Mohali" ? "hidden sm:inline-flex" : "inline-flex"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {storyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                className="story-card group relative min-h-[90px] overflow-hidden border border-[var(--line)] p-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--gold-dark)] sm:min-h-24 sm:p-3"
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3 sm:gap-5">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#f4d36f] bg-black/20 text-[#f4d36f] sm:h-8 sm:w-8">
                    <Icon size={14} />
                  </span>
                  <span className="text-[10px] font-semibold text-[#f4d36f] sm:text-xs">{card.number}</span>
                </div>
                <p className="mt-2.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] sm:mt-3 sm:text-[9px] sm:tracking-[0.18em]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-1 text-xs font-semibold leading-tight text-white sm:mt-1.5 sm:text-sm">
                  {card.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
