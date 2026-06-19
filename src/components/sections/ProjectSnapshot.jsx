"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Car, MapPin, ShieldCheck, Sparkles, Trees } from "lucide-react";

const stats = [
  { value: "8.6", label: "Acres land parcel", suffix: "Acres" },
  { value: "82%", label: "Open green area", suffix: "Open" },
  { value: "3 & 4", label: "BHK residences", suffix: "BHK" },
  { value: "24x7", label: "Security ecosystem", suffix: "Care" },
];

const highlights = [
  {
    icon: MapPin,
    title: "Sector 67, Mohali",
    text: "Prime airport-side Mohali corridor.",
  },
  {
    icon: Building2,
    title: "Mivan Technology",
    text: "Precision-built structural quality.",
  },
  {
    icon: Trees,
    title: "82% Open Area",
    text: "More light, air and everyday calm.",
  },
  {
    icon: Car,
    title: "Podium Parking",
    text: "Organized, elevated arrivals.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Community",
    text: "CCTV-backed resident security.",
  },
  {
    icon: Sparkles,
    title: "Club Lifestyle",
    text: "Club, wellness and sports zones.",
  },
];

export default function ProjectSnapshot() {
  return (
    <section
      id="project-snapshot"
      className="relative z-20 flex min-h-[100svh] items-start overflow-hidden bg-[var(--bg)] px-4 py-8 text-[var(--text)] sm:items-center sm:px-6 sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,var(--glass),transparent_32%),radial-gradient(circle_at_85%_10%,var(--soft-blue),transparent_28%)] opacity-30" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="grid gap-4 sm:gap-6 lg:min-h-[520px] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-full flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Project Snapshot
            </p>
            <h2 className="mt-3 max-w-2xl text-[1.7rem] font-normal leading-tight text-[var(--heading)] sm:mt-4 sm:text-3xl md:text-5xl">
              A premium Mohali address shaped around space and light.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">
              The Medallion Aurum combines open planning, Mivan technology, podium parking
              and curated lifestyle amenities in Sector 67, Mohali.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="snapshot-card group min-h-[86px] border border-[var(--line)] p-3 transition-colors duration-300 hover:border-[var(--gold-dark)] sm:min-h-0 sm:p-4"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <div className="flex flex-wrap items-end gap-x-2 gap-y-0">
                    <p className="text-2xl font-semibold leading-none text-[var(--heading)] sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="pb-0.5 text-[8px] uppercase tracking-[0.18em] text-[var(--accent)] sm:pb-1 sm:text-[10px] sm:tracking-[0.24em]">
                      {item.suffix}
                    </p>
                  </div>
                  <p className="mt-2 text-xs leading-4 text-[var(--muted)] sm:text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative min-h-[360px] overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-2 backdrop-blur-xl sm:min-h-[420px] sm:p-3 lg:min-h-full"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/hero/hero3.jpg"
              alt="The Medallion Aurum project snapshot"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="snapshot-media-image object-cover"
            />
            <div className="snapshot-media-overlay absolute inset-0 bg-[linear-gradient(180deg,transparent,var(--bg))]" />

            <div className="absolute inset-x-2 bottom-2 grid grid-cols-2 gap-2 sm:inset-x-3 sm:bottom-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="snapshot-highlight group border border-[var(--line)] p-2 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--gold-dark)] sm:p-3"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.12 + index * 0.05, duration: 0.42 }}
                  >
                    <div className="flex items-center gap-2 sm:mb-2">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center text-[var(--accent)] sm:h-8 sm:w-8">
                        <Icon size={14} />
                      </span>
                      <h3 className="text-[9px] font-medium uppercase leading-3 tracking-[0.1em] text-[var(--heading)] sm:text-xs sm:leading-normal sm:tracking-[0.16em]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="snapshot-highlight-copy mt-1 text-[10px] leading-4 text-[var(--muted)] sm:mt-0 sm:text-xs sm:leading-5">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .snapshot-highlight-copy {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
