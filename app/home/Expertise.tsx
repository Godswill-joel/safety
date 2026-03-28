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
        <span className="text-white font-bold text-[15px] tracking-wide">
          {label}
        </span>
        <span className="text-white font-extrabold text-[15px]">
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
      className="relative w-full min-h-[600px] flex overflow-hidden pb-24"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      {/* LEFT SIDE */}
      <div className="relative w-1/2 min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=900&q=80"
          alt="Firefighter in full gear"
          fill
          className="object-cover object-center"
          sizes="50vw"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div
          className="absolute bottom-0 left-0 bg-white z-10"
          style={{
            width: "460px",
            padding: "36px 40px 40px",
            borderTop: "5px solid #ea580c",
          }}
        >
          <h3 className="text-[22px] font-extrabold text-gray-900 mb-4">
            We Provide The Best Protection
          </h3>
          <p className="text-gray-500 text-[14px] mb-6">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
          </p>
          <a className="text-orange-600 font-bold text-[14px] uppercase">
            Read More
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-1/2 flex flex-col justify-center px-16 py-16 bg-[#1a1a1a]">
        <div className="relative z-10 max-w-[560px]">
          <p className="text-orange-600 font-bold text-[13px] uppercase mb-4">
            Our Expertise
          </p>

          <h2 className="text-white font-black text-[42px] mb-6">
            Every Visit Will Get The Best Service
          </h2>

          <p className="text-gray-400 text-[14px] mb-10">
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

      {/* 🔥 BOTTOM SHAPE (Envato style) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
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
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// interface SkillBarProps {
//     label: string;
//     percentage: number;
//     delay: number;
//     animate: boolean;
// }

// function SkillBar({ label, percentage, delay, animate }: SkillBarProps) {
//     const [width, setWidth] = useState(0);

//     useEffect(() => {
//         if (!animate) return;
//         const timer = setTimeout(() => {
//             setWidth(percentage);
//         }, delay);
//         return () => clearTimeout(timer);
//     }, [animate, percentage, delay]);

//     return (
//         <div className="mb-6">
//             {/* Label row */}
//             <div className="flex items-center justify-between mb-2">
//                 <span
//                     className="text-white font-bold text-[15px] tracking-wide"
//                     style={{ fontFamily: "'Barlow', sans-serif" }}
//                 >
//                     {label}
//                 </span>
//                 <span
//                     className="text-white font-extrabold text-[15px]"
//                     style={{ fontFamily: "'Barlow', sans-serif" }}
//                 >
//                     {animate ? `${Math.round((width / 100) * percentage)}%` : "0%"}
//                 </span>
//             </div>

//             {/* Track */}
//             <div className="w-full h-[4px] bg-white/20 rounded-none relative overflow-hidden">
//                 {/* Fill bar */}
//                 <div
//                     className="absolute left-0 top-0 h-full bg-orange-600 rounded-none"
//                     style={{
//                         width: `${width}%`,
//                         transition: "width 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//                         transitionDelay: `${delay}ms`,
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }

// export default function ExpertiseSection() {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const [animate, setAnimate] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setAnimate(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.3 }
//         );
//         if (sectionRef.current) observer.observe(sectionRef.current);
//         return () => observer.disconnect();
//     }, []);

//     const skills = [
//         { label: "Rehabilitation Center", percentage: 98, delay: 0 },
//         { label: "Support After An Incident", percentage: 86, delay: 200 },
//         { label: "Factory Caught Fire", percentage: 92, delay: 400 },
//         { label: "Public Education", percentage: 89, delay: 600 },
//     ];

//     return (
//         <>
//             {/* Google Font */}
//             <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap');

//         .counter-animate {
//           counter-reset: none;
//         }
//       `}</style>

//             <section
//                 ref={sectionRef}
//                 className="relative w-full min-h-[600px] flex overflow-hidden"
//                 style={{
//                     fontFamily: "'Barlow', sans-serif",
//                     clipPath: "polygon(0 0, 100% 0, 100% 85%, 75% 100%, 25% 100%, 0 85%)",
//                 }}
//             >
//                 {/* ── LEFT HALF: firefighter image + floating card ── */}
//                 <div className="relative w-1/2 min-h-[600px]">
//                     {/* Background firefighter image */}
//                     <Image
//                         src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=900&q=80"
//                         alt="Firefighter in full gear"
//                         fill
//                         className="object-cover object-center"
//                         sizes="50vw"
//                         priority
//                     />

//                     {/* Dark overlay for depth */}
//                     <div className="absolute inset-0 bg-black/40" />

//                     {/* Floating white card – bottom-left, slightly overlapping center */}
//                     <div
//                         className="absolute bottom-0 left-0 bg-white z-10"
//                         style={{
//                             width: "460px",
//                             padding: "36px 40px 40px",
//                             borderTop: "5px solid #ea580c",
//                         }}
//                     >
//                         <h3
//                             className="text-[22px] font-extrabold text-gray-900 leading-snug mb-4"
//                             style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.01em" }}
//                         >
//                             We Provide The Best Protection
//                         </h3>
//                         <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
//                             Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
//                             eiusmod tempor incididunt ut labore et dolore magna .
//                         </p>
//                         <a
//                             href="#"
//                             className="text-orange-600 font-bold text-[14px] tracking-wide uppercase hover:text-orange-700 transition-colors duration-200 flex items-center gap-1"
//                         >
//                             Read More
//                         </a>
//                     </div>
//                 </div>

//                 {/* ── RIGHT HALF: dark panel with content ── */}
//                 <div
//                     className="relative w-1/2 flex flex-col justify-center px-16 py-16"
//                     style={{ backgroundColor: "#1a1a1a" }}
//                 >
//                     {/* Subtle texture overlay */}
//                     <div
//                         className="absolute inset-0 opacity-5 pointer-events-none"
//                         style={{
//                             backgroundImage:
//                                 "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.03) 2px,rgba(255,255,255,0.03) 4px)",
//                         }}
//                     />

//                     <div className="relative z-10 max-w-[560px]">
//                         {/* Tag */}
//                         <p
//                             className="text-orange-600 font-bold text-[13px] tracking-[0.15em] uppercase mb-4"
//                             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//                         >
//                             Our Expertise
//                         </p>

//                         {/* Heading */}
//                         <h2
//                             className="text-white font-black text-[42px] leading-[1.1] mb-6"
//                             style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "-0.01em" }}
//                         >
//                             Every Visit Will Get The Best Service
//                         </h2>

//                         {/* Body */}
//                         <p className="text-gray-400 text-[14px] leading-relaxed mb-10">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                             eiusmod teru tempor incididunt ut labore et dolore magna aliqua
//                             tempor incididunt.
//                         </p>

//                         {/* Skill bars */}
//                         <div>
//                             {skills.map((skill) => (
//                                 <SkillBar
//                                     key={skill.label}
//                                     label={skill.label}
//                                     percentage={skill.percentage}
//                                     delay={skill.delay}
//                                     animate={animate}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }