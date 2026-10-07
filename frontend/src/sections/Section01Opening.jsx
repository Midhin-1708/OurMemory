import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Heart, ArrowRight } from "lucide-react";
import { useAudio } from "../context/AudioContext";
import FloatingParticles from "../components/effects/FloatingParticles";

export default function Section01Opening({ onEnterStory }) {
  const [step, setStep] = useState(0);
  const { playTrack } = useAudio();

  // Pacing sequence - faster, more romantic, and instant
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),   // "Before you start..."
      setTimeout(() => setStep(2), 2200),  // "This isn't just a website..."
      setTimeout(() => setStep(3), 4000),  // "It is every heartbeat..."
      setTimeout(() => setStep(4), 5500),  // "Put your headphones on..."
      setTimeout(() => setStep(5), 6500),  // Enter button
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    // Start audio on user gesture - Play our song Nee Kavithaigala
    playTrack("/audio/Nee-Kavithaigala.mp3", "Nee Kavithaigala");
    onEnterStory();
  };

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#050508] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden"
    >
      <FloatingParticles count={30} />

      {/* Subtle background glow */}
      <div className="absolute w-[36rem] h-[36rem] rounded-full bg-[#d4af37]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center space-y-6 min-h-[320px] justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="space-y-2"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-mono">
                ✧ FOR KOHILA — MY SWEETEST MUU ✧
              </span>
              <p className="text-xl md:text-2xl font-italiana tracking-[0.2em] text-[#e5dec9] uppercase">
                Before you begin, my love...
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.p
              key="step-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-serif-cinematic italic text-[#fbf7ee] tracking-wide candle-glow"
            >
              "This isn't just a website."
            </motion.p>
          )}

          {step === 3 && (
            <motion.p
              key="step-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-serif-cinematic text-[#fbf7ee] tracking-wide leading-relaxed"
            >
              It is every heartbeat, every sleepless night, and every prayer I hold for you.
            </motion.p>
          )}

          {step >= 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center space-y-5"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#d4af37]/45 bg-[#120f17]/85 text-xs text-[#fbf7ee] backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <Headphones size={15} className="text-[#d4af37] animate-pulse" />
                <span className="font-serif-cinematic tracking-wide">Put your headphones on, Muu</span>
                <Heart size={13} className="text-[#e11d48] fill-[#e11d48]" />
              </div>

              {/* Romantic anniversary preview pill */}
              <div className="flex items-center gap-3 p-2 pr-4 rounded-full bg-[#18121f]/90 border border-[#d4af37]/40 shadow-xl max-w-sm">
                <img
                  src="/memories/our-marriage-mirror-sweet-hug.jpg"
                  alt="Our Sacred Marriage"
                  className="w-10 h-10 rounded-full object-cover border border-[#d4af37]"
                />
                <div className="text-left">
                  <p className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider">
                    Today is Our 1st Month Anniversary ❤️
                  </p>
                  <p className="text-xs text-white/90 font-serif-cinematic italic">
                    Playing: Nee Kavithaigala
                  </p>
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onClick={handleEnter}
                className="group mt-2 relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7edbe] to-[#d4af37] text-[#09080d] font-semibold tracking-[0.2em] text-xs uppercase shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:shadow-[0_0_55px_rgba(212,175,55,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span className="font-serif-cinematic tracking-widest text-sm font-bold">ENTER WITH OUR SONG 🎵</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip button for instant entry */}
      {step < 4 && (
        <button
          onClick={handleEnter}
          className="absolute bottom-6 text-[11px] tracking-widest uppercase text-white/30 hover:text-[#d4af37] transition-colors cursor-pointer"
        >
          Enter immediately with music →
        </button>
      )}
    </motion.div>
  );
}
