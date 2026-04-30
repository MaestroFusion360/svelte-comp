// $lib/__tests__/ProgressBar.test.ts
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import ProgressBar from "../ProgressBar.svelte";

describe("ProgressBar", () => {
  it("renders with default props", () => {
    const { container } = render(ProgressBar);
    const progressBar = container.querySelector(
      '[role="progressbar"]',
    ) as HTMLDivElement;

    expect(progressBar).toBeDefined();
    expect(progressBar.getAttribute("aria-valuenow")).toBe("0");
  });

  it("shows correct progress value", () => {
    const { container } = render(ProgressBar, {
      props: { value: 75 },
    });

    const progressBar = container.querySelector(
      '[role="progressbar"]',
    ) as HTMLDivElement;
    const progressFill = container.querySelector(
      ".transition-\\[width\\]",
    ) as HTMLDivElement;

    expect(progressBar.getAttribute("aria-valuenow")).toBe("75");
    expect(progressFill.style.width).toBe("75%");
  });

  it("clamps value between 0 and 100", () => {
    const { container } = render(ProgressBar, {
      props: { value: 150 },
    });

    const progressBar = container.querySelector(
      '[role="progressbar"]',
    ) as HTMLDivElement;
    const progressFill = container.querySelector(
      ".transition-\\[width\\]",
    ) as HTMLDivElement;

    expect(progressBar.getAttribute("aria-valuenow")).toBe("100");
    expect(progressFill.style.width).toBe("100%");
  });

  it("handles negative values", () => {
    const { container } = render(ProgressBar, {
      props: { value: -10 },
    });

    const progressBar = container.querySelector(
      '[role="progressbar"]',
    ) as HTMLDivElement;
    const progressFill = container.querySelector(
      ".transition-\\[width\\]",
    ) as HTMLDivElement;

    expect(progressBar.getAttribute("aria-valuenow")).toBe("0");
    expect(progressFill.style.width).toBe("0%");
  });

  it("shows indeterminate state", () => {
    const { container } = render(ProgressBar, {
      props: { indeterminate: true },
    });

    const progressBar = container.querySelector(
      '[role="progressbar"]',
    ) as HTMLDivElement;
    const indeterminateElement = container.querySelector(".pb-indet");

    expect(progressBar.getAttribute("aria-valuenow")).toBeNull();
    expect(indeterminateElement).toBeDefined();
  });

  it("applies correct size classes", () => {
    const { container } = render(ProgressBar, {
      props: { sz: "lg" },
    });

    const track = container.querySelector(
      ".absolute.top-1\\/2.-translate-y-1\\/2.w-full",
    );
    expect(track?.className).toContain("h-[7px]");
  });

  it("applies correct variant classes", () => {
    const { container } = render(ProgressBar, {
      props: { variant: "neutral" },
    });

    const progressFill = container.querySelector(".transition-\\[width\\]");
    expect(progressFill?.className).toContain("bg-[var(--color-bg-secondary)]");
  });

  it("accepts external class", () => {
    const { container } = render(ProgressBar, {
      props: { class: "custom-class" },
    });

    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar?.className).toContain("custom-class");
  });
});
