// src/lib/__tests__/TimePickerNew.test.ts
import "./setupLangContext";
import { render, fireEvent, within } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import TimePickerNew from "../TimePickerNew.svelte";

const sampleTime = "10:30";

function renderPicker(props = {}) {
  return render(TimePickerNew, {
    props: {
      label: "Time",
      placeholder: "Select a time",
      ...props,
    },
  });
}

async function openPicker(utils: ReturnType<typeof renderPicker>) {
  const trigger = utils.getByRole("button", { name: "Time" });
  await fireEvent.click(trigger);
  return utils.getByRole("dialog", { name: "Time" });
}

describe("TimePickerNew", () => {
  it("shows placeholder when value is null", () => {
    const { getAllByText } = renderPicker();

    expect(getAllByText("Select a time").length).toBeGreaterThan(0);
  });

  it("renders initial value on trigger and selected preview", () => {
    const { getAllByText } = renderPicker({
      value: sampleTime,
    });

    expect(getAllByText("10:30").length).toBeGreaterThan(0);
  });

  it("opens popup from the single trigger", async () => {
    const utils = renderPicker();

    const dialog = await openPicker(utils);

    expect(dialog).toBeTruthy();
    expect(within(dialog).getByText("Hour")).toBeTruthy();
    expect(within(dialog).getByText("Minute")).toBeTruthy();
  });

  it("emits onChange when hour changes", async () => {
    const handle = vi.fn();
    const utils = renderPicker({
      value: "09:00",
      onChange: handle,
    });

    const dialog = await openPicker(utils);
    const tenButtons = within(dialog).getAllByRole("button", { name: "10" });

    await fireEvent.click(tenButtons[0]);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith("10:00");
  });

  it("emits onChange when minute changes", async () => {
    const handle = vi.fn();
    const utils = renderPicker({
      value: "10:00",
      onChange: handle,
    });

    const dialog = await openPicker(utils);
    const minuteOption = within(dialog).getByRole("button", { name: "30" });

    await fireEvent.click(minuteOption);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith("10:30");
  });

  it("clears value using Clear button", async () => {
    const handle = vi.fn();
    const utils = renderPicker({
      value: sampleTime,
      onChange: handle,
    });

    const dialog = await openPicker(utils);
    const clearButton = within(dialog).getByRole("button", { name: "Clear" });

    await fireEvent.click(clearButton);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith(null);
  });

  it("switches between 24h and 12h modes", async () => {
    const handle = vi.fn();
    const utils = renderPicker({
      value: "15:04",
      onChange: handle,
    });

    let dialog = await openPicker(utils);

    const switchTo12h = within(dialog).getByRole("button", { name: "12h" });
    await fireEvent.click(switchTo12h);

    dialog = utils.getByRole("dialog", { name: "Time" });

    expect(within(dialog).getByText("Period")).toBeTruthy();
    expect(within(dialog).getByRole("button", { name: "24h" })).toBeTruthy();
    expect(handle).toHaveBeenLastCalledWith("15:04");
    expect(utils.getAllByText("03:04 PM").length).toBeGreaterThan(0);
  });

  it("emits ISO HH:MM value when period changes in english mode", async () => {
    const handle = vi.fn();
    const utils = renderPicker({
      value: "03:15",
      initialSystem: "english",
      onChange: handle,
    });

    const dialog = await openPicker(utils);
    const pmButton = within(dialog).getByRole("button", { name: "PM" });

    await fireEvent.click(pmButton);

    expect(handle).toHaveBeenCalledWith("15:15");
  });

  it("selects current time using Now button", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-30T13:37:00"));

    const handle = vi.fn();
    const utils = renderPicker({
      step: 60,
      onChange: handle,
    });

    const dialog = await openPicker(utils);
    const nowButton = within(dialog).getByRole("button", { name: "Now" });

    await fireEvent.click(nowButton);

    expect(handle).toHaveBeenCalledWith("13:37");

    vi.useRealTimers();
  });

  it("snaps Now minutes to step", async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-30T13:37:00"));

    const handle = vi.fn();
    const utils = renderPicker({
      step: 900,
      onChange: handle,
    });

    const dialog = await openPicker(utils);
    const nowButton = within(dialog).getByRole("button", { name: "Now" });

    await fireEvent.click(nowButton);

    expect(handle).toHaveBeenCalledWith("13:30");

    vi.useRealTimers();
  });

  it("closes popup using OK button", async () => {
    const utils = renderPicker();

    const dialog = await openPicker(utils);
    const okButton = within(dialog).getByRole("button", { name: "OK" });

    await fireEvent.click(okButton);

    expect(utils.queryByRole("dialog", { name: "Time" })).toBeNull();
  });

  it("closes popup on Escape", async () => {
    const utils = renderPicker();

    await openPicker(utils);
    await fireEvent.keyDown(window, { key: "Escape" });

    expect(utils.queryByRole("dialog", { name: "Time" })).toBeNull();
  });

  it("does not open when disabled", async () => {
    const utils = renderPicker({
      disabled: true,
    });

    const trigger = utils.getByRole("button", { name: "Time" });
    await fireEvent.click(trigger);

    expect(utils.queryByRole("dialog", { name: "Time" })).toBeNull();
  });
});
