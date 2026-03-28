"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";

/* ── Animated counter hook ── */
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

const features = [
  "Flexible & Cost-Effective",
  "VIP & Annual Pass Programs",
  "Over 250,000 cleans",
  "Satisfaction Guarantee",
  "Dedicated So Save Lives",
  "Electronically & Securely",
  "24/7 Available to Service",
];

const HardHatIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#ea580c" strokeWidth="1.8" className="w-9 h-9 md:w-11 md:h-11">
    <path d="M12 36c0-11.046 8.954-20 20-20s20 8.954 20 20" />
    <rect x="8" y="36" width="48" height="8" rx="2" />
    <path d="M20 44v4M44 44v4" strokeLinecap="round" />
    <ellipse cx="22" cy="30" rx="5" ry="3.5" />
    <ellipse cx="42" cy="30" rx="5" ry="3.5" />
    <path d="M27 30h10" />
  </svg>
);

const Chevron = () => (
  <svg viewBox="0 0 10 10" fill="#ea580c" className="w-[10px] h-[10px] mt-[4px] flex-shrink-0">
    <path d="M2 1l6 4-6 4V1z" />
  </svg>
);

export default function Aboutfiles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCounter(7, 2200, active);

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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20 lg:py-28"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
        <div className="flex-1 w-full">
          <p className="text-orange-600 font-bold text-xs md:text-sm tracking-wide mb-3 md:mb-4">
            About Damqar
          </p>
          <h2
            className="text-gray-900 font-black leading-tight mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            We Are Always Ready To Help Your Problems
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 md:mb-9 max-w-full md:max-w-[490px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 md:mb-10">

            {/* Experience card */}
            <div className="w-full sm:w-[180px] md:w-[200px] bg-[#1c1c1c] p-6 text-center flex flex-col items-center">
              <HardHatIcon />

              <div className="flex items-end gap-1 mt-4 mb-2">
                <span className="text-white font-black text-4xl md:text-5xl">
                  {count}
                </span>
                <span className="text-orange-500 font-black text-2xl md:text-3xl mb-1">
                  +
                </span>
              </div>

              <p className="text-gray-400 text-xs md:text-sm">
                Years Experience
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col justify-center gap-2">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Chevron />
                  <span className="text-gray-700 text-sm md:text-[15px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4 md:gap-5">

            <div className="relative w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden outline outline-2 md:outline-3 outline-orange-600 outline-offset-2">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&q=80"
                alt="Firefighter avatar"
                fill
                className="object-cover"
                sizes="70px"
              />
            </div>

            <div>
              <p className="text-gray-400 text-xs md:text-sm mb-1">
                We Are Available 24 Hours
              </p>
              <p className="text-gray-900 font-extrabold text-base md:text-lg">
                For Emergency :{" "}
                <span className="text-orange-600">121-0000-200</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-[480px] lg:h-[580px] overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=900&q=80"
            alt="Firefighters on duty"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
            priority
          />
        </div>

      </div>
    </section>
  );
}