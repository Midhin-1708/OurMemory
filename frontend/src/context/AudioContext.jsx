import React, { createContext, useContext, useEffect, useState } from "react";
import { audioEngine } from "../services/audioEngine";

const AudioStateContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const [audioState, setAudioState] = useState({
    isPlaying: false,
    volume: 0.55,
    isMuted: false,
    currentTrack: "opening",
    isSynth: false,
  });

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe(setAudioState);
    return unsubscribe;
  }, []);

  const playTrack = (src, key) => audioEngine.play(src, key);
  const togglePlay = () => audioEngine.togglePlay();
  const pause = () => audioEngine.pause();
  const setVolume = (val) => audioEngine.setVolume(val);
  const toggleMute = () => audioEngine.toggleMute();
  const fadeTo = (src, key) => audioEngine.fadeToTrack(src, key);

  return (
    <AudioStateContext.Provider
      value={{
        ...audioState,
        playTrack,
        togglePlay,
        pause,
        setVolume,
        toggleMute,
        fadeTo,
      }}
    >
      {children}
    </AudioStateContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioStateContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
