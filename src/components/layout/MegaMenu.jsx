"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarClock,
  Mail,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const menuItems = [
  {
    number: "01",
    group: "Explore",
    label: "The Estate",
    eyebrow: "01 - Preview",
    title: "The Estate",
    text: "Vision, story and the people behind The Medallion Aurum.",
    quote: "A premium address near Mohali's growth corridor with privacy, light and a refined daily ritual.",
    href: "#about",
    image: "/about/about.webp",
  },
  {
    number: "02",
    group: "Explore",
    label: "Residences",
    eyebrow: "02 - Preview",
    title: "Residences",
    text: "3 BHK, 4 BHK and penthouse layouts with clear planning logic.",
    quote: "Low-density living, usable layouts and floor-wise clarity for serious homebuyers.",
    href: "#plans-layouts",
    image: "/plans/3BHK_Medallion_Aurum.webp",
  },
  {
    number: "03",
    group: "Explore",
    label: "Amenities",
    eyebrow: "03 - Preview",
    title: "Amenities",
    text: "Wellness, leisure and calm everyday rituals.",
    quote: "Club, leisure, wellness and security spaces designed for daily luxury.",
    href: "#lifestyle-amenities",
    image: "/amenities/club.jpg",
  },
  {
    number: "04",
    group: "Explore",
    label: "Specifications",
    eyebrow: "04 - Preview",
    title: "Specifications",
    text: "Premium finishes, structure and construction details.",
    quote: "Review flooring, kitchen, doors, plumbing and electrical details before your visit.",
    href: "#premium-specifications",
    image: "/specification/kitchen.webp",
  },
  {
    number: "05",
    group: "Explore",
    label: "Gallery",
    eyebrow: "05 - Preview",
    title: "Gallery",
    text: "Renders, interiors and walkthroughs.",
    quote: "A visual preview of residences, arrival moments and lifestyle spaces.",
    href: "#project-gallery",
    image: "/gallery/arrival/arrival1.jpg",
  },
  {
    number: "06",
    group: "Plan Your Visit",
    label: "Location",
    eyebrow: "06 - Preview",
    title: "Location",
    text: "Sector 67, Mohali connectivity and daily convenience.",
    quote: "Placed for access to airport routes, education, healthcare and business corridors.",
    href: "#prime-location",
    image: "/maps/Location.webp",
  },
  {
    number: "07",
    group: "Plan Your Visit",
    label: "Downloads",
    eyebrow: "07 - Preview",
    title: "Downloads",
    text: "Brochure, floor plans and buyer documents.",
    quote: "Access the project material needed for a more informed discussion.",
    href: "#plans-layouts",
    image: "/plans/site plan.webp",
  },
  {
    number: "08",
    group: "Plan Your Visit",
    label: "Pricing",
    eyebrow: "08 - Preview",
    title: "Pricing",
    text: "Floor-wise pricing, availability and payment guidance.",
    quote: "Unlock current pricing and compare options across unit sizes and floors.",
    href: "#transparent-pricing",
    image: "/price/3bhk.webp",
  },
  {
    number: "09",
    group: "Plan Your Visit",
    label: "Visit Us",
    eyebrow: "09 - Preview",
    title: "Visit Us",
    text: "Schedule a private site visit with the advisory team.",
    quote: "Plan a walkthrough, review inventory and discuss current offers with a specialist.",
    href: "#property-interest",
    image: "/private assistance/assistance.webp",
  },
];

