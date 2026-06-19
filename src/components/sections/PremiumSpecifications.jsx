"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Expand, ShieldCheck, X } from "lucide-react";

const specs = [
  {
    code: "MK",
    title: "Modern Modular Kitchen",
    text: "Matte shutters, refined backsplash planning and concealed task lighting.",
    image: "/hero/hero1.jpg",
    brandsUsed: "Hettich, Kajaria, Jaquar",
    details: [
      { label: "Storage", value: "Modular cabinetry with practical day-to-day storage planning" },
      { label: "Counter & Backsplash", value: "Premium counter surface with refined backsplash finish" },
      { label: "Lighting", value: "Concealed task lighting for a clean working zone" },
      { label: "Fittings", value: "Durable kitchen fittings aligned with premium home use" },
    ],
  },
  {
    code: "LB",
    title: "Luxury Bathroom",
    text: "Premium fittings, elegant surfaces and hotel-inspired private comfort.",
    image: "/hero/hero2.jpg",
    brandsUsed: "Jaquar, Kajaria, Legrand",
    details: [
      { label: "Sanitaryware", value: "Premium WC, wash basin and bathroom fixture provision" },
      { label: "Vanity Counter", value: "Stone or wood-finish vanity slab with under-counter storage" },
      { label: "Wall & Floor Tiles", value: "Designer wall tiles with anti-skid bathroom floor tiles" },
      { label: "CP Fittings", value: "Branded mixer, shower and towel rail provision" },
    ],
  },
  {
    code: "LW",
    title: "Living & Wardrobe Finish",
    text: "Warm interior finishes selected for durability, calm and daily elegance.",
    image: "/hero/hero3.jpg",
    brandsUsed: "Asian Paints, Hettich, Havells",
    details: [
      { label: "Wall Finish", value: "Premium paint finish selected for refined interior mood" },
      { label: "Wardrobe Hardware", value: "Smooth-use wardrobe hardware and durable fittings" },
      { label: "Electricals", value: "Premium switches and electrical provisions for daily use" },
      { label: "Mood", value: "Warm residential palette with a calmer family-living feel" },
    ],
  },
  {
    code: "FS",
    title: "Flooring & Surface Detail",
    text: "Premium-grade flooring and wall finishes aligned with Aurum standards.",
    image: "/hero/hero4.jpg",
    brandsUsed: "Kajaria, Asian Paints, Havells",
    details: [
      { label: "Flooring", value: "Premium-grade flooring planned for long-term durability" },
      { label: "Surface Finish", value: "Clean wall and surface finish aligned with Aurum standards" },
      { label: "Maintenance", value: "Material choices selected for easy daily upkeep" },
      { label: "Quality", value: "Finish benchmark aligned with approved project standards" },
    ],
  },
];

const brands = [
  { name: "Kajaria", logo: "/brands/kajaria.png" },
  { name: "Jaquar", logo: "/brands/jaquar.png" },
  { name: "Havells", logo: "/brands/havells.svg" },
  { name: "Hettich", logo: "/brands/hettich.svg" },
  { name: "Asian Paints", logo: "/brands/asian-paints.svg" },
  { name: "Legrand", logo: "/brands/legrand.svg" },
];

