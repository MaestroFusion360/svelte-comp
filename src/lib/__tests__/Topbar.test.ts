import { createRawSnippet } from "svelte";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/svelte";
import Topbar from "../Topbar.svelte";

const textSnippet = (text: string) =>
  createRawSnippet(() => ({ render: () => `<span>${text}</span>` }));

describe("Topbar", () => {
  it("renders custom title snippet when provided", () => {
    const { getByText, queryByText } = render(Topbar, {
      props: {
        title: "Fallback",
        children: textSnippet("Custom"),
      },
    });

    expect(getByText("Custom")).toBeTruthy();
    expect(queryByText("Fallback")).toBeNull();
  });

  it("renders title when no children snippet is provided", () => {
    const { getByText } = render(Topbar, {
      props: { title: "FormBuilder" },
    });

    expect(getByText("FormBuilder")).toBeTruthy();
  });
});
