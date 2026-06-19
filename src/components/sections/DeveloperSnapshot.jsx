"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Crown,
  Layers3,
  MapPin,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const legacyCards = [
  { value: "8.6", label: "Acre Land Parcel", icon: Building2 },
  { value: "82%", label: "Open Area", icon: Layers3 },
  { value: "3 & 4", label: "BHK Residences", icon: BadgeCheck },
  { value: "24x7", label: "Secure Living", icon: Sparkles },
];

const quickFacts = [
  { value: "Sector 67", label: "Mohali Address" },
  { value: "Mivan", label: "Construction" },
  { value: "Podium", label: "Parking" },
  { value: "Club", label: "Lifestyle" },
];

const detailCards = [
  {
    number: "01",
    title: "Open-Space Planning",
    text: "A generous land parcel with high open-area planning gives the community more light, air, and calmer movement.",
  },
  {
    number: "02",
    title: "Precision Construction",
    text: "Mivan technology supports cleaner structural execution, consistent quality, and a more refined ownership experience.",
  },
  {
    number: "03",
    title: "Connected Mohali Address",
    text: "Sector 67 keeps airport-side movement, schools, healthcare, retail, and everyday essentials within practical reach.",
  },
  {
    number: "04",
    title: "Clear Buyer Support",
    text: "Get brochure, floor-plan, current price, site visit guidance, inventory confirmation, and purchase support.",
  },
];

const modalFacts = [
  { label: "Configuration", value: "3 & 4 BHK Homes" },
  { label: "Planning", value: "82% Open Area" },
  { label: "Location", value: "Sector 67, Mohali" },
  { label: "Construction", value: "Mivan Technology" },
];

