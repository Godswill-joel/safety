"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "../home/hero";
import RelatedQuestions from "../home/Related";
import { motion, useInView } from "framer-motion";

/* counter hook unchanged */
function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

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
  </svg>
);

const Chevron = () => (
  <svg viewBox="0 0 10 10" fill="#ea580c" className="w-[10px] h-[10px] mt-[3px]">
    <path d="M2 1l6 4-6 4V1z" />
  </svg>
);

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  const count = useCounter(7, 2200, inView);

  return (
    <>
      <HeroSection
        image="https://res.cloudinary.com/duhojv2px/image/upload/f_auto,q_auto/rnth8iahqpf7fwtdsfed"
        tag="Safety Bridge LTD"
        title="Let's"
        highlight="Talk"
        description="We're here to answer your questions and guide you toward the right course for your career."
        watermark="ABOUT"
      />

      <section ref={ref} className="w-full bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-10 lg:gap-20">

          {/* LEFT */}
          <div className="flex-1 w-full">

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-orange-600 font-bold text-sm sm:text-base lg:text-[24px] mb-3 sm:mb-4"
            >
              About Safety Bridge
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-900 font-black mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-4xl"
            >
              We Are Always Ready To Help Your Problems
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-9 max-w-full sm:max-w-[490px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </motion.p>

            {/* Card + Features */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 mb-8 sm:mb-10"
            >
              {/* Counter */}
              <div className="bg-[#1c1c1c] w-full sm:w-[180px] md:w-[200px] flex flex-col items-center justify-center text-center p-5 sm:p-6">
                <HardHatIcon />
                <div className="flex items-end mt-3 sm:mt-4">
                  <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                    {count}
                  </span>
                  <span className="text-orange-500 text-xl sm:text-2xl md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Years Experience
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {features.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-2 text-gray-700 text-sm sm:text-base md:text-lg font-medium"
                  >
                    <Chevron />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 sm:gap-5"
            >
              <div className="relative w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  We Are Available 24 Hours
                </p>
                <p className="text-gray-900 font-bold text-sm sm:text-lg md:text-xl">
                  For Emergency:{" "}
                  <span className="text-orange-600 text-sm sm:text-base md:text-lg">
                   +234 201 342 4578
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE (now responsive on tablet too) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:w-[480px] lg:h-[580px] relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </section>

      <RelatedQuestions />
    </>
  );
}