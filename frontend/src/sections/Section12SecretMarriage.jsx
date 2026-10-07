import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KeyRound, Sparkles, Heart, Film, Image as ImageIcon, Volume2, VolumeX, Play, Pause, Flame } from "lucide-react";
import { DEFAULT_MEDIA } from "../data/memories";
import MemoryImage from "../components/common/MemoryImage";

export default function Section12SecretMarriage({ onSelectMemory }) {
  const [revealed, setRevealed] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState("video"); // "video" | "portrait" | "vows" | "spin"
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  const mediaItems = {
    video: {
      type: "video",
      src: "/videos/our-sacred-marriage-ceremony.mp4",
      title: "Tying Our Sacred Knot",
      caption: "The moment my hands held our yellow sacred thread (thali) before God, uniting our souls forever.",
      quote: "Watching you stand beside me in your pink saree, smiling shyly as I tied our sacred knot."
    },
    portrait: {
      type: "image",
      src: "/memories/our-marriage-mirror-sweet-hug.jpg",
      title: "Yellow Thread & Pink Saree — Our Sacred Union",
      caption: "Our sacred marriage portrait—holding you close from behind, the yellow sacred thread (thali) resting against your chest, smiling into the mirror forever.",
      quote: "Before God and in our quiet vows, we became husband and wife. Happy 1-month anniversary, my Muu."
    },
    vows: {
      type: "image",
      src: "/memories/our-secret-marriage-kiss.jpg",
      title: "Our Sacred Kiss & Sacred Thread",
      caption: "A tender kiss on your cheek while holding our sacred yellow thread.",
      quote: "The purest, most intimate vow I will ever make to anyone."
    },
    spin: {
      type: "image",
      src: "/memories/our-marriage-motion-blur-spin.jpg",
      title: "Swept Off Your Feet in Bliss",
      caption: "Lifting you in my arms, laughing so hard the world around us blurred away.",
      quote: "My heart was spinning with joy knowing you are my wife forever."
    }
  };

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 bg-[#050509] overflow-hidden">
      {/* Golden wedding aura with gentle pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-[#d4af37]/20 via-[#991b1b]/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-medium"
        >
          Chapter 11 — The Sacred Covenant
        </motion.span>

        {/* The Mystery Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4 max-w-xl mx-auto"
        >
          <p className="text-xl sm:text-2xl font-serif-cinematic italic text-[#c9c0b5]/90">
            "There is one sacred secret the outside world never saw... but it defines our whole universe."
          </p>

          {!revealed ? (
            <div className="pt-6">
              <button
                onClick={() => setRevealed(true)}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#181420] via-[#241a2e] to-[#181420] border-2 border-[#d4af37]/60 text-xs font-mono tracking-widest uppercase text-[#f3e5ab] hover:text-white hover:border-[#d4af37] transition-all cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105"
              >
                <KeyRound size={16} className="text-[#d4af37] group-hover:rotate-45 transition-transform" />
                <span>Unlock Our Wedding Sanctuary</span>
              </button>
            </div>
          ) : null}
        </motion.div>

        {/* Revealed Sacred Marriage Sanctuary */}
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* 1st Month Anniversary Grand Badge */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-[#1b1522]/90 border border-[#d4af37]/50 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                <Flame size={15} className="text-[#d4af37] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-mono font-semibold">
                  TODAY IS OUR 1ST MONTH WEDDING ANNIVERSARY
                </span>
                <Heart size={13} className="fill-[#e11d48] text-[#e11d48]" />
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] mt-3 candle-glow tracking-widest">
                ONE MONTH AS HUSBAND & WIFE
              </h2>
              <p className="font-calligraphy text-3xl sm:text-5xl text-[#d4af37] candle-glow pt-1">
                "My Kohila, my wife, my forever Muu."
              </p>
            </div>

            {/* Media Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              <button
                onClick={() => setActiveMediaTab("video")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeMediaTab === "video"
                    ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#141420] text-[#c9c0b5]/70 hover:text-white border border-white/10"
                }`}
              >
                <Film size={14} />
                <span>The Sacred Ceremony (Video)</span>
              </button>

              <button
                onClick={() => setActiveMediaTab("portrait")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeMediaTab === "portrait"
                    ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#141420] text-[#c9c0b5]/70 hover:text-white border border-white/10"
                }`}
              >
                <ImageIcon size={14} />
                <span>Husband & Wife (Portrait)</span>
              </button>

              <button
                onClick={() => setActiveMediaTab("vows")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeMediaTab === "vows"
                    ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#141420] text-[#c9c0b5]/70 hover:text-white border border-white/10"
                }`}
              >
                <Heart size={14} />
                <span>Sacred Thread & Kiss</span>
              </button>

              <button
                onClick={() => setActiveMediaTab("spin")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeMediaTab === "spin"
                    ? "bg-[#d4af37] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#141420] text-[#c9c0b5]/70 hover:text-white border border-white/10"
                }`}
              >
                <Sparkles size={14} />
                <span>Lifting You Up (Joy)</span>
              </button>
            </div>

            {/* Featured Showcase Card */}
            <div className="max-w-2xl mx-auto glass-panel-romantic p-4 sm:p-6 rounded-3xl border-2 border-[#d4af37]/50 shadow-[0_0_70px_rgba(212,175,55,0.3)]">
              <AnimatePresence mode="wait">
                {activeMediaTab === "video" ? (
                  <motion.div
                    key="ceremony-video"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {/* HTML5 Sacred Video Player */}
                    <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] sm:aspect-[3/4] max-h-[580px] mx-auto border border-[#d4af37]/30 shadow-2xl flex items-center justify-center">
                      <video
                        ref={videoRef}
                        src="/videos/our-sacred-marriage-ceremony.mp4"
                        playsInline
                        loop
                        muted={isVideoMuted}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={toggleVideoPlay}
                      />

                      {/* Video Player Floating Overlay Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white z-20">
                        <button
                          onClick={toggleVideoPlay}
                          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37] text-black text-xs font-mono font-semibold hover:bg-[#e6c45e] transition-colors cursor-pointer"
                        >
                          {isVideoPlaying ? <Pause size={14} /> : <Play size={14} className="fill-black" />}
                          <span>{isVideoPlaying ? "Pause Video" : "Play Ceremony"}</span>
                        </button>

                        <button
                          onClick={toggleVideoMute}
                          className="p-2 rounded-full hover:bg-white/10 text-[#d4af37] transition-colors cursor-pointer"
                          title={isVideoMuted ? "Unmute ceremony audio" : "Mute ceremony audio"}
                          aria-label={isVideoMuted ? "Unmute ceremony audio" : "Mute ceremony audio"}
                        >
                          {isVideoMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                      </div>

                      {/* Centered big play button if paused */}
                      {!isVideoPlaying && (
                        <div
                          onClick={toggleVideoPlay}
                          className="absolute inset-0 flex items-center justify-center bg-black/35 cursor-pointer group"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#d4af37]/90 text-black flex items-center justify-center shadow-[0_0_30px_#d4af37] group-hover:scale-110 transition-transform">
                            <Play size={26} className="fill-black ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 text-center space-y-1.5">
                      <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37]">
                        ✧ The Sacred Ceremony • Our Vows ✧
                      </span>
                      <p className="font-calligraphy text-2xl sm:text-3xl text-[#fbf7ee]">
                        "{mediaItems.video.quote}"
                      </p>
                      <p className="text-xs sm:text-sm text-[#c9c0b5]/80 font-light max-w-lg mx-auto">
                        {mediaItems.video.caption}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeMediaTab}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div
                      onClick={() => onSelectMemory(mediaItems[activeMediaTab])}
                      className="cursor-pointer"
                    >
                      <MemoryImage
                        src={mediaItems[activeMediaTab].src}
                        alt={mediaItems[activeMediaTab].title}
                        aspectRatio="aspect-[3/4]"
                        className="rounded-2xl shadow-2xl max-h-[580px] mx-auto object-cover"
                      />
                    </div>

                    <div className="pt-2 text-center space-y-1.5">
                      <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37]">
                        ✧ {mediaItems[activeMediaTab].title} ✧
                      </span>
                      <p className="font-calligraphy text-2xl sm:text-3xl text-[#fbf7ee]">
                        "{mediaItems[activeMediaTab].quote}"
                      </p>
                      <p className="text-xs sm:text-sm text-[#c9c0b5]/80 font-light max-w-lg mx-auto">
                        {mediaItems[activeMediaTab].caption}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Anniversary Emotional Vows */}
            <div className="pt-4 space-y-4 max-w-2xl mx-auto">
              <p className="text-2xl sm:text-4xl font-serif-cinematic italic text-[#fbf7ee] leading-snug">
                "Happy one-month wedding anniversary, my Kohila... my sweetest Muu."
              </p>
              <p className="text-sm sm:text-base text-[#c9c0b5]/90 font-light leading-relaxed">
                Before God and our quiet sacred vows, I promised you my entire lifetime. No crowd, no cameras, no fanfare—just two souls choosing each other in absolute devotion and eternal truth. Today marks 30 days of being your husband, and every sunrise since only proves that my soul belongs to you forever.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
