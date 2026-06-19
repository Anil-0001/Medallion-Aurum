"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, CalendarDays, CheckCircle2, Home, Landmark, ShieldCheck } from "lucide-react";

const banks = ["HDFC", "SBI", "ICICI", "AXIS", "PNB", "KOTAK"];

export default function ConstructionProgress() {
  return (
    <section
      id="construction-progress"
      className="construction-progress-section relative z-20 overflow-hidden bg-[var(--bg)] px-4 py-8 text-[var(--text)] sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="construction-progress-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] backdrop-blur-xl sm:px-5 sm:py-2 sm:tracking-[0.28em]">
            <Building2 size={13} />
            Milestone Details
          </p>
          <h2 className="mt-3 text-[1.7rem] font-normal leading-tight text-[var(--heading)] sm:mt-4 sm:text-3xl md:text-5xl">
            Construction Progress & <span className="text-[var(--accent)]">Project Status</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-5 text-[var(--muted)] sm:mt-4 md:text-base md:leading-7">
            Track the current progress of The Medallion Aurum and plan your site visit with
            clarity.
          </p>
        </motion.div>

        <div className="mx-auto mt-5 grid max-w-6xl gap-4 sm:mt-8 lg:grid-cols-[1.3fr_0.82fr] lg:items-stretch">
          <motion.div
            className="construction-media group relative min-h-[300px] overflow-hidden border border-[var(--line)] bg-[var(--glass)] sm:min-h-[340px] lg:min-h-[370px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/hero/hero1.jpg"
              alt="The Medallion Aurum construction progress building view"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
            />
            <div className="construction-corner construction-corner-left" />
            <div className="construction-corner construction-corner-right" />

            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--header)] px-2.5 py-1 text-[9px] font-semibold text-[var(--heading)] backdrop-blur-xl sm:left-4 sm:top-4 sm:px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Updated May 2026
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="progress-ring relative grid h-44 w-44 place-items-center rounded-full sm:h-48 sm:w-48">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
                  <circle className="progress-track" cx="60" cy="60" r="51" />
                  <circle className="progress-value" cx="60" cy="60" r="51" />
                </svg>
                <div className="relative text-center">
                  <p className="construction-percent text-5xl font-normal leading-none text-[var(--heading)] sm:text-[3.4rem]">
                    75<span className="text-[var(--accent)]">%</span>
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--heading)]">
                    Complete
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--header)] px-2.5 py-1 text-[9px] font-semibold text-[var(--heading)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    Work in Progress
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="construction-status-wrap grid gap-4 lg:grid-rows-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <StatusCard
              icon={CalendarDays}
              label="Expected Possession"
              title="March"
              value="2027"
              copy="Defined timeline for confident planning"
              footnote="RERA committed schedule"
            />
            <ProgressCard />
          </motion.div>
        </div>

        <motion.div
          className="loan-panel mx-auto mt-4 w-full max-w-5xl border border-[var(--line)] bg-[var(--glass)] px-3 py-3 backdrop-blur-xl sm:mt-5 sm:px-5 sm:py-4"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <p className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)] bg-[var(--header)] px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)] sm:px-4 sm:py-1.5 sm:text-[9px] sm:tracking-[0.22em]">
              <Home size={12} />
              Home Loan Approved By
            </p>
            <p className="mt-2 text-[10px] font-semibold text-[var(--muted)] sm:text-xs">
              India&apos;s top banks - instant credibility
            </p>
          </div>

          <div className="mx-auto mt-3 grid max-w-3xl grid-cols-3 gap-2 sm:mt-4 sm:gap-2.5">
            {banks.map((bank) => (
              <div
                key={bank}
                className="loan-bank group relative overflow-hidden border border-[var(--line)] bg-[var(--header)] px-1.5 py-1.5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--success)] sm:px-3"
              >
                <div className="absolute inset-0 bg-[var(--success-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="relative text-xs font-semibold text-[var(--heading)]">{bank}</p>
                <p className="relative mt-0.5 inline-flex items-center justify-center gap-1 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.04em] text-[var(--success)] sm:mt-1 sm:text-[10px]">
                  <CheckCircle2 size={11} />
                  Approved
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .construction-progress-section {
          min-height: auto;
        }

        .construction-progress-bg {
          background:
            radial-gradient(circle at 18% 18%, rgba(214, 178, 95, 0.12), transparent 30%),
            radial-gradient(circle at 84% 32%, rgba(159, 197, 220, 0.08), transparent 30%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .construction-media,
        .construction-card,
        .loan-panel,
        .loan-bank {
          border-radius: 20px;
        }

        .construction-card {
          min-height: 132px;
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.78), rgba(244, 211, 111, 0.08)),
            rgba(5, 5, 5, 0.72);
          box-shadow: 0 18px 56px rgba(0, 0, 0, 0.16);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .construction-card:hover {
          border-color: var(--gold-dark);
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.78), rgba(244, 211, 111, 0.16), rgba(23, 217, 139, 0.07)),
            rgba(5, 5, 5, 0.72);
          transform: translateY(-3px);
        }

        .loan-bank:hover {
          border-color: var(--success);
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.78), rgba(23, 217, 139, 0.16)),
            rgba(5, 5, 5, 0.72);
          transform: translateY(-3px);
        }

        .construction-corner {
          position: absolute;
          inset-block: 0;
          width: 28%;
          pointer-events: none;
          opacity: 0.68;
          transition: opacity 0.45s ease;
        }

        .construction-corner-left {
          left: 0;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.62), transparent);
        }

        .construction-corner-right {
          right: 0;
          background: linear-gradient(270deg, rgba(0, 0, 0, 0.62), transparent);
        }

        .construction-media:hover .construction-corner {
          opacity: 0.84;
        }

        .progress-ring {
          background: transparent;
          filter: drop-shadow(0 18px 44px rgba(0, 0, 0, 0.28));
        }

        .progress-track,
        .progress-value {
          fill: none;
          stroke-width: 7;
        }

        .progress-track {
          stroke: rgba(255, 255, 255, 0.28);
        }

        .progress-value {
          stroke: var(--accent);
          stroke-linecap: round;
          stroke-dasharray: 320.44;
          stroke-dashoffset: 80.11;
        }

        .construction-stage-track {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 6px;
        }

        .construction-stage-line {
          display: block;
          height: 5px;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.18);
        }

        .construction-stage-line.active {
          background: linear-gradient(90deg, var(--accent), var(--gold-dark));
          box-shadow: 0 0 16px rgba(244, 211, 111, 0.3);
        }

        .construction-stage-labels {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 6px;
        }

        .construction-stage-label {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .construction-stage-label.current {
          color: var(--accent);
        }

        [data-theme="light"] .construction-stage-line {
          background: rgba(5, 5, 5, 0.16);
        }

        [data-theme="light"] .construction-stage-line.active {
          background: linear-gradient(90deg, var(--accent), var(--gold-dark));
        }

        [data-theme="light"] .construction-percent,
        [data-theme="light"] .construction-percent span {
          color: #ffffff;
        }

        [data-theme="light"] .progress-track {
          stroke: rgba(5, 5, 5, 0.22);
        }

        [data-theme="light"] .construction-card,
        [data-theme="light"] .loan-bank {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.78);
        }

        [data-theme="light"] .construction-card:hover {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(244, 211, 111, 0.16), rgba(159, 197, 220, 0.08)),
            rgba(255, 255, 255, 0.82);
        }

        [data-theme="light"] .loan-bank:hover {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(15, 159, 104, 0.16)),
            rgba(255, 255, 255, 0.82);
        }

        @media (max-width: 1023px) {
          .construction-status-wrap {
            display: grid;
            grid-auto-columns: minmax(218px, 66%);
            grid-auto-flow: column;
            overflow-x: auto;
            padding-bottom: 4px;
            scroll-snap-type: x mandatory;
            scrollbar-width: thin;
            scrollbar-color: var(--accent) transparent;
          }

          .construction-card {
            min-height: 150px;
            scroll-snap-align: start;
          }

          .construction-card:hover {
            transform: none;
          }
        }

        @media (max-width: 640px) {
          .construction-progress-section {
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .construction-media,
          .construction-card,
          .loan-panel {
            border-radius: 16px;
          }

          .loan-bank {
            border-radius: 10px;
            min-height: 42px;
          }
        }
      `}</style>
    </section>
  );
}

function StatusCard({ icon: Icon, label, title, value, copy, footnote }) {
  return (
    <div className="construction-card relative overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-dark)] sm:p-4">
      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--glass)] text-[var(--accent)]">
          <Icon size={16} />
        </span>
        <p className="text-right text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          {label}
        </p>
      </div>
      <div className="relative mt-2 text-center sm:mt-3">
        <p className="text-lg font-normal text-[var(--heading)] sm:text-xl">{title}</p>
        <p className="mt-1.5 font-[family:var(--font-display)] text-3xl font-normal leading-none text-[var(--accent)] sm:mt-2 sm:text-4xl">
          {value}
        </p>
        <p className="mx-auto mt-1.5 max-w-xs text-[11px] font-semibold leading-4 text-[var(--muted)] sm:mt-2 sm:text-xs sm:leading-5">
          {copy}
        </p>
        <p className="mt-1.5 text-[9px] font-semibold text-[var(--muted)] sm:mt-2">{footnote}</p>
      </div>
    </div>
  );
}

function ProgressCard() {
  return (
    <div className="construction-card relative overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-dark)] sm:p-4">
      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--glass)] text-[var(--accent)]">
          <Landmark size={16} />
        </span>
        <p className="text-right text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
          Progress
        </p>
      </div>

      <div className="relative mt-4">
        <p className="text-xl font-normal leading-none text-[var(--heading)] sm:text-2xl">
          <span className="text-[var(--accent)]">75%</span> Built
        </p>
        <p className="mt-2 text-[11px] font-semibold text-[var(--muted)] sm:text-xs">
          Structure stage complete
        </p>

        <div className="mt-4" aria-label="Construction progress 75 percent" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
          <div className="construction-stage-track" aria-hidden="true">
            <span className="construction-stage-line active" />
            <span className="construction-stage-line active" />
            <span className="construction-stage-line active" />
            <span className="construction-stage-line" />
          </div>
          <div className="construction-stage-labels mt-2" aria-hidden="true">
            <span className="construction-stage-label">Plan</span>
            <span className="construction-stage-label">Base</span>
            <span className="construction-stage-label current">Structure</span>
            <span className="construction-stage-label">Finish</span>
          </div>
        </div>

        <p className="mt-4 inline-flex items-center gap-1.5 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.08em] text-[var(--success)] sm:gap-2 sm:text-[9px] sm:tracking-[0.16em]">
          <ShieldCheck size={13} />
          Verified construction update
        </p>
      </div>
    </div>
  );
}
