// src/lib/__tests__/Card.test.ts
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import type { Snippet } from "svelte";
import Card from "../Card.svelte";
import { TEXT } from "../types";

const textSnippet = (text: string) => (() => text) as unknown as Snippet;

describe("Card", () => {
  it("renders base card with content area", () => {
    const { container } = render(Card);
    const card = container.firstElementChild as HTMLElement;

    expect(card).toBeTruthy();
    expect(card.className).toContain("bg-[var(--color-bg-surface)]");
    expect(card.className).toContain("border");
    expect(card.className).toContain("border-[var(--border-color-default)]");
    expect(card.className).toContain("rounded-xl");
    expect(card.className).toContain("shadow-sm");
    expect(card.className).toContain("overflow-hidden");

    const content = card.querySelector("[class*='px-']");
    expect(content).toBeTruthy();
  });

  it("merges external classes with base classes", () => {
    const { container } = render(Card, {
      props: { class: "my-custom-class another-class" },
    });
    const card = container.firstElementChild as HTMLElement;

    expect(card.className).toContain("my-custom-class");
    expect(card.className).toContain("another-class");
    expect(card.className).toContain("bg-[var(--color-bg-surface)]");
    expect(card.className).toContain("border");
  });

  it("does not render header or footer by default", () => {
    const { container } = render(Card);
    const card = container.firstElementChild as HTMLElement;

    expect(card.querySelector('[class*="border-b"]')).toBeNull();
    expect(card.querySelector('[class*="border-t"]')).toBeNull();
  });

  it("renders header, content and footer in correct order", () => {
    const { container } = render(Card, {
      props: {
        header: textSnippet("Header"),
        children: textSnippet("Body"),
        footer: textSnippet("Footer"),
      },
    });

    const card = container.firstElementChild!;
    const header = card.querySelector('[class*="border-b"]') as HTMLElement;
    const body = card.querySelector('[class*="flex-1"]') as HTMLElement;
    const footer = card.querySelector('[class*="border-t"]') as HTMLElement;

    const order = Array.from(card.children);

    expect(header).toBeTruthy();
    expect(body).toBeTruthy();
    expect(footer).toBeTruthy();

    expect(order[0]).toBe(header);
    expect(order[1]).toBe(body);
    expect(order[2]).toBe(footer);
  });

  it("applies borders and padding for header/footer by default", () => {
    const { container } = render(Card, {
      props: {
        header: textSnippet("Header"),
        footer: textSnippet("Footer"),
        children: textSnippet("Body"),
      },
    });

    const card = container.firstElementChild!;
    const header = card.querySelector('[class*="border-b"]') as HTMLElement;
    const footer = card.querySelector('[class*="border-t"]') as HTMLElement;

    expect(header).toBeTruthy();
    expect(footer).toBeTruthy();

    expect(header.className).toContain("border-[var(--border-color-default)]");
    expect(footer.className).toContain("border-[var(--border-color-default)]");
    expect(header.className).toMatch(/px-\d/);
    expect(footer.className).toMatch(/px-\d/);
  });

  it("removes borders and padding when flushHeader/flushFooter true", () => {
    const { container } = render(Card, {
      props: {
        header: textSnippet("Header"),
        footer: textSnippet("Footer"),
        children: textSnippet("Body"),
        flushHeader: true,
        flushFooter: true,
      },
    });

    const card = container.firstElementChild as HTMLElement;
    const header = card.firstElementChild as HTMLElement;
    const footer = card.lastElementChild as HTMLElement;

    expect(card?.firstElementChild).toBe(header);
    expect(card?.lastElementChild).toBe(footer);

    expect(header.className).not.toContain("border-b");
    expect(header.className).not.toMatch(/px-\d/);

    expect(footer.className).not.toContain("border-t");
    expect(footer.className).not.toMatch(/px-\d/);
  });

  it("uses correct default text size (md)", () => {
    const { container } = render(Card);
    const card = container.firstElementChild as HTMLElement;

    expect(card.className).toContain(TEXT.md);
  });

  it("applies correct text size classes for all `sz` values", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    sizes.forEach((sz) => {
      const { container } = render(Card, {
        props: { sz, children: textSnippet("X") },
      });
      const card = container.firstElementChild as HTMLElement;

      expect(card.className).toContain(TEXT[sz]);
    });
  });

  it("applies correct padding to content for each size", () => {
    const cases = [
      { sz: "xs", pad: "px-3 py-2" },
      { sz: "sm", pad: "px-4 py-2" },
      { sz: "md", pad: "px-5 py-3" },
      { sz: "lg", pad: "px-6 py-4" },
      { sz: "xl", pad: "px-7 py-5" },
    ] as const;

    cases.forEach(({ sz, pad }) => {
      const { container } = render(Card, {
        props: { sz, children: textSnippet("X") },
      });
      const content = container.querySelector(`.${pad.replace(" ", ".")}`);
      expect(content).toBeTruthy();
    });
  });

  it("content area always has flex-1 and min-h-0", () => {
    const { container } = render(Card);
    const content = container.querySelector("[class*='px-']") as HTMLElement;

    expect(content.className).toContain("flex-1");
    expect(content.className).toContain("min-h-0");
  });
});
