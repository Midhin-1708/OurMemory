import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, RotateCcw } from "lucide-react";
import { DEFAULT_MEDIA } from "../data/memories";
import { useAudio } from "../context/AudioContext";
import MemoryImage from "../components/common/MemoryImage";

export default function Section18FinalScene({ onReplay }) {
  const [faded, setFaded] = useState(false);
  const { fadeTo } = useAudio();

  useEffect(() => {
    fadeTo("/audio/Nee-Kavithaigala.mp3", "Nee Kavithaigala");
  }, [fadeTo]);

  return (
    <section className="relative min-h-screen py-36 px-6 flex flex-col items-center justify-center bg-[#030306] overflow-hidden text-center">
      {/* Golden celebratory aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#06060a] to-black pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10 space-y-12">
        {/* Sequence of Final Words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-[#d4af37] font-mono block">
            ✧ The Sacred Horizon ✧
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] tracking-wide">
            "This isn't the end of our story."
          </h2>
          <p className="font-calligraphy text-4xl sm:text-6xl text-[#d4af37] candle-glow pt-2">
            "It's only the first chapter."
          </p>
        </motion.div>

        {/* Primary Husband & Wife Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-md mx-auto glass-panel-romantic p-4 rounded-3xl border-2 border-[#d4af37]/50 shadow-[0_0_70px_rgba(212,175,55,0.3)]"
        >
          <MemoryImage
            src="/memories/our-marriage-mirror-sweet-hug.jpg"
            alt="Husband and Wife - Yellow Thread and Pink Saree"
            aspectRatio="aspect-[3/4]"
            className="rounded-2xl shadow-2xl"
          />
          <div className="pt-4 pb-1 text-center space-y-1">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#d4af37]">
              ✧ Husband & Wife ✧
            </span>
            <p className="font-calligraphy text-3xl sm:text-4xl text-[#fbf7ee]">
              "Happy 1-Month Wedding Anniversary, My Muu"
            </p>
          </div>
        </motion.div>

        {/* Continuation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-5"
        >
          <h3 className="text-3xl sm:text-5xl font-italiana tracking-[0.25em] text-[#fbf7ee] uppercase font-normal candle-glow">
            OUR STORY CONTINUES...
          </h3>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#120f18] border border-[#d4af37]/45 text-xs tracking-widest text-[#d4af37] font-mono shadow-xl">
            <span>Happy Birthday Kohila</span>
            <Heart size={14} className="fill-[#e11d48] text-[#e11d48]" />
            <span>1st Month Wedding Anniversary Today</span>
            <Heart size={14} className="fill-[#e11d48] text-[#e11d48]" />
            <span>Us Forever</span>
          </div>

          <p className="text-xl sm:text-3xl font-serif-cinematic italic text-[#e5dec9] pt-2 max-w-lg mx-auto">
            "Here's to all the lifetimes we will spend together, my wife."
          </p>
        </motion.div>

        {/* Replay Option */}
        {onReplay && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="pt-12 flex items-center justify-center"
          >
            <button
              onClick={onReplay}
              className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#c9c0b5] hover:text-[#d4af37] flex items-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw size={14} />
              <span>Back to Beginning</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
