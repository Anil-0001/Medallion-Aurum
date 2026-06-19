"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarCheck,
  ChevronDown,
  FileCheck2,
  Phone,
  ShieldCheck,
  Sparkle,
  X,
} from "lucide-react";

const exploreLinks = [
  { label: "About Project", href: "#about" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Pricing", href: "#transparent-pricing" },
  { label: "Amenities", href: "#lifestyle-amenities" },
  { label: "Gallery", href: "#project-gallery" },
  { label: "FAQs", href: "#aurum-faq" },
];

const essentials = [
  { label: "Configuration", value: "3 & 4 BHK Residences" },
  { label: "RERA No.", value: "PBRERA-SAS81-PR0685" },
  { label: "Location", value: "Sector 67, Mohali" },
];

const tickerItems = [
  "By Turnstone Realty",
  "3 & 4 BHK Residences",
  "Sector 67, Mohali",
  "8.6 Acre Land Parcel",
  "82% Open Area",
  "Mivan Technology",
];

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    body:
      "Contact details shared through this website are used only for project assistance, callback coordination, pricing updates, document sharing, site visit planning, and buyer support. We do not sell personal information.",
  },
  terms: {
    title: "Terms & Conditions",
    body:
      "Project information shown on this website is for initial guidance. Prices, availability, specifications, taxes, charges, possession timelines, and offers may change without prior notice. Buyers should verify all details from official documents before booking.",
  },
  disclaimer: {
    title: "Project Disclaimer",
    body:
      "Images, layouts, amenities, maps, and visuals may be indicative or representational. Final project details are subject to sanctioned plans, RERA filings, developer updates, and applicable approvals.",
  },
  rera: {
    title: "RERA Verification",
    body:
      "The project RERA reference used on this website is PBRERA-SAS81-PR0685. Buyers are advised to independently verify project registration and approval details on the official Punjab RERA portal.",
  },
  booking: {
    title: "Booking Policy",
    body:
      "Any booking decision should be made only after reviewing the latest cost sheet, payment plan, allotment terms, cancellation terms, floor plan, and official project documentation shared by the authorized sales team.",
  },
};

