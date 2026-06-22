"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUp,
  Building2,
  Crown,
  FileText,
  Gem,
  Home,
  Landmark,
  LayoutGrid,
  MapPin,
  Maximize,
  MessageSquare,
  PhoneCall,
  Plane,
  Shield,
  ShoppingBag,
  Sparkles,
  SunMedium,
  Trees,
  UserRound,
  Waves,
} from "lucide-react";

const STRUCT_SLIDER_VERSION = "fresh-20260620";

const SLIDES = [
  {
    eyebrow: "The Aurum Arrival",
    chapter: "Arrival",
    titleLine1: "A Landmark Address",
    titleLine2: "Crafted for Excellence",
    body: "Medallion Aurum is not just a residence, it is a statement of success designed for those who live above ordinary.",
    image: `/structslider/struct1.webp?v=${STRUCT_SLIDER_VERSION}`,
    cards: [
      { label: "Prime Location", icon: MapPin },
      { label: "Premium Living", icon: Crown },
      { label: "Exclusivity", icon: Gem },
    ],
  },
  {
    eyebrow: "Prime Urban Corridor",
    chapter: "Location",
    titleLine1: "Connected to the",
    titleLine2: "City's Finest Destinations",
    body: "Seamless access to business hubs, lifestyle zones, premium retail and daily conveniences.",
    image: `/structslider/struct2.webp?v=${STRUCT_SLIDER_VERSION}`,
    cards: [
      { label: "Airport Access", icon: Plane },
      { label: "Business Hub", icon: Building2 },
      { label: "Retail Nearby", icon: ShoppingBag },
    ],
  },
  {
    eyebrow: "Signature Residences",
    chapter: "Residences",
    titleLine1: "Spacious Homes with",
    titleLine2: "Luxury Detailing",
    body: "Elegant layouts, refined finishes and timeless architecture created for modern luxury living.",
    image: `/structslider/struct3.webp?v=${STRUCT_SLIDER_VERSION}`,
    cards: [
      { label: "Luxury Layouts", icon: Home },
      { label: "Modern Design", icon: LayoutGrid },
      { label: "Premium Finish", icon: Sparkles },
    ],
  },
  {
    eyebrow: "Club & Lifestyle",
    chapter: "Lifestyle",
    titleLine1: "Amenities Designed",
    titleLine2: "Around Your Lifestyle",
    body: "From wellness to celebrations, every space is crafted for elevated everyday living.",
    image: `/structslider/struct4.webp?v=${STRUCT_SLIDER_VERSION}`,
    cards: [
      { label: "Clubhouse", icon: Landmark },
      { label: "Pool Deck", icon: Waves },
      { label: "Wellness", icon: SunMedium },
    ],
  },
  {
    eyebrow: "Views & Open Spaces",
    chapter: "Views",
    titleLine1: "Skyline Views,",
    titleLine2: "Light and Privacy",
    body: "Designed around openness, natural light, skyline views and a refined sense of privacy.",
    image: `/structslider/struct5.webp?v=${STRUCT_SLIDER_VERSION}`,
    cards: [
      { label: "Open Spaces", icon: Trees },
      { label: "Sky Views", icon: Maximize },
      { label: "Privacy", icon: Shield },
    ],
  },
  {
    eyebrow: "Private Preview",
    chapter: "Connect",
    titleLine1: "Experience Medallion",
    titleLine2: "Aurum Personally",
    body: "Book a private walkthrough and discover the address built for a privileged few.",
    image: `/structslider/struct6.webp?v=${STRUCT_SLIDER_VERSION}`,
    cards: [
      { label: "Site Visit", icon: UserRound },
      { label: "Brochure", icon: FileText },
      { label: "Call Back", icon: MessageSquare },
    ],
    ctas: true,
  },
];

const SLIDE_COUNT = SLIDES.length;
const TRANSITION_MS = 1100;
const COOLDOWN_MS = 1550;

