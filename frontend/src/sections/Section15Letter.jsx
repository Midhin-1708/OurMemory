import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, Heart, Sparkles, ScrollText } from "lucide-react";
import { STORY_CONFIG } from "../data/storyConfig";
import { useAudio } from "../context/AudioContext";

export default function Section15Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const { fadeTo } = useAudio();
  const letter = STORY_CONFIG.letter;

  const handleOpenLetter = () => {
    setIsOpen(true);
    fadeTo("/audio/Nee-Kavithaigala.mp3", "Nee Kavithaigala");
  };

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      {/* Warm ambient candle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#d4af37]/12 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
        >
          Chapter 14 — My Heart in Ink
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif-cinematic text-[#f7f2ea] mt-3 mb-12"
        >
          THE LETTER
        </motion.h2>

        {/* Sealed Envelope State */}
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-md mx-auto my-8"
          >
            <div className="relative glass-panel p-8 sm:p-12 rounded-3xl border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center flex flex-col items-center space-y-6">
              {/* Wax Seal / Envelope Icon */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#831843] to-[#be185d] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                <span className="text-2xl text-white font-serif font-bold">♥</span>
              </div>

              <div>
                <p className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
                  Private & Confidential
                </p>
                <p className="text-xl sm:text-2xl font-serif-cinematic text-[#f7f2ea] mt-2">
                  "For the woman I want to keep choosing."
                </p>
              </div>

              <button
                onClick={handleOpenLetter}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-[#0a0a10] font-medium tracking-widest text-xs uppercase shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Mail size={15} />
                <span>OPEN MY LETTER</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Unfolded Parchment Paper Letter */
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto my-8 parchment-texture text-[#1a1614] p-8 sm:p-16 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] relative text-left border border-[#d4af37]/50"
          >
            {/* Wax Seal Ribbon Watermark in corner */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7c1d3f] to-[#be185d] border border-[#d4af37] flex items-center justify-center text-white text-xs font-serif shadow-md">
                ♥
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#7c1d3f] uppercase">
                Forever Mine
              </span>
            </div>

            {/* Letter Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#1c1917]/15 pb-4 mb-8">
              <span className="font-serif-cinematic italic text-sm text-neutral-600">
                {letter.date}
              </span>
            </div>

            {/* Greeting in Calligraphy */}
            <div className="relative z-10 font-calligraphy text-4xl sm:text-6xl text-[#31081a] mb-6 leading-tight">
              {letter.greeting}
            </div>

            {/* Paragraphs with high literary serif */}
            <div className="relative z-10 space-y-6 text-base sm:text-lg font-serif-cinematic leading-relaxed text-neutral-800 tracking-wide font-normal">
              {letter.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-calligraphy first-letter:float-left first-letter:mr-2 first-letter:text-[#7c1d3f]" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Sacred Promises Section */}
            <div className="relative z-10 my-12 p-8 rounded-2xl bg-amber-50/80 border border-amber-200/90 shadow-inner space-y-4">
              <p className="font-serif-cinematic font-semibold text-xs uppercase tracking-[0.25em] text-[#7c1d3f] mb-4">
                ✦ My Sacred Promises To You:
              </p>
              <div className="space-y-3">
                {letter.promises.map((promise, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base font-serif-cinematic text-neutral-900 leading-snug">
                    <CheckCircle2 size={18} className="text-[#7c1d3f] shrink-0 mt-0.5" />
                    <span>{promise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signoff & Birthday Wish */}
            <div className="relative z-10 pt-8 border-t border-[#1c1917]/15 text-right space-y-3">
              <p className="font-calligraphy text-3xl sm:text-5xl text-[#7c1d3f] font-normal">
                {letter.signoff}
              </p>
              <p className="font-calligraphy text-4xl sm:text-6xl text-neutral-900 font-semibold pt-1">
                {letter.signature}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
