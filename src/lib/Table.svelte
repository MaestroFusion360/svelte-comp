<!-- src/lib/Table.svelte -->
<script lang="ts">
  /**
   * @component Table
   * @description Sortable table with optional zebra striping, sticky header, and external pagination. Compact variants (`dense`, `list`) shrink horizontally to fit content.
   *
   * @prop columns {readonly Column<T>[]} - Column definitions with labels and keys
   * @default []
   *
   * @prop rows {readonly T[]} - Row data objects
   * @default []
   *
   * @prop class {string} - Custom classes for the table container
   * @default ""
   *
   * @prop variant {TableVariant} - Visual style variant
   * @options default|dense|list|noBorder|noTitle|zebra
   * @default default
   *
   * @prop stickyHeader {boolean} - Makes the header row sticky
   * @default false
   *
   * @prop sz {SizeKey} - Size preset for spacing and text
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop pagination {{ currentPage: number; totalPages: number; onPageChange: (p: number) => void }} - External pagination controls
   *
   * @note Click a column header to toggle ascending or descending.
   * @note In `dense` and `list` the table uses content width (`inline-table` + `w-fit`).
   * @note Column `width` is applied only in non-compact variants (`default`, `zebra`, `noBorder`, `noTitle`).
   * @note `list` hides the header row.
   * @note Integrates with `Pagination.svelte` via the `pagination` prop.
   * @note Works in dark mode and supports keyboard sorting (Enter or Space on headers).
   */
  import Pagination from "./Pagination.svelte";
  import type {
    CellAlign,
    Column,
    SizeKey,
    TableRow,
    TableVariant,
  } from "$lib/types";
  import { TEXT } from "$lib/types";
  import { cx } from "$utils";

  type Props<T extends TableRow> = {
    columns: readonly Column<T>[];
    rows: readonly T[];
    class?: string;
    variant?: TableVariant;
    stickyHeader?: boolean;
    sz?: SizeKey;
    pagination?: {
      currentPage: number;
      totalPages: number;
      onPageChange: (page: number) => void;
    };
  };

  let {
    columns = [],
    rows = [],
    class: externalClass = "",
    variant = "default",
    stickyHeader = false,
    sz = "md",
    pagination,
  }: Props<TableRow> = $props();

  let sortKey = $state<keyof TableRow | null>(null);
  let sortDir = $state<"asc" | "desc" | null>(null);

  function toggleSort(col: Column<TableRow>) {
    const key = col.key;
    if (sortKey !== key) {
      sortKey = key;
      sortDir = "asc";
    } else {
      sortDir = sortDir === "asc" ? "desc" : "asc";
    }
  }

  function cmp(a: unknown, b: unknown): number {
    const an = a == null || a === "";
    const bn = b == null || b === "";
    if (an && bn) return 0;
    if (an) return 1;
    if (bn) return -1;

    const na = Number(a);
    const nb = Number(b);
    const aNum = !Number.isNaN(na);
    const bNum = !Number.isNaN(nb);

    if (aNum && bNum) return na - nb;

    return String(a).localeCompare(String(b), undefined, {
      numeric: true,
      sensitivity: "base",
    });
  }

  const variants = {
    default: {
      table: "border border-[var(--border-color-default)]",
      header:
        "bg-[var(--color-bg-secondary)] border border-[var(--border-color-default)]",
      body: "",
      cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
      row: "hover:bg-[var(--color-bg-hover)]",
      padY: "py-2",
    },
    dense: {
      table: "border border-[var(--border-color-default)]",
      header:
        "bg-[var(--color-bg-secondary)] border border-[var(--border-color-default)]",
      body: "",
      cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
      row: "hover:bg-[var(--color-bg-hover)]",
      padY: "py-1.5",
    },
    list: {
      table: "border-none",
      header: "hidden",
      body: "",
      cell: "border-none",
      row: "hover:bg-[var(--color-bg-hover)]",
      padY: "py-1.5",
    },
    noBorder: {
      table: "border-none",
      header: "bg-transparent border-none",
      body: "",
      cell: "border-none",
      row: "hover:bg-[var(--color-bg-hover)]",
      padY: "py-2",
    },
    zebra: {
      table: "border border-[var(--border-color-default)]",
      header:
        "bg-[var(--color-bg-secondary)] border border-[var(--border-color-default)]",
      body: "",
      cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
      row: "even:bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)]",
      padY: "py-2",
    },
    noTitle: {
      table: "border border-[var(--border-color-default)]",
      header: "hidden",
      body: "",
      cell: "border-t border-r last:border-r-0 border-[var(--border-color-default)]",
      row: "hover:bg-[var(--color-bg-hover)]",
      padY: "py-2",
    },
  };

  const displayRows = $derived.by(() => {
    const base = Array.isArray(rows) ? rows : [];
    if (!sortKey || !sortDir) return base as TableRow[];
    const key = sortKey;
    const withIdx = base.map((r, i) => [r as TableRow, i] as const);
    withIdx.sort(([r1, i1], [r2, i2]) => {
      const res = cmp(r1[key], r2[key]);
      if (res !== 0) return sortDir === "asc" ? res : -res;
      return i1 - i2;
    });
    return withIdx.map(([r]) => r);
  });

  const alignTd = (a?: CellAlign) =>
    a === "end" ? "text-right" : a === "start" ? "text-left" : "text-center";

  const wrapperClass = $derived(cx("overflow-x-auto", externalClass));
  const tableTextSize = $derived(TEXT[sz]);
  const currentVariant = $derived(variant);
  const isCompact = $derived(
    currentVariant === "list" || currentVariant === "dense"
  );
  const variantStyles = $derived(variants[currentVariant] ?? variants.default);

  const tableClass = $derived(
    cx(
      isCompact ? "inline-table w-fit" : "min-w-full",
      "border-collapse",
      variantStyles.table,
      tableTextSize,
      "text-[var(--color-text-default)]"
    )
  );

  const getRowKey = (row: TableRow, idx: number) => {
    const candidate =
      typeof row.id === "string" || typeof row.id === "number"
        ? row.id
        : typeof row.key === "string" || typeof row.key === "number"
          ? row.key
          : idx;
    return String(candidate);
  };

  const getColumnKey = (col: Column<TableRow>, idx: number) =>
    String(col.key ?? idx);
