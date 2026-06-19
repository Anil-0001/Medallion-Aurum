"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  IndianRupee,
  MapPin,
  Minus,
  PhoneCall,
  Plus,
  ShieldCheck,
} from "lucide-react";

const faqGroups = [
  {
    id: "price",
    label: "Price & Payment",
    icon: IndianRupee,
    faqs: [
      {
        question: "What is the current price of The Medallion Aurum Mohali?",
        answer:
          "Pricing depends on apartment size, floor preference, availability and payment plan. Connect with the sales team for the latest unit-wise offer and site visit support.",
      },
      {
        question: "Are PLC, parking and club charges included?",
        answer:
          "Charges can vary by inventory and selected payment plan. A written cost sheet should be requested before booking so parking, club, PLC and statutory charges are clear.",
      },
      {
        question: "Is bank loan assistance available?",
        answer:
          "Yes. Home loan assistance can be coordinated with leading banks after basic eligibility checks and unit selection.",
      },
      {
        question: "Can I get a written payment plan?",
        answer:
          "Yes. Ask for a written payment schedule with milestones, taxes and applicable charges before confirming the booking.",
      },
    ],
  },
  {
    id: "legal",
    label: "Legal & RERA",
    icon: BadgeCheck,
    faqs: [
      {
        question: "Who is developing The Medallion Aurum?",
        answer:
          "The Medallion Aurum is presented as an upcoming premium group housing project by Turnstone Realty in Sector 67, Mohali.",
      },
      {
        question: "Can I review approvals before booking?",
        answer:
          "Yes. Buyers should review RERA details, layout approvals, payment terms and booking documents before making a financial commitment.",
      },
      {
        question: "Will floor plans be shared officially?",
        answer:
          "Floor plan availability can depend on approval and inventory status. Request the latest official layout and brochure from the sales team.",
      },
    ],
  },
  {
    id: "construction",
    label: "Construction & Quality",
    icon: Building2,
    faqs: [
      {
        question: "What construction technology is planned?",
        answer:
          "The project communication highlights Mivan technology, planned for precision, strength and consistent structural quality.",
      },
      {
        question: "What makes the planning premium?",
        answer:
          "The project highlights an 8.6-acre land parcel, 82% open area, all corner-flat planning for sunlight, double-height podium parking and dedicated tower drop-off lobbies.",
      },
      {
        question: "What amenities are planned at The Medallion Aurum?",
        answer:
          "Planned amenities include clubhouse, gym, indoor games, swimming pool, spa, restaurant, sports courts, kids play areas and security-backed community planning.",
      },
      {
        question: "Is security part of the community planning?",
        answer:
          "Yes. The project communication mentions 24x7 security with CCTV-backed monitoring and a controlled residential environment.",
      },
    ],
  },
  {
    id: "location",
    label: "Location & Connectivity",
    icon: MapPin,
    faqs: [
      {
        question: "Where is The Medallion Aurum located?",
        answer:
          "The Medallion Aurum is located in Sector 67, Mohali, on a connected sector-dividing road with access to key city corridors.",
      },
      {
        question: "How connected is the project to airport-side Mohali?",
        answer:
          "The location is positioned for access to Chandigarh International Airport, Aero City, IT City, PCA Stadium, railway station, schools, universities and healthcare.",
      },
      {
        question: "Can I schedule a site visit?",
        answer:
          "Yes. You can request a callback or schedule a guided visit to review the location, available inventory and current offers.",
      },
    ],
  },
];

