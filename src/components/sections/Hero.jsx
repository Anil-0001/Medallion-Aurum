"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BadgeCheck, MapPin, Plane, ShieldCheck } from "lucide-react";

const heroSlides = [
  {
    image: "/hero/hero1.webp",
    eyebrow: "The Medallion Aurum",
    title: "Premium Low-Rise Living In Mohali",
    highlight: "Premium",
    copy: "A refined residential address shaped around space, privacy, and a calmer way to live.",
  },
  {
    image: "/hero/hero2.webp",
    eyebrow: "PR-7 Airport Road | Sector 67 Mohali",
    title: "Live Connected To PR-7, Airport Road & Mohali",
    highlight: "PR-7",
    copy: "A well-connected luxury address for families who want faster airport access, daily essentials, and calm premium living.",
  },
  {
    image: "/hero/hero3.webp",
    eyebrow: "Club Life | Open Planning",
    title: "Come Home To Light, Volume, Air & Nature",
    highlight: "Light",
    copy: "Inspired by The Medallion brand foundation, every residence is planned to feel open, refined, and deeply connected to landscape.",
  },
  {
    image: "/hero/hero4.webp",
    eyebrow: "3+1 & 4+1 Super Luxury Homes",
    title: "The Sheer Abundance Of Space, Built Into Everyday Life",
    highlight: "Space",
    copy: "Spacious residences, curated amenities, and a premium Sector 67 setting shaped for privacy, presence, and comfort.",
  },
  {
    image: "/hero/hero5.webp",
    eyebrow: "Medallion Aurum Mohali",
    title: "A Golden Address For People Who Notice Everything",
    highlight: "Golden",
    copy: "From arrival to everyday rhythm, each layer is composed for families who expect detail without noise.",
  },
];

