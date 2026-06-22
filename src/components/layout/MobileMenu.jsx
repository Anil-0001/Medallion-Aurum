"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Camera,
  ChevronDown,
  Download,
  Home,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  X,
} from "lucide-react";

const mobileMegaItems = [
  {
    id: "about",
    number: "01",
    label: "About",
    subtitle: "The estate · premium homes",
    href: "#about",
    image: "/about/about.webp",
    eyebrow: "01 · About",
    title: "The Medallion Aurum",
    icon: Building2,
    stats: [
      ["3/4 BHK", "Homes"],
      ["Sector 67", "Mohali"],
      ["Premium", "Address"],
      ["RERA", "Aligned"],
    ],
    links: [
      ["Vaastu-focused planning", "#about"],
      ["Premium tower living", "#developer-snapshot"],
      ["Private residence feel", "#project-essentials"],
      ["Aurum lifestyle story", "#story"],
    ],
    cta: "Our Story",
  },
  {
    id: "plans",
    number: "02",
    label: "Floor Plans",
    subtitle: "3 BHK · 4 BHK · Penthouse",
    href: "#plans-layouts",
    image: "/floor plans/3bhk.jpg",
    eyebrow: "02 · Floor Plans",
    title: "3 BHK · 4 BHK · Penthouse",
    icon: Home,
    pills: ["3 BHK", "4 BHK", "Penthouse"],
    cards: [
      ["3 BHK Unit Plan", "Approx. 2000 Sq.Ft.", "#plans-layouts"],
      ["4 BHK Unit Plan", "Approx. 2600 Sq.Ft.", "#plans-layouts"],
      ["Site Plan", "Community layout", "#plans-layouts"],
    ],
    cta: "View Floor Plans",
  },
  {
    id: "location",
    number: "03",
    label: "Location",
    subtitle: "PR-7 · Airport Road",
    href: "#prime-location",
    image: "/maps/Location.webp",
    eyebrow: "03 · Location",
    title: "PR-7 · Airport Road",
    icon: MapPin,
    cards: [
      ["Mohali Airport", "Quick access", "#prime-location"],
      ["PR-7 · Airport Road", "Direct corridor", "#prime-location"],
      ["Top schools", "Nearby", "#prime-location"],
      ["Hospitals", "Connected", "#prime-location"],
    ],
    cta: "Open In Maps",
  },
  {
    id: "price",
    number: "04",
    label: "Price",
    subtitle: "From Rs 1.54 Cr*",
    href: "#transparent-pricing",
    image: "/price/3bhk.webp",
    eyebrow: "04 · Price",
    title: "From Rs 1.54 Cr*",
    icon: IndianRupee,
    price: "Rs 1.54 Cr*",
    cards: [
      ["1st Floor", "Rs 1.54 Cr*", "#transparent-pricing"],
      ["2nd Floor", "Unlock", "#transparent-pricing"],
      ["4th + Roof", "Unlock", "#transparent-pricing"],
    ],
    cta: "Unlock Floor-wise Prices",
  },
  {
    id: "amenities",
    number: "05",
    label: "Amenities",
    subtitle: "Pool · Gym · Clubhouse",
    href: "#lifestyle-amenities",
    image: "/amenities/club.jpg",
    eyebrow: "05 · Amenities",
    title: "Wellness · Leisure · Calm",
    icon: Trees,
    cards: [
      ["Clubhouse", "Lifestyle"],
      ["Wellness", "Balance"],
      ["Kids Zone", "Family"],
      ["Gated", "Privacy"],
    ],
    cta: "Explore Amenities",
  },
  {
    id: "specification",
    number: "06",
    label: "Specification",
    subtitle: "Imported finishes",
    href: "#premium-specifications",
    image: "/specification/kitchen.webp",
    eyebrow: "06 · Specification",
    title: "Premium finishes",
    icon: ShieldCheck,
    cards: [
      ["Structure", "Modern build"],
      ["Flooring", "Premium finish"],
      ["Kitchen", "Refined utility"],
      ["Electrical", "Modular details"],
    ],
    cta: "View Specs",
  },
  {
    id: "gallery",
    number: "07",
    label: "Gallery",
    subtitle: "Renders & walkthrough",
    href: "#project-gallery",
    image: "/gallery/residence/sunlight.jpg",
    eyebrow: "07 · Gallery",
    title: "Renders & walkthrough",
    icon: Camera,
    thumbnails: [
      "/gallery/residence/sunlight.jpg",
      "/gallery/arrival/arrival1.jpg",
      "/gallery/lifestyle/club.jpg",
    ],
    cta: "Open Gallery",
  },
  {
    id: "downloads",
    number: "08",
    label: "Downloads",
    subtitle: "Brochure · Plans · Price",
    href: "#plans-layouts",
    image: "/plans/site plan.webp",
    eyebrow: "08 · Downloads",
    title: "Brochure · Plans · Pricing",
    icon: Download,
    cards: [
      ["Brochure", "Project overview", "/downloads/medallion-aurum-brochure-premium.pdf"],
      ["Floor plans", "Layout files", "/downloads/medallion-aurum-floor-plan-site-plan-premium.pdf"],
      ["Price plan", "Payment guidance", "/downloads/medallion-aurum-price-list-payment-plan-premium.pdf"],
    ],
    cta: "Get Documents",
  },
  {
    id: "contact",
    number: "09",
    label: "Contact",
    subtitle: "Book a private visit",
    href: "#property-interest",
    image: "/private assistance/assistance.webp",
    eyebrow: "09 · Contact",
    title: "Book a private visit",
    icon: Mail,
    contact: true,
    cta: "Request Callback",
  },
];

