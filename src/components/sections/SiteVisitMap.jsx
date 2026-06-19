"use client";

import Image from "next/image";
import {
  Clipboard,
  MapPin,
  Phone,
} from "lucide-react";

const phoneNumber = "+91 96973-00066";

export default function SiteVisitMap() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="site-visit-map"
      className="site-visit-map relative isolate overflow-hidden bg-[var(--bg)] px-0 py-0 text-[var(--text)]"
    >
      <div className="site-visit-shell relative mx-auto grid w-full items-center">
        <div className="site-map-focus relative w-full overflow-hidden">
          <Image
            src="/maps/Location.webp"
            alt="The Medallion Aurum location map preview"
            fill
            sizes="(min-width: 1024px) 58vw, 92vw"
            className="site-map-image object-cover"
          />
          <div className="site-map-box-wash absolute inset-0" />
          <div className="site-map-pulse absolute left-[52%] top-[45%] -translate-x-1/2 -translate-y-1/2">
            <span />
            <span />
            <strong />
          </div>

          <div className="site-map-label absolute left-[52%] top-[55%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--heading)] shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-7">
            <MapPin size={15} className="shrink-0 text-[var(--accent)]" />
            <span className="whitespace-nowrap">The Medallion Aurum</span>
          </div>
        </div>

        <aside className="site-visit-card relative mx-auto flex w-full flex-col justify-center border border-[var(--accent)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.3)] sm:p-7">
          <p className="site-visit-pill mx-auto inline-flex min-h-7 items-center gap-2 rounded-full border border-[var(--accent)] bg-[rgba(214,178,95,0.08)] px-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--accent)]">
            <Clipboard size={13} />
            Contact Us
          </p>

          <h2 className="site-visit-title mt-4 text-center font-[family:var(--font-body)] font-semibold leading-[1.08] text-[var(--heading)]">
            Book Your <span className="text-[var(--accent-strong)]">Site Visit</span>
          </h2>
          <p className="site-visit-subtitle mt-3 text-center text-xs font-medium text-[var(--muted)]">
            Starting Rs 1.32 Cr | RERA Approved
          </p>

          <form className="mt-4 grid gap-2.5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="site-visit-input"
              aria-label="Full name"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              className="site-visit-input"
              aria-label="Mobile number"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              className="site-visit-input"
              aria-label="Email address"
            />

            <button
              type="submit"
              className="site-visit-submit mt-1 inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[var(--accent-strong)] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
            >
              Schedule Visit
            </button>
          </form>

          <a
            href="https://wa.me/919697300066"
            className="site-visit-whatsapp-btn mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--success)] bg-[var(--success-soft)] px-7 text-sm font-semibold text-[var(--success)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--success)] hover:text-[#050505]"
          >
            <WhatsAppIcon className="h-[17px] w-[17px]" />
            WhatsApp Now
          </a>

          <a
            href="tel:+919697300066"
            className="site-visit-phone mt-3 flex items-center justify-center gap-3 font-[family:var(--font-body)] font-semibold leading-none text-[var(--accent-strong)]"
          >
            <Phone size={20} />
            {phoneNumber}
          </a>
        </aside>
      </div>

      <style>{`
        .site-visit-map {
          min-height: 100svh;
          background:
            radial-gradient(circle at 35% 50%, rgba(214, 178, 95, 0.08), transparent 22%),
            linear-gradient(180deg, #050505, #050505);
        }

        .site-visit-shell {
          min-height: 100svh;
          max-width: 1280px;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 420px);
          gap: clamp(2rem, 5vw, 5.2rem);
          padding: clamp(3rem, 7svh, 5.5rem) clamp(1.25rem, 4vw, 3.75rem);
        }

        .site-visit-card {
          max-width: 420px;
          min-height: 484px;
          border-radius: 18px;
          background:
            radial-gradient(circle at 92% 0%, rgba(244, 211, 111, 0.07), transparent 30%),
            rgba(5, 5, 5, 0.92);
        }

        .site-map-focus {
          height: clamp(330px, 54svh, 420px);
          min-height: 330px;
          background: #050505;
        }

        .site-map-image {
          opacity: 0.82;
          filter: saturate(0.74) contrast(1.08) brightness(0.66);
        }

        .site-map-box-wash {
          background:
            radial-gradient(circle at 52% 45%, rgba(244, 211, 111, 0.22), transparent 14%),
            linear-gradient(90deg, rgba(5, 5, 5, 0.86), rgba(5, 5, 5, 0.28) 48%, rgba(5, 5, 5, 0.9)),
            linear-gradient(180deg, rgba(5, 5, 5, 0.84), rgba(5, 5, 5, 0.18) 44%, rgba(5, 5, 5, 0.92));
        }

        .site-visit-title {
          max-width: 280px;
          margin-inline: auto;
          font-size: clamp(2.35rem, 4.1vw, 3.05rem);
        }

        .site-visit-subtitle {
          font-size: 0.7rem;
          line-height: 1.35;
          opacity: 0.45;
        }

        .site-visit-pill {
          font-size: 0.65rem;
        }

        .site-visit-submit {
          min-height: 38px;
          font-size: 0.9rem;
        }

        .site-visit-input {
          min-height: 32px;
          width: 100%;
          border: 1px solid rgba(214, 178, 95, 0.55);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.03);
          padding: 0 12px;
          color: var(--heading);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          outline: none;
          text-transform: uppercase;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .site-visit-input::placeholder {
          color: var(--muted);
        }

        .site-visit-input:focus {
          border-color: var(--accent-strong);
          box-shadow: 0 0 0 3px rgba(214, 178, 95, 0.12);
        }

        .site-map-pulse {
          z-index: 3;
          width: 96px;
          height: 96px;
          pointer-events: none;
        }

        .site-map-pulse span,
        .site-map-pulse strong {
          position: absolute;
          left: 50%;
          top: 50%;
          margin: auto;
          border-radius: 999px;
          transform: translate(-50%, -50%);
        }

        .site-map-pulse span {
          width: 100%;
          height: 100%;
          border: 2px solid rgba(244, 211, 111, 0.9);
          box-shadow: 0 0 28px rgba(244, 211, 111, 0.38);
          animation: site-pulse 1.9s ease-out infinite;
          transform-origin: center center;
        }

        .site-map-pulse span:nth-child(2) {
          animation-delay: 0.75s;
        }

        .site-map-pulse strong {
          width: 18px;
          height: 18px;
          background: var(--accent-strong);
          z-index: 2;
          box-shadow: 0 0 34px rgba(244, 211, 111, 0.72);
        }

        .site-visit-card form {
          gap: 9px;
        }

        .site-visit-card > a {
          min-height: 38px;
          font-size: 0.88rem;
        }

        .site-visit-whatsapp-btn {
          min-height: 44px;
          font-size: 0.9rem;
        }

        .site-visit-phone {
          font-size: 1.16rem;
        }

        @keyframes site-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.08);
            opacity: 0.95;
          }
          55% {
            opacity: 0.45;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }

        [data-theme="light"] .site-visit-map {
          background:
            radial-gradient(circle at 34% 48%, rgba(154, 117, 39, 0.1), transparent 24%),
            radial-gradient(circle at 82% 18%, rgba(159, 197, 220, 0.12), transparent 28%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        [data-theme="light"] .site-visit-card {
          background:
            radial-gradient(circle at 100% 0%, rgba(154, 117, 39, 0.08), transparent 32%),
            rgba(255, 255, 255, 0.94);
          box-shadow: 0 24px 80px rgba(18, 18, 18, 0.1);
        }

        [data-theme="light"] .site-map-focus {
          background: transparent;
        }

        [data-theme="light"] .site-map-image {
          opacity: 0.58;
          filter: saturate(0.68) contrast(1.04) brightness(1.08);
          mix-blend-mode: multiply;
        }

        [data-theme="light"] .site-map-box-wash {
          background:
            radial-gradient(circle at 52% 45%, rgba(154, 117, 39, 0.14), transparent 15%),
            linear-gradient(90deg, rgba(247, 251, 255, 0.8), rgba(247, 251, 255, 0.18) 50%, rgba(247, 251, 255, 0.8)),
            linear-gradient(180deg, rgba(247, 251, 255, 0.74), rgba(247, 251, 255, 0.12) 44%, rgba(247, 251, 255, 0.82));
        }

        [data-theme="light"] .site-visit-input {
          background: rgba(255, 255, 255, 0.78);
          color: var(--heading);
        }

        [data-theme="light"] .site-map-label {
          border-color: rgba(154, 117, 39, 0.22);
          background: rgba(255, 255, 255, 0.48);
          color: var(--heading);
        }

        [data-theme="light"] .site-visit-whatsapp-btn {
          border-color: var(--success);
          background: var(--success);
          color: #ffffff;
        }

        [data-theme="light"] .site-visit-whatsapp-btn:hover {
          border-color: var(--success);
          background: #ffffff;
          color: var(--success);
        }

        @media (max-width: 900px) {
          .site-visit-shell {
            min-height: 100svh;
            grid-template-columns: 1fr;
            align-content: center;
            gap: 1rem;
            padding: clamp(2.25rem, 6svh, 3.5rem) clamp(0.8rem, 3vw, 1.25rem);
          }

          .site-map-focus {
            height: clamp(250px, 42svh, 340px);
            min-height: 250px;
          }

          .site-visit-card {
            max-width: min(100%, 420px);
            min-height: auto;
            margin-top: 0;
            padding: clamp(1.25rem, 5vw, 1.7rem);
          }

          .site-visit-title {
            font-size: clamp(2rem, 9vw, 2.55rem);
          }

          .site-visit-subtitle {
            margin-top: 0.45rem;
          }

          .site-visit-card form {
            margin-top: 0.95rem;
            gap: 0.6rem;
          }
        }

        @media (max-width: 640px) {
          .site-map-label {
            max-width: calc(100vw - 48px);
            padding-inline: 18px;
            font-size: 10px;
            letter-spacing: 0.16em;
          }

          .site-visit-card {
            border-radius: 1rem;
          }

          .site-visit-pill {
            min-height: 1.8rem;
            padding-inline: 1rem;
            letter-spacing: 0.2em;
          }

          .site-visit-input {
            min-height: 2.1rem;
          }

          .site-visit-submit,
          .site-visit-card > a {
            min-height: 2.4rem;
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
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16.02 3.2c-7.03 0-12.75 5.63-12.75 12.56 0 2.21.59 4.38 1.71 6.27L3.2 28.8l6.97-1.75a12.96 12.96 0 0 0 5.85 1.42c7.03 0 12.75-5.64 12.75-12.57S23.05 3.2 16.02 3.2Zm0 22.96c-1.83 0-3.62-.48-5.19-1.39l-.5-.29-4.13 1.04 1.09-3.97-.33-.52a10.18 10.18 0 0 1-1.57-5.27c0-5.65 4.77-10.25 10.63-10.25s10.62 4.6 10.62 10.25-4.77 10.4-10.62 10.4Zm5.84-7.68c-.32-.16-1.9-.92-2.19-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1 1.23-.19.21-.37.23-.69.08-.32-.16-1.35-.49-2.58-1.56-.95-.84-1.6-1.88-1.79-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.39-.03-.55-.08-.16-.72-1.7-.98-2.33-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.32-1.1 1.06-1.1 2.58s1.13 3 1.29 3.21c.16.21 2.23 3.35 5.39 4.69.75.32 1.34.51 1.8.65.76.24 1.45.2 2 .12.61-.09 1.9-.76 2.17-1.5.27-.74.27-1.37.19-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