export default function DeveloperSnapshot() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <section
      id="developer-snapshot"
      className="developer-snapshot relative isolate overflow-hidden bg-[var(--bg)] px-5 py-14 text-[var(--text)] sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="developer-snapshot-bg absolute inset-0 -z-10" />

      <div className="mobile-section-width relative mx-auto w-full max-w-7xl">
        <p className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] backdrop-blur-xl">
          <Crown size={13} />
          Property Snapshots
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="text-center">
            <h2 className="font-[family:var(--font-display)] text-[clamp(3.35rem,6.8vw,6.6rem)] font-normal leading-[0.88] text-[var(--heading)]">
              The Medallion{" "}
              <span className="developer-gradient-word block">Aurum.</span>
            </h2>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
              At a glance
            </p>
            <div className="mt-7 h-px w-full bg-[var(--line)]" />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {legacyCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={`${item.value}-${item.label}`}
                    className="developer-legacy-card group relative min-h-[110px] overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-4 text-center backdrop-blur-xl"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -7 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ delay: index * 0.05, duration: 0.42 }}
                  >
                    <Icon className="mx-auto text-[var(--accent)]" size={17} />
                    <p className="mt-2 text-2xl font-semibold leading-none text-[var(--accent-strong)]">
                      {item.value}
                    </p>
                    <p className="mx-auto mt-1 max-w-24 text-xs font-semibold leading-3 text-[var(--heading)]">
                      {item.label}
                    </p>
                    <span className="developer-progress-bar absolute bottom-3 left-4 h-0.5 w-14" />
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="max-w-4xl font-[family:var(--font-display)] text-[clamp(2rem,4.2vw,4rem)] font-normal leading-tight text-[var(--heading)]">
              Premium residences in{" "}
              <span className="text-[var(--accent-strong)]">Sector 67, Mohali</span>
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              The Medallion Aurum brings premium residences, open planning, refined arrivals, and
              lifestyle amenities into one composed address by Turnstone Realty.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
              Planned for families who value clarity and calm, it combines Mivan construction,
              podium parking, security-backed living, and practical Mohali connectivity.
            </p>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--accent)] bg-[rgba(214,178,95,0.12)] px-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)] hover:text-[#050505]"
            >
              Read More
              <ArrowUpRight size={15} />
            </button>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((item) => (
                <motion.div
                  key={item.label}
                  className="developer-fact group"
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="developer-progress-bar mx-0 block h-0.5 w-14" />
                  <p className="mt-3 text-base font-semibold text-[var(--heading)]">{item.value}</p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {modalOpen ? <DeveloperSnapshotModal onClose={() => setModalOpen(false)} /> : null}
            </AnimatePresence>,
            document.body
          )
        : null}

      <style>{`
        .developer-snapshot-bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(214, 178, 95, 0.11), transparent 28%),
            radial-gradient(circle at 82% 8%, rgba(159, 197, 220, 0.06), transparent 26%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .developer-gradient-word {
          display: block;
          color: transparent;
          background-image: linear-gradient(100deg, var(--accent), var(--gold-light), var(--heading), var(--accent));
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: developer-shimmer 4.5s linear infinite;
        }

        @keyframes developer-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 240% 50%;
          }
        }

        .developer-legacy-card {
          border-radius: 8px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.07), rgba(214, 178, 95, 0.06)),
            var(--glass);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .developer-legacy-card:hover {
          border-color: var(--accent);
          box-shadow: 0 18px 54px rgba(0, 0, 0, 0.24);
        }

        .developer-progress-bar {
          overflow: hidden;
          border-radius: 999px;
          background: rgba(214, 178, 95, 0.22);
        }

        .developer-progress-bar::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--accent), var(--gold-light));
          transform: scaleX(0.42);
          transform-origin: left center;
          transition: transform 0.38s ease;
        }

        .developer-legacy-card:hover .developer-progress-bar::after,
        .developer-fact:hover .developer-progress-bar::after {
          transform: scaleX(1);
        }

        .developer-fact {
          min-height: 94px;
          transition: color 0.3s ease;
        }

        .developer-whatsapp-btn {
          border-color: var(--success);
          background:
            linear-gradient(135deg, rgba(23, 217, 139, 0.95), rgba(16, 167, 106, 0.95));
          box-shadow: 0 14px 36px rgba(23, 217, 139, 0.18);
        }

        .developer-whatsapp-btn:hover,
        .developer-whatsapp-btn:focus-visible {
          background:
            linear-gradient(135deg, rgba(23, 217, 139, 1), rgba(12, 135, 87, 1));
          color: #ffffff;
          outline: none;
        }

        [data-theme="light"] .developer-legacy-card {
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.82), rgba(154, 117, 39, 0.08)),
            var(--glass);
        }

        @media (max-width: 640px) {
          .developer-snapshot {
            padding: 36px 5px 42px;
          }

          .developer-snapshot .mobile-section-width {
            max-width: 360px;
          }

          .developer-snapshot > .mobile-section-width > p {
            min-height: 28px;
            padding-inline: 18px;
            font-size: 0.62rem;
            letter-spacing: 0.22em;
          }

          .developer-snapshot .mt-10.grid {
            margin-top: 26px;
            gap: 26px;
          }

          main section.developer-snapshot h2,
          main section.developer-snapshot h3 {
            font-size: 1.92rem !important;
            line-height: 1.08 !important;
            letter-spacing: 0 !important;
          }

          .developer-gradient-word {
            display: block;
          }

          .developer-snapshot .mt-6.text-xs {
            margin-top: 14px;
            text-align: center;
            letter-spacing: 0.2em;
          }

          .developer-snapshot .mt-7.h-px {
            margin-top: 16px;
          }

          .developer-snapshot .mt-8.grid {
            margin-top: 16px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .developer-legacy-card {
            min-height: 104px;
            padding: 13px 10px;
          }

          .developer-legacy-card p:first-of-type {
            margin-top: 8px;
            font-size: 1.55rem;
          }

          .developer-legacy-card p:last-of-type {
            max-width: 88px;
            font-size: 0.68rem;
            line-height: 1.1;
          }

          .developer-snapshot h3 + p,
          .developer-snapshot h3 + p + p {
            margin-top: 14px;
            max-width: 100%;
            font-size: 0.96rem;
            line-height: 1.55;
          }

          .developer-snapshot button {
            margin-inline: auto;
            margin-top: 18px;
            display: flex;
            width: fit-content;
            min-height: 36px;
            border-radius: 10px;
            padding-inline: 18px;
            font-size: 0.68rem;
            letter-spacing: 0.16em;
          }

          .developer-snapshot .mt-9.grid {
            margin-top: 24px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px 14px;
            text-align: center;
          }

          .developer-fact {
            min-height: 58px;
          }

          .developer-fact span {
            margin-inline: auto;
          }

          .developer-fact p:first-of-type {
            margin-top: 8px;
            font-size: 0.94rem;
          }

          .developer-fact p:last-of-type {
            margin-top: 5px;
            font-size: 0.62rem;
            line-height: 1.15;
            letter-spacing: 0.18em;
          }
        }
      `}</style>
    </section>
  );
}

