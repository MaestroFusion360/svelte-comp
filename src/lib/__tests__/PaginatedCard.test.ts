// src/lib/__tests__/PaginatedCard.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import { createRawSnippet, type Snippet } from "svelte";
import { tick } from "svelte";
import PaginatedCard from "$lib/PaginatedCard.svelte";

const textSnippet = (text: string): Snippet =>
  createRawSnippet(() => ({ render: () => `<span>${text}</span>` }));

const items: Snippet[] = [
  textSnippet("Item 1"),
  textSnippet("Item 2"),
  textSnippet("Item 3"),
  textSnippet("Item 4"),
  textSnippet("Item 5"),
];

describe("PaginatedCard", () => {
  it("renders first page and pagination count", () => {
    const { getByText } = render(PaginatedCard, {
      props: { items, itemsPerPage: 2 },
    });

    expect(getByText("Item 1")).toBeTruthy();
    expect(getByText("Item 2")).toBeTruthy();
    expect(getByText("Page 1 of 3")).toBeTruthy();
  });

  it("changes page when next is clicked", async () => {
    const { getByText, queryByText } = render(PaginatedCard, {
      props: { items, itemsPerPage: 2 },
    });

    await fireEvent.click(getByText(">"));
    await tick();

    expect(queryByText("Item 1")).toBeNull();
    expect(getByText("Item 3")).toBeTruthy();
    expect(getByText("Item 4")).toBeTruthy();
  });

  it("shows at least one page for empty items", () => {
    const { getByText } = render(PaginatedCard, {
      props: { items: [], itemsPerPage: 3 },
    });

    expect(getByText("Page 1 of 1")).toBeTruthy();
  });
});
