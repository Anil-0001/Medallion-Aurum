"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MapPin, Ruler, SunMedium } from "lucide-react";

const features = [
  "Premium group housing project in Sector 67, Mohali",
  "Mivan technology with open, sunlight-friendly planning",
  "8.6-acre land parcel with 82% open area",
];

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Sector 67, Mohali" },
  { icon: Ruler, label: "Land Parcel", value: "Approx. 8.6 Acres" },
  { icon: SunMedium, label: "Planning", value: "82% Open Area" },
];

export default function About() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-start overflow-hidden bg-[var(--bg)] px-4 py-8 text-[var(--text)] sm:items-center sm:px-6 sm:py-14"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--glass),transparent_42%)] opacity-50" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-4 sm:gap-7 lg:min-h-[560px] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            className="relative min-h-[360px] overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-2 backdrop-blur-xl sm:min-h-[420px] sm:p-3 lg:min-h-full"
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/hero/hero2.jpg"
              alt="About The Medallion Aurum"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="about-media-overlay absolute inset-0 bg-[linear-gradient(180deg,transparent,var(--bg))] opacity-75" />

            <div className="absolute bottom-3 left-3 right-3 border border-[var(--accent)] bg-[var(--header)] p-3 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[10px] sm:font-semibold sm:tracking-[0.26em]">
                Medallion Aurum Mohali
              </p>
              <p className="mt-1.5 text-base font-medium leading-snug text-[var(--heading)] sm:mt-2 sm:text-xl sm:font-semibold sm:leading-tight">
                A new premium address carrying forward the Medallion legacy.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex h-full flex-col justify-center"
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              About The Project
            </p>
            <h2 className="mt-3 max-w-2xl text-[1.7rem] font-normal leading-tight text-[var(--heading)] sm:mt-4 sm:text-3xl md:text-5xl">
              A refined residential landmark in Sector 67, Mohali.
            </h2>
            <p className="mt-3 text-base leading-6 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">
              The Medallion Aurum is an upcoming premium group housing project by
              Turnstone Realty, planned with spacious homes, open areas and club-style
              amenities.
            </p>
            <p className="mt-3 text-base leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              Designed for families who prefer clarity, comfort and calm, the community brings
              together thoughtful tower placement, open views, refined drop-offs and a more
              composed everyday rhythm in one of Mohali&apos;s most connected corridors.
            </p>

            {!detailsOpen ? (
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setDetailsOpen(true)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Read More
              </button>
            </div>
            ) : null}

            <AnimatePresence initial={false}>
              {detailsOpen ? (
                <motion.div
                  className="mt-5 border border-[var(--line)] bg-[var(--glass)] p-4 backdrop-blur-xl"
                  initial={{ opacity: 0, y: 18, height: 0 }}
                  whileInView={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 18, height: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-base leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                    Mivan technology, podium parking, tower drop-offs and security-backed
                    planning shape a cleaner, calmer ownership experience.
                  </p>

                  <div className="mt-4 grid gap-2">
                    {features.map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-start gap-3 border-b border-[var(--line)] pb-2 text-[var(--text)] last:border-b-0"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.05, duration: 0.32 }}
                      >
                        <CheckCircle2 className="mt-1 shrink-0 text-[var(--accent)]" size={16} />
                        <span className="text-[0.95rem] leading-5 text-[var(--muted)] sm:text-base sm:leading-6">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setDetailsOpen(false)}
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                    Read Less
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-3">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className={`snapshot-card border border-[var(--line)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-dark)] sm:p-4 ${
                      index === 2 ? "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:col-span-1 sm:w-auto" : ""
                    }`}
                  >
                    <Icon className="text-[var(--accent)]" size={18} />
                    <p className="mt-3 text-[8px] uppercase tracking-[0.18em] text-[var(--muted)] sm:mt-4 sm:text-[10px] sm:tracking-[0.24em]">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-5 text-[var(--heading)] sm:mt-2 sm:text-base sm:font-semibold">
                      {fact.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
