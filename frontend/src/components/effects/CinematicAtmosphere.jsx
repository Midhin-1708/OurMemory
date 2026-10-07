import React from "react";

export default function CinematicAtmosphere() {
  return (
    <>
      {/* 35mm Film Grain Overlay */}
      <div className="film-grain" />

      {/* Cinematic Theater Vignette */}
      <div className="cinematic-vignette" />

      {/* Romantic Wine & Amber Light Leaks */}
      <div className="fixed -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#d4af37]/12 via-[#4c0d29]/15 to-transparent blur-[140px] pointer-events-none z-0 animate-romantic-leak" />
      <div
        className="fixed top-1/3 -right-32 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tl from-[#e11d48]/10 via-[#d4af37]/8 to-transparent blur-[150px] pointer-events-none z-0 animate-romantic-leak"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="fixed -bottom-40 left-1/4 w-[40rem] h-[40rem] rounded-full bg-gradient-to-t from-[#2a0818]/20 via-[#d4af37]/6 to-transparent blur-[160px] pointer-events-none z-0 animate-romantic-leak"
        style={{ animationDelay: "-4s" }}
      />
    </>
  );
}
