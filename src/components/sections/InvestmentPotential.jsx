"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Calculator, IndianRupee, LineChart, RotateCcw } from "lucide-react";

const growthStats = [
  { label: "Projected Appreciation", value: "10-14%" },
  { label: "Rental Yield Potential", value: "5-7%" },
  { label: "Airport Connectivity", value: "20 Min" },
  { label: "Sector Location", value: "Prime" },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  }).format(value);

export default function InvestmentPotential() {
  const [propertyValue, setPropertyValue] = useState(15000000);
  const [appreciation, setAppreciation] = useState(10);
  const holdingYears = 5;

  const estimate = useMemo(() => {
    const futureValue = propertyValue * (1 + appreciation / 100) ** holdingYears;
    const growth = futureValue - propertyValue;
    const approxGain = growth;
    const totalGrowth = propertyValue ? Math.round((growth / propertyValue) * 100) : 0;
    const points = Array.from({ length: 7 }, (_, index) => {
      const year = (holdingYears / 6) * index;
      return propertyValue * (1 + appreciation / 100) ** year;
    });
    const min = Math.min(...points);
    const max = Math.max(...points);
    const path = points
      .map((point, index) => {
        const x = 8 + index * 14;
        const y = 78 - ((point - min) / Math.max(max - min, 1)) * 52;
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    return { approxGain, futureValue, path, totalGrowth };
  }, [appreciation, propertyValue]);

  const resetCalculator = () => {
    setPropertyValue(15000000);
    setAppreciation(10);
  };

  return (
    <section
      id="investment-potential"
      className="investment-section relative z-20 overflow-hidden bg-[var(--bg)] px-5 py-12 text-[var(--text)] sm:px-6 lg:px-8"
    >
      <div className="investment-bg absolute inset-0" />

      <div className="mobile-section-width relative mx-auto w-full max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--glass)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] backdrop-blur-xl">
              <LineChart size={13} />
              Investment Potential
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-none text-[var(--heading)] md:text-6xl">
              Estimate your <span className="block text-[var(--accent)]">future value</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] lg:pb-3">
            A focused calculator for serious buyers to understand long-term property growth
            before speaking to the sales team.
          </p>
        </div>

        <div className="mt-7 grid gap-4 lg:grid-cols-[0.92fr_1fr]">
          <article className="investment-card investment-growth relative overflow-hidden border border-[var(--line)] p-4">
            <Image
              src="/structslider/struct6.jpg"
              alt="Mohali growth corridor"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="investment-growth-image object-cover"
            />
            <div className="investment-growth-overlay absolute inset-0" />

            <div className="relative">
              <p className="investment-pill">Growth Dashboard</p>
              <h3 className="mt-4 max-w-lg text-3xl font-normal leading-none text-[var(--heading)] md:text-4xl">
                Mohali growth corridor
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--text)]">
                Airport access, IT hubs and premium lifestyle development are shaping this
                location as a strong ownership corridor.
              </p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {growthStats.map((item) => (
                  <div key={item.label} className="investment-stat">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="investment-chart mt-5">
                <p className="investment-pill">Projected Growth Curve</p>
                <svg viewBox="0 0 100 92" role="img" aria-label="Projected property value growth curve">
                  <defs>
                    <linearGradient id="investmentCurveFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-strong)" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={`${estimate.path} L 92 88 L 8 88 Z`} fill="url(#investmentCurveFill)" />
                  <path d={estimate.path} fill="none" stroke="var(--accent-strong)" strokeLinecap="round" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </article>

          <article className="investment-card investment-calculator-card border border-[var(--line)] p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="investment-pill">ROI Calculator</p>
                <h3 className="mt-4 max-w-md text-3xl font-normal leading-none text-[var(--heading)] md:text-4xl">
                  Property value estimator
                </h3>
              </div>
              <span className="investment-icon">
                <Calculator size={22} />
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Enter property amount and expected yearly appreciation to see an estimated 5-year
              future value. This is a simple projection, not a fixed return.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <NumberField
                label="Property Value"
                max={30000000}
                min={8000000}
                step={500000}
                value={propertyValue}
                onChange={setPropertyValue}
              />
              <NumberField
                label="Appreciation % / Year"
                max={16}
                min={4}
                step={1}
                value={appreciation}
                onChange={setAppreciation}
              />
            </div>

            <div className="investment-result mt-5 border border-[var(--line)] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                Estimated Future Property Value
              </p>
              <strong className="mt-2 flex items-center text-4xl font-normal leading-none text-[var(--accent-strong)] md:text-5xl">
                <IndianRupee size={34} />
                {formatCurrency(estimate.futureValue).replace("₹", "")}
              </strong>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                <ResultMini label="Approx Gain" value={formatCurrency(estimate.approxGain)} />
                <ResultMini label="Holding Period" value={`${holdingYears} Years`} />
                <ResultMini label="Total Growth" value={`${estimate.totalGrowth}%`} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/917009247378"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--heading)] hover:text-[var(--bg)]"
              >
                Get Exact ROI Report
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                onClick={resetCalculator}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[var(--glass)] px-6 text-sm font-semibold text-[var(--heading)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <RotateCcw size={15} />
                Reset
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
              Disclaimer: This calculator is for estimated projection only. Actual appreciation,
              rental yield and returns depend on market conditions, inventory and delivery.
            </p>
          </article>
        </div>
      </div>

      <style>{`
        .investment-section {
          min-height: auto;
        }

        .investment-bg {
          background:
            radial-gradient(circle at 14% 12%, rgba(214, 178, 95, 0.14), transparent 30%),
            radial-gradient(circle at 82% 24%, rgba(159, 197, 220, 0.09), transparent 28%),
            linear-gradient(180deg, var(--bg), var(--bg));
        }

        .investment-card {
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(214, 178, 95, 0.06)),
            rgba(5, 5, 5, 0.72);
          box-shadow: 0 22px 64px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(18px);
        }

        .investment-growth {
          min-height: 520px;
        }

        .investment-growth-image {
          opacity: 0.72;
        }

        .investment-growth-overlay {
          background:
            linear-gradient(180deg, rgba(5, 5, 5, 0.14), rgba(5, 5, 5, 0.5)),
            radial-gradient(circle at 50% 100%, rgba(214, 178, 95, 0.1), transparent 44%);
        }

        .investment-pill {
          display: inline-flex;
          min-height: 26px;
          align-items: center;
          border: 1px solid rgba(214, 178, 95, 0.56);
          border-radius: 999px;
          background: rgba(214, 178, 95, 0.16);
          padding: 0 12px;
          color: var(--accent-strong);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .investment-stat {
          min-height: 68px;
          border: 1px solid rgba(214, 178, 95, 0.34);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 13px;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }

        .investment-stat:hover {
          border-color: rgba(244, 211, 111, 0.78);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.28), rgba(159, 197, 220, 0.12)),
            rgba(255, 255, 255, 0.14);
          transform: translateY(-2px);
        }

        .investment-stat strong {
          display: block;
          color: var(--accent-strong);
          font-size: 21px;
          font-weight: 600;
          line-height: 1;
        }

        .investment-stat span {
          display: block;
          margin-top: 6px;
          color: #fff;
          font-size: 12px;
          line-height: 1.4;
        }

        .investment-chart {
          max-width: 88%;
          margin-right: auto;
          margin-left: auto;
          overflow: hidden;
          border: 1px solid rgba(214, 178, 95, 0.34);
          border-radius: 8px;
          background:
            rgba(5, 5, 5, 0.48);
          padding: 13px;
        }

        .investment-chart svg {
          display: block;
          width: 100%;
          height: 130px;
          margin-top: 8px;
          margin-right: auto;
          margin-left: auto;
        }

        .investment-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(214, 178, 95, 0.46);
          border-radius: 999px;
          background: var(--glass);
          color: var(--accent);
        }

        .investment-field label {
          display: block;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .investment-field input[type="number"] {
          width: 100%;
          min-height: 38px;
          margin-top: 8px;
          border: 1px solid rgba(214, 178, 95, 0.4);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          padding: 0 11px;
          color: var(--heading);
          font-size: 13px;
          outline: none;
        }

        .investment-result {
          border-radius: 8px;
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.14), rgba(159, 197, 220, 0.06)),
            rgba(255, 255, 255, 0.05);
        }

        .investment-mini {
          min-height: 58px;
          border: 1px solid rgba(214, 178, 95, 0.32);
          border-radius: 8px;
          padding: 10px;
        }

        .investment-mini span {
          display: block;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .investment-mini strong {
          display: block;
          margin-top: 5px;
          color: var(--heading);
          font-size: 13px;
          font-weight: 600;
        }

        [data-theme="light"] .investment-card {
          background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(214, 178, 95, 0.08)),
            rgba(255, 255, 255, 0.8);
        }

        [data-theme="light"] .investment-growth-image {
          opacity: 0.76;
        }

        [data-theme="light"] .investment-growth-overlay {
          background:
            linear-gradient(180deg, rgba(247, 251, 255, 0.08), rgba(247, 251, 255, 0.58)),
            radial-gradient(circle at 50% 100%, rgba(214, 178, 95, 0.08), transparent 44%);
        }

        [data-theme="light"] .investment-stat,
        [data-theme="light"] .investment-field input[type="number"],
        [data-theme="light"] .investment-result,
        [data-theme="light"] .investment-chart {
          background-color: rgba(255, 255, 255, 0.62);
        }

        [data-theme="light"] .investment-stat:hover {
          border-color: rgba(154, 117, 39, 0.76);
          background:
            linear-gradient(135deg, rgba(214, 178, 95, 0.24), rgba(159, 197, 220, 0.16)),
            rgba(255, 255, 255, 0.84);
        }

        [data-theme="light"] .investment-stat span {
          color: var(--text);
        }

        @media (max-width: 1023px) {
          .investment-growth {
            min-height: 500px;
          }
        }

        @media (max-width: 640px) {
          .investment-section {
            padding-top: 26px;
            padding-right: 5px;
            padding-bottom: 28px;
            padding-left: 5px;
          }

          .investment-section .mobile-section-width {
            max-width: 360px;
          }

          .investment-section .mobile-section-width > .grid:first-child {
            gap: 10px;
            text-align: center;
          }

          .investment-section .mobile-section-width > .grid:first-child > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .investment-section .mobile-section-width > .grid:first-child h2 {
            margin-top: 12px;
            font-size: 2rem;
            line-height: 1.02;
          }

          .investment-section .mobile-section-width > .grid:first-child > p {
            max-width: 320px;
            margin-right: auto;
            margin-left: auto;
            font-size: 0.84rem;
            line-height: 1.42;
          }

          .investment-section .mobile-section-width > .mt-7.grid {
            margin-top: 18px;
            gap: 12px;
          }

          .investment-growth {
            min-height: 430px;
            padding: 13px;
          }

          .investment-growth h3 {
            margin-top: 12px;
            font-size: 1.65rem;
            line-height: 1.04;
          }

          .investment-growth h3 + p {
            margin-top: 10px;
            font-size: 0.8rem;
            line-height: 1.42;
          }

          .investment-growth .mt-5.grid {
            margin-top: 14px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;
          }

          .investment-stat {
            min-height: 54px;
            padding: 9px;
          }

          .investment-stat strong {
            font-size: 1rem;
          }

          .investment-stat span {
            margin-top: 4px;
            font-size: 0.66rem;
            line-height: 1.22;
          }

          .investment-chart svg {
            height: 82px;
          }

          .investment-chart {
            max-width: 100%;
            margin-top: 14px;
            padding: 9px;
          }

          .investment-pill {
            min-height: 23px;
            padding: 0 10px;
            font-size: 0.56rem;
            letter-spacing: 0.14em;
          }

          .investment-calculator-card {
            padding: 13px;
          }

          .investment-calculator-card > .flex {
            gap: 10px;
            flex-wrap: nowrap;
            align-items: flex-start;
          }

          .investment-calculator-card h3 {
            margin-top: 12px;
            max-width: 230px;
            font-size: 1.6rem;
            line-height: 1.04;
          }

          .investment-icon {
            flex: 0 0 auto;
            width: 38px;
            height: 38px;
          }

          .investment-calculator-card > p {
            margin-top: 10px;
            font-size: 0.8rem;
            line-height: 1.38;
          }

          .investment-calculator-card > .flex + p {
            display: none;
          }

          .investment-calculator-card > .mt-5.grid {
            margin-top: 13px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .investment-field label {
            font-size: 0.55rem;
            letter-spacing: 0.1em;
          }

          .investment-field input[type="number"] {
            min-height: 34px;
            margin-top: 6px;
            padding: 0 8px;
            font-size: 0.75rem;
          }

          .investment-result {
            margin-top: 13px;
            padding: 12px;
          }

          .investment-result > p {
            font-size: 0.56rem;
            line-height: 1.25;
            letter-spacing: 0.13em;
          }

          .investment-result > strong {
            margin-top: 7px;
            font-size: 1.75rem;
          }

          .investment-result > strong svg {
            width: 24px;
            height: 24px;
          }

          .investment-result .mt-3.grid {
            margin-top: 10px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;
          }

          .investment-result .mt-3.grid .investment-mini:last-child {
            grid-column: 1 / -1;
          }

          .investment-mini {
            min-height: 46px;
            padding: 8px;
          }

          .investment-mini span {
            font-size: 0.54rem;
            line-height: 1.15;
            letter-spacing: 0.09em;
          }

          .investment-mini strong {
            margin-top: 4px;
            font-size: 0.78rem;
            line-height: 1.15;
          }

          .investment-calculator-card > .mt-5.flex {
            margin-top: 13px;
            gap: 8px;
            align-items: center;
          }

          .investment-calculator-card > .mt-5.flex a,
          .investment-calculator-card > .mt-5.flex button {
            width: min(100%, 220px);
            min-height: 38px;
            padding-inline: 16px;
            font-size: 0.78rem;
          }

          .investment-calculator-card > p:last-child {
            margin-top: 10px;
            font-size: 0.68rem;
            line-height: 1.32;
          }
        }
      `}</style>
    </section>
  );
}

function NumberField({ label, max, min, onChange, step, value }) {
  return (
    <div className="investment-field">
      <label>{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}

function ResultMini({ label, value }) {
  return (
    <div className="investment-mini">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
