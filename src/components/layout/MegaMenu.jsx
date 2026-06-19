"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  Mail,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

const menuItems = [
  {
    number: "01",
    label: "About",
    eyebrow: "01 · Preview",
    title: "The Medallion Aurum",
    text: "Premium residences in Sector 67, Mohali.",
    quote: "A landmark address shaped around privacy, light and refined everyday living.",
    href: "#about",
    image: "/hero/hero1.jpg",
  },
  {
    number: "02",
    label: "Plans",
    eyebrow: "02 · Preview",
    title: "Floor Plans",
    text: "3 BHK, 4 BHK and penthouse planning.",
    quote: "Review unit, site and tower plans before a guided floor-wise discussion.",
    href: "#plans-layouts",
    image: "/plans/3BHK_Medallion_Aurum.webp",
  },
  {
    number: "03",
    label: "Amenities",
    eyebrow: "03 · Preview",
    title: "Amenities",
    text: "Lifestyle, wellness and family comfort.",
    quote: "Club, leisure, wellness and security spaces designed for daily luxury.",
    href: "#lifestyle-amenities",
    image: "/hero/hero5.jpg",
  },
  {
    number: "04",
    label: "Specifications",
    eyebrow: "04 · Preview",
    title: "Specifications",
    text: "Premium finishes and construction details.",
    quote: "Review the structure, flooring, kitchen, plumbing and electrical specification story.",
    href: "#premium-specifications",
    image: "/hero/hero3.jpg",
  },
  {
    number: "05",
    label: "Gallery",
    eyebrow: "05 · Preview",
    title: "Gallery",
    text: "Renders, interiors and walkthroughs.",
    quote: "A visual preview of residences, arrival moments and lifestyle spaces.",
    href: "#project-gallery",
    image: "/hero/hero2.jpg",
  },
  {
    number: "06",
    label: "Location",
    eyebrow: "06 · Preview",
    title: "Location",
    text: "Sector 67, Mohali connectivity.",
    quote: "Placed for access to airport routes, education, healthcare and business corridors.",
    href: "#prime-location",
    image: "/maps/Location.webp",
  },
  {
    number: "07",
    label: "Downloads",
    eyebrow: "07 · Preview",
    title: "Downloads",
    text: "Brochure, plans and pricing documents.",
    quote: "Access the buyer documents needed for a serious project discussion.",
    href: "#plans-layouts",
    image: "/plans/site plan.jpg",
  },
  {
    number: "08",
    label: "Pricing",
    eyebrow: "08 · Preview",
    title: "Pricing",
    text: "Floor-wise price access.",
    quote: "Unlock current pricing, availability and floor-wise guidance.",
    href: "#transparent-pricing",
    image: "/hero/hero4.jpg",
  },
  {
    number: "09",
    label: "Visit Us",
    eyebrow: "09 · Preview",
    title: "Visit Us",
    text: "Book a private site visit.",
    quote: "Plan a walkthrough with the advisory team and review current inventory.",
    href: "#property-interest",
    image: "/hero/hero5.jpg",
  },
];

