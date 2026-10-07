import React from "react";
import { motion } from "framer-motion";
import { MapPin, Stethoscope, Laptop, Sparkles } from "lucide-react";
import { STORY_CONFIG } from "../data/storyConfig";

export default function Section02BeforeYou() {
  return (
    <section className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#1e293b]/30 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
        >
          Chapter 01 — The Converging Paths
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 mb-16 tracking-wide"
        >
          Before I Knew You
        </motion.h2>

        {/* The Two Animated Converging Paths */}
        <div className="relative my-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            {/* Left Path: ME */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="glass-panel p-8 rounded-2xl relative border-l-4 border-l-[#d4af37]/60 text-left"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#d4af37] mb-3">
                <Laptop size={16} />
                <span>ME — INDIA</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif-cinematic text-[#f7f2ea] mb-2">
                Singanallur, Coimbatore
              </h3>
              <p className="text-sm text-[#c9c0b5]/70 leading-relaxed font-light">
                Living ordinary, grayscale days in Coimbatore—immersed in code, screens, and deadlines. I had no idea that thousands of kilometres away, the girl destined to become my wife, my heart, and my entire world was walking this earth.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-[#9b9388]">
                <MapPin size={13} className="text-[#d4af37]" />
                <span>Singanallur, Coimbatore (IT)</span>
              </div>
            </motion.div>

            {/* Right Path: YOU */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="glass-panel p-8 rounded-2xl relative border-r-4 border-r-[#d4af37]/60 text-left"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#d4af37] mb-3">
                <Stethoscope size={16} />
                <span>KOHILA — MY SWEETEST MUU</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif-cinematic text-[#f7f2ea] mb-2">
                Osh, Kyrgyzstan
              </h3>
              <p className="text-sm text-[#c9c0b5]/70 leading-relaxed font-light">
                Far away in the mountains of Kyrgyzstan, bravely chasing an extraordinary medical dream. Enduring freezing winters, sleepless nights, and grueling hospital ward rounds to heal others—unaware that a boy in Tamil Nadu was destined to love her for eternity.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-[#9b9388]">
                <MapPin size={13} className="text-[#d4af37]" />
                <span>{STORY_CONFIG.herCountry}</span>
              </div>
            </motion.div>
          </div>

          {/* Animated Connecting Node between the two paths */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-full bg-[#0a0a12] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <Sparkles size={18} className="text-[#d4af37]" />
            </motion.div>
          </div>
        </div>

        {/* Paced Reveal Sentences */}
        <div className="space-y-4 max-w-xl mx-auto mt-12">
          {[
            "Two completely different lives.",
            "One mutual friend.",
            "One hospital.",
            "One unexpected meeting."
          ].map((sentence, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.25 }}
              className={`text-xl md:text-2xl font-serif-cinematic italic ${
                idx === 3
                  ? "font-calligraphy text-4xl sm:text-5xl text-[#d4af37] candle-glow pt-3 not-italic"
                  : "text-[#e5dec9]"
              }`}
            >
              {sentence}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