</script>

<div class={wrapperClass} tabindex="-1">
  <table class={tableClass}>
    <thead class={variantStyles.header}>
      {#if currentVariant !== "noTitle" && currentVariant !== "list"}
        <tr class={cx(stickyHeader && "sticky top-0 z-10")}>
          {#each columns as col, idx (getColumnKey(col, idx))}
            <th
              style={!isCompact && col.width ? `width:${col.width}` : undefined}
              class={cx(
                "px-3 font-semibold",
                variantStyles.padY,
                alignTd(col.align)
              )}
              aria-sort={sortKey === col.key
                ? sortDir === "asc"
                  ? "ascending"
                  : "descending"
                : "none"}
              scope="col"
            >
              <button
                type="button"
                class="flex items-center gap-2 select-none hover:bg-[var(--color-bg-hover)] rounded-none px-1 py-0.5 border border-transparent focus-visible:border-[var(--border-color-focus)] focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus-visible:outline-none"
                onclick={() => toggleSort(col)}
                onkeydown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleSort(col);
                  }
                }}
                aria-label={`Sort by ${col.label}`}
              >
                <span class="truncate min-w-0 text-left">{col.label}</span>
                <svg
                  class={cx(
                    "h-4 w-4 opacity-60 transition-transform",
                    sortKey === col.key && sortDir === "desc" && "rotate-180"
                  )}
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M5.23 11.77a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L10 8.31l-3.77 3.46a.75.75 0 0 1-1 0z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </th>
          {/each}
        </tr>
      {/if}
    </thead>

    <tbody class={variantStyles.body}>
      {#each displayRows as row, rowIdx (getRowKey(row, rowIdx))}
        <tr class={cx("first:[&>td]:border-t-0", variantStyles.row)}>
          {#each columns as col, idx (getColumnKey(col, idx))}
            <td
              style={!isCompact && col.width ? `width:${col.width}` : undefined}
              class={cx(
                "px-3",
                variantStyles.padY,
                alignTd(col.align),
                variantStyles.cell
              )}
            >
              <div class={cx(isCompact && "break-words whitespace-normal")}>
                {row[col.key]}
              </div>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>

  {#if pagination && pagination.totalPages > 0}
    <div class="mt-3 flex justify-between items-center">
      <Pagination {...pagination} />
    </div>
  {/if}
</div>
