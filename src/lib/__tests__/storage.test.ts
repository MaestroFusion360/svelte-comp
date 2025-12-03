import { describe, it, expect, vi, afterEach } from "vitest";

const loadStorage = async () => {
  vi.resetModules();
  return (await import("../../utils/index")).storage;
};

const createMockLocalStorage = () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, val: string) => {
      store[key] = String(val);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("storage helper", () => {
  it("is safe when window/localStorage are unavailable (SSR)", async () => {
    vi.stubGlobal("window", undefined as unknown as Window);

    const storage = await loadStorage();

    expect(storage.get("missing", "fallback")).toBe("fallback");
    expect(() => storage.set("k", "v")).not.toThrow();
    expect(() => storage.remove("k")).not.toThrow();
  });

  it("persists values when localStorage exists", async () => {
    const mockLocalStorage = createMockLocalStorage();
    vi.stubGlobal("window", { localStorage: mockLocalStorage });

    const storage = await loadStorage();

    storage.set("user", { id: 1 });
    expect(mockLocalStorage.getItem("user")).toBe(JSON.stringify({ id: 1 }));

    expect(storage.get("user", null)).toEqual({ id: 1 });

    storage.remove("user");
    expect(mockLocalStorage.getItem("user")).toBeNull();
  });
});