export default function PremiumSpecifications() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % specs.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!modalItem) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setModalItem(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalItem]);

  const visibleSpecs = useMemo(
    () =>
      specs.map((item, index) => {
        const offset = (index - activeIndex + specs.length) % specs.length;
        const normalizedOffset = offset > specs.length / 2 ? offset - specs.length : offset;
        return { ...item, index, offset: normalizedOffset };
      }),
    [activeIndex]
  );

  return (
    <section
      id="premium-specifications"
      className={`premium-specs-section relative overflow-hidden bg-[var(--bg)] px-5 py-14 text-[var(--text)] sm:px-6 lg:px-8 ${
        modalItem ? "z-[9999]" : "z-20"
      }`}
    >
      <div className="premium-specs-bg absolute inset-0" />

      <div className="mobile-section-width relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="premium-specs-pill mx-auto inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--glass)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] backdrop-blur-xl">
            <ShieldCheck size={14} />
            Quality Proof
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--heading)] md:text-6xl">
            Premium specifications curated for lasting value.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base font-semibold leading-7 text-[var(--muted)]">
            RERA-aligned quality benchmarks, premium-grade finishes and carefully selected
            material categories for a refined residential experience.
          </p>
        </div>

        <div className="premium-specs-stage relative mx-auto mt-8">
          {visibleSpecs.map((item) => (
            <article
              key={item.title}
              className={`premium-spec-card ${item.offset === 0 ? "active" : ""}`}
              style={{
                "--spec-offset": item.offset,
              }}
              aria-hidden={Math.abs(item.offset) > 1}
              onClick={() => {
                if (item.offset === 0) setModalItem(item);
                else setActiveIndex(item.index);
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 36vw, 86vw"
                className="object-cover"
                priority={item.offset === 0}
              />
              <div className="premium-spec-card-overlay" />

              <div className="premium-spec-card-copy">
                <span>{item.code}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <button
                  type="button"
                  aria-label={`View ${item.title} fullscreen`}
                  onClick={(event) => {
                    event.stopPropagation();
                    setModalItem(item);
                  }}
                >
                  <Expand size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {specs.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`premium-spec-dot ${activeIndex === index ? "active" : ""}`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>

        <div className="premium-brands-block mx-auto mt-9">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.38em] text-[var(--heading)]">
            Trusted Brands We Use
          </p>
          <div className="premium-brand-track-wrap mt-5">
            <div className="premium-brand-row">
              {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="premium-brand-item">
                <span>
                  <Image src={brand.logo} alt={`${brand.name} logo`} fill sizes="86px" className="object-contain" />
                </span>
                <strong>{brand.name}</strong>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="premium-notice mx-auto mt-9 border border-[var(--line)] bg-[var(--glass)] p-5 text-center backdrop-blur-xl sm:p-6">
          <h3 className="text-base font-semibold text-[var(--heading)]">
            Brand Equivalency Notice
          </h3>
          <p className="mx-auto mt-3 max-w-5xl text-sm font-semibold leading-7 text-[var(--muted)]">
            Specifications represent The Medallion Aurum premium finish benchmark. Brand names
            indicate intended quality standards for kitchens, bathrooms, fittings, electricals and
            surfaces. Equivalent or superior alternatives may be used only where availability or
            approved procurement requires it, without compromising durability, finish or category
            performance.
          </p>
        </div>
      </div>

      {modalItem ? <SpecModal item={modalItem} onClose={() => setModalItem(null)} /> : null}

      <style>{`
        .premium-specs-section {
          min-height: 100vh;
        }

        .premium-specs-bg {
          background:
            radial-gradient(circle at 50% 8%, color-mix(in srgb, var(--accent) 8%, transparent), transparent 28%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .premium-specs-pill {
          min-height: 30px;
          border-radius: 999px;
        }

        .premium-specs-stage {
          height: 390px;
          max-width: 1200px;
          overflow: hidden;
        }

        .premium-spec-card {
          position: absolute;
          top: 58px;
          left: 50%;
          width: 340px;
          height: 300px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--glass);
          box-shadow: 0 24px 80px color-mix(in srgb, var(--bg) 70%, transparent);
          cursor: pointer;
          opacity: 0.72;
          transform:
            translateX(calc(-50% + (var(--spec-offset) * 425px)))
            scale(1);
          transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease, border-color 0.3s ease;
        }

        .premium-spec-card.active {
          z-index: 4;
          top: 0;
          width: min(462px, 38vw);
          height: 390px;
          border-color: var(--accent);
          opacity: 1;
          transform: translateX(-50%) scale(1);
        }

        .premium-spec-card-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 22%, color-mix(in srgb, var(--bg) 88%, transparent) 100%),
            linear-gradient(90deg, color-mix(in srgb, var(--bg) 34%, transparent), transparent 58%, color-mix(in srgb, var(--bg) 30%, transparent));
        }

        .premium-spec-card:not(.active)::after {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: color-mix(in srgb, var(--bg) 54%, transparent);
          content: "";
        }

        .premium-spec-card-copy {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 2;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 16px;
          align-items: end;
          padding: 28px 32px 34px;
          color: var(--heading);
        }

        .premium-spec-card:not(.active) .premium-spec-card-copy {
          display: none;
        }

        .premium-spec-card img,
        .premium-spec-modal-image img {
          transform: scale(1);
          transition: transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .premium-spec-card:hover img,
        .premium-spec-modal-image:hover img {
          transform: scale(1.08);
        }

        .premium-spec-card-copy > span {
          display: flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--accent);
          border-radius: 12px;
          background: color-mix(in srgb, var(--accent) 18%, transparent);
          color: var(--accent-strong);
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .premium-spec-card-copy h3 {
          color: #fff;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.2;
        }

        .premium-spec-card-copy p {
          margin-top: 10px;
          max-width: 310px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.65;
        }

        .premium-spec-card-copy button {
          display: flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--accent);
          border-radius: 14px;
          background: color-mix(in srgb, var(--bg) 52%, transparent);
          color: var(--accent-strong);
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .premium-spec-card-copy button:hover {
          background: var(--accent);
          color: var(--bg);
        }

        .premium-spec-dot {
          width: 9px;
          height: 9px;
          border: 0;
          border-radius: 999px;
          background: var(--line);
          cursor: pointer;
          transition: width 0.3s ease, background 0.3s ease;
        }

        .premium-spec-dot.active {
          width: 30px;
          background: linear-gradient(90deg, var(--accent-strong), var(--blue-accent), var(--accent));
        }

        .premium-brands-block {
          max-width: 1120px;
        }

        .premium-brand-track-wrap {
          width: 100%;
          overflow: hidden;
        }

        .premium-brand-row {
          display: flex;
          width: max-content;
          min-width: 200%;
          gap: 46px;
          align-items: center;
          animation: premium-brand-marquee 28s linear infinite;
        }

        .premium-brand-item {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 10px;
          align-items: center;
          flex: 0 0 auto;
          min-width: 0;
        }

        .premium-brand-item span {
          position: relative;
          display: block;
          width: 64px;
          height: 24px;
          overflow: hidden;
          border-radius: 6px;
          background: #fff;
        }

        .premium-brand-item span img {
          padding: 4px 8px !important;
        }

        .premium-brand-item strong {
          overflow: hidden;
          color: var(--muted);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.1;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @keyframes premium-brand-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 23px));
          }
        }

        .premium-notice {
          max-width: 1090px;
          border-radius: 10px;
          background:
            linear-gradient(135deg, var(--glass), color-mix(in srgb, var(--accent) 6%, transparent)),
            var(--glass);
        }

        .premium-spec-modal {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--bg) 86%, transparent);
          padding: 18px;
          backdrop-filter: blur(8px);
        }

        .premium-spec-modal-panel {
          position: relative;
          width: min(704px, 100%);
          max-height: min(88vh, 760px);
          overflow: hidden;
          border: 1px solid var(--accent);
          border-radius: 22px;
          background: var(--bg);
          box-shadow: 0 34px 120px color-mix(in srgb, var(--bg) 76%, transparent);
        }

        .premium-spec-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 5;
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--accent);
          border-radius: 14px;
          background: color-mix(in srgb, var(--bg) 58%, transparent);
          color: var(--accent-strong);
          cursor: pointer;
        }

        .premium-spec-modal-body {
          max-height: min(88vh, 760px);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--accent) color-mix(in srgb, var(--line) 54%, transparent);
        }

        .premium-spec-modal-body::-webkit-scrollbar {
          width: 9px;
        }

        .premium-spec-modal-body::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: linear-gradient(180deg, var(--accent-strong), var(--accent));
        }

        .premium-spec-modal-image {
          position: relative;
          height: 330px;
          overflow: hidden;
          background: var(--bg);
        }

        .premium-spec-modal-copy {
          padding: 28px 40px 34px;
        }

        .premium-spec-modal-copy h3 {
          color: var(--heading);
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.1;
        }

        .premium-spec-modal-copy > p {
          margin-top: 16px;
          color: var(--muted);
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.8;
        }

        .premium-spec-modal-box {
          margin-top: 20px;
          border: 1px solid var(--accent);
          border-radius: 10px;
          padding: 12px 16px;
        }

        .premium-spec-modal-box span,
        .premium-spec-detail-card span {
          display: block;
          color: var(--accent-strong);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .premium-spec-modal-box strong {
          display: block;
          margin-top: 7px;
          color: var(--heading);
          font-size: 0.9rem;
        }

        .premium-spec-detail-grid {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .premium-spec-detail-card {
          border: 1px solid var(--line);
          border-radius: 8px;
          background: color-mix(in srgb, var(--bg) 72%, transparent);
          padding: 12px 16px;
        }

        .premium-spec-detail-card p {
          margin-top: 6px;
          color: var(--muted);
          font-size: 0.88rem;
          font-weight: 600;
          line-height: 1.42;
        }

        [data-theme="light"] .premium-spec-card:not(.active)::after {
          background: color-mix(in srgb, var(--bg) 34%, transparent);
        }

        [data-theme="light"] .premium-spec-card-overlay {
          background:
            linear-gradient(180deg, transparent 22%, color-mix(in srgb, #050505 72%, transparent) 100%),
            linear-gradient(90deg, color-mix(in srgb, #050505 18%, transparent), transparent 58%, color-mix(in srgb, #050505 18%, transparent));
        }

        @media (max-width: 1023px) {
          .premium-spec-card {
            width: 300px;
            transform:
              translateX(calc(-50% + (var(--spec-offset) * 320px)))
              scale(0.9);
          }

          .premium-brand-row {
            gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .premium-specs-section {
            padding-top: 38px;
            padding-right: 5px;
            padding-bottom: 28px;
            padding-left: 5px;
          }

          .premium-specs-section .mobile-section-width {
            max-width: 360px;
          }

          .premium-specs-pill {
            min-height: 30px;
            padding: 0 16px;
            gap: 6px;
            font-size: 0.57rem;
            letter-spacing: 0.18em;
          }

          .premium-specs-pill svg {
            width: 12px;
            height: 12px;
          }

          .premium-specs-section h2 {
            margin-top: 18px;
            font-size: 2rem !important;
            line-height: 1.04 !important;
          }

          .premium-specs-section h2 span {
            display: block;
          }

          .premium-specs-section h2 + p {
            margin-top: 12px;
            font-size: 0.84rem;
            line-height: 1.42;
          }

          .premium-specs-stage {
            height: 344px;
            margin-top: 24px;
          }

          .premium-spec-card {
            top: 34px;
            width: 240px;
            height: 244px;
            border-radius: 18px;
            transform:
              translateX(calc(-50% + (var(--spec-offset) * 260px)))
              scale(0.86);
          }

          .premium-spec-card.active {
            top: 0;
            width: min(100%, 326px);
            height: 344px;
          }

          .premium-spec-card-copy {
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            padding: 18px 18px 22px;
          }

          .premium-spec-card-copy > span {
            width: 44px;
            height: 44px;
            border-radius: 10px;
          }

          .premium-spec-card-copy h3 {
            font-size: 0.92rem;
          }

          .premium-spec-card-copy p {
            margin-top: 7px;
            font-size: 0.78rem;
            line-height: 1.45;
          }

          .premium-spec-card-copy button {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }

          .premium-brands-block {
            margin-top: 34px;
          }

          .premium-brands-block > p {
            font-size: 0.65rem;
            letter-spacing: 0.28em;
          }

          .premium-brand-row {
            gap: 22px;
          }

          .premium-brand-item {
            grid-template-columns: 58px 1fr;
            gap: 9px;
          }

          .premium-brand-item span {
            width: 58px;
            height: 22px;
          }

          .premium-brand-item span img {
            padding: 4px 7px !important;
          }

          .premium-brand-item strong {
            font-size: 0.65rem;
          }

          .premium-notice {
            margin-top: 24px;
            padding: 16px;
            text-align: center;
          }

          .premium-notice h3 {
            font-size: 0.9rem;
          }

          .premium-notice p {
            margin-top: 10px;
            font-size: 0.76rem;
            line-height: 1.55;
          }

          .premium-spec-modal {
            padding: 20px 5px;
          }

          .premium-spec-modal-panel {
            width: min(100%, 360px);
            max-height: calc(100dvh - 40px);
            border-radius: 16px;
          }

          .premium-spec-modal-body {
            max-height: calc(100dvh - 40px);
          }

          .premium-spec-modal-close {
            top: 12px;
            right: 12px;
            width: 42px;
            height: 42px;
          }

          .premium-spec-modal-image {
            height: clamp(230px, 72vw, 292px);
          }

          .premium-spec-modal-copy {
            padding: 20px 18px 22px;
          }

          .premium-spec-modal-copy h3 {
            font-size: 1.45rem;
          }

          .premium-spec-modal-copy > p {
            margin-top: 12px;
            font-size: 0.82rem;
            line-height: 1.55;
          }

          .premium-spec-modal-box {
            margin-top: 14px;
            padding: 10px 12px;
          }

          .premium-spec-detail-grid {
            gap: 8px;
            margin-top: 14px;
          }

          .premium-spec-detail-card {
            padding: 10px 12px;
          }

          .premium-spec-detail-card p {
            font-size: 0.78rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </section>
  );
}

function SpecModal({ item, onClose }) {
  return (
    <div className="premium-spec-modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="premium-spec-modal-panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="premium-spec-modal-close" onClick={onClose} aria-label="Close specification preview">
          <X size={22} />
        </button>
        <div className="premium-spec-modal-body">
          <div className="premium-spec-modal-image">
            <Image src={item.image} alt={item.title} fill sizes="min(704px, 100vw)" className="object-cover" />
          </div>
          <div className="premium-spec-modal-copy">
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="premium-spec-modal-box">
              <span>Brands Used</span>
              <strong>{item.brandsUsed}</strong>
            </div>

            <div className="premium-spec-detail-grid">
              {item.details.map((detail) => (
                <div key={detail.label} className="premium-spec-detail-card">
                  <span>{detail.label}</span>
                  <p>{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
