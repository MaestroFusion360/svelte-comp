// $lib/__tests__/CodeView.test.ts
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import CodeView from "../CodeView.svelte";

describe("CodeView", () => {
  const sample = "<div>Hello</div>";

  it("renders readonly view with title, code and line numbers", () => {
    const { container, getByText } = render(CodeView, {
      props: {
        title: "My Code",
        code: "line1\nline2",
        language: "txt",
        showLineNumbers: true,
      },
    });

    expect(getByText("My Code")).toBeTruthy();

    const gutterLines = container.querySelectorAll(".tabular-nums div");
    expect(gutterLines).toHaveLength(2);
    expect(Array.from(gutterLines).map((n) => n.textContent?.trim())).toEqual([
      "1",
      "2",
    ]);

    const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
    expect(textarea).toBeTruthy();
    expect(textarea.readOnly).toBe(true);
    expect(textarea.value).toBe("line1\nline2");
  });

  it("supports editable mode with active line highlight layer", () => {
    const { container } = render(CodeView, {
      props: {
        code: sample,
        language: "html",
        editable: true,
        activeLine: true,
        showLineNumbers: true,
      },
    });

    const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
    expect(textarea.readOnly).toBe(false);
    expect(textarea.value).toBe(sample);

    const highlight = container.querySelector(".cv-highlight");
    expect(highlight).toBeTruthy();
  });

  it("does not render line numbers when showLineNumbers is false", () => {
    const { container } = render(CodeView, {
      props: { code: sample, language: "html", showLineNumbers: false },
    });

    expect(container.querySelector(".tabular-nums")).toBeNull();
  });

  it("hides copy button when showCopyButton is false", () => {
    const { queryByText } = render(CodeView, {
      props: { code: sample, language: "html", showCopyButton: false },
    });

    expect(queryByText("Copy")).toBeNull();
  });

  it("updates textarea when code prop changes", async () => {
    const { container, rerender } = render(CodeView, {
      props: { code: "first", language: "txt" },
    });

    const textarea = container.querySelector("textarea") as HTMLTextAreaElement;
    expect(textarea.value).toBe("first");

    await rerender({ code: "second", language: "txt" });
    expect(textarea.value).toBe("second");
  });

  it("applies active line class only when activeLine is true", async () => {
    const { container, rerender } = render(CodeView, {
      props: {
        code: sample,
        language: "html",
        editable: true,
        activeLine: false,
      },
    });

    const highlight = container.querySelector(
      ".cv-highlight",
    ) as HTMLElement | null;
    expect(highlight?.classList.contains("cv-active-line")).toBe(false);

    await rerender({
      code: sample,
      language: "html",
      editable: true,
      activeLine: true,
    });
    expect(highlight?.classList.contains("cv-active-line")).toBe(true);
  });
});
