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
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] px-6 py-12 text-[var(--text)] sm:py-14"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--glass),transparent_42%)] opacity-50" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-7 lg:min-h-[560px] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div
            className="relative min-h-[420px] overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-3 backdrop-blur-xl lg:min-h-full"
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

            <div className="absolute bottom-4 left-4 right-4 border border-[var(--accent)] bg-[var(--header)] p-4 backdrop-blur-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                Medallion Aurum Mohali
              </p>
              <p className="mt-2 text-xl font-semibold leading-tight text-[var(--heading)]">
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
            <h2 className="mt-4 max-w-2xl text-3xl font-normal leading-tight text-[var(--heading)] md:text-5xl">
              A refined residential landmark in Sector 67, Mohali.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              The Medallion Aurum is an upcoming premium group housing project by
              Turnstone Realty, planned with spacious homes, open areas and club-style
              amenities.
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
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
                  <p className="text-base leading-7 text-[var(--muted)]">
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
                        <span className="text-sm leading-6 text-[var(--muted)]">{item}</span>
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

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {quickFacts.map((fact) => {
                const Icon = fact.icon;

                return (
                  <div
                    key={fact.label}
                    className="snapshot-card border border-[var(--line)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-dark)]"
                  >
                    <Icon className="text-[var(--accent)]" size={20} />
                    <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[var(--heading)]">
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
