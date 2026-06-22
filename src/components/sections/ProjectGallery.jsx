"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Images, MessageCircle, X } from "lucide-react";

const galleryTabs = [
  {
    id: "residences",
    label: "Residences",
    note:
      "Warm interiors, generous windows and calm daily spaces shaped for premium family living.",
    items: [
      {
        title: "Sunlit Living Lounge",
        image: "/gallery/residence/sunlight.jpg",
        text: "A composed lounge moment with open proportions and soft natural light.",
      },
      {
        title: "Private Family Suite",
        image: "/gallery/residence/private family.jpg",
        text: "A quiet bedroom view planned around comfort, privacy and everyday ease.",
      },
      {
        title: "Refined Kitchen Flow",
        image: "/gallery/residence/kitchen.jpg",
        text: "Functional kitchen planning with a premium, clean-lined residential feel.",
      },
      {
        title: "Calm Dining Setting",
        image: "/gallery/residence/calm seating.jpg",
        text: "A brighter family setting designed for slow evenings and easy hosting.",
      },
      {
        title: "Signature Interior Mood",
        image: "/gallery/residence/interior.jpg",
        text: "Aurum's interior mood balances material warmth with modern clarity.",
      },
      {
        title: "Open Home Perspective",
        image: "/gallery/residence/open home.jpg",
        text: "Light, volume and air remain the visual foundation of the home.",
      },
    ],
  },
  {
    id: "walkthrough",
    label: "Walkthrough",
    type: "video",
    note:
      "A single guided walkthrough slot for the project video, ready for the final walkthrough file.",
    items: [
      {
        title: "Aurum Walkthrough Preview",
        image: "/section-7/poster.webp",
        video: "/section-7/walkthrough.mp4",
        text: "A guided project walkthrough planned for a clearer look at arrival, lifestyle and residence flow.",
        type: "video",
      },
    ],
  },
  {
    id: "arrival",
    label: "Arrival",
    note:
      "A refined arrival story with premium frontage, tower presence and a calmer approach home.",
    items: [
      {
        title: "Aurum Arrival Court",
        image: "/gallery/arrival/arrival1.jpg",
        text: "A polished arrival frame for residents and guests.",
      },
      {
        title: "Prime Corridor Presence",
        image: "/gallery/arrival/arrival2.jpg",
        text: "A city-connected address close to key Mohali destinations.",
      },
      {
        title: "Tower Lifestyle View",
        image: "/gallery/arrival/arrival3.jpg",
        text: "A luxury address designed with scale, privacy and presence.",
      },
      {
        title: "Landscape Edge",
        image: "/gallery/arrival/arrival4.jpg",
        text: "Green transitions create a softer rhythm around the built form.",
      },
      {
        title: "Evening Facade Mood",
        image: "/gallery/arrival/arrival5.jpg",
        text: "A composed night-time view for a more cinematic arrival.",
      },
      {
        title: "Connected Address",
        image: "/gallery/arrival/arrival6.jpg",
        text: "A strategic Sector 67 setting with faster access to daily essentials.",
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    note:
      "Club-style amenities, wellness spaces and open planning bring daily life into a richer rhythm.",
    items: [
      {
        title: "Club Life Preview",
        image: "/gallery/lifestyle/club.jpg",
        text: "Social, wellness and leisure zones planned for all age groups.",
      },
      {
        title: "Open Green Planning",
        image: "/gallery/lifestyle/green planing.jpg",
        text: "A project language shaped around openness, air and greenery.",
      },
      {
        title: "Wellness Deck Mood",
        image: "/gallery/lifestyle/wellnes deck.jpg",
        text: "A visual pause for wellness-led community living.",
      },
      {
        title: "Private Walkthrough Frame",
        image: "/gallery/lifestyle/walkthrough frame.jpg",
        text: "Book a walkthrough to experience proportions and finishes in person.",
      },
      {
        title: "Premium Leisure Setting",
        image: "/gallery/lifestyle/premium leisure.jpg",
        text: "Curated lifestyle layers help the address feel complete.",
      },
      {
        title: "Nature-Led Everyday",
        image: "/gallery/lifestyle/nature.jpg",
        text: "Open views and landscape pockets support a calmer daily routine.",
      },
    ],
  },
];

export default function ProjectGallery() {
  const [activeTabId, setActiveTabId] = useState(galleryTabs[0].id);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const didSwipeRef = useRef(false);
  const didMountTabsRef = useRef(false);
  const tabRefs = useRef({});

  const activeTab = useMemo(
    () => galleryTabs.find((tab) => tab.id === activeTabId) ?? galleryTabs[0],
    [activeTabId]
  );

  const activeTabIndex = useMemo(
    () => Math.max(0, galleryTabs.findIndex((tab) => tab.id === activeTabId)),
    [activeTabId]
  );

  useEffect(() => {
    setActiveMobileIndex(0);
  }, [activeTabId]);

  useEffect(() => {
    if (!didMountTabsRef.current) {
      didMountTabsRef.current = true;
      return;
    }

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
      if (nextIndex < 0) return activeTab.items.length - 1;
      if (nextIndex >= activeTab.items.length) return 0;
      return nextIndex;
    });
  };

  const goToGalleryTab = (direction) => {
    const nextIndex = Math.min(Math.max(activeTabIndex + direction, 0), galleryTabs.length - 1);
    setActiveTabId(galleryTabs[nextIndex].id);
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

  const safeMobileIndex = Math.min(activeMobileIndex, Math.max(activeTab.items.length - 1, 0));
  const mobileItem = activeTab.items[safeMobileIndex];
  const isVideoTab = activeTab.type === "video";

  return (
    <section
      id="project-gallery"
      className={`project-gallery-section relative overflow-hidden bg-[var(--bg)] px-5 py-16 text-[var(--text)] sm:px-6 lg:px-8 ${
        modalItem ? "z-[9999]" : "z-20"
      }`}
    >
      <div className="project-gallery-bg absolute inset-0" />

      <div className="mobile-section-width relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 border border-[var(--accent)] bg-[var(--glass)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] backdrop-blur-xl">
            <Images size={14} />
            Project Gallery
          </p>
          <h2 className="mt-5 text-4xl font-normal leading-tight text-[var(--heading)] md:text-6xl">
            See Aurum through light, space and detail.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
            A curated preview of residences, arrival moments and lifestyle spaces inspired by
            The Medallion Aurum's premium Sector 67 address.
          </p>
        </div>

        <div className="project-gallery-tabs-control mx-auto mt-8">
          <button
            type="button"
            className="project-gallery-tab-arrow"
            onClick={() => goToGalleryTab(-1)}
            aria-label="Previous gallery category"
            disabled={activeTabIndex === 0}
          >
            <ChevronLeft size={18} />
          </button>
          <div className="project-gallery-tabs">
            {galleryTabs.map((tab) => (
              <button
                key={tab.id}
                ref={(node) => {
                  if (node) tabRefs.current[tab.id] = node;
                }}
                type="button"
                className={tab.id === activeTabId ? "active" : ""}
                onClick={() => setActiveTabId(tab.id)}
              >
                <span>{tab.label}</span>
                <i>{tab.items.length}</i>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="project-gallery-tab-arrow"
            onClick={() => goToGalleryTab(1)}
            aria-label="Next gallery category"
            disabled={activeTabIndex === galleryTabs.length - 1}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-[var(--muted)]">
          <strong className="font-semibold text-[var(--accent)]">{activeTab.label}:</strong>{" "}
          {activeTab.note}
        </p>

        {isVideoTab ? (
          <div className="mx-auto mt-8 max-w-5xl">
            <VideoCard item={activeTab.items[0]} onOpen={() => setModalItem(activeTab.items[0])} />
          </div>
        ) : (
          <div className="mt-8 hidden grid-cols-3 gap-4 lg:grid">
            {activeTab.items.map((item) => (
              <GalleryCard key={item.title} item={item} onOpen={() => setModalItem(item)} />
            ))}
          </div>
        )}

        <div className={`project-mobile-gallery mt-8 ${isVideoTab ? "hidden" : "lg:hidden"}`}>
          <div
            className="project-mobile-card-wrap"
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            {mobileItem ? (
              <GalleryCard
                item={mobileItem}
                onOpen={() => {
                  if (!didSwipeRef.current) setModalItem(mobileItem);
                }}
                priority
              />
            ) : null}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {activeTab.items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`project-gallery-dot ${index === safeMobileIndex ? "active" : ""}`}
                onClick={() => setActiveMobileIndex(index)}
                aria-label={`Show ${item.title}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <h3 className="text-3xl font-normal leading-tight text-[var(--heading)] md:text-4xl">
            Like what you see? Visit the Aurum experience.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Schedule a guided walkthrough to understand the space, location, views and finish
            quality in person.
          </p>
          <a
            href="https://wa.me/917009247378"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
          >
            <MessageCircle size={17} />
            Book Free Site Visit
          </a>
          <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
            Free pickup and drop from Chandigarh. Open 10 AM - 7 PM.
          </p>
        </div>

        <div className="project-gallery-disclaimer mx-auto mt-9 max-w-6xl border border-[var(--line)] bg-[var(--glass)] p-5 text-center text-sm leading-7 text-[var(--muted)] backdrop-blur-xl sm:p-6">
          <strong className="font-semibold text-[var(--heading)]">Disclaimer:</strong> Gallery
          visuals are indicative and use current project assets for preview. Final specifications,
          views and finishes are subject to approved plans and developer updates. RERA:
          <span className="text-[var(--accent)]"> PBRERA-SAS81-PR0685</span>
        </div>
      </div>

      {modalItem ? <GalleryModal item={modalItem} onClose={() => setModalItem(null)} /> : null}

      <style>{`
        .project-gallery-section {
          min-height: 100vh;
        }

        .project-gallery-bg {
          background:
            radial-gradient(circle at 12% 12%, rgba(244, 211, 111, 0.12), transparent 28%),
            radial-gradient(circle at 88% 42%, rgba(159, 197, 220, 0.1), transparent 30%),
            linear-gradient(180deg, var(--bg), var(--bg));
          opacity: 0.92;
        }

        .project-gallery-tabs-control {
          display: flex;
          width: min(760px, 100%);
          align-items: center;
          justify-content: center;
        }

        .project-gallery-tab-arrow {
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

        .project-gallery-tab-arrow:hover {
          background: var(--accent);
          color: var(--bg);
        }

        .project-gallery-tab-arrow:disabled {
          cursor: default;
          opacity: 0.45;
        }

        .project-gallery-tabs {
          display: flex;
          width: 100%;
          gap: 6px;
          overflow-x: auto;
          border: 1px solid rgba(214, 178, 95, 0.45);
          border-radius: 14px;
          background: rgba(5, 5, 5, 0.42);
          padding: 6px;
          scrollbar-width: thin;
          scrollbar-color: var(--accent) rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(18px);
          scroll-behavior: smooth;
        }

        [data-theme="light"] .project-gallery-tabs {
          background: rgba(255, 255, 255, 0.62);
          scrollbar-color: var(--accent) rgba(5, 5, 5, 0.24);
        }

        .project-gallery-tabs::-webkit-scrollbar,
        .project-gallery-modal-body::-webkit-scrollbar {
          height: 7px;
          width: 9px;
        }

        .project-gallery-tabs::-webkit-scrollbar-track,
        .project-gallery-modal-body::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.12);
        }

        .project-gallery-tabs::-webkit-scrollbar-thumb,
        .project-gallery-modal-body::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--accent), #fff);
          border-radius: 999px;
        }

        [data-theme="light"] .project-gallery-tabs::-webkit-scrollbar-thumb,
        [data-theme="light"] .project-gallery-modal-body::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--accent), #050505);
        }

        .project-gallery-tabs button {
          display: inline-flex;
          flex: 1 0 180px;
          min-width: 180px;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid transparent;
          border-radius: 10px;
          background: transparent;
          color: var(--heading);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          word-spacing: 0.12em;
          transition: background 0.16s ease, border-color 0.16s ease, color 0.16s ease;
        }

        .project-gallery-tabs button.active {
          border-color: rgba(214, 178, 95, 0.34);
          background: linear-gradient(135deg, rgba(214, 178, 95, 0.14), rgba(255, 255, 255, 0.04));
          color: var(--accent-strong);
        }

        .project-gallery-tabs i {
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--line);
          color: var(--heading);
          font-size: 11px;
          font-style: normal;
        }

        .project-gallery-card {
          position: relative;
          aspect-ratio: 1.5 / 1;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.36);
          border-radius: 8px;
          background: var(--glass);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
          cursor: zoom-in;
        }

        .project-gallery-video-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.42);
          border-radius: 8px;
          background: var(--glass);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
        }

        .project-gallery-video-frame {
          position: relative;
          aspect-ratio: 16 / 9;
          min-height: 280px;
          overflow: hidden;
          background: #050505;
        }

        .project-gallery-video-frame video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .project-gallery-video-frame::before {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: rgba(0, 0, 0, 0.16);
          content: "";
        }

        .project-gallery-video-copy {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr auto;
          align-items: center;
          border-top: 1px solid var(--line);
          background: rgba(5, 5, 5, 0.58);
          padding: 18px;
          color: #fff;
          backdrop-filter: blur(14px);
        }

        .project-gallery-video-copy h3 {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 400;
          line-height: 1.08;
        }

        .project-gallery-video-copy p {
          margin-top: 8px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          line-height: 1.7;
        }

        .project-gallery-card img {
          transform: scale(1);
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.45s ease;
        }

        .project-gallery-card:hover img {
          transform: scale(1.08);
        }

        .project-gallery-card::before {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: color-mix(in srgb, var(--bg) 18%, transparent);
          content: "";
          transition: opacity 0.45s ease;
        }

        [data-theme="light"] .project-gallery-card::before {
          background: color-mix(in srgb, var(--bg) 6%, transparent);
        }

        .project-gallery-card:hover::before {
          opacity: 0;
        }

        .project-gallery-card::after {
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

        .project-gallery-card:hover::after {
          inset: -42% -35% auto auto;
          opacity: 1;
        }

        .project-gallery-card-bar {
          position: absolute;
          right: 12px;
          bottom: 12px;
          left: 12px;
          z-index: 4;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 12px;
          align-items: center;
          border: 1px solid rgba(214, 178, 95, 0.42);
          border-radius: 8px;
          background: rgba(5, 5, 5, 0.68);
          padding: 10px 12px;
          color: #fff;
          backdrop-filter: blur(14px);
        }

        .project-gallery-card-bar h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
        }

        .project-gallery-card-bar button,
        .project-gallery-video-copy button,
        .project-gallery-modal-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.7);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.24);
          color: var(--accent-strong);
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .project-gallery-card-bar button {
          width: 38px;
          height: 38px;
        }

        .project-gallery-video-copy button {
          width: 46px;
          height: 46px;
        }

        .project-gallery-card-bar button:hover,
        .project-gallery-video-copy button:hover,
        .project-gallery-modal-close:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-1px);
        }

        .project-gallery-dot {
          width: 8px;
          height: 8px;
          border: 0;
          border-radius: 999px;
          background: var(--line);
          cursor: pointer;
          transition: width 0.28s ease, background 0.28s ease;
        }

        .project-gallery-dot.active {
          width: 28px;
          background: linear-gradient(90deg, var(--accent-strong), var(--blue-accent), var(--accent));
        }

        .project-gallery-disclaimer {
          border-radius: 8px;
        }

        .project-gallery-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.72);
          padding: 18px;
          backdrop-filter: blur(8px);
        }

        .project-gallery-modal-panel {
          position: relative;
          width: min(1040px, 100%);
          max-height: min(90vh, 820px);
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.48);
          border-radius: 8px;
          background: var(--bg);
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.48);
        }

        .project-gallery-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 5;
          width: 46px;
          height: 46px;
        }

        .project-gallery-modal-body {
          max-height: min(90vh, 820px);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--accent) rgba(255, 255, 255, 0.2);
        }

        .project-gallery-modal-image {
          position: relative;
          height: min(62vh, 560px);
          min-height: 360px;
          background: #050505;
        }

        .project-gallery-modal-video {
          position: relative;
          height: min(68vh, 620px);
          min-height: 420px;
          background: #050505;
        }

        .project-gallery-modal-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .project-gallery-modal-copy {
          display: grid;
          gap: 18px;
          padding: 26px;
        }

        .project-gallery-modal-copy p:first-child {
          color: var(--accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .project-gallery-modal-copy h3 {
          color: var(--heading);
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.05;
        }

        .project-gallery-modal-copy > p:last-of-type {
          max-width: 760px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .project-gallery-modal-meta {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .project-gallery-modal-meta div {
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--glass);
          padding: 16px;
        }

        .project-gallery-modal-meta span {
          display: block;
          color: var(--accent);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .project-gallery-modal-meta strong {
          margin-top: 8px;
          display: block;
          color: var(--heading);
          font-size: 14px;
          font-weight: 600;
        }

        [data-theme="light"] .project-gallery-modal {
          background: rgba(5, 5, 5, 0.58);
        }

        [data-theme="light"] .project-gallery-modal-panel {
          background: var(--bg);
        }

        [data-theme="light"] .project-gallery-video-copy {
          background: rgba(5, 5, 5, 0.62);
        }

        @media (max-width: 1023px) {
          .project-gallery-tabs-control,
          .project-gallery-tabs {
            width: 100%;
          }

          .project-gallery-tabs button {
            flex-basis: 154px;
            min-width: 154px;
          }

          .project-gallery-card {
            aspect-ratio: 0.86 / 1;
          }

          .project-gallery-video-frame {
            min-height: 240px;
          }
        }

        @media (max-width: 640px) {
          .project-gallery-section {
            padding-top: 38px;
            padding-right: 5px;
            padding-bottom: 28px;
            padding-left: 5px;
          }

          .project-gallery-section .mobile-section-width {
            max-width: 360px;
          }

          .project-gallery-section .max-w-4xl {
            max-width: 330px;
          }

          .project-gallery-section .max-w-4xl > p:first-child {
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

          .project-gallery-section .max-w-4xl > p:first-child svg {
            width: 12px;
            height: 12px;
          }

          .project-gallery-section h2 {
            margin-top: 18px;
            font-size: 2rem !important;
            line-height: 1.04 !important;
          }

          .project-gallery-section .max-w-4xl > p:last-child {
            margin-top: 12px;
            font-size: 0.84rem;
            line-height: 1.42;
          }

          .project-gallery-tabs-control {
            display: grid;
            grid-template-columns: 16px minmax(0, 1fr) 16px;
            width: 100%;
            margin-top: 26px;
            gap: 2px;
            align-items: center;
          }

          .project-gallery-tab-arrow {
            display: inline-flex;
            width: 16px;
            height: 34px;
            border: 0;
            background: transparent;
            color: var(--accent-strong);
          }

          .project-gallery-tab-arrow svg {
            width: 18px;
            height: 18px;
            stroke-width: 3;
          }

          .project-gallery-tab-arrow:hover {
            background: transparent;
            color: var(--accent);
          }

          .project-gallery-tabs {
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

          .project-gallery-tabs::-webkit-scrollbar {
            display: none;
          }

          .project-gallery-tabs button {
            flex: 0 0 auto;
            min-width: max-content;
            min-height: 40px;
            padding: 0 15px;
            gap: 7px;
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

          .project-gallery-tabs button.active {
            border-color: var(--line);
            background:
              linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, transparent), var(--glass)),
              var(--glass);
            color: var(--accent-strong);
          }

          .project-gallery-tabs i {
            display: inline-flex;
            width: 19px;
            height: 19px;
            font-size: 10px;
          }

          .project-gallery-section .project-gallery-tabs-control + p {
            margin-top: 14px;
            font-size: 0.78rem;
            line-height: 1.45;
          }

          .project-gallery-section .mx-auto.mt-8.max-w-5xl {
            width: 100%;
            margin-top: 22px;
          }

          .project-gallery-video-card {
            width: 100%;
            border-color: var(--line);
            border-radius: 14px;
          }

          .project-gallery-video-frame {
            width: 100%;
            min-height: 0;
            aspect-ratio: 16 / 11;
          }

          .project-gallery-video-frame video {
            width: 100%;
            height: 100%;
          }

          .project-mobile-gallery {
            margin-top: 22px;
          }

          .project-mobile-card-wrap {
            width: 100%;
          }

          .project-gallery-card {
            width: 100%;
            height: clamp(324px, 94vw, 356px);
            aspect-ratio: auto;
            border-color: var(--line);
            border-radius: 14px;
          }

          .project-gallery-card-bar h3 {
            font-size: 14px;
          }

          .project-gallery-card-bar {
            right: 12px;
            bottom: 12px;
            left: 12px;
            border-color: var(--line);
            background: color-mix(in srgb, var(--bg) 72%, transparent);
          }

          .project-gallery-dot {
            width: 8px !important;
            height: 8px !important;
            border: 0;
            border-radius: 999px;
            background: var(--line);
            padding: 0;
          }

          .project-gallery-dot.active {
            width: 28px !important;
            background: linear-gradient(90deg, var(--accent-strong), var(--blue-accent), var(--accent));
          }

          .project-gallery-section .mx-auto.mt-10.max-w-3xl {
            margin-top: 28px;
            border: 1px solid var(--line);
            border-radius: 16px;
            background: var(--glass);
            padding: 16px;
            text-align: left;
            backdrop-filter: blur(18px);
          }

          .project-gallery-section .mx-auto.mt-10.max-w-3xl h3 {
            font-size: 1rem !important;
            line-height: 1.28 !important;
          }

          .project-gallery-section .mx-auto.mt-10.max-w-3xl p {
            margin-top: 8px;
            font-size: 0.78rem;
            line-height: 1.45;
          }

          .project-gallery-section .mx-auto.mt-10.max-w-3xl p:last-child {
            display: none;
          }

          .project-gallery-section .mx-auto.mt-10.max-w-3xl a {
            display: flex;
            width: min(100%, 236px);
            min-height: 44px;
            margin-top: 14px;
            margin-right: auto;
            margin-left: auto;
            padding: 0 16px;
            font-size: 0.83rem;
            background: var(--accent-strong);
            color: var(--bg);
          }

          .project-gallery-disclaimer {
            margin-top: 18px;
            padding: 14px;
            font-size: 0.72rem;
            line-height: 1.45;
            text-align: left;
          }

          .project-gallery-modal {
            z-index: 10000;
            align-items: center;
            padding: 20px 5px;
            background: color-mix(in srgb, var(--bg) 88%, transparent);
          }

          .project-gallery-modal-panel {
            width: min(100%, 360px);
            max-height: calc(100dvh - 40px);
            border-color: var(--line);
            border-radius: 16px;
            background:
              linear-gradient(135deg, var(--glass), color-mix(in srgb, var(--accent) 8%, transparent)),
              var(--bg);
            padding: 10px;
          }

          .project-gallery-modal-image {
            height: clamp(270px, 82vw, 320px);
            min-height: 0;
            overflow: hidden;
            border-radius: 8px;
          }

          .project-gallery-modal-video {
            height: clamp(270px, 82vw, 320px);
            min-height: 0;
            overflow: hidden;
            border-radius: 8px;
          }

          .project-gallery-modal-close {
            top: 18px;
            right: 18px;
            width: 42px;
            height: 42px;
            border-color: var(--accent);
            background: var(--header);
            color: var(--accent-strong);
          }

          .project-gallery-modal-body {
            max-height: calc(100dvh - 60px);
            overflow-y: auto;
          }

          .project-gallery-video-copy {
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 10px 12px;
            border-top-color: var(--line);
            background: color-mix(in srgb, var(--bg) 78%, transparent);
          }

          .project-gallery-video-copy h3 {
            min-width: 0;
            color: var(--heading);
            font-family: var(--font-body);
            font-size: 14px;
            font-weight: 700;
            line-height: 1.2;
          }

          .project-gallery-video-copy p {
            display: none;
          }

          .project-gallery-video-copy button {
            width: 38px;
            height: 38px;
            border-color: var(--accent);
            color: var(--accent-strong);
          }

          .project-gallery-modal-copy {
            gap: 10px;
            padding: 14px 4px 4px;
          }

          .project-gallery-modal-copy p:first-child {
            font-size: 0.62rem;
            letter-spacing: 0.2em;
          }

          .project-gallery-modal-copy h3 {
            font-size: 1.25rem;
            line-height: 1.14;
          }

          .project-gallery-modal-copy > p:last-of-type {
            font-size: 0.8rem;
            line-height: 1.45;
          }

          .project-gallery-modal-meta {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .project-gallery-modal-meta div {
            padding: 10px;
          }

          .project-gallery-modal-meta span {
            font-size: 0.56rem;
            letter-spacing: 0.14em;
          }

          .project-gallery-modal-meta strong {
            margin-top: 5px;
            font-size: 0.78rem;
          }

          .project-gallery-modal-meta {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function GalleryCard({ item, onOpen, priority = false }) {
  return (
    <article className="project-gallery-card" onClick={onOpen}>
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width: 1024px) 31vw, 92vw"
        quality={74}
        className="object-cover"
        priority={priority}
      />
      <div className="project-gallery-card-bar">
        <h3>{item.title}</h3>
        <button type="button" onClick={onOpen} aria-label={`Open ${item.title} full image`}>
          <Expand size={18} />
        </button>
      </div>
    </article>
  );
}

function VideoCard({ item, onOpen }) {
  return (
    <article className="project-gallery-video-card">
      <div className="project-gallery-video-frame">
        <video controls preload="metadata" poster={item.image}>
          <source src={item.video} type="video/mp4" />
        </video>
      </div>
      <div className="project-gallery-video-copy">
        <div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
        <button type="button" onClick={onOpen} aria-label={`Open ${item.title} preview`}>
          <Expand size={19} />
        </button>
      </div>
    </article>
  );
}

function GalleryModal({ item, onClose }) {
  const isVideo = item.type === "video";

  return (
    <div className="project-gallery-modal" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="project-gallery-modal-panel">
        <button type="button" className="project-gallery-modal-close" onClick={onClose} aria-label="Close gallery image">
          <X size={22} />
        </button>
        <div className="project-gallery-modal-body">
          {isVideo ? (
            <div className="project-gallery-modal-video">
              <video controls autoPlay preload="metadata" poster={item.image}>
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="project-gallery-modal-image">
              <Image src={item.image} alt={item.title} fill sizes="min(1040px, 100vw)" quality={82} className="object-cover" />
            </div>
          )}
          <div className="project-gallery-modal-copy">
            <p>Project Gallery</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="project-gallery-modal-meta">
              <div>
                <span>Category</span>
                <strong>The Medallion Aurum</strong>
              </div>
              <div>
                <span>Viewing</span>
                <strong>{isVideo ? "Walkthrough Video" : "Full Image Preview"}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
