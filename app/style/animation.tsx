"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, ComponentProps } from "react";

// Motion props
type MotionProps = {
  distance?: number;
  duration?: number;
  className?: string;
  children?: ReactNode;
} & ComponentProps<typeof motion.div>;

// Base variants
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const revealOnScroll: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// ---------------- Reusable Wrappers ----------------
export const Pop = ({ className, children, ...rest }: MotionProps) => (
  <motion.div {...rest} initial="hidden" animate="visible" exit="hidden" variants={pop} className={className}>
    {children}
  </motion.div>
);

export const FadeIn = ({ className, children, ...rest }: MotionProps) => (
  <motion.div {...rest} initial="hidden" animate="visible" variants={fadeIn} className={className}>
    {children}
  </motion.div>
);

export const SlideUp = ({ className, children, ...rest }: MotionProps) => (
  <motion.div {...rest} initial="hidden" variants={slideUp} whileInView="visible" className={className} viewport={{ once: true }}>
    {children}
  </motion.div>
);

export const SlideLeft = ({ className, children, ...rest }: MotionProps) => (
  <motion.div {...rest} initial="hidden" variants={slideLeft} className={className} whileInView="visible" viewport={{ once: true }}>
    {children}
  </motion.div>
);

export const RevealOnScroll = ({ className, children, ...rest }: MotionProps) => (
  <motion.div {...rest} initial="hidden" whileInView="visible" className={className} variants={revealOnScroll} viewport={{ once: true }}>
    {children}
  </motion.div>
);

export const Float = ({ distance = 8, duration = 3, className, children, ...rest }: MotionProps) => (
  <motion.div
    {...rest}
    initial={{ y: 0 }}
    className={className}
    animate={{ y: [0, -distance, 0], transition: { duration, repeat: Infinity, ease: "easeInOut" } }}
  >
    {children}
  </motion.div>
);
