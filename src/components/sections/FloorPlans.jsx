"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Building2,
  Crown,
  Home,
  KeyRound,
  Maximize2,
  ShieldCheck,
  Star,
} from "lucide-react";

const plans = [
  {
    id: "3bhk",
    tab: "3 BHK",
    badge: "3 BHK Premium Residence",
    kicker: "Family Luxury",
    title: "3 BHK Premium Floor",
    subtitle: "Spacious 3 BHK format planned for privacy, daylight and refined everyday living.",
    image: "/floor plans/3bhk.jpg",
    imageAlt: "Premium living room interior at Medallion Aurum",
    stats: [
      { icon: Maximize2, label: "Configuration", value: "3 BHK" },
      { icon: Building2, label: "Planning", value: "Corner Light" },
      { icon: ShieldCheck, label: "Status", value: "Under Construction" },
      { icon: KeyRound, label: "Experience", value: "Private Site Visit" },
    ],
  },
  {
    id: "4bhk",
    tab: "4 BHK",
    badge: "4 BHK Signature Residence",
    kicker: "Large Format",
    title: "4 BHK Signature Floor",
    subtitle: "A larger home shaped around grand entertaining, family comfort and calm bedroom zones.",
    image: "/floor plans/4bhk.jpg",
    imageAlt: "Luxury residential tower view at Medallion Aurum",
    stats: [
      { icon: Maximize2, label: "Configuration", value: "4 BHK" },
      { icon: Building2, label: "Planning", value: "Large Format" },
      { icon: ShieldCheck, label: "Status", value: "Premium Inventory" },
      { icon: KeyRound, label: "Experience", value: "Callback Available" },
    ],
  },
  {
    id: "penthouse",
    tab: "Penthouse",
    badge: "Penthouse Collection",
    kicker: "Sky Living",
    title: "Penthouse Collection",
    subtitle: "Exclusive top-tier residences designed for elevated views, private zones and rare address value.",
    image: "/floor plans/penthouse.jpg",
    imageAlt: "Elevated premium residence view at Medallion Aurum",
    stats: [
      { icon: Crown, label: "Configuration", value: "Penthouse" },
      { icon: Building2, label: "Planning", value: "Sky Living" },
      { icon: ShieldCheck, label: "Status", value: "Limited Options" },
      { icon: KeyRound, label: "Experience", value: "By Appointment" },
    ],
  },
];

