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
      className="relative z-20 flex min-h-screen items-center overflow-hidden bg-[var(--bg)] px-6 py-12 text-[var(--text)] sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,var(--glass),transparent_32%),radial-gradient(circle_at_85%_10%,var(--soft-blue),transparent_28%)] opacity-30" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="grid gap-6 lg:min-h-[520px] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-full flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Project Snapshot
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-normal leading-tight text-[var(--heading)] md:text-5xl">
              A premium Mohali address shaped around space and light.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
              The Medallion Aurum combines open planning, Mivan technology, podium parking
              and curated lifestyle amenities in Sector 67, Mohali.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="snapshot-card group border border-[var(--line)] p-4 transition-colors duration-300 hover:border-[var(--gold-dark)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <div className="flex items-end gap-2">
                    <p className="text-3xl font-semibold text-[var(--heading)]">{item.value}</p>
                    <p className="pb-1 text-[10px] uppercase tracking-[0.24em] text-[var(--accent)]">
                      {item.suffix}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="relative min-h-[420px] overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-3 backdrop-blur-xl lg:min-h-full"
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

            <div className="absolute inset-x-3 bottom-3 grid gap-2 sm:grid-cols-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="snapshot-highlight group border border-[var(--line)] p-3 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--gold-dark)]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.12 + index * 0.05, duration: 0.42 }}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center border border-[var(--line)] text-[var(--accent)]">
                        <Icon size={15} />
                      </span>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--heading)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-5 text-[var(--muted)]">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
