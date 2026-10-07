/**
 * API client for Our Memories Backend
 */

const API_BASE = "/api";

export async function submitRelationshipAnswers(answersPayload) {
  try {
    const response = await fetch(`${API_BASE}/answers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answersPayload),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({ detail: "Network error" }));
      throw new Error(err.detail || "Failed to submit answers");
    }

    const data = await response.json();
    // Also save in localStorage backup
    try {
      const existing = JSON.parse(localStorage.getItem("our_memories_answers_backup") || "[]");
      existing.unshift(data);
      localStorage.setItem("our_memories_answers_backup", JSON.stringify(existing));
    } catch {}

    return { success: true, data };
  } catch (error) {
    console.warn("Backend API POST failed, backing up to localStorage:", error);
    // Offline / Local fallback to never lose her words
    const fallbackRecord = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      ...answersPayload,
      _isLocalBackup: true,
    };
    try {
      const existing = JSON.parse(localStorage.getItem("our_memories_answers_backup") || "[]");
      existing.unshift(fallbackRecord);
      localStorage.setItem("our_memories_answers_backup", JSON.stringify(existing));
    } catch {}
    return { success: true, data: fallbackRecord, fallback: true };
  }
}

export async function fetchRelationshipAnswers(pin = "love2026") {
  try {
    const response = await fetch(`${API_BASE}/answers`, {
      headers: {
        "x-admin-pin": pin,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Invalid Admin PIN");
      }
      throw new Error("Failed to fetch answers");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn("Could not fetch from server, checking local backup:", error.message);
    const local = JSON.parse(localStorage.getItem("our_memories_answers_backup") || "[]");
    if (local.length > 0 && error.message !== "Invalid Admin PIN") {
      return local;
    }
    throw error;
  }
}
