"use client";

import HeroSection from "../home/hero";
import WorkingProcess from "../home/Progress";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Safety } from "../data/data";

/* ─────────────────────────────────────────
   DOT — animated spring pop
───────────────────────────────────────── */
function SnakeDot({ inView }: { inView: boolean }) {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-7 z-20 hidden md:flex items-center justify-center">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, delay: 0.05 }}
                className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_0_5px_rgba(59,130,246,0.18)]"
            />
        </div>
    );
}

/* ─────────────────────────────────────────
   HORIZONTAL ARM — draws from spine to card
───────────────────────────────────────── */
function SnakeArm({ inView, isLeft }: { inView: boolean; isLeft: boolean }) {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            style={{ transformOrigin: isLeft ? "left" : "right" }}
            className={`
        hidden md:block absolute top-[44px] h-[2px] w-[calc(50%-28px)] z-10
        ${isLeft
                    ? "left-1/2 bg-gradient-to-r from-orange-400 to-transparent"
                    : "right-1/2 bg-gradient-to-l from-orange-400 to-transparent"
                }
      `}
        />
    );
}

/* ─────────────────────────────────────────
   CARD
───────────────────────────────────────── */
function TopicCard({
    topic,
    index,
    isOpen,
    onToggle,
}: {
    topic: any;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, margin: "-80px" });
    const isLeft = index % 2 === 0;

    return (
        <div ref={ref} className="relative w-full">

            {/* Dot on the spine */}
            <SnakeDot inView={inView} />

            {/* Horizontal arm */}
            <SnakeArm inView={inView} isLeft={isLeft} />

            {/* Card aligned left or right */}
            <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -56 : 56, y: 16 }}
                    animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLeft ? -56 : 56, y: 16 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    className="
            w-full md:w-[46%]
            bg-white rounded-2xl overflow-hidden
            border border-orange-100
            shadow-md hover:shadow-xl hover:-translate-y-1
            transition-all duration-300
          "
                >
                    {/* Top gradient bar */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-400" />

                    <div className="p-6 sm:p-7">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <h3
                                className="font-bold text-gray-900 text-base sm:text-lg leading-snug"
                                style={{ fontFamily: "'Sora', sans-serif" }}
                            >
                                {topic.title}
                            </h3>
                            {/* Step badge */}
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-[11px]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                        </div>

                        {/* Preview text when closed */}
                        {!isOpen && (
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                {topic.description?.slice(0, 120)}…
                            </p>
                        )}

                        {/* Toggle */}
                        <button
                            onClick={onToggle}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors"
                        >
                            {isOpen ? "Hide Outline" : "View Outline"}
                            <motion.svg
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                viewBox="0 0 12 12"
                                fill="currentColor"
                                className="w-3 h-3"
                            >
                                <path d="M1 3l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            </motion.svg>
                        </button>

                        {/* Expandable content */}
                        <motion.div
                            initial={false}
                            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-5">
                                <div className="h-px bg-gradient-to-r from-orange-100 to-transparent mb-4" />

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-4">
                                    {topic.description}
                                </p>

                                <ul className="space-y-2 mb-5">
                                    {topic.outline?.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/contact?course=${encodeURIComponent(topic.title)}`}
                                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-orange-200"
                                >
                                    Enroll in This Course
                                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                                        <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   MAIN
───────────────────────────────────────── */
export default function ServiceSection() {
    const [openTopic, setOpenTopic] = useState<string | null>(null);
    const toggleTopic = (id: string) =>
        setOpenTopic((prev) => (prev === id ? null : id));

    return (
        <div>
            {/* HERO */}
            <HeroSection
                image="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
                tag="Safety Bridge LTD"
                title="Let's"
                highlight="Talk"
                description="We're here to answer your questions and guide you toward the right course."
                watermark="SERVICES"
            />

            {/* WORKING PROCESS */}


            {/* ── COURSE SNAKE TIMELINE ── */}
            <section className="bg-[#f0f5ff] py-20 px-4 sm:px-6">

                {/* Section header */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <p
                        className="text-orange-500 text-2xl font-bold tracking-[0.2em] uppercase mb-3"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        Course Curriculum
                    </p>
                    <h2
                        className="text-gray-900 font-extrabold text-4xl sm:text-5xl leading-tight mb-4"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                        Your Learning Journey
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed">
                        Follow structured modules to master your course. Each step builds on the last — one connected path forward.
                    </p>
                </div>

                {/* Timeline container */}
                <div className="relative max-w-4xl mx-auto">

                    {/* ── S-curve SVG spine (desktop only) ── */}
                    <svg
                        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
                        preserveAspectRatio="none"
                        viewBox="0 0 800 1000"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="snakeLine" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#ea8c1a" stopOpacity="0.9" />
                                <stop offset="40%" stopColor="#e57932" stopOpacity="0.7" />
                                <stop offset="70%" stopColor="#fac679" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.15" />
                            </linearGradient>
                        </defs>
                        {/*
              The path starts at the top-center (400,0),
              curves left to create the top of the S,
              crosses back through center,
              curves right for the bottom of the S,
              and exits at bottom-center.
              Each S-segment covers roughly 1 card height (~200px).
              Adjust the control points to match your actual card spacing.
            */}
                        <path
                            d="
                M 400 0
                C 400 40,  250 60,  250 120
                C 250 180, 400 200, 400 240
                C 400 280, 550 300, 550 360
                C 550 420, 400 440, 400 480
                C 400 520, 250 540, 250 600
                C 250 660, 400 680, 400 720
                C 400 760, 550 780, 550 840
                C 550 900, 400 920, 400 960
                C 400 980, 400 990, 400 1000
              "
                            stroke="url(#snakeLine)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </svg>

                    {/* ── Mobile spine (straight left line) ── */}
                    <div className="md:hidden absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-200 to-transparent z-0" />

                    {/* Items */}
                    <div className="flex flex-col gap-10 pl-10 md:pl-0">
                        {Safety.map((topic, index) => (
                            <div key={topic.id} className="relative">
                                {/* Mobile dot */}
                                <div className="md:hidden absolute -left-[34px] top-7 w-3 h-3 rounded-full bg-orange-500 ring-[4px] ring-orange-100 z-10" />

                                <TopicCard
                                    topic={topic}
                                    index={index}
                                    isOpen={openTopic === topic.id}
                                    onToggle={() => toggleTopic(topic.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WorkingProcess />
        </div>
    );
}