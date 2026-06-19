"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  Baby,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  House,
  Monitor,
  Sparkles,
  Trees,
  Waves,
  X,
} from "lucide-react";

const amenities = [
  {
    id: "cctv",
    title: "CCTV Surveillance",
    image: "/structslider/struct2.jpg",
    category: "Security & Convenience",
    icon: Monitor,
  },
  {
    id: "clubhouse",
    title: "Clubhouse Lounge",
    image: "/structslider/struct4.jpg",
    category: "Recreation",
    icon: House,
  },
  {
    id: "fitness",
    title: "Fitness Studio",
    image: "/hero/hero5.jpg",
    category: "Wellness",
    icon: Dumbbell,
  },
  {
    id: "kids",
    title: "Kids Play Zone",
    image: "/hero/hero3.jpg",
    category: "Recreation",
    icon: Baby,
  },
  {
    id: "pool",
    title: "Indoor Pool",
    image: "/section-7/poster.webp",
    category: "Wellness",
    icon: Waves,
  },
  {
    id: "garden",
    title: "Landscaped Gardens",
    image: "/structslider/struct5.jpg",
    category: "Recreation",
    icon: Trees,
  },
];

const amenityTabs = [
  { id: "all", label: "All Amenities", ids: amenities.map((item) => item.id) },
  { id: "wellness", label: "Wellness", ids: ["fitness", "pool"] },
  { id: "recreation", label: "Recreation", ids: ["clubhouse", "kids", "garden"] },
  { id: "security", label: "Security & Convenience", ids: ["cctv"] },
];

