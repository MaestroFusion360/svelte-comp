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

  it("emits onChange when selecting a date", async () => {
    const handle = vi.fn();
    const { getByText, getByRole } = render(DatePicker, {
      props: { value: isoDate, onChange: handle, locale: "en-US" },
    });

    await fireEvent.click(getByText("Date"));
    const target = getByRole("button", { name: /May 21, 2025/i });
    await fireEvent.click(target);

    expect(handle).toHaveBeenCalledWith("2025-05-21");
  });

  it("closes the panel on Escape", async () => {
    const { getByText, getByRole, queryByRole } = render(DatePicker, {
      props: { value: isoDate, locale: "en-US" },
    });

    await fireEvent.click(getByText("Date"));
    expect(getByRole("dialog")).toBeTruthy();

    await fireEvent.keyDown(window, { key: "Escape" });
    expect(queryByRole("dialog")).toBeNull();
  });

  it("clears the value when clicking Clear", async () => {
    const handle = vi.fn();
    const { getByText } = render(DatePicker, {
      props: { value: isoDate, onChange: handle },
    });
    await fireEvent.click(getByText("Clear"));

    expect(handle).toHaveBeenCalledWith(null);
  });
});
