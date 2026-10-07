import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Heart, ShieldCheck } from "lucide-react";
import { chatConversation } from "../data/memories";
import { STORY_CONFIG } from "../data/storyConfig";

export default function Section04Chat() {
  return (
    <section className="relative min-h-screen py-28 px-6 flex flex-col items-center justify-center border-b border-white/5">
      <div className="max-w-2xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium"
          >
            Chapter 03 — Late Night Screens
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif-cinematic text-[#f7f2ea] mt-3"
          >
            When We Started Talking
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-[#c9c0b5]/70 mt-3"
          >
            Replaying the late-night hours when hours felt like minutes.
          </motion.p>
        </div>

        {/* Cinematic Chat Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-[#d4af37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#a33857] to-[#d4af37] flex items-center justify-center text-white font-serif font-bold text-sm">
                ♥
              </div>
              <div>
                <p className="text-sm font-medium text-[#f7f2ea]">{STORY_CONFIG.herName}</p>
                <p className="text-[11px] text-[#d4af37]/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Active across the miles
                </p>
              </div>
            </div>
            <ShieldCheck size={18} className="text-[#d4af37]/40" />
          </div>

          {/* Chat Messages Sequence */}
          <div className="space-y-4">
            {chatConversation.map((msg, idx) => {
              const isMe = msg.sender === "me";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      isMe
                        ? "bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7f2ea] rounded-tr-sm"
                        : "bg-[#161624] border border-white/10 text-[#e5dec9] rounded-tl-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`text-[10px] block mt-1.5 font-mono ${
                        isMe ? "text-[#d4af37]/70 text-right" : "text-white/40 text-left"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Transition Reveal: "Somewhere between all those conversations..." */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 text-center space-y-4"
        >
          <div className="inline-flex p-3 rounded-full bg-[#d4af37]/10 text-[#d4af37] mb-2">
            <Heart size={20} className="fill-[#d4af37]" />
          </div>

          <p className="text-2xl md:text-3xl font-serif-cinematic italic text-[#e5dec9]">
            "Somewhere between all those conversations..."
          </p>
          <p className="font-calligraphy text-5xl md:text-7xl text-[#fbf7ee] candle-glow py-2">
            I fell in love with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
