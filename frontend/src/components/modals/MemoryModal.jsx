import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, Heart, Quote } from "lucide-react";
import MemoryVideo from "../common/MemoryVideo";

export default function MemoryModal({ memory, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!memory) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0e0e16] border border-[#d4af37]/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-all border border-white/10"
            aria-label="Close memory modal"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Visual preview */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[460px]">
              {memory.type === "video" ? (
                <MemoryVideo
                  src={memory.src}
                  aspectRatio="aspect-auto h-full w-full"
                  autoPlay={true}
                  controls={true}
                  muted={false}
                />
              ) : (
                <img
                  src={memory.src}
                  alt={memory.title || "Memory"}
                  className="w-full h-full object-cover max-h-[500px]"
                />
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0e0e16] via-transparent to-transparent md:hidden" />
            </div>

            {/* Content narrative */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#d4af37] font-medium tracking-wider mb-2">
                  {memory.location && (
                    <span className="flex items-center gap-1.5 font-mono">
                      <MapPin size={13} />
                      {memory.location}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-cinematic text-[#f7f2ea] leading-tight mb-3">
                  {memory.title}
                </h3>

                {memory.quote && (
                  <div className="relative pl-4 border-l-2 border-[#d4af37]/60 italic font-serif-cinematic text-[#e2d9cd] text-base mb-4 py-1">
                    "{memory.quote}"
                  </div>
                )}

                {memory.caption && (
                  <p className="text-sm sm:text-base text-[#c9c0b5] leading-relaxed mb-4">
                    {memory.caption}
                  </p>
                )}

                {memory.description && (
                  <p className="text-sm text-[#9b9388] leading-relaxed">
                    {memory.description}
                  </p>
                )}

                {memory.note && (
                  <div className="mt-4 p-3.5 rounded-lg bg-[#161622] border border-white/5 text-xs text-[#d4af37]/90 font-serif-cinematic">
                    <span className="font-semibold block mb-0.5 text-[#f7f2ea]">Private Note:</span>
                    {memory.note}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8f887e]">
                <span className="flex items-center gap-1 text-[#d4af37]">
                  <Heart size={14} className="fill-[#d4af37]" />
                  A piece of our story
                </span>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#f7f2ea] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
