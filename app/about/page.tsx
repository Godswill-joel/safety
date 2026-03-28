"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeroSection from "../home/hero";
import RelatedQuestions from "../home/Related";

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

/* ── Hard hat + goggles SVG ── */
const HardHatIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="#ea580c" strokeWidth="1.8" className="w-11 h-11">
    <path d="M12 36c0-11.046 8.954-20 20-20s20 8.954 20 20" />
    <rect x="8" y="36" width="48" height="8" rx="2" />
    <path d="M20 44v4M44 44v4" strokeLinecap="round" />
    <ellipse cx="22" cy="30" rx="5" ry="3.5" />
    <ellipse cx="42" cy="30" rx="5" ry="3.5" />
    <path d="M27 30h10" />
  </svg>
);

/* ── Chevron / arrow bullet ── */
const Chevron = () => (
  <svg viewBox="0 0 10 10" fill="#ea580c" className="w-[10px] h-[10px] flex-shrink-0 mt-[2px]">
    <path d="M2 1l6 4-6 4V1z" />
  </svg>
);

export default function AboutSection() {
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
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');
      `}</style>
      <HeroSection
        image="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
        tag="Safety Bridge LTD"
        title="Let's"
        highlight="Talk"
        description="We're here to answer your questions and guide you toward the right course for your career."
        watermark="ABOUT"
      />
      <section
        ref={sectionRef}
        className="w-full bg-white py-28"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-20">

          {/* ══════════════════════════
              LEFT — text block
          ══════════════════════════ */}
          <div className="flex-1">

            {/* Tag */}
            <p className="text-orange-600 font-bold text-[14px] tracking-[0.05em] mb-4">
              About Damqar
            </p>

            {/* Heading */}
            <h2
              className="text-gray-900 font-black leading-[1.08] mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "46px",
                letterSpacing: "-0.01em",
              }}
            >
              We Are Always Ready To Help Your Problems
            </h2>

            {/* Body */}
            <p className="text-gray-500 text-[15px] leading-[1.75] mb-9 max-w-[490px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam quis nostrud eiusmod tempor incididunt.
            </p>

            {/* Experience card + feature list */}
            <div className="flex items-stretch gap-6 mb-10">

              {/* Dark card */}
              <div
                className="flex flex-col items-center justify-center text-center flex-shrink-0"
                style={{
                  width: "200px",
                  backgroundColor: "#1c1c1c",
                  padding: "28px 20px 24px",
                }}
              >
                <HardHatIcon />

                <div className="flex items-end gap-[3px] mt-5 mb-[6px]">
                  <span
                    className="text-white font-black leading-none"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "54px",
                    }}
                  >
                    {count}
                  </span>
                  <span
                    className="text-orange-500 font-black leading-none mb-[6px]"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "34px",
                    }}
                  >
                    +
                  </span>
                </div>

                <p className="text-gray-400 text-[13px] font-medium tracking-wide">
                  Years Experience
                </p>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col justify-center gap-[10px]">
                {features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Chevron />
                    <span className="text-gray-700 text-[14px] font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency contact strip */}
            <div className="flex items-center gap-5">
              {/* Avatar with orange ring */}
              <div
                className="relative flex-shrink-0 rounded-full overflow-hidden"
                style={{
                  width: "70px",
                  height: "70px",
                  outline: "3px solid #ea580c",
                  outlineOffset: "2px",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&q=80"
                  alt="Firefighter avatar"
                  fill
                  className="object-cover object-top"
                  sizes="70px"
                />
              </div>

              <div>
                <p className="text-gray-400 text-[13px] font-medium mb-[3px]">
                  We Are Available 24 Hours
                </p>
                <p
                  className="text-gray-900 font-extrabold text-[18px] leading-tight"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  For Emergency :{" "}
                  <span className="text-orange-600">121-0000-200</span>
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative hidden lg:block flex-shrink-0 overflow-hidden"
            style={{
              width: "480px",
              height: "580px",
              boxShadow: "0 12px 48px rgba(0,0,0,0.13)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=900&q=80"
              alt="Firefighters on duty"
              fill
              className="object-cover object-center"
              sizes="480px"
              priority
            />
          </div>

        </div>
      </section>
      <RelatedQuestions />
    </>
  );
}
