"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  Download,
  ExternalLink,
  GraduationCap,
  Hospital,
  House,
  MapPin,
  Maximize2,
  Navigation,
  Plane,
  Route,
  X,
} from "lucide-react";

const locationImage = "/maps/Location.webp";
const mapQuery = "The Medallion Aurum Sector 67 Mohali";
const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
const googleEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;

const distanceCards = [
  {
    icon: Plane,
    title: "Chandigarh International Airport",
    value: "15-20 mins drive",
    text: "Fast access through PR-7 and airport-side corridors.",
  },
  {
    icon: Route,
    title: "PR-7 Airport Road",
    value: "Quick corridor access",
    text: "Direct connectivity for airport, Zirakpur and Mohali routes.",
  },
  {
    icon: Hospital,
    title: "Fortis & Healthcare",
    value: "Nearby care",
    text: "Premium hospitals and medical support within reach.",
  },
  {
    icon: Building2,
    title: "Retail & Metro Belt",
    value: "Daily convenience",
    text: "Shopping, entertainment and city services close by.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Aero City Mohali",
    value: "Growth corridor",
    text: "IT, offices and premium commercial movement nearby.",
  },
  {
    icon: GraduationCap,
    title: "Top Schools",
    value: "Easy school runs",
    text: "Connected to leading schools and family essentials.",
  },
];

