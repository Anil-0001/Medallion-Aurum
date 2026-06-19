"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We liked the Sector 67 location, open planning and clear discussion around pricing before making our decision.",
    name: "Rohit Sharma",
    city: "Chandigarh",
  },
  {
    quote:
      "The low-rise feel, wider internal planning and calm residential address made Aurum stand apart for our family.",
    name: "Neha Kapoor",
    city: "Mohali",
  },
  {
    quote:
      "Airport connectivity was important for us. The team explained the location, layouts and next steps with patience.",
    name: "Aman Verma",
    city: "Zirakpur",
  },
  {
    quote:
      "We were looking for a premium home with better privacy, natural light and a more composed everyday environment.",
    name: "Priya Malhotra",
    city: "Panchkula",
  },
  {
    quote:
      "Mivan construction, podium parking and security-backed planning gave us confidence in the long-term quality.",
    name: "Sahil Arora",
    city: "Kharar",
  },
  {
    quote:
      "The project felt practical, not overdone. The details around open area and amenities were explained clearly.",
    name: "Meera Sood",
    city: "Sector 70",
  },
  {
    quote:
      "We appreciated the quick response on brochure, site visit timing and floor plan guidance without any pressure.",
    name: "Gaurav Bedi",
    city: "Ludhiana",
  },
  {
    quote:
      "The address works well for airport access, schools and daily essentials. That balance mattered to us.",
    name: "Anika Khanna",
    city: "Aerocity",
  },
  {
    quote:
      "Aurum felt like a calmer upgrade, with premium planning and enough openness for a family lifestyle.",
    name: "Vikram Gill",
    city: "Patiala",
  },
  {
    quote:
      "The team helped us compare options and understand what makes the Sector 67 location valuable.",
    name: "Simran Bajwa",
    city: "Mohali",
  },
  {
    quote:
      "We wanted a refined community, not just a flat. The clubhouse, pool and sports amenities added real value.",
    name: "Karan Mehta",
    city: "Chandigarh",
  },
  {
    quote:
      "From the first call to site visit planning, the experience felt organized, transparent and easy to follow.",
    name: "Ritika Anand",
    city: "Panchkula",
  },
];

const maxIndex = testimonials.length - 1;
const cardGap = 18;
const fallbackCardWidth = 360;

