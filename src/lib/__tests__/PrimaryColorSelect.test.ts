// src/lib/__tests__/PrimaryColorSelect.test.ts
import "./setupLangContext";
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import PrimaryColorSelect from "$lib/PrimaryColorSelect.svelte";

describe("PrimaryColorSelect", () => {
  it("renders default label and sets data-primary", async () => {
    localStorage.clear();
    const { getByRole } = render(PrimaryColorSelect);

    await Promise.resolve();

    expect(getByRole("combobox")).toBeTruthy();
    expect(document.documentElement.getAttribute("data-primary")).toBe(
      "default"
    );
  });

  it("loads saved primary color from localStorage", async () => {
    localStorage.setItem("primary", "cyan");
    render(PrimaryColorSelect);

    await Promise.resolve();

    expect(document.documentElement.getAttribute("data-primary")).toBe("cyan");
  });

  it("updates localStorage and html attribute on change", async () => {
    const { getByRole, getByText } = render(PrimaryColorSelect);
    const trigger = getByRole("combobox");

    await fireEvent.click(trigger);
    await fireEvent.click(getByText("Red"));

    expect(localStorage.getItem("primary")).toBe("red");
    expect(document.documentElement.getAttribute("data-primary")).toBe("red");
  });
});