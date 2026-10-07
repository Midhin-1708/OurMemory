import React, { useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music2, Sparkles } from "lucide-react";
import { useAudio } from "../../context/AudioContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayerPill() {
  const { isPlaying, volume, isMuted, togglePlay, setVolume, toggleMute, currentTrack, isSynth } = useAudio();
  const [showControls, setShowControls] = useState(false);

  return (
    <motion.aside
      aria-label="Cinematic Audio Player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="glass-panel px-4 py-2.5 rounded-full flex items-center gap-3 shadow-2xl border border-[#d4af37]/30 bg-[#0c0c14]/85 backdrop-blur-md">
        {/* Animated sound bars */}
        <div className="flex items-end gap-[3px] h-4 w-4">
          {[1, 2, 3].map((bar) => (
            <motion.span
              key={bar}
              animate={
                isPlaying
                  ? {
                      height: ["20%", "100%", "40%", "85%", "25%"],
                    }
                  : { height: "20%" }
              }
              transition={
                isPlaying
                  ? {
                      repeat: Infinity,
                      duration: 0.7 + bar * 0.2,
                      ease: "easeInOut",
                    }
                  : { duration: 0.3 }
              }
              className="w-[3px] bg-[#d4af37] rounded-full inline-block"
            />
          ))}
        </div>

        {/* Track info */}
        <div className="text-left hidden sm:block">
          <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-medium font-mono">
            OUR SONG ❤️
          </p>
          <p className="text-xs text-[#f5efe6] font-serif-cinematic truncate max-w-[130px]">
            Nee Kavithaigala
          </p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-full text-[#f5efe6] hover:text-[#d4af37] hover:bg-white/5 transition-colors cursor-pointer"
          title={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
          aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
        >
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full text-[#c9c0b5] hover:text-[#d4af37] hover:bg-white/5 transition-colors cursor-pointer"
          title={isMuted ? "Unmute" : "Mute"}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        {/* Expandable volume slider */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 70, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden flex items-center"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                aria-label="Soundtrack Volume"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
