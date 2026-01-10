<!-- src/lib/DatePicker.svelte -->
<script lang="ts">
  /**
   * @component DatePicker
   * @description Button-driven date selector that formats the chosen value and supports min/max limits.
   *
   * @prop value {string | null} - Selected date value (ISO `YYYY-MM-DD`)
   * @default null
   *
   * @prop min {string} - Minimum selectable date (ISO `YYYY-MM-DD`)
   *
   * @prop max {string} - Maximum selectable date (ISO `YYYY-MM-DD`)
   *
   * @prop label {string} - Label text displayed above the picker
   *
   * @prop placeholder {string} - Placeholder shown when no date is selected
   *
   * @prop locale {string} - Locale used for formatting
   *
   * @prop formatOptions {Intl.DateTimeFormatOptions} - Custom date formatting options
   *
   * @prop disabled {boolean} - Disables all interactions
   * @default false
   *
   * @prop clearable {boolean} - Shows a clear button to reset the value
   * @default true
   *
   * @prop onChange {(value: string | null) => void} - Fired when the date changes
   *
   * @prop class {string} - Additional classes for the wrapper element
   * @default ""
   *
   * @note Wraps a hidden `<input type="date">` so native date-pickers, keyboard, and validation work automatically.
   * @note `showPicker()` is used when available for a consistent trigger; fallback is focus + click.
   * @note Formatter uses `Intl.DateTimeFormat` (with `locale`/`formatOptions`) and gracefully falls back to `toLocaleDateString()`.
   * @note `clearable` resets the underlying input value and dispatches `onChange(null)`.
   * @note Preview card includes `aria-live="polite"` to announce updated dates.
   */
  import type { HTMLAttributes } from "svelte/elements";
  import Button from "./Button.svelte";
  import Calendar from "./Calendar.svelte";
  import { cx, formatDate, uid } from "../utils";
  import { getComponentText, getLangContext, getLangKey } from "./lang-context";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string | null;
    min?: string;
    max?: string;
    label?: string;
    placeholder?: string;
    locale?: string;
    formatOptions?: Intl.DateTimeFormatOptions;
    disabled?: boolean;
    clearable?: boolean;
    onChange?: (value: string | null) => void;
    class?: string;
  };

  let {
    value = $bindable<string | null>(null),
    min = "1926-01-01",
    max,
    label,
    placeholder,
    locale,
    formatOptions,
    disabled = false,
    clearable = true,
    onChange,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const langCtx = getLangContext();
  const langKey = $derived(getLangKey(langCtx));
  const L = $derived(getComponentText("datePicker", langKey));

  const labelFinal = $derived(label ?? L.text);
  const placeholderFinal = $derived(placeholder ?? L.placeholder);

  const base = "inline-block w-full";
  const pickerClass = $derived(cx(base, externalClass));

  const hasValue = $derived(Boolean(value));
  const formattedValue = $derived(formatDate(value, locale, formatOptions));

  let open = $state(false);
  const panelId = uid("calendar-");
  const panelWidth = 240;

  let triggerEl = $state<HTMLDivElement | null>(null);
  let panelEl = $state<HTMLDivElement | null>(null);
  let panelTop = $state(0);
  let panelLeft = $state(0);

  const panelStyle = $derived(
    `position:fixed; top:${panelTop}px; left:${panelLeft}px; width:${panelWidth}px;`
  );

  function togglePanel() {
    if (disabled) return;
    open = !open;
  }

  function handleSelect(nextValue: string | null) {
    value = nextValue;
    onChange?.(nextValue);
    open = false;
  }

  function clearSelection() {
    if (!clearable) return;
    value = null;
    onChange?.(null);
  }

  $effect(() => {
    const currentTrigger = triggerEl;
    const currentPanel = panelEl;
    if (!open || !currentTrigger) return;

    const updatePosition = () => {
      const triggerRect = currentTrigger.getBoundingClientRect();
      const panelHeight =
        currentPanel?.getBoundingClientRect().height ?? 0;
      const spaceBelow = window.innerHeight - triggerRect.bottom;
      const spaceAbove = triggerRect.top;
      const shouldFlip = spaceBelow < panelHeight && spaceAbove > spaceBelow;

      panelTop = shouldFlip
        ? Math.max(0, triggerRect.top - panelHeight - 8)
        : triggerRect.bottom + 8;

      const viewportLeft = window.scrollX;
      const viewportRight = window.scrollX + window.innerWidth;
      const targetLeft = triggerRect.left + window.scrollX;
      const maxLeft = viewportRight - panelWidth;
      panelLeft = Math.max(viewportLeft, Math.min(targetLeft, maxLeft));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        open = false;
      }
    };

    const onClickOutside = (event: MouseEvent) => {
      if (
        currentTrigger &&
        currentPanel &&
        !currentTrigger.contains(event.target as Node) &&
        !currentPanel.contains(event.target as Node)
      ) {
        open = false;
      }
    };

    queueMicrotask(updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  });
</script>

<div class={pickerClass} {...rest}>
  <div class="text-md font-medium mb-2 [color:var(--color-text-default)]">
    {labelFinal}:
  </div>
  <div class="inline-flex flex-wrap items-center gap-x-3 gap-y-2">
    <div bind:this={triggerEl}>
      <Button
        onClick={togglePanel}
        {disabled}
        sz="xs"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
      >
        {L.date}
      </Button>
    </div>

    {#if clearable}
      <Button
        onClick={clearSelection}
        variant="danger"
        disabled={!hasValue || disabled}
        sz="xs"
      >
        {L.clear}
      </Button>
    {/if}

    {#if open}
      <div
        role="presentation"
        tabindex="-1"
        class="fixed inset-0 z-[var(--z-overlay)]"
      ></div>

      <div
        bind:this={panelEl}
        id={panelId}
        role="dialog"
        aria-label={labelFinal}
        class="z-[var(--z-modal)] p-3 border border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] shadow-[0_2px_6px_var(--shadow-color)]"
        style={panelStyle}
      >
        <Calendar
          value={value}
          {min}
          {max}
          {locale}
          onChange={handleSelect}
          showOutsideDays
          class="max-w-full"
        />
      </div>
    {/if}
  </div>

  <div
    class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center"
    aria-live="polite"
  >
    <p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]">
      {L.selectedDate}
    </p>

    <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]">
      {#if hasValue}
        {formattedValue}
      {:else}
        {placeholderFinal}
      {/if}
    </p>
  </div>
</div>