export default function Footer() {
  const [activeLegal, setActiveLegal] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [openFooterPanel, setOpenFooterPanel] = useState("contact");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFooterPanel = (panelId) => {
    setOpenFooterPanel((current) => (current === panelId ? null : panelId));
  };

  return (
    <footer className="site-footer relative overflow-hidden bg-[var(--bg)] px-4 py-12 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="site-footer-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="footer-visit grid gap-7 border-b border-[var(--accent)] pb-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="footer-visit-copy">
            <p className="footer-visit-pill inline-flex min-h-8 items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              <CalendarCheck size={13} />
              Private Site Visit Access
            </p>
            <h2 className="footer-visit-title mt-4 font-[family:var(--font-display)] text-[clamp(2.2rem,5vw,4.4rem)] font-normal leading-none text-[var(--heading)]">
              See The Medallion Aurum
            </h2>
            <p className="footer-visit-subtitle mt-3 text-base font-semibold text-[var(--accent-strong)]">
              Before choosing your residence.
            </p>
            <p className="footer-visit-text mt-5 max-w-3xl text-base leading-7 text-[var(--muted)]">
              Get current inventory, floor-wise pricing, payment plan, brochure, and location
              guidance from the project advisory team.
            </p>
          </div>

          <div className="footer-visit-actions flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href="#site-visit-map"
              className="footer-primary-btn inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent-strong)] px-7 text-sm font-semibold text-[#050505] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
            >
              <CalendarCheck size={17} />
              Book Site Visit
            </a>
            <a
              href="https://wa.me/917009247378"
              className="footer-whatsapp-btn inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--success)] bg-[var(--success-soft)] px-7 text-sm font-semibold text-[var(--success)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--success)] hover:text-[#050505]"
            >
              <WhatsAppIcon className="h-[17px] w-[17px]" />
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="footer-panels grid items-stretch gap-9 py-10 md:grid-cols-2 lg:grid-cols-[1.05fr_0.75fr_0.9fr_0.85fr_1fr]">
          <div className="footer-brand footer-panel-static flex h-full flex-col justify-between text-center lg:text-left">
            <div className="footer-brand-logo mx-auto flex items-center justify-center lg:mx-0 lg:justify-start">
              <Image
                src="/logo/light-logo.webp"
                alt="The Medallion Aurum"
                width={210}
                height={90}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mx-auto mt-5 max-w-xs text-base leading-7 text-[var(--muted)] lg:mx-0">
              Premium group housing in Sector 67, Mohali, planned around open area, refined homes,
              and connected everyday living.
            </p>
            <div className="footer-market-badge mx-auto mt-6 inline-flex flex-col items-center text-center rounded-2xl border border-[var(--accent)] bg-[var(--glass)] px-4 py-3 lg:mx-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Marketed By
              </span>
              <span className="mt-2 text-sm font-semibold text-[var(--accent-strong)]">
                Authorized Project Advisory
              </span>
            </div>
          </div>

          <FooterPanel
            id="explore"
            title="Explore"
            isOpen={openFooterPanel === "explore"}
            onToggle={toggleFooterPanel}
          >
            {exploreLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </FooterPanel>

          <FooterPanel
            id="essentials"
            title="Essentials"
            isOpen={openFooterPanel === "essentials"}
            onToggle={toggleFooterPanel}
          >
            {essentials.map((item) => (
              <div key={item.label}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--heading)]">{item.value}</p>
              </div>
            ))}
          </FooterPanel>

          <FooterPanel
            id="legal"
            title="Legal"
            isOpen={openFooterPanel === "legal"}
            onToggle={toggleFooterPanel}
          >
            {Object.entries(legalContent).map(([key, item]) => (
              <button key={key} type="button" onClick={() => setActiveLegal(key)}>
                {item.title}
              </button>
            ))}
          </FooterPanel>

          <FooterPanel
            id="contact"
            title="Contact"
            isOpen={openFooterPanel === "contact"}
            onToggle={toggleFooterPanel}
            className="footer-contact-panel"
          >
            <div className="grid gap-3">
              <a
                href="tel:+919697300066"
                className="footer-call-btn inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-strong)] transition-all duration-300 hover:-translate-y-1"
              >
                <Phone size={16} />
                Call: +91 96973-00066
              </a>
              <a
                href="https://wa.me/917009247378"
                className="footer-whatsapp-btn inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[var(--success)] bg-[var(--success-soft)] px-5 text-sm font-semibold text-[var(--success)] transition-all duration-300 hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
            <p className="footer-address mt-5 max-w-xs text-sm leading-6 text-[var(--muted)]">
              The Medallion Aurum,<br />
              Sector 67, Mohali,<br />
              Punjab.
            </p>
          </FooterPanel>
        </div>

        <div className="footer-ticker overflow-hidden border-y border-[var(--line)] py-4">
          <div className="footer-ticker-track flex w-max gap-10">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--heading)]"
              >
                <Sparkle size={12} className="text-[var(--accent)]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-bottom mt-7 flex flex-col gap-4 border-t border-[var(--line)] pt-7 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 The Medallion Aurum. All rights reserved.</p>
          <div className="footer-legal-links flex flex-wrap gap-5">
            <button type="button" onClick={() => setActiveLegal("privacy")}>
              Privacy
            </button>
            <button type="button" onClick={() => setActiveLegal("terms")}>
              Terms
            </button>
            <button type="button" onClick={() => setActiveLegal("disclaimer")}>
              Disclaimer
            </button>
            <button type="button" onClick={() => setActiveLegal("rera")}>
              RERA
            </button>
          </div>
          <p className="footer-rera-line md:text-right">
            <BadgeCheck size={13} />
            <span>
              RERA Registered: PBRERA-SAS81-PR0685. Verify details at{" "}
              <a href="https://rera.punjab.gov.in/" target="_blank" rel="noopener noreferrer">
                rera.punjab.gov.in
              </a>
            </span>
          </p>
        </div>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {activeLegal ? (
                <LegalModal item={legalContent[activeLegal]} onClose={() => setActiveLegal(null)} />
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}

      <style>{`
        .site-footer-bg {
          background:
            radial-gradient(circle at 18% 8%, rgba(214, 178, 95, 0.1), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(23, 217, 139, 0.05), transparent 26%),
            linear-gradient(180deg, rgba(5, 5, 5, 0.98), var(--bg));
        }

        .footer-heading {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--heading);
        }

        .footer-column a,
        .footer-column button,
        .site-footer button {
          width: fit-content;
          color: var(--muted);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-column a:hover,
        .footer-column button:hover,
        .site-footer button:hover {
          color: var(--accent);
          transform: translateY(-1px);
        }

        .footer-rera-line a {
          color: var(--heading);
          text-decoration: underline;
          text-underline-offset: 0.2em;
          transition: color 0.25s ease;
        }

        .footer-rera-line a:hover {
          color: var(--accent);
        }

        .footer-ticker-track {
          animation: footer-marquee 24s linear infinite;
        }

        @keyframes footer-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        [data-theme="light"] .site-footer-bg {
          background:
            radial-gradient(circle at 18% 8%, rgba(154, 117, 39, 0.1), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(15, 159, 104, 0.06), transparent 26%),
            linear-gradient(180deg, rgba(247, 251, 255, 0.98), var(--bg));
        }

        [data-theme="light"] .site-footer img {
          filter: invert(1);
        }

        [data-theme="light"] .footer-whatsapp-btn {
          border-color: var(--success);
          background: var(--success);
          color: #ffffff;
        }

        [data-theme="light"] .footer-whatsapp-btn:hover {
          border-color: var(--success);
          background: #ffffff;
          color: var(--success);
        }

        .footer-primary-btn {
          background: linear-gradient(180deg, var(--gold-light), var(--accent));
        }

        .site-footer .footer-contact-panel .footer-whatsapp-btn,
        .site-footer .footer-contact-panel .footer-whatsapp-btn:hover {
          color: var(--success);
        }

        [data-theme="light"] .site-footer .footer-contact-panel .footer-whatsapp-btn {
          color: #ffffff;
        }

        [data-theme="light"] .site-footer .footer-contact-panel .footer-whatsapp-btn:hover {
          color: var(--success);
        }

        .footer-panel-toggle {
          display: none;
        }

        .footer-panel-body {
          margin-top: 1.25rem;
          display: grid;
          gap: 0.75rem;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }

        .footer-contact-panel .footer-panel-body {
          justify-items: center;
        }

        .footer-contact-panel .footer-panel-body > div {
          width: min(100%, 232px);
        }

        .footer-contact-panel .footer-call-btn,
        .footer-contact-panel .footer-whatsapp-btn {
          width: 100%;
          min-width: 232px;
        }

        .footer-brand p {
          font-size: 0.94rem;
          line-height: 1.55;
        }

        .footer-market-badge {
          width: min(100%, 184px);
          min-height: 78px;
          justify-content: center;
        }

        .footer-panel {
          height: 100%;
        }

        .footer-rera-line {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--accent-strong);
          font-weight: 600;
        }

        .footer-address {
          margin-top: 12px;
          font-weight: 500;
          margin-inline: auto;
          text-align: center;
        }

        @media (min-width: 1024px) {
          .footer-panels {
            gap: 2rem;
          }

          .footer-brand-logo,
          .footer-brand p,
          .footer-market-badge {
            flex: 0 0 auto;
          }

          .footer-brand p {
            margin-top: 18px;
          }

          .footer-market-badge {
            margin-top: 18px;
          }

          .footer-contact-panel .footer-panel-body {
            justify-items: center;
            text-align: left;
          }

          .footer-contact-panel .footer-heading {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 1023px) {
          .site-footer {
            padding: 38px 15px 28px;
          }

          .footer-visit {
            justify-items: center;
            gap: 18px;
            padding-bottom: 16px;
            text-align: center;
          }

          .footer-visit-pill {
            min-height: 30px;
            padding-inline: 18px;
            font-size: 0.64rem;
            letter-spacing: 0.16em;
          }

          .footer-visit-title {
            margin-top: 12px;
            font-size: clamp(2rem, 8vw, 3.25rem);
            line-height: 0.98;
          }

          .footer-visit-subtitle {
            margin-top: 6px;
            font-size: 0.98rem;
            color: var(--heading);
          }

          .footer-visit-text {
            margin: 15px auto 0;
            max-width: 320px;
            font-size: 0.94rem;
            font-weight: 600;
            line-height: 1.55;
            color: var(--heading);
          }

          .footer-visit-actions {
            width: min(100%, 270px);
            gap: 12px;
          }

          .footer-primary-btn,
          .footer-whatsapp-btn,
          .footer-call-btn {
            width: 100%;
            min-height: 45px;
            font-size: 0.92rem;
          }

          .footer-primary-btn {
            background: linear-gradient(180deg, var(--gold-light), var(--accent));
          }

          .footer-whatsapp-btn {
            background: transparent;
            color: var(--success);
          }

          .footer-whatsapp-btn:hover {
            background: rgba(1, 32, 16, 0.58);
            color: var(--success);
          }

          .site-footer .footer-contact-panel .footer-whatsapp-btn,
          .site-footer .footer-contact-panel .footer-whatsapp-btn:hover {
            color: var(--success);
          }

          .footer-panels {
            display: block;
            padding-block: 20px 18px;
          }

          .footer-panel-static {
            align-items: center;
            border-bottom: 1px solid var(--accent);
            padding-bottom: 18px;
          }

          .footer-panel {
            border-bottom: 1px solid rgba(214, 178, 95, 0.18);
          }

          .footer-panel + .footer-panel {
            padding-block: 0;
          }

          .site-footer .footer-panel-toggle {
            display: flex;
            min-height: 53px;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            color: var(--heading);
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            padding-inline: 0;
            text-align: left;
            text-transform: uppercase;
          }

          [data-theme="light"] .site-footer .footer-panel-toggle {
            color: #090909;
          }

          .site-footer .footer-panel[data-open="true"] .footer-panel-toggle {
            color: var(--accent);
          }

          .site-footer .footer-panel-toggle span {
            text-align: left;
          }

          .site-footer .footer-panel-toggle svg {
            flex: 0 0 auto;
            transition: transform 0.24s ease;
          }

          .site-footer .footer-panel-toggle[aria-expanded="true"] svg {
            transform: rotate(180deg);
          }

          .footer-panel .footer-heading {
            display: none;
          }

          .footer-panel-body {
            display: none;
            margin-top: 0;
            padding-bottom: 16px;
            justify-items: start;
            gap: 12px;
            text-align: left;
          }

          .footer-panel[data-open="true"] .footer-panel-body {
            display: grid;
          }

          .footer-contact-panel .footer-panel-body {
            justify-items: center;
            gap: 8px;
            text-align: center;
          }

          .footer-contact-panel .footer-panel-toggle {
            justify-content: space-between;
            text-align: left;
          }

          .footer-brand-logo img {
            height: 64px;
            max-width: 230px;
          }

          .footer-brand p {
            max-width: 310px;
            font-size: 0.9rem;
            font-weight: 600;
            line-height: 1.42;
            color: var(--heading);
          }

          .footer-market-badge {
            border-radius: 18px;
            width: 170px;
            min-height: 64px;
            padding: 10px 14px;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
          }

          .footer-market-badge span:first-child {
            font-size: 0.56rem;
            letter-spacing: 0.16em;
          }

          .footer-market-badge span:last-child {
            margin-top: 6px;
            font-size: 0.72rem;
            line-height: 1.2;
          }

          .footer-column a,
          .footer-column button,
          .footer-panel-body > a,
          .footer-panel-body > button {
            width: auto;
            justify-self: start;
            font-weight: 600;
          }

          .footer-contact-panel a,
          .footer-contact-panel button,
          .footer-contact-panel .footer-panel-body > a,
          .footer-contact-panel .footer-panel-body > button {
            justify-self: center;
          }

          .footer-contact-panel .footer-panel-body > div {
            width: min(100%, 236px);
            gap: 10px;
          }

          .footer-contact-panel .footer-call-btn,
          .footer-contact-panel .footer-whatsapp-btn {
            min-height: 40px;
            min-width: 0;
            width: 100%;
            font-size: 0.86rem;
          }

          .footer-address {
            margin-inline: auto;
            margin-top: 4px;
            max-width: 250px;
            font-size: 0.91rem;
            font-weight: 500;
            line-height: 1.42;
            text-align: center;
            color: var(--heading);
          }

          .footer-ticker {
            margin-inline: 0;
            padding-block: 12px;
          }

          .footer-ticker-track {
            gap: 22px;
          }

          .footer-ticker span {
            font-size: 0.62rem;
            letter-spacing: 0.08em;
          }

          .footer-bottom {
            align-items: center;
            gap: 12px;
            margin-top: 20px;
            padding-top: 22px;
            text-align: center;
          }

          .footer-legal-links {
            justify-content: center;
            gap: 18px;
            color: var(--heading);
            font-weight: 700;
          }

          .footer-rera-line {
            justify-content: center;
            font-size: 0.68rem;
            letter-spacing: 0.03em;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterPanel({ id, title, isOpen, onToggle, children, className = "" }) {
  return (
    <div
      className={`footer-column footer-panel ${className}`}
      data-open={isOpen ? "true" : "false"}
    >
      <button
        type="button"
        className="footer-panel-toggle"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown size={18} />
      </button>
      <h3 className="footer-heading">{title}</h3>
      <div className="footer-panel-body">{children}</div>
    </div>
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

function LegalModal({ item, onClose }) {
  useEffect(() => {
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
  }, [onClose]);

  return (
    <motion.div
      className="footer-legal-modal fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/74 px-4 py-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="footer-legal-title"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--accent)] bg-[var(--bg)] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.5)] sm:p-6"
        initial={{ opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(214,178,95,0.14),transparent_38%)]" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--header)] text-[var(--heading)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Close legal information"
        >
          <X size={18} />
        </button>
        <div className="relative">
          <p className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            <FileCheck2 size={13} />
            Legal Information
          </p>
          <h2
            id="footer-legal-title"
            className="mt-3 font-[family:var(--font-display)] text-2xl font-normal text-[var(--heading)]"
          >
            {item.title}
          </h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">{item.body}</p>
          <div className="mt-4 flex items-start gap-3 border-t border-[var(--line)] pt-4 text-xs leading-5 text-[var(--muted)]">
            <ShieldCheck size={18} className="mt-1 shrink-0 text-[var(--accent)]" />
            <span>
              For final confirmation, always review official project documents and written
              communication from the authorized team.
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
