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
  import { getContext } from "svelte";
  import Button from "./Button.svelte";
  import { cx, formatDate } from "$utils";
  import { TEXTS } from "./lang";

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
    min,
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

  const langCtx =
    getContext<{ value: keyof typeof TEXTS } | undefined>("lang") ?? null;
  const langKey = $derived(langCtx?.value ?? "en");
  const L = $derived(TEXTS[langKey].components.datePicker);

  const labelFinal = $derived(label ?? L.text);
  const placeholderFinal = $derived(placeholder ?? L.placeholder);

  let inputEl: HTMLInputElement;

  const base = "inline-block w-full";
  const pickerClass = $derived(cx(base, externalClass));

  const hasValue = $derived(Boolean(value));
  const formattedValue = $derived(formatDate(value, locale, formatOptions));

  $effect(() => {
    if (inputEl) {
      inputEl.value = value ?? "";
    }
  });

  function openPicker() {
    if (disabled) return;
    if (typeof inputEl?.showPicker === "function") {
      inputEl.showPicker();
    } else {
      inputEl?.focus();
      inputEl?.click();
    }
  }

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const nextValue = target.value || null;
    value = nextValue;
    onChange?.(nextValue);
  }

  function clearSelection() {
    if (!clearable) return;
    value = null;
    if (inputEl) {
      inputEl.value = "";
    }
    onChange?.(null);
  }
</script>

<div class={pickerClass} {...rest}>
  <div class="text-md font-medium mb-2 [color:var(--color-text-default)]">
    {labelFinal}:
  </div>
  <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
    <Button onClick={openPicker} {disabled} sz="xs">
      {L.date}
    </Button>

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
  </div>

  <input
    bind:this={inputEl}
    type="date"
    {min}
    {max}
    {disabled}
    class="invisible absolute w-px h-px"
    onchange={handleInput}
  />

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