export default function MegaMenu({ open, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const activeItem = menuItems[activeIndex] ?? menuItems[0];
  const firstColumn = menuItems.slice(0, 5);
  const secondColumn = menuItems.slice(5);
  const logoSrc =
    theme === "dark" ? "/logo/light-logo.webp" : "/logo/The Medallion_Aurum_logo.webp";

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) setActiveIndex(0);
  }, [open]);

  if (!open) return null;

  const handleNavigate = () => {
    onClose();
  };

  return (
    <motion.div
      className="mega-index fixed inset-0 z-[120] overflow-hidden"
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.54, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="mega-index-bg"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <header className="mega-index-head">
        <a href="#hero" onClick={handleNavigate} className="mega-index-logo">
          <Image
            src={logoSrc}
            alt="The Medallion Aurum"
            width={190}
            height={84}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <div className="mega-index-kicker">
          <span />
          Full Index - 09 Sections
        </div>

        <button type="button" className="mega-index-close" onClick={onClose} aria-label="Close menu">
          <span>Close</span>
          <i>
            <X size={18} />
          </i>
        </button>
      </header>

      <main className="mega-index-main">
        <section className="mega-index-links" aria-label="Full site index">
          <MegaIndexColumn
            title="Explore"
            items={firstColumn}
            activeItem={activeItem}
            onActivate={(item) => setActiveIndex(menuItems.indexOf(item))}
            onNavigate={handleNavigate}
          />
          <MegaIndexColumn
            title="Plan Your Visit"
            items={secondColumn}
            activeItem={activeItem}
            onActivate={(item) => setActiveIndex(menuItems.indexOf(item))}
            onNavigate={handleNavigate}
          />
        </section>

        <aside className="mega-index-preview" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              className="mega-preview-card"
              key={activeItem.label}
              initial={{ opacity: 0, x: 34, scale: 0.985, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -18, scale: 0.985, filter: "blur(8px)" }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={activeItem.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 32vw, 90vw"
                className="mega-preview-image"
                priority
              />
              <div className="mega-preview-shade" />
              <div className="mega-preview-copy">
                <span>{activeItem.eyebrow}</span>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.text}</p>
                <a href={activeItem.href} onClick={handleNavigate}>
                  Open Section
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.p
            className="mega-preview-quote"
            key={`${activeItem.label}-quote`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.05 }}
          >
            "{activeItem.quote}"
          </motion.p>
        </aside>
      </main>

      <footer className="mega-index-foot">
        <span>
          <ShieldCheck size={15} />
          RERA - PBRERA-SAS81-PR0685
        </span>
        <span>
          <CalendarClock size={15} />
          Possession Dec 2026
        </span>
        <a href="tel:+919697300066">
          <Phone size={15} />
          +91 96973-00066
        </a>
        <a href="https://wa.me/917009247378" className="mega-whatsapp" target="_blank" rel="noreferrer">
          +91 70092-47378
        </a>
        <a href="mailto:info@medallionaurum.in">
          <Mail size={15} />
          info@medallionaurum.in
        </a>
      </footer>

      <style>{`
        .mega-index {
          --menu-bg: #050505;
          --menu-text: #f7f4ee;
          --menu-heading: #ffffff;
          --menu-muted: rgba(255, 255, 255, 0.48);
          --menu-faint: rgba(255, 255, 255, 0.22);
          --menu-card: rgba(255, 255, 255, 0.045);
          --menu-line: rgba(255, 255, 255, 0.12);
          --menu-accent: var(--accent-strong);
          color: var(--menu-text);
          font-family: var(--font-body);
          background: var(--menu-bg);
        }

        .mega-index-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 13% 9%, rgba(214, 178, 95, 0.1), transparent 31%),
            radial-gradient(circle at 85% 18%, rgba(159, 197, 220, 0.07), transparent 28%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.018), transparent 34%),
            var(--menu-bg);
        }

        .mega-index-head,
        .mega-index-main,
        .mega-index-foot {
          position: relative;
          z-index: 1;
        }

        .mega-index-head {
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr) 190px;
          align-items: center;
          gap: 24px;
          padding: clamp(26px, 4vw, 42px) clamp(30px, 3.55vw, 48px) 18px;
        }

        .mega-index-logo {
          display: inline-flex;
          width: max-content;
          align-items: center;
        }

        .mega-index-kicker,
        .mega-index-group {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: var(--menu-text);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.28em;
          line-height: 1;
          text-transform: uppercase;
        }

        .mega-index-kicker {
          justify-self: center;
        }

        .mega-index-kicker span,
        .mega-index-group span {
          display: inline-block;
          width: 30px;
          height: 1px;
          background: var(--menu-accent);
        }

        .mega-index-close {
          display: inline-flex;
          align-items: center;
          justify-self: end;
          gap: 14px;
          color: var(--menu-text);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
        }

        .mega-index-close i {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--menu-line);
          border-radius: 999px;
          color: var(--menu-text);
          font-style: normal;
          transition: border-color 0.28s ease, background 0.28s ease, color 0.28s ease, box-shadow 0.28s ease;
        }

        .mega-index-close:hover {
          color: var(--menu-accent);
        }

        .mega-index-close:hover i {
          border-color: color-mix(in srgb, var(--menu-accent) 72%, transparent);
          background: color-mix(in srgb, var(--menu-accent) 11%, transparent);
          color: var(--menu-accent);
          box-shadow: 0 0 32px color-mix(in srgb, var(--menu-accent) 20%, transparent);
        }

        .mega-index-main {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(330px, 390px);
          gap: clamp(48px, 7vw, 96px);
          align-items: center;
          min-height: calc(100svh - 168px);
          padding: 12px clamp(30px, 3.55vw, 48px) 86px;
        }

        .mega-index-links {
          display: grid;
          grid-template-columns: minmax(310px, 390px) minmax(300px, 390px);
          gap: clamp(56px, 7vw, 98px);
          max-width: 880px;
        }

        .mega-index-group {
          margin-bottom: 24px;
          color: var(--menu-accent);
        }

        .mega-index-link {
          position: relative;
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          align-items: center;
          width: 100%;
          gap: 16px;
          border-bottom: 1px solid transparent;
          padding: 7px 0 9px;
          text-align: left;
          color: var(--menu-faint);
          transition: border-color 0.3s ease, color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
        }

        .mega-index-links:hover .mega-index-link:not(:hover):not(.active) {
          opacity: 0.62;
        }

        .mega-index-link span {
          color: var(--menu-muted);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.17em;
        }

        .mega-index-link strong {
          font-family: var(--font-display);
          font-size: clamp(1.72rem, 2.55vw, 2.55rem);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.08;
          transition: font-style 0.3s ease, transform 0.3s ease;
        }

        .mega-index-link.active,
        .mega-index-link:hover {
          border-color: color-mix(in srgb, var(--menu-accent) 68%, transparent);
          color: var(--menu-accent);
          opacity: 1;
          transform: translateX(7px);
        }

        .mega-index-link.active strong,
        .mega-index-link:hover strong {
          font-style: italic;
        }

        .mega-index-link.active span,
        .mega-index-link:hover span {
          color: var(--menu-accent);
        }

        .mega-index-preview {
          justify-self: end;
          width: min(100%, 390px);
        }

        .mega-preview-card {
          position: relative;
          min-height: min(390px, 58svh);
          overflow: hidden;
          border: 1px solid var(--menu-line);
          border-radius: 18px;
          background: var(--menu-card);
          box-shadow: 0 30px 96px rgba(0, 0, 0, 0.34);
          isolation: isolate;
        }

        .mega-preview-card::after {
          position: absolute;
          inset: auto 26px 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--menu-accent), transparent);
          opacity: 0.7;
          content: "";
        }

        .mega-preview-image {
          object-fit: cover;
          transform: scale(1.01);
          transition: transform 0.9s ease, filter 0.9s ease;
        }

        .mega-preview-card:hover .mega-preview-image {
          transform: scale(1.055);
          filter: saturate(1.08) contrast(1.05);
        }

        .mega-preview-shade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.18)),
            linear-gradient(0deg, rgba(0, 0, 0, 0.76), transparent 62%);
        }

        .mega-preview-copy {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          z-index: 2;
        }

        .mega-preview-copy span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--menu-accent);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .mega-preview-copy span::before {
          width: 30px;
          height: 1px;
          background: var(--menu-accent);
          content: "";
        }

        .mega-preview-copy h3 {
          margin-top: 12px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: clamp(2rem, 3vw, 2.65rem);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.06;
        }

        .mega-preview-copy p {
          margin-top: 12px;
          max-width: 31ch;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
        }

        .mega-preview-copy a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          margin-top: 22px;
          border-radius: 999px;
          background: var(--menu-accent);
          padding: 0 28px;
          color: #050505;
          font-size: 13px;
          font-weight: 700;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .mega-preview-copy a:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 42px color-mix(in srgb, var(--menu-accent) 25%, transparent);
        }

        .mega-preview-quote {
          margin-top: 18px;
          color: var(--menu-muted);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.55;
        }

        .mega-index-foot {
          position: absolute;
          left: clamp(30px, 3.55vw, 48px);
          right: clamp(30px, 3.55vw, 48px);
          bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: var(--menu-text);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .mega-index-foot span,
        .mega-index-foot a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: inherit;
        }

        .mega-index-foot svg {
          color: var(--menu-accent);
        }

        .mega-whatsapp {
          border: 1px solid var(--success);
          border-radius: 999px;
          padding: 11px 20px;
          color: var(--success) !important;
          box-shadow: 0 0 30px var(--success-soft);
        }

        [data-theme="light"] .mega-index {
          --menu-bg: #f7fbff;
          --menu-text: #121212;
          --menu-heading: #050505;
          --menu-muted: rgba(18, 18, 18, 0.52);
          --menu-faint: rgba(18, 18, 18, 0.25);
          --menu-card: rgba(255, 255, 255, 0.72);
          --menu-line: rgba(18, 18, 18, 0.13);
          --menu-accent: var(--accent);
        }

        [data-theme="light"] .mega-index,
        [data-theme="light"] .mega-index-kicker,
        [data-theme="light"] .mega-index-close,
        [data-theme="light"] .mega-index-foot,
        [data-theme="light"] .mega-index-foot a {
          color: #121212;
        }

        [data-theme="light"] .mega-index-link {
          color: rgba(18, 18, 18, 0.28);
        }

        [data-theme="light"] .mega-index-link span {
          color: rgba(18, 18, 18, 0.5);
        }

        [data-theme="light"] .mega-index-link.active,
        [data-theme="light"] .mega-index-link:hover {
          color: var(--menu-accent);
        }

        [data-theme="light"] .mega-index-bg {
          background:
            radial-gradient(circle at 13% 9%, rgba(154, 117, 39, 0.12), transparent 31%),
            radial-gradient(circle at 85% 18%, rgba(111, 152, 180, 0.14), transparent 28%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.72), transparent 34%),
            var(--menu-bg);
        }

        [data-theme="light"] .mega-preview-card {
          box-shadow: 0 30px 96px rgba(18, 18, 18, 0.15);
        }

        [data-theme="light"] .mega-preview-copy h3,
        [data-theme="light"] .mega-preview-copy p {
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          .mega-index-main {
            grid-template-columns: 1fr;
            align-items: start;
            overflow-y: auto;
            padding-bottom: 120px;
          }

          .mega-index-preview {
            justify-self: start;
            width: min(100%, 560px);
          }

          .mega-index-foot {
            position: fixed;
          }
        }

        @media (max-width: 767px) {
          .mega-index {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
}

function MegaIndexColumn({ title, items, activeItem, onActivate, onNavigate }) {
  return (
    <div className="mega-index-col">
      <p className="mega-index-group">
        <span />
        {title}
      </p>
      {items.map((item) => (
        <MegaIndexLink
          key={item.label}
          item={item}
          active={activeItem.label === item.label}
          onHover={() => onActivate(item)}
          onClick={onNavigate}
        />
      ))}
    </div>
  );
}

function MegaIndexLink({ item, active, onHover, onClick }) {
  return (
    <a
      href={item.href}
      className={`mega-index-link${active ? " active" : ""}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onClick}
    >
      <span>{item.number}</span>
      <strong>{item.label}</strong>
    </a>
  );
}
