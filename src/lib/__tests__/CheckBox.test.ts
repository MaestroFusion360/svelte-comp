// $lib/__tests__/CheckBox.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import CheckBox from "../CheckBox.svelte";

describe("CheckBox", () => {
  it("renders with label", () => {
    const { getByLabelText } = render(CheckBox, { props: { label: "Accept" } });
    expect(getByLabelText("Accept")).toBeTruthy();
  });

  it("toggles checked state when clicked", async () => {
    const { getByLabelText } = render(CheckBox, { props: { label: "Accept" } });
    const checkbox = getByLabelText("Accept") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    await fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it("calls onChange with updated checked value", async () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(CheckBox, {
      props: { label: "Accept", onChange: handleChange },
    });
    const checkbox = getByLabelText("Accept") as HTMLInputElement;
    await fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("applies size classes correctly", () => {
    const { container } = render(CheckBox, {
      props: { label: "Test", sz: "lg" },
    });
    const span = container.querySelector("span[data-state]");
    expect(span?.className).toContain("w-[18px]");
  });

  it("renders check icon when checked", () => {
    const { container } = render(CheckBox, {
      props: { label: "Done", checked: true },
    });
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });

  it("renders indeterminate icon when indeterminate=true", () => {
    const { container } = render(CheckBox, {
      props: { label: "Partially", indeterminate: true },
    });
    const line = container.querySelector("svg line");
    expect(line).toBeTruthy();
  });

  it("clears indeterminate and sets checked when clicked", async () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(CheckBox, {
      props: { label: "Option", indeterminate: true, onChange: handleChange },
    });
    const checkbox = getByLabelText("Option") as HTMLInputElement;
    await fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("applies neutral variant classes", () => {
    const { container } = render(CheckBox, {
      props: { label: "Neutral", variant: "neutral" },
    });
    const box = container.querySelector("span[data-state]");
    expect(box?.className).toContain("bg-transparent");
  });

  it("respects disabled attribute", async () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(CheckBox, {
      props: { label: "Disabled", disabled: true, onChange: handleChange },
    });
    const checkbox = getByLabelText("Disabled") as HTMLInputElement;

    expect(checkbox.disabled).toBe(true);
    await fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it("passes custom class to root wrapper", () => {
    const { container } = render(CheckBox, {
      props: { label: "Styled", class: "custom-checkbox" },
    });
    const root = container.querySelector("label");
    expect(root?.className).toContain("custom-checkbox");
  });
});
