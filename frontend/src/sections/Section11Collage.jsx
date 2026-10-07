import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { DEFAULT_MEDIA } from "../data/memories";
import MemoryImage from "../components/common/MemoryImage";

export default function Section11Collage({ onSelectMemory }) {
  const masterPhoto = {
    title: "HUSBAND & WIFE",
    location: "1st Month Anniversary Today",
    src: DEFAULT_MEDIA.portrait,
    quote: "Before God and in our quiet vows, we became one. Happy 1-month wedding anniversary, my Kohila.",
    caption: "Our master portrait as husband and wife. Today marks 30 days of eternity with you, my sweetest Muu."
  };

  const orbitingLabels = [
    { name: "HOME", x: -140, y: -120 },
    { name: "AIRBNB", x: 140, y: -130 },
    { name: "BANGALORE", x: -180, y: 10 },
    { name: "FLIGHTS", x: 180, y: 0 },
    { name: "COOKING", x: -140, y: 120 },
    { name: "TEMPLE", x: 140, y: 120 },
    { name: "LAUGHTER", x: 0, y: -170 },
    { name: "HUGS", x: 0, y: 170 },
    { name: "TEARS", x: -190, y: -60 },
    { name: "KISSES", x: 190, y: -60 },
  ];

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-[#d4af37]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
        >
          Chapter 10 — Convergence
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 mb-16 tracking-wide"
        >
          MEMORY COLLAGE
        </motion.h2>

        {/* Central Converging Visual Canvas */}
        <div className="relative my-8 py-12 flex items-center justify-center min-h-[460px]">
          {/* Orbiting / Converging Floating Tags */}
          {orbitingLabels.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: item.x * 1.5,
                y: item.y * 1.5,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 0.85,
                x: item.x,
                y: item.y,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101018]/80 border border-[#d4af37]/30 text-[11px] font-mono tracking-wider text-[#d4af37] shadow-lg pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] inline-block" />
              <span>{item.name}</span>
            </motion.div>
          ))}

          {/* Large Master Central Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            onClick={() => onSelectMemory(masterPhoto)}
            className="relative z-10 w-72 sm:w-96 rounded-2xl glass-panel p-3 border-2 border-[#d4af37]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] cursor-pointer group hover:scale-105 transition-all duration-500"
          >
            <MemoryImage
              src={masterPhoto.src}
              alt="US"
              aspectRatio="aspect-[4/5]"
              className="rounded-xl"
            />
            <div className="pt-3 pb-1 text-center">
              <h3 className="text-3xl sm:text-4xl font-italiana tracking-[0.2em] text-[#fbf7ee] font-normal candle-glow">
                HUSBAND & WIFE
              </h3>
              <p className="text-xs text-[#d4af37] mt-1 font-mono tracking-wider uppercase">
                1st Month Anniversary Today
              </p>
            </div>
          </motion.div>
        </div>

        {/* Prose Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-4 max-w-xl mx-auto mt-12"
        >
          <p className="text-xl sm:text-2xl font-serif-cinematic text-[#e5dec9]">
            "We didn't just make memories."
          </p>
          <p className="font-calligraphy text-4xl sm:text-6xl text-[#d4af37] candle-glow leading-snug">
            "We made a life in the little time we had together."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
