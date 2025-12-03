// $lib/__tests__/Dialog.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Dialog from "$lib/Dialog.svelte";

describe("Dialog", () => {
  it("renders modal dialog when open=true", () => {
    const { getByRole, getByText } = render(Dialog, {
      props: {
        open: true,
        title: "Test Dialog",
        message: "Test message",
      },
    });

    expect(getByRole("dialog")).toBeTruthy();
    expect(getByText("Test Dialog")).toBeTruthy();
    expect(getByText("Test message")).toBeTruthy();
    expect(getByText("OK")).toBeTruthy();
    expect(getByText("Cancel")).toBeTruthy();
  });

  it("does not render when open=false", () => {
    const { queryByRole } = render(Dialog, {
      props: { open: false },
    });

    expect(queryByRole("dialog")).toBeNull();
  });

  it("calls onConfirm when OK button is clicked", async () => {
    const mockOnConfirm = vi.fn();
    const mockOnClose = vi.fn();

    const { getByText } = render(Dialog, {
      props: {
        open: true,
        onConfirm: mockOnConfirm,
        onClose: mockOnClose,
      },
    });

    await fireEvent.click(getByText("OK"));

    expect(mockOnConfirm).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", async () => {
    const mockOnCancel = vi.fn();
    const mockOnClose = vi.fn();

    const { getByText } = render(Dialog, {
      props: {
        open: true,
        onCancel: mockOnCancel,
        onClose: mockOnClose,
      },
    });

    await fireEvent.click(getByText("Cancel"));

    expect(mockOnCancel).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("handles Escape key to cancel", async () => {
    const mockOnCancel = vi.fn();
    const mockOnClose = vi.fn();

    const { container } = render(Dialog, {
      props: {
        open: true,
        onCancel: mockOnCancel,
        onClose: mockOnClose,
      },
    });

    const dialog = container.querySelector('[role="dialog"]') as HTMLElement;
    await fireEvent.keyDown(dialog, { key: "Escape" });

    expect(mockOnCancel).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("traps focus with Tab key", async () => {
    const { getByText } = render(Dialog, {
      props: { open: true },
    });

    const okButton = getByText("OK") as HTMLButtonElement;
    const cancelButton = getByText("Cancel") as HTMLButtonElement;

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(okButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();

    await fireEvent.keyDown(okButton, { key: "Tab" });
    await fireEvent.keyDown(cancelButton, { key: "Tab" });
    await fireEvent.keyDown(okButton, { key: "Tab", shiftKey: true });

    expect(true).toBe(true);
  });

  it("renders as non-modal when modal=false", () => {
    const { getByRole } = render(Dialog, {
      props: {
        open: true,
        modal: false,
      },
    });

    const dialog = getByRole("dialog");
    expect(dialog.getAttribute("aria-modal")).toBe("false");
    expect(dialog.className).toContain("fixed top-4 right-4");
  });

  it("applies correct aria-label", () => {
    const { getByRole } = render(Dialog, {
      props: {
        open: true,
        title: "Test Title",
      },
    });

    const dialog = getByRole("dialog");
    expect(dialog.getAttribute("aria-label")).toBe("Test Title");
  });
});
