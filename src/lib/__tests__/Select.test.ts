// $lib/__tests__/Select.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Select from "../Select.svelte";

const baseOptions = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Disabled Option", value: "3", disabled: true },
];

const renderSelect = (props: Record<string, unknown> = {}) =>
  render(Select, {
    props: {
      label: "Choose something",
      placeholder: "Pick a value",
      options: baseOptions,
      ...props,
    },
  });

describe("Select (combobox)", () => {
  it("renders label and placeholder text", () => {
    const { getByText, getByRole } = renderSelect();
    expect(getByText("Choose something")).toBeTruthy();
    expect(getByRole("combobox").textContent).toContain("Pick a value");
  });

  it("opens listbox and shows options on click", async () => {
    const { getByRole, getAllByRole } = renderSelect();
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);

    const listbox = getByRole("listbox");
    expect(listbox).toBeTruthy();
    expect(getAllByRole("option")).toHaveLength(baseOptions.length);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
  });

  it("opens listbox via keyboard (Space and Enter)", async () => {
    const { getByRole } = renderSelect({ id: "kb-open" });
    const trigger = getByRole("combobox");

    await fireEvent.keyDown(trigger, { key: " " });
    expect(getByRole("listbox")).toBeTruthy();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");

    await fireEvent.keyDown(getByRole("listbox"), { key: "Escape" });
    expect(trigger.getAttribute("aria-expanded")).toBe("false");

    await fireEvent.keyDown(trigger, { key: "Enter" });
    expect(getByRole("listbox")).toBeTruthy();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
  });

  it("updates value, hidden input and calls onChange when selecting an option", async () => {
    const handle = vi.fn();
    const { getByRole, container } = renderSelect({ onChange: handle });

    await fireEvent.click(getByRole("combobox"));
    const listbox = getByRole("listbox");

    const optionButtons = Array.from(
      listbox.querySelectorAll<HTMLButtonElement>("button"),
    );
    const second = optionButtons.find((btn) =>
      btn.textContent?.includes("Two"),
    );
    expect(second).toBeTruthy();

    await fireEvent.click(second!);

    expect(handle).toHaveBeenCalledWith("2");
    expect(getByRole("combobox").textContent).toContain("Two");

    const hidden = container.querySelector(
      'input[type="hidden"]',
    ) as HTMLInputElement | null;
    expect(hidden?.value).toBe("2");
    expect(container.querySelector('[role="listbox"]')).toBeNull();
  });

  it("ignores clicks on disabled option", async () => {
    const handle = vi.fn();
    const { getByRole } = renderSelect({ onChange: handle });

    await fireEvent.click(getByRole("combobox"));
    const listbox = getByRole("listbox");

    const disabled = Array.from(
      listbox.querySelectorAll<HTMLButtonElement>("button"),
    ).find((btn) => btn.textContent?.includes("Disabled"));

    expect(disabled?.getAttribute("disabled")).not.toBeNull();

    await fireEvent.click(disabled!);
    expect(handle).not.toHaveBeenCalled();
  });

  it("shows selected label when value prop is set and syncs hidden input", () => {
    const { getByRole, container } = renderSelect({ value: "2" });
    const trigger = getByRole("combobox");
    expect(trigger.textContent).toContain("Two");

    const hidden = container.querySelector(
      'input[type="hidden"]',
    ) as HTMLInputElement | null;
    expect(hidden?.value).toBe("2");
  });

  it("updates displayed value when value prop changes externally", async () => {
    const { getByRole, rerender } = renderSelect({ value: "1" });
    const trigger = getByRole("combobox");
    expect(trigger.textContent).toContain("One");

    await rerender({ value: "2" });

    expect(trigger.textContent).toContain("Two");
  });

  it("forwards describedBy/invalid/required props and renders help", () => {
    const { getByRole, getByText } = renderSelect({
      describedBy: "helper-id",
      help: "Helper text",
      invalid: true,
      required: true,
    });

    const trigger = getByRole("combobox");
    expect(trigger.getAttribute("aria-describedby")).toBe("helper-id");
    expect(trigger.getAttribute("aria-invalid")).toBe("true");
    expect(trigger.getAttribute("aria-required")).toBe("true");

    const help = getByText("Helper text");
    expect(help.id).toBe("helper-id");
  });

  it("does not open when disabled prop is true", async () => {
    const { getByRole, queryByRole } = renderSelect({ disabled: true });
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    expect(queryByRole("listbox")).toBeNull();

    await fireEvent.keyDown(trigger, { key: "ArrowDown" });
    expect(queryByRole("listbox")).toBeNull();
  });

  it("closes when clicking overlay backdrop", async () => {
    const { getByRole, queryByRole, container } = renderSelect();
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    const overlay = container.querySelector('[role="presentation"]');
    expect(overlay).toBeTruthy();

    await fireEvent.click(overlay!);
    expect(queryByRole("listbox")).toBeNull();
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });

  it("supports ArrowDown/ArrowUp from trigger and sets aria-activedescendant", async () => {
    const { getByRole } = renderSelect({ id: "custom-select" });
    const trigger = getByRole("combobox");

    await fireEvent.keyDown(trigger, { key: "ArrowDown" });
    const listbox = getByRole("listbox");

    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(listbox.getAttribute("aria-activedescendant")).toBe(
      "custom-select-opt-0",
    );

    await fireEvent.keyDown(listbox, { key: "ArrowDown" });
    expect(listbox.getAttribute("aria-activedescendant")).toBe(
      "custom-select-opt-1",
    );

    await fireEvent.keyDown(listbox, { key: "ArrowUp" });
    expect(listbox.getAttribute("aria-activedescendant")).toBe(
      "custom-select-opt-0",
    );
  });

  it("skips disabled options when navigating with arrows", async () => {
    const options = [
      { label: "First", value: "1" },
      { label: "Cannot pick", value: "2", disabled: true },
      { label: "Second", value: "3" },
    ];

    const { getByRole } = renderSelect({ id: "nav-select", options });
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    const listbox = getByRole("listbox");

    await fireEvent.keyDown(listbox, { key: "ArrowDown" });
    await fireEvent.keyDown(listbox, { key: "ArrowDown" });

    expect(listbox.getAttribute("aria-activedescendant")).toBe(
      "nav-select-opt-2",
    );
  });

  it("supports Home/End navigation to first/last enabled option", async () => {
    const options = [
      { label: "Disabled first", value: "0", disabled: true },
      { label: "A", value: "1" },
      { label: "B", value: "2" },
      { label: "Disabled last", value: "3", disabled: true },
    ];

    const { getByRole } = renderSelect({ id: "home-end", options });
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    const listbox = getByRole("listbox");

    await fireEvent.keyDown(listbox, { key: "End" });
    expect(listbox.getAttribute("aria-activedescendant")).toBe(
      "home-end-opt-2",
    );

    await fireEvent.keyDown(listbox, { key: "Home" });
    expect(listbox.getAttribute("aria-activedescendant")).toBe(
      "home-end-opt-1",
    );
  });

  it("selects highlighted option via Space or Enter and closes listbox", async () => {
    const handle = vi.fn();
    const { getByRole } = renderSelect({ onChange: handle });

    await fireEvent.click(getByRole("combobox"));
    const listbox = getByRole("listbox");

    await fireEvent.keyDown(listbox, { key: "ArrowDown" });

    await fireEvent.keyDown(listbox, { key: " " });
    expect(getByRole("combobox").textContent).toContain("One");
    expect(handle).toHaveBeenCalledWith("1");
    expect(() => getByRole("listbox")).toThrow();

    await fireEvent.click(getByRole("combobox"));
    const listbox2 = getByRole("listbox");
    await fireEvent.keyDown(listbox2, { key: "ArrowDown" });
    await fireEvent.keyDown(listbox2, { key: "Enter" });

    expect(getByRole("combobox").textContent).toContain("One");
  });

  it("respects initial open prop and renders listbox immediately", () => {
    const { getByRole } = renderSelect({ open: true });
    expect(getByRole("listbox")).toBeTruthy();
    expect(getByRole("combobox").getAttribute("aria-expanded")).toBe("true");
  });

  it("keeps Tab handling inside listbox without throwing", async () => {
    const { getByRole } = renderSelect();
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    const listbox = getByRole("listbox");
    await Promise.resolve();

    await fireEvent.keyDown(listbox, { key: "End" });

    const event = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    const prevent = vi.fn();
    (event as any).preventDefault = prevent;

    listbox.dispatchEvent(event);
    expect(prevent).toHaveBeenCalled();
  });

  it("applies size and variant classes to trigger", () => {
    const { getByRole } = renderSelect({ sz: "lg", variant: "filled" });
    const trigger = getByRole("combobox");

    expect(trigger.className).toContain("h-9");
    expect(trigger.className).toContain("bg-[var(--color-bg-muted)]");
  });

  it("handles empty options array without crashing", async () => {
    const { getByRole, queryAllByRole } = renderSelect({ options: [] });
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    expect(queryAllByRole("option")).toHaveLength(0);
  });
});
