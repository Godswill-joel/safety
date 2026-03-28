"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SkillBarProps {
  label: string;
  percentage: number;
  delay: number;
  animate: boolean;
}

function SkillBar({ label, percentage, delay, animate }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [animate, percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-sm md:text-[15px]">
          {label}
        </span>
        <span className="text-white font-extrabold text-sm md:text-[15px]">
          {animate ? `${Math.round((width / 100) * percentage)}%` : "0%"}
        </span>
      </div>

      <div className="w-full h-[4px] bg-white/20 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-orange-600"
          style={{
            width: `${width}%`,
            transition: "width 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { label: "Rehabilitation Center", percentage: 98, delay: 0 },
    { label: "Support After An Incident", percentage: 86, delay: 200 },
    { label: "Factory Caught Fire", percentage: 92, delay: 400 },
    { label: "Public Education", percentage: 89, delay: 600 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col lg:flex-row overflow-hidden pb-24"
    >
      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=900&q=80"
          alt="Firefighter"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* Floating card */}
        <div className="absolute bottom-0 left-0 w-[90%] sm:w-[420px] md:w-[460px] bg-white z-10 p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl md:text-[22px] font-extrabold text-gray-900 mb-4">
            We Provide The Best Protection
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
          </p>
          <a className="text-orange-600 font-bold text-sm uppercase">
            Read More
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 bg-[#1a1a1a] px-6 sm:px-10 md:px-14 lg:px-16 py-12 md:py-16 flex items-center">
        <div className="max-w-[560px]">
          <p className="text-orange-600 font-bold text-xs tracking-widest uppercase mb-4">
            Our Expertise
          </p>

          <h2 className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] mb-6 leading-tight">
            Every Visit Will Get The Best Service
          </h2>

          <p className="text-gray-400 text-sm md:text-[14px] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {skills.map((skill) => (
            <SkillBar
              key={skill.label}
              label={skill.label}
              percentage={skill.percentage}
              delay={skill.delay}
              animate={animate}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[80px] md:h-[100px]"
        >
          <path
            d="M0,60 
               C300,120 600,0 900,50 
               C1200,100 1440,20 1440,20 
               L1440,120 
               L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}