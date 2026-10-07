import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Hotel, MapPin, Plane, Utensils, Sparkles, Heart, Smile, Droplets, Camera } from "lucide-react";
import { reunionChapters } from "../data/memories";
import MemoryImage from "../components/common/MemoryImage";
import MemoryVideo from "../components/common/MemoryVideo";

export default function Section10TogetherDays({ onSelectMemory }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentChapter = reunionChapters[activeTab];

  const getIcon = (id) => {
    switch (id) {
      case "home": return <Home size={16} />;
      case "linked": return <Heart size={16} />;
      case "twoflowers": return <Sparkles size={16} />;
      case "resting": return <Heart size={16} />;
      case "hands": return <Heart size={16} />;
      case "temple": return <Sparkles size={16} />;
      case "airport": return <Plane size={16} />;
      case "cooking": return <Utensils size={16} />;
      case "silly": return <Smile size={16} />;
      case "hotel": return <Hotel size={16} />;
      case "videocalls": return <Camera size={16} />;
      default: return <Camera size={16} />;
    }
  };

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Cinematic Intro */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
          >
            Chapter 09 — The Reunions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif-cinematic text-[#f7f2ea] mt-3"
          >
            THE DAYS WE DIDN'T HAVE TO MISS EACH OTHER
          </motion.h2>

          {/* Prologue Quotes */}
          <div className="space-y-2 mt-8 text-sm sm:text-base font-serif-cinematic italic text-[#c9c0b5]/80">
            <p>"Most of our love story happened through a screen. Calls. Messages. Good mornings. Good nights. Missing each other."</p>
            <p className="text-xl sm:text-2xl text-[#f7f2ea] pt-2 not-italic font-normal">
              "But sometimes... <span className="text-[#d4af37] italic font-serif-cinematic gold-glow">You came home."</span>
            </p>
          </div>
        </div>

        {/* 10 Reunion Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center mb-10 max-w-full">
          {reunionChapters.map((chap, idx) => (
            <button
              key={chap.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                  : "bg-[#12121c] text-[#c9c0b5]/70 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {getIcon(chap.id)}
              <span>{chap.tag}</span>
            </button>
          ))}
        </div>

        {/* Featured Chapter Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#d4af37]/25 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Media Photo with Polaroid / Cinematic styling */}
              <div className="lg:col-span-7">
                <div
                  onClick={() => onSelectMemory(currentChapter)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                    currentChapter.id === "airbnb" ? "polaroid-card p-3 bg-[#faf7f2] text-black" : "glass-panel p-2"
                  }`}
                >
                  {currentChapter.type === "video" ? (
                    <MemoryVideo
                      src={currentChapter.src}
                      aspectRatio="aspect-[16/10]"
                      className="rounded-xl shadow-2xl"
                      autoPlay={true}
                      loop={true}
                      muted={true}
                    />
                  ) : (
                    <MemoryImage
                      src={currentChapter.src}
                      alt={currentChapter.title}
                      aspectRatio="aspect-[16/10]"
                      className="rounded-xl shadow-2xl"
                    />
                  )}
                  {currentChapter.id === "airbnb" && (
                    <div className="p-3 text-center">
                      <span className="font-handwriting text-xl text-neutral-800">
                        Our Little Escapes • Airbnb Journal
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#d4af37] text-xs font-mono">
                    Part {currentChapter.number}/10
                  </div>
                </div>
              </div>

              {/* Text Narrative */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div>
                  <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-mono">
                    ✦ {currentChapter.tag} ✦
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-italiana text-[#fbf7ee] mt-1 mb-2 tracking-wide">
                    {currentChapter.title}
                  </h3>
                  <p className="font-calligraphy text-2xl sm:text-4xl text-[#d4af37] candle-glow my-3 leading-snug">
                    "{currentChapter.subtitle}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#c9c0b5]/90 leading-relaxed font-light">
                  {currentChapter.text}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onSelectMemory(currentChapter)}
                    className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/30 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Inspect Memory</span>
                    <Sparkles size={13} />
                  </button>
                  <span className="text-xs text-[#8e877c] font-mono">Click to expand</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Rapid Visual Mosaic Teaser below */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8">
          {reunionChapters.map((chap, idx) => (
            <div
              key={chap.id}
              onClick={() => setActiveTab(idx)}
              className={`p-2 rounded-xl transition-all cursor-pointer ${
                activeTab === idx
                  ? "border border-[#d4af37] bg-[#1a1a28]"
                  : "border border-white/5 bg-[#0e0e16]/60 hover:border-white/20"
              }`}
            >
              <div className="h-16 rounded-lg overflow-hidden relative mb-1.5">
                <img src={chap.src} alt={chap.tag} className="w-full h-full object-cover" />
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#f7f2ea] truncate">
                {chap.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
