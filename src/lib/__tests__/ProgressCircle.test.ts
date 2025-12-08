// $lib/__tests__/ProgressCircle.test.ts
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import ProgressCircle from "../ProgressCircle.svelte";

describe("ProgressCircle", () => {
  it("renders with default props", () => {
    const { container } = render(ProgressCircle);
    const progress = container.querySelector('[role="progressbar"]');
    const text = container.textContent;

    expect(progress).toBeTruthy();
    expect(progress?.getAttribute("aria-valuenow")).toBe("0");
    expect(text).toContain("0%");
  });

  it("shows correct progress value", () => {
    const { container } = render(ProgressCircle, { props: { value: 75 } });
    const progress = container.querySelector('[role="progressbar"]');
    const bar = container.querySelector(".pc-bar");
    const circAttr = Number(
      bar?.getAttribute("stroke-dasharray")?.split(" ")[0] ?? 0,
    );
    const expectedOffset = ((100 - 75) / 100) * circAttr;

    expect(progress?.getAttribute("aria-valuenow")).toBe("75");
    expect(Number(bar?.getAttribute("stroke-dashoffset"))).toBeCloseTo(
      expectedOffset,
      4,
    );
  });

  it("clamps values above 100", () => {
    const { container } = render(ProgressCircle, { props: { value: 150 } });
    const progress = container.querySelector('[role="progressbar"]');
    const bar = container.querySelector(".pc-bar");
    const offset = Number(bar?.getAttribute("stroke-dashoffset"));

    expect(progress?.getAttribute("aria-valuenow")).toBe("100");
    expect(offset).toBeCloseTo(0, 4);
  });

  it("clamps negative values to 0", () => {
    const { container } = render(ProgressCircle, { props: { value: -25 } });
    const progress = container.querySelector('[role="progressbar"]');
    const bar = container.querySelector(".pc-bar");
    const circAttr = Number(
      bar?.getAttribute("stroke-dasharray")?.split(" ")[0] ?? 0,
    );

    expect(progress?.getAttribute("aria-valuenow")).toBe("0");
    expect(Number(bar?.getAttribute("stroke-dashoffset"))).toBeCloseTo(circAttr, 4);
  });

  it("shows indeterminate state", () => {
    const { container } = render(ProgressCircle, {
      props: { indeterminate: true },
    });
    const progress = container.querySelector('[role="progressbar"]');
    const indet = container.querySelector(".pc-indet");

    expect(progress?.getAttribute("aria-valuenow")).toBeNull();
    expect(indet).toBeTruthy();
  });

  it("applies size styles", () => {
    const { container, rerender } = render(ProgressCircle, { props: { sz: "md" } });
    const ringWrapper = () =>
      container.querySelector(
        ".relative.inline-flex.items-center.justify-center",
      ) as HTMLDivElement;

    const mdWidth = ringWrapper()?.style.width;

    rerender({ sz: "lg" });
    const lgWidth = ringWrapper()?.style.width;

    expect(mdWidth).not.toBe("");
    expect(lgWidth).not.toBe(mdWidth);
  });

  it("applies neutral variant stroke", () => {
    const { container } = render(ProgressCircle, {
      props: { variant: "neutral" },
    });
    const bar = container.querySelector(".pc-bar");

    expect(bar?.classList.contains("stroke-[var(--color-bg-secondary)]")).toBe(
      true,
    );
  });
});
