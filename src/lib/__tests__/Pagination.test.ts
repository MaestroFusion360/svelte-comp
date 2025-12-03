// $lib/__tests__/Pagination.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Pagination from "../Pagination.svelte";

describe("Pagination", () => {
  it("renders current page and total pages", () => {
    const { getByText } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange: vi.fn() },
    });

    expect(getByText("Page 2 of 5")).toBeTruthy();
  });

  it("renders page buttons for visible pages", () => {
    const { getAllByRole } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange: vi.fn() },
    });

    const buttons = getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(2);
  });

  it("calls onPageChange when page button is clicked", async () => {
    const onPageChange = vi.fn();
    const { getByText } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange },
    });

    const page3Button = getByText("3");
    await fireEvent.click(page3Button);

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("calls onPageChange when next button is clicked", async () => {
    const onPageChange = vi.fn();
    const { getByRole } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange },
    });

    const nextButton = getByRole("button", { name: ">" });
    await fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("calls onPageChange when previous button is clicked", async () => {
    const onPageChange = vi.fn();
    const { getByRole } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange },
    });

    const prevButton = getByRole("button", { name: "<" });
    await fireEvent.click(prevButton);

    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it("disables previous button on first page", () => {
    const { getByRole } = render(Pagination, {
      props: { currentPage: 1, totalPages: 5, onPageChange: vi.fn() },
    });

    const prevButton = getByRole("button", { name: "<" }) as HTMLButtonElement;
    expect(prevButton.disabled).toBe(true);
  });

  it("disables next button on last page", () => {
    const { getByRole } = render(Pagination, {
      props: { currentPage: 5, totalPages: 5, onPageChange: vi.fn() },
    });

    const nextButton = getByRole("button", { name: ">" }) as HTMLButtonElement;
    expect(nextButton.disabled).toBe(true);
  });

  it("shows correct visible pages for many pages", () => {
    const { getByText, queryByText } = render(Pagination, {
      props: { currentPage: 5, totalPages: 10, onPageChange: vi.fn() },
    });

    expect(getByText("4")).toBeTruthy();
    expect(getByText("5")).toBeTruthy();
    expect(getByText("6")).toBeTruthy();
    expect(queryByText("1")).toBeNull();
    expect(queryByText("10")).toBeNull();
  });

  it("shows all pages when total pages is less than max visible", () => {
    const { getByText } = render(Pagination, {
      props: { currentPage: 1, totalPages: 3, onPageChange: vi.fn() },
    });

    expect(getByText("1")).toBeTruthy();
    expect(getByText("2")).toBeTruthy();
    expect(getByText("3")).toBeTruthy();
  });

  it("applies custom class", () => {
    const { container } = render(Pagination, {
      props: {
        currentPage: 1,
        totalPages: 3,
        onPageChange: vi.fn(),
        class: "custom-pagination",
      },
    });

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("custom-pagination");
  });

  it("highlights current page with active class", () => {
    const { getByRole } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange: vi.fn() },
    });

    const currentPageButton = getByRole("button", { name: "2" });
    expect(currentPageButton.className).toContain(
      "bg-[var(--color-bg-primary)]",
    );
    expect(currentPageButton.className).toContain("text-white");
  });

  it("sets aria-current for current page", () => {
    const { getByRole } = render(Pagination, {
      props: { currentPage: 2, totalPages: 5, onPageChange: vi.fn() },
    });

    const currentPageButton = getByRole("button", { name: "2" });
    expect(currentPageButton.getAttribute("aria-current")).toBe("page");
  });
});
