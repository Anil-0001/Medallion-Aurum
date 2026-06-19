"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  Building2,
  CalendarCheck,
  Download,
  Expand,
  Grid2X2,
  MapPinned,
  Star,
} from "lucide-react";

const planItems = [
  {
    id: "unit",
    label: "Unit Plan",
    icon: Grid2X2,
    plans: [
      {
        id: "3bhk",
        label: "3 BHK",
        image: "/plans/3BHK_Medallion_Aurum.webp",
        title: "3 BHK Premium Unit Plan",
        eyebrow: "3 BHK Unit Plan",
        area: "Approx. 2000 Sq.Ft.",
        copy: "A balanced family residence planned around an open living edge, private bedroom zones and efficient kitchen/service movement.",
        points: ["3 bedrooms with premium zoning", "Living and dining connected to balcony edge", "Utility-supported kitchen planning"],
      },
      {
        id: "4bhk",
        label: "4 BHK",
        image: "/plans/4BHK_Medallion_Aurum.webp",
        title: "4 BHK Signature Unit Plan",
        eyebrow: "4 BHK Unit Plan",
        area: "Approx. 2600 Sq.Ft.",
        copy: "A larger home format for families who want grand social space, calm private suites and a refined everyday circulation.",
        points: ["4 bedrooms with larger room scale", "Grand living and dining composition", "Premium family and service zoning"],
      },
      {
        id: "penthouse",
        label: "Penthouse",
        image: "/plans/unit-4bhk.jpg",
        title: "Penthouse Layout Preview",
        eyebrow: "Penthouse Plan",
        area: "Limited Sky Residence",
        copy: "A top-tier residence preview shaped around larger private zones, elevated views and rare inventory value.",
        points: ["Sky-level residence planning", "Private lifestyle zones", "Limited collection configuration"],
      },
    ],
  },
  {
    id: "site",
    label: "Site Plan",
    icon: MapPinned,
    plans: [
      {
        id: "site-master",
        label: "Site Plan",
        image: "/plans/site plan.jpg",
        title: "Master Site Planning",
        eyebrow: "Site Plan",
        area: "Integrated Community Plan",
        copy: "Aurum's site planning focuses on clear arrival movement, tower access, landscaped breathing areas and resident-first circulation.",
        points: ["Arrival and drop-off sequence", "Tower and amenity relationship", "Open space and access planning"],
      },
    ],
  },
  {
    id: "tower",
    label: "Tower Plan",
    icon: Building2,
    plans: [
      {
        id: "typical",
        label: "Typical Floor",
        image: "/plans/unit.jpg",
        title: "Typical Tower Floor Plan",
        eyebrow: "Typical Floor Plan",
        area: "Tower Core + Residence Plate",
        copy: "A tower-level view for understanding lift lobby placement, apartment entry privacy and vertical circulation.",
        points: ["Lift lobby and core planning", "Apartment entry separation", "Efficient vertical movement"],
      },
      {
        id: "premium",
        label: "Premium Floor",
        image: "/plans/3BHK_Medallion_Aurum.webp",
        title: "Premium Floor Plate",
        eyebrow: "Premium Tower Plan",
        area: "Low-density floor planning",
        copy: "A premium floor arrangement focused on light, privacy and generous movement between residences.",
        points: ["Privacy-focused entries", "Daylight-oriented planning", "Premium residential flow"],
      },
      {
        id: "sky",
        label: "Sky Level",
        image: "/plans/unit-4bhk.jpg",
        title: "Sky Level Preview",
        eyebrow: "Sky Residence Plan",
        area: "Penthouse-level planning",
        copy: "A sky-level planning preview for limited residences, private zones and elevated lifestyle positioning.",
        points: ["Limited top-floor residences", "Private lifestyle orientation", "Elevated view planning"],
      },
    ],
  },
];

