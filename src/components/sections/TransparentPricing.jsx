"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Armchair,
  BriefcaseBusiness,
  CalendarClock,
  KeyRound,
  LockOpen,
  Lock,
  Maximize2,
  ShieldCheck,
} from "lucide-react";
import { useLeadCapture } from "@/components/common/LeadCaptureProvider";

const pricingPlans = [
  {
    id: "3bhk",
    label: "3 BHK",
    title: "3 BHK Premium Floor",
    selected: "1st Floor",
    image: "/price/3bhk.webp",
    imageAlt: "Premium living room at The Medallion Aurum",
    stats: {
      area: "3 BHK",
      status: "Under Construction",
      furnishing: "Semi Furnished",
      handover: "December 2026",
    },
    floors: [
      { label: "1st Floor", price: "Rs 1.54 Cr*", visible: true },
      { label: "2nd Floor", price: "Rs 1.49 Cr*", visible: false },
      { label: "3rd Floor", price: "Rs 1.49 Cr*", visible: false },
      { label: "4th + Roof", price: "Rs 1.67 Cr*", visible: false },
    ],
  },
  {
    id: "4bhk",
    label: "4 BHK",
    title: "4 BHK Signature Floor",
    selected: "Premium Floor",
    image: "/price/4bhk.webp",
    imageAlt: "Premium tower facade at The Medallion Aurum",
    stats: {
      area: "4 BHK",
      status: "Under Construction",
      furnishing: "Semi Furnished",
      handover: "December 2026",
    },
    floors: [
      { label: "Premium Floor", price: "On Request", visible: true },
      { label: "Higher Floor", price: "On Request", visible: false },
      { label: "Corner Option", price: "On Request", visible: false },
      { label: "Limited Unit", price: "On Request", visible: false },
    ],
  },
  {
    id: "penthouse",
    label: "Penthouse",
    title: "Penthouse Collection",
    selected: "Sky Residence",
    image: "/price/penthouse.webp",
    imageAlt: "Luxury residence view at The Medallion Aurum",
    stats: {
      area: "Penthouse",
      status: "Limited Options",
      furnishing: "Premium Finish",
      handover: "By Appointment",
    },
    floors: [
      { label: "Sky Residence", price: "On Request", visible: true },
      { label: "Private Deck", price: "On Request", visible: false },
      { label: "View Premium", price: "On Request", visible: false },
      { label: "Final Quote", price: "On Request", visible: false },
    ],
  },
];

const detailCards = [
  { key: "area", label: "Configuration", icon: Maximize2 },
  { key: "status", label: "Status", icon: ShieldCheck },
  { key: "furnishing", label: "Furnishing", icon: Armchair },
  { key: "handover", label: "Handover Date", icon: KeyRound },
];

