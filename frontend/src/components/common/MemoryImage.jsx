import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function MemoryImage({
  src,
  alt = "Memory photograph",
  className = "",
  onClick = null,
  aspectRatio = "aspect-[4/3]",
  priority = false
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#101018] rounded-xl ${aspectRatio} ${
        onClick ? "cursor-pointer group" : ""
      } ${className}`}
    >
      {/* Skeleton loader / shimmer */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#11111a] via-[#1a1a28] to-[#11111a] animate-pulse" />
      )}

      {/* Image with progressive fade-in */}
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-sm"
          } ${onClick ? "group-hover:scale-105" : ""}`}
        />
      ) : (
        /* Fallback if local file not found yet */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#12121a] text-center border border-dashed border-[#d4af37]/30">
          <ImageIcon className="w-8 h-8 text-[#d4af37]/60 mb-2" />
          <p className="text-xs text-[#c9c0b5] font-serif-cinematic">Our Memory Photo</p>
          <span className="text-[10px] text-white/40 mt-1 font-mono">{src}</span>
        </div>
      )}

      {/* Subtle vignette layer on image */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
    </div>
  );
}
