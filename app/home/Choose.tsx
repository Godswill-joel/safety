"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Counter hook ─── */
function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

/* ─── Stat card ─── */
interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
  active: boolean;
  duration?: number;
}

function StatCard({ icon, value, label, delay, active, duration = 2000 }: StatCardProps) {
  const [go, setGo] = useState(false);
  const count = useCounter(value, duration, go);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  // Format with commas
  const formatted = count.toLocaleString("en-US");

  return (
    <div className="relative bg-white border border-gray-200 flex flex-col items-center justify-center py-10 px-6 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      {/* Orange top border */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-orange-600" />

      {/* Icon */}
      <div className="text-orange-600 mb-5 w-14 h-14 flex items-center justify-center">
        {icon}
      </div>

      {/* Number + plus */}
      <div className="flex items-end gap-1 mb-2">
        <span
          className="text-[42px] font-black text-gray-900 leading-none"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {formatted}
        </span>
        <span
          className="text-[36px] font-black text-orange-600 leading-none mb-[2px]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          +
        </span>
      </div>

      {/* Label */}
      <p
        className="text-gray-500 text-[14px] font-medium tracking-wide text-center"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

/* ─── SVG Icons ─── */
const TeamIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <circle cx="32" cy="18" r="7" />
    <path d="M18 44c0-7.732 6.268-14 14-14s14 6.268 14 14" />
    <circle cx="14" cy="24" r="5" />
    <path d="M4 46c0-5.523 4.477-10 10-10" />
    <circle cx="50" cy="24" r="5" />
    <path d="M60 46c0-5.523-4.477-10-10-10" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <circle cx="32" cy="26" r="14" />
    <polygon points="32,18 34.2,24.2 40.8,24.2 35.3,28.1 37.5,34.4 32,30.5 26.5,34.4 28.7,28.1 23.2,24.2 29.8,24.2" />
    <path d="M22 38l-6 14 8-3 4 7 6-14" />
    <path d="M42 38l6 14-8-3-4 7-6-14" />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <rect x="14" y="8" width="28" height="36" rx="2" />
    <path d="M22 20h12M22 28h12M22 36h6" />
    <circle cx="44" cy="48" r="8" />
    <path d="M40 48l3 3 5-5" />
  </svg>
);

const ClientIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14">
    <circle cx="32" cy="20" r="8" />
    <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16" />
    <circle cx="32" cy="52" r="10" />
    <path d="M26 52l4 4 8-8" />
  </svg>
);

/* ─── Main component ─── */
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <TeamIcon />,     value: 65,    label: "Professional Team",   delay: 0   },
    { icon: <AwardIcon />,    value: 85,    label: "Honors & Awards",      delay: 150 },
    { icon: <DocumentIcon />, value: 4258,  label: "Documents Notarized",  delay: 300 },
    { icon: <ClientIcon />,   value: 2250,  label: "Trusted Clients",      delay: 450 },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');
      `}</style>

      <section
        ref={sectionRef}
        className="bg-white w-full py-24 px-6"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-16">

          {/* ── LEFT: text content ── */}
          <div className="flex-1 max-w-[560px]">
            {/* Tag */}
            <p
              className="text-orange-600 font-bold text-[14px] tracking-wide mb-4"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Why Choose Us
            </p>

            {/* Heading */}
            <h2
              className="text-gray-900 font-black text-[44px] leading-[1.1] mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}
            >
              We Are Committed To Rescue On Time
            </h2>

            {/* Body */}
            <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat laboris nisi.
            </p>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold text-[15px] tracking-wide px-10 py-5 transition-colors duration-200"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Contact Us
            </a>
          </div>

          {/* ── RIGHT: 2×2 stat grid ── */}
          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {stats.map((s) => (
              <StatCard
                key={s.label}
                icon={s.icon}
                value={s.value}
                label={s.label}
                delay={s.delay}
                active={active}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}