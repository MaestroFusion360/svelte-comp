// $lib/__tests__/Slider.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Slider from "../Slider.svelte";

describe("Slider", () => {
  it("renders with default props", () => {
    const { container } = render(Slider);
    const slider = container.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;

    expect(slider).toBeDefined();
    expect(slider.value).toBe("0");
    expect(slider.min).toBe("0");
    expect(slider.max).toBe("100");
    expect(slider.step).toBe("1");
  });

  it("respects custom value, min, max and step", () => {
    const { container } = render(Slider, {
      props: {
        value: 50,
        min: 0,
        max: 200,
        step: 10,
      },
    });

    const slider = container.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    expect(slider.value).toBe("50");
    expect(slider.min).toBe("0");
    expect(slider.max).toBe("200");
    expect(slider.step).toBe("10");
  });

  it("updates value on input", async () => {
    const mockOnInput = vi.fn();
    const { container } = render(Slider, {
      props: { onInput: mockOnInput },
    });

    const slider = container.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    slider.value = "75";
    await fireEvent.input(slider);

    expect(mockOnInput).toHaveBeenCalledWith(75);
  });

  it("snaps to step values", async () => {
    const mockOnInput = vi.fn();
    const { container } = render(Slider, {
      props: {
        value: 0,
        min: 0,
        max: 100,
        step: 10,
        onInput: mockOnInput,
      },
    });

    const slider = container.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    slider.value = "47";
    await fireEvent.input(slider);

    expect(mockOnInput).toHaveBeenCalledWith(50);
  });

  it("handles disabled state", () => {
    const { container } = render(Slider, {
      props: { disabled: true },
    });

    const slider = container.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    const wrapper = container.querySelector("div");

    expect(slider.disabled).toBe(true);
    expect(wrapper?.className).toContain("cursor-not-allowed");
    expect(wrapper?.className).toContain("opacity-[var(--opacity-disabled)]");
  });

  it("shows value when showValue is true", () => {
    const { getByText } = render(Slider, {
      props: { showValue: true, value: 42 },
    });

    expect(getByText("42")).toBeTruthy();
  });

  it("applies correct size classes", () => {
    const { container } = render(Slider, {
      props: { sz: "xl" },
    });

    const track = container.querySelector(
      ".absolute.top-1\\/2.-translate-y-1\\/2.w-full",
    );
    expect(track?.className).toContain("h-[8px]");
    const input = container.querySelector('input[type="range"]');
    expect(input?.className).toContain("[&::-webkit-slider-thumb]:w-7");
    expect(input?.className).toContain("[&::-webkit-slider-thumb]:h-7");
  });

  it("applies correct variant classes", () => {
    const { container } = render(Slider, {
      props: { variant: "neutral" },
    });

    const wrapper = container.querySelector("div");
    expect(wrapper?.innerHTML).toContain("bg-[var(--color-bg-secondary)]");
  });

  it("handles keyboard navigation", async () => {
    const mockOnInput = vi.fn();
    const { container } = render(Slider, {
      props: { value: 50, onInput: mockOnInput },
    });

    const slider = container.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;

    await fireEvent.keyDown(slider, { key: "ArrowRight" });
    expect(mockOnInput).toHaveBeenCalledWith(51);

    mockOnInput.mockClear();
    const { container: container2 } = render(Slider, {
      props: { value: 50, onInput: mockOnInput },
    });
    const slider2 = container2.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    await fireEvent.keyDown(slider2, { key: "ArrowLeft" });
    expect(mockOnInput).toHaveBeenCalledWith(49);

    mockOnInput.mockClear();
    const { container: container3 } = render(Slider, {
      props: { value: 50, onInput: mockOnInput },
    });
    const slider3 = container3.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    await fireEvent.keyDown(slider3, { key: "Home" });
    expect(mockOnInput).toHaveBeenCalledWith(0);

    mockOnInput.mockClear();
    const { container: container4 } = render(Slider, {
      props: { value: 50, onInput: mockOnInput },
    });
    const slider4 = container4.querySelector(
      'input[type="range"]',
    ) as HTMLInputElement;
    await fireEvent.keyDown(slider4, { key: "End" });
    expect(mockOnInput).toHaveBeenCalledWith(100);
  });

  it("does not respond to track click when disabled", async () => {
    const mockOnInput = vi.fn();
    const { container } = render(Slider, {
      props: { disabled: true, onInput: mockOnInput },
    });

    const wrapper = container.querySelector("div") as HTMLDivElement;
    await fireEvent.click(wrapper);

    expect(mockOnInput).not.toHaveBeenCalled();
  });

  it("accepts external class", () => {
    const { container } = render(Slider, {
      props: { class: "custom-slider-class" },
    });

    const wrapper = container.querySelector("div");
    expect(wrapper?.className).toContain("custom-slider-class");
  });
});
