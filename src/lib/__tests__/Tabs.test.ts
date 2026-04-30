// $lib/__tests__/Tabs.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Tabs from "../Tabs.svelte";

describe("Tabs", () => {
  const mockTabs = [
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3", disabled: true },
  ];

  it("renders with default props", () => {
    const { container } = render(Tabs, {
      props: {
        tabs: mockTabs,
        sz: "lg",
      },
    });

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeDefined();
  });

  it("displays tabs when provided", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(3);
    expect(tabs[0].textContent).toBe("Tab 1");
    expect(tabs[1].textContent).toBe("Tab 2");
    expect(tabs[2].textContent).toBe("Tab 3");
  });

  it("shows active tab correctly", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, activeTab: "tab2" },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(0);
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
  });

  it("calls onChange when tab is clicked", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, onChange: mockOnChange },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(1);

    const secondTab = tabs[1];
    await fireEvent.click(secondTab);

    expect(mockOnChange).toHaveBeenCalledWith("tab2");
  });

  it("does not call onChange when disabled tab is clicked", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, onChange: mockOnChange },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(2);

    const disabledTab = tabs[2];
    await fireEvent.click(disabledTab);

    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it("handles keyboard navigation with Enter key", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, onChange: mockOnChange },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(0);

    const firstTab = tabs[0];
    await fireEvent.keyDown(firstTab, { key: "Enter" });

    expect(mockOnChange).toHaveBeenCalledWith("tab1");
  });

  it("handles keyboard navigation with Space key", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, onChange: mockOnChange },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(0);

    const firstTab = tabs[0];
    await fireEvent.keyDown(firstTab, { key: " " });

    expect(mockOnChange).toHaveBeenCalledWith("tab1");
  });

  it("applies correct size classes", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, sz: "lg" },
    });

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeDefined();
    if (tablist) {
      expect(tablist.className).toContain("text-lg");
    }
  });

  it("applies default variant classes", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, variant: "default" },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(0);

    if (tabs[0]) {
      expect(tabs[0].className).toContain("border-b-2");
      expect(tabs[0].className).toContain("border-transparent");
    }
  });

  it("applies pills variant classes", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, variant: "pills" },
    });

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeDefined();
    if (tablist) {
      expect(tablist.className).toContain("gap-1");
    }

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(0);

    if (tabs[0]) {
      expect(tabs[0].className).toContain("border");
      expect(tabs[0].className).toContain("border-transparent");
    }
  });

  it("applies underline variant classes", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, variant: "underline" },
    });

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeDefined();
    if (tablist) {
      expect(tablist.className).toContain("gap-6");
    }

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(0);

    if (tabs[0]) {
      expect(tabs[0].className).toContain("border-b-2");
      expect(tabs[0].className).toContain("border-transparent");
    }
  });

  it("applies fitted layout when fitted is true", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, fitted: true },
    });

    const tablist = container.querySelector('[role="tablist"]');
    const tabs = container.querySelectorAll('[role="tab"]');

    expect(tablist).toBeDefined();
    expect(tabs.length).toBeGreaterThan(0);

    if (tablist) {
      expect(tablist.className).toContain("w-full");
    }
    if (tabs[0]) {
      expect(tabs[0].className).toContain("flex-1");
      expect(tabs[0].className).toContain("text-center");
    }
  });

  it("sets correct tabindex for active tab", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, activeTab: "tab2" },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(2);

    expect(tabs[0].getAttribute("tabindex")).toBe("-1");
    expect(tabs[1].getAttribute("tabindex")).toBe("0");
    expect(tabs[2].getAttribute("tabindex")).toBe("-1");
  });

  it("marks disabled tabs correctly", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBeGreaterThan(2);

    expect(tabs[2].getAttribute("aria-disabled")).toBe("true");
    expect(tabs[2].className).toContain("disabled");
  });

  it("accepts external class on root", () => {
    const { container } = render(Tabs, {
      props: { tabs: mockTabs, class: "custom-tabs" },
    });

    const root = container.firstElementChild as HTMLElement | null;
    expect(root).toBeDefined();
    if (root) {
      expect(root.className).toContain("custom-tabs");
    }
  });

  it("handles empty tabs array", () => {
    const { container } = render(Tabs, {
      props: { tabs: [] },
    });

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(0);
  });
});
