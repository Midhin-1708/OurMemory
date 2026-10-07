import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Video as VideoIcon } from "lucide-react";

export default function MemoryVideo({
  src,
  poster = "",
  className = "",
  aspectRatio = "aspect-video",
  autoPlay = true,
  controls = false,
  muted = true,
  loop = true,
  onClick = null
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // IntersectionObserver to pause offscreen videos for extreme performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (autoPlay) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [autoPlay]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl bg-[#0c0c14] ${aspectRatio} ${
        onClick ? "cursor-pointer group" : ""
      } ${className}`}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          muted={isMuted}
          loop={loop}
          preload="metadata"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#11111a] text-center border border-dashed border-[#d4af37]/30">
          <VideoIcon className="w-10 h-10 text-[#d4af37]/70 mb-2" />
          <p className="text-xs text-[#c9c0b5] font-serif-cinematic">Cinematic Video Memory</p>
          <span className="text-[10px] text-white/40 mt-1 font-mono">{src}</span>
        </div>
      )}

      {/* Floating mini video controls */}
      {!hasError && (
        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full z-20">
          <button
            onClick={togglePlay}
            className="text-white/80 hover:text-white transition-colors"
            title={isPlaying ? "Pause" : "Play"}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={toggleMute}
            className="text-white/80 hover:text-white transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}

      {/* Vignette shadow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-60" />
    </div>
  );
}
