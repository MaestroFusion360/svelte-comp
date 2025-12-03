// $lib/__tests__/Toast.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Toast from "$lib/Toast.svelte";

if (!Element.prototype.animate) {
  Element.prototype.animate = () =>
    ({ finished: Promise.resolve(), cancel: () => {} }) as unknown as Animation;
}

describe("Toast", () => {
  it("renders toast with message", () => {
    const { getByText } = render(Toast, {
      props: { message: "Test message" },
    });

    expect(getByText("Test message")).toBeTruthy();
  });

  it("renders toast with title and message", () => {
    const { getByText } = render(Toast, {
      props: { title: "Test Title", message: "Test message" },
    });

    expect(getByText("Test Title")).toBeTruthy();
    expect(getByText("Test message")).toBeTruthy();
  });

  it("shows close button when closable=true", () => {
    const { getByLabelText } = render(Toast, {
      props: { message: "Test", closable: true },
    });

    expect(getByLabelText("Close")).toBeTruthy();
  });

  it("hides close button when closable=false", () => {
    const { queryByLabelText } = render(Toast, {
      props: { message: "Test", closable: false },
    });

    expect(queryByLabelText("Close")).toBeNull();
  });

  it("fires onClose when close button clicked", async () => {
    const onClose = vi.fn();
    const { getByLabelText } = render(Toast, {
      props: { message: "Clickable", onClose, closable: true },
    });

    await fireEvent.click(getByLabelText("Close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("toggles icon visibility with showIcon", () => {
    const { container, unmount } = render(Toast, {
      props: { message: "Icon on" },
    });

    expect(container.querySelector('span[aria-hidden="true"]')).toBeTruthy();

    unmount();

    const { container: noIconContainer } = render(Toast, {
      props: { message: "Icon off", showIcon: false },
    });

    expect(
      noIconContainer.querySelector('span[aria-hidden="true"]'),
    ).toBeNull();
  });

  it("applies variant styling classes", () => {
    const variants = [
      { variant: "success", token: "color-bg-success" },
      { variant: "danger", token: "color-bg-danger" },
      { variant: "warning", token: "color-bg-warning" },
      { variant: "info", token: "color-bg-page" },
    ] as const;

    variants.forEach(({ variant, token }) => {
      const { container } = render(Toast, {
        props: { message: "V", variant },
      });

      const root = container.firstElementChild as HTMLElement;
      expect(root.className).toContain(token);
    });
  });

  it("has correct ARIA role", () => {
    const { getByRole } = render(Toast, {
      props: { message: "Test" },
    });

    const toast = getByRole("status");
    expect(toast.getAttribute("aria-live")).toBe("polite");
  });

  it("auto-closes after timeout and triggers onClose", () => {
    vi.useFakeTimers();

    const onClose = vi.fn();
    const { queryByRole } = render(Toast, {
      props: { message: "Auto", timeout: 20, onClose },
    });

    expect(queryByRole("status")).toBeTruthy();

    vi.advanceTimersByTime(25);
    vi.runAllTimers();

    expect(onClose).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});
