/**
 * Returns a stable per-browser device id, persisted in localStorage.
 * Used as the `deviceId` value sent to the StackEarn download API.
 */
const STORAGE_KEY = "stackearn:device-id";

function generateId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `dev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getDeviceId(): string {
  if (typeof window === "undefined") return "ssr";
  try {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (existing) return existing;
    const fresh = generateId();
    window.localStorage.setItem(STORAGE_KEY, fresh);
    return fresh;
  } catch {
    return generateId();
  }
}
