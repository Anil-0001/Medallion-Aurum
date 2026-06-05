import { X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/navLinks";

export default function MobileMenu({ open, logoSrc, onClose }) {
  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-[var(--bg)] px-6 py-5 text-[var(--heading)] backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(28px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(214,178,95,0.18),transparent_34%)]"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="relative flex items-center justify-between"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#hero" onClick={onClose}>
              <Image
                src={logoSrc}
                alt="The Medallion Aurum"
                width={160}
                height={80}
                className="h-10 w-auto object-contain sm:h-11"
              />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--glass)] backdrop-blur-xl"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </motion.div>

          <motion.nav
            className="relative mt-9 grid gap-3 sm:gap-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.075, delayChildren: 0.16 } },
              closed: { transition: { staggerChildren: 0.045, staggerDirection: -1 } },
            }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={`${link.label}-${link.href}`}
                href={link.href}
                onClick={onClose}
                className="border-b border-[var(--line)] pb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--heading)] sm:text-xs sm:tracking-[0.22em]"
                variants={{
                  open: { opacity: 1, x: 0, filter: "blur(0px)" },
                  closed: { opacity: 0, x: -26, filter: "blur(7px)" },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
