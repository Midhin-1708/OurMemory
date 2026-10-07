import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, MapPin, Film, Heart, Play } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/memories";
import MemoryImage from "../components/common/MemoryImage";

export default function Section13Gallery({ onSelectMemory }) {
  const [selectedCat, setSelectedCat] = useState("ALL");

  const filteredItems =
    selectedCat === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
          >
            Chapter 12 — The Archive
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 tracking-wide"
          >
            MEMORY GALLERY
          </motion.h2>
          <p className="text-sm text-[#c9c0b5]/70 mt-3 max-w-lg mx-auto">
            Polaroids, film stills, and whispers from our journey. Click any photograph or video to relive the private moment behind it.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start md:justify-center mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "bg-[#11111a] text-[#c9c0b5]/70 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid: Polaroids & Film strip style */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => onSelectMemory(item)}
                className="group relative cursor-pointer"
              >
                {/* Polaroid styling */}
                <div className="polaroid-card p-3 rounded-xl bg-[#faf7f2] transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-black">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover rounded-lg shadow-inner"
                      />
                    ) : (
                      <MemoryImage
                        src={item.src}
                        alt={item.title}
                        aspectRatio="aspect-[4/3]"
                        className="rounded-lg shadow-inner"
                      />
                    )}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35 rounded-lg group-hover:bg-black/20 transition-all">
                        <div className="w-11 h-11 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={18} className="fill-black ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pt-3 pb-1 text-left">
                    <p className="text-xs font-mono text-[#8a8174] uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>{item.category}</span>
                      <span>{item.location || "US"}</span>
                    </p>
                    <p className="font-serif-cinematic text-sm font-semibold text-neutral-900 line-clamp-1">
                      {item.title}
                    </p>
                    {item.note && (
                      <p className="font-calligraphy text-2xl text-[#7c1d3f] line-clamp-1 mt-0.5">
                        "{item.note}"
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
