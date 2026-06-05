"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, Menu, Phone } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";
import { navLinks } from "@/data/navLinks";
import { useTheme } from "@/hooks/useTheme";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const visibleLinks = useMemo(() => navLinks, []);
  const logoSrc =
    theme === "dark" ? "/logo/light-logo.webp" : "/logo/The Medallion_Aurum_logo.webp";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 text-white"
        animate={{
          backgroundColor: scrolled ? "var(--header)" : "var(--header-start)",
          boxShadow: scrolled ? "0 18px 60px var(--header-shadow)" : "0 0 0 var(--header-shadow)",
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
                  <NavItem key={`${link.label}-${link.href}`} link={link} />
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
                <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      <MobileMenu open={mobileOpen} logoSrc={logoSrc} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavItem({ link }) {
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
      }}
      onHoverEnd={handleHoverEnd}
      animate={{ y: hovered ? -2 : 0, color: hovered ? "var(--nav-hover)" : "#ffffff" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <span>{link.label}</span>
      <motion.span
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-[var(--nav-hover)]"
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: hovered ? 0.72 : 0.01, ease: [0.22, 1, 0.36, 1] }}
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
