import React from "react";
import { motion } from "framer-motion";
import { Hospital, Sparkles, MessageCircle, Heart, Calendar } from "lucide-react";
import MemoryImage from "../components/common/MemoryImage";
import { firstMeetingMemory } from "../data/memories";

export default function Section03FirstMet({ onSelectMemory }) {
  return (
    <section className="relative min-h-screen py-28 px-6 flex flex-col items-center justify-center border-b border-white/5">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3"
          >
            <Hospital size={14} />
            <span>Chapter 02 — The Hospital Room</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] tracking-wide"
          >
            THE DAY I MET YOU
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 space-y-3 max-w-xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-serif-cinematic italic text-[#e5dec9]">
              "I didn't know it that day..."
            </p>
            <p className="font-calligraphy text-3xl sm:text-5xl text-[#d4af37] candle-glow leading-snug">
              "...but meeting you would change my life."
            </p>
          </motion.div>
        </div>

        {/* Featured Memory Card / Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative group p-2 rounded-2xl glass-panel gold-border-glow">
              <MemoryImage
                src={firstMeetingMemory.src}
                alt={firstMeetingMemory.title}
                aspectRatio="aspect-[16/10]"
                onClick={() => onSelectMemory(firstMeetingMemory)}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#f7f2ea] font-serif-cinematic text-sm">
                  Click to view full memory
                </span>
                <span className="text-[#d4af37] flex items-center gap-1 font-mono">
                  <Hospital size={12} />
                  {firstMeetingMemory.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Narrative milestones of the first day */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]">
                <Sparkles size={14} />
                <span>The First Spark</span>
              </div>
              <h3 className="text-xl font-serif-cinematic text-[#f7f2ea]">
                An Unplanned Hospital Corridor
              </h3>
              <p className="text-sm text-[#c9c0b5]/80 leading-relaxed font-light">
                {firstMeetingMemory.description}
              </p>
              <div className="p-3.5 rounded-lg bg-[#14141f] border-l-2 border-[#d4af37] text-xs font-serif-cinematic text-[#e2d9cd] italic">
                {firstMeetingMemory.conversationQuote}
              </div>
            </div>

            {/* Micro timeline of the first 24 hours */}
            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/5">
                <span className="text-[10px] tracking-widest text-[#d4af37] uppercase block mb-1">
                  First Impression
                </span>
                <p className="text-xs text-[#e5dec9] font-light">
                  Your gentle eyes, your shy smile, and a quiet grace that made my heart stop.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0f0f18] border border-white/5">
                <span className="text-[10px] tracking-widest text-[#d4af37] uppercase block mb-1">
                  First Message
                </span>
                <p className="text-xs text-[#e5dec9] font-light">
                  A simple check-in that began the greatest love story of my life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
