"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type SnapshotRow = { label: string; value: string; width: string };

export default function HeroVisual({ snapshot }: { snapshot: SnapshotRow[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }}>
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-serif text-sm font-semibold text-slate-200">
              財務快照
            </p>
            <p className="font-mono text-[11px] text-slate-500">
              範例個股 · 示意資料
            </p>
          </div>
          <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 font-mono text-[10px] text-emerald-300">
            FUNDAMENTAL
          </span>
        </div>
        <ul className="mt-5 space-y-4">
          {snapshot.map((row) => (
            <li key={row.label}>
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-medium tracking-wide text-slate-400">
                  {row.label}
                </span>
                <span className="font-mono text-sm text-slate-100">
                  {row.value}
                </span>
              </div>
              <div className="mt-1.5 h-1 w-full rounded-full bg-white/5">
                <div
                  className="h-1 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                  style={{ width: row.width }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