export default function MobileMenu({ open, logoSrc, onClose }) {
  const [openItem, setOpenItem] = useState("about");

  const closeAndGo = () => onClose();

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          className="mobile-mega fixed inset-0 z-50 overflow-hidden bg-[#050505] text-white backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(28px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mobile-mega-head">
            <a href="#hero" onClick={closeAndGo}>
              <Image
                src={logoSrc}
                alt="The Medallion Aurum"
                width={170}
                height={82}
                className="h-11 w-auto object-contain"
              />
            </a>
            <button type="button" onClick={onClose} className="mobile-mega-close" aria-label="Close menu">
              <X size={19} />
            </button>
          </div>

          <div className="mobile-mega-top-cta">
            <a href="tel:+919697300066">
              <Phone size={15} />
              Call
            </a>
            <a href="https://wa.me/917009247378">
              WhatsApp
            </a>
          </div>

          <motion.div
            className="mobile-mega-scroll"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
              closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
            }}
          >
            <p className="mobile-mega-kicker">Explore The Estate</p>
            {mobileMegaItems.map((item) => (
              <MobileAccordionItem
                key={item.id}
                item={item}
                open={openItem === item.id}
                onToggle={() => setOpenItem((current) => (current === item.id ? null : item.id))}
                onClose={closeAndGo}
              />
            ))}
            <div className="mobile-mega-rera">RERA · PBRERA-SAS81-PR0685</div>
            <div className="mobile-mega-possession">Possession · Dec 2026</div>
          </motion.div>

          <div className="mobile-mega-bottom-cta">
            <a href="tel:+919697300066">
              <Phone size={16} />
              Call Now
            </a>
            <a href="https://wa.me/917009247378">WhatsApp</a>
          </div>

          <style>{`
            .mobile-mega {
              --mm-gold: var(--accent-strong);
              --mm-green: #10d978;
            }

            .mobile-mega-head {
              display: flex;
              height: 70px;
              align-items: center;
              justify-content: space-between;
              padding: 14px 18px 10px;
            }

            .mobile-mega-close {
              display: inline-flex;
              width: 42px;
              height: 42px;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 999px;
              color: #ffffff;
            }

            .mobile-mega-top-cta {
              display: grid;
              grid-template-columns: 1fr 1fr;
              border-top: 1px solid rgba(214, 178, 95, 0.16);
              border-bottom: 1px solid rgba(214, 178, 95, 0.16);
            }

            .mobile-mega-top-cta a {
              display: inline-flex;
              min-height: 42px;
              align-items: center;
              justify-content: center;
              gap: 8px;
              color: var(--mm-gold);
              font-size: 14px;
              font-weight: 700;
              letter-spacing: 0.14em;
            }

            .mobile-mega-top-cta a + a {
              border-left: 1px solid rgba(16, 217, 120, 0.42);
              color: var(--mm-green);
            }

            .mobile-mega-scroll {
              height: calc(100svh - 182px);
              overflow-y: auto;
              padding: 24px 18px 98px;
            }

            .mobile-mega-kicker {
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 16px;
              color: #ffffff;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.22em;
              text-transform: uppercase;
            }

            .mobile-mega-kicker::before {
              width: 28px;
              height: 1px;
              background: var(--mm-gold);
              content: "";
            }

            .mobile-mega-card {
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.11);
              border-radius: 16px;
              background: rgba(255, 255, 255, 0.025);
              margin-bottom: 10px;
            }

            .mobile-mega-summary {
              display: grid;
              width: 100%;
              grid-template-columns: 30px 42px minmax(0, 1fr) 20px;
              gap: 10px;
              align-items: center;
              min-height: 68px;
              padding: 10px 14px;
              text-align: left;
            }

            .mobile-mega-num {
              color: rgba(255, 255, 255, 0.64);
              font-size: 12px;
              letter-spacing: 0.12em;
            }

            .mobile-mega-icon {
              display: inline-flex;
              width: 40px;
              height: 40px;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(214, 178, 95, 0.42);
              border-radius: 9px;
              color: var(--mm-gold);
            }

            .mobile-mega-title {
              display: block;
              color: #ffffff;
              font-family: var(--font-display);
              font-size: 19px;
              font-style: italic;
              font-weight: 600;
              line-height: 1.08;
            }

            .mobile-mega-sub {
              display: block;
              margin-top: 5px;
              color: rgba(255, 255, 255, 0.62);
              font-size: 12px;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .mobile-mega-chevron {
              color: var(--mm-gold);
            }

            .mobile-mega-body {
              padding: 0 16px 16px;
            }

            .mobile-mega-hero {
              position: relative;
              min-height: 140px;
              overflow: hidden;
              border-radius: 10px;
              margin-bottom: 12px;
            }

            .mobile-mega-hero img {
              object-fit: cover;
            }

            .mobile-mega-hero::after {
              position: absolute;
              inset: 0;
              background:
                linear-gradient(90deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.16)),
                linear-gradient(0deg, rgba(0, 0, 0, 0.6), transparent 60%);
              content: "";
            }

            .mobile-mega-hero-copy {
              position: absolute;
              z-index: 1;
              left: 13px;
              right: 13px;
              bottom: 13px;
            }

            .mobile-mega-hero-copy span {
              color: var(--mm-gold);
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 0.18em;
              text-transform: uppercase;
            }

            .mobile-mega-hero-copy h3 {
              margin-top: 7px;
              color: #ffffff;
              font-family: var(--font-display);
              font-size: 23px;
              font-weight: 600;
              line-height: 1.08;
            }

            .mobile-mega-stats,
            .mobile-mega-chip-row,
            .mobile-mega-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 8px;
              margin-top: 12px;
            }

            .mobile-mega-stats {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }

            .mobile-mega-stats div,
            .mobile-mega-chip,
            .mobile-mega-linkcard,
            .mobile-mega-price {
              border: 1px solid rgba(214, 178, 95, 0.22);
              border-radius: 9px;
              background: rgba(255, 255, 255, 0.035);
            }

            .mobile-mega-stats div {
              min-height: 54px;
              padding: 8px 6px;
              text-align: center;
            }

            .mobile-mega-stats strong {
              display: block;
              color: var(--mm-gold);
              font-size: 18px;
              font-weight: 800;
            }

            .mobile-mega-stats span {
              color: rgba(255, 255, 255, 0.58);
              font-size: 10px;
              text-transform: uppercase;
            }

            .mobile-mega-list {
              display: grid;
              gap: 9px;
              margin-top: 13px;
            }

            .mobile-mega-list a,
            .mobile-mega-linkcard {
              color: #ffffff;
              font-size: 13px;
              font-weight: 600;
            }

            .mobile-mega-list a {
              color: rgba(255, 255, 255, 0.9);
            }

            .mobile-mega-list a::before {
              color: var(--mm-gold);
              content: "✓ ";
            }

            .mobile-mega-chip {
              min-height: 34px;
              padding: 8px 10px;
              color: var(--mm-gold);
              font-size: 12px;
              font-weight: 800;
              text-align: center;
            }

            .mobile-mega-linkcard {
              display: flex;
              align-items: center;
              justify-content: space-between;
              min-height: 62px;
              padding: 11px 13px;
            }

            .mobile-mega-linkcard small {
              display: block;
              margin-top: 5px;
              color: rgba(255, 255, 255, 0.58);
              font-size: 12px;
            }

            .mobile-mega-price {
              padding: 14px;
            }

            .mobile-mega-price span {
              color: rgba(255, 255, 255, 0.68);
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.14em;
              text-transform: uppercase;
            }

            .mobile-mega-price strong {
              display: block;
              margin-top: 8px;
              color: var(--mm-gold);
              font-size: 30px;
              font-weight: 800;
            }

            .mobile-mega-thumbs {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 8px;
              margin-top: 12px;
            }

            .mobile-mega-thumb {
              position: relative;
              min-height: 68px;
              overflow: hidden;
              border-radius: 9px;
            }

            .mobile-mega-thumb img {
              object-fit: cover;
            }

            .mobile-mega-cta-link {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              margin-top: 13px;
              color: var(--mm-gold);
              font-size: 13px;
              font-weight: 800;
              letter-spacing: 0.04em;
              text-transform: uppercase;
            }

            .mobile-mega-contact {
              display: grid;
              gap: 10px;
              margin-top: 12px;
            }

            .mobile-mega-contact a {
              border: 1px solid rgba(214, 178, 95, 0.28);
              border-radius: 12px;
              padding: 13px 15px;
              color: #ffffff;
              font-size: 15px;
              font-weight: 800;
            }

            .mobile-mega-contact span {
              display: block;
              color: rgba(255, 255, 255, 0.55);
              font-size: 11px;
              text-transform: uppercase;
            }

            .mobile-mega-rera,
            .mobile-mega-possession {
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              margin-top: 20px;
              padding: 13px;
              color: rgba(255, 255, 255, 0.76);
              text-align: center;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.14em;
              text-transform: uppercase;
            }

            .mobile-mega-possession {
              border: 0;
              margin-top: 10px;
              padding: 8px;
            }

            .mobile-mega-bottom-cta {
              position: fixed;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 2;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              background: linear-gradient(to top, #050505 78%, rgba(5, 5, 5, 0));
              padding: 13px 12px 10px;
            }

            .mobile-mega-bottom-cta a {
              display: inline-flex;
              min-height: 42px;
              align-items: center;
              justify-content: center;
              gap: 8px;
              border-radius: 999px;
              font-size: 14px;
              font-weight: 800;
              text-transform: uppercase;
            }

            .mobile-mega-bottom-cta a:first-child {
              background: var(--mm-gold);
              color: #050505;
            }

            .mobile-mega-bottom-cta a:last-child {
              border: 1px solid var(--mm-green);
              color: var(--mm-green);
            }

            [data-theme="light"] .mobile-mega {
              background: #f7fbff;
              color: var(--heading);
            }

            [data-theme="light"] .mobile-mega-close {
              border-color: rgba(18, 18, 18, 0.14);
              background: rgba(255, 255, 255, 0.72);
              color: var(--heading);
            }

            [data-theme="light"] .mobile-mega-top-cta {
              border-top-color: rgba(154, 117, 39, 0.18);
              border-bottom-color: rgba(154, 117, 39, 0.18);
              background: rgba(255, 255, 255, 0.68);
            }

            [data-theme="light"] .mobile-mega-card {
              border-color: rgba(18, 18, 18, 0.12);
              background:
                linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(244, 211, 111, 0.08)),
                rgba(255, 255, 255, 0.82);
            }

            [data-theme="light"] .mobile-mega-kicker,
            [data-theme="light"] .mobile-mega-title,
            [data-theme="light"] .mobile-mega-linkcard,
            [data-theme="light"] .mobile-mega-list a,
            [data-theme="light"] .mobile-mega-contact a {
              color: var(--heading);
            }

            [data-theme="light"] .mobile-mega-sub,
            [data-theme="light"] .mobile-mega-num,
            [data-theme="light"] .mobile-mega-linkcard small,
            [data-theme="light"] .mobile-mega-stats span,
            [data-theme="light"] .mobile-mega-contact span {
              color: var(--muted);
            }

            [data-theme="light"] .mobile-mega-stats div,
            [data-theme="light"] .mobile-mega-chip,
            [data-theme="light"] .mobile-mega-linkcard,
            [data-theme="light"] .mobile-mega-price,
            [data-theme="light"] .mobile-mega-contact a {
              border-color: rgba(154, 117, 39, 0.22);
              background: rgba(255, 255, 255, 0.72);
            }

            [data-theme="light"] .mobile-mega-icon {
              border-color: rgba(154, 117, 39, 0.42);
              background: rgba(154, 117, 39, 0.06);
            }

            [data-theme="light"] .mobile-mega-hero::after {
              background:
                linear-gradient(90deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.08)),
                linear-gradient(0deg, rgba(0, 0, 0, 0.5), transparent 60%);
            }

            [data-theme="light"] .mobile-mega-rera,
            [data-theme="light"] .mobile-mega-possession {
              border-color: rgba(18, 18, 18, 0.12);
              color: var(--muted);
            }

            [data-theme="light"] .mobile-mega-bottom-cta {
              background: linear-gradient(to top, #f7fbff 78%, rgba(247, 251, 255, 0));
            }

            [data-theme="light"] .mobile-mega-bottom-cta a:first-child {
              background: var(--accent);
              color: #ffffff;
            }

            @media (min-width: 640px) {
              .mobile-mega-scroll {
                width: min(100%, 520px);
                margin-inline: auto;
              }
            }
          `}</style>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function MobileAccordionItem({ item, open, onToggle, onClose }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="mobile-mega-card"
      variants={{
        open: { opacity: 1, y: 0, filter: "blur(0px)" },
        closed: { opacity: 0, y: 18, filter: "blur(7px)" },
      }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <button type="button" className="mobile-mega-summary" onClick={onToggle}>
        <span className="mobile-mega-num">{item.number}</span>
        <span className="mobile-mega-icon">
          <Icon size={18} />
        </span>
        <span>
          <strong className="mobile-mega-title">{item.label}</strong>
          <small className="mobile-mega-sub">{item.subtitle}</small>
        </span>
        <motion.span className="mobile-mega-chevron" animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={17} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className="mobile-mega-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-mega-hero">
              <Image src={item.image} alt="" fill sizes="100vw" />
              <div className="mobile-mega-hero-copy">
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
              </div>
            </div>

            {item.stats ? (
              <div className="mobile-mega-stats">
                {item.stats.map(([value, label]) => (
                  <div key={`${value}-${label}`}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            ) : null}

            {item.pills ? (
              <div className="mobile-mega-chip-row">
                {item.pills.map((pill) => (
                  <span className="mobile-mega-chip" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}

            {item.price ? (
              <div className="mobile-mega-price">
                <span>Starting Price</span>
                <strong>{item.price}</strong>
              </div>
            ) : null}

            {item.thumbnails ? (
              <div className="mobile-mega-thumbs">
                {item.thumbnails.map((src) => (
                  <span className="mobile-mega-thumb" key={src}>
                    <Image src={src} alt="" fill sizes="33vw" />
                  </span>
                ))}
              </div>
            ) : null}

            {item.links ? (
              <div className="mobile-mega-list">
                {item.links.map(([label, href]) => (
                  <a href={href} onClick={onClose} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            ) : null}

            {item.cards ? (
              <div className="mobile-mega-grid">
                {item.cards.map(([label, meta, href = item.href]) => (
                  <a className="mobile-mega-linkcard" href={href} onClick={onClose} key={`${label}-${meta}`}>
                    <span>
                      <strong>{label}</strong>
                      <small>{meta}</small>
                    </span>
                    <ChevronDown size={15} style={{ rotate: "-90deg" }} />
                  </a>
                ))}
              </div>
            ) : null}

            {item.contact ? (
              <div className="mobile-mega-contact">
                <a href="tel:+919697300066">
                  <span>Sales</span>
                  +91 96973-00066
                </a>
                <a href="https://wa.me/917009247378">
                  <span>WhatsApp</span>
                  +91 70092-47378
                </a>
              </div>
            ) : null}

            <a href={item.href} className="mobile-mega-cta-link" onClick={onClose}>
              {item.cta}
              <ChevronDown size={16} style={{ rotate: "-90deg" }} />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
