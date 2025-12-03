// src/lib/__tests__/Table.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Table from "../Table.svelte";

type Row = { name: string | null; age: number | null; email?: string };

const baseColumns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
] as const;

const simpleRows: Row[] = [
  { name: "Ada", age: 30 },
  { name: "Linus", age: 40 },
];

const complexRows: Row[] = [
  { name: "Ada", age: 30, email: "ada@example.com" },
  { name: "Linus", age: 40, email: "linus@example.com" },
  { name: "Grace", age: 35, email: "grace@example.com" },
  { name: "Alan", age: 25, email: "alan@example.com" },
];

describe("Table", () => {
  it("renders headers and rows with data", () => {
    const { getByText, container } = render(Table, {
      props: { columns: baseColumns, rows: simpleRows },
    });

    expect(getByText("Name")).toBeTruthy();
    expect(getByText("Age")).toBeTruthy();

    const bodyRows = container.querySelectorAll("tbody tr");
    expect(bodyRows.length).toBe(2);

    const firstRowCells = bodyRows[0].querySelectorAll("td");
    expect(firstRowCells[0].textContent).toBe("Ada");
    expect(firstRowCells[1].textContent).toBe("30");
  });

  it("handles empty rows array", () => {
    const { container } = render(Table, {
      props: { columns: baseColumns, rows: [] },
    });

    const bodyRows = container.querySelectorAll("tbody tr");
    expect(bodyRows.length).toBe(0);
  });

  it("handles empty columns array", () => {
    const { container } = render(Table, {
      props: { columns: [], rows: simpleRows },
    });

    const headers = container.querySelectorAll("thead th");
    const cells = container.querySelectorAll("tbody td");

    expect(headers.length).toBe(0);
    expect(cells.length).toBe(0);
  });

  it("applies alignment and width for columns", () => {
    const columns = [
      { key: "name", label: "Name", align: "start" as const, width: "200px" },
      { key: "age", label: "Age", align: "end" as const, width: "80px" },
    ];

    const { container } = render(Table, {
      props: { columns, rows: simpleRows },
    });

    const headers = container.querySelectorAll("thead th");
    expect(headers[0].className).toContain("text-left");
    expect(headers[1].className).toContain("text-right");

    expect(headers[0].getAttribute("style")).toContain("width: 200px");
    expect(headers[1].getAttribute("style")).toContain("width: 80px");
  });

  it("wraps table in responsive overflow container", () => {
    const { container } = render(Table, {
      props: { columns: baseColumns, rows: simpleRows },
    });

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("overflow-x-auto");
  });

  it("renders sticky header when stickyHeader=true", () => {
    const { container } = render(Table, {
      props: { columns: baseColumns, rows: simpleRows, stickyHeader: true },
    });

    const headerRow = container.querySelector("thead tr") as HTMLElement | null;
    expect(headerRow?.className).toContain("sticky");
  });

  it("hides header row for list variant", () => {
    const { container } = render(Table, {
      props: { columns: baseColumns, rows: simpleRows, variant: "list" },
    });

    const headerRow = container.querySelector("thead tr");
    const headers = container.querySelectorAll("thead th");

    expect(headerRow).toBeNull();
    expect(headers.length).toBe(0);
  });

  // ---------- SORTING: NUMBERS ----------

  it("sorts numeric column ascending on first click", async () => {
    const numericRows: Row[] = [
      { name: "A", age: 10 },
      { name: "B", age: 5 },
      { name: "C", age: 20 },
    ];

    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: numericRows },
    });

    const ageHeaderButton = getByLabelText("Sort by Age");
    await fireEvent.click(ageHeaderButton);

    const bodyRows = container.querySelectorAll("tbody tr");
    const ages = Array.from(bodyRows).map(
      (row) => row.querySelectorAll("td")[1].textContent,
    );

    expect(ages).toEqual(["5", "10", "20"]);
  });

  it("sorts numeric column descending on second click", async () => {
    const numericRows: Row[] = [
      { name: "A", age: 10 },
      { name: "B", age: 5 },
      { name: "C", age: 20 },
    ];

    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: numericRows },
    });

    const ageHeaderButton = getByLabelText("Sort by Age");
    await fireEvent.click(ageHeaderButton);
    await fireEvent.click(ageHeaderButton);

    const bodyRows = container.querySelectorAll("tbody tr");
    const ages = Array.from(bodyRows).map(
      (row) => row.querySelectorAll("td")[1].textContent,
    );

    expect(ages).toEqual(["20", "10", "5"]);
  });

  it("places null/empty values at the bottom when sorting ascending", async () => {
    const rowsWithNulls: Row[] = [
      { name: "Ada", age: null },
      { name: "Linus", age: 40 },
      { name: "Grace", age: 35 },
    ];

    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: rowsWithNulls },
    });

    const ageHeaderButton = getByLabelText("Sort by Age");
    await fireEvent.click(ageHeaderButton);

    const bodyRows = container.querySelectorAll("tbody tr");
    const names = Array.from(bodyRows).map(
      (row) => row.querySelectorAll("td")[0].textContent,
    );

    expect(names[names.length - 1]).toBe("Ada");
  });

  it("keeps equal numeric values stable (stable sort)", async () => {
    const rowsWithDuplicates: Row[] = [
      { name: "First", age: 30 },
      { name: "Second", age: 30 },
      { name: "Third", age: 40 },
    ];

    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: rowsWithDuplicates },
    });

    const ageHeaderButton = getByLabelText("Sort by Age");
    await fireEvent.click(ageHeaderButton);

    const bodyRows = container.querySelectorAll("tbody tr");
    const names = Array.from(bodyRows).map(
      (row) => row.querySelectorAll("td")[0].textContent,
    );

    expect(names.slice(0, 2)).toEqual(["First", "Second"]);
  });

  // ---------- SORTING: LINES ----------

  it("sorts string column ascending by name", async () => {
    const stringRows: Row[] = [
      { name: "Charlie", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
    ];

    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: stringRows },
    });

    const nameHeaderButton = getByLabelText("Sort by Name");
    await fireEvent.click(nameHeaderButton);

    const bodyRows = container.querySelectorAll("tbody tr");
    const names = Array.from(bodyRows).map(
      (row) => row.querySelectorAll("td")[0].textContent,
    );

    expect(names).toEqual(["Alice", "Bob", "Charlie"]);
  });

  // ---------- ARIA-SORT & KEYBOARD  ----------

  it("updates aria-sort on sortable headers when sorting", async () => {
    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: complexRows },
    });

    const ageHeaderButton = getByLabelText("Sort by Age");

    let ageTh = container.querySelector('th[aria-sort="none"]');
    expect(ageTh).toBeTruthy();

    await fireEvent.click(ageHeaderButton);
    ageTh = container.querySelector('th[aria-sort="ascending"]');
    expect(ageTh).toBeTruthy();

    await fireEvent.click(ageHeaderButton);
    ageTh = container.querySelector('th[aria-sort="descending"]');
    expect(ageTh).toBeTruthy();
  });

  it("supports keyboard sorting via Enter and Space", async () => {
    const { getByLabelText, container } = render(Table, {
      props: { columns: baseColumns, rows: complexRows },
    });

    const nameHeaderButton = getByLabelText("Sort by Name");

    await fireEvent.keyDown(nameHeaderButton, { key: "Enter" });
    let nameTh = container.querySelector('th[aria-sort="ascending"]');
    expect(nameTh).toBeTruthy();

    await fireEvent.keyDown(nameHeaderButton, { key: " " });
    nameTh = container.querySelector('th[aria-sort="descending"]');
    expect(nameTh).toBeTruthy();
  });

  it("preserves sort state after rerender with new rows", async () => {
    const rows1: Row[] = [
      { name: "Ada", age: 30 },
      { name: "Linus", age: 40 },
      { name: "Alan", age: 25 },
    ];

    const rows2: Row[] = [
      { name: "Alan", age: 25 },
      { name: "Linus", age: 40 },
      { name: "Ada", age: 30 },
    ];

    const { getByLabelText, container, rerender } = render(Table, {
      props: { columns: baseColumns, rows: rows1 },
    });

    const ageHeaderButton = getByLabelText("Sort by Age");
    await fireEvent.click(ageHeaderButton); // sort asc

    await rerender({ columns: baseColumns, rows: rows2 });

    const bodyRows = container.querySelectorAll("tbody tr");
    const ages = Array.from(bodyRows).map(
      (row) => row.querySelectorAll("td")[1].textContent,
    );

    expect(ages).toEqual(["25", "30", "40"]);
  });

  // ---------- PAGINATION ----------

  it("renders pagination section when pagination prop is provided", () => {
    const pagination = {
      currentPage: 1,
      totalPages: 3,
      onPageChange: vi.fn(),
    };

    const { container } = render(Table, {
      props: { columns: baseColumns, rows: complexRows, pagination },
    });

    const table = container.querySelector("table")!;
    const paginationWrapper = table.nextElementSibling as HTMLElement | null;

    expect(paginationWrapper).toBeTruthy();
  });

  // ---------- OTHER ----------

  it("applies custom class to wrapper", () => {
    const { container } = render(Table, {
      props: { columns: baseColumns, rows: simpleRows, class: "custom-table" },
    });

    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("custom-table");
  });
});
