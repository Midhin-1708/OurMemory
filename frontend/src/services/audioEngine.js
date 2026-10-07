/**
 * Cinematic Audio Engine
 * Supports HTML5 audio playback with smooth fading, chapter track switching,
 * and a procedural Web Audio ambient pad fallback when local mp3 files aren't added yet.
 */

class AudioEngine {
  constructor() {
    this.audioElement = null;
    this.audioContext = null;
    this.synthGain = null;
    this.isSynthRunning = false;
    this.currentTrack = "Nee Kavithaigala";
    this.isPlaying = false;
    this.volume = 0.55;
    this.isMuted = false;
    this.listeners = new Set();
    this.synthOscillators = [];
  }

  init() {
    if (this.audioElement) return;
    this.audioElement = new Audio("/audio/Nee-Kavithaigala.mp3");
    this.audioElement.loop = true;
    this.audioElement.volume = this.volume;
    this.audioElement.preload = "auto";

    this.audioElement.addEventListener("playing", () => {
      this.isPlaying = true;
      this.stopProceduralPad();
      this.notify();
    });

    this.audioElement.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notify();
    });

    this.audioElement.addEventListener("error", (e) => {
      console.warn("Audio element error:", e);
      if (this.isPlaying) {
        this.startProceduralPad();
      }
    });
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) =>
      fn({
        isPlaying: this.isPlaying,
        volume: this.volume,
        isMuted: this.isMuted,
        currentTrack: this.currentTrack,
        isSynth: this.isSynthRunning,
      })
    );
  }

  async play(trackSrc = "/audio/Nee-Kavithaigala.mp3", trackKey = "Nee Kavithaigala") {
    this.init();
    this.currentTrack = trackKey;

    try {
      const normalizedCurrent = this.audioElement.src || "";
      if (!normalizedCurrent.endsWith("Nee-Kavithaigala.mp3") && !normalizedCurrent.endsWith(trackSrc)) {
        this.audioElement.src = trackSrc;
      }
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        await playPromise;
        this.isPlaying = true;
        this.stopProceduralPad();
      }
    } catch (e) {
      console.warn("Audio play interaction needed:", e);
    }
    this.notify();
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.stopProceduralPad();
    this.isPlaying = false;
    this.notify();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play(this.audioElement?.src || "/audio/Nee-Kavithaigala.mp3", this.currentTrack);
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    if (this.synthGain && this.audioContext) {
      this.synthGain.gain.setValueAtTime(
        this.isMuted ? 0 : this.volume * 0.25,
        this.audioContext.currentTime
      );
    }
    this.notify();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.setVolume(this.volume);
  }

  // Cross-fade to a new track
  fadeToTrack(newSrc, newKey, durationMs = 1500) {
    if (!this.audioElement || !this.isPlaying) {
      this.currentTrack = newKey;
      return;
    }
    const startVol = this.volume;
    const steps = 10;
    const stepTime = durationMs / (steps * 2);

    let currentStep = 0;
    const fadeOutInterval = setInterval(() => {
      currentStep++;
      const v = Math.max(0, startVol * (1 - currentStep / steps));
      if (this.audioElement) this.audioElement.volume = v;
      if (currentStep >= steps) {
        clearInterval(fadeOutInterval);
        this.currentTrack = newKey;
        this.play(newSrc, newKey);
        // Fade in
        let inStep = 0;
        const fadeInInterval = setInterval(() => {
          inStep++;
          const inV = Math.min(startVol, startVol * (inStep / steps));
          if (this.audioElement) this.audioElement.volume = inV;
          if (inStep >= steps) {
            clearInterval(fadeInInterval);
          }
        }, stepTime);
      }
    }, stepTime);
  }

  // Generative cinematic chord generator (Ambient pad in D minor / F major)
  startProceduralPad() {
    if (this.isSynthRunning) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioContext) {
        this.audioContext = new AudioCtx();
      }
      if (this.audioContext.state === "suspended") {
        this.audioContext.resume();
      }

      this.synthGain = this.audioContext.createGain();
      this.synthGain.gain.setValueAtTime(0, this.audioContext.currentTime);
      this.synthGain.gain.linearRampToValueAtTime(
        this.isMuted ? 0 : this.volume * 0.2,
        this.audioContext.currentTime + 3
      );

      // Low pass filter for warm, dreamy, distant tone
      const filter = this.audioContext.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(340, this.audioContext.currentTime);

      this.synthGain.connect(filter);
      filter.connect(this.audioContext.destination);

      // Rich romantic cinematic chords: Dm9 -> BbMaj7 -> Fmaj9 -> Am7
      const chordProgressions = [
        [146.83, 174.61, 220.00, 261.63, 329.63], // Dm9 (D3, F3, A3, C4, E4)
        [116.54, 174.61, 233.08, 293.66, 349.23], // BbMaj7 (Bb2, F3, Bb3, D4, F4)
        [174.61, 220.00, 261.63, 329.63, 392.00], // Fmaj9 (F3, A3, C4, E4, G4)
        [110.00, 164.81, 220.00, 261.63, 329.63]  // Am7 (A2, E3, A3, C4, E4)
      ];

      let chordIndex = 0;
      this.synthOscillators = chordProgressions[0].map((f, i) => {
        const osc = this.audioContext.createOscillator();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, this.audioContext.currentTime);
        osc.detune.setValueAtTime((i - 2) * 4, this.audioContext.currentTime);
        osc.connect(this.synthGain);
        osc.start();
        return osc;
      });

      // Evolve chords smoothly every 9 seconds
      this.chordInterval = setInterval(() => {
        if (!this.isSynthRunning || !this.audioContext) return;
        chordIndex = (chordIndex + 1) % chordProgressions.length;
        const nextChord = chordProgressions[chordIndex];
        const now = this.audioContext.currentTime;

        this.synthOscillators.forEach((osc, i) => {
          if (nextChord[i]) {
            osc.frequency.setTargetAtTime(nextChord[i], now, 2.2);
          }
        });
      }, 9000);

      this.isSynthRunning = true;
      this.notify();
    } catch (e) {
      console.warn("Could not start procedural ambient audio:", e);
    }
  }

  stopProceduralPad() {
    if (this.chordInterval) {
      clearInterval(this.chordInterval);
      this.chordInterval = null;
    }
    if (!this.isSynthRunning) return;
    try {
      if (this.synthGain && this.audioContext) {
        this.synthGain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 1);
        setTimeout(() => {
          this.synthOscillators.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          this.synthOscillators = [];
          this.isSynthRunning = false;
          this.notify();
        }, 1100);
      }
    } catch {
      this.isSynthRunning = false;
    }
  }
}

export const audioEngine = new AudioEngine();