export default function AurumFaq() {
  const [activeGroupId, setActiveGroupId] = useState(faqGroups[0].id);
  const [activeQuestion, setActiveQuestion] = useState(faqGroups[0].faqs[0].question);
  const tabsRailRef = useRef(null);
  const tabRefs = useRef({});

  const activeGroup = useMemo(
    () => faqGroups.find((group) => group.id === activeGroupId) ?? faqGroups[0],
    [activeGroupId]
  );

  const selectGroup = (group) => {
    setActiveGroupId(group.id);
    setActiveQuestion(group.faqs[0]?.question ?? "");

    window.requestAnimationFrame(() => {
      tabRefs.current[group.id]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  };

  const scrollTabs = (direction) => {
    tabsRailRef.current?.scrollBy({
      left: direction * 180,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="aurum-faq"
      className="aurum-faq-section relative z-20 overflow-hidden bg-[var(--bg)] px-5 py-14 text-[var(--text)] sm:px-6 lg:px-8"
    >
      <div className="aurum-faq-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] backdrop-blur-xl">
            <CircleHelp size={13} />
            Your Questions
          </p>
          <h2 className="mt-5 text-3xl font-normal leading-tight text-[var(--heading)] md:text-5xl">
            Frequently Asked <span className="text-[var(--accent)]">Questions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[var(--muted)] md:text-base">
            Everything about The Medallion Aurum Mohali: price, approvals, construction,
            amenities and location.
          </p>
        </div>

        <div className="aurum-faq-panel mx-auto mt-8 grid max-w-6xl gap-5 border border-[var(--line)] bg-[var(--glass)] p-4 backdrop-blur-xl lg:grid-cols-[0.34fr_0.66fr] lg:p-5">
          <aside className="aurum-faq-sidebar">
            <button
              type="button"
              className="aurum-faq-tab-arrow aurum-faq-tab-arrow-left"
              onClick={() => scrollTabs(-1)}
              aria-label="Previous FAQ category"
            >
              <ChevronLeft size={18} strokeWidth={2.4} />
            </button>
            <div ref={tabsRailRef} className="aurum-faq-tabs-rail grid gap-2">
              {faqGroups.map((group) => {
                const Icon = group.icon;
                const isActive = group.id === activeGroupId;

                return (
                  <button
                    key={group.id}
                    ref={(node) => {
                      if (node) tabRefs.current[group.id] = node;
                    }}
                    type="button"
                    className={`aurum-faq-tab ${isActive ? "active" : ""}`}
                    onClick={() => selectGroup(group)}
                  >
                    <span className="aurum-faq-tab-icon">
                      <Icon size={15} />
                    </span>
                    <span>{group.label}</span>
                    <span className="aurum-faq-count">{group.faqs.length}</span>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className="aurum-faq-tab-arrow aurum-faq-tab-arrow-right"
              onClick={() => scrollTabs(1)}
              aria-label="Next FAQ category"
            >
              <ChevronRight size={18} strokeWidth={2.4} />
            </button>

            <div className="aurum-faq-help">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                Need a quick answer?
              </p>
              <h3 className="mt-3 text-xl font-normal leading-tight text-[var(--heading)]">
                Talk to a Medallion Aurum advisor
              </h3>
              <a
                href="https://wa.me/917009247378"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
              >
                <PhoneCall size={16} />
                Request Callback
              </a>
            </div>
          </aside>

          <div className="grid gap-3">
            {activeGroup.faqs.map((item) => {
              const isOpen = item.question === activeQuestion;

              return (
                <article key={item.question} className={`aurum-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="aurum-faq-question"
                    onClick={() => setActiveQuestion(isOpen ? "" : item.question)}
                  >
                    <span>{item.question}</span>
                    <span className="aurum-faq-toggle" aria-hidden="true">
                      {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                    <motion.div
                      className="aurum-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}

            <div className="aurum-faq-note">
              <ShieldCheck size={16} />
              <p>
                Final prices, floor plans and availability should be verified from the official
                sales team before booking.
              </p>
            </div>
          </div>

          <div className="aurum-faq-help aurum-faq-help-mobile">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
              Need a quick answer?
            </p>
            <h3 className="mt-3 text-xl font-normal leading-tight text-[var(--heading)]">
              Talk to a Medallion Aurum advisor
            </h3>
            <a
              href="https://wa.me/917009247378"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
            >
              <PhoneCall size={16} />
              Request Callback
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .aurum-faq-section {
          min-height: 92vh;
          display: flex;
          align-items: center;
        }

        .aurum-faq-bg {
          background:
            radial-gradient(circle at 18% 8%, rgba(214, 178, 95, 0.1), transparent 30%),
            radial-gradient(circle at 82% 22%, rgba(159, 197, 220, 0.07), transparent 32%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .aurum-faq-panel,
        .aurum-faq-sidebar,
        .aurum-faq-item {
          border-radius: 20px;
        }

        .aurum-faq-sidebar {
          display: flex;
          min-height: 410px;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(214, 178, 95, 0.22);
          background: rgba(5, 5, 5, 0.32);
          padding: 14px;
        }

        .aurum-faq-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          border: 1px solid transparent;
          border-radius: 14px;
          padding: 6px 10px;
          color: var(--heading);
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        .aurum-faq-tab:hover,
        .aurum-faq-tab.active {
          border-color: rgba(214, 178, 95, 0.52);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.12), rgba(23, 217, 139, 0.04)),
            rgba(255, 255, 255, 0.03);
        }

        .aurum-faq-tab:hover {
          transform: translateY(-2px);
        }

        .aurum-faq-tab-icon {
          display: inline-flex;
          height: 30px;
          width: 30px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.45);
          border-radius: 9px;
          color: var(--accent);
        }

        .aurum-faq-count {
          display: inline-flex;
          margin-left: auto;
          height: 22px;
          width: 22px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: var(--accent);
          font-size: 11px;
        }

        .aurum-faq-help {
          padding: 42px 10px 4px;
          text-align: center;
        }

        .aurum-faq-help-mobile {
          display: none;
        }

        .aurum-faq-tab-arrow {
          display: none;
        }

        .aurum-faq-item {
          overflow: hidden;
          border: 1px solid var(--line);
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.72), rgba(214, 178, 95, 0.05)),
            rgba(5, 5, 5, 0.52);
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .aurum-faq-item.open,
        .aurum-faq-item:hover {
          border-color: rgba(214, 178, 95, 0.56);
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.72), rgba(214, 178, 95, 0.1), rgba(23, 217, 139, 0.04)),
            rgba(5, 5, 5, 0.52);
        }

        .aurum-faq-question {
          display: flex;
          width: 100%;
          min-height: 62px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 20px;
          color: var(--heading);
          text-align: left;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .aurum-faq-item.open .aurum-faq-question {
          min-height: 54px;
          padding-bottom: 8px;
        }

        .aurum-faq-toggle {
          display: inline-flex;
          height: 32px;
          width: 32px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.52);
          border-radius: 999px;
          color: var(--accent);
        }

        .aurum-faq-answer {
          overflow: hidden;
          padding: 0 20px 18px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
        }

        .aurum-faq-answer p {
          margin: 0;
        }

        .aurum-faq-note {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 4px 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .aurum-faq-note svg {
          flex-shrink: 0;
          color: var(--accent);
        }

        [data-theme="light"] .aurum-faq-sidebar,
        [data-theme="light"] .aurum-faq-item {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(214, 178, 95, 0.06)),
            rgba(255, 255, 255, 0.78);
        }

        [data-theme="light"] .aurum-faq-tab:hover,
        [data-theme="light"] .aurum-faq-tab.active {
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.13), rgba(159, 197, 220, 0.08)),
            rgba(255, 255, 255, 0.72);
        }

        [data-theme="light"] .aurum-faq-count {
          background: rgba(5, 5, 5, 0.08);
        }

        @media (max-width: 1023px) {
          .aurum-faq-section {
            min-height: auto;
          }

          .aurum-faq-sidebar {
            min-height: auto;
          }

          .aurum-faq-help {
            padding-top: 28px;
          }
        }

        @media (max-width: 640px) {
          .aurum-faq-section {
            min-height: auto;
            padding: 36px 12px 44px;
            align-items: flex-start;
          }

          .aurum-faq-section > .relative {
            max-width: 390px;
          }

          .aurum-faq-section .mx-auto.max-w-4xl {
            max-width: 330px;
          }

          .aurum-faq-section .mx-auto.max-w-4xl > p:first-child {
            min-height: 27px;
            padding: 0 16px;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.2em;
          }

          .aurum-faq-section h2 {
            margin-top: 14px;
            font-size: 1.72rem;
            line-height: 1.1;
            font-weight: 500;
          }

          .aurum-faq-section h2 span {
            display: block;
          }

          .aurum-faq-section .mx-auto.max-w-4xl > p:last-child {
            margin-top: 12px;
            max-width: 320px;
            font-size: 0.88rem;
            line-height: 1.55;
          }

          .aurum-faq-panel,
          .aurum-faq-sidebar,
          .aurum-faq-item {
            border-radius: 16px;
          }

          .aurum-faq-panel {
            position: relative;
            margin-top: 18px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            border: 0;
            background: transparent;
            padding: 0;
            backdrop-filter: none;
          }

          .aurum-faq-sidebar {
            display: grid;
            order: 1;
            grid-template-columns: 14px minmax(0, 1fr) 14px;
            align-items: center;
            column-gap: 2px;
            min-height: 38px;
            border: 0;
            background: transparent;
            padding: 0;
          }

          .aurum-faq-tabs-rail {
            grid-column: 2;
            grid-row: 1;
            display: flex;
            width: 100%;
            max-width: 100%;
            gap: 6px;
            overflow-x: auto;
            overflow-y: visible;
            padding: 0;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .aurum-faq-tabs-rail::-webkit-scrollbar {
            display: none;
          }

          .aurum-faq-tab-arrow {
            position: static;
            transform: none;
            z-index: 4;
            display: inline-flex;
            width: 14px;
            height: 36px;
            align-self: center;
            align-items: center;
            justify-content: center;
            place-items: center;
            border: 0;
            border-radius: 999px;
            background: transparent;
            color: var(--accent);
            line-height: 1;
          }

          .aurum-faq-tab-arrow-left {
            grid-column: 1;
            grid-row: 1;
          }

          .aurum-faq-tab-arrow-right {
            grid-column: 3;
            grid-row: 1;
          }

          .aurum-faq-section .aurum-faq-tab {
            min-height: 36px;
            min-width: max-content;
            flex: 0 0 auto;
            scroll-snap-align: start;
            gap: 6px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 11px;
            padding: 4px 7px;
            font-size: 0.84rem;
            font-weight: 600;
            background: transparent;
            transform: none !important;
            box-shadow: none;
            white-space: nowrap;
          }

          .aurum-faq-section .aurum-faq-tab.active {
            border: 1px solid rgba(214, 178, 95, 0.78);
            background:
              linear-gradient(135deg, rgba(214, 178, 95, 0.12), rgba(255, 255, 255, 0.03)),
              rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 0 1px rgba(214, 178, 95, 0.12);
          }

          .aurum-faq-section .aurum-faq-tab:hover {
            transform: none !important;
          }

          .aurum-faq-tab-icon {
            width: 22px;
            height: 22px;
            border-radius: 8px;
          }

          .aurum-faq-count {
            width: 18px;
            height: 18px;
            font-size: 9px;
          }

          .aurum-faq-panel > .grid {
            order: 2;
            gap: 9px;
          }

          .aurum-faq-section .aurum-faq-question {
            min-height: 56px;
            gap: 12px;
            padding: 14px 15px;
            font-size: 0.94rem;
            font-weight: 600;
            line-height: 1.24;
          }

          .aurum-faq-section .aurum-faq-item.open .aurum-faq-question {
            min-height: 50px;
            padding-bottom: 7px;
          }

          .aurum-faq-toggle {
            width: 24px;
            height: 24px;
            border: 0;
          }

          .aurum-faq-section .aurum-faq-answer {
            padding: 0 15px 15px;
            font-size: 0.8rem;
            line-height: 1.5;
          }

          .aurum-faq-note {
            display: none;
          }

          .aurum-faq-help {
            grid-column: 1 / -1;
            order: 3;
            display: none;
            margin-top: 10px;
            padding: 24px 10px 0;
            text-align: center;
          }

          .aurum-faq-help-mobile {
            order: 3;
            display: block;
            margin-top: 14px;
            padding: 22px 10px 0;
            text-align: center;
          }

          .aurum-faq-help p {
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.22em;
          }

          .aurum-faq-help h3 {
            margin-top: 12px;
            font-size: 1.25rem;
            font-weight: 500;
            line-height: 1.25;
          }

          .aurum-faq-help a {
            min-height: 40px;
            margin-top: 16px;
            padding-inline: 28px;
            font-size: 0.9rem;
            font-weight: 600;
          }

          [data-theme="light"] .aurum-faq-tab {
            background: transparent;
          }

          [data-theme="light"] .aurum-faq-panel {
            background: transparent;
          }
        }
      `}</style>
    </section>
  );
}