export default function PlansLayouts() {
  const [activeGroupId, setActiveGroupId] = useState(planItems[0].id);
  const [activePlanByGroup, setActivePlanByGroup] = useState(() =>
    Object.fromEntries(planItems.map((group) => [group.id, group.plans[0].id]))
  );
  const activeGroup = useMemo(
    () => planItems.find((group) => group.id === activeGroupId) ?? planItems[0],
    [activeGroupId]
  );
  const activePlan = useMemo(
    () =>
      activeGroup.plans.find((plan) => plan.id === activePlanByGroup[activeGroup.id]) ??
      activeGroup.plans[0],
    [activeGroup, activePlanByGroup]
  );
  const scrollToContact = () => {
    const target =
      document.getElementById("property-interest") ||
      document.getElementById("site-visit-map") ||
      document.getElementById("enquiry-preview") ||
      document.querySelector("footer");

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="plans-layouts" className="plans-layouts-section">
      <div className="plans-shell">
        <div className="plans-heading-row">
          <div className="plans-heading-copy">
            <span className="plans-pill">
              <Star size={13} fill="currentColor" />
              Site Plan & Layouts
            </span>
            <h2>
              Explore <span>Aurum Plans</span>
            </h2>
            <p>
              Review site planning, 3 BHK, 4 BHK and unit layout previews before
              a guided floor-wise discussion.
            </p>
          </div>

          <div className="plans-tabs" aria-label="Plan tabs">
            {planItems.map((group) => {
              const Icon = group.icon;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroupId(group.id)}
                  className={activeGroup.id === group.id ? "active" : ""}
                  aria-pressed={activeGroup.id === group.id}
                >
                  <Icon size={15} />
                  {group.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="plans-showcase">
          <div className="plans-subtab-bar">
            {activeGroup.plans.length > 1 ? (
              <div className="plans-subtabs" aria-label={`${activeGroup.label} options`}>
                {activeGroup.plans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() =>
                      setActivePlanByGroup((current) => ({
                        ...current,
                        [activeGroup.id]: plan.id,
                      }))
                    }
                    className={activePlan.id === plan.id ? "active" : ""}
                    aria-pressed={activePlan.id === plan.id}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
            ) : (
              <span className="plans-single-tab">{activePlan.label}</span>
            )}
            <p>
              <strong>{activePlan.label}</strong> · {activeGroup.label} selected
            </p>
          </div>

          <div className="plans-info-panel">
            <div>
              <span className="plans-info-tag">{activePlan.label}</span>
              <h3>{activePlan.title}</h3>
              <strong className="plans-area">{activePlan.area}</strong>
              <p>{activePlan.copy}</p>
            </div>

            <div className="plans-point-grid">
              {activePlan.points.map((point, index) => (
                <div className="plans-point-card" key={point}>
                  <span>0{index + 1}</span>
                  <strong>{point}</strong>
                </div>
              ))}
            </div>

            <button type="button" className="plans-discuss-btn" onClick={scrollToContact}>
              <CalendarCheck size={16} />
              Schedule Plan Discussion
            </button>
          </div>

          <div className="plans-preview-panel">
            <div className="plans-image-wrap">
              <Image
                key={activePlan.image}
                src={activePlan.image}
                alt={`${activePlan.title} at The Medallion Aurum`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="plans-image"
              />
              <div className="plans-image-shade" />
              <span className="plans-image-label">
                {activePlan.eyebrow} · {activePlan.area}
              </span>
              <div className="plans-actions">
                <a href={activePlan.image} download aria-label="Download plan">
                  <Download size={17} />
                </a>
                <a href={activePlan.image} target="_blank" rel="noreferrer" aria-label="Open plan">
                  <Expand size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .plans-layouts-section {
          position: relative;
          z-index: 20;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 0%, rgba(214, 178, 95, 0.13), transparent 28%),
            radial-gradient(circle at 88% 20%, rgba(159, 197, 220, 0.08), transparent 30%),
            linear-gradient(180deg, var(--bg) 0%, #050505 100%);
          color: var(--text);
          padding: 42px 20px 36px;
        }

        .plans-shell {
          width: min(100%, 1200px);
          margin: 0 auto;
        }

        .plans-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: end;
          margin-bottom: 30px;
        }

        .plans-pill {
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

        .plans-heading-copy h2 {
          margin-top: 18px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: clamp(2.15rem, 3.2vw, 2.65rem);
          font-weight: 400;
          line-height: 1.12;
        }

        .plans-heading-copy h2 span {
          color: var(--accent-strong);
        }

        .plans-heading-copy p {
          margin-top: 12px;
          max-width: 650px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.55;
        }

        .plans-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(108px, 1fr));
          gap: 5px;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.68);
          border-radius: 17px;
          background: rgba(8, 8, 8, 0.72);
          padding: 5px;
        }

        .plans-tabs button {
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid transparent;
          border-radius: 12px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          transition: border-color 0.28s ease, background 0.28s ease, color 0.28s ease;
        }

        .plans-tabs button:hover,
        .plans-tabs button.active {
          border-color: rgba(214, 178, 95, 0.56);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.18), rgba(255, 255, 255, 0.04)),
            rgba(20, 20, 20, 0.82);
          color: var(--accent-strong);
        }

        .plans-showcase {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) 0.88fr;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.4);
          border-radius: 23px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(214, 178, 95, 0.065)),
            rgba(12, 12, 12, 0.88);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.34);
        }

        .plans-subtab-bar {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid rgba(214, 178, 95, 0.22);
          padding: 12px 20px;
        }

        .plans-subtabs {
          display: inline-grid;
          grid-auto-flow: column;
          gap: 5px;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.36);
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px;
        }

        .plans-subtabs button,
        .plans-single-tab {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          border-radius: 12px;
          padding: 0 18px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          font-weight: 600;
        }

        .plans-subtabs button.active,
        .plans-subtabs button:hover,
        .plans-single-tab {
          border-color: rgba(214, 178, 95, 0.56);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.18), rgba(255, 255, 255, 0.04)),
            rgba(20, 20, 20, 0.82);
          color: var(--accent-strong);
        }

        .plans-subtab-bar p {
          color: rgba(255, 255, 255, 0.56);
          font-size: 13px;
          font-weight: 600;
        }

        .plans-subtab-bar p strong {
          color: var(--accent-strong);
        }

        .plans-preview-panel {
          padding: 20px;
        }

        .plans-image-wrap {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.25);
          border-radius: 18px;
          background: rgba(0, 0, 0, 0.28);
        }

        .plans-image {
          object-fit: contain;
          padding: 18px;
          transition: transform 1.15s cubic-bezier(0.2, 0.7, 0.2, 1), filter 1.15s ease;
        }

        .plans-image-wrap:hover .plans-image {
          transform: scale(1.035);
          filter: saturate(1.04) contrast(1.03);
        }

        .plans-image-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.06), transparent 35%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.16), transparent 34%);
          pointer-events: none;
        }

        .plans-image-label {
          position: absolute;
          left: 18px;
          top: 18px;
          max-width: min(420px, calc(100% - 36px));
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

        .plans-actions {
          position: absolute;
          right: 16px;
          bottom: 16px;
          display: flex;
          gap: 8px;
        }

        .plans-actions a {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(244, 211, 111, 0.38);
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.72);
          color: var(--accent-strong);
          transition: border-color 0.28s ease, background 0.28s ease, transform 0.28s ease;
        }

        .plans-actions a:hover {
          border-color: rgba(244, 211, 111, 0.78);
          background: rgba(244, 211, 111, 0.14);
          transform: translateY(-1px);
        }

        .plans-info-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
          border-right: 1px solid rgba(214, 178, 95, 0.28);
          background:
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.075), transparent 42%),
            linear-gradient(145deg, rgba(26, 26, 26, 0.96), rgba(7, 7, 7, 0.96));
          padding: 34px 30px;
        }

        .plans-info-tag {
          color: var(--accent-strong);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .plans-info-panel h3 {
          margin-top: 12px;
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 400;
          line-height: 1.12;
        }

        .plans-area {
          display: inline-flex;
          margin-top: 12px;
          border: 1px solid rgba(214, 178, 95, 0.28);
          border-radius: 999px;
          background: rgba(214, 178, 95, 0.08);
          padding: 8px 14px;
          color: var(--accent-strong);
          font-size: 13px;
          font-weight: 600;
        }

        .plans-info-panel p {
          margin-top: 12px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.65;
        }

        .plans-point-grid {
          display: grid;
          gap: 10px;
        }

        .plans-point-card {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 12px;
          align-items: center;
          min-height: 64px;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.28);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.45);
          padding: 12px 14px;
          transition: border-color 0.28s ease, transform 0.28s ease;
        }

        .plans-point-card::before {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.22), rgba(159, 197, 220, 0.08), transparent 72%);
          opacity: 0;
          transition: opacity 0.28s ease;
          content: "";
        }

        .plans-point-card:hover {
          border-color: rgba(244, 211, 111, 0.62);
          transform: translateY(-2px);
        }

        .plans-point-card:hover::before {
          opacity: 1;
        }

        .plans-point-card span,
        .plans-point-card strong {
          position: relative;
          z-index: 1;
        }

        .plans-point-card span {
          color: var(--accent-strong);
          font-size: 12px;
          font-weight: 700;
        }

        .plans-point-card strong {
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
        }

        .plans-discuss-btn {
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

        .plans-discuss-btn:hover {
          background: #ffffff;
          color: #050505;
          box-shadow: 0 16px 36px rgba(244, 211, 111, 0.18);
          transform: translateY(-1px);
        }

        [data-theme="light"] .plans-layouts-section {
          background:
            radial-gradient(circle at 12% 0%, rgba(154, 117, 39, 0.12), transparent 28%),
            radial-gradient(circle at 88% 18%, rgba(111, 152, 180, 0.12), transparent 30%),
            linear-gradient(180deg, #f7fbff 0%, #eef5fb 100%);
        }

        [data-theme="light"] .plans-heading-copy h2,
        [data-theme="light"] .plans-info-panel h3,
        [data-theme="light"] .plans-point-card strong {
          color: var(--heading);
        }

        [data-theme="light"] .plans-heading-copy p,
        [data-theme="light"] .plans-info-panel p {
          color: var(--muted);
        }

        [data-theme="light"] .plans-tabs,
        [data-theme="light"] .plans-showcase {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.82);
        }

        [data-theme="light"] .plans-subtab-bar {
          border-bottom-color: rgba(154, 117, 39, 0.18);
        }

        [data-theme="light"] .plans-subtabs {
          background: rgba(255, 255, 255, 0.52);
        }

        [data-theme="light"] .plans-subtabs button,
        [data-theme="light"] .plans-single-tab {
          color: var(--muted);
        }

        [data-theme="light"] .plans-subtabs button:hover {
          border-color: transparent;
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.08), rgba(255, 255, 255, 0.7)),
            rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .plans-subtabs button.active,
        [data-theme="light"] .plans-single-tab {
          border-color: rgba(154, 117, 39, 0.5);
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.12), rgba(255, 255, 255, 0.72)),
            rgba(255, 255, 255, 0.78);
          color: var(--accent);
        }

        [data-theme="light"] .plans-subtab-bar p {
          color: var(--muted);
        }

        [data-theme="light"] .plans-tabs button {
          border-color: transparent;
          background: rgba(255, 255, 255, 0.52);
          color: var(--muted);
        }

        [data-theme="light"] .plans-tabs button:hover {
          border-color: transparent;
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.08), rgba(255, 255, 255, 0.7)),
            rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .plans-tabs button.active {
          border-color: rgba(154, 117, 39, 0.5);
          background:
            linear-gradient(135deg, rgba(154, 117, 39, 0.12), rgba(255, 255, 255, 0.72)),
            rgba(255, 255, 255, 0.78);
          color: var(--accent);
        }

        [data-theme="light"] .plans-info-panel,
        [data-theme="light"] .plans-point-card {
          background: rgba(255, 255, 255, 0.72);
        }

        [data-theme="light"] .plans-image-wrap {
          background: rgba(255, 255, 255, 0.72);
        }

        [data-theme="light"] .plans-image-shade {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 42%),
            linear-gradient(0deg, rgba(255, 255, 255, 0.12), transparent 34%);
        }

        [data-theme="light"] .plans-image-label,
        [data-theme="light"] .plans-actions a {
          border-color: rgba(154, 117, 39, 0.74);
          background: rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .plans-discuss-btn {
          color: #ffffff;
        }

        [data-theme="light"] .plans-discuss-btn:hover {
          background: #050505;
          color: var(--accent-strong);
        }

        @media (max-width: 1024px) {
          .plans-layouts-section {
            padding: 30px 16px;
          }

          .plans-heading-row {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 16px;
            margin-bottom: 18px;
          }

          .plans-heading-copy h2 {
            margin-top: 20px;
            font-size: 1.72rem;
            line-height: 1.12;
          }

          .plans-heading-copy p {
            margin-inline: auto;
            max-width: 360px;
            font-size: 15px;
          }

          .plans-tabs {
            width: min(100%, 420px);
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-radius: 15px;
            padding: 4px;
          }

          .plans-tabs button {
            min-height: 40px;
            border-radius: 10px;
            font-size: 13px;
          }

          .plans-showcase {
            width: min(100%, 420px);
            margin-inline: auto;
            grid-template-columns: 1fr;
            border-radius: 20px;
          }

          .plans-subtab-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            padding: 10px;
            text-align: center;
          }

          .plans-subtabs {
            grid-auto-flow: initial;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            width: 100%;
          }

          .plans-subtabs button,
          .plans-single-tab {
            min-height: 38px;
            padding: 0 10px;
            font-size: 13px;
          }

          .plans-preview-panel {
            order: 2;
            padding: 10px;
          }

          .plans-image-wrap {
            min-height: 330px;
            border-radius: 15px;
          }

          .plans-image {
            padding: 10px;
          }

          .plans-image-label {
            left: 10px;
            top: 10px;
            max-width: calc(100% - 20px);
            padding: 6px 13px;
            font-size: 11px;
          }

          .plans-actions {
            right: 10px;
            bottom: 9px;
          }

          .plans-actions a {
            width: 36px;
            height: 36px;
          }

          .plans-info-panel {
            order: 3;
            border-right: 0;
            border-top: 1px solid rgba(214, 178, 95, 0.28);
            gap: 12px;
            padding: 18px 14px 14px;
            text-align: center;
          }

          .plans-info-panel h3 {
            margin-top: 8px;
            font-size: 20px;
            line-height: 1.12;
          }

          .plans-info-panel p {
            margin-top: 8px;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.45;
          }

          .plans-info-tag {
            font-size: 10px;
          }

          .plans-area {
            margin-top: 8px;
            padding: 6px 11px;
            font-size: 11px;
            font-weight: 500;
          }

          .plans-point-grid {
            gap: 7px;
          }

          .plans-point-card {
            min-height: 48px;
            gap: 8px;
            padding: 8px 10px;
            text-align: left;
          }

          .plans-point-card span {
            font-size: 10px;
            font-weight: 600;
          }

          .plans-point-card strong {
            font-size: 12px;
            font-weight: 500;
            line-height: 1.25;
          }

          .plans-discuss-btn {
            min-height: 44px;
            font-size: 14px;
            font-weight: 600;
          }
        }

        @media (max-width: 420px) {
          .plans-pill {
            min-height: 29px;
            padding-inline: 18px;
            font-size: 11px;
          }

          .plans-heading-copy h2 {
            max-width: 320px;
            font-size: 1.6rem !important;
          }

          .plans-image-wrap {
            min-height: 295px;
          }
        }
      `}</style>
    </section>
  );
}
