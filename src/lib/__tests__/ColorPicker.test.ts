// $lib/__tests__/ColorPicker.test.ts
import "./setupLangContext";
import { fireEvent, render } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import ColorPicker from "../ColorPicker.svelte";

describe("ColorPicker", () => {
  it("shows placeholder text when no color is selected", () => {
    const { getByText } = render(ColorPicker, {
      props: { placeholder: "Pick any color" },
    });
    expect(getByText("Pick any color")).toBeTruthy();
  });

  it("syncs provided value to the native input", () => {
    const { container } = render(ColorPicker, {
      props: { value: "#123456" },
    });
    const input = container.querySelector(
      'input[type="color"]',
    ) as HTMLInputElement;
    expect(input.value).toBe("#123456");
    expect(container.textContent).toContain("#123456");
  });

  it("emits onChange when the color input changes", async () => {
    const handle = vi.fn();
    const { container } = render(ColorPicker, {
      props: { onChange: handle },
    });
    const input = container.querySelector(
      'input[type="color"]',
    ) as HTMLInputElement;

    await fireEvent.change(input, { target: { value: "#00ff00" } });
    expect(handle).toHaveBeenCalledWith("#00ff00");
  });

  it("clears the selection when clicking the clear button", async () => {
    const handle = vi.fn();
    const { getByText, queryByText } = render(ColorPicker, {
      props: { value: "#abcdef", onChange: handle },
    });
    await fireEvent.click(getByText("Clear"));
    expect(handle).toHaveBeenCalledWith(null);
    expect(queryByText("#abcdef")).toBeNull();
  });
});
