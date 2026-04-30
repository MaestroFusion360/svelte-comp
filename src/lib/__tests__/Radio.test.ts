// $lib/__tests__/Radio.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Radio from "../Radio.svelte";

describe("Radio", () => {
  it("renders with label", () => {
    const { getByLabelText } = render(Radio, { props: { label: "Choice" } });
    expect(getByLabelText("Choice")).toBeTruthy();
  });

  it("sets checked state when clicked", async () => {
    const { getByLabelText } = render(Radio, { props: { label: "Choice" } });
    const radio = getByLabelText("Choice") as HTMLInputElement;
    expect(radio.checked).toBe(false);

    await fireEvent.click(radio);
    expect(radio.checked).toBe(true);
  });

  it("calls onChange with updated checked value", async () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(Radio, {
      props: { label: "Choice", onChange: handleChange },
    });
    const radio = getByLabelText("Choice") as HTMLInputElement;
    await fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("applies size classes correctly", () => {
    const { container } = render(Radio, {
      props: { label: "Test", sz: "lg" },
    });
    const circle = container.querySelector("span[data-state]");
    expect(circle?.className).toContain("w-[18px]");
  });

  it("shows inner dot when checked", () => {
    const { container } = render(Radio, {
      props: { label: "Active", checked: true },
    });
    const dot = container.querySelector("span[data-state] span");
    expect(dot?.className).toContain("opacity-100");
  });

  it("applies neutral variant classes", () => {
    const { container } = render(Radio, {
      props: { label: "Neutral", variant: "neutral" },
    });
    const circle = container.querySelector("span[data-state]");
    expect(circle?.className).toContain("bg-transparent");
  });

  it("respects disabled attribute", async () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(Radio, {
      props: { label: "Disabled", disabled: true, onChange: handleChange },
    });
    const radio = getByLabelText("Disabled") as HTMLInputElement;

    expect(radio.disabled).toBe(true);
    await fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalled();
  });

  it("passes custom class to root wrapper", () => {
    const { container } = render(Radio, {
      props: { label: "Styled", class: "custom-radio" },
    });
    const root = container.querySelector("label");
    expect(root?.className).toContain("custom-radio");
  });
});
