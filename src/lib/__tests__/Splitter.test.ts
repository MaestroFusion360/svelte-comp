// $lib/__tests__/Splitter.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Splitter from "../Splitter.svelte";

describe("Splitter", () => {
  it("renders horizontal layout by default", () => {
    const { container } = render(Splitter);
    const root = container.firstElementChild as HTMLElement;
    expect(root.className).toContain("flex");

    const firstPanel = root.children[0] as HTMLElement;
    expect(firstPanel.style.width).toBe("30%");
  });

  it("renders vertical layout when direction is vertical", () => {
    const { container } = render(Splitter, {
      props: { direction: "vertical", initialSize: 40 },
    });

    const root = container.firstElementChild as HTMLElement;
    expect(root.className).toContain("flex-col");

    const firstPanel = root.children[0] as HTMLElement;
    expect(firstPanel.style.height).toBe("40%");
  });

  it("resizes when dragging the divider", async () => {
    const { container } = render(Splitter, {
      props: { initialSize: 30 },
    });

    const root = container.firstElementChild as HTMLElement;
    Object.defineProperty(root, "offsetWidth", {
      value: 200,
      configurable: true,
    });

    const firstPanel = root.children[0] as HTMLElement;
    const divider = root.children[1] as HTMLElement;

    await fireEvent.pointerDown(divider, { clientX: 0 });
    await fireEvent.pointerMove(document, { clientX: 20 });
    await fireEvent.pointerUp(document);

    expect(parseFloat(firstPanel.style.width)).toBeCloseTo(40, 1);
  });
});
