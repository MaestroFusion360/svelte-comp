// $lib/__tests__/Switch.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Switch from "../Switch.svelte";

describe("Switch", () => {
  it("toggles state when clicked", async () => {
    const { container } = render(Switch);
    const switchButton = container.querySelector("button") as HTMLButtonElement;

    expect(switchButton.getAttribute("aria-pressed")).toBe("false");
    await fireEvent.click(switchButton);
    expect(switchButton.getAttribute("aria-pressed")).toBe("true");
  });

  it("respects initial checked state", () => {
    const { container } = render(Switch, {
      props: { checked: true },
    });

    const switchButton = container.querySelector("button") as HTMLButtonElement;
    expect(switchButton.getAttribute("aria-pressed")).toBe("true");
  });

  it("handles disabled state", () => {
    const { container } = render(Switch, {
      props: { disabled: true },
    });

    const switchButton = container.querySelector("button") as HTMLButtonElement;
    expect(switchButton.disabled).toBe(true);
  });

  it("calls onChange when toggled", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(Switch, {
      props: { onChange: mockOnChange },
    });

    const switchButton = container.querySelector("button") as HTMLButtonElement;
    await fireEvent.click(switchButton);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it("applies correct size classes", () => {
    const { container } = render(Switch, {
      props: { sz: "lg" },
    });

    const switchButton = container.querySelector("button");
    expect(switchButton?.className).toContain("w-14");
  });
});
