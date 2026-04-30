// $lib/__tests__/ThemeToggle.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import ThemeToggle from "../ThemeToggle.svelte";

const STORAGE_KEY = "theme-toggle:dark";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

afterEach(() => {
  document.documentElement.classList.remove("dark");
});

describe("ThemeToggle", () => {
  it("uses stored preference on mount", async () => {
    localStorage.setItem(STORAGE_KEY, "true");

    const { getByRole } = render(ThemeToggle);
    await Promise.resolve();

    const button = getByRole("button");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(button.getAttribute("aria-label")).toBe("Switch to light mode");
  });

  it("toggles mode on click and persists", async () => {
    const { getByRole } = render(ThemeToggle);
    const button = getByRole("button");

    await fireEvent.click(button);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem(STORAGE_KEY)).toBe("true");
    expect(button.getAttribute("aria-label")).toBe("Switch to light mode");
  });
});