export default function PrimeLocation() {
  const [activeView, setActiveView] = useState("location");
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    if (!mapOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMapOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mapOpen]);

  return (
    <section
      id="prime-location"
      className={`prime-location-section relative overflow-hidden bg-[var(--bg)] px-4 py-8 text-[var(--text)] sm:px-6 sm:py-14 lg:px-8 ${
        mapOpen ? "z-[70]" : "z-20"
      }`}
    >
      <div className="prime-location-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] backdrop-blur-xl sm:px-5 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]">
            <MapPin size={14} />
            Prime Location
          </p>
          <h2 className="mt-3 text-[1.7rem] font-normal leading-tight text-[var(--heading)] sm:mt-4 sm:text-3xl md:text-5xl">
            Strategically located near airport-side Mohali growth corridors.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-5 text-[var(--muted)] sm:mt-4 sm:text-base sm:leading-7">
            The Medallion Aurum in Sector 67, Mohali keeps you close to airport access,
            PR-7 connectivity, healthcare, schools and premium city conveniences.
          </p>
        </div>

        <div className="prime-location-tabs mx-auto mt-5 sm:mt-8">
          <button
            type="button"
            className={activeView === "location" ? "active" : ""}
            onClick={() => setActiveView("location")}
          >
            <House size={16} />
            Location Map
          </button>
          <button
            type="button"
            className={activeView === "google" ? "active" : ""}
            onClick={() => setActiveView("google")}
          >
            <MapPin size={16} />
            Google Map
          </button>
        </div>

        <div className="prime-location-stage mx-auto mt-5 sm:mt-8">
          {activeView === "location" ? (
            <div className="prime-location-map-shell">
              <button
                type="button"
                className="prime-location-map-image"
                onClick={() => setMapOpen(true)}
                aria-label="Open location map preview"
              >
                <Image
                  src={locationImage}
                  alt="The Medallion Aurum location map"
                  fill
                  sizes="(min-width: 1024px) 1200px, 94vw"
                  className="object-cover"
                  priority
                />
              </button>
              <div className="prime-location-map-actions">
                <a href={locationImage} download aria-label="Download location map">
                  <Download size={18} />
                </a>
                <a
                  href={locationImage}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open location map full image"
                >
                  <Maximize2 size={18} />
                </a>
              </div>
            </div>
          ) : (
            <div className="prime-location-google-shell">
              <iframe
                title="The Medallion Aurum Google map"
                src={googleEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="prime-location-google-link"
              >
                Go to Map
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>

        <div className="mt-6 text-center sm:mt-10">
          <h3 className="text-xl font-normal leading-tight text-[var(--heading)] sm:text-3xl md:text-4xl">
            Key <span className="text-[var(--accent)]">distances</span> and access points.
          </h3>
        </div>

        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3 lg:grid-cols-3">
          {distanceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="prime-location-card group relative min-h-[118px] overflow-hidden border border-[var(--line)] p-2.5 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--gold-dark)] sm:min-h-32 sm:p-3.5"
                style={{ "--card-index": index }}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--accent)] bg-black/20 text-[var(--accent)] sm:h-8 sm:w-8">
                  <Icon size={14} />
                </span>
                <h4 className="mt-2 text-xs font-semibold leading-tight text-[var(--heading)] sm:mt-3 sm:text-[15px]">
                  {card.title}
                </h4>
                <p className="mt-1 text-[10px] font-semibold leading-4 text-[var(--accent)] sm:mt-1.5 sm:text-sm">{card.value}</p>
                <p className="mt-1 text-[10px] leading-4 text-[var(--muted)] sm:mt-1.5 sm:text-xs sm:leading-5">{card.text}</p>
                <span className="mt-2 block h-0.5 w-7 bg-[var(--accent)] transition-all duration-300 group-hover:w-12 sm:mt-3 sm:w-8" />
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center text-center sm:mt-9">
          <a
            href="https://wa.me/917009247378"
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp-cta inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#16d877] bg-black/30 px-5 text-xs font-semibold text-[#16d877] transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(22,216,119,0.12)] sm:min-h-11 sm:min-w-48 md:px-6 md:text-sm"
          >
            <WhatsAppIcon className="h-[17px] w-[17px]" />
            Get Exact Location on WhatsApp
          </a>
          <p className="mt-3 text-xs font-semibold leading-5 text-[var(--muted)] sm:mt-5 sm:text-sm sm:leading-7">
            Free site visit pickup from Chandigarh Airport and Aero City
            <span className="mx-3 text-[var(--line)]">|</span>
            <a
              href={googleMapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[var(--accent)]"
            >
              View detailed area map
              <Navigation size={14} />
            </a>
          </p>
        </div>
      </div>

      {mapOpen ? <LocationMapModal onClose={() => setMapOpen(false)} /> : null}

      <style>{`
        .prime-location-section {
          min-height: 100vh;
        }

        .prime-location-bg {
          background:
            radial-gradient(circle at 50% 0%, rgba(214, 178, 95, 0.13), transparent 34%),
            radial-gradient(circle at 12% 28%, rgba(159, 197, 220, 0.08), transparent 32%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .prime-location-tabs {
          display: grid;
          width: min(520px, 100%);
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 5px;
          border: 1px solid rgba(214, 178, 95, 0.42);
          border-radius: 14px;
          background: rgba(5, 5, 5, 0.44);
          padding: 4px;
          backdrop-filter: blur(16px);
        }

        .prime-location-stage {
          width: min(1120px, 100%);
        }

        [data-theme="light"] .prime-location-tabs {
          background: rgba(255, 255, 255, 0.68);
        }

        .prime-location-tabs button {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid transparent;
          border-radius: 10px;
          background: transparent;
          color: var(--heading);
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }

        .prime-location-tabs button.active {
          border-color: rgba(214, 178, 95, 0.42);
          background: linear-gradient(135deg, rgba(214, 178, 95, 0.15), rgba(255, 255, 255, 0.03));
          color: var(--accent-strong);
        }

        .prime-location-map-shell,
        .prime-location-google-shell {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.42);
          border-radius: 8px;
          background: var(--glass);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.3);
        }

        .prime-location-map-image {
          position: relative;
          display: block;
          width: 100%;
          height: clamp(300px, 34vw, 460px);
          overflow: hidden;
          border: 0;
          background: #101010;
          cursor: zoom-in;
        }

        .prime-location-map-image img {
          transform: scale(1);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .prime-location-map-image:hover img {
          transform: scale(1.04);
        }

        .prime-location-map-actions {
          position: absolute;
          right: 18px;
          bottom: 18px;
          display: flex;
          gap: 10px;
        }

        .prime-location-map-actions a,
        .prime-location-modal-actions a,
        .prime-location-modal-actions button {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.7);
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .prime-location-map-actions a:hover,
        .prime-location-modal-actions a:hover,
        .prime-location-modal-actions button:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-1px);
        }

        .prime-location-google-shell {
          height: clamp(320px, 35vw, 470px);
          cursor: pointer;
        }

        .prime-location-google-shell iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .prime-location-google-link {
          position: absolute;
          top: 18px;
          right: 18px;
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          background: rgba(5, 5, 5, 0.78);
          padding: 0 18px;
          color: var(--accent-strong);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .prime-location-google-link:hover {
          background: rgba(5, 5, 5, 0.94);
          transform: translateY(-1px);
        }

        .prime-location-card {
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.78), rgba(244, 211, 111, 0.08)),
            rgba(5, 5, 5, 0.72);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .prime-location-card:hover {
          background:
            linear-gradient(135deg, rgba(5, 5, 5, 0.78), rgba(244, 211, 111, 0.16), rgba(23, 217, 139, 0.07)),
            rgba(5, 5, 5, 0.72);
          transform: translateY(-3px);
        }

        [data-theme="light"] .prime-location-card {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(244, 211, 111, 0.08)),
            rgba(255, 255, 255, 0.78);
        }

        [data-theme="light"] .prime-location-card:hover {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(244, 211, 111, 0.16), rgba(159, 197, 220, 0.08)),
            rgba(255, 255, 255, 0.82);
        }

        [data-theme="light"] .prime-location-card span:first-of-type {
          background: rgba(255, 255, 255, 0.6);
        }

        [data-theme="light"] .prime-location-section .hero-whatsapp-cta {
          border-color: #0f9f68;
          background: #0f9f68;
          color: #ffffff;
          box-shadow: 0 16px 42px rgba(15, 159, 104, 0.22);
        }

        [data-theme="light"] .prime-location-section .hero-whatsapp-cta:hover {
          background: #ffffff;
          color: #0f9f68;
        }

        .prime-location-modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.74);
          padding: 16px;
          backdrop-filter: blur(8px);
        }

        .prime-location-modal-panel {
          position: relative;
          width: min(1320px, 100%);
          max-height: min(92vh, 860px);
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.52);
          border-radius: 12px;
          background: var(--bg);
          padding: 14px;
          box-shadow: 0 42px 130px rgba(0, 0, 0, 0.54);
        }

        .prime-location-modal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 12px;
        }

        .prime-location-modal-title {
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

        .prime-location-modal-actions {
          display: flex;
          gap: 8px;
        }

        .prime-location-modal-image {
          position: relative;
          height: min(78vh, 700px);
          min-height: 430px;
          overflow: hidden;
          border-radius: 8px;
          background: #101010;
        }

        .prime-location-modal-image img {
          object-fit: contain;
        }

        @media (max-width: 767px) {
          .prime-location-section {
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .prime-location-tabs {
            border-radius: 14px;
            width: min(380px, 100%);
          }

          .prime-location-tabs button {
            min-height: 36px;
            gap: 7px;
            font-size: 11px;
          }

          .prime-location-map-image {
            height: 320px;
          }

          .prime-location-google-shell {
            height: 380px;
          }

          .prime-location-google-link {
            top: 12px;
            right: 12px;
          }

          .prime-location-map-actions {
            right: 12px;
            bottom: 12px;
          }

          .prime-location-modal {
            padding: 10px;
          }

          .prime-location-modal-panel {
            padding: 10px;
          }

          .prime-location-modal-title {
            max-width: calc(100vw - 158px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .prime-location-modal-image {
            height: 72vh;
            min-height: 460px;
          }
        }
      `}</style>
    </section>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2.25A9.67 9.67 0 0 0 3.7 16.8L2.5 21.25l4.56-1.2a9.64 9.64 0 0 0 4.97 1.37h.01a9.59 9.59 0 0 0 9.6-9.58 9.6 9.6 0 0 0-9.6-9.59Zm0 17.55h-.01a8.02 8.02 0 0 1-4.1-1.12l-.3-.18-2.7.71.72-2.63-.2-.32a8.05 8.05 0 1 1 6.59 3.54Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function LocationMapModal({ onClose }) {
  return (
    <div className="prime-location-modal" role="dialog" aria-modal="true" aria-label="Location map preview">
      <div className="prime-location-modal-panel">
        <div className="prime-location-modal-top">
          <p className="prime-location-modal-title">The Medallion Aurum Location Map</p>
          <div className="prime-location-modal-actions">
            <a href={locationImage} download aria-label="Download location map">
              <Download size={18} />
            </a>
            <a href={locationImage} target="_blank" rel="noreferrer" aria-label="Open full location map">
              <ExternalLink size={18} />
            </a>
            <button type="button" onClick={onClose} aria-label="Close location map">
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="prime-location-modal-image">
          <Image src={locationImage} alt="The Medallion Aurum full location map" fill sizes="96vw" />
        </div>
      </div>
    </div>
  );
}
