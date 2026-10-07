import React from "react";
import { motion } from "framer-motion";
import { Plane, Radio, Clock, Heart, PhoneCall, Wifi } from "lucide-react";
import { STORY_CONFIG } from "../data/storyConfig";

export default function Section08LongDistance() {
  return (
    <section className="relative min-h-screen py-28 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
          >
            Chapter 07 — The Ocean Between Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 tracking-wide"
          >
            LONG DISTANCE
          </motion.h2>
        </div>

        {/* Cinematic Map-like Visualization Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-[#d4af37]/20 my-10"
        >
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Connected Hubs */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* India Node */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="w-16 h-16 rounded-2xl bg-[#141422] border border-[#d4af37]/40 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                <span className="text-2xl">🇮🇳</span>
              </div>
              <span className="text-xs tracking-widest text-[#d4af37] uppercase font-mono">My Home</span>
              <h3 className="text-2xl sm:text-3xl font-serif-cinematic text-[#f7f2ea]">Singanallur, Coimbatore</h3>
              <p className="text-xs text-[#c9c0b5]/70 mt-1 font-mono">Tamil Nadu, India</p>
            </div>

            {/* Glowing Flight Arc */}
            <div className="flex-1 w-full max-w-md relative px-4 py-2">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 400 100">
                <defs>
                  <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#e11d48" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 80 Q 200 -20 380 80"
                  fill="none"
                  stroke="url(#arcGlow)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* Animated Floating Heart / Plane traversing the arc */}
              <motion.div
                animate={{
                  offsetDistance: ["0%", "100%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12121c] border border-[#d4af37]/40 text-[#d4af37] text-[11px] shadow-lg"
              >
                <Heart size={12} className="fill-[#e11d48] text-[#e11d48]" />
                <span className="font-mono">8,000+ KM</span>
              </motion.div>
            </div>

            {/* Abroad Node */}
            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <div className="w-16 h-16 rounded-2xl bg-[#141422] border border-[#d4af37]/40 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                <span className="text-2xl">🩺</span>
              </div>
              <span className="text-xs tracking-widest text-[#d4af37] uppercase font-mono">Her Journey</span>
              <h3 className="text-2xl sm:text-3xl font-serif-cinematic text-[#f7f2ea]">{STORY_CONFIG.herCountry}</h3>
              <p className="text-xs text-[#c9c0b5]/70 mt-1 font-mono">Medicine & Hospital Shifts</p>
            </div>
          </div>
        </motion.div>

        {/* Narrative Prose */}
        <div className="space-y-3 text-center my-14 max-w-xl mx-auto">
          {[
            "Thousands of kilometres.",
            "Different time zones.",
            "Different routines.",
            "Different lives.",
            "But somehow...",
            "The same two hearts."
          ].map((phrase, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`font-serif-cinematic text-lg sm:text-2xl ${
                idx === 5
                  ? "font-calligraphy text-4xl sm:text-6xl text-[#d4af37] candle-glow pt-4 block leading-tight"
                  : "text-[#c9c0b5]/85"
              }`}
            >
              {phrase}
            </motion.p>
          ))}
        </div>

        {/* Screen Love Micro-cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-8">
          <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/5">
            <PhoneCall size={18} className="text-[#d4af37] mx-auto mb-2" />
            <h4 className="text-sm font-medium text-[#f7f2ea]">Video Call Sleep</h4>
            <p className="text-xs text-[#9b9388] mt-1 font-light">Leaving the screen open so the silence felt shared.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/5">
            <Clock size={18} className="text-[#d4af37] mx-auto mb-2" />
            <h4 className="text-sm font-medium text-[#f7f2ea]">Calculated Hours</h4>
            <p className="text-xs text-[#9b9388] mt-1 font-light">Waking up earlier just to catch each other between shifts.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/5">
            <Plane size={18} className="text-[#d4af37] mx-auto mb-2" />
            <h4 className="text-sm font-medium text-[#f7f2ea]">The Countdown</h4>
            <p className="text-xs text-[#9b9388] mt-1 font-light">Every calendar tick was one step closer to her return.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
