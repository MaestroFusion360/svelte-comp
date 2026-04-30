// src/__tests__/Field.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Field from "../Field.svelte";

describe("Field", () => {
  it("renders with label and placeholder", () => {
    const { getByLabelText } = render(Field, {
      props: { label: "Email", placeholder: "user@example.com" },
    });
    expect(getByLabelText("Email").getAttribute("placeholder")).toBe(
      "user@example.com",
    );
  });

  it("binds value and triggers onChange", async () => {
    const handle = vi.fn();
    const { getByLabelText } = render(Field, {
      props: { label: "Name", onChange: handle },
    });
    const input = getByLabelText("Name") as HTMLInputElement;
    await fireEvent.input(input, { target: { value: "Ada" } });
    expect(input.value).toBe("Ada");
    expect(handle).toHaveBeenCalledWith("Ada");
  });

  it("renders textarea when as='textarea'", () => {
    const { container } = render(Field, {
      props: { as: "textarea", label: "Description" },
    });
    expect(container.querySelector("textarea")).toBeTruthy();
  });

  it("shows clear button when clearable and has value", () => {
    const { getByTitle } = render(Field, {
      props: { label: "Search", value: "test", clearable: true },
    });
    expect(getByTitle("Clear")).toBeTruthy();
  });

  it("hides clear button when clearable=false", () => {
    const { queryByTitle } = render(Field, {
      props: { label: "Search", value: "test", clearable: false },
    });
    expect(queryByTitle("Clear")).toBeNull();
  });

  it("hides clear button when value is empty", () => {
    const { queryByTitle } = render(Field, {
      props: { label: "Search", value: "", clearable: true },
    });
    expect(queryByTitle("Clear")).toBeNull();
  });

  it("clears value when clear button clicked", async () => {
    const handleChange = vi.fn();
    const { getByTitle } = render(Field, {
      props: {
        label: "Search",
        value: "test",
        clearable: true,
        onChange: handleChange,
      },
    });
    await fireEvent.click(getByTitle("Clear"));
    expect(handleChange).toHaveBeenCalledWith("");
  });

  it("renders with leading icon", () => {
    const { container } = render(Field, {
      props: { label: "Search", leading: "🔍" },
    });
    expect(container.querySelector(".left-2")).toBeTruthy();
  });

  it("renders with trailing icon", () => {
    const { container } = render(Field, {
      props: { label: "Search", trailing: "⌃" },
    });
    expect(container.querySelector(".right-2")).toBeTruthy();
  });

  it("applies size classes", () => {
    const { container } = render(Field, { props: { label: "Test", sz: "lg" } });
    const input = container.querySelector("input");
    expect(input?.className).toContain("h-9");
  });

  it("applies variant classes", () => {
    const { container } = render(Field, {
      props: { label: "Test", variant: "filled" },
    });
    const input = container.querySelector("input");
    expect(input?.className).toContain("color-bg-muted");
  });

  it("parses number when parseNumber=true", async () => {
    const handleChange = vi.fn();
    const { getByLabelText } = render(Field, {
      props: {
        label: "Age",
        type: "number",
        parseNumber: true,
        onChange: handleChange,
      },
    });
    const input = getByLabelText("Age") as HTMLInputElement;
    await fireEvent.input(input, { target: { value: "25" } });
    expect(handleChange).toHaveBeenCalledWith(25);
  });

  it("applies textarea rows prop", () => {
    const { container } = render(Field, {
      props: { as: "textarea", label: "Description", rows: 5 },
    });
    expect(container.querySelector("textarea")?.getAttribute("rows")).toBe("5");
  });

  it("applies custom class to wrapper", () => {
    const { container } = render(Field, {
      props: { label: "Test", class: "custom-field" },
    });
    const wrapper = container.querySelector("label");
    expect(wrapper?.className).toContain("custom-field");
  });

  it("generates unique id when not provided", () => {
    const { container } = render(Field, { props: { label: "Test" } });
    const input = container.querySelector("input");
    const label = container.querySelector("label");
    expect(input?.id).toBeTruthy();
    expect(label?.getAttribute("for")).toBe(input?.id);
  });

  it("uses provided id", () => {
    const { container } = render(Field, {
      props: { label: "Test", id: "custom-id" },
    });
    const input = container.querySelector("input");
    const label = container.querySelector("label");
    expect(input?.id).toBe("custom-id");
    expect(label?.getAttribute("for")).toBe("custom-id");
  });
});