export default function LifestyleAmenities() {
  const [activeTabId, setActiveTabId] = useState(amenityTabs[0].id);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const didSwipeRef = useRef(false);
  const tabsRailRef = useRef(null);
  const tabRefs = useRef({});

  const activeTab = useMemo(
    () => amenityTabs.find((tab) => tab.id === activeTabId) ?? amenityTabs[0],
    [activeTabId]
  );

  const visibleAmenities = useMemo(
    () => activeTab.ids.map((id) => amenities.find((item) => item.id === id)).filter(Boolean),
    [activeTab]
  );

  const activeTabIndex = useMemo(
    () => Math.max(0, amenityTabs.findIndex((tab) => tab.id === activeTabId)),
    [activeTabId]
  );

  useEffect(() => {
    setActiveMobileIndex(0);
  }, [activeTabId]);

  useEffect(() => {
    tabRefs.current[activeTabId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [activeTabId]);

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

  const goToMobileSlide = (direction) => {
    setActiveMobileIndex((index) => {
      const nextIndex = index + direction;
      if (nextIndex < 0) return visibleAmenities.length - 1;
      if (nextIndex >= visibleAmenities.length) return 0;
      return nextIndex;
    });
  };

  const goToAmenityTab = (direction) => {
    const nextIndex = Math.min(Math.max(activeTabIndex + direction, 0), amenityTabs.length - 1);
    setActiveTabId(amenityTabs[nextIndex].id);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const distance = touchStartX - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 42) {
      didSwipeRef.current = true;
      goToMobileSlide(distance > 0 ? 1 : -1);
      window.setTimeout(() => {
        didSwipeRef.current = false;
      }, 180);
    }
    setTouchStartX(null);
  };

  const safeMobileIndex = Math.min(activeMobileIndex, Math.max(visibleAmenities.length - 1, 0));
  const mobileItem = visibleAmenities[safeMobileIndex];

  return (
    <section
      id="lifestyle-amenities"
      className={`lifestyle-amenities-section relative overflow-hidden bg-[var(--bg)] px-5 py-16 text-[var(--text)] sm:px-6 lg:px-8 ${
        modalItem ? "z-[9999]" : "z-20"
      }`}
    >
      <div className="lifestyle-amenities-bg absolute inset-0" />

      <div className="mobile-section-width relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] backdrop-blur-xl">
            <Sparkles size={14} />
            Lifestyle Amenities
          </p>
          <h2 className="mt-5 text-4xl font-normal leading-tight text-[var(--heading)] md:text-6xl">
            Curated for <span className="text-[var(--accent)]">elevated living</span>
          </h2>
        </div>

        <div className="lifestyle-tabs-control mx-auto mt-8">
          <button
            type="button"
            className="lifestyle-tab-arrow"
            onClick={() => goToAmenityTab(-1)}
            aria-label="Previous amenity category"
            disabled={activeTabIndex === 0}
          >
            <ChevronLeft size={18} />
          </button>
          <div ref={tabsRailRef} className="lifestyle-amenities-tabs">
            {amenityTabs.map((tab) => (
              <button
                key={tab.id}
                ref={(node) => {
                  if (node) tabRefs.current[tab.id] = node;
                }}
                type="button"
                className={tab.id === activeTabId ? "active" : ""}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="lifestyle-tab-arrow"
            onClick={() => goToAmenityTab(1)}
            aria-label="Next amenity category"
            disabled={activeTabIndex === amenityTabs.length - 1}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-8 hidden grid-cols-3 gap-4 lg:grid">
          {visibleAmenities.map((item) => (
            <AmenityCard key={item.id} item={item} onOpen={() => setModalItem(item)} />
          ))}
        </div>

        <div className="lifestyle-mobile-gallery mt-8 lg:hidden">
          <div
            className="lifestyle-mobile-card-wrap"
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            {mobileItem ? (
              <AmenityCard
                item={mobileItem}
                onOpen={() => {
                  if (!didSwipeRef.current) setModalItem(mobileItem);
                }}
                priority
              />
            ) : null}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {visibleAmenities.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`lifestyle-dot ${index === safeMobileIndex ? "active" : ""}`}
                onClick={() => setActiveMobileIndex(index)}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>
        </div>

        <div className="lifestyle-amenities-cta mx-auto mt-8 grid max-w-6xl gap-5 border border-[var(--line)] bg-[var(--glass)] p-5 backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center md:p-6">
          <div>
            <p className="text-sm font-semibold text-[var(--muted)]">Experience these amenities</p>
            <p className="mt-3 text-2xl font-semibold text-[var(--heading)]">
              Get the owner kit and plan your private site visit.
            </p>
          </div>
          <a
            href="https://wa.me/917009247378"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent-strong)] px-8 text-sm font-semibold text-[var(--bg)] transition-colors duration-300 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
          >
            Book Private Site Visit
          </a>
        </div>
      </div>

      {modalItem ? <AmenityModal item={modalItem} onClose={() => setModalItem(null)} /> : null}

      <style>{`
        .lifestyle-amenities-section {
          min-height: 100vh;
        }

        .lifestyle-amenities-bg {
          background:
            radial-gradient(circle at 20% 12%, rgba(214, 178, 95, 0.13), transparent 30%),
            radial-gradient(circle at 82% 38%, rgba(159, 197, 220, 0.09), transparent 32%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .lifestyle-tabs-control {
          display: flex;
          width: min(760px, 100%);
          align-items: center;
          justify-content: center;
        }

        .lifestyle-tab-arrow {
          display: none;
        }

        .lifestyle-amenities-tabs {
          display: flex;
          width: 100%;
          gap: 6px;
          overflow-x: auto;
          border: 1px solid rgba(214, 178, 95, 0.45);
          border-radius: 14px;
          background: rgba(5, 5, 5, 0.44);
          padding: 6px;
          scrollbar-width: thin;
          scrollbar-color: var(--accent) rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(18px);
        }

        [data-theme="light"] .lifestyle-amenities-tabs {
          background: rgba(255, 255, 255, 0.68);
          scrollbar-color: var(--accent) rgba(5, 5, 5, 0.24);
        }

        .lifestyle-amenities-tabs::-webkit-scrollbar {
          height: 7px;
        }

        .lifestyle-amenities-tabs::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.12);
        }

        .lifestyle-amenities-tabs::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: linear-gradient(135deg, var(--accent), #fff);
        }

        [data-theme="light"] .lifestyle-amenities-tabs::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--accent), #050505);
        }

        .lifestyle-amenities-tabs button {
          flex: 1 0 176px;
          min-width: 176px;
          min-height: 46px;
          border: 1px solid transparent;
          border-radius: 10px;
          background: transparent;
          color: var(--heading);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0 14px;
          white-space: nowrap;
          word-spacing: 0.12em;
          transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease;
        }

        .lifestyle-amenities-tabs button.active {
          border-color: rgba(214, 178, 95, 0.36);
          background: linear-gradient(135deg, rgba(214, 178, 95, 0.15), rgba(255, 255, 255, 0.04));
          color: var(--accent-strong);
        }

        .lifestyle-card {
          position: relative;
          aspect-ratio: 1.5 / 1;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.36);
          border-radius: 8px;
          background: var(--glass);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
          cursor: zoom-in;
        }

        .lifestyle-card img {
          transform: scale(1);
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .lifestyle-card:hover img {
          transform: scale(1.08);
        }

        .lifestyle-card::before {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: color-mix(in srgb, var(--bg) 18%, transparent);
          content: "";
          transition: opacity 0.45s ease;
        }

        [data-theme="light"] .lifestyle-card::before {
          background: color-mix(in srgb, var(--bg) 6%, transparent);
        }

        .lifestyle-card:hover::before {
          opacity: 0;
        }

        .lifestyle-card::after {
          position: absolute;
          inset: -42% auto auto -55%;
          z-index: 3;
          width: 44%;
          height: 190%;
          background: linear-gradient(115deg, transparent, rgba(255, 255, 255, 0.52), transparent);
          content: "";
          opacity: 0;
          transform: rotate(16deg);
          transition: inset 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
        }

        .lifestyle-card:hover::after {
          inset: -42% -35% auto auto;
          opacity: 1;
        }

        .lifestyle-card-copy {
          position: absolute;
          right: 18px;
          bottom: 18px;
          left: 18px;
          z-index: 4;
          color: #fff;
        }

        .lifestyle-card-copy span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f4d36f;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55);
        }

        .lifestyle-card-copy svg {
          flex: 0 0 auto;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.7));
          stroke-width: 2.4;
        }

        .lifestyle-card-copy h3 {
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
        }

        .lifestyle-tab-arrow {
          display: none;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.7);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.24);
          color: var(--accent-strong);
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .lifestyle-tab-arrow:hover {
          background: var(--accent);
          color: var(--bg);
        }

        .lifestyle-tab-arrow:disabled {
          cursor: default;
          opacity: 0.45;
        }

        .lifestyle-dot {
          width: 8px;
          height: 8px;
          border: 0;
          border-radius: 999px;
          background: var(--line);
          cursor: pointer;
          transition: width 0.28s ease, background 0.28s ease;
        }

        .lifestyle-dot.active {
          width: 28px;
          background: linear-gradient(90deg, var(--accent-strong), var(--blue-accent));
        }

        .lifestyle-amenities-cta {
          border-radius: 8px;
        }

        .lifestyle-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.74);
          padding: 18px;
          backdrop-filter: blur(8px);
        }

        .lifestyle-modal-panel {
          position: relative;
          width: min(1060px, 100%);
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.5);
          border-radius: 12px;
          background: var(--bg);
          padding: 18px;
          box-shadow: 0 42px 130px rgba(0, 0, 0, 0.54);
        }

        .lifestyle-modal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 14px;
        }

        .lifestyle-modal-title {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          border: 1px solid rgba(214, 178, 95, 0.62);
          border-radius: 999px;
          padding: 0 16px;
          color: var(--accent-strong);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .lifestyle-modal-close {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.7);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.42);
          color: #fff;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .lifestyle-modal-close:hover {
          background: var(--accent);
        }

        .lifestyle-modal-image {
          position: relative;
          height: min(70vh, 640px);
          min-height: 420px;
          overflow: hidden;
          border-radius: 8px;
          background: #101010;
        }

        @media (max-width: 1023px) {
          .lifestyle-tabs-control {
            width: 100%;
          }

          .lifestyle-amenities-tabs {
            width: 100%;
          }

          .lifestyle-amenities-tabs button {
            flex-basis: 154px;
            min-width: 154px;
          }

          .lifestyle-card {
            aspect-ratio: 0.86 / 1;
          }
        }

        @media (max-width: 640px) {
          .lifestyle-amenities-section {
            padding-top: 38px;
            padding-right: 5px;
            padding-bottom: 22px;
            padding-left: 5px;
          }

          .lifestyle-amenities-section .mobile-section-width {
            max-width: 360px;
          }

          .lifestyle-amenities-section .max-w-4xl {
            max-width: 330px;
          }

          .lifestyle-amenities-section .max-w-4xl > p {
            min-height: 30px;
            max-width: 100%;
            padding: 0 16px;
            gap: 6px;
            border-color: var(--line);
            border-radius: 999px;
            background: var(--glass);
            font-size: 0.57rem;
            letter-spacing: 0.18em;
          }

          .lifestyle-amenities-section .max-w-4xl > p svg {
            width: 12px;
            height: 12px;
          }

          .lifestyle-amenities-section h2 {
            margin-top: 18px;
            font-size: 2rem !important;
            line-height: 1.04 !important;
          }

          .lifestyle-tabs-control {
            display: grid;
            grid-template-columns: 16px minmax(0, 1fr) 16px;
            width: 100%;
            margin-top: 26px;
            gap: 2px;
            align-items: center;
          }

          .lifestyle-tab-arrow {
            display: inline-flex;
            width: 16px;
            height: 34px;
            border: 0;
            background: transparent;
            color: var(--accent-strong);
          }

          .lifestyle-tab-arrow svg {
            width: 18px;
            height: 18px;
            stroke-width: 3;
          }

          .lifestyle-tab-arrow:hover {
            background: transparent;
            color: var(--accent);
          }

          .lifestyle-amenities-tabs {
            gap: 5px;
            overflow-x: auto;
            border: 0;
            border-radius: 0;
            background: transparent;
            padding: 0;
            scroll-padding-inline: 0;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            backdrop-filter: none;
          }

          .lifestyle-amenities-tabs::-webkit-scrollbar {
            display: none;
          }

          .lifestyle-amenities-tabs button {
            flex: 0 0 auto;
            min-width: max-content;
            min-height: 40px;
            padding: 0 15px;
            border-color: transparent;
            border-radius: 10px;
            background: transparent;
            color: var(--heading);
            font-size: 0.84rem;
            letter-spacing: 0.018em;
            line-height: 1;
            scroll-snap-align: start;
            word-spacing: 0.14em;
          }

          .lifestyle-amenities-tabs button.active {
            border-color: var(--line);
            background:
              linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, transparent), var(--glass)),
              var(--glass);
            color: var(--accent-strong);
          }

          .lifestyle-mobile-gallery {
            margin-top: 22px;
          }

          .lifestyle-mobile-card-wrap {
            width: 100%;
          }

          .lifestyle-card {
            width: 100%;
            height: clamp(324px, 94vw, 356px);
            aspect-ratio: auto;
            border-color: var(--line);
            border-radius: 14px;
          }

          .lifestyle-amenities-cta {
            margin-top: 36px;
            gap: 18px;
            border-color: var(--line);
            border-radius: 16px;
            padding: 22px 18px 20px;
            text-align: left;
          }

          .lifestyle-amenities-cta p:first-child {
            font-size: 0.78rem;
            line-height: 1.25;
          }

          .lifestyle-amenities-cta p:nth-child(2) {
            margin-top: 14px;
            font-size: 1.08rem;
            line-height: 1.42;
          }

          .lifestyle-amenities-cta a {
            min-height: 44px;
            padding: 0 18px;
            font-size: 0.83rem;
          }

          .lifestyle-dot {
            width: 8px;
            height: 8px;
            background: var(--line);
          }

          .lifestyle-dot.active {
            width: 34px;
            background: linear-gradient(90deg, var(--accent-strong), var(--blue-accent));
          }

          .lifestyle-modal {
            z-index: 10000;
            align-items: flex-start;
            padding: 104px 5px 20px;
            background: color-mix(in srgb, var(--bg) 88%, transparent);
          }

          .lifestyle-modal-panel {
            width: min(100%, 360px);
            border-color: var(--line);
            border-radius: 16px;
            background:
              linear-gradient(135deg, var(--glass), color-mix(in srgb, var(--accent) 8%, transparent)),
              var(--bg);
            padding: 12px;
          }

          .lifestyle-modal-image {
            height: clamp(270px, 82vw, 320px);
            min-height: 0;
            border-radius: 8px;
          }

          .lifestyle-modal-top {
            gap: 8px;
            padding-bottom: 10px;
          }

          .lifestyle-modal-title {
            min-height: 32px;
            max-width: calc(100% - 54px);
            padding: 0 15px;
            overflow: hidden;
            border-color: var(--accent);
            color: var(--accent-strong);
            font-size: 0.58rem;
            letter-spacing: 0.13em;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .lifestyle-modal-close {
            width: 42px;
            height: 42px;
            flex: 0 0 auto;
            border-color: var(--accent);
            background: var(--header);
            color: var(--accent-strong);
          }
        }
      `}</style>
    </section>
  );
}

function AmenityCard({ item, onOpen, priority = false }) {
  const Icon = item.icon;

  return (
    <button type="button" className="lifestyle-card text-left" onClick={onOpen}>
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 31vw, 92vw"
        className="object-cover"
        priority={priority}
      />
      <div className="lifestyle-card-copy">
        <span>
          <Icon size={17} />
          <h3>{item.title}</h3>
        </span>
      </div>
    </button>
  );
}

function AmenityModal({ item, onClose }) {
  return (
    <div className="lifestyle-modal" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="lifestyle-modal-panel">
        <div className="lifestyle-modal-top">
          <p className="lifestyle-modal-title">{item.title}</p>
          <button type="button" className="lifestyle-modal-close" onClick={onClose} aria-label="Close amenity preview">
            <X size={21} />
          </button>
        </div>
        <div className="lifestyle-modal-image">
          <Image src={item.image} alt={item.title} fill sizes="min(1060px, 100vw)" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