export default function AurumStructuredSlider() {
  const rootRef = useRef(null);
  const activeRef = useRef(0);
  const busyRef = useRef(false);
  const wheelCooldownRef = useRef(false);
  const touchStartYRef = useRef(null);
  const timersRef = useRef([]);
  const isLockedRef = useRef(false);
  const releaseCooldownRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const overflowRef = useRef({ body: "", html: "" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [exiting, setExiting] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const clearTrackedTimeouts = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const trackTimeout = useCallback((callback, delay) => {
    const timer = window.setTimeout(() => {
      timersRef.current = timersRef.current.filter((item) => item !== timer);
      callback();
    }, delay);

    timersRef.current.push(timer);
  }, []);

  const goToSlide = useCallback(
    (nextIndex) => {
      const currentIndex = activeRef.current;

      if (
        busyRef.current ||
        nextIndex === currentIndex ||
        nextIndex < 0 ||
        nextIndex >= SLIDE_COUNT
      ) {
        return;
      }

      busyRef.current = true;
      wheelCooldownRef.current = true;
      setExiting({
        index: currentIndex,
        direction: nextIndex > currentIndex ? "down" : "up",
      });
      activeRef.current = nextIndex;
      setActiveIndex(nextIndex);

      trackTimeout(() => {
        setExiting(null);
        busyRef.current = false;
      }, TRANSITION_MS);

      trackTimeout(() => {
        wheelCooldownRef.current = false;
      }, COOLDOWN_MS);
    },
    [trackTimeout]
  );

  const lockSlider = useCallback((direction = "down") => {
    const root = rootRef.current;
    if (!root || isLockedRef.current || releaseCooldownRef.current) return;

    const startIndex = direction === "up" ? SLIDE_COUNT - 1 : 0;
    overflowRef.current = {
      body: document.body.style.overflow,
      html: document.documentElement.style.overflow,
    };
    activeRef.current = startIndex;
    busyRef.current = false;
    wheelCooldownRef.current = false;
    setExiting(null);
    setActiveIndex(startIndex);
    isLockedRef.current = true;
    setIsLocked(true);

    window.scrollTo({ top: root.offsetTop, behavior: "auto" });
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }, []);

  const releaseSlider = useCallback((direction = "down") => {
    const root = rootRef.current;
    if (!root || !isLockedRef.current) return;

    isLockedRef.current = false;
    setIsLocked(false);
    releaseCooldownRef.current = true;
    document.body.style.overflow = overflowRef.current.body;
    document.documentElement.style.overflow = overflowRef.current.html;

    const target =
      direction === "down"
        ? root.offsetTop + root.offsetHeight + 2
        : Math.max(0, root.offsetTop - window.innerHeight + 2);

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: target, behavior: "auto" });
      lastScrollYRef.current = target;
    });

    trackTimeout(() => {
      releaseCooldownRef.current = false;
    }, 950);
  }, [trackTimeout]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    lastScrollYRef.current = window.scrollY;

    const handlePageScroll = () => {
      if (isLockedRef.current || releaseCooldownRef.current) {
        lastScrollYRef.current = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const previousY = lastScrollYRef.current;
      const sectionTop = root.offsetTop;
      const sectionBottom = sectionTop + root.offsetHeight;
      const movingDown = currentY > previousY;
      const movingUp = currentY < previousY;
      const crossedFromAbove = movingDown && previousY < sectionTop && currentY >= sectionTop;
      const crossedFromBelow = movingUp && previousY > sectionTop && currentY <= sectionTop;
      const jumpedPastFromAbove =
        movingDown && previousY < sectionTop && currentY >= sectionBottom;
      const jumpedPastFromBelow =
        movingUp && previousY > sectionBottom && currentY <= sectionTop;

      if (crossedFromAbove || jumpedPastFromAbove) {
        lockSlider("down");
      } else if (crossedFromBelow || jumpedPastFromBelow) {
        lockSlider("up");
      }

      lastScrollYRef.current = currentY;
    };

    const handleWheel = (event) => {
      if (!isLockedRef.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = activeRef.current + direction;
      const canMoveInsideSlider = nextIndex >= 0 && nextIndex < SLIDE_COUNT;

      event.preventDefault();
      event.stopPropagation();

      if (!canMoveInsideSlider) {
        if (!busyRef.current && !wheelCooldownRef.current) {
          releaseSlider(direction > 0 ? "down" : "up");
        }
        return;
      }

      if (wheelCooldownRef.current || busyRef.current) return;

      goToSlide(nextIndex);
    };

    const handleTouchStart = (event) => {
      if (!isLockedRef.current) return;
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchEnd = (event) => {
      if (!isLockedRef.current) return;
      if (touchStartYRef.current === null) return;

      const distance = touchStartYRef.current - event.changedTouches[0].clientY;
      if (Math.abs(distance) > 52) {
        const direction = distance > 0 ? 1 : -1;
        const nextIndex = activeRef.current + direction;

        if (nextIndex < 0 || nextIndex >= SLIDE_COUNT) {
          releaseSlider(direction > 0 ? "down" : "up");
        } else {
          goToSlide(nextIndex);
        }
      }
      touchStartYRef.current = null;
    };

    const handleKeyDown = (event) => {
      if (!isLockedRef.current) return;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = activeRef.current + 1;
        if (nextIndex >= SLIDE_COUNT) {
          releaseSlider("down");
        } else {
          goToSlide(nextIndex);
        }
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        const nextIndex = activeRef.current - 1;
        if (nextIndex < 0) {
          releaseSlider("up");
        } else {
          goToSlide(nextIndex);
        }
      }
    };

    window.addEventListener("scroll", handlePageScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handlePageScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKeyDown);
      if (isLockedRef.current) {
        document.body.style.overflow = overflowRef.current.body;
        document.documentElement.style.overflow = overflowRef.current.html;
      }
      clearTrackedTimeouts();
    };
  }, [clearTrackedTimeouts, goToSlide, lockSlider, releaseSlider, trackTimeout]);

  return (
    <section
      id="aurum-structured-slider"
      ref={rootRef}
      className={`aurum-structured-slider${isLocked ? " scroll-locked" : ""}`}
      aria-label="Medallion Aurum structured lifestyle slider"
    >
      {SLIDES.map((slide, index) => {
        const isActive = activeIndex === index;
        const exitClass =
          exiting?.index === index ? ` exit-${exiting.direction}` : "";

        return (
          <article
            key={slide.eyebrow}
            className={`aurum-slide${isActive ? " active" : ""}${exitClass}`}
            aria-hidden={!isActive}
          >
            <div className="aurum-bg">
              {isActive || exiting?.index === index ? (
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                  quality={72}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              ) : null}
            </div>
            <div className="aurum-film" />
            <div className="aurum-grad-left" />
            <div className="aurum-grad-top" />
            <div className="aurum-grad-bottom" />
            <div className="aurum-vignette" />
            <div className="aurum-corner aurum-corner-tl" />
            <div className="aurum-corner aurum-corner-bl" />
            <div className="aurum-corner aurum-corner-tr" />
            <div className="aurum-ghost-num">0{index + 1}</div>
            <div className="aurum-chapter-tag">
              Chapter 0{index + 1} - {slide.chapter}
            </div>

            <div className="aurum-content">
              <div className="aurum-eyebrow">
                <span className="aurum-eyebrow-rule" />
                <span className="aurum-eyebrow-text">{slide.eyebrow}</span>
                <span className="aurum-eyebrow-dot">.</span>
                <span className="aurum-eyebrow-chapter">
                  Chapter 0{index + 1}
                </span>
              </div>

              <div className="aurum-title-wrap">
                <h2 className="aurum-title-line aurum-title-line-1">
                  {slide.titleLine1}
                </h2>
                <p className="aurum-title-line aurum-title-line-2">
                  {slide.titleLine2}
                </p>
              </div>

              <div className="aurum-rule">
                <span />
                <i />
              </div>

              <p className="aurum-body">{slide.body}</p>

              <div className="aurum-cards">
                {slide.cards.map((card, cardIndex) => {
                  const Icon = card.icon;

                  return (
                    <div className="aurum-card" key={card.label}>
                      <span className="aurum-card-icon">
                        <Icon size={13} strokeWidth={1.3} />
                      </span>
                      <span className="aurum-card-copy">
                        <span className="aurum-card-label">{card.label}</span>
                        <span className="aurum-card-num">
                          0{cardIndex + 1} / 03
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>

              {slide.ctas ? (
                <div className="aurum-final-ctas">
                  <a href="tel:+919697300066">
                    <PhoneCall size={15} />
                    Call Now
                  </a>
                  <a href="https://wa.me/917009247378">
                    <MessageSquare size={15} />
                    WhatsApp
                  </a>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}

      <div className="aurum-right-nav" aria-label="Slider navigation">
        <button
          type="button"
          className="aurum-nav-btn"
          onClick={() => {
            const nextIndex = activeRef.current - 1;
            if (nextIndex < 0) {
              releaseSlider("up");
            } else {
              goToSlide(nextIndex);
            }
          }}
          aria-label="Previous slide"
        >
          <ArrowUp size={13} strokeWidth={1.4} />
        </button>
        <div className="aurum-dot-track">
          {SLIDES.map((slide, index) => (
            <button
              type="button"
              key={slide.chapter}
              className={`aurum-dot${activeIndex === index ? " active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to chapter ${index + 1}: ${slide.chapter}`}
              aria-current={activeIndex === index ? "true" : undefined}
            >
              <span>0{index + 1}</span>
              <i />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="aurum-nav-btn"
          onClick={() => {
            const nextIndex = activeRef.current + 1;
            if (nextIndex >= SLIDE_COUNT) {
              releaseSlider("down");
            } else {
              goToSlide(nextIndex);
            }
          }}
          aria-label="Next slide"
        >
          <ArrowDown size={13} strokeWidth={1.4} />
        </button>
      </div>

      <div className="aurum-icon-rail" aria-label="Slide progress">
        {SLIDES.map((slide, index) => {
          const Icon = slide.cards[0]?.icon ?? Sparkles;

          return (
            <button
              type="button"
              key={`${slide.chapter}-icon`}
              className={`aurum-icon-step${activeIndex === index ? " active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.chapter}`}
            >
              <Icon size={15} />
              <span>{index + 1}</span>
            </button>
          );
        })}
        <p>
          0{activeIndex + 1}<span>/0{SLIDE_COUNT}</span>
        </p>
      </div>

      <footer className="aurum-slider-footer">
        <div className="aurum-scroll-label">
          <span className="aurum-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>Scroll to Explore</span>
        </div>
        <span>Medallion Aurum · Private Residences</span>
      </footer>

      <div className="aurum-progress" aria-hidden="true">
        <span style={{ width: `${((activeIndex + 1) / SLIDE_COUNT) * 100}%` }} />
      </div>

      <style>{`
        .aurum-structured-slider {
          --aurum-black: #050403;
          --aurum-charcoal: #11100d;
          --aurum-gold: #c9a24a;
          --aurum-soft-gold: #f4d985;
          --aurum-text: rgba(255, 255, 255, 0.9);
          --aurum-secondary: rgba(255, 255, 255, 0.36);
          position: relative;
          z-index: 20;
          width: 100%;
          height: 100vh;
          height: 100svh;
          min-height: 0;
          overflow: hidden;
          background: var(--aurum-black);
          color: var(--aurum-text);
          font-family: var(--font-body);
        }

        .aurum-slide {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .aurum-slide.active {
          z-index: 4;
          pointer-events: auto;
        }

        .aurum-slide.exit-up,
        .aurum-slide.exit-down {
          z-index: 3;
        }

        .aurum-bg {
          position: absolute;
          inset: -6%;
          transform: scale(1.1);
          clip-path: inset(0 0 0 0);
          transition: transform 10s cubic-bezier(0.04, 0, 0.18, 1), clip-path 1.08s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .aurum-slide.active .aurum-bg {
          transform: scale(1);
          animation: aurumImageReveal 1.08s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .aurum-slide.exit-up .aurum-bg {
          clip-path: inset(0 0 100% 0);
          transform: scale(1.06) translateY(-2%);
        }

        .aurum-slide.exit-down .aurum-bg {
          clip-path: inset(100% 0 0 0);
          transform: scale(1.06) translateY(2%);
        }

        .aurum-film,
        .aurum-grad-left,
        .aurum-grad-top,
        .aurum-grad-bottom,
        .aurum-vignette {
          position: absolute;
          inset: 0;
        }

        .aurum-film {
          z-index: 2;
          background: var(--aurum-black);
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .aurum-structured-slider.scroll-locked::after {
          position: absolute;
          inset: 0;
          z-index: 30;
          border: 1px solid rgba(201, 162, 74, 0.18);
          pointer-events: none;
          content: "";
        }

        @keyframes aurumImageReveal {
          0% {
            clip-path: inset(0 0 100% 0);
            filter: saturate(0.82) contrast(1.08) brightness(0.72);
            transform: scale(1.08);
          }
          100% {
            clip-path: inset(0 0 0 0);
            filter: saturate(1) contrast(1) brightness(1);
            transform: scale(1);
          }
        }

        .aurum-slide.exit-up .aurum-film,
        .aurum-slide.exit-down .aurum-film {
          opacity: 0.58;
        }

        .aurum-grad-left {
          z-index: 3;
          background: linear-gradient(
            105deg,
            rgba(5, 4, 3, 0.78) 0%,
            rgba(5, 4, 3, 0.56) 30%,
            rgba(5, 4, 3, 0.22) 58%,
            transparent 76%
          );
        }

        .aurum-grad-top {
          z-index: 3;
          background: linear-gradient(to bottom, rgba(5, 4, 3, 0.36) 0%, transparent 28%);
        }

        .aurum-grad-bottom {
          z-index: 3;
          background: linear-gradient(to top, rgba(5, 4, 3, 0.6) 0%, rgba(5, 4, 3, 0.22) 28%, transparent 56%);
        }

        .aurum-vignette {
          z-index: 3;
          background: radial-gradient(ellipse 78% 78% at 62% 50%, transparent 42%, rgba(2, 1, 1, 0.32) 100%);
        }

        [data-theme="light"] .aurum-grad-left {
          background: linear-gradient(
            105deg,
            rgba(255, 255, 255, 0.46) 0%,
            rgba(255, 255, 255, 0.24) 34%,
            rgba(255, 255, 255, 0.08) 58%,
            transparent 76%
          );
        }

        [data-theme="light"] .aurum-grad-top {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 0%, transparent 28%);
        }

        [data-theme="light"] .aurum-grad-bottom {
          background: linear-gradient(to top, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.12) 28%, transparent 56%);
        }

        [data-theme="light"] .aurum-vignette {
          background: radial-gradient(ellipse 78% 78% at 62% 50%, transparent 46%, rgba(255, 255, 255, 0.18) 100%);
        }

        .aurum-ghost-num {
          position: absolute;
          right: -1vw;
          bottom: -2vh;
          z-index: 5;
          color: rgba(201, 162, 74, 0.04);
          font-family: var(--font-display);
          font-size: clamp(150px, 25vw, 340px);
          font-style: italic;
          font-weight: 300;
          line-height: 1;
          pointer-events: none;
        }

        .aurum-corner {
          position: absolute;
          z-index: 6;
          width: 2px;
          height: 72px;
          opacity: 0.28;
        }

        .aurum-corner-tl {
          top: 64px;
          left: 0;
          background: linear-gradient(to bottom, var(--aurum-gold), transparent);
        }

        .aurum-corner-bl {
          bottom: 0;
          left: 0;
          background: linear-gradient(to top, var(--aurum-gold), transparent);
        }

        .aurum-corner-tr {
          top: 64px;
          right: 0;
          opacity: 0.18;
          background: linear-gradient(to bottom, var(--aurum-gold), transparent);
        }

        .aurum-chapter-tag {
          position: absolute;
          top: 22px;
          right: 5.5vw;
          z-index: 20;
          border: 1px solid rgba(201, 162, 74, 0.16);
          background: rgba(5, 4, 3, 0.62);
          padding: 8px 18px;
          color: rgba(201, 162, 74, 0.74);
          font-size: 8px;
          font-weight: 300;
          letter-spacing: 0.42em;
          opacity: 0;
          text-transform: uppercase;
          transform: translateY(-7px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        .aurum-slide.active .aurum-chapter-tag {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.18s;
        }

        .aurum-content {
          position: absolute;
          inset: 0;
          z-index: 6;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 74px 5.5vw 82px;
        }

        .aurum-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 26px;
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .aurum-slide.active .aurum-eyebrow {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.12s;
        }

        .aurum-eyebrow-rule {
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, var(--aurum-gold), rgba(201, 162, 74, 0.2));
        }

        .aurum-eyebrow-text {
          color: var(--aurum-gold);
          font-size: 8.5px;
          font-weight: 400;
          letter-spacing: 0.58em;
          text-transform: uppercase;
        }

        .aurum-eyebrow-dot {
          color: rgba(201, 162, 74, 0.28);
          font-size: 12px;
        }

        .aurum-eyebrow-chapter {
          color: rgba(255, 255, 255, 0.18);
          font-size: 8px;
          font-weight: 300;
          letter-spacing: 0.35em;
        }

        .aurum-title-wrap {
          margin-bottom: 22px;
          overflow: hidden;
        }

        .aurum-title-line {
          margin: 0;
          font-family: var(--font-display);
          font-size: clamp(34px, 5.8vh, 80px);
          font-weight: 300;
          letter-spacing: -0.01em;
          line-height: 1.06;
          opacity: 0;
          transform: translateY(108%);
          transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.18, 0, 0.08, 1);
        }

        .aurum-title-line-1 {
          color: var(--aurum-text);
        }

        .aurum-title-line-2 {
          color: var(--aurum-gold);
          font-style: italic;
        }

        .aurum-slide.active .aurum-title-line-1 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.24s;
        }

        .aurum-slide.active .aurum-title-line-2 {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.34s;
        }

        .aurum-rule {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .aurum-slide.active .aurum-rule {
          opacity: 1;
          transition-delay: 0.46s;
        }

        .aurum-rule span {
          width: 44px;
          height: 1px;
          background: rgba(201, 162, 74, 0.24);
        }

        .aurum-rule i {
          width: 5px;
          height: 5px;
          background: var(--aurum-gold);
          opacity: 0.7;
          transform: rotate(45deg);
        }

        .aurum-body {
          max-width: 390px;
          margin: 0 0 32px;
          color: var(--aurum-secondary);
          font-size: clamp(11px, 1.42vh, 13.5px);
          font-weight: 300;
          letter-spacing: 0.035em;
          line-height: 1.95;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .aurum-slide.active .aurum-body {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.52s;
        }

        .aurum-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .aurum-slide.active .aurum-cards {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.64s;
        }

        .aurum-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 172px;
          overflow: hidden;
          border: 1px solid rgba(244, 217, 133, 0.16);
          background: rgba(255, 255, 255, 0.03);
          padding: 11px 18px 11px 14px;
          backdrop-filter: blur(10px);
          transition: background 0.35s, border-color 0.35s, transform 0.25s;
        }

        .aurum-card:hover {
          border-color: rgba(201, 162, 74, 0.38);
          background: rgba(201, 162, 74, 0.08);
          transform: translateY(-1px);
        }

        .aurum-card::before {
          position: absolute;
          inset: 0 auto 0 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--aurum-gold), transparent);
          content: "";
          opacity: 0.5;
        }

        .aurum-card::after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--aurum-gold), transparent);
          content: "";
          opacity: 0.45;
        }

        .aurum-card-icon {
          position: relative;
          display: flex;
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(201, 162, 74, 0.28);
          background: rgba(201, 162, 74, 0.06);
          color: var(--aurum-gold);
        }

        .aurum-card-icon::before {
          position: absolute;
          inset: 3px;
          border: 1px solid rgba(201, 162, 74, 0.12);
          content: "";
        }

        .aurum-card-copy {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .aurum-card-label {
          color: rgba(244, 217, 133, 0.82);
          font-size: 8px;
          font-weight: 400;
          letter-spacing: 0.42em;
          text-transform: uppercase;
        }

        .aurum-card-num {
          color: rgba(201, 162, 74, 0.42);
          font-family: var(--font-display);
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.2em;
        }

        .aurum-right-nav {
          position: absolute;
          top: 50%;
          right: 3.2vw;
          z-index: 25;
          display: none;
          flex-direction: column;
          align-items: center;
          transform: translateY(-50%);
        }

        .aurum-nav-btn {
          display: flex;
          width: 30px;
          height: 30px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(0, 0, 0, 0.35);
          color: rgba(255, 255, 255, 0.28);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .aurum-nav-btn:hover {
          border-color: rgba(201, 162, 74, 0.44);
          background: rgba(201, 162, 74, 0.08);
          color: var(--aurum-gold);
        }

        .aurum-dot-track {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 18px 0;
        }

        .aurum-dot-track::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--aurum-gold), transparent);
          content: "";
          opacity: 0.18;
          transform: translateX(-50%);
        }

        .aurum-dot {
          position: relative;
          display: flex;
          width: 32px;
          height: 22px;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .aurum-dot span {
          position: absolute;
          right: calc(100% + 10px);
          color: rgba(255, 255, 255, 0.16);
          font-family: var(--font-display);
          font-size: 8px;
          font-weight: 300;
          letter-spacing: 0.25em;
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s;
          white-space: nowrap;
        }

        .aurum-dot i {
          position: relative;
          z-index: 1;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .aurum-dot:hover span,
        .aurum-dot.active span {
          color: var(--aurum-gold);
          opacity: 1;
          transform: translateX(0);
        }

        .aurum-dot:hover i {
          background: var(--aurum-gold);
          opacity: 0.72;
        }

        .aurum-dot.active i {
          width: 3px;
          height: 28px;
          background: linear-gradient(to bottom, var(--aurum-soft-gold), var(--aurum-gold));
          box-shadow: 0 0 18px rgba(201, 162, 74, 0.26);
        }

        .aurum-slider-footer {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(201, 162, 74, 0.08);
          padding: 14px 5.5vw;
          color: rgba(255, 255, 255, 0.16);
          font-size: 7.5px;
          font-weight: 300;
          letter-spacing: 0.42em;
          text-transform: uppercase;
        }

        .aurum-scroll-label {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .aurum-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
        }

        .aurum-bars i {
          width: 1.5px;
          height: 5px;
          border-radius: 1px;
          background: var(--aurum-gold);
          animation: aurumBar 2s ease infinite;
          opacity: 0.25;
        }

        .aurum-bars i:nth-child(2) {
          height: 9px;
          animation-delay: 0.22s;
          opacity: 0.55;
        }

        .aurum-bars i:nth-child(3) {
          animation-delay: 0.44s;
        }

        @keyframes aurumBar {
          0%,
          100% {
            opacity: 0.2;
            transform: scaleY(0.35);
          }

          50% {
            opacity: 0.75;
            transform: scaleY(1);
          }
        }

        .aurum-progress {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 30;
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
        }

        .aurum-progress span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #7a5510, var(--aurum-gold), var(--aurum-soft-gold));
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 767px) {
          .aurum-structured-slider {
            height: 100svh;
            min-height: 0;
          }

          .aurum-grad-left {
            background: linear-gradient(105deg, rgba(5, 4, 3, 0.72) 0%, rgba(5, 4, 3, 0.48) 52%, transparent 100%);
          }

          .aurum-content {
            justify-content: flex-end;
            padding: 70px 22px 64px;
          }

          .aurum-chapter-tag {
            top: 18px;
            right: 22px;
            max-width: calc(100vw - 44px);
            padding: 7px 12px;
            font-size: 7px;
            letter-spacing: 0.28em;
          }

          .aurum-eyebrow {
            gap: 10px;
            margin-bottom: 18px;
          }

          .aurum-eyebrow-rule {
            width: 26px;
          }

          .aurum-eyebrow-text {
            font-size: 7.5px;
            letter-spacing: 0.38em;
          }

          .aurum-eyebrow-chapter,
          .aurum-eyebrow-dot {
            display: none;
          }

          .aurum-title-line {
            font-size: clamp(31px, 10vw, 46px);
          }

          .aurum-body {
            max-width: 100%;
            margin-bottom: 22px;
          }

          .aurum-cards {
            gap: 8px;
          }

          .aurum-card {
            min-width: min(100%, 172px);
            padding: 10px 12px;
          }

          .aurum-card-label {
            letter-spacing: 0.28em;
          }

          .aurum-right-nav {
            display: none;
          }

          .aurum-slider-footer {
            padding: 14px 22px;
            letter-spacing: 0.25em;
          }

          .aurum-slider-footer > span {
            display: none;
          }
        }
        .aurum-body {
          font-size: 17px;
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.82);
        }

        .aurum-structured-slider {
          height: 100vh;
          height: 100svh;
          height: 100dvh;
          min-height: 100vh;
          min-height: 100svh;
          min-height: 100dvh;
        }

        .aurum-final-ctas {
          position: relative;
          z-index: 12;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .aurum-final-ctas a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          padding: 0 22px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: transform 0.28s ease, background 0.28s ease, color 0.28s ease;
        }

        .aurum-final-ctas a:first-child {
          background: var(--aurum-soft-gold);
          color: #050505;
        }

        .aurum-final-ctas a:last-child {
          border: 1px solid #16d877;
          background: rgba(22, 216, 119, 0.08);
          color: #16d877;
        }

        .aurum-final-ctas a:hover {
          transform: translateY(-2px);
        }

        .aurum-icon-rail {
          position: absolute;
          right: 96px;
          top: 50%;
          z-index: 18;
          display: grid;
          gap: 10px;
          transform: translateY(-50%);
        }

        .aurum-icon-step {
          position: relative;
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(244, 211, 111, 0.2);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.36);
          color: rgba(255, 255, 255, 0.62);
          transition: border-color 0.28s ease, background 0.28s ease, color 0.28s ease, transform 0.28s ease;
        }

        .aurum-icon-step span {
          position: absolute;
          right: -7px;
          top: -6px;
          display: inline-flex;
          width: 18px;
          height: 18px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(5, 5, 5, 0.78);
          color: var(--aurum-soft-gold);
          font-size: 9px;
          font-weight: 800;
        }

        .aurum-icon-step.active {
          border-color: rgba(244, 211, 111, 0.78);
          background: rgba(244, 211, 111, 0.16);
          color: var(--aurum-soft-gold);
          transform: translateX(-4px) scale(1.08);
        }

        .aurum-icon-rail p {
          margin-top: 8px;
          color: var(--aurum-soft-gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-align: center;
        }

        .aurum-icon-rail p span {
          color: rgba(255, 255, 255, 0.42);
        }

        [data-theme="light"] .aurum-structured-slider {
          --aurum-text: rgba(18, 18, 18, 0.92);
          --aurum-secondary: rgba(18, 18, 18, 0.62);
          color: var(--aurum-text);
        }

        [data-theme="light"] .aurum-title-line,
        [data-theme="light"] .aurum-title-line-2,
        [data-theme="light"] .aurum-body,
        [data-theme="light"] .aurum-card-label,
        [data-theme="light"] .aurum-scroll-label,
        [data-theme="light"] .aurum-slider-footer,
        [data-theme="light"] .aurum-chapter-tag {
          color: rgba(18, 18, 18, 0.92);
          text-shadow: 0 1px 18px rgba(255, 255, 255, 0.45);
        }

        [data-theme="light"] .aurum-body {
          color: rgba(18, 18, 18, 0.76);
        }

        [data-theme="light"] .aurum-card,
        [data-theme="light"] .aurum-nav-btn,
        [data-theme="light"] .aurum-icon-step {
          background: rgba(255, 255, 255, 0.72);
          color: var(--accent);
        }

        [data-theme="light"] .aurum-card-num,
        [data-theme="light"] .aurum-icon-rail p span {
          color: rgba(18, 18, 18, 0.5);
        }

        [data-theme="light"] .aurum-icon-step span {
          background: rgba(255, 255, 255, 0.86);
          color: var(--accent);
        }

        [data-theme="light"] .aurum-icon-rail p,
        [data-theme="light"] .aurum-eyebrow-text,
        [data-theme="light"] .aurum-eyebrow-chapter {
          color: var(--accent);
        }

        @media (max-width: 900px) {
          .aurum-icon-rail {
            right: 18px;
            gap: 8px;
          }

          .aurum-icon-step {
            width: 36px;
            height: 36px;
          }
        }

        @media (max-width: 640px) {
          .aurum-body {
            font-size: 15px;
            line-height: 1.62;
          }

          .aurum-final-ctas {
            margin-top: 20px;
          }

          .aurum-final-ctas a {
            min-height: 40px;
            padding: 0 17px;
            font-size: 12px;
          }

          .aurum-icon-rail {
            right: 12px;
            top: 50%;
            bottom: auto;
            grid-auto-flow: row;
            transform: translateY(-50%);
          }

          .aurum-icon-step {
            width: 32px;
            height: 32px;
          }

          .aurum-icon-rail p {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
