import { megaMenuData } from "@/data/megaMenuData";
import { motion } from "framer-motion";

export default function MegaMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <motion.div
      className="absolute right-6 top-[calc(100%+10px)] w-80 overflow-hidden border border-[var(--line)] bg-[var(--glass)] p-4 text-[var(--heading)] shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: -12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.96 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
        Menu
      </p>
      <div className="grid gap-1">
        {megaMenuData.map((item, index) => (
          <motion.a
            key={`${item.label}-${item.href}`}
            href={item.href}
            onClick={onClose}
            className="group relative border-b border-[var(--line)] py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--heading)] last:border-b-0"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04, duration: 0.26 }}
            whileHover={{ x: 8, color: "var(--nav-hover)" }}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--nav-hover)] transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
