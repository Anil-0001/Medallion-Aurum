"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const ctaPoints = ["Sector 67, Mohali", "Schedule a site visit", "Transparent guidance"];

export default function PropertyInterest() {
  return (
    <section
      id="property-interest"
      className="property-interest-section sticky top-0 z-0 h-[100svh] overflow-hidden bg-[var(--bg)] px-4 text-[var(--text)] sm:px-6 lg:px-8"
    >
      <Image
        src="/private assistance/assistance.webp"
        alt="The Medallion Aurum property view"
        fill
        sizes="100vw"
        quality={74}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.22),rgba(0,0,0,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42),rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.12)_72%,rgba(0,0,0,0.42))]" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center py-5 sm:py-8">
        <motion.div
          className="interest-panel mx-auto w-full max-w-3xl border border-[var(--line)] bg-transparent px-4 py-6 text-center backdrop-blur-[2px] sm:px-8 sm:py-9 md:px-12 md:py-11"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.22em]">
            <ShieldCheck size={13} />
            Private Assistance
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl text-[1.7rem] font-normal leading-[1.08] text-white sm:mt-5 sm:text-5xl md:text-6xl">
            Begin Your <span className="text-[var(--accent-strong)]">Aurum Ownership Journey</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-[1.45] text-white/88 sm:mt-5 sm:text-base sm:leading-7">
            Get expert guidance for The Medallion Aurum, from project details and pricing clarity
            to site visit planning and brochure support.
          </p>

          <div className="interest-pill-grid mx-auto mt-4 grid max-w-[310px] grid-cols-2 justify-items-center gap-2 sm:mt-5 sm:flex sm:max-w-2xl sm:flex-wrap sm:justify-center">
            {ctaPoints.map((point) => (
              <span
                key={point}
                className="interest-pill inline-flex min-h-8 items-center justify-center rounded-full border border-white/16 bg-black/24 px-3 text-center text-[9px] font-semibold uppercase tracking-[0.11em] text-white/86 sm:text-[10px] sm:tracking-[0.16em]"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
            <a
              href="#enquiry-preview"
              className="interest-primary group relative inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-xs font-semibold transition-all duration-300 hover:-translate-y-1.5 sm:min-h-11 sm:min-w-52 md:px-6 md:text-sm"
            >
              <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/45 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              <span className="relative">Enquire Now</span>
              <ArrowUpRight
                size={17}
                className="relative transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
            <a
              href="https://wa.me/917009247378"
              target="_blank"
              rel="noreferrer"
              className="interest-whatsapp inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-5 text-xs font-semibold transition-all duration-300 hover:-translate-y-1 sm:min-h-11 sm:min-w-48 md:px-6 md:text-sm"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .property-interest-section {
          min-height: 100vh;
          min-height: 100svh;
          height: 100vh;
          height: 100svh;
        }

        .interest-panel {
          border-radius: 28px;
          box-shadow: 0 34px 120px rgba(0, 0, 0, 0.34);
        }

        .interest-panel:hover {
          border-color: rgba(214, 178, 95, 0.52);
        }

        .interest-primary {
          background: #f4d36f;
          color: #050505;
        }

        .interest-primary:hover {
          background: #f5dc8a;
        }

        .interest-whatsapp {
          border: 1px solid #17d98b;
          background: rgba(0, 0, 0, 0.28);
          color: #17d98b;
        }

        .interest-whatsapp:hover {
          background:
            linear-gradient(135deg, rgba(23, 217, 139, 0.16), rgba(0, 0, 0, 0.22)),
            rgba(0, 0, 0, 0.28);
          box-shadow: 0 18px 46px rgba(23, 217, 139, 0.13);
        }

        [data-theme="light"] .interest-panel {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.22);
        }

        @media (max-width: 640px) {
          .property-interest-section {
            min-height: 100svh;
            height: 100svh;
          }

          .interest-panel {
            border-radius: 20px;
            max-width: 340px;
            box-shadow:
              0 18px 42px rgba(0, 0, 0, 0.28),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
          }

          .interest-pill:nth-child(3) {
            grid-column: 1 / -1;
            width: min(100%, 210px);
          }

          .interest-primary,
          .interest-whatsapp {
            width: min(100%, 250px);
            min-height: 38px;
          }
        }
      `}</style>
    </section>
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
