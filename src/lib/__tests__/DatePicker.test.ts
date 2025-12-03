// $lib/__tests__/DatePicker.test.ts
import "./setupLangContext";
import { fireEvent, render } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import DatePicker from "../DatePicker.svelte";

const isoDate = "2025-05-20";

describe("DatePicker", () => {
  it("renders placeholder text when no value is provided", () => {
    const { getByText } = render(DatePicker, {
      props: { placeholder: "Pick a day" },
    });
    expect(getByText("Pick a day")).toBeTruthy();
  });

  it("binds the passed value to the hidden input", () => {
    const { container } = render(DatePicker, { props: { value: isoDate } });
    const input = container.querySelector(
      'input[type="date"]',
    ) as HTMLInputElement;
    expect(input.value).toBe(isoDate);
  });

  it("emits onChange when the native input changes", async () => {
    const handle = vi.fn();
    const { container } = render(DatePicker, { props: { onChange: handle } });
    const input = container.querySelector(
      'input[type="date"]',
    ) as HTMLInputElement;

    await fireEvent.change(input, { target: { value: isoDate } });
    expect(handle).toHaveBeenCalledWith(isoDate);
    expect(input.value).toBe(isoDate);
  });

  it("clears the value when clicking Clear", async () => {
    const handle = vi.fn();
    const { getByText, container } = render(DatePicker, {
      props: { value: isoDate, onChange: handle },
    });
    await fireEvent.click(getByText("Clear"));

    expect(handle).toHaveBeenCalledWith(null);
    const input = container.querySelector(
      'input[type="date"]',
    ) as HTMLInputElement;
    expect(input.value).toBe("");
  });
});
