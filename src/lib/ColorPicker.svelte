<!-- src/lib/ColorPicker.svelte -->
<script lang="ts">
  /**
   * @component ColorPicker
   * @description Accessible wrapper around the native `<input type="color">` with a trigger button and preview card.
   *
   * @prop value {string | null} - Selected color value (hex)
   * @default null
   *
   * @prop label {string} - Label displayed above the control
   *
   * @prop placeholder {string} - Placeholder text when no color is chosen
   *
   * @prop disabled {boolean} - Disables all interactions
   * @default false
   *
   * @prop clearable {boolean} - Shows a clear/reset button
   * @default true
   *
   * @prop onChange {(value: string | null) => void} - Fired when the color changes
   *
   * @prop class {string} - Additional classes for the wrapper element
   * @default ""
   *
   * @note Uses the new `HTMLInputElement.showPicker()` API when available; falls back to focusing/clicking the hidden input.
   * @note Keeps the hidden color input in sync with controlled `value` through `$effect`.
   * @note Preview swatch mirrors the current color and announces via `aria-label`.
   * @note `clearable=false` hides the clear button; when `disabled`, pointer/keyboard handlers are skipped.
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { getContext } from "svelte";
  import Button from "./Button.svelte";
  import { cx } from "$utils";
  import { TEXTS } from "./lang";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string | null;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    onChange?: (value: string | null) => void;
    class?: string;
  };

  let {
    value = $bindable<string | null>(null),
    label,
    placeholder,
    disabled = false,
    clearable = true,
    onChange,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const langCtx =
    getContext<{ value: keyof typeof TEXTS } | undefined>("lang") ?? null;
  const langKey = $derived(langCtx?.value ?? "en");
  const L = $derived(TEXTS[langKey].components.colorPicker);

  const labelFinal = $derived(label ?? L.text);
  const placeholderFinal = $derived(placeholder ?? L.placeholder);

  let inputEl: HTMLInputElement;

  const base = "inline-block w-full";
  const pickerClass = $derived(cx(base, externalClass));

  const hasValue = $derived(Boolean(value));
  const previewColor = $derived(value ?? "transparent");

  $effect(() => {
    if (inputEl) {
      inputEl.value = value || "#000000";
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
      inputEl.value = "#000000";
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
      {L.color}
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
    type="color"
    {disabled}
    class="invisible absolute w-px h-px"
    onchange={handleInput}
    value="#000000"
  />

  <div
    class="mt-3 p-4 border border-dashed border-[var(--border-color-default)] rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] flex items-center justify-between gap-3"
    aria-live="polite"
  >
    <div>
      <p
        class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]"
      >
        {L.selectedColor}
      </p>
      <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]">
        {#if hasValue}
          {value}
        {:else}
          {placeholderFinal}
        {/if}
      </p>
    </div>

    <div
      class="w-12 h-12 rounded-[var(--radius-sm)] border border-[var(--border-color-default)] shadow-inner"
      aria-label={hasValue ? `Preview of ${value}` : "No color selected"}
      style={`background:${previewColor}`}
    ></div>
  </div>
</div>
