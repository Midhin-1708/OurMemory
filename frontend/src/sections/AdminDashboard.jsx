import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Calendar, Heart, ArrowLeft, RefreshCw, Trash2, KeyRound } from "lucide-react";
import { fetchRelationshipAnswers } from "../services/api";
import { STORY_CONFIG } from "../data/storyConfig";

export default function AdminDashboard({ onClose }) {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [answersList, setAnswersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchRelationshipAnswers(pin);
      setAnswersList(data);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message || "Incorrect Admin PIN.");
    } finally {
      setLoading(false);
    }
  };

  const reloadAnswers = async () => {
    setLoading(true);
    try {
      const data = await fetchRelationshipAnswers(pin);
      setAnswersList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#07070d] text-[#f7f2ea] overflow-y-auto p-4 sm:p-8 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between pb-6 border-b border-white/10 mb-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#d4af37] hover:underline cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>RETURN TO STORY</span>
        </button>
        <span className="text-xs uppercase tracking-widest text-[#9b9388] font-mono">
          Private Sanctuary Vault
        </span>
      </div>

      {/* Pin Protection Screen */}
      {!isAuthenticated ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass-panel p-8 sm:p-10 rounded-3xl border border-[#d4af37]/30 text-center my-auto space-y-6 shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-[#161624] border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
            <KeyRound size={26} />
          </div>

          <div>
            <h2 className="text-2xl font-serif-cinematic text-[#f7f2ea]">
              Private Vault Access
            </h2>
            <p className="text-xs text-[#c9c0b5]/70 mt-1">
              Enter your secret PIN to read her intimate questionnaire responses.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter PIN (Default: love2026)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full bg-[#0b0b14] border border-white/10 rounded-xl px-4 py-3 text-center text-sm text-[#f7f2ea] focus:outline-none focus:border-[#d4af37] font-mono tracking-widest"
              autoFocus
            />

            {error && <p className="text-xs text-[#e11d48]">{error}</p>}

            <button
              type="submit"
              disabled={loading || !pin}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-black font-semibold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity disabled:opacity-40 cursor-pointer"
            >
              {loading ? "Decrypting..." : "Unlock Answers"}
            </button>
          </form>
        </motion.div>
      ) : (
        /* Authenticated Admin Dashboard */
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-serif-cinematic text-[#f7f2ea]">
                Her Heart's Responses
              </h2>
              <p className="text-xs text-[#c9c0b5]/70 font-mono mt-1">
                Total submissions recorded: {answersList.length}
              </p>
            </div>

            <button
              onClick={reloadAnswers}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141420] border border-white/10 text-xs text-[#d4af37] hover:border-[#d4af37]/50 transition-colors self-start cursor-pointer"
            >
              <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
              <span>Refresh Vault</span>
            </button>
          </div>

          {answersList.length === 0 ? (
            <div className="glass-panel p-12 rounded-3xl text-center space-y-3 border border-white/10">
              <p className="text-lg font-serif-cinematic text-[#c9c0b5]">
                No answers submitted yet.
              </p>
              <p className="text-xs text-[#9b9388]">
                When she fills out "Now It's Your Turn" and clicks Send, her responses will be stored here.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {answersList.map((entry, idx) => (
                <div
                  key={entry.id || idx}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 shadow-2xl space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs font-mono text-[#d4af37]">
                    <span className="flex items-center gap-1.5">
                      <Heart size={14} className="fill-[#e11d48] text-[#e11d48]" />
                      Response #{entry.id}
                    </span>
                    <span className="text-[#9b9388] flex items-center gap-1">
                      <Calendar size={13} />
                      {new Date(entry.created_at).toLocaleString()}
                    </span>
                  </div>

                  {/* 8 Questions & Her Answers */}
                  <div className="grid grid-cols-1 gap-6">
                    {STORY_CONFIG.questions.map((q) => {
                      const answerText = entry[q.id];
                      return (
                        <div key={q.id} className="p-4 rounded-xl bg-[#0e0e18] border border-white/5 space-y-1.5">
                          <p className="text-xs font-mono uppercase tracking-wider text-[#d4af37]/80">
                            Q{q.number}: {q.title}
                          </p>
                          <p className="text-sm font-serif-cinematic text-[#f7f2ea] whitespace-pre-wrap leading-relaxed">
                            {answerText && answerText.trim() ? (
                              answerText
                            ) : (
                              <span className="italic text-neutral-500 font-sans text-xs">
                                (No response provided)
                              </span>
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
