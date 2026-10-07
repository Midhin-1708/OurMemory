import React from "react";
import { motion } from "framer-motion";

export default function Section06Imperfect() {
  const statements = [
    "We fought.",
    "We misunderstood each other.",
    "We went silent.",
    "We cried.",
    "We missed each other.",
    "Sometimes we hurt each other.",
    "Sometimes we lied.",
    "Trust was broken."
  ];

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center bg-[#040407] border-b border-white/5 overflow-hidden">
      {/* Heavy, moody ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#110d14] via-[#050508] to-black opacity-90 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 space-y-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37]/60 font-mono block mb-4">
            ✦ Chapter 05 — The Shadows ✦
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-italiana tracking-widest text-[#ece5d8] font-normal">
            OUR STORY WASN'T PERFECT.
          </h2>
        </motion.div>

        {/* The Painful Sentences - Paced & Heavy */}
        <div className="space-y-8 sm:space-y-10 my-12">
          {statements.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, delay: idx * 0.15 }}
              className={`text-2xl sm:text-3xl md:text-4xl font-serif-cinematic tracking-wide ${
                idx >= 6 ? "text-[#fb7185] font-normal rose-glow" : "text-[#c9c0b5]/90"
              }`}
            >
              "{line}"
            </motion.p>
          ))}
        </div>

        {/* Profound Turning Point Pivot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="pt-16 border-t border-white/10 max-w-xl mx-auto"
        >
          <p className="text-3xl sm:text-5xl font-italiana text-[#fbf7ee] font-normal leading-relaxed candle-glow">
            "But we didn't leave our story there."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
