// $lib/__tests__/Tooltip.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import { createRawSnippet, type Snippet } from "svelte";
import type { Position } from "../types";
import Tooltip from "../Tooltip.svelte";

const textSnippet = (text: string): Snippet =>
  createRawSnippet(() => ({ render: () => `<span>${text}</span>` }));

const flush = () => Promise.resolve();

describe("Tooltip", () => {
  it("renders wrapper and children", async () => {
    const { container } = render(Tooltip, {
      props: { children: textSnippet("Trigger") },
    });

    await flush();
    await flush();

    expect(container.textContent).toContain("Trigger");
    expect(container.querySelector('[role="tooltip"]')).toBeNull();
  });

  it("merges external classes", async () => {
    const { container } = render(Tooltip, {
      props: { class: "a b", children: textSnippet("X") },
    });

    const root = container.firstElementChild as HTMLElement;
    expect(root.className).toContain("a");
    expect(root.className).toContain("b");
  });

  it("shows tooltip with open=true", async () => {
    vi.useFakeTimers();

    const { container } = render(Tooltip, {
      props: {
        open: true,
        text: "Hello",
        delay: 0,
        children: textSnippet("X"),
      },
    });

    vi.runAllTimers();
    await flush();

    const bubble = container.querySelector('[role="tooltip"]') as HTMLElement;
    expect(bubble).toBeTruthy();
    expect(bubble.textContent).toContain("Hello");

    vi.useRealTimers();
  });

  it("shows tooltip on hover", async () => {
    vi.useFakeTimers();

    const { container } = render(Tooltip, {
      props: { text: "Hover", delay: 10, children: textSnippet("X") },
    });

    const root = container.firstElementChild as HTMLElement;
    await fireEvent.mouseEnter(root);

    vi.advanceTimersByTime(11);
    await flush();

    const bubble = container.querySelector('[role="tooltip"]');
    expect(bubble).toBeTruthy();

    vi.useRealTimers();
  });

  it("applies position classes", async () => {
    vi.useFakeTimers();

    const entries: [Position, string][] = [
      ["top", "bottom-full"],
      ["bottom", "top-full"],
      ["left", "right-full"],
      ["right", "left-full"],
    ];

    for (const [position, token] of entries) {
      const { container } = render(Tooltip, {
        props: {
          position,
          open: true,
          text: "X",
          delay: 0,
          children: textSnippet("X"),
        },
      });

      vi.runAllTimers();
      await flush();

      const bubble = container.querySelector('[role="tooltip"]') as HTMLElement;
      expect(bubble.className).toContain(token);
    }

    vi.useRealTimers();
  });
});
