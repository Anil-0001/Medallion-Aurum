"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  IndianRupee,
  LayoutGrid,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const essentials = [
  {
    title: "Brochure",
    copy: "Project overview, highlights and lifestyle",
    image: "/structslider/struct4.jpg",
    href: "/downloads/medallion-aurum-brochure.txt",
    fileName: "The-Medallion-Aurum-Brochure.txt",
    icon: FileText,
  },
  {
    title: "Floor Plan & Site Plan",
    copy: "Layout clarity and planning structure",
    image: "/structslider/struct3.jpg",
    href: "/downloads/medallion-aurum-floor-plan-site-plan.txt",
    fileName: "The-Medallion-Aurum-Floor-Plan-Site-Plan.txt",
    icon: LayoutGrid,
  },
  {
    title: "Price List & Payment Plan",
    copy: "Current pricing and payment structure",
    image: "/hero/hero2.jpg",
    href: "/downloads/medallion-aurum-price-payment-plan.txt",
    fileName: "The-Medallion-Aurum-Price-Payment-Plan.txt",
    icon: IndianRupee,
  },
];

const trustPoints = [
  { label: "RERA Approved", icon: ShieldCheck },
  { label: "Instant WhatsApp", icon: MessageCircle },
];

export default function ProjectEssentials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="project-essentials"
      className="project-essentials relative isolate overflow-hidden bg-[var(--bg)] px-5 py-12 text-[var(--text)] sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="essentials-glow absolute inset-0 -z-10" />

      <div className="mobile-section-width relative mx-auto w-full max-w-7xl">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto inline-flex min-h-7 items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Private Concierge Access
          </p>
          <h2 className="mt-5 font-[family:var(--font-display)] text-[clamp(2.1rem,5vw,4.5rem)] font-normal leading-[1.02] text-[var(--heading)]">
            Project Essentials,{" "}
            <span className="text-[var(--accent-strong)]">Handed to You</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Choose what you need and receive project details instantly for a clearer Aurum
            ownership decision.
          </p>
        </motion.div>

        <motion.div
          className="essentials-shell mx-auto mt-8 grid w-full max-w-6xl overflow-hidden border border-[var(--line)] lg:grid-cols-[1.08fr_0.92fr]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="essentials-media relative flex min-h-[285px] items-center justify-center overflow-hidden p-4 sm:min-h-[340px] sm:p-6 lg:min-h-[430px] lg:p-9">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--glass),transparent_46%)] opacity-60" />
            <div className="essentials-frame relative aspect-[1.38/1] w-full max-w-[540px] overflow-hidden border border-[var(--line)] shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
              {essentials.map((item, index) => (
                <Image
                  key={item.title}
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className={`object-cover transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-[1.04] opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.36))]" />
            </div>
          </div>

          <div className="essentials-panel relative flex min-h-[360px] flex-col justify-center p-5 sm:p-7 lg:min-h-[430px]">
            <h3 className="font-[family:var(--font-display)] text-3xl font-normal leading-tight text-[var(--heading)] sm:text-4xl">
              Choose what you need
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--muted)]">
              A private advisor will share your selected document with complete discretion.
            </p>

            <div className="mt-5 grid gap-4">
              {essentials.map((item, index) => {
                const Icon = item.icon;
                const selected = activeIndex === index;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    download={item.fileName}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onTouchStart={() => setActiveIndex(index)}
                    className={`essential-option group relative grid min-h-[60px] grid-cols-[36px_1fr_auto] items-center gap-3 overflow-hidden border bg-[var(--glass)] px-3 py-2.5 text-left transition-all duration-300 sm:grid-cols-[40px_1fr_auto] sm:px-4 ${
                      selected ? "is-active border-[var(--accent)]" : "border-[var(--line)]"
                    }`}
                  >
                    <span className="essential-line absolute left-0 top-1/2 w-1 -translate-y-1/2" />
                    <span className="grid size-9 place-items-center rounded-xl border border-[var(--accent)] bg-[rgba(214,178,95,0.12)] text-[var(--accent)] sm:size-10">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-semibold leading-tight text-[var(--heading)] sm:text-base">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs font-semibold leading-5 text-[var(--muted)]">
                        {item.copy}
                      </span>
                    </span>
                    <span className="essential-get inline-flex min-h-7 items-center gap-1.5 rounded-full border border-[var(--accent)] px-3 text-xs font-semibold text-[var(--accent)] transition-colors duration-300 group-hover:bg-[var(--accent)]">
                      Get
                      <ArrowRight size={15} />
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 border-t border-[var(--line)] pt-5">
              <p className="flex items-center gap-2 text-sm font-semibold leading-6 text-[var(--muted)]">
                <LockKeyhole size={16} className="text-[var(--accent)]" />
                Shared privately with serious buyers
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {trustPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <span
                      key={point.label}
                      className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--glass)] px-4 text-xs font-semibold text-[var(--muted)]"
                    >
                      <Icon size={14} className="text-[var(--accent)]" />
                      {point.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .project-essentials {
          min-height: 100vh;
        }

        .essentials-glow {
          background:
            radial-gradient(circle at 24% 34%, rgba(214, 178, 95, 0.13), transparent 30%),
            linear-gradient(180deg, rgba(5, 5, 5, 0.3), transparent 28%, rgba(5, 5, 5, 0.36));
        }

        .essentials-shell {
          border-radius: 26px;
          background:
            linear-gradient(115deg, rgba(255, 255, 255, 0.025), transparent 46%),
            rgba(5, 5, 5, 0.72);
          box-shadow: 0 30px 110px rgba(0, 0, 0, 0.34);
        }

        .essentials-media {
          background: linear-gradient(145deg, rgba(5, 5, 5, 0.9), rgba(11, 10, 8, 0.78));
        }

        .essentials-panel {
          background:
            radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.1), transparent 34%),
            linear-gradient(145deg, rgba(33, 33, 31, 0.96), rgba(15, 15, 14, 0.96));
        }

        .essentials-frame {
          border-radius: 18px;
          background: var(--header);
        }

        .essential-option {
          border-radius: 16px;
        }

        .essential-option:hover,
        .essential-option:focus-visible,
        .essential-option.is-active {
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
          outline: none;
        }

        .essential-line {
          height: 76%;
        }

        .essential-line::before,
        .essential-line::after {
          content: "";
          position: absolute;
          left: 0;
          width: 100%;
          height: 0;
          background: var(--accent);
          transition: height 0.38s ease;
        }

        .essential-line::before {
          bottom: 50%;
          border-radius: 999px 999px 0 0;
        }

        .essential-line::after {
          top: 50%;
          border-radius: 0 0 999px 999px;
        }

        .essential-option:hover .essential-line::before,
        .essential-option:focus-visible .essential-line::before,
        .essential-option:hover .essential-line::after,
        .essential-option:focus-visible .essential-line::after {
          height: 50%;
        }

        .essential-option:hover .group-hover\\:bg-\\[var\\(--accent\\)\\],
        .essential-option:focus-visible .group-hover\\:bg-\\[var\\(--accent\\)\\] {
          background: var(--accent);
        }

        .essential-option:hover .essential-get,
        .essential-option:focus-visible .essential-get,
        .essential-option.is-active .essential-get {
          background: var(--accent);
          color: #050505;
        }

        [data-theme="light"] .essentials-glow {
          background:
            radial-gradient(circle at 24% 34%, rgba(154, 117, 39, 0.13), transparent 30%),
            linear-gradient(180deg, rgba(247, 251, 255, 0.7), transparent 30%, rgba(247, 251, 255, 0.74));
        }

        [data-theme="light"] .essentials-shell {
          background:
            linear-gradient(115deg, rgba(154, 117, 39, 0.08), transparent 48%),
            rgba(255, 255, 255, 0.78);
          box-shadow: 0 26px 86px rgba(18, 18, 18, 0.12);
        }

        [data-theme="light"] .essentials-media {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.88), rgba(234, 243, 251, 0.72));
        }

        [data-theme="light"] .essentials-panel {
          background:
            radial-gradient(circle at 100% 0%, rgba(154, 117, 39, 0.1), transparent 34%),
            linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(247, 251, 255, 0.94));
        }

        [data-theme="light"] .essential-option:hover .essential-get,
        [data-theme="light"] .essential-option:focus-visible .essential-get,
        [data-theme="light"] .essential-option.is-active .essential-get {
          color: #ffffff;
        }

        @media (max-width: 1023px) {
          .essentials-shell {
            border-radius: 22px;
          }
        }

        @media (max-width: 640px) {
          .project-essentials {
            min-height: auto;
            padding: 34px 5px 42px;
          }

          .mobile-section-width {
            max-width: 360px;
          }

          .project-essentials .mx-auto.max-w-4xl {
            max-width: 310px;
          }

          .project-essentials h2 {
            margin-top: 16px;
            font-size: clamp(2rem, 10vw, 2.55rem) !important;
            line-height: 0.98 !important;
          }

          .project-essentials .mx-auto.mt-4.max-w-2xl {
            margin-top: 12px;
            max-width: 300px;
            font-size: 0.93rem;
            line-height: 1.45;
          }

          .essentials-shell {
            margin-top: 24px;
            border-radius: 20px;
          }

          .essentials-media {
            min-height: auto;
            padding: 10px 14px 6px;
          }

          .essentials-frame {
            aspect-ratio: 1.27 / 1;
            max-width: none;
            border-radius: 14px;
          }

          .essentials-panel {
            min-height: auto;
            padding: 10px 15px 18px;
          }

          .essentials-panel h3 {
            margin: 0;
            padding: 0;
            background: transparent;
            font-size: clamp(1.8rem, 8.4vw, 2.18rem);
            line-height: 0.95;
          }

          .essentials-panel > p {
            margin-top: 7px;
            max-width: 280px;
            font-size: 0.86rem;
            line-height: 1.38;
          }

          .essentials-panel .mt-5.grid {
            margin-top: 12px;
            gap: 9px;
          }

          .essential-option {
            min-height: 78px;
            grid-template-columns: 42px 1fr auto;
            gap: 10px;
            border-radius: 14px;
            padding: 9px 11px;
          }

          .essential-option > span:last-child {
            grid-column: auto;
            min-height: 34px;
            padding: 0 14px;
          }

          .essential-option .size-9 {
            width: 42px;
            height: 42px;
          }

          .essential-option .block.text-\\[15px\\] {
            font-size: 0.95rem;
            line-height: 1.2;
          }

          .essential-option .mt-1.block {
            margin-top: 4px;
            font-size: 0.78rem;
            line-height: 1.18;
          }

          .essentials-panel .mt-5.border-t {
            margin-top: 13px;
            padding-top: 12px;
          }

          .essentials-panel .mt-4.flex {
            margin-top: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .essentials-panel .mt-4.flex > span {
            justify-content: center;
            min-height: 36px;
            padding-inline: 10px;
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
}
