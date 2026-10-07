import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, HeartHandshake, Sparkles } from "lucide-react";

export default function Section07Rebuild() {
  const rebuildSteps = [
    "We talked.",
    "We listened.",
    "We admitted our mistakes.",
    "We learned.",
    "We changed.",
    "We gave each other another chance."
  ];

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      {/* Golden healing light in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#d4af37]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
        >
          Chapter 06 — Kintsugi / Healing
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 mb-12 tracking-wide"
        >
          WE REBUILT
        </motion.h2>

        {/* Broken Shards Coming Together (Animated SVG Kintsugi Heart) */}
        <div className="my-10 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56">
            {/* Shard 1 - Left Top */}
            <motion.div
              initial={{ x: -35, y: -25, rotate: -15, opacity: 0.3 }}
              whileInView={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg className="w-full h-full text-[#d4af37]/80 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>

            {/* Glowing Golden Seams */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-24 h-24 rounded-full bg-[#d4af37]/20 blur-xl animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Sequence of Rebuilding Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto my-12">
          {rebuildSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              className="glass-panel p-4 rounded-xl border border-[#d4af37]/20 text-center"
            >
              <span className="text-base sm:text-lg font-serif-cinematic text-[#fbf7ee]">
                {step}
              </span>
            </motion.div>
          ))}
        </div>

        {/* The Rebuilding Trust Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4 max-w-2xl mx-auto mt-12"
        >
          <p className="text-xl sm:text-2xl font-serif-cinematic text-[#e5dec9]">
            "Trust wasn't rebuilt in one day."
          </p>
          <p className="font-calligraphy text-4xl sm:text-6xl text-[#d4af37] candle-glow leading-snug">
            "It was rebuilt one honest conversation at a time."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
