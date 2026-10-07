import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Heart } from "lucide-react";
import { timelineMilestones } from "../data/memories";
import MemoryImage from "../components/common/MemoryImage";

export default function Section05Timeline({ onSelectMemory }) {
  return (
    <section className="relative min-h-screen py-28 px-6 flex flex-col items-center justify-center border-b border-white/5">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
          >
            Chapter 04 — The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 tracking-wide"
          >
            OUR LOVE STORY TIMELINE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-[#c9c0b5]/70 mt-4 max-w-lg mx-auto"
          >
            From two strangers in a hospital to husband and wife. Every milestone that made us who we are today.
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Glowing central vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {timelineMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Central Node Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-8 h-8 rounded-full bg-[#0a0a12] border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    >
                      <span className="text-[10px] text-[#d4af37] font-mono font-bold">
                        {String(item.id).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      onClick={() => onSelectMemory(item)}
                      className="glass-panel p-6 rounded-2xl cursor-pointer group hover:border-[#d4af37]/50 transition-all duration-300"
                    >
                      {/* Location */}
                      {item.location && (
                        <div
                          className={`flex items-center gap-1.5 text-xs text-[#d4af37] font-mono tracking-wider mb-2 ${
                            isEven ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <MapPin size={12} />
                          <span>{item.location}</span>
                        </div>
                      )}

                      <h3 className="text-xl md:text-2xl font-serif-cinematic text-[#f7f2ea] group-hover:text-[#d4af37] transition-colors">
                        {item.title}
                      </h3>

                      {item.quote && (
                        <p className="mt-2 text-xs md:text-sm font-serif-cinematic italic text-[#e5dec9]/80">
                          "{item.quote}"
                        </p>
                      )}

                      <p className="mt-3 text-xs text-[#c9c0b5]/70 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div
                        className={`mt-4 flex items-center gap-2 text-[11px] text-[#d4af37]/80 group-hover:text-[#d4af37] font-medium tracking-wide uppercase ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span>View Memory</span>
                        <Sparkles size={12} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column / Image Card (Desktop) */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "md:order-2 md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      onClick={() => onSelectMemory(item)}
                      className="w-48 h-32 rounded-xl overflow-hidden glass-panel p-1.5 cursor-pointer group hover:scale-105 transition-transform"
                    >
                      <MemoryImage
                        src={item.src}
                        alt={item.title}
                        aspectRatio="aspect-auto h-full w-full"
                        className="rounded-lg"
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
