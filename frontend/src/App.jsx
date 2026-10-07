import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, Heart, Volume2, Sparkles } from "lucide-react";
import { AudioProvider } from "./context/AudioContext";
import CinematicAtmosphere from "./components/effects/CinematicAtmosphere";
import FloatingParticles from "./components/effects/FloatingParticles";
import AudioPlayerPill from "./components/audio/AudioPlayerPill";
import MemoryModal from "./components/modals/MemoryModal";

// 18 Story Sections
import Section01Opening from "./sections/Section01Opening";
import Section02BeforeYou from "./sections/Section02BeforeYou";
import Section03FirstMet from "./sections/Section03FirstMet";
import Section04Chat from "./sections/Section04Chat";
import Section05Timeline from "./sections/Section05Timeline";
import Section06Imperfect from "./sections/Section06Imperfect";
import Section07Rebuild from "./sections/Section07Rebuild";
import Section08LongDistance from "./sections/Section08LongDistance";
import Section09DoctorDream from "./sections/Section09DoctorDream";
import Section10TogetherDays from "./sections/Section10TogetherDays";
import Section11Collage from "./sections/Section11Collage";
import Section12SecretMarriage from "./sections/Section12SecretMarriage";
import Section13Gallery from "./sections/Section13Gallery";
import Section14ThingsIDontSay from "./sections/Section14ThingsIDontSay";
import Section15Letter from "./sections/Section15Letter";
import Section16Questionnaire from "./sections/Section16Questionnaire";
import Section18FinalScene from "./sections/Section18FinalScene";
import AdminDashboard from "./sections/AdminDashboard";

import { STORY_CONFIG } from "./data/storyConfig";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeMemoryModal, setActiveMemoryModal] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check if opened with #admin or ?admin=true
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#admin" || window.location.search.includes("admin=true")) {
        setShowAdmin(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleOpenMemory = (memory) => {
    setActiveMemoryModal(memory);
  };

  const handleCloseMemory = () => {
    setActiveMemoryModal(null);
  };

  return (
    <AudioProvider>
      <div className="min-h-screen bg-[#07070a] text-[#f7f2ea] relative font-sans selection:bg-[#d4af37]/30 selection:text-white">
        {/* Global Cinema Effects */}
        <CinematicAtmosphere />
        <FloatingParticles count={35} />

        {/* Cinematic Opening Overlay */}
        <AnimatePresence>
          {!hasEntered && (
            <Section01Opening onEnterStory={() => setHasEntered(true)} />
          )}
        </AnimatePresence>

        {/* Global Audio Controller (Visible once in story) */}
        {hasEntered && <AudioPlayerPill />}

        {/* Global Subtle Navigation Header */}
        {hasEntered && (
          <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#050508]/75 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse shadow-[0_0_10px_#d4af37]" />
              <span className="text-sm font-italiana tracking-[0.25em] uppercase text-[#fbf7ee]">
                OUR STORY
              </span>
              <span className="text-[#d4af37]/60 text-xs">✦</span>
              <span className="font-calligraphy text-2xl text-[#d4af37] hidden sm:inline-block leading-none pt-1">
                Forever
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#18121f] border border-[#d4af37]/40 text-xs font-serif-cinematic italic text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <Heart size={12} className="fill-[#e11d48] text-[#e11d48] animate-pulse" />
                <span>{STORY_CONFIG.anniversaryMilestone}</span>
              </span>
              <button
                onClick={() => setShowAdmin(true)}
                className="p-1.5 rounded-full text-white/30 hover:text-[#d4af37] hover:bg-white/5 transition-colors cursor-pointer"
                title="Secret Admin Vault"
                aria-label="Secret Admin Vault"
              >
                <Lock size={14} />
              </button>
            </div>
          </header>
        )}

        {/* Main Cinematic Scroll Storyline */}
        <main className={hasEntered ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}>
          <Section02BeforeYou />
          <Section03FirstMet onSelectMemory={handleOpenMemory} />
          <Section04Chat />
          <Section05Timeline onSelectMemory={handleOpenMemory} />
          <Section06Imperfect />
          <Section07Rebuild />
          <Section08LongDistance />
          <Section09DoctorDream onSelectMemory={handleOpenMemory} />
          <Section10TogetherDays onSelectMemory={handleOpenMemory} />
          <Section11Collage onSelectMemory={handleOpenMemory} />
          <Section12SecretMarriage onSelectMemory={handleOpenMemory} />
          <Section13Gallery onSelectMemory={handleOpenMemory} />
          <Section14ThingsIDontSay />
          <Section15Letter />
          <Section16Questionnaire />
          <Section18FinalScene onReplay={() => setHasEntered(false)} />
        </main>

        {/* Memory Inspection Modal */}
        {activeMemoryModal && (
          <MemoryModal memory={activeMemoryModal} onClose={handleCloseMemory} />
        )}

        {/* Private Admin Dashboard */}
        {showAdmin && (
          <AdminDashboard onClose={() => {
            setShowAdmin(false);
            if (window.location.hash === "#admin") {
              window.history.pushState(null, "", window.location.pathname);
            }
          }} />
        )}

        {/* Minimal Footer */}
        {hasEntered && (
          <footer className="py-12 px-6 text-center text-xs text-[#8e877c] font-mono border-t border-white/5">
            <p>Made with devotion for {STORY_CONFIG.herName} • A lifetime together</p>
            <button
              onClick={() => setShowAdmin(true)}
              className="mt-2 text-[10px] text-white/20 hover:text-[#d4af37] transition-colors"
            >
              Vault Access
            </button>
          </footer>
        )}
      </div>
    </AudioProvider>
  );
}