const heroChips = [
  "Airport Access",
  "Mohali Growth Belt",
  "Daily Essentials Nearby",
  "RERA Registered",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const activeHeroSlides = isMobileViewport ? heroSlides.slice(0, 3) : heroSlides;
  const slide = activeHeroSlides[activeSlide] ?? activeHeroSlides[0];

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const handleMediaChange = () => setIsMobileViewport(media.matches);

    handleMediaChange();
    media.addEventListener("change", handleMediaChange);

    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % activeHeroSlides.length);
    }, isMobileViewport ? 4000 : 4600);

    return () => window.clearInterval(timer);
  }, [activeHeroSlides.length, isMobileViewport]);

  useEffect(() => {
    setActiveSlide((current) => Math.min(current, activeHeroSlides.length - 1));
  }, [activeHeroSlides.length]);

  return (
    <section id="hero" className="hero-section sticky top-0 z-0 h-[100svh] min-h-[540px] overflow-hidden bg-[var(--bg)] sm:min-h-[620px]">
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.05, ease: "easeInOut" }, scale: { duration: 3.8, ease: [0.22, 1, 0.36, 1] } }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={activeSlide === 0}
            loading={activeSlide === 0 ? "eager" : "lazy"}
            quality={76}
            sizes="100vw"
            className="hero-image object-cover object-[58%_center] sm:object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-side-overlay absolute inset-0" />
      <div className="hero-depth-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-3 pb-7 pt-28 sm:justify-center sm:px-6 sm:pb-24 sm:pt-32 md:pb-24 md:pt-36 lg:px-8">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              className="hero-content-panel"
              key={slide.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-eyebrow inline-flex max-w-full items-center gap-2 border px-3 py-2 backdrop-blur-xl sm:gap-3 sm:px-4">
                <MapPin size={14} className="shrink-0 text-[#f4d36f] sm:size-4" />
                <p className="truncate font-[family:var(--font-body)] text-[9px] font-medium uppercase tracking-[0.2em] text-white sm:text-[10px] md:text-xs">
                  {slide.eyebrow}
                </p>
              </div>

              <h1 className="mt-3 max-w-4xl font-[family:var(--font-display)] text-[1.78rem] font-normal leading-[1.02] text-white sm:mt-4 sm:text-[3.35rem] md:text-[4.15rem] lg:text-[5.15rem]">
                {renderHighlightedTitle(slide.title, slide.highlight)}
              </h1>
              <p className="hero-copy mt-3 max-w-xl font-[family:var(--font-body)] text-xs font-medium leading-5 text-white sm:mt-5 sm:text-sm md:max-w-2xl md:text-base md:leading-7">
                {slide.copy}
              </p>

              <div className="hero-chip-row mt-3 flex max-w-4xl flex-nowrap gap-2 md:mt-4 md:gap-3">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="hero-chip group relative inline-flex min-h-7 shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-2.5 py-1 text-center font-[family:var(--font-body)] text-[9px] font-medium leading-tight text-white transition-all duration-300 hover:-translate-y-1 sm:min-h-9 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[10px] md:px-3 md:py-2 md:text-[11px] xl:px-4 xl:text-xs"
                  >
                    <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/35 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                    <BadgeCheck size={14} className="shrink-0 text-[#f4d36f]" />
                    <span className="relative">{chip}</span>
                  </span>
                ))}
              </div>

              <div className="hero-cta-row mt-4 flex max-w-xl flex-col gap-2.5 sm:mt-5 sm:flex-row md:gap-3">
                <a
                  href="#project-snapshot"
                  className="hero-primary-cta group relative inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#f4d36f] px-5 text-xs font-semibold text-[#050505] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#f5dc8a] sm:min-h-11 sm:min-w-52 md:px-6 md:text-sm"
                >
                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/45 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  <span className="relative">Check Current Price</span>
                  <ArrowUpRight
                    size={17}
                    className="relative transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
                <a
                  href="https://wa.me/917009247378"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-whatsapp-cta inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#16d877] bg-black/30 px-5 text-xs font-semibold text-[#16d877] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(22,216,119,0.12)] sm:min-h-11 sm:min-w-48 md:px-6 md:text-sm"
                >
                  <WhatsAppIcon className="h-[17px] w-[17px]" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hero-controls absolute left-1/2 top-3 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-7 sm:top-auto md:bottom-9">
        <Plane size={18} className="hero-control-icon text-[#f4d36f]" />
        {activeHeroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActiveSlide(index)}
            className="group flex h-4 w-14 items-center sm:h-5 sm:w-8 md:w-12"
            aria-label={`Show hero slide ${index + 1}`}
          >
            <span className="relative h-1 w-full overflow-hidden rounded-full bg-white/35 transition-colors group-hover:bg-white/55">
              {index === activeSlide ? (
                <motion.span
                  key={`${activeSlide}-${item.image}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-[#f4d36f]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: isMobileViewport ? 4 : 4.6, ease: "linear" }}
                />
              ) : null}
            </span>
          </button>
        ))}
        <ShieldCheck size={18} className="hero-control-icon text-[#f4d36f]" />
      </div>

      <style>{`
        .hero-image {
          filter: saturate(1.02) contrast(1.02);
        }

        .hero-side-overlay {
          background:
            linear-gradient(90deg, rgba(5, 5, 5, 0.44), rgba(5, 5, 5, 0.08) 48%, rgba(5, 5, 5, 0.24)),
            radial-gradient(circle at 18% 50%, rgba(244, 211, 111, 0.08), transparent 36%);
        }

        .hero-depth-overlay {
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.28), transparent 42%, rgba(5, 5, 5, 0.46)),
            linear-gradient(0deg, rgba(5, 5, 5, 0.1), transparent 44%);
        }

        .hero-eyebrow {
          border-color: rgba(244, 211, 111, 0.36);
          background: rgba(5, 5, 5, 0.32);
        }

        .hero-copy {
          text-shadow: 0 14px 38px rgba(0, 0, 0, 0.48);
        }

        .hero-chip {
          border-color: rgba(244, 211, 111, 0.54);
          background: rgba(5, 5, 5, 0.32);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .hero-chip:hover {
          border-color: rgba(244, 211, 111, 0.86);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.22), rgba(159, 197, 220, 0.08)),
            rgba(5, 5, 5, 0.42);
        }

        .hero-controls {
          border: 1px solid rgba(244, 211, 111, 0.24);
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.24);
          padding: 8px 12px;
          backdrop-filter: blur(16px);
        }

        [data-theme="light"] .hero-image {
          filter: saturate(1.02) contrast(1.02);
        }

        [data-theme="light"] .hero-side-overlay {
          background:
            linear-gradient(90deg, rgba(5, 5, 5, 0.16), rgba(5, 5, 5, 0.02) 52%, rgba(5, 5, 5, 0.08)),
            radial-gradient(circle at 18% 50%, rgba(244, 211, 111, 0.04), transparent 34%);
        }

        [data-theme="light"] .hero-depth-overlay {
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.08), transparent 44%, rgba(5, 5, 5, 0.18)),
            linear-gradient(0deg, rgba(5, 5, 5, 0.04), transparent 42%);
        }

        @media (max-width: 640px) {
          .hero-section {
            min-height: 540px;
          }

          .hero-content-panel {
            width: min(100%, 340px);
            margin-inline: auto;
            border: 1px solid rgba(244, 211, 111, 0.18);
            border-radius: 20px;
            background: rgba(5, 5, 5, 0.34);
            box-shadow:
              0 18px 42px rgba(0, 0, 0, 0.28),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
            padding: 14px 14px 13px;
            backdrop-filter: none;
          }

          .hero-eyebrow {
            border-color: transparent;
            background: transparent;
            padding: 0;
            backdrop-filter: none;
          }

          .hero-copy {
            display: none;
          }

          .hero-chip-row {
            max-width: none;
          }

          .hero-chip:nth-child(n + 3) {
            display: none;
          }

          .hero-chip {
            flex: 1 1 0;
            min-width: 0;
          }

          .hero-side-overlay {
            background:
              linear-gradient(180deg, rgba(5, 5, 5, 0.04), rgba(5, 5, 5, 0.08) 42%, rgba(5, 5, 5, 0.28)),
              linear-gradient(90deg, rgba(5, 5, 5, 0.1), rgba(5, 5, 5, 0.02));
          }

          [data-theme="light"] .hero-side-overlay {
            background:
              linear-gradient(180deg, rgba(5, 5, 5, 0.04), rgba(5, 5, 5, 0.07) 44%, rgba(5, 5, 5, 0.18)),
              linear-gradient(90deg, rgba(5, 5, 5, 0.08), rgba(5, 5, 5, 0.02));
          }

          [data-theme="light"] .hero-depth-overlay {
            background:
              linear-gradient(180deg, rgba(5, 5, 5, 0.04), transparent 48%, rgba(5, 5, 5, 0.12));
          }

          .hero-controls {
            width: calc(100% - 24px);
            justify-content: center;
            gap: 8px;
            border: 1px solid rgba(244, 211, 111, 0.24);
            background: rgba(5, 5, 5, 0.24);
            padding: 7px 10px;
            backdrop-filter: blur(16px);
          }

          .hero-control-icon {
            display: block;
            width: 15px;
            height: 15px;
          }

          .hero-controls button {
            flex: 1 1 0;
            width: auto;
            max-width: none;
          }

          .hero-cta-row {
            align-items: center;
          }

          .hero-primary-cta {
            width: min(100%, 250px);
            min-height: 38px;
          }

          .hero-whatsapp-cta {
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

function renderHighlightedTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const [before, after] = title.split(highlight);

  return (
    <>
      {before}
      <span className="text-[#f4d36f]">{highlight}</span>
      {after}
    </>
  );
}
