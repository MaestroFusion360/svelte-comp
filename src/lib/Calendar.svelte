<!-- src/lib/Calendar.svelte -->
<script lang="ts">
  /**
   * @component Calendar
   * @description Monthly calendar grid with navigation and date selection.
   *
   * @prop value {string | null} - Selected date in ISO `YYYY-MM-DD` (bindable)
   * @default null
   *
   * @prop min {string} - Minimum selectable date (ISO `YYYY-MM-DD`)
   *
   * @prop max {string} - Maximum selectable date (ISO `YYYY-MM-DD`)
   *
   * @prop locale {string} - Locale used for month/day labels
   * @default "en-US"
   *
   * @prop weekStartsOn {0|1|2|3|4|5|6} - First day of week (0=Sun ... 6=Sat)
   * @default 1
   *
   * @prop showOutsideDays {boolean} - Render days from adjacent months
   * @default true
   *
   * @prop disabled {boolean} - Disables selection and navigation
   * @default false
   *
   * @prop onChange {(value: string | null) => void} - Fired on date selection
   *
   * @prop class {string} - Additional classes for the root wrapper
   * @default ""
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { cx } from "../utils";
  import { TEXT } from "./types";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string | null;
    min?: string;
    max?: string;
    locale?: string;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showOutsideDays?: boolean;
    disabled?: boolean;
    onChange?: (value: string | null) => void;
    class?: string;
  };

  let {
    value = $bindable<string | null>(null),
    min = "1926-01-01",
    max,
    locale = "en-US",
    weekStartsOn = 1,
    showOutsideDays = true,
    disabled = false,
    onChange,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  type ViewMode = "days" | "months" | "years";

  function startOfDay(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function parseIso(value: string | null | undefined): Date | null {
    if (!value) return null;
    const [y, m, d] = value.split("-").map((part) => Number(part));
    if (!y || !m || !d) return null;
    const date = new Date(y, m - 1, d);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function toIso(date: Date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function isSameDay(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  let internalValue = $state<string | null>(value ?? null);
  let lastValue = $state<string | null>(value ?? null);
  let viewDate = $state(startOfDay(new Date()));
  let viewMode = $state<ViewMode>("days");

  const selectedDate = $derived(parseIso(internalValue));
  const minDate = $derived(parseIso(min));
  const maxDate = $derived(parseIso(max));
  const today = $derived(startOfDay(new Date()));

  $effect(() => {
    const next = value ?? null;
    if (next !== lastValue) {
      lastValue = next;
      internalValue = next;
    }
  });

  $effect(() => {
    const selected = parseIso(internalValue);
    if (!selected) return;
    viewDate = new Date(selected.getFullYear(), selected.getMonth(), 1);
  });

  const monthLabel = $derived(
    new Intl.DateTimeFormat(locale, { month: "long" }).format(viewDate)
  );

  const yearLabel = $derived(String(viewDate.getFullYear()));

  const weekdayLabels = $derived.by(() => {
    const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
    const labels: string[] = [];
    for (let i = 0; i < 7; i += 1) {
      const offset = (weekStartsOn + i) % 7;
      const date = new Date(2023, 0, 1 + offset);
      labels.push(formatter.format(date));
    }
    return labels;
  });

  const dayLabelFormatter = $derived.by(
    () =>
      new Intl.DateTimeFormat(locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
  );

  const monthOptions = $derived.by(() => {
    const formatter = new Intl.DateTimeFormat(locale, { month: "short" });
    return Array.from({ length: 12 }, (_, idx) => ({
      index: idx,
      label: formatter.format(new Date(2024, idx, 1)),
    }));
  });

  const yearRangeStart = $derived(() => {
    const year = viewDate.getFullYear();
    return year - (year % 12);
  });

  const yearOptions = $derived.by(() =>
    Array.from({ length: 12 }, (_, idx) => yearRangeStart() + idx)
  );

  type DayCell = {
    date: Date;
    iso: string;
    inMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isDisabled: boolean;
  };

  const days = $derived.by(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() - weekStartsOn + 7) % 7;
    const cells: DayCell[] = [];
    for (let i = 0; i < 42; i += 1) {
      const date = new Date(year, month, 1 - startOffset + i);
      const day = startOfDay(date);
      const inMonth = day.getMonth() === month;
      const isToday = isSameDay(day, today);
      const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
      const beforeMin = minDate ? day < startOfDay(minDate) : false;
      const afterMax = maxDate ? day > startOfDay(maxDate) : false;
      const isDisabled =
        disabled || beforeMin || afterMax || (!showOutsideDays && !inMonth);
      cells.push({
        date: day,
        iso: toIso(day),
        inMonth,
        isToday,
        isSelected,
        isDisabled,
      });
    }
    return cells;
  });

  function handleShift(delta: number) {
    if (disabled) return;
    if (viewMode === "days") {
      viewDate = new Date(
        viewDate.getFullYear(),
        viewDate.getMonth() + delta,
        1
      );
    } else if (viewMode === "months") {
      viewDate = new Date(viewDate.getFullYear() + delta, viewDate.getMonth(), 1);
    } else {
      viewDate = new Date(
        viewDate.getFullYear() + delta * 12,
        viewDate.getMonth(),
        1
      );
    }
  }

  function handleWheel(event: WheelEvent) {
    if (disabled || viewMode !== "days") return;
    if (event.deltaY === 0) return;
    event.preventDefault();
    handleShift(event.deltaY > 0 ? 1 : -1);
  }

  function selectDay(cell: DayCell) {
    if (cell.isDisabled) return;
    internalValue = cell.iso;
    value = cell.iso;
    onChange?.(cell.iso);
  }

  function selectMonth(index: number) {
    if (disabled) return;
    viewDate = new Date(viewDate.getFullYear(), index, 1);
    viewMode = "days";
  }

  function selectYear(year: number) {
    if (disabled) return;
    viewDate = new Date(year, viewDate.getMonth(), 1);
    viewMode = "months";
  }

  const wrapperClass = $derived(cx("w-full", externalClass));

  const headerButtonBase =
    "px-1 py-0.5 rounded-[var(--radius-sm)] text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed text-[var(--text-xs)] transition-none";

  const arrowButtonBase =
    "inline-flex items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed h-[var(--cal-cell)] w-[var(--cal-cell)] transition-none";

  const dayButtonBase =
    "rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] text-[var(--text-xs)] text-[var(--color-text-default)] transition-none";
</script>

  <div
  class={cx(
    wrapperClass,
    "w-full h-full text-[var(--color-text-default)] [--cal-cell:clamp(16px,4vw,20px)] [--cal-gap:clamp(1px,0.6vw,3px)] [--cal-gap-lg:clamp(2px,0.9vw,6px)]"
  )}
  {...rest}
>
  <div class="flex items-center justify-between mb-[var(--cal-gap-lg)]">
    <div class="flex items-center gap-1">
      <button
        type="button"
        class={cx(headerButtonBase, TEXT.sm)}
        onclick={() => (viewMode = viewMode === "months" ? "days" : "months")}
        disabled={disabled}
      >
        {monthLabel}
      </button>
      <button
        type="button"
        class={cx(headerButtonBase, TEXT.sm)}
        onclick={() => (viewMode = viewMode === "years" ? "days" : "years")}
        disabled={disabled}
      >
        {yearLabel}
      </button>
    </div>

    <div class="flex items-center gap-1">
      <button
        type="button"
        class={arrowButtonBase}
        aria-label="Previous"
        onclick={() => handleShift(-1)}
        disabled={disabled}
      >
        ▲
      </button>
      <button
        type="button"
        class={arrowButtonBase}
        aria-label="Next"
        onclick={() => handleShift(1)}
        disabled={disabled}
      >
        ▼
      </button>
    </div>
  </div>

  {#if viewMode === "days"}
    <div class={cx("grid grid-cols-7 gap-[var(--cal-gap)] text-center", TEXT.xs)}>
      {#each weekdayLabels as label, i (i)}
        <div class="py-[var(--cal-gap)] [color:var(--color-text-muted)]">
          {label}
        </div>
      {/each}
    </div>

    <div
      class="grid grid-cols-7 gap-[var(--cal-gap)] mt-[var(--cal-gap)]"
      onwheel={handleWheel}
    >
      {#each days as cell (cell.iso)}
        <button
          type="button"
          class={cx(
            dayButtonBase,
            "text-[var(--color-text-default)]",
            cell.isToday &&
              "bg-[var(--color-bg-primary)] text-[var(--color-text-default)] hover:brightness-110",
            cell.isSelected &&
              "border border-[var(--border-color-primary)]",
            !cell.inMonth && "opacity-60",
            cell.isDisabled &&
              "opacity-[var(--opacity-disabled)] cursor-not-allowed",
            !cell.isDisabled && "hover:bg-[var(--color-bg-hover)]",
            "w-[var(--cal-cell)] h-[var(--cal-cell)] justify-self-center"
          )}
          aria-pressed={cell.isSelected}
          aria-current={cell.isToday ? "date" : undefined}
          aria-label={dayLabelFormatter.format(cell.date)}
          disabled={cell.isDisabled}
          onclick={() => selectDay(cell)}
        >
          {#if cell.inMonth || showOutsideDays}
            {cell.date.getDate()}
          {/if}
        </button>
      {/each}
    </div>
  {:else if viewMode === "months"}
    <div class="grid grid-cols-4 gap-[var(--cal-gap-lg)]">
      {#each monthOptions as month (month.index)}
        <button
          type="button"
          class={cx(
            "rounded-[var(--radius-md)] text-center text-[var(--color-text-default)] w-[var(--cal-cell)] h-[var(--cal-cell)]",
            TEXT.xs,
            month.index === viewDate.getMonth() &&
              "bg-[var(--color-bg-primary)]",
            month.index !== viewDate.getMonth() &&
              "hover:bg-[var(--color-bg-hover)]",
            disabled && "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          )}
          onclick={() => selectMonth(month.index)}
          disabled={disabled}
        >
          {month.label}
        </button>
      {/each}
    </div>
  {:else}
    <div class="grid grid-cols-4 gap-[var(--cal-gap-lg)]">
      {#each yearOptions as year (year)}
        <button
          type="button"
          class={cx(
            "rounded-[var(--radius-md)] text-center text-[var(--color-text-default)] w-[var(--cal-cell)] h-[var(--cal-cell)] transition-none",
            TEXT.xs,
            year === viewDate.getFullYear() &&
              "bg-[var(--color-bg-primary)]",
            year !== viewDate.getFullYear() &&
              "hover:bg-[var(--color-bg-hover)]",
            disabled && "opacity-[var(--opacity-disabled)] cursor-not-allowed"
          )}
          onclick={() => selectYear(year)}
          disabled={disabled}
        >
          {year}
        </button>
      {/each}
    </div>
  {/if}
</div>
