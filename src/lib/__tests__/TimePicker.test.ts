// src/lib/__tests__/TimePicker.test.ts
import "./setupLangContext";
import { render, fireEvent, within } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import TimePicker from "../TimePicker.svelte";

const sampleTime = "10:30";

describe("TimePicker", () => {
  it("shows placeholder when value is null", () => {
    const { getByText } = render(TimePicker, {
      props: { placeholder: "Select a time" },
    });
    expect(getByText("Select a time")).toBeTruthy();
  });

  it("renders initial hour and minute based on the value prop", () => {
    const { getAllByRole } = render(TimePicker, {
      props: { value: sampleTime },
    });

    const combos = getAllByRole("combobox");
    const hour = combos[0];
    const minute = combos[1];

    expect(hour.textContent).toContain("10");
    expect(minute.textContent).toContain("30");
  });

  it("emits onChange when hour changes", async () => {
    const handle = vi.fn();
    const { getAllByRole, getByRole } = render(TimePicker, {
      props: { value: "09:00", onChange: handle },
    });

    const combos = getAllByRole("combobox");
    const hourSelect = combos[0];

    await fireEvent.click(hourSelect);

    const listbox = getByRole("listbox");
    const tenOption = within(listbox).getByRole("button", { name: "10" });
    await fireEvent.click(tenOption);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith("10:00");
  });

  it("emits onChange when minute changes", async () => {
    const handle = vi.fn();
    const { getAllByRole, getByRole } = render(TimePicker, {
      props: { value: "10:00", onChange: handle },
    });

    const combos = getAllByRole("combobox");
    const minuteSelect = combos[1];

    await fireEvent.click(minuteSelect);

    const listbox = getByRole("listbox");
    const minuteOption = within(listbox).getByRole("button", { name: "30" });
    await fireEvent.click(minuteOption);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith("10:30");
  });

  it("clears value using Clear button", async () => {
    const handle = vi.fn();
    const { getByText } = render(TimePicker, {
      props: { value: sampleTime, onChange: handle },
    });

    const btn = getByText("Clear");
    await fireEvent.click(btn);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith(null);
  });

  it("switches between 24h and 12h modes", async () => {
    const { getByText } = render(TimePicker);

    const toggle = getByText("12h");
    await fireEvent.click(toggle);

    // Period select exists now
    getByText("Period");

    expect(getByText("24h")).toBeTruthy();
  });
});
