import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Hamburger from "$lib/Hamburger.svelte";

const items = [
  { id: "home", label: "Home" },
  { id: "settings", label: "Settings" },
];

describe("Hamburger", () => {
  it("renders trigger and opens dialog on click", async () => {
    const { getByRole, queryByRole } = render(Hamburger, {
      props: { menuItems: items },
    });

    expect(queryByRole("dialog")).toBeNull();

    const trigger = getByRole("button", { name: "Toggle navigation" });
    await fireEvent.click(trigger);

    expect(getByRole("dialog")).toBeTruthy();
  });

  it("renders menu items when open", async () => {
    const { getByRole, getByText } = render(Hamburger, {
      props: { menuItems: items },
    });

    await fireEvent.click(getByRole("button", { name: "Toggle navigation" }));

    expect(getByText("Home")).toBeTruthy();
    expect(getByText("Settings")).toBeTruthy();
  });

  it("calls onSelect and closes when closeOnSelect is true", async () => {
    const onSelect = vi.fn();
    const { getByRole, getByText, queryByRole } = render(Hamburger, {
      props: { menuItems: items, onSelect, closeOnSelect: true },
    });

    await fireEvent.click(getByRole("button", { name: "Toggle navigation" }));
    await fireEvent.click(getByText("Home"));

    expect(onSelect).toHaveBeenCalledWith("home");
    expect(queryByRole("dialog")).toBeNull();
  });

  it("keeps open when closeOnSelect is false", async () => {
    const onSelect = vi.fn();
    const { getByRole, getByText } = render(Hamburger, {
      props: { menuItems: items, onSelect, closeOnSelect: false },
    });

    await fireEvent.click(getByRole("button", { name: "Toggle navigation" }));
    await fireEvent.click(getByText("Settings"));

    expect(onSelect).toHaveBeenCalledWith("settings");
    expect(getByRole("dialog")).toBeTruthy();
  });

  it("closes on overlay click", async () => {
    const { getByRole, container, queryByRole } = render(Hamburger, {
      props: { menuItems: items },
    });

    await fireEvent.click(getByRole("button", { name: "Toggle navigation" }));
    const overlay = container.querySelector(
      'button[aria-hidden="true"]',
    ) as HTMLButtonElement;

    await fireEvent.click(overlay);
    expect(queryByRole("dialog")).toBeNull();
  });

  it("closes on Escape key", async () => {
    const { getByRole, queryByRole } = render(Hamburger, {
      props: { menuItems: items },
    });

    await fireEvent.click(getByRole("button", { name: "Toggle navigation" }));
    await fireEvent.keyDown(document, { key: "Escape" });

    expect(queryByRole("dialog")).toBeNull();
  });
});
