"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BadgeCheck, MapPin, MessageCircle, Plane, ShieldCheck } from "lucide-react";

const heroSlides = [
  {
    image: "/hero/hero1.jpg",
    eyebrow: "The Medallion Aurum",
    title: "Premium Low-Rise Living In Mohali",
    highlight: "Premium",
    copy: "A refined residential address shaped around space, privacy, and a calmer way to live.",
  },
  {
    image: "/hero/hero2.jpg",
    eyebrow: "PR-7 Airport Road | Sector 67 Mohali",
    title: "Live Connected To PR-7, Airport Road & Mohali",
    highlight: "PR-7",
    copy: "A well-connected luxury address for families who want faster airport access, daily essentials, and calm premium living.",
  },
  {
    image: "/hero/hero3.jpg",
    eyebrow: "Club Life | Open Planning",
    title: "Come Home To Light, Volume, Air & Nature",
    highlight: "Light",
    copy: "Inspired by The Medallion brand foundation, every residence is planned to feel open, refined, and deeply connected to landscape.",
  },
  {
    image: "/hero/hero4.jpg",
    eyebrow: "3+1 & 4+1 Super Luxury Homes",
    title: "The Sheer Abundance Of Space, Built Into Everyday Life",
    highlight: "Space",
    copy: "Spacious residences, curated amenities, and a premium Sector 67 setting shaped for privacy, presence, and comfort.",
  },
  {
    image: "/hero/hero5.jpg",
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
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="sticky top-0 z-0 h-screen overflow-hidden bg-[var(--bg)]">
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
            loading={activeSlide === 0 ? "eager" : "eager"}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero-vignette),transparent_58%,var(--hero-vignette))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--hero-panel),transparent_44%,var(--hero-panel))]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:pt-32 md:pb-20 md:pt-36">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex max-w-full items-center gap-2 border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-xl sm:gap-3 sm:px-4">
                <MapPin size={14} className="shrink-0 text-[#f4d36f] sm:size-4" />
                <p className="truncate font-[family:var(--font-body)] text-[9px] font-bold uppercase tracking-[0.22em] text-white sm:text-[10px] md:text-xs">
                  {slide.eyebrow}
                </p>
              </div>

              <h1 className="mt-4 max-w-4xl font-[family:var(--font-display)] text-[clamp(2.6rem,5.6vw,5.2rem)] font-normalssentials nearby e  leading-[0.95] text-white">
                {renderHighlightedTitle(slide.title, slide.highlight)}
              </h1>
              <p className="mt-5 max-w-2xl font-[family:var(--font-body)] text-sm font-bold leading-6 text-white md:text-base md:leading-7">
                {slide.copy}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 md:gap-3">
                {heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#f4d36f]/70 bg-black/35 px-3 py-1.5 font-[family:var(--font-body)] text-[11px] font-bold text-white transition-transform duration-300 hover:-translate-y-1 md:px-4 md:py-2 md:text-xs"
                  >
                    <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/35 opacity-0 blur-sm transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                    <BadgeCheck size={14} className="text-[#f4d36f]" />
                    <span className="relative">{chip}</span>
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row md:gap-3">
                <a
                  href="#project-snapshot"
                  className="group relative inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#f4d36f] px-5 text-xs font-bold text-[#050505] transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#ffe27a] md:min-h-11 md:px-6 md:text-sm"
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
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#18c37e] bg-black/30 px-5 text-xs font-bold text-[#17d98b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0b3d2a]/35 md:min-h-11 md:px-6 md:text-sm"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-10">
        <Plane size={18} className="text-[#f4d36f]" />
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            onClick={() => setActiveSlide(index)}
            className="group flex h-4 w-9 items-center md:w-12"
            aria-label={`Show hero slide ${index + 1}`}
          >
            <span className="relative h-1 w-full overflow-hidden rounded-full bg-white/35 transition-colors group-hover:bg-white/55">
              {index === activeSlide ? (
                <motion.span
                  key={`${activeSlide}-${item.image}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-[#f4d36f]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.6, ease: "linear" }}
                />
              ) : null}
            </span>
          </button>
        ))}
        <ShieldCheck size={18} className="text-[#f4d36f]" />
      </div>
    </section>
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