export default function BuyerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartRef = useRef(null);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = Math.max(0, Math.min(maxIndex, index));
    const card = track.querySelector(".testimonial-card");
    const cardWidth = card?.getBoundingClientRect().width ?? fallbackCardWidth;

    setActiveIndex(nextIndex);
    track.scrollTo({
      left: nextIndex * (cardWidth + cardGap),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".testimonial-card");
    const cardWidth = card?.getBoundingClientRect().width ?? fallbackCardWidth;
    const index = Math.round(track.scrollLeft / (cardWidth + cardGap));
    setActiveIndex(Math.max(0, Math.min(maxIndex, index)));
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      index: activeIndex,
    };
  };

  const handleTouchEnd = (event) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;

    if (!start || !touch) return;

    const deltaX = start.x - touch.clientX;
    const deltaY = start.y - touch.clientY;

    if (Math.abs(deltaX) < 36 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
      scrollToIndex(start.index);
      return;
    }

    scrollToIndex(start.index + (deltaX > 0 ? 1 : -1));
  };

  return (
    <section
      id="buyer-testimonials"
      className="buyer-testimonials-section relative z-20 overflow-hidden bg-[var(--bg)] px-5 py-12 text-[var(--text)] sm:px-6 lg:px-8"
    >
      <div className="buyer-testimonials-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] backdrop-blur-xl">
            <Star size={13} />
            Testimonials
          </p>
          <h2 className="mt-5 text-[clamp(1.7rem,7.2vw,2rem)] font-normal leading-tight text-[var(--heading)] sm:text-3xl md:text-4xl lg:text-5xl">
            What Homebuyers Value About <span className="text-[var(--accent)]">The Medallion Aurum</span>
          </h2>
        </motion.div>

        <div className="testimonials-window mx-auto mt-7">
          <div
            ref={trackRef}
            className="testimonials-track"
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((item, index) => (
              <article key={item.name} className="testimonial-card">
                <Quote className="text-[var(--accent)]" size={20} />
                <p className="mt-4 text-[15px] leading-7 text-[var(--text)] md:text-[15px]">
                  {item.quote}
                </p>
                <div className="mt-5 border-t border-[var(--line)] pt-4">
                  <p className="text-sm font-semibold text-[var(--heading)]">{item.name}</p>
                  <p className="mt-1 text-xs font-semibold text-[var(--accent)]">{item.city}</p>
                </div>
                <span className="testimonial-number">{String(index + 1).padStart(2, "0")}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonial-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Show testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .buyer-testimonials-section {
          min-height: 78vh;
          display: flex;
          align-items: center;
        }

        .buyer-testimonials-bg {
          background:
            radial-gradient(circle at 18% 12%, rgba(214, 178, 95, 0.1), transparent 32%),
            radial-gradient(circle at 86% 26%, rgba(159, 197, 220, 0.07), transparent 32%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .testimonials-window {
          --testimonial-card-width: 360px;
          width: 100%;
          overflow: visible;
        }

        .testimonials-track {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 10px 0 5px;
          scroll-snap-type: x mandatory;
          scroll-snap-stop: always;
          scrollbar-width: none;
        }

        .testimonials-track::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          position: relative;
          box-sizing: border-box;
          width: var(--testimonial-card-width);
          min-width: var(--testimonial-card-width);
          min-height: 242px;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.42);
          outline: 1px solid transparent;
          outline-offset: -1px;
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.82), rgba(244, 211, 111, 0.07)),
            rgba(5, 5, 5, 0.76);
          padding: 24px 22px;
          scroll-snap-align: start;
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          border: 1px solid transparent;
          border-radius: inherit;
          transition: border-color 0.3s ease;
        }

        .testimonial-card:hover {
          border-color: var(--accent);
          outline-color: var(--accent);
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.82), rgba(244, 211, 111, 0.14), rgba(23, 217, 139, 0.06)),
            rgba(5, 5, 5, 0.76);
          box-shadow: inset 0 0 0 1px rgba(214, 178, 95, 0.18);
          transform: translateY(-3px);
        }

        .testimonial-card:hover::before {
          border-color: var(--accent);
        }

        .testimonial-number {
          position: absolute;
          right: 18px;
          bottom: 16px;
          color: rgba(255, 255, 255, 0.08);
          font-family: var(--font-display);
          font-size: 3.4rem;
          line-height: 1;
        }

        .testimonial-dot {
          height: 3px;
          width: 48px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.2);
          transition: width 0.3s ease, background 0.3s ease;
        }

        .testimonial-dot.active {
          width: 76px;
          background: var(--accent);
        }

        [data-theme="light"] .testimonial-card {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.84);
        }

        [data-theme="light"] .testimonial-card:hover {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(244, 211, 111, 0.16), rgba(159, 197, 220, 0.08)),
            rgba(255, 255, 255, 0.88);
        }

        [data-theme="light"] .testimonial-number {
          color: rgba(5, 5, 5, 0.06);
        }

        [data-theme="light"] .testimonial-dot {
          background: rgba(5, 5, 5, 0.18);
        }

        [data-theme="light"] .testimonial-dot.active {
          background: var(--accent);
        }

        @media (max-width: 820px) {
          .testimonials-window {
            --testimonial-card-width: 100%;
            overflow: hidden;
          }

          .testimonials-track {
            padding: 8px 0 4px;
            scroll-padding-inline: 0;
            touch-action: pan-y;
          }

          .buyer-testimonials-section {
            min-height: 70svh;
            padding-top: clamp(36px, 9vw, 48px);
            padding-bottom: clamp(36px, 9vw, 48px);
          }

          .testimonial-card {
            min-height: 202px;
            padding: 18px 16px;
            scroll-snap-align: center;
          }

          .testimonial-card > p {
            margin-top: 12px;
            line-height: 1.55;
          }

          .testimonial-card > div {
            margin-top: 16px;
            padding-top: 12px;
          }

          .testimonial-number {
            right: 14px;
            bottom: 12px;
            font-size: 2.7rem;
          }
        }
      `}</style>
    </section>
  );
}