export default function MegaMenu({ open, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = menuItems[activeIndex] ?? menuItems[0];
  const firstColumn = menuItems.slice(0, 5);
  const secondColumn = menuItems.slice(5);

  if (!open) return null;

  const handleNavigate = () => {
    onClose();
  };

  return (
    <motion.div
      className="mega-index fixed inset-0 z-[90] overflow-hidden bg-[#050505] text-white"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mega-index-bg" />

      <header className="mega-index-head">
        <a href="#hero" onClick={handleNavigate} className="mega-index-logo">
          <Image
            src="/logo/light-logo.webp"
            alt="The Medallion Aurum"
            width={190}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <div className="mega-index-kicker">
          <span />
          Full Index · 09 Sections
        </div>

        <button type="button" className="mega-index-close" onClick={onClose} aria-label="Close menu">
          <span>Close</span>
          <i>
            <X size={18} />
          </i>
        </button>
      </header>

      <main className="mega-index-main">
        <section className="mega-index-links">
          <div className="mega-index-col">
            <p className="mega-index-group">
              <span />
              Explore
            </p>
            {firstColumn.map((item) => (
              <MegaIndexLink
                key={item.label}
                item={item}
                active={activeItem.label === item.label}
                onHover={() => setActiveIndex(menuItems.findIndex((entry) => entry.label === item.label))}
                onClick={handleNavigate}
              />
            ))}
          </div>

          <div className="mega-index-col">
            <p className="mega-index-group">
              <span />
              Plan Your Visit
            </p>
            {secondColumn.map((item) => (
              <MegaIndexLink
                key={item.label}
                item={item}
                active={activeItem.label === item.label}
                onHover={() => setActiveIndex(menuItems.findIndex((entry) => entry.label === item.label))}
                onClick={handleNavigate}
              />
            ))}
          </div>
        </section>

        <motion.aside
          className="mega-index-preview"
          key={activeItem.label}
          initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mega-preview-card">
            <Image
              src={activeItem.image}
              alt=""
              fill
              sizes="34vw"
              className="mega-preview-image"
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
          </div>
          <p className="mega-preview-quote">"{activeItem.quote}"</p>
        </motion.aside>
      </main>

      <footer className="mega-index-foot">
        <span>
          <ShieldCheck size={15} />
          RERA · PBRERA-SAS81-PR0685
        </span>
        <span>
          <CalendarClock size={15} />
          Possession Dec 2026
        </span>
        <a href="tel:+919697300066">
          <Phone size={15} />
          +91 96973-00066
        </a>
        <a href="https://wa.me/917009247378" className="mega-whatsapp">
          +91 70092-47378
        </a>
        <a href="mailto:info@medallionaurum.in">
          <Mail size={15} />
          info@medallionaurum.in
        </a>
      </footer>

      <style>{`
        .mega-index {
          font-family: var(--font-body);
        }

        .mega-index-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 14% 0%, rgba(214, 178, 95, 0.12), transparent 34%),
            radial-gradient(circle at 82% 18%, rgba(159, 197, 220, 0.08), transparent 30%),
            #050505;
        }

        .mega-index-head,
        .mega-index-main,
        .mega-index-foot {
          position: relative;
          z-index: 1;
        }

        .mega-index-head {
          display: grid;
          grid-template-columns: 260px 1fr 180px;
          align-items: center;
          gap: 20px;
          padding: 34px 46px 24px;
        }

        .mega-index-kicker,
        .mega-index-group {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          justify-self: center;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .mega-index-kicker span,
        .mega-index-group span {
          display: inline-block;
          width: 36px;
          height: 1px;
          background: var(--accent-strong);
        }

        .mega-index-close {
          display: inline-flex;
          align-items: center;
          justify-self: end;
          gap: 14px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .mega-index-close i {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          font-style: normal;
          transition: border-color 0.28s ease, background 0.28s ease, color 0.28s ease;
        }

        .mega-index-close:hover i {
          border-color: rgba(244, 211, 111, 0.74);
          background: rgba(244, 211, 111, 0.12);
          color: var(--accent-strong);
        }

        .mega-index-main {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(330px, 390px);
          gap: 70px;
          align-items: center;
          min-height: calc(100svh - 190px);
          padding: 18px 48px 84px;
        }

        .mega-index-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 72px;
          max-width: 860px;
        }

        .mega-index-group {
          justify-self: start;
          color: var(--accent-strong);
          margin-bottom: 24px;
        }

        .mega-index-link {
          position: relative;
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          align-items: baseline;
          width: 100%;
          gap: 18px;
          border-bottom: 1px solid transparent;
          padding: 7px 0 8px;
          text-align: left;
          color: rgba(255, 255, 255, 0.3);
          transition: border-color 0.28s ease, color 0.28s ease, transform 0.28s ease;
        }

        .mega-index-link span {
          color: rgba(255, 255, 255, 0.46);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .mega-index-link strong {
          font-family: var(--font-display);
          font-size: clamp(2.05rem, 3.1vw, 3.15rem);
          font-weight: 400;
          line-height: 1.08;
        }

        .mega-index-link.active,
        .mega-index-link:hover {
          border-color: rgba(244, 211, 111, 0.74);
          color: var(--accent-strong);
          transform: translateX(8px);
        }

        .mega-index-link.active span,
        .mega-index-link:hover span {
          color: var(--accent-strong);
        }

        .mega-index-preview {
          justify-self: end;
          width: min(100%, 390px);
        }

        .mega-preview-card {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.36);
        }

        .mega-preview-image {
          object-fit: cover;
          transition: transform 0.85s ease, filter 0.85s ease;
        }

        .mega-preview-card:hover .mega-preview-image {
          transform: scale(1.045);
          filter: saturate(1.04) contrast(1.04);
        }

        .mega-preview-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.14)),
            linear-gradient(0deg, rgba(0, 0, 0, 0.72), transparent 62%);
        }

        .mega-preview-copy {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
        }

        .mega-preview-copy span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--accent-strong);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .mega-preview-copy span::before {
          width: 30px;
          height: 1px;
          background: var(--accent-strong);
          content: "";
        }

        .mega-preview-copy h3 {
          margin-top: 13px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 34px;
          font-weight: 400;
          line-height: 1.08;
        }

        .mega-preview-copy p {
          margin-top: 12px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.5;
        }

        .mega-preview-copy a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          margin-top: 22px;
          border-radius: 999px;
          background: var(--accent-strong);
          padding: 0 28px;
          color: #050505;
          font-size: 14px;
          font-weight: 700;
        }

        .mega-preview-quote {
          margin-top: 18px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.55;
        }

        .mega-index-foot {
          position: absolute;
          left: 46px;
          right: 46px;
          bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .mega-index-foot span,
        .mega-index-foot a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .mega-index-foot svg {
          color: var(--accent-strong);
        }

        .mega-whatsapp {
          border: 1px solid var(--success);
          border-radius: 999px;
          padding: 12px 22px;
          color: var(--success);
        }

        [data-theme="light"] .mega-index {
          background: #f7fbff;
          color: var(--heading);
        }

        [data-theme="light"] .mega-index-bg {
          background:
            radial-gradient(circle at 14% 0%, rgba(154, 117, 39, 0.12), transparent 34%),
            radial-gradient(circle at 82% 18%, rgba(111, 152, 180, 0.12), transparent 30%),
            #f7fbff;
        }

        [data-theme="light"] .mega-index-kicker,
        [data-theme="light"] .mega-index-close,
        [data-theme="light"] .mega-index-foot,
        [data-theme="light"] .mega-index-foot a {
          color: var(--heading);
        }

        [data-theme="light"] .mega-index-link {
          color: rgba(18, 18, 18, 0.32);
        }

        [data-theme="light"] .mega-index-link span {
          color: rgba(18, 18, 18, 0.45);
        }

        [data-theme="light"] .mega-index-link.active,
        [data-theme="light"] .mega-index-link:hover {
          color: var(--accent);
          border-color: rgba(154, 117, 39, 0.64);
        }

        [data-theme="light"] .mega-preview-quote {
          color: var(--muted);
        }

        [data-theme="light"] .mega-preview-card {
          border-color: rgba(18, 18, 18, 0.12);
          box-shadow: 0 28px 90px rgba(18, 18, 18, 0.15);
        }

        [data-theme="light"] .mega-whatsapp {
          color: var(--success);
        }
      `}</style>
    </motion.div>
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
