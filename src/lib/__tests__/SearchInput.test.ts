import { describe, expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/svelte";
import SearchInput from "../SearchInput.svelte";

describe("SearchInput", () => {
  it("renders a search input with the default placeholder", () => {
    expect.assertions(3);
    const { container } = render(SearchInput);
    const input = container.querySelector('input[type="search"]');
    expect(input).not.toBeNull();
    if (!input) return;
    expect(input.getAttribute("type")).toBe("search");
    expect(input.getAttribute("placeholder")).toBe("Search");
  });

  it("renders a custom label and placeholder", () => {
    expect.assertions(2);
    const { getByText, container } = render(SearchInput, {
      props: { label: "Find", placeholder: "Search profiles" },
    });
    expect(getByText("Find")).toBeTruthy();
    const input = container.querySelector("input");
    expect(input?.getAttribute("placeholder")).toBe("Search profiles");
  });

  it("updates the input value on user typing", async () => {
    expect.assertions(1);
    const { container } = render(SearchInput, {
      props: { value: "", placeholder: "Search" },
    });
    const input = container.querySelector("input");
    if (!input) return;
    await fireEvent.input(input, { target: { value: "bolt" } });
    expect(input.value).toBe("bolt");
  });
});
