// src/utils/index.ts

// -------------------------------------------------------------------------------
//                                     UID
// -------------------------------------------------------------------------------
export const uid = (prefix = ""): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2);
  return `${prefix}${timestamp}_${random}`;
};

// -------------------------------------------------------------------------------
//                                     CX
// -------------------------------------------------------------------------------
type ClassPrimitive = string | number | bigint;
interface ClassDictionary {
  [key: string]: boolean | null | undefined;
}
type ClassArray = Array<
  ClassPrimitive | ClassDictionary | ClassArray | null | boolean | undefined
>;
type ClassValue =
  | ClassPrimitive
  | ClassDictionary
  | ClassArray
  | null
  | boolean
  | undefined;

export function cx(...classes: ClassValue[]): string {
  const result: string[] = [];

  const append = (value: ClassValue): void => {
    if (value === null || value === undefined || value === false) {
      return;
    }

    if (typeof value === "string") {
      result.push(...value.split(/\s+/).filter(Boolean));
      return;
    }

    if (typeof value === "number" || typeof value === "bigint") {
      result.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      for (const entry of value) {
        append(entry);
      }
      return;
    }

    if (typeof value === "object") {
      for (const [key, condition] of Object.entries(value as ClassDictionary)) {
        if (condition) {
          result.push(key);
        }
      }
    }
  };

  for (const cls of classes) {
    append(cls);
  }

  return result.join(" ");
}

// -------------------------------------------------------------------------------
//                                  CLAMP
// -------------------------------------------------------------------------------
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

// -------------------------------------------------------------------------------
//                                   TIMES
// -------------------------------------------------------------------------------
export function times<T>(count: number, fn: (i: number) => T): T[] {
  return Array.from({ length: count }, (_, i) => fn(i));
}

// -------------------------------------------------------------------------------
//                             FORMAT FILE SIZE
// -------------------------------------------------------------------------------
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

// -------------------------------------------------------------------------------
//                                 DEBOUNCE
// -------------------------------------------------------------------------------

export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay: number,
): (...args: Args) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// -------------------------------------------------------------------------------
//                                 THROTTLE
// -------------------------------------------------------------------------------

export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  limit: number,
): (...args: Args) => void {
  let inThrottle: boolean;
  return (...args: Args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// -------------------------------------------------------------------------------
//                              STORAGE HELPERS
// -------------------------------------------------------------------------------

const hasBrowserStorage =
  typeof window !== "undefined" && !!window.localStorage;
const getLocalStorage = () => (hasBrowserStorage ? window.localStorage : null);

export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    const ls = getLocalStorage();
    if (!ls) return defaultValue;
    try {
      const item = ls.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set: <T>(key: string, value: T): void => {
    const ls = getLocalStorage();
    if (!ls) return;
    try {
      ls.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("Storage set failed:", error);
    }
  },

  remove: (key: string): void => {
    const ls = getLocalStorage();
    if (!ls) return;
    try {
      ls.removeItem(key);
    } catch (error) {
      console.warn("Storage remove failed:", error);
    }
  },
};

// -------------------------------------------------------------------------------
//                                   TOAST HELPERS
// -------------------------------------------------------------------------------

import type { ToastVariant } from "$lib/types";

export const TOAST_CONFIG: Record<
  ToastVariant,
  { title: string; message: string; duration?: number }
> = {
  success: {
    title: "Success",
    message: "Operation completed successfully!",
    duration: 3000,
  },
  danger: {
    title: "Error",
    message: "Something went wrong!",
    duration: 5000,
  },
  warning: {
    title: "Warning",
    message: "Please check your input.",
    duration: 4000,
  },
  info: {
    title: "Info",
    message: "New update available!",
    duration: 3000,
  },
};

export const getToastConfig = (
  variant: ToastVariant,
  customMessage?: string,
) => ({
  ...TOAST_CONFIG[variant],
  message: customMessage || TOAST_CONFIG[variant].message,
});

// -------------------------------------------------------------------------------
//                                   DATE HELPERS
// -------------------------------------------------------------------------------

function normalizeDate(
  value: Date | string | number | null | undefined,
): Date | null {
  if (value == null) return null;
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }
  if (typeof value === "number") {
    const asDate = new Date(value);
    return Number.isNaN(asDate.getTime()) ? null : asDate;
  }
  if (typeof value === "string") {
    const timeOnly =
      value.includes(":") &&
      !value.includes("T") &&
      !/^\d{4}-\d{2}-\d{2}/.test(value);
    const normalized = timeOnly ? `1970-01-01T${value}` : value;
    const parsed = new Date(normalized);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
}

export const formatDate = (
  value: Date | string | number | null | undefined,
  locale = "en-US",
  options?: Intl.DateTimeFormatOptions,
): string => {
  const date = normalizeDate(value);
  if (!date) return "";
  const fmt: Intl.DateTimeFormatOptions = options ?? {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  try {
    return new Intl.DateTimeFormat(locale, fmt).format(date);
  } catch {
    return date.toLocaleDateString();
  }
};

export const formatTime = (
  value: Date | string | number | null | undefined,
  locale = "en-US",
  options?: Intl.DateTimeFormatOptions,
): string => {
  const date = normalizeDate(value);
  if (!date) return "";
  const fmt: Intl.DateTimeFormatOptions = options ?? {
    hour: "2-digit",
    minute: "2-digit",
  };
  try {
    return new Intl.DateTimeFormat(locale, fmt).format(date);
  } catch {
    return date.toLocaleTimeString();
  }
};

// -------------------------------------------------------------------------------
//                                   DOM HELPERS
// -------------------------------------------------------------------------------

export const focusFirstInteractive = (element: HTMLElement): void => {
  const focusable = element.querySelector<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  focusable?.focus();
};

export const trapFocus = (element: HTMLElement): (() => void) => {
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  element.addEventListener("keydown", handleKeyDown);

  return () => {
    element.removeEventListener("keydown", handleKeyDown);
  };
};
// -------------------------------------------------------------------------------
