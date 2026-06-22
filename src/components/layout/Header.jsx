"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Camera,
  Download,
  Gem,
  Home,
  IndianRupee,
  MapPinned,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";
import { navLinks } from "@/data/navLinks";
import { useTheme } from "@/hooks/useTheme";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hiddenOnSlider, setHiddenOnSlider] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const { theme } = useTheme();
  const visibleLinks = useMemo(() => navLinks, []);
  const logoSrc =
    theme === "dark" ? "/logo/light-logo.webp" : "/logo/The Medallion_Aurum_logo.webp";
  const goToHero = (event) => {
    event.preventDefault();
    const hero = document.getElementById("hero");

    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const handleMediaChange = () => setIsMobileViewport(media.matches);

    handleMediaChange();
    media.addEventListener("change", handleMediaChange);

    return () => media.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    const slider = document.getElementById("aurum-structured-slider");
    if (!slider) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHiddenOnSlider(entry.isIntersecting && entry.intersectionRatio > 0.42);
      },
      { threshold: [0, 0.42, 0.72] }
    );

    observer.observe(slider);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 text-white"
        animate={{
          opacity: hiddenOnSlider || (isMobileViewport && !scrolled) ? 0 : 1,
          y: hiddenOnSlider || (isMobileViewport && !scrolled) ? -112 : 0,
          backgroundColor: scrolled ? "var(--header)" : "var(--header-start)",
          boxShadow: scrolled ? "0 18px 60px var(--header-shadow)" : "0 0 0 var(--header-shadow)",
        }}
        style={{
          pointerEvents: hiddenOnSlider || (isMobileViewport && !scrolled) ? "none" : "auto",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <motion.div
            className="border-b"
            animate={{
              height: scrolled ? 28 : 34,
              backgroundColor: "var(--rera-strip)",
              borderColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-4 text-[9px] uppercase tracking-[0.18em] text-white sm:px-6 sm:text-[11px] sm:tracking-[0.28em] md:justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <BadgeCheck size={13} className="text-[var(--accent-strong)]" />
              <span className="truncate">RERA - PBRERA-SAS81-PR0685</span>
            </div>

            <div className="hidden items-center gap-7 md:flex">
              <a
                href="tel:+919697300066"
                className="flex items-center gap-2 tracking-[0.22em] text-white"
              >
                <Phone size={13} className="text-[var(--accent-strong)]" />
                +91 96973-00066
              </a>
              <a
                href="https://wa.me/917009247378"
                className="rounded-full border border-[var(--blue-accent)] px-4 py-1 text-[var(--blue-accent)]"
              >
                +91 70092-47378
              </a>
            </div>
            </div>
          </motion.div>

          <motion.div
            className="relative border-b"
            animate={{
              backgroundColor: scrolled ? "rgba(0,0,0,0.28)" : "rgba(0,0,0,0)",
              borderColor: scrolled ? "var(--header-glass-border)" : "rgba(255,255,255,0)",
              boxShadow: scrolled ? "0 22px 70px rgba(0,0,0,0.22)" : "0 0 0 rgba(0,0,0,0)",
              backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
              WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 sm:px-6"
              onMouseLeave={() => setActiveMega(null)}
              animate={{ height: scrolled ? 60 : 74 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-11 w-11 flex-col items-start justify-center gap-1.5 text-white lg:hidden"
                aria-label="Open mobile menu"
                whileTap={{ scale: 0.96 }}
              >
                <span className="block h-0.5 w-6 bg-white" />
                <span className="block h-0.5 w-4 bg-white" />
                <span className="block h-0.5 w-6 bg-white" />
              </motion.button>

              <motion.a
                href="#hero"
                onClick={goToHero}
                className="absolute left-1/2 flex -translate-x-1/2 shrink-0 items-center justify-center lg:static lg:translate-x-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={logoSrc}
                  alt="The Medallion Aurum"
                  width={180}
                  height={90}
                  priority
                  className="h-10 w-auto object-contain sm:h-11 md:h-12 lg:h-14"
                />
              </motion.a>

              <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] xl:gap-4 xl:text-xs xl:tracking-[0.18em] lg:flex">
                {visibleLinks.map((link) => (
                  <NavItem
                    key={`${link.label}-${link.href}`}
                    link={link}
                    active={activeMega === link.label}
                    onHover={() => setActiveMega(link.label)}
                  />
                ))}
              </nav>

              <div className="ml-auto flex min-w-0 items-center justify-end gap-6 lg:gap-7">
                <ThemeToggle />
                <motion.button
                  type="button"
                  onClick={() => setMegaOpen((value) => !value)}
                  className="hidden h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] text-white lg:inline-flex"
                  aria-label="Open menu"
                  whileHover={{ scale: 1.08, borderColor: "var(--accent)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Menu size={24} />
                </motion.button>
              </div>

              <AnimatePresence>
                {activeMega ? <HoverMegaPanel key={activeMega} activeLabel={activeMega} /> : null}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      <AnimatePresence>
        <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      </AnimatePresence>
      <MobileMenu open={mobileOpen} logoSrc={logoSrc} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavItem({ link, active, onHover }) {
  const [hovered, setHovered] = useState(false);
  const [sweep, setSweep] = useState(null);

  const handleHoverEnd = () => {
    setHovered(false);
    setSweep(Date.now());
  };

  return (
    <motion.a
      href={link.href}
      className="relative py-1 text-white"
      onHoverStart={() => {
        setSweep(null);
        setHovered(true);
        onHover();
      }}
      onHoverEnd={handleHoverEnd}
      animate={{ y: hovered || active ? -2 : 0, color: hovered || active ? "var(--nav-hover)" : "#ffffff" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <span>{link.label}</span>
      <motion.span
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--nav-hover)]"
        animate={{ scaleX: hovered || active ? 1 : 0, opacity: hovered || active ? 1 : 0 }}
        transition={{ duration: hovered || active ? 0.72 : 0.01, ease: [0.22, 1, 0.36, 1] }}
      />
      {sweep && !hovered ? (
        <motion.span
          key={sweep}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--nav-hover)]"
          initial={{ scaleX: 0, opacity: 0.95 }}
          animate={{ scaleX: 1, opacity: [0.95, 0.85, 0] }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}
    </motion.a>
  );
}

const hoverMegaData = {
  About: {
    eyebrow: "About Medallion",
    title: "A landmark address crafted for premium city living.",
    text: "Discover The Medallion Aurum's vision, location advantage and refined residential character.",
    image: "/about/about.webp",
    cta: "View Story",
    href: "#about",
    stats: [
      ["Sector 67", "Mohali"],
      ["3/4 BHK", "Residences"],
      ["Premium", "Address"],
      ["RERA", "Aligned"],
    ],
    items: [
      { label: "Project overview", meta: "The Medallion Aurum", href: "#about", image: "/about/about.webp", icon: Home },
      { label: "Developer snapshot", meta: "Legacy and trust", href: "#developer-snapshot", image: "/snapshot/snapshot.webp", icon: ShieldCheck },
      { label: "Project essentials", meta: "Key buyer facts", href: "#project-essentials", image: "/brochure essentials/dark mode/brochure.png", icon: Sparkles },
    ],
  },
  Plans: {
    eyebrow: "Residence Planning",
    title: "3 BHK, 4 BHK and penthouse plans with clear layout logic.",
    text: "Review unit plans, site planning and tower-level previews before a private discussion.",
    image: "/plans/3BHK_Medallion_Aurum.webp",
    cta: "View Floor Plans",
    href: "#plans-layouts",
    items: [
      { label: "3 BHK Unit Plan", meta: "Approx. 2000 Sq.Ft.", href: "#plans-layouts", image: "/plans/3BHK_Medallion_Aurum.webp", icon: Home },
      { label: "4 BHK Unit Plan", meta: "Approx. 2600 Sq.Ft.", href: "#plans-layouts", image: "/plans/4BHK_Medallion_Aurum.webp", icon: Building2 },
      { label: "Site Plan", meta: "Community layout", href: "#plans-layouts", image: "/plans/site plan.webp", icon: MapPinned },
      { label: "Tower Plan", meta: "Floor plate preview", href: "#plans-layouts", image: "/plans/unit.webp", icon: Gem },
    ],
  },
  Location: {
    eyebrow: "Connectivity",
    title: "Positioned in Mohali's premium growth corridor.",
    text: "Reach airport routes, retail zones, hospitals, schools and business hubs with ease.",
    image: "/maps/Location.webp",
    cta: "Explore Location",
    href: "#prime-location",
    items: [
      { label: "Sector 67", meta: "Prime Mohali address", href: "#prime-location", image: "/maps/Location.webp", icon: MapPinned },
      { label: "Airport Road", meta: "Fast access", href: "#prime-location", image: "/gallery/arrival/arrival2.jpg", icon: MapPinned },
      { label: "Retail and schools", meta: "Daily convenience", href: "#prime-location", image: "/gallery/arrival/arrival6.jpg", icon: Sparkles },
      { label: "Investment corridor", meta: "Growth potential", href: "#investment-potential", image: "/calculator/calculator.webp", icon: IndianRupee },
    ],
  },
  Price: {
    eyebrow: "Pricing & Investment",
    title: "Unlock floor-wise pricing and payment guidance.",
    text: "Start with visible base pricing, then unlock detailed floor-wise information.",
    image: "/price/3bhk.webp",
    cta: "View Pricing",
    href: "#transparent-pricing",
    items: [
      { label: "3 BHK Starting", meta: "Rs 1.54 Cr*", href: "#transparent-pricing", image: "/price/3bhk.webp", icon: IndianRupee },
      { label: "Floor-wise prices", meta: "Unlock details", href: "#transparent-pricing", image: "/price/4bhk.webp", icon: LockIcon },
      { label: "Payment plan", meta: "Guided discussion", href: "#transparent-pricing", image: "/plans/site plan.webp", icon: Download },
    ],
  },
  Amenities: {
    eyebrow: "Lifestyle Amenities",
    title: "Wellness, leisure and everyday comfort inside the address.",
    text: "Explore clubhouse, wellness, security, green and family lifestyle features.",
    image: "/amenities/club.jpg",
    cta: "Explore Amenities",
    href: "#lifestyle-amenities",
    items: [
      { label: "Clubhouse", meta: "Social lifestyle", href: "#lifestyle-amenities", image: "/amenities/club.jpg", icon: Sparkles },
      { label: "Wellness zones", meta: "Daily balance", href: "#lifestyle-amenities", image: "/amenities/fitness.jpg", icon: Gem },
      { label: "Security", meta: "Gated peace", href: "#lifestyle-amenities", image: "/amenities/cctv.jpg", icon: ShieldCheck },
      { label: "Kids and family", meta: "Thoughtful leisure", href: "#lifestyle-amenities", image: "/amenities/kids play.jpg", icon: Home },
    ],
  },
  Specification: {
    eyebrow: "Specifications",
    title: "Premium finishes and dependable construction details.",
    text: "Review structure, flooring, doors, plumbing, kitchen and electrical specifications.",
    image: "/specification/kitchen.webp",
    cta: "View Specs",
    href: "#premium-specifications",
    items: [
      { label: "Structure", meta: "Modern construction", href: "#premium-specifications", image: "/specification/waredore.webp", icon: Building2 },
      { label: "Flooring", meta: "Premium finish", href: "#premium-specifications", image: "/specification/surface.webp", icon: Gem },
      { label: "Kitchen", meta: "Refined utility", href: "#premium-specifications", image: "/specification/kitchen.webp", icon: Sparkles },
      { label: "Electrical", meta: "Modular details", href: "#premium-specifications", image: "/specification/bathroom.webp", icon: ShieldCheck },
    ],
  },
  Gallery: {
    eyebrow: "Walkthrough",
    title: "Visual story of residences, towers and lifestyle spaces.",
    text: "Hover through the gallery previews and open the complete gallery section.",
    image: "/gallery/arrival/arrival1.jpg",
    cta: "Open Gallery",
    href: "#project-gallery",
    items: [
      { label: "Tower view", meta: "Facade", href: "#project-gallery", image: "/gallery/arrival/arrival1.jpg", icon: Camera },
      { label: "Living spaces", meta: "Interiors", href: "#project-gallery", image: "/gallery/residence/interior.jpg", icon: Camera },
      { label: "Arrival", meta: "Premium entry", href: "#project-gallery", image: "/gallery/arrival/arrival3.jpg", icon: Camera },
      { label: "Lifestyle", meta: "Amenities", href: "#project-gallery", image: "/gallery/lifestyle/club.jpg", icon: Camera },
    ],
  },
  Downloads: {
    eyebrow: "Downloads",
    title: "Brochure, floor plans and price guidance on request.",
    text: "Access project material and plan documents for a more informed conversation.",
    image: "/plans/site plan.webp",
    cta: "View Documents",
    href: "#plans-layouts",
    items: [
      { label: "Brochure", meta: "Project overview", href: "/downloads/medallion-aurum-brochure-premium.pdf", image: "/brochure essentials/dark mode/brochure.png", icon: Download },
      { label: "Floor plans", meta: "Layout clarity", href: "/downloads/medallion-aurum-floor-plan-site-plan-premium.pdf", image: "/brochure essentials/dark mode/Floor Plan & Site Plan.png", icon: Download },
      { label: "Price plan", meta: "Payment guidance", href: "/downloads/medallion-aurum-price-list-payment-plan-premium.pdf", image: "/brochure essentials/dark mode/Price List & Payment Plan.png", icon: IndianRupee },
    ],
  },
  Contact: {
    eyebrow: "Private Visit",
    title: "Let us plan your site visit and pricing walkthrough.",
    text: "Share your interest and the advisory team will help with availability, pricing and visits.",
    image: "/private assistance/assistance.webp",
    cta: "Contact Team",
    href: "#property-interest",
    items: [
      { label: "Book site visit", meta: "Private walkthrough", href: "#property-interest", image: "/private assistance/assistance.webp", icon: Phone },
      { label: "Call expert", meta: "+91 96973-00066", href: "tel:+919697300066", image: "/enquiry/enquiry.jpg", icon: Phone },
      { label: "WhatsApp", meta: "+91 70092-47378", href: "https://wa.me/917009247378", image: "/private assistance/assistance.webp", icon: Phone },
    ],
  },
};

function LockIcon(props) {
  return <ShieldCheck {...props} />;
}

function HoverMegaPanel({ activeLabel }) {
  const data = hoverMegaData[activeLabel] ?? hoverMegaData.About;
  const [previewIndex, setPreviewIndex] = useState(0);
  const preview = data.items[previewIndex]?.image ?? data.image;

  useEffect(() => {
    setPreviewIndex(0);
  }, [activeLabel]);

  return (
    <motion.div
      className="header-hover-mega absolute left-5 right-5 top-full hidden overflow-hidden border lg:grid"
      initial={{ opacity: 0, y: -16, scale: 0.985, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -12, scale: 0.985, filter: "blur(8px)" }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mega-visual">
        <Image
          key={preview}
          src={preview}
          alt=""
          fill
          sizes="44vw"
          className="mega-visual-img"
        />
        <div className="mega-visual-shade" />
        <div className="mega-visual-copy">
          <span>{data.eyebrow}</span>
          <h3>{data.title}</h3>
          <a href={data.href}>{data.cta}</a>
        </div>
      </div>

      <div className="mega-content">
        <span className="mega-kicker">{data.eyebrow}</span>
        <h3>{data.title}</h3>
        <p>{data.text}</p>

        {data.stats ? (
          <div className="mega-stats">
            {data.stats.map(([value, label]) => (
              <div key={`${value}-${label}`}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mega-card-grid">
          {data.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="mega-card"
                onMouseEnter={() => setPreviewIndex(index)}
              >
                <span className="mega-card-icon">
                  <Icon size={17} />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.meta}</small>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        .header-hover-mega {
          grid-template-columns: 0.86fr 1fr;
          min-height: 306px;
          border-color: rgba(214, 178, 95, 0.24);
          border-radius: 0 0 16px 16px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(214, 178, 95, 0.055)),
            rgba(5, 5, 5, 0.94);
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(24px);
        }

        .mega-visual {
          position: relative;
          min-height: 306px;
          overflow: hidden;
        }

        .mega-visual-img {
          object-fit: cover;
          transition: transform 0.8s ease, filter 0.8s ease;
        }

        .header-hover-mega:hover .mega-visual-img {
          transform: scale(1.035);
          filter: saturate(1.05) contrast(1.04);
        }

        .mega-visual-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.22)),
            linear-gradient(0deg, rgba(0, 0, 0, 0.58), transparent 58%);
        }

        .mega-visual-copy {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
        }

        .mega-visual-copy span,
        .mega-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--accent-strong);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .mega-visual-copy span::before,
        .mega-kicker::before {
          width: 30px;
          height: 1px;
          background: var(--accent-strong);
          content: "";
        }

        .mega-visual-copy h3,
        .mega-content h3 {
          margin-top: 12px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 400;
          line-height: 1.12;
        }

        .mega-visual-copy a {
          display: inline-flex;
          margin-top: 16px;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
        }

        .mega-content {
          padding: 28px;
        }

        .mega-content p {
          margin-top: 12px;
          color: rgba(255, 255, 255, 0.66);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.6;
        }

        .mega-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 9px;
          margin-top: 17px;
        }

        .mega-stats div,
        .mega-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.22);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.035);
        }

        .mega-stats div {
          min-height: 62px;
          padding: 10px;
          text-align: center;
        }

        .mega-stats strong {
          display: block;
          color: var(--accent-strong);
          font-size: 22px;
          font-weight: 700;
        }

        .mega-stats span {
          display: block;
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.52);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .mega-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 18px;
        }

        .mega-card {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 13px;
          align-items: center;
          min-height: 64px;
          padding: 12px 14px;
          color: #ffffff;
          transition: border-color 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease;
        }

        .mega-card::before {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(214, 178, 95, 0.22), rgba(159, 197, 220, 0.08), transparent 72%);
          opacity: 0;
          transition: opacity 0.28s ease;
          content: "";
        }

        .mega-card:hover {
          border-color: rgba(244, 211, 111, 0.64);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
          transform: translateY(-2px);
        }

        .mega-card:hover::before {
          opacity: 1;
        }

        .mega-card-icon,
        .mega-card span {
          position: relative;
          z-index: 1;
        }

        .mega-card-icon {
          display: inline-flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.34);
          border-radius: 8px;
          color: var(--accent-strong);
        }

        .mega-card strong {
          display: block;
          font-size: 14px;
          font-weight: 700;
        }

        .mega-card small {
          display: block;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 12px;
          font-weight: 600;
        }

        [data-theme="light"] .header-hover-mega {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.9);
          box-shadow: 0 34px 90px rgba(18, 18, 18, 0.14);
        }

        [data-theme="light"] .mega-content h3,
        [data-theme="light"] .mega-card,
        [data-theme="light"] .mega-card strong {
          color: var(--heading);
        }

        [data-theme="light"] .mega-content p,
        [data-theme="light"] .mega-card small,
        [data-theme="light"] .mega-stats span {
          color: var(--muted);
        }

        [data-theme="light"] .mega-stats div,
        [data-theme="light"] .mega-card {
          background: rgba(255, 255, 255, 0.72);
        }
      `}</style>
    </motion.div>
  );
}
