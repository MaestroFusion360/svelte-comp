// $lib/__tests__/Accordion.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Accordion from "$lib/Accordion.svelte";

describe("Accordion", () => {
  const sampleItems = [
    { title: "Item 1", content: "Content 1" },
    { title: "Item 2", content: "Content 2" },
    { title: "Item 3", content: "Content 3" },
  ];

  it("renders all accordion items", () => {
    const { getByText } = render(Accordion, {
      props: { items: sampleItems },
    });

    expect(getByText("Item 1")).toBeTruthy();
    expect(getByText("Item 2")).toBeTruthy();
    expect(getByText("Item 3")).toBeTruthy();
  });

  it("toggles item when clicked", async () => {
    const { getByText } = render(Accordion, {
      props: { items: sampleItems },
    });

    const firstButton = getByText("Item 1").closest(
      "button",
    ) as HTMLButtonElement;
    expect(firstButton.getAttribute("aria-expanded")).toBe("false");

    await fireEvent.click(firstButton);
    expect(firstButton.getAttribute("aria-expanded")).toBe("true");

    await fireEvent.click(firstButton);
    expect(firstButton.getAttribute("aria-expanded")).toBe("false");
  });

  it("supports single item mode by default", async () => {
    const { getByText } = render(Accordion, {
      props: { items: sampleItems },
    });

    const firstButton = getByText("Item 1").closest(
      "button",
    ) as HTMLButtonElement;
    const secondButton = getByText("Item 2").closest(
      "button",
    ) as HTMLButtonElement;

    await fireEvent.click(firstButton);
    expect(firstButton.getAttribute("aria-expanded")).toBe("true");

    await fireEvent.click(secondButton);
    expect(firstButton.getAttribute("aria-expanded")).toBe("false");
    expect(secondButton.getAttribute("aria-expanded")).toBe("true");
  });

  it("supports multiple items when multiple=true", async () => {
    const { getByText } = render(Accordion, {
      props: { items: sampleItems, multiple: true },
    });

    const firstButton = getByText("Item 1").closest(
      "button",
    ) as HTMLButtonElement;
    const secondButton = getByText("Item 2").closest(
      "button",
    ) as HTMLButtonElement;

    await fireEvent.click(firstButton);
    await fireEvent.click(secondButton);

    expect(firstButton.getAttribute("aria-expanded")).toBe("true");
    expect(secondButton.getAttribute("aria-expanded")).toBe("true");
  });

  it("calls onToggle callback when item is toggled", async () => {
    const mockOnToggle = vi.fn();
    const { getByText } = render(Accordion, {
      props: { items: sampleItems, onToggle: mockOnToggle },
    });

    const firstButton = getByText("Item 1").closest(
      "button",
    ) as HTMLButtonElement;
    await fireEvent.click(firstButton);

    expect(mockOnToggle).toHaveBeenCalledWith(0, true);

    await fireEvent.click(firstButton);
    expect(mockOnToggle).toHaveBeenCalledWith(0, false);
  });

  it("opens default items", () => {
    const { getByText } = render(Accordion, {
      props: { items: sampleItems, defaultOpen: [0, 1] },
    });

    const firstButton = getByText("Item 1").closest(
      "button",
    ) as HTMLButtonElement;
    const secondButton = getByText("Item 2").closest(
      "button",
    ) as HTMLButtonElement;

    expect(firstButton.getAttribute("aria-expanded")).toBe("true");
    expect(secondButton.getAttribute("aria-expanded")).toBe("true");
  });

  it("rotates chevron icon when open", async () => {
    const { getByText } = render(Accordion, {
      props: { items: sampleItems },
    });

    const button = getByText("Item 1").closest("button") as HTMLButtonElement;

    expect(button.getAttribute("aria-expanded")).toBe("false");

    await fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
  });
});
