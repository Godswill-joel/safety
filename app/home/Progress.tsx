"use client";

import Image from "next/image";

/* ─── SVG Icons ─── */
const SearchDocIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <rect x="10" y="8" width="30" height="38" rx="2" />
    <path d="M18 18h14M18 25h14M18 32h8" />
    <circle cx="38" cy="44" r="8" />
    <path d="M44 50l6 6" strokeLinecap="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <rect x="8" y="14" width="48" height="40" rx="2" />
    <path d="M8 24h48" />
    <path d="M20 10v8M44 10v8" strokeLinecap="round" />
    <rect x="18" y="32" width="8" height="8" rx="1" />
    <rect x="30" y="32" width="8" height="8" rx="1" />
    <rect x="18" y="44" width="8" height="5" rx="1" />
    <rect x="30" y="44" width="8" height="5" rx="1" />
    <rect x="42" y="32" width="6" height="8" rx="1" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <circle cx="32" cy="32" r="20" />
    <circle cx="32" cy="32" r="12" />
    <circle cx="32" cy="32" r="4" />
    <path d="M32 8v8M32 48v8M8 32h8M48 32h8" strokeLinecap="round" />
  </svg>
);

const HouseHandIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <path d="M10 56c2-6 8-10 14-10h4c2 0 4-1 4-3v-4" />
    <path d="M32 39c4 0 8-4 8-9V18l-8-8-8 8v12c0 5 4 9 8 9z" />
    <path d="M24 26h16" />
    <path d="M20 56h24" strokeLinecap="round" />
    <path d="M38 46c4 2 8 4 10 8" />
  </svg>
);

const steps = [
  {
    icon: <SearchDocIcon />,
    title: "Choose Your Service",
    desc: "Lorem ipsum dolor sit amet consecte.",
    num: "01.",
  },
  {
    icon: <CalendarIcon />,
    title: "Make Appointment",
    desc: "Lorem ipsum dolor sit amet consecte.",
    num: "02.",
  },
  {
    icon: <TargetIcon />,
    title: "Go To Your Place",
    desc: "Lorem ipsum dolor sit amet consecte.",
    num: "03.",
  },
  {
    icon: <HouseHandIcon />,
    title: "Enjoy Your Service",
    desc: "Lorem ipsum dolor sit amet consecte.",
    num: "04.",
  },
];

export default function WorkingProcess() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');
      `}</style>

      <section
        className="relative w-full min-h-[580px] flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        {/* ── Dark background image with overlay ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=1600&q=80"
            alt="Background firefighter"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Very dark overlay — makes it near-black like the design */}
          <div className="absolute inset-0 bg-black/82" />
        </div>

        {/* ── Header text ── */}
        <div className="relative z-10 text-center mb-14 max-w-2xl">
          <p
            className="text-orange-500 font-bold text-[13px] tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            How We Works
          </p>
          <h2
            className="text-white font-black text-[46px] leading-tight mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}
          >
            Our Working Process
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* ── Cards row ── */}
        <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Orange top border */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-orange-600 z-10" />

              {/* Card body */}
              <div className="bg-white pt-10 pb-8 px-8 flex flex-col items-start justify-between min-h-[220px] relative overflow-hidden">
                {/* Icon */}
                <div className="text-orange-600 mb-6">
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-gray-900 font-extrabold text-[20px] leading-snug mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.01em" }}
                >
                  {step.title}
                </h3>

                {/* Description + ghosted number */}
                <div className="flex items-end justify-between w-full">
                  <p className="text-gray-400 text-[14px] leading-relaxed max-w-[160px]">
                    {step.desc}
                  </p>

                  {/* Ghost step number */}
                  <span
                    className="text-[52px] font-black text-gray-200 leading-none select-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}