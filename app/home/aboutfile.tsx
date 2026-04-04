"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ── Counter ── */
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

/* ── SAME animation system as other page ── */
const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ── UI ── */
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
  <svg viewBox="0 0 64 64" fill="none" stroke="#ea580c" strokeWidth="1.8" className="w-10 h-10">
    <path d="M12 36c0-11.046 8.954-20 20-20s20 8.954 20 20" />
    <rect x="8" y="36" width="48" height="8" rx="2" />
  </svg>
);

const Chevron = () => (
  <svg viewBox="0 0 10 10" fill="#ea580c" className="w-[10px] h-[10px] mt-[4px]">
    <path d="M2 1l6 4-6 4V1z" />
  </svg>
);

export default function Aboutfiles() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const count = useCounter(7, 2200, active);

  /* trigger like your main page */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-20">

        {/* LEFT (same animation style) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1"
        >
          <motion.p variants={slideLeft} className="text-orange-600 mb-3 text-xl font-bold">
            About Safety Bridge
          </motion.p>

          <motion.h2 variants={slideLeft} className="text-4xl text-black mb-5 font-semi-bold">
            We Are Always Ready To Help Your Problems
          </motion.h2>

          <motion.p variants={slideUp} className="text-gray-500 mb-8 max-w-[490px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.p>

          {/* Card + features */}
          <motion.div variants={slideLeft} className="flex gap-6 mb-10">

            {/* Counter */}
            <motion.div variants={slideUp} className="bg-black text-white p-6 text-center">
              <HardHatIcon />
              <div className="flex justify-center mt-4">
                <span className="text-5xl font-bold">{count}</span>
                <span className="text-orange-500 text-3xl">+</span>
              </div>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </motion.div>

            {/* Features */}
            <ul className="flex flex-col gap-2">
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  variants={slideRight} // 👈 matches other page
                  className="flex gap-2 text-gray-700"
                >
                  <Chevron />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={slideLeft} className="flex items-center gap-4">
            <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&q=80"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-black text-xl">We Are Available 24 Hours</p>
              <p className="font-bold text-2xl text-black">
                For Emergency: <span className="text-orange-600 text-xl">080-3371-3326</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (same as main page) */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[480px] h-[500px] relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=900&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}