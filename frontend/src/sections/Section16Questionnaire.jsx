import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Heart, Check, Sparkles, Lock, Loader2 } from "lucide-react";
import { STORY_CONFIG } from "../data/storyConfig";
import { submitRelationshipAnswers } from "../services/api";

export default function Section16Questionnaire({ onAnswersSubmitted }) {
  const [formData, setFormData] = useState({
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    answer_5: "",
    answer_6: "",
    answer_7: "",
    answer_8: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await submitRelationshipAnswers(formData);
      if (res.success) {
        setIsSuccess(true);
        if (onAnswersSubmitted) {
          onAnswersSubmitted(res.data);
        }
      } else {
        setErrorMessage("Something went wrong. Don't worry, your words are stored locally.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-[#d4af37]/8 blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        {/* Section Intro */}
        <div className="text-center mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
          >
            Chapter 15 — Sacred Dialogue
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-italiana text-[#fbf7ee] tracking-wide"
          >
            NOW IT'S YOUR TURN
          </motion.h2>

          <div className="space-y-3 pt-3">
            <p className="text-xl sm:text-2xl font-serif-cinematic italic text-[#e5dec9]">
              "I've told you my story. Now tell me yours."
            </p>
            <p className="font-calligraphy text-3xl sm:text-5xl text-[#d4af37] candle-glow leading-snug">
              "Tell me how to love you better."
            </p>
          </div>

          <p className="text-xs text-[#9b9388] font-mono tracking-wider pt-2 flex items-center justify-center gap-1.5">
            <Lock size={12} className="text-[#d4af37]" />
            Your answers are completely private & will be saved safely.
          </p>
        </div>

        {/* Form Container */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {STORY_CONFIG.questions.map((q, idx) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/20 focus-within:border-[#d4af37]/60 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-[#d4af37] px-2.5 py-1 rounded bg-[#161624] border border-[#d4af37]/30">
                    Question {q.number}
                  </span>
                  <Heart size={14} className="text-[#d4af37]/50" />
                </div>

                <label
                  htmlFor={q.id}
                  className="block text-base sm:text-lg font-serif-cinematic text-[#f7f2ea] mb-3 leading-snug"
                >
                  {q.title}
                </label>

                <textarea
                  id={q.id}
                  rows={3}
                  value={formData[q.id]}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  className="w-full bg-[#0a0a12]/80 border border-white/10 rounded-xl p-4 text-sm text-[#f7f2ea] placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-[#d4af37] transition-all resize-y font-light leading-relaxed"
                />
              </motion.div>
            ))}

            {errorMessage && (
              <p className="text-xs text-[#e11d48] text-center">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-[#0a0a10] font-medium tracking-widest text-xs uppercase shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 disabled:opacity-50 transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>SAVING YOUR WORDS...</span>
                  </>
                ) : (
                  <>
                    <span>SEND IT TO ME ❤️</span>
                    <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#d4af37]/40 text-center space-y-6 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
              <Check size={28} />
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif-cinematic text-[#f7f2ea] gold-glow">
              "Your words are safe with me."
            </h3>

            <p className="text-lg font-serif-cinematic italic text-[#e5dec9] max-w-lg mx-auto">
              "Thank you for telling me how to love you better."
            </p>

            <p className="text-xs text-[#9b9388] max-w-md mx-auto font-light">
              I have received every word. I will read them, hold them close to my heart, and work every 
              single day to become the partner you deserve.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
