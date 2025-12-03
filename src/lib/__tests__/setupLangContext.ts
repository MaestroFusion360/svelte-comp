// src/lib/__tests__/setupLangContext.ts
import { vi } from "vitest";

vi.mock("svelte", async () => {
  const actual = await vi.importActual<typeof import("svelte")>("svelte");
  return {
    ...actual,
    getContext: (key: string) => {
      if (key === "lang") {
        return { value: "en" };
      }
      return actual.getContext(key);
    },
  };
});