export default function TransparentPricing() {
  const [activePlanId, setActivePlanId] = useState(pricingPlans[0].id);
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const { hasCapturedLead, captureLead } = useLeadCapture();

  const activePlan = useMemo(
    () => pricingPlans.find((plan) => plan.id === activePlanId) ?? pricingPlans[0],
    [activePlanId]
  );
  const selectedFloor = activePlan.floors[selectedFloorIndex] ?? activePlan.floors[0];
  const selectedFloorUnlocked = hasCapturedLead || selectedFloor.visible;

  const submitUnlockForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "Visitor";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = [
      "Hello, I want to unlock The Medallion Aurum floor-wise pricing.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Interested in: ${activePlan.title}`,
      `Selected floor: ${selectedFloor.label}`,
    ]
      .filter(Boolean)
      .join("\n");

    setIsModalOpen(false);
    captureLead();
    setIsCelebrating(true);
    window.setTimeout(() => setIsCelebrating(false), 1800);
    window.setTimeout(() => {
      window.open(
        `https://wa.me/917009247378?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 2300);
  };

  return (
    <section id="transparent-pricing" className="pricing-section">
      <div className="pricing-shell">
        <div className="pricing-heading-row">
          <div className="pricing-heading-copy">
            <span className="pricing-pill">
              <BriefcaseBusiness size={13} />
              Pricing & Investment
            </span>
            <h2>
              Transparent <span>Pricing</span>
            </h2>
            <p>RERA aligned rates, guided floor-wise pricing and no hidden charges.</p>
          </div>

          <div className="pricing-tabs" aria-label="Pricing tabs">
            {pricingPlans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => {
                  setActivePlanId(plan.id);
                  setSelectedFloorIndex(0);
                }}
                className={activePlanId === plan.id ? "active" : ""}
                aria-pressed={activePlanId === plan.id}
              >
                {plan.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-showcase">
          <div className="pricing-left-panel">
            <div className="pricing-image-card">
              <Image
                key={activePlan.image}
                src={activePlan.image}
                alt={activePlan.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={76}
                className="pricing-image"
              />
              <div className="pricing-image-shade" />
              <span className="pricing-image-label">{activePlan.title}</span>
            </div>

            <div className="pricing-floor-grid">
              {activePlan.floors.map((floor, index) => {
                const showPrice = hasCapturedLead || floor.visible;

                return (
                  <button
                    type="button"
                    className={`pricing-floor-card${showPrice ? "" : " locked"}${
                      selectedFloorIndex === index ? " selected" : ""
                    }`}
                    key={floor.label}
                    onClick={() => setSelectedFloorIndex(index)}
                  >
                    <span>{floor.label}</span>
                    <strong>{floor.price}</strong>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pricing-right-panel">
            <div className="pricing-title">
              <h3>{activePlan.title}</h3>
              <p>{activePlan.selected}</p>
            </div>

            <div className="pricing-detail-grid">
              {detailCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="pricing-detail-card" key={item.key}>
                    <Icon size={24} />
                    <span>{item.label}</span>
                    <strong>{activePlan.stats[item.key]}</strong>
                  </div>
                );
              })}
            </div>

            <div
              className={`pricing-price-card${isCelebrating ? " celebrating" : ""}${
                selectedFloorUnlocked ? "" : " locked-preview"
              }`}
            >
              {isCelebrating ? (
                <div className="pricing-unlock-burst" aria-hidden="true">
                  <b>Prices Unlocked</b>
                  {Array.from({ length: 18 }).map((_, index) => (
                    <i key={index} style={{ "--i": index }} />
                  ))}
                </div>
              ) : null}
              <span>Selected Floor Price</span>
              <strong>{selectedFloor.price}</strong>
              <p>
                {selectedFloor.label} · {activePlan.label}
              </p>
            </div>

            <button
              type="button"
              className={`pricing-unlock-btn${hasCapturedLead ? " unlocked" : ""}`}
              onClick={() => (hasCapturedLead ? null : setIsModalOpen(true))}
            >
              {hasCapturedLead ? <LockOpen size={17} /> : <Lock size={17} />}
              {hasCapturedLead ? "All Prices Unlocked" : "Unlock All Floor Prices"}
            </button>

            <p className="pricing-note">
              <CalendarClock size={14} />
              *Base price. Unlock to review PLC, GST, charges and payment plans.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen ? (
        <div className="pricing-modal" role="dialog" aria-modal="true" aria-label="Unlock prices">
          <button
            type="button"
            className="pricing-modal-backdrop"
            aria-label="Close price unlock form"
            onClick={() => setIsModalOpen(false)}
          />
          <form className="pricing-form" onSubmit={submitUnlockForm}>
            <button
              type="button"
              className="pricing-close"
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
            >
              x
            </button>
            <span>Unlock Pricing</span>
            <h3>Get floor-wise details</h3>
            <input required type="text" name="name" placeholder="Your name" />
            <input required type="tel" name="phone" placeholder="Phone number" />
            <input type="email" name="email" placeholder="Email address" />
            <button type="submit">Submit & Unlock</button>
          </form>
        </div>
      ) : null}

      <style>{`
        .pricing-section {
          position: relative;
          z-index: 20;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 0%, rgba(214, 178, 95, 0.14), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(159, 197, 220, 0.08), transparent 30%),
            linear-gradient(180deg, var(--bg) 0%, #050505 100%);
          color: var(--text);
          padding: 42px 20px 36px;
        }

        .pricing-shell {
          width: min(100%, 1200px);
          margin: 0 auto;
        }

        .pricing-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: end;
          margin-bottom: 30px;
        }

        .pricing-pill {
          display: inline-flex;
          min-height: 31px;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(214, 178, 95, 0.72);
          border-radius: 999px;
          background: rgba(214, 178, 95, 0.08);
          padding: 0 20px;
          color: var(--accent-strong);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .pricing-heading-copy h2 {
          margin-top: 18px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: clamp(2.15rem, 3.2vw, 2.65rem);
          font-weight: 400;
          line-height: 1.12;
        }

        .pricing-heading-copy h2 span {
          color: var(--accent-strong);
        }

        .pricing-heading-copy p {
          margin-top: 12px;
          max-width: 620px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.55;
        }

        .pricing-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(112px, 1fr));
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.68);
          border-radius: 17px;
          background: rgba(8, 8, 8, 0.72);
          padding: 5px;
        }

        .pricing-tabs button {
          min-height: 44px;
          border: 1px solid transparent;
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          transition: border-color 0.28s ease, background 0.28s ease, color 0.28s ease;
        }

        .pricing-tabs button:hover,
        .pricing-tabs button.active {
          border-color: rgba(214, 178, 95, 0.56);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.18), rgba(255, 255, 255, 0.04)),
            rgba(20, 20, 20, 0.82);
          color: var(--accent-strong);
        }

        .pricing-showcase {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) 0.9fr;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.4);
          border-radius: 23px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(214, 178, 95, 0.065)),
            rgba(12, 12, 12, 0.88);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
        }

        .pricing-left-panel {
          padding: 20px;
        }

        .pricing-image-card {
          position: relative;
          min-height: 402px;
          overflow: hidden;
          border-radius: 18px;
          background: #111;
        }

        .pricing-image {
          object-fit: cover;
          transition: transform 1.15s cubic-bezier(0.2, 0.7, 0.2, 1), filter 1.15s ease;
        }

        .pricing-image-card:hover .pricing-image {
          transform: scale(1.045);
          filter: saturate(1.05) contrast(1.03);
        }

        .pricing-image-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.16), transparent 58%),
            linear-gradient(180deg, transparent 58%, rgba(0, 0, 0, 0.26));
        }

        .pricing-image-label {
          position: absolute;
          left: 18px;
          bottom: 18px;
          max-width: min(245px, calc(100% - 36px));
          border: 1px solid rgba(244, 211, 111, 0.76);
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.72);
          padding: 8px 18px;
          color: var(--accent-strong);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .pricing-floor-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .pricing-floor-card,
        .pricing-detail-card,
        .pricing-price-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.28);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.45);
          transition: border-color 0.28s ease, box-shadow 0.28s ease, transform 0.28s ease;
        }

        .pricing-floor-card::before,
        .pricing-detail-card::before,
        .pricing-price-card::before {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.22), rgba(159, 197, 220, 0.08), transparent 72%);
          opacity: 0;
          transition: opacity 0.28s ease;
          content: "";
        }

        .pricing-price-card::after {
          position: absolute;
          inset: -60% -30%;
          z-index: 0;
          background: linear-gradient(115deg, transparent 40%, rgba(244, 211, 111, 0.16) 50%, transparent 60%);
          transform: translateX(-70%);
          animation: priceShine 2.8s ease-in-out infinite;
          content: "";
          pointer-events: none;
        }

        .pricing-floor-card:hover,
        .pricing-detail-card:hover,
        .pricing-price-card:hover,
        .pricing-floor-card.selected {
          border-color: rgba(244, 211, 111, 0.62);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.25);
          transform: translateY(-2px);
        }

        .pricing-floor-card:hover::before,
        .pricing-detail-card:hover::before,
        .pricing-price-card:hover::before,
        .pricing-floor-card.selected::before {
          opacity: 1;
        }

        .pricing-floor-card {
          display: flex;
          min-height: 76px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .pricing-floor-card span,
        .pricing-floor-card strong,
        .pricing-detail-card span,
        .pricing-detail-card strong,
        .pricing-price-card span,
        .pricing-price-card strong,
        .pricing-price-card p {
          position: relative;
          z-index: 1;
        }

        .pricing-floor-card span {
          color: rgba(255, 255, 255, 0.62);
          font-size: 13px;
          font-weight: 500;
        }

        .pricing-floor-card strong {
          margin-top: 8px;
          color: var(--accent-strong);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.1;
        }

        .pricing-floor-card.locked strong,
        .pricing-price-card.locked-preview strong {
          color: rgba(255, 255, 255, 0.06);
          text-shadow:
            0 0 14px rgba(255, 255, 255, 0.58),
            0 0 28px rgba(244, 211, 111, 0.32);
          filter: blur(8px);
          user-select: none;
        }

        .pricing-price-card.locked-preview p {
          opacity: 0.58;
        }

        .pricing-right-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 22px;
          border-left: 1px solid rgba(214, 178, 95, 0.28);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.075), transparent 42%),
            linear-gradient(145deg, rgba(26, 26, 26, 0.96), rgba(7, 7, 7, 0.96));
          padding: 30px 30px 26px;
        }

        .pricing-title {
          text-align: center;
        }

        .pricing-title h3 {
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 400;
          line-height: 1.12;
        }

        .pricing-title p {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 16px;
          font-weight: 600;
        }

        .pricing-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .pricing-detail-card {
          display: grid;
          min-height: 76px;
          grid-template-columns: auto minmax(0, 1fr);
          align-items: center;
          column-gap: 12px;
          padding: 13px 14px;
        }

        .pricing-detail-card svg {
          position: relative;
          z-index: 1;
          grid-row: span 2;
          color: var(--accent-strong);
        }

        .pricing-detail-card span {
          color: rgba(255, 255, 255, 0.52);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .pricing-detail-card strong {
          margin-top: 6px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.25;
        }

        .pricing-price-card {
          min-height: 126px;
          padding: 25px 18px;
          text-align: center;
        }

        .pricing-price-card span {
          color: var(--accent-strong);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .pricing-price-card strong {
          display: block;
          margin-top: 9px;
          color: var(--accent-strong);
          font-size: clamp(2.65rem, 4.2vw, 4.25rem);
          font-weight: 600;
          line-height: 0.95;
        }

        .pricing-price-card p {
          margin-top: 12px;
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          font-weight: 600;
        }

        .pricing-price-card.celebrating {
          animation: unlockPulse 0.95s ease;
        }

        .pricing-unlock-burst {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: grid;
          place-items: center;
          pointer-events: none;
        }

        .pricing-unlock-burst b {
          border: 1px solid rgba(244, 211, 111, 0.5);
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.82);
          padding: 10px 18px;
          color: var(--accent-strong);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          animation: unlockBadge 1.35s ease forwards;
        }

        .pricing-unlock-burst i {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 10px;
          height: 14px;
          border-radius: 2px;
          background:
            linear-gradient(135deg, #fff4c4, var(--accent-strong));
          box-shadow: 0 0 14px rgba(244, 211, 111, 0.34);
          transform: rotate(calc(var(--i) * 21deg)) translateY(0);
          animation: premiumPaper 1.45s cubic-bezier(0.18, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--i) * 0.025s);
        }

        .pricing-unlock-btn {
          display: inline-flex;
          min-height: 49px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          background: var(--accent-strong);
          color: #080808;
          font-size: 16px;
          font-weight: 700;
          transition: background 0.28s ease, color 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease;
        }

        .pricing-unlock-btn.unlocked {
          background: #20c28b;
          color: #05120d;
        }

        .pricing-unlock-btn:hover {
          background: #ffffff;
          color: #050505;
          box-shadow: 0 16px 36px rgba(244, 211, 111, 0.18);
          transform: translateY(-1px);
        }

        .pricing-unlock-btn.unlocked:hover {
          background: #20c28b;
          color: #05120d;
        }

        .pricing-note {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.48);
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.5;
        }

        .pricing-note svg {
          color: var(--accent-strong);
          flex-shrink: 0;
        }

        .pricing-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .pricing-modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.68);
          backdrop-filter: blur(8px);
        }

        .pricing-form {
          position: relative;
          z-index: 1;
          width: min(100%, 390px);
          border: 1px solid rgba(214, 178, 95, 0.42);
          border-radius: 18px;
          background:
            radial-gradient(circle at 50% 0%, rgba(214, 178, 95, 0.18), transparent 44%),
            #11100d;
          padding: 28px;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.42);
        }

        .pricing-close {
          position: absolute;
          right: 12px;
          top: 10px;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(214, 178, 95, 0.24);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.72);
          font-size: 20px;
          line-height: 1;
          transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
        }

        .pricing-close:hover {
          border-color: rgba(244, 211, 111, 0.78);
          background: rgba(244, 211, 111, 0.14);
          color: var(--accent-strong);
        }

        .pricing-form span {
          color: var(--accent-strong);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .pricing-form h3 {
          margin-top: 8px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 400;
        }

        .pricing-form input {
          width: 100%;
          min-height: 45px;
          margin-top: 12px;
          border: 1px solid rgba(214, 178, 95, 0.28);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          padding: 0 14px;
          color: #ffffff;
          outline: none;
        }

        .pricing-form button[type="submit"] {
          width: 100%;
          min-height: 48px;
          margin-top: 16px;
          border-radius: 999px;
          background: var(--accent-strong);
          color: #080808;
          font-weight: 700;
        }

        [data-theme="light"] .pricing-section {
          background:
            radial-gradient(circle at 12% 0%, rgba(154, 117, 39, 0.12), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(111, 152, 180, 0.12), transparent 30%),
            linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%);
        }

        [data-theme="light"] .pricing-heading-copy h2,
        [data-theme="light"] .pricing-title h3,
        [data-theme="light"] .pricing-detail-card strong {
          color: var(--heading);
        }

        [data-theme="light"] .pricing-heading-copy p,
        [data-theme="light"] .pricing-title p {
          color: var(--muted);
        }

        [data-theme="light"] .pricing-tabs,
        [data-theme="light"] .pricing-showcase {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.82);
        }

        [data-theme="light"] .pricing-tabs button {
          border-color: transparent;
          background: rgba(255, 255, 255, 0.52);
          color: var(--muted);
        }

        [data-theme="light"] .pricing-tabs button:hover {
          border-color: transparent;
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.08), rgba(255, 255, 255, 0.7)),
            rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .pricing-tabs button.active {
          border-color: rgba(154, 117, 39, 0.5);
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.12), rgba(255, 255, 255, 0.72)),
            rgba(255, 255, 255, 0.78);
          color: var(--accent);
        }

        [data-theme="light"] .pricing-right-panel {
          background:
            radial-gradient(circle at 50% 0%, rgba(154, 117, 39, 0.1), transparent 42%),
            rgba(255, 255, 255, 0.88);
        }

        [data-theme="light"] .pricing-image-shade {
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent 46%),
            linear-gradient(180deg, transparent 58%, rgba(255, 255, 255, 0.14));
        }

        [data-theme="light"] .pricing-image-label {
          border-color: rgba(154, 117, 39, 0.74);
          background: rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .pricing-floor-card,
        [data-theme="light"] .pricing-detail-card,
        [data-theme="light"] .pricing-price-card {
          background: rgba(255, 255, 255, 0.72);
        }

        [data-theme="light"] .pricing-floor-card.locked strong,
        [data-theme="light"] .pricing-price-card.locked-preview strong {
          color: rgba(18, 18, 18, 0.05);
          text-shadow:
            0 0 14px rgba(18, 18, 18, 0.48),
            0 0 28px rgba(154, 117, 39, 0.34);
          filter: blur(8px);
        }

        [data-theme="light"] .pricing-floor-card:not(.locked) strong,
        [data-theme="light"] .pricing-price-card:not(.locked-preview) strong {
          color: var(--accent);
          text-shadow: none;
          filter: none;
        }

        [data-theme="light"] .pricing-floor-card span,
        [data-theme="light"] .pricing-detail-card span,
        [data-theme="light"] .pricing-price-card p,
        [data-theme="light"] .pricing-note {
          color: var(--muted);
        }

        [data-theme="light"] .pricing-unlock-btn {
          color: #ffffff;
        }

        [data-theme="light"] .pricing-unlock-btn:hover {
          background: #050505;
          color: var(--accent-strong);
        }

        [data-theme="light"] .pricing-unlock-btn.unlocked,
        [data-theme="light"] .pricing-unlock-btn.unlocked:hover {
          background: #20c28b;
          color: #05120d;
        }

        [data-theme="light"] .pricing-form {
          background:
            radial-gradient(circle at 50% 0%, rgba(154, 117, 39, 0.14), transparent 44%),
            #ffffff;
        }

        [data-theme="light"] .pricing-form h3 {
          color: var(--heading);
        }

        [data-theme="light"] .pricing-form input {
          background: rgba(247, 251, 255, 0.9);
          color: var(--heading);
        }

        [data-theme="light"] .pricing-close {
          background: rgba(154, 117, 39, 0.06);
          color: var(--muted);
        }

        [data-theme="light"] .pricing-close:hover {
          border-color: rgba(154, 117, 39, 0.78);
          background: rgba(154, 117, 39, 0.12);
          color: var(--accent);
        }

        @keyframes priceShine {
          0%, 42% { transform: translateX(-70%); }
          100% { transform: translateX(70%); }
        }

        @keyframes unlockPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(244, 211, 111, 0); }
          42% { transform: scale(1.025); box-shadow: 0 0 44px rgba(244, 211, 111, 0.2); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(244, 211, 111, 0); }
        }

        @keyframes unlockBadge {
          0% { opacity: 0; transform: translateY(14px) scale(0.86); }
          22% { opacity: 1; transform: translateY(0) scale(1); }
          78% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-14px) scale(0.94); }
        }

        @keyframes premiumPaper {
          0% {
            opacity: 0;
            transform: rotate(calc(var(--i) * 21deg)) translateY(0) scale(0.45);
          }
          14% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(calc(var(--i) * 21deg)) translateY(-138px) scale(1.05);
          }
        }

        @media (max-width: 1024px) {
          .pricing-section {
            padding: 30px 16px;
          }

          .pricing-heading-row {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 16px;
            margin-bottom: 18px;
          }

          .pricing-heading-copy h2 {
            margin-top: 20px;
            font-size: 1.72rem;
            line-height: 1.12;
          }

          .pricing-heading-copy p {
            margin-inline: auto;
            max-width: 360px;
            font-size: 15px;
          }

          .pricing-tabs {
            width: min(100%, 420px);
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-radius: 15px;
            padding: 4px;
          }

          .pricing-tabs button {
            min-height: 40px;
            border-radius: 10px;
            font-size: 15px;
          }

          .pricing-showcase {
            width: min(100%, 420px);
            margin-inline: auto;
            grid-template-columns: 1fr;
            border-radius: 20px;
          }

          .pricing-left-panel {
            padding: 10px;
          }

          .pricing-image-card {
            min-height: 255px;
            border-radius: 15px;
          }

          .pricing-image-label {
            left: 10px;
            bottom: 9px;
            max-width: min(188px, calc(100% - 20px));
            padding: 6px 13px;
            font-size: 11px;
          }

          .pricing-floor-grid {
            gap: 8px;
          }

          .pricing-floor-card,
          .pricing-detail-card {
            min-height: 60px;
          }

          .pricing-floor-card strong {
            font-size: 18px;
          }

          .pricing-right-panel {
            border-left: 0;
            border-top: 1px solid rgba(214, 178, 95, 0.28);
            gap: 18px;
            padding: 24px 10px 16px;
          }

          .pricing-title h3 {
            font-size: 24px;
          }

          .pricing-detail-grid {
            gap: 8px;
            padding-inline: 10px;
          }

          .pricing-detail-card {
            grid-template-columns: 1fr;
            justify-items: center;
            row-gap: 5px;
            padding: 9px 8px;
            text-align: center;
          }

          .pricing-detail-card svg {
            grid-row: auto;
          }

          .pricing-price-card {
            margin-inline: 10px;
          }

          .pricing-unlock-btn {
            margin-inline: 10px;
            min-height: 48px;
            font-size: 16px;
          }

          .pricing-note {
            padding-inline: 12px;
          }
        }

        @media (max-width: 420px) {
          .pricing-pill {
            min-height: 29px;
            padding-inline: 18px;
            font-size: 11px;
          }

          .pricing-heading-copy h2 {
            max-width: 320px;
            font-size: 1.6rem !important;
          }

          .pricing-tabs button {
            font-size: 14px;
          }

          .pricing-image-card {
            min-height: 232px;
          }

          .pricing-form {
            padding: 22px 18px 18px;
          }

          .pricing-form h3 {
            font-size: 24px;
          }

          .pricing-form input {
            min-height: 40px;
            margin-top: 9px;
          }

          .pricing-form button[type="submit"] {
            min-height: 43px;
            margin-top: 12px;
          }
        }
      `}</style>
    </section>
  );
}