function DeveloperSnapshotModal({ onClose }) {
  return (
    <motion.div
      className="developer-modal fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/72 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="developer-modal-title"
        className="developer-modal-panel relative max-h-[88vh] w-full max-w-5xl overflow-hidden border border-[var(--line)] bg-[var(--bg)] shadow-[0_34px_130px_rgba(0,0,0,0.48)]"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 22, scale: 0.98 }}
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="developer-modal-scroll max-h-[88vh] overflow-y-auto">
          <div className="developer-modal-hero relative overflow-hidden border-b border-[var(--line)] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(214,178,95,0.16),transparent_32%)]" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-[2147483647] grid size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--header)] text-[var(--heading)] shadow-[0_12px_36px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Close project brief"
            >
              <X size={18} />
            </button>
            <div className="relative max-w-3xl">
              <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                <ShieldCheck size={13} />
                Project Brief
              </p>
              <h3
                id="developer-modal-title"
                className="mt-4 font-[family:var(--font-display)] text-[clamp(2.3rem,5vw,4.8rem)] font-normal leading-none text-[var(--heading)]"
              >
                The Medallion Aurum
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                A premium residential address in Sector 67, Mohali, shaped around open planning,
                refined homes, connected living, and a more composed ownership journey.
              </p>
            </div>
          </div>

          <div className="grid gap-4 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="developer-modal-note border border-[var(--line)] bg-[var(--glass)] p-5">
              <p className="text-base leading-8 text-[var(--muted)]">
                The project focuses on a calmer ownership experience: generous open areas,
                quality construction, podium-led arrival planning, curated amenities, and a
                location that keeps Mohali's key corridors close without losing residential calm.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {modalFacts.map((fact) => (
                <div key={fact.label} className="developer-modal-fact border border-[var(--line)] bg-[var(--glass)] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    {fact.label}
                  </p>
                  <p className="mt-3 text-base font-semibold leading-6 text-[var(--heading)]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 px-5 pb-5 sm:px-8 sm:pb-8 md:grid-cols-2 lg:grid-cols-4">
            {detailCards.map((card) => (
              <article key={card.number} className="developer-modal-card border border-[var(--line)] bg-[var(--glass)] p-5">
                <p className="text-xs font-semibold text-[var(--accent)]">{card.number}</p>
                <h4 className="mt-4 text-base font-semibold text-[var(--heading)]">{card.title}</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.text}</p>
              </article>
            ))}
          </div>

          <div className="mx-5 mb-5 grid gap-4 border border-[var(--line)] bg-[rgba(214,178,95,0.08)] p-5 sm:mx-8 sm:mb-8 sm:grid-cols-[0.34fr_1fr]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Best Next Step
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Schedule a private walkthrough to verify available floors, current price, payment
              plan, floor options, construction details, and current inventory for your preferred
              unit.
            </p>
          </div>

          <div className="flex flex-col gap-3 px-5 pb-6 sm:flex-row sm:px-8 sm:pb-8">
            <a
              href="#site-visit-map"
              onClick={onClose}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent-strong)] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--heading)] hover:text-white"
            >
              <MapPin size={17} />
              Schedule Site Visit
            </a>
            <a
              href="https://wa.me/917009247378"
              className="developer-whatsapp-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              WhatsApp Now
            </a>
          </div>
        </div>

        <style>{`
          .developer-modal-panel,
          .developer-modal-note,
          .developer-modal-fact,
          .developer-modal-card {
            border-radius: 18px;
          }

          .developer-modal-panel {
            background:
              radial-gradient(circle at 82% 6%, rgba(214, 178, 95, 0.1), transparent 30%),
              linear-gradient(145deg, rgba(28, 27, 24, 0.98), rgba(8, 8, 7, 0.98));
          }

          .developer-modal-scroll::-webkit-scrollbar {
            width: 9px;
          }

          .developer-modal-scroll::-webkit-scrollbar-thumb {
            background: var(--accent);
            border-radius: 999px;
          }

          [data-theme="light"] .developer-modal {
            background: rgba(5, 5, 5, 0.42);
          }

          [data-theme="light"] .developer-modal-panel {
            background:
              radial-gradient(circle at 82% 6%, rgba(154, 117, 39, 0.1), transparent 30%),
              linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(247, 251, 255, 0.96));
          }

          @media (max-width: 640px) {
            .developer-modal {
              align-items: flex-start;
              padding: 48px 5px 18px;
            }

            .developer-modal-panel {
              max-width: 360px;
              max-height: calc(100svh - 66px);
              border-radius: 18px;
            }

            .developer-modal-scroll {
              max-height: calc(100svh - 66px);
            }

            .developer-modal-hero {
              padding: 18px 16px 14px;
            }

            .developer-modal-hero button {
              right: 10px;
              top: 10px;
              width: 34px;
              height: 34px;
              border-radius: 10px;
            }

            .developer-modal-hero p.inline-flex {
              font-size: 0.62rem;
              letter-spacing: 0.2em;
            }

            .developer-modal-hero h3 {
              margin-top: 14px;
              max-width: 260px;
              font-size: 1.7rem !important;
              line-height: 1.05 !important;
            }

            .developer-modal-hero h3 + p {
              margin-top: 12px;
              font-size: 0.92rem;
              line-height: 1.55;
            }

            .developer-modal-scroll > .grid.gap-4 {
              gap: 12px;
              padding: 14px;
            }

            .developer-modal-note {
              padding: 14px;
              border-radius: 14px;
            }

            .developer-modal-note p {
              font-size: 0.9rem;
              line-height: 1.55;
            }

            .developer-modal-scroll .grid.gap-3.sm\\:grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 9px;
            }

            .developer-modal-fact {
              min-height: 82px;
              padding: 12px 10px;
              border-radius: 12px;
              text-align: center;
            }

            .developer-modal-fact p:first-child {
              font-size: 0.62rem;
              line-height: 1.1;
              letter-spacing: 0.16em;
            }

            .developer-modal-fact p:last-child {
              margin-top: 8px;
              font-size: 0.92rem;
              line-height: 1.25;
            }

            .developer-modal-scroll > .grid.gap-3.px-5 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 9px;
              padding: 0 14px 14px;
            }

            .developer-modal-card {
              min-height: 104px;
              padding: 12px 10px;
              border-radius: 12px;
            }

            .developer-modal-card h4 {
              margin-top: 8px;
              font-size: 0.9rem;
              line-height: 1.2;
            }

            .developer-modal-card p:last-child {
              margin-top: 7px;
              font-size: 0.76rem;
              line-height: 1.35;
            }

            .developer-modal-scroll > .mx-5.mb-5 {
              margin: 0 14px 14px;
              padding: 13px;
              border-radius: 14px;
            }

            .developer-modal-scroll > .mx-5.mb-5 p:last-child {
              font-size: 0.82rem;
              line-height: 1.5;
            }

            .developer-modal-scroll > .flex.flex-col {
              padding: 0 14px 16px;
            }

            .developer-modal-scroll > .flex.flex-col a {
              min-height: 42px;
              font-size: 0.82rem;
            }
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2.25A9.67 9.67 0 0 0 3.7 16.8L2.5 21.25l4.56-1.2a9.64 9.64 0 0 0 4.97 1.37h.01a9.59 9.59 0 0 0 9.6-9.58 9.6 9.6 0 0 0-9.6-9.59Zm0 17.55h-.01a8.02 8.02 0 0 1-4.1-1.12l-.3-.18-2.7.71.72-2.63-.2-.32a8.05 8.05 0 1 1 6.59 3.54Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
