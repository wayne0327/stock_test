"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxBlobs() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1400], [0, 280]);
  const y2 = useTransform(scrollY, [0, 1400], [0, -200]);

  if (reduce) {
    return (
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-sky-500/10 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[120px]"
      />
    </div>
  );
}
