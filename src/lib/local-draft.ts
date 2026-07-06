"use client";

/**
 * Autosave for the admissions funnel (08-admissions-funnel.md): persists
 * in-progress form values to localStorage so a user who closes the tab or
 * switches devices-in-browser doesn't lose their progress. Client-only.
 */
export function saveDraft<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can fail in private browsing / quota-exceeded contexts —
    // losing autosave is a minor degradation, not a functional blocker.
  }
}

export function loadDraft<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function clearDraft(key: string) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(key);
}
