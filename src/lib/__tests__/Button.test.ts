// $lib/__tests__/Button.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Button from "../Button.svelte";

const triggerKeyboardActivation = (el: HTMLElement, key: string) => {
  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    cancelable: true,
  });
  const defaultAllowed = el.dispatchEvent(event);
  if (defaultAllowed) {
    el.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
};

describe("Button", () => {
  it("renders a button element", () => {
    const { getByRole } = render(Button);
    expect(getByRole("button")).toBeTruthy();
  });

  it("calls onClick on normal click", async () => {
    const handle = vi.fn();
    const { getByRole } = render(Button, { props: { onClick: handle } });

    await fireEvent.click(getByRole("button"));
    expect(handle).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handle = vi.fn();
    const { getByRole } = render(Button, {
      props: { disabled: true, onClick: handle },
    });

    await fireEvent.click(getByRole("button"));
    expect(handle).not.toHaveBeenCalled();
  });

  it("does not call onClick when loaded", async () => {
    const handle = vi.fn();
    const { getByRole } = render(Button, {
      props: { loaded: true, onClick: handle },
    });

    await fireEvent.click(getByRole("button"));
    expect(handle).not.toHaveBeenCalled();
  });

  it("applies size classes", () => {
    const { getByRole } = render(Button, { props: { sz: "lg" } });
    const btn = getByRole("button");

    expect(btn.className).toContain("h-9");
    expect(btn.className).toContain("px-5");
  });

  it("applies variant classes", () => {
    const { getByRole } = render(Button, { props: { variant: "secondary" } });
    const btn = getByRole("button");

    expect(btn.className).toContain("bg-[var(--color-bg-secondary)]");
    expect(btn.className).toContain("[color:var(--color-text-default)]");
  });

  it("renders loading spinner when loaded=true", () => {
    const { container } = render(Button, { props: { loaded: true } });
    const spinner = container.querySelector("[aria-hidden='true']");
    expect(spinner).toBeTruthy();
  });

  it("passes through native HTML attributes", () => {
    const { getByRole } = render(Button, {
      props: {
        type: "submit",
        "data-test": "abc",
        "aria-label": "Send",
      },
    });

    const btn = getByRole("button");

    expect(btn.getAttribute("type")).toBe("submit");
    expect(btn.getAttribute("data-test")).toBe("abc");
    expect(btn.getAttribute("aria-label")).toBe("Send");
  });

  it("navigates to link on normal left click", async () => {
    const assignMock = vi.fn();
    const locationSpy = vi.spyOn(window, "location", "get");
    locationSpy.mockReturnValue({
      ...window.location,
      assign: assignMock,
    } as any);

    const { getByRole } = render(Button, {
      props: { link: "https://test.com" },
    });
    await fireEvent.click(getByRole("button"));

    expect(assignMock).toHaveBeenCalledWith("https://test.com");

    locationSpy.mockRestore();
  });

  it("opens in new tab when target=_blank", async () => {
    const openMock = vi.spyOn(window, "open");

    const { getByRole } = render(Button, {
      // target is not declared on component props, but forwarded via {...rest}
      props: { link: "https://abc.com", target: "_blank" } as any,
    });

    await fireEvent.click(getByRole("button"));

    expect(openMock).toHaveBeenCalledWith(
      "https://abc.com",
      "_blank",
      "noopener,noreferrer",
    );

    openMock.mockRestore();
  });

  it("does not navigate if onClick prevents default", async () => {
    const handle = vi.fn((e: MouseEvent) => e.preventDefault());
    const assignMock = vi.fn();
    const locationSpy = vi.spyOn(window, "location", "get");
    locationSpy.mockReturnValue({
      ...window.location,
      assign: assignMock,
    } as any);

    const { getByRole } = render(Button, {
      props: { link: "https://fail.com", onClick: handle },
    });

    await fireEvent.click(getByRole("button"));

    expect(handle).toHaveBeenCalled();
    expect(assignMock).not.toHaveBeenCalled();

    locationSpy.mockRestore();
  });

  it("does not navigate on modifier keys (Ctrl/Cmd/Shift)", async () => {
    const assignMock = vi.fn();
    const locationSpy = vi.spyOn(window, "location", "get");
    locationSpy.mockReturnValue({
      ...window.location,
      assign: assignMock,
    } as any);

    const { getByRole } = render(Button, {
      props: { link: "https://test.com" },
    });

    await fireEvent.click(getByRole("button"), { ctrlKey: true });
    await fireEvent.click(getByRole("button"), { metaKey: true });
    await fireEvent.click(getByRole("button"), { shiftKey: true });

    expect(assignMock).not.toHaveBeenCalled();

    locationSpy.mockRestore();
  });

  it("triggers click on Enter/Space keyboard activation", async () => {
    const handle = vi.fn();
    const { getByRole } = render(Button, { props: { onClick: handle } });

    const btn = getByRole("button");
    triggerKeyboardActivation(btn, "Enter");
    triggerKeyboardActivation(btn, " ");

    expect(handle).toHaveBeenCalledTimes(2);
  });
});