export default function FloorPlans() {
  const [activePlanId, setActivePlanId] = useState(plans[0].id);
  const activePlan = useMemo(
    () => plans.find((plan) => plan.id === activePlanId) ?? plans[0],
    [activePlanId]
  );
  const scrollToPricing = () => {
    const pricingSection =
      document.getElementById("transparent-pricing") ||
      document.getElementById("pricing");

    pricingSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="floor-plans" className="floor-plans-section">
      <div className="floor-shell">
        <div className="floor-heading-row">
          <div className="floor-heading-copy">
            <span className="floor-pill">
              <Star size={13} fill="currentColor" />
              Floor Plans
            </span>
            <h2>
              Choose Your Ideal{" "}
              <span>{activePlan.tab} Floor</span>
            </h2>
            <p>
              Explore premium Medallion residences crafted around space, privacy
              and refined city living.
            </p>
          </div>

          <div className="floor-tabs" aria-label="Residence type tabs">
            {plans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setActivePlanId(plan.id)}
                className={activePlanId === plan.id ? "active" : ""}
                aria-pressed={activePlanId === plan.id}
              >
                {plan.tab}
              </button>
            ))}
          </div>
        </div>

        <div className="floor-showcase">
          <div className="floor-image-card">
            <Image
              key={activePlan.image}
              src={activePlan.image}
              alt={activePlan.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 64vw"
              quality={76}
              className="floor-image"
            />
            <div className="floor-image-shade" />
            <div className="floor-image-badges">
              <span>{activePlan.badge}</span>
              <span>{activePlan.kicker}</span>
            </div>
          </div>

          <div className="floor-detail-panel">
            <div className="floor-detail-head">
              <span className="floor-detail-icon">
                <Home size={22} />
              </span>
              <div>
                <h3>{activePlan.title}</h3>
                <p>{activePlan.subtitle}</p>
              </div>
            </div>

            <div className="floor-stat-grid">
              {activePlan.stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div className="floor-stat-card" key={stat.label}>
                    <Icon size={24} />
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="floor-price-btn"
              onClick={scrollToPricing}
            >
              View Floor-Wise Price
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .floor-plans-section {
          position: relative;
          z-index: 20;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 0%, rgba(214, 178, 95, 0.16), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(159, 197, 220, 0.1), transparent 30%),
            linear-gradient(180deg, var(--bg) 0%, #050505 100%);
          color: var(--text);
          padding: 42px 20px 36px;
        }

        .floor-shell {
          width: min(100%, 1200px);
          margin: 0 auto;
        }

        .floor-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: end;
          margin-bottom: 30px;
        }

        .floor-pill {
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
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .floor-heading-copy h2 {
          margin-top: 18px;
          max-width: 760px;
          color: #ffffff;
          font-size: clamp(2.15rem, 3.2vw, 2.65rem);
          font-family: var(--font-display);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: 0;
        }

        .floor-heading-copy h2 span {
          color: var(--accent-strong);
        }

        .floor-heading-copy p {
          margin-top: 15px;
          max-width: 650px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.6;
        }

        .floor-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(120px, 1fr));
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.68);
          border-radius: 17px;
          background: rgba(8, 8, 8, 0.72);
          padding: 5px;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.28);
        }

        .floor-tabs button {
          min-height: 44px;
          border: 1px solid transparent;
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0;
          transition:
            border-color 0.28s ease,
            background 0.28s ease,
            color 0.28s ease,
            transform 0.28s ease;
        }

        .floor-tabs button:hover,
        .floor-tabs button.active {
          border-color: rgba(214, 178, 95, 0.56);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.18), rgba(255, 255, 255, 0.04)),
            rgba(20, 20, 20, 0.82);
          color: var(--accent-strong);
        }

        .floor-showcase {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 425px;
          align-items: stretch;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.4);
          border-radius: 23px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(214, 178, 95, 0.065)),
            rgba(12, 12, 12, 0.88);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.38);
        }

        .floor-image-card {
          position: relative;
          min-height: 318px;
          overflow: hidden;
          background: #111;
        }

        .floor-image {
          object-fit: cover;
          transition: transform 1.15s cubic-bezier(0.2, 0.7, 0.2, 1), filter 1.15s ease;
        }

        .floor-image-card:hover .floor-image {
          transform: scale(1.045);
          filter: saturate(1.05) contrast(1.03);
        }

        .floor-image-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.16), transparent 58%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.14));
          pointer-events: none;
        }

        .floor-image-badges {
          position: absolute;
          top: 16px;
          left: 13px;
          z-index: 2;
          display: grid;
          gap: 8px;
          width: min(232px, calc(100% - 26px));
        }

        .floor-image-badges span {
          width: fit-content;
          max-width: 100%;
          border: 1px solid rgba(244, 211, 111, 0.76);
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.82);
          padding: 7px 17px;
          color: var(--accent-strong);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          text-transform: uppercase;
        }

        .floor-detail-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 30px;
          border-left: 1px solid rgba(214, 178, 95, 0.28);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.075), transparent 42%),
            linear-gradient(145deg, rgba(26, 26, 26, 0.96), rgba(7, 7, 7, 0.96));
          padding: 36px 30px 33px;
        }

        .floor-detail-head {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 15px;
          align-items: start;
        }

        .floor-detail-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.35);
          border-radius: 14px;
          background: rgba(214, 178, 95, 0.08);
          color: var(--accent-strong);
        }

        .floor-detail-head h3 {
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: 0;
        }

        .floor-detail-head p {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.55;
        }

        .floor-stat-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .floor-stat-card {
          position: relative;
          display: flex;
          min-height: 105px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.28);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.48);
          padding: 15px 10px;
          text-align: center;
          transition:
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            transform 0.28s ease;
        }

        .floor-stat-card::before {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.24), rgba(159, 197, 220, 0.08), transparent 72%);
          opacity: 0;
          transition: opacity 0.28s ease;
          content: "";
        }

        .floor-stat-card:hover {
          border-color: rgba(244, 211, 111, 0.62);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
          transform: translateY(-2px);
        }

        .floor-stat-card:hover::before {
          opacity: 1;
        }

        .floor-stat-card svg,
        .floor-stat-card span,
        .floor-stat-card strong {
          position: relative;
          z-index: 1;
        }

        .floor-stat-card svg {
          color: var(--accent-strong);
        }

        .floor-stat-card span {
          margin-top: 9px;
          color: rgba(255, 255, 255, 0.52);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.25;
          text-transform: uppercase;
        }

        .floor-stat-card strong {
          margin-top: 8px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.25;
        }

        .floor-price-btn {
          min-height: 49px;
          border-radius: 999px;
          background: var(--accent-strong);
          color: #080808;
          font-size: 16px;
          font-weight: 700;
          transition:
            background 0.28s ease,
            color 0.28s ease,
            transform 0.28s ease,
            box-shadow 0.28s ease;
        }

        .floor-price-btn:hover {
          background: #ffffff;
          color: #050505;
          box-shadow: 0 16px 36px rgba(244, 211, 111, 0.18);
          transform: translateY(-1px);
        }

        [data-theme="light"] .floor-plans-section {
          background:
            radial-gradient(circle at 12% 0%, rgba(154, 117, 39, 0.14), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(111, 152, 180, 0.14), transparent 30%),
            linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%);
        }

        [data-theme="light"] .floor-heading-copy h2,
        [data-theme="light"] .floor-detail-head h3,
        [data-theme="light"] .floor-stat-card strong {
          color: var(--heading);
        }

        [data-theme="light"] .floor-heading-copy p,
        [data-theme="light"] .floor-detail-head p {
          color: var(--muted);
        }

        [data-theme="light"] .floor-tabs,
        [data-theme="light"] .floor-showcase {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.82);
        }

        [data-theme="light"] .floor-tabs button {
          border-color: transparent;
          background: rgba(255, 255, 255, 0.52);
          color: var(--muted);
          font-weight: 600;
        }

        [data-theme="light"] .floor-tabs button:hover {
          border-color: transparent;
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.08), rgba(255, 255, 255, 0.7)),
            rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .floor-tabs button.active {
          border-color: rgba(154, 117, 39, 0.5);
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.12), rgba(255, 255, 255, 0.72)),
            rgba(255, 255, 255, 0.78);
          color: var(--accent);
        }

        [data-theme="light"] .floor-detail-panel {
          background:
            radial-gradient(circle at 50% 0%, rgba(154, 117, 39, 0.1), transparent 42%),
            rgba(255, 255, 255, 0.88);
        }

        [data-theme="light"] .floor-stat-card {
          background: rgba(255, 255, 255, 0.72);
          color: var(--heading);
        }

        [data-theme="light"] .floor-stat-card span {
          color: var(--muted);
        }

        [data-theme="light"] .floor-image-badges span {
          border-color: rgba(154, 117, 39, 0.74);
          background: rgba(255, 255, 255, 0.72);
          color: var(--accent);
          font-weight: 600;
        }

        [data-theme="light"] .floor-image-shade {
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent 46%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 44%);
        }

        [data-theme="light"] .floor-price-btn {
          color: #ffffff;
        }

        [data-theme="light"] .floor-price-btn:hover {
          background: #050505;
          color: var(--accent-strong);
        }

        @media (min-width: 1025px) {
          .floor-image-card {
            min-height: 318px;
          }
        }

        @media (max-width: 1024px) {
          .floor-plans-section {
            padding: 30px 16px 30px;
          }

          .floor-heading-row {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 16px;
            margin-bottom: 18px;
          }

          .floor-heading-copy h2 {
            margin-top: 20px;
            font-size: 1.72rem;
            line-height: 1.12;
          }

          .floor-heading-copy p {
            margin-inline: auto;
            margin-top: 10px;
            max-width: 360px;
            font-size: 15px;
            line-height: 1.45;
          }

          .floor-tabs {
            width: min(100%, 420px);
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-radius: 15px;
            padding: 4px;
          }

          .floor-tabs button {
            min-height: 40px;
            border-radius: 10px;
            font-size: 15px;
          }

          .floor-showcase {
            width: min(100%, 420px);
            margin-inline: auto;
            grid-template-columns: 1fr;
            border-radius: 20px;
          }

          .floor-image-card {
            min-height: 255px;
          }

          .floor-detail-panel {
            border-left: 0;
            border-top: 1px solid rgba(214, 178, 95, 0.28);
            gap: 18px;
            padding: 24px 10px 16px;
          }

          .floor-detail-head {
            display: block;
            text-align: center;
          }

          .floor-detail-icon {
            display: none;
          }

          .floor-detail-head h3 {
            font-size: 24px;
            font-weight: 400;
          }

          .floor-detail-head p {
            margin: 8px auto 0;
            max-width: 330px;
            font-size: 14px;
          }

          .floor-stat-grid {
            gap: 8px;
            padding-inline: 10px;
          }

          .floor-stat-card {
            min-height: 95px;
            border-radius: 10px;
            padding: 13px 8px;
          }

          .floor-stat-card strong {
            font-size: 14px;
          }

          .floor-price-btn {
            margin-inline: 10px;
            min-height: 48px;
            font-size: 16px;
          }
        }

        @media (max-width: 420px) {
          .floor-plans-section {
            padding-inline: 16px;
          }

          .floor-pill {
            min-height: 29px;
            padding-inline: 18px;
            font-size: 11px;
          }

          .floor-heading-copy h2 {
            max-width: 320px;
            font-size: 1.6rem !important;
          }

          .floor-tabs button {
            font-size: 14px;
          }

          .floor-image-card {
            min-height: 232px;
          }

          .floor-image-badges {
            top: 12px;
            left: 10px;
            gap: 7px;
            width: min(188px, calc(100% - 20px));
          }

          .floor-image-badges span {
            padding: 6px 13px;
            font-size: 11px;
            font-weight: 600;
          }

        }
      `}</style>
    </section>
  );
}
