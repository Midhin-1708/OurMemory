import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import { thingsIDontSayEnough } from "../data/memories";

export default function Section14ThingsIDontSay() {
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-[#d4af37]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
        >
          Chapter 13 — Vulnerability
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 mb-16 tracking-wide"
        >
          THINGS I DON'T SAY ENOUGH
        </motion.h2>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {thingsIDontSayEnough.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel p-7 rounded-2xl relative group border border-[#d4af37]/15 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#d4af37]/70">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
                <Heart size={14} className="text-[#d4af37]/40 group-hover:text-[#d4af37] group-hover:fill-[#d4af37] transition-colors" />
              </div>

              <h3 className="text-xl font-serif-cinematic text-[#f7f2ea] group-hover:text-[#d4af37] transition-colors mb-3">
                "{item.title}"
              </h3>

              <p className="text-xs sm:text-sm text-[#c9c0b5]/80 leading-relaxed font-light">
                {item.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
