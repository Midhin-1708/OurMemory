import React from "react";
import { motion } from "framer-motion";
import { Activity, Award, Sparkles, Heart } from "lucide-react";
import MemoryImage from "../components/common/MemoryImage";
import { DEFAULT_MEDIA } from "../data/memories";

export default function Section09DoctorDream({ onSelectMemory }) {
  const doctorMemory = {
    title: "Becoming Dr. Kohila — My Muu",
    location: "Osh State University, Kyrgyzstan",
    src: DEFAULT_MEDIA.yellowFlower,
    quote: "Her hands will one day heal the world. My sacred duty is to love and protect her heart.",
    caption: "Studying through freezing Kyrgyzstan winters, surviving endless textbook chapters and grueling hospital rotations to become the healer she was born to be."
  };

  return (
    <section className="relative min-h-screen py-28 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      {/* Subtle emerald/cyan undertone for medical healing motif */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3"
          >
            <Activity size={14} className="animate-pulse text-[#d4af37]" />
            <span>Chapter 08 — For You, Doctor</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] tracking-wide"
          >
            HER DREAM OF BECOMING A DOCTOR
          </motion.h2>

          {/* Elegant ECG Pulse Line */}
          <div className="w-48 h-8 mx-auto my-6 text-[#d4af37]/80">
            <svg viewBox="0 0 200 40" className="w-full h-full stroke-current fill-none">
              <path
                d="M0,20 L60,20 L70,8 L80,32 L90,12 L100,24 L105,20 L200,20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Medical Study Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <div className="glass-panel p-3 rounded-2xl relative group">
              <MemoryImage
                src={doctorMemory.src}
                alt={doctorMemory.title}
                aspectRatio="aspect-[4/3]"
                onClick={() => onSelectMemory(doctorMemory)}
                className="rounded-xl shadow-2xl"
              />
              <div className="p-4">
                <p className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
                  DEDICATION & PURPOSE
                </p>
                <p className="text-sm font-serif-cinematic text-[#f7f2ea] mt-1">
                  The stethoscope around your neck fits your noble soul.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Tribute Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-serif-cinematic italic text-[#e5dec9] leading-snug">
                "While you're becoming the doctor you dreamed of becoming..."
              </p>
              <p className="font-calligraphy text-4xl sm:text-5xl text-[#d4af37] candle-glow leading-snug">
                "I want you to know how proud I am of you."
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-4 border-l-4 border-l-[#d4af37]">
              <p className="text-base text-[#f7f2ea] font-serif-cinematic italic leading-relaxed">
                "You have dreams waiting for you."
              </p>
              <p className="text-base text-[#f7f2ea] font-serif-cinematic italic leading-relaxed">
                "You have a future waiting for you."
              </p>
              <p className="text-lg text-[#d4af37] font-serif-cinematic font-medium leading-relaxed">
                "And I want to be there through every chapter."
              </p>
            </div>

            <p className="text-sm text-[#9b9388] leading-relaxed font-light">
              I know the physical exhaustion, the immense weight of exams, and the lonely hours 
              in the hospital wards far from home. You are going to touch and heal so many lives, 
              and I will forever be your quietest, proudest supporter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
