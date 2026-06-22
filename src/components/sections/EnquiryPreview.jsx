"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CalendarCheck, CheckCircle2, IndianRupee, MapPin, ShieldCheck } from "lucide-react";

const assurances = [
  { label: "RERA Approved", icon: ShieldCheck },
  { label: "Price Guidance", icon: IndianRupee },
  { label: "Free Site Visit", icon: CalendarCheck },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  consent: false,
};

export default function EnquiryPreview() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const validateForm = () => {
    const nextErrors = {};
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!name) {
      nextErrors.name = "Please enter your full name.";
    } else if (name.length < 2) {
      nextErrors.name = "Name should be at least 2 characters.";
    }

    if (!phone) {
      nextErrors.phone = "Please enter your mobile number.";
    } else if (!/^\d+$/.test(phone)) {
      nextErrors.phone = "Mobile number can contain digits only.";
    } else if (phone.length !== 10) {
      nextErrors.phone = "Mobile number must be exactly 10 digits.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      nextErrors.phone = "Please enter a valid Indian mobile number.";
    }

    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.consent) {
      nextErrors.consent = "Please accept the terms to continue.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { checked, name, type, value } = event.target;
    const nextValue = type === "checkbox" ? checked : name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setErrors((current) => {
      if (!current[name]) return current;

      const updated = { ...current };
      delete updated[name];
      return updated;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSuccessOpen(true);
    setFormData(initialForm);
  };

  return (
    <section
      id="private-preview"
      className="enquiry-preview relative z-20 flex min-h-[100svh] items-start overflow-hidden px-4 py-8 sm:items-center sm:px-6 sm:py-10 lg:py-12"
    >
      <div className="enquiry-glow absolute inset-0" />
      <div className="enquiry-wash absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl items-stretch gap-4 sm:gap-7 lg:max-w-6xl lg:grid-cols-2">
        <div className="enquiry-media relative min-h-[260px] overflow-hidden border shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:min-h-[320px] lg:min-h-[400px]">
          <Image
            src="/enquiry/enquiry.jpg"
            alt="Medallion Aurum private residence interior"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            quality={74}
            className="object-cover"
          />
          <div className="enquiry-media-overlay absolute inset-0" />

          <div className="enquiry-image-heading absolute bottom-12 left-3 max-w-[calc(100%-24px)] border px-3 py-2 backdrop-blur-xl sm:bottom-16 sm:left-6 sm:max-w-[calc(100%-48px)] sm:px-4 sm:py-2.5">
            <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              Private Preview
            </p>
            <h2 className="mt-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-base font-normal leading-tight text-[var(--heading)] sm:text-xl lg:text-2xl">
              Step into the Aurum experience
            </h2>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 overflow-hidden border-t border-[var(--line)] pt-2 text-[9px] uppercase tracking-[0.12em] text-[var(--muted)] sm:bottom-5 sm:left-6 sm:right-6 sm:pt-3 sm:text-[10px] sm:tracking-[0.16em]">
            <MapPin size={14} className="shrink-0 text-[var(--accent)]" />
            <span className="truncate">Sector 67, Mohali - The Medallion Aurum</span>
          </div>
        </div>

        <div className="enquiry-panel flex min-h-[0] flex-col justify-center border p-3.5 shadow-[0_22px_70px_rgba(0,0,0,0.16)] sm:min-h-[320px] sm:p-5 lg:min-h-[400px] lg:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-xs sm:tracking-[0.28em]">
            Book A Private Visit
          </p>
          <h2 className="mt-1.5 max-w-xl text-[1.55rem] font-normal leading-tight text-[var(--heading)] sm:mt-2 sm:text-3xl md:text-4xl">
            Secure your place at Medallion Aurum.
          </h2>
          <p className="mt-1.5 max-w-lg text-[13px] leading-5 text-[var(--muted)] sm:mt-2 sm:text-sm sm:leading-6">
            Check current availability, receive project details, and schedule a guided site visit
            with the Aurum advisory team.
          </p>

          <form className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3" onSubmit={handleSubmit}>
            <label className="grid gap-1 sm:gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--heading)] sm:text-xs sm:tracking-[0.24em]">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                className="h-8 border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm text-[var(--heading)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)] aria-invalid:border-red-400 sm:h-10"
              />
              {errors.name ? <span className="text-[10px] leading-3 text-red-400">{errors.name}</span> : null}
            </label>

            <label className="grid gap-1 sm:gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--heading)] sm:text-xs sm:tracking-[0.24em]">
                Mobile Number
              </span>
              <div className="flex h-8 items-center gap-3 border-b border-[var(--line)] transition-colors focus-within:border-[var(--accent)] sm:h-10">
                <span className="text-sm text-[var(--heading)]">+91</span>
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="XXXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--heading)] outline-none placeholder:text-[var(--muted)]"
                />
              </div>
              {errors.phone ? <span className="text-[10px] leading-3 text-red-400">{errors.phone}</span> : null}
            </label>

            <label className="grid gap-1 sm:gap-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--heading)] sm:text-xs sm:tracking-[0.24em]">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter email id"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                className="h-8 border-0 border-b border-[var(--line)] bg-transparent px-0 text-sm text-[var(--heading)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)] aria-invalid:border-red-400 sm:h-10"
              />
              {errors.email ? <span className="text-[10px] leading-3 text-red-400">{errors.email}</span> : null}
            </label>

            <button
              type="submit"
              className="mt-0.5 inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-full bg-[var(--accent)] px-4 text-[11px] font-semibold text-white transition-colors duration-300 hover:bg-[var(--heading)] hover:text-[var(--bg)] sm:min-h-11 sm:px-7 sm:text-sm"
            >
              Check Price & Book Site Visit
            </button>

            <label className="flex items-start gap-2 text-[10px] leading-4 text-[var(--muted)] sm:text-xs sm:leading-5">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                aria-invalid={Boolean(errors.consent)}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[var(--accent)] sm:h-4 sm:w-4"
              />
              <span>
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setTermsOpen(true)}
                  className="font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  terms & conditions
                </button>{" "}
                and consent to be contacted by the Aurum advisory team.
                {errors.consent ? (
                  <span className="mt-0.5 block text-[10px] leading-3 text-red-400">
                    {errors.consent}
                  </span>
                ) : null}
              </span>
            </label>
          </form>

          <div className="mt-3 grid grid-cols-3 border-t border-[var(--line)] pt-2.5 sm:mt-5 sm:pt-3">
            {assurances.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`relative flex flex-col items-center justify-start gap-1 px-2 text-center text-[8px] font-semibold uppercase leading-3 tracking-[0.08em] text-[var(--muted)] sm:text-[11px] sm:leading-4 sm:tracking-[0.16em] ${
                    index < assurances.length - 1 ? "after:absolute after:right-0 after:top-1 after:h-[calc(100%-0.5rem)] after:w-px after:bg-[var(--line)]" : ""
                  }`}
                >
                  <Icon size={15} className="text-[var(--accent)]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {successOpen && typeof document !== "undefined" ? createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
        >
          <div className="enquiry-success-modal w-full max-w-sm border p-6 text-center shadow-[0_24px_90px_rgba(0,0,0,0.36)]">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--success-soft)] text-[var(--accent)]">
              <CheckCircle2 size={24} />
            </span>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Request Received
            </p>
            <h3
              id="enquiry-success-title"
              className="mt-2 font-[family:var(--font-display)] text-2xl font-normal leading-tight text-[var(--heading)]"
            >
              Thank you for your interest.
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Our Aurum advisor will contact you soon with pricing, availability and site visit
              details.
            </p>
            <button
              type="button"
              onClick={() => setSuccessOpen(false)}
              className="mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
            >
              OK
            </button>
          </div>
        </div>,
        document.body
      ) : null}

      {termsOpen && typeof document !== "undefined" ? createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-terms-title"
        >
          <div className="enquiry-success-modal w-full max-w-md border p-5 shadow-[0_24px_90px_rgba(0,0,0,0.36)] sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Consent Details
            </p>
            <h3
              id="enquiry-terms-title"
              className="mt-2 font-[family:var(--font-display)] text-2xl font-normal leading-tight text-[var(--heading)]"
            >
              Terms & Conditions
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
              <p>
                By submitting this form, you agree to be contacted regarding The Medallion
                Aurum project, pricing, availability, offers and site visit coordination.
              </p>
              <p>
                Your details may be shared only with authorised project representatives for
                enquiry follow-up. Submitting this form does not create any booking,
                allotment or purchase obligation.
              </p>
              <p>
                Project details, pricing and availability are subject to change and should be
                verified with the official advisory team before making any decision.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setTermsOpen(false)}
              className="mt-5 inline-flex min-h-10 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
            >
              OK
            </button>
          </div>
        </div>,
        document.body
      ) : null}

      <style>{`
        .enquiry-preview {
          background: var(--bg);
          color: var(--text);
        }

        .enquiry-glow {
          background:
            radial-gradient(circle at 18% 20%, rgba(201, 162, 74, 0.18), transparent 28%),
            radial-gradient(circle at 86% 72%, rgba(244, 217, 133, 0.12), transparent 30%);
        }

        .enquiry-wash {
          background: linear-gradient(180deg, rgba(5, 4, 3, 0.24), rgba(5, 4, 3, 0.78));
        }

        .enquiry-media,
        .enquiry-panel {
          border-color: rgba(201, 162, 74, 0.28);
        }

        .enquiry-media {
          background: #11100d;
        }

        .enquiry-panel {
          background: linear-gradient(145deg, rgba(17, 16, 13, 0.96), rgba(5, 4, 3, 0.94));
        }

        .enquiry-media-overlay {
          background:
            linear-gradient(90deg, rgba(5, 4, 3, 0.42), rgba(5, 4, 3, 0.08) 52%, rgba(5, 4, 3, 0.36)),
            linear-gradient(180deg, rgba(5, 4, 3, 0.02), rgba(5, 4, 3, 0.52));
        }

        .enquiry-image-heading {
          border-color: rgba(244, 217, 133, 0.24);
          background: rgba(5, 4, 3, 0.62);
        }

        .enquiry-success-modal {
          border-color: rgba(244, 217, 133, 0.34);
          background:
            linear-gradient(145deg, rgba(17, 16, 13, 0.98), rgba(5, 4, 3, 0.96)),
            var(--bg);
        }

        [data-theme="light"] .enquiry-glow {
          background:
            radial-gradient(circle at 18% 20%, rgba(154, 117, 39, 0.18), transparent 30%),
            radial-gradient(circle at 86% 72%, rgba(159, 197, 220, 0.18), transparent 30%);
        }

        [data-theme="light"] .enquiry-wash {
          background: linear-gradient(180deg, rgba(247, 251, 255, 0.16), rgba(247, 251, 255, 0.72));
        }

        [data-theme="light"] .enquiry-media,
        [data-theme="light"] .enquiry-panel {
          border-color: rgba(18, 18, 18, 0.14);
        }

        [data-theme="light"] .enquiry-panel {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.94), rgba(247, 251, 255, 0.86));
        }

        [data-theme="light"] .enquiry-media-overlay {
          background:
            linear-gradient(90deg, rgba(247, 251, 255, 0.16), rgba(247, 251, 255, 0.02) 56%, rgba(247, 251, 255, 0.12)),
            linear-gradient(180deg, transparent, rgba(247, 251, 255, 0.18));
        }

        [data-theme="light"] .enquiry-image-heading {
          border-color: rgba(154, 117, 39, 0.22);
          background: rgba(255, 255, 255, 0.76);
        }

        [data-theme="light"] .enquiry-success-modal {
          border-color: rgba(154, 117, 39, 0.24);
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(247, 251, 255, 0.94)),
            var(--bg);
        }
      `}</style>
    </section>
  );
}
