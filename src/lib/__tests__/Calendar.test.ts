// src/lib/__tests__/Calendar.test.ts
import "./setupLangContext";
import { fireEvent, render } from "@testing-library/svelte";
import { tick } from "svelte";
import { describe, it, expect, vi } from "vitest";
import Calendar from "../Calendar.svelte";

describe("Calendar", () => {
  it("renders month and year labels", () => {
    const { getByText } = render(Calendar, {
      props: { value: "2025-05-20", locale: "en-US" },
    });

    expect(getByText("May")).toBeTruthy();
    expect(getByText("2025")).toBeTruthy();
  });

  it("switches to month view and selects a month", async () => {
    const { getByText } = render(Calendar, {
      props: { value: "2025-05-20", locale: "en-US" },
    });

    await fireEvent.click(getByText("May").closest("button")!);
    await tick();
    await fireEvent.click(getByText("Jun"));

    await tick();
    expect(getByText("June")).toBeTruthy();
  });

  it("switches to year view and selects a year", async () => {
    const { getByText } = render(Calendar, {
      props: { value: "2025-05-20", locale: "en-US" },
    });

    await fireEvent.click(getByText("2025").closest("button")!);
    await tick();
    await fireEvent.click(getByText("2026"));

    await tick();
    expect(getByText("2026")).toBeTruthy();
  });

  it("returns to days view after selecting a month", async () => {
    const { getByText } = render(Calendar, {
      props: { value: "2025-05-20", locale: "en-US" },
    });

    await fireEvent.click(getByText("May").closest("button")!);
    await tick();
    await fireEvent.click(getByText("Jun"));

    await tick();
    expect(getByText("June")).toBeTruthy();
    expect(getByText("Mon")).toBeTruthy();
  });

  it("disables dates before the default minimum", () => {
    const { getByRole } = render(Calendar, {
      props: { value: "1926-01-15", locale: "en-US" },
    });

    const disabledDay = getByRole("button", {
      name: /December 31, 1925/i,
    }) as HTMLButtonElement;

    expect(disabledDay.disabled).toBe(true);
  });

  it("fires onChange when a date is selected", async () => {
    const onChange = vi.fn();
    const { getByRole } = render(Calendar, {
      props: { value: "2025-05-20", locale: "en-US", onChange },
    });

    await fireEvent.click(
      getByRole("button", { name: "Thursday, May 15, 2025" }),
    );

    expect(onChange).toHaveBeenCalledWith("2025-05-15");
  });

  it("respects min and max boundaries", () => {
    const { getByRole } = render(Calendar, {
      props: {
        value: "1926-01-15",
        locale: "en-US",
        min: "1926-01-10",
        max: "1926-01-20",
      },
    });

    const beforeMin = getByRole("button", {
      name: "Monday, January 4, 1926",
    }) as HTMLButtonElement;
    const afterMax = getByRole("button", {
      name: "Thursday, January 21, 1926",
    }) as HTMLButtonElement;

    expect(beforeMin.disabled).toBe(true);
    expect(afterMax.disabled).toBe(true);
  });
});
