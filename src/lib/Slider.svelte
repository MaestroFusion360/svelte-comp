<!-- src/lib/Slider.svelte -->
<script lang="ts">
  /**
   * @component Slider
   * @description A customizable slider component for selecting a value from a range.
   *
   * @prop value {number} - The current value (bindable)
   * @default 0
   *
   * @prop min {number} - Minimum value
   * @default 0
   *
   * @prop max {number} - Maximum value
   * @default 100
   *
   * @prop step {number} - Step size
   * @default 1
   *
   * @prop sz {SizeKey} - Slider size
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {ComponentVariant} - Color variant
   * @options default|neutral
   * @default default
   *
   * @prop disabled {boolean} - Disable the slider
   * @default false
   *
   * @prop showValue {boolean} - Show the current value
   * @default false
   *
   * @prop onInput {(value: number) => void} - Fires on value change
   *
   * @prop class {string} - Custom wrapper classes
   * @default ""
   *
   * @note Works with both keyboard and mouse.
   * @note Size and variant control appearance.
   * @note Uses proper ARIA attributes.
   */
  import type { HTMLAttributes } from "svelte/elements";
  import type { SizeKey, ComponentVariant } from "$lib/types";
  import { TEXT } from "$lib/types";
  import { cx, clamp } from "$utils";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    sz?: SizeKey;
    variant?: ComponentVariant;
    disabled?: boolean;
    showValue?: boolean;
    onInput?: (value: number) => void;
    class?: string;
  };

  let {
    value = $bindable(0),
    min = 0,
    max = 100,
    step = 1,
    sz = "md",
    variant = "default",
    disabled = false,
    showValue = false,
    onInput,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const sizeTrack = $derived(
    {
      xs: "h-[4px]",
      sm: "h-[5px]",
      md: "h-[6px]",
      lg: "h-[7px]",
      xl: "h-[8px]",
    }[sz]
  );

  const sizeThumb = $derived(
    {
      xs: "[&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3",
      sm: "[&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4",
      md: "[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
      lg: "[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6",
      xl: "[&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7",
    }[sz]
  );

  const bar = $derived(
    variant === "neutral"
      ? "bg-[var(--color-bg-secondary)]"
      : "bg-[var(--color-bg-primary)]"
  );

  const thumb = $derived(
    variant === "neutral"
      ? "[&::-webkit-slider-thumb]:bg-[var(--color-bg-secondary)] [&::-moz-range-thumb]:bg-[var(--color-bg-secondary)]"
      : "[&::-webkit-slider-thumb]:bg-[var(--color-bg-primary)] [&::-moz-range-thumb]:bg-[var(--color-bg-primary)]"
  );

  const pct = $derived(
    clamp(((value - min) / Math.max(1e-12, max - min)) * 100, 0, 100)
  );

  const rootClass = $derived(
    cx(
      "relative w-full data-[disabled=true]:opacity-[var(--opacity-disabled)]",
      disabled ? "cursor-not-allowed" : "cursor-pointer",
      externalClass
    )
  );

  const trackClass = $derived(
    cx(
      "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--color-bg-muted)] rounded overflow-hidden",
      sizeTrack
    )
  );

  const rangeBase =
    "relative z-10 w-full h-10 bg-transparent appearance-none cursor-pointer disabled:cursor-not-allowed " +
    "[&::-webkit-slider-thumb]:appearance-none " +
    "[&::-webkit-slider-thumb]:rounded-[var(--radius-full)] " +
    "[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--color-bg-surface)] " +
    "[&::-webkit-slider-thumb]:shadow-[var(--shadow-color)] " +
    "[&::-moz-range-thumb]:rounded-[var(--radius-full)] " +
    "[&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--color-bg-surface)] " +
    "[&::-moz-range-thumb]:shadow-[var(--shadow-color)] " +
    "hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-125 " +
    "hover:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:scale-125 " +
    "focus:outline-none focus-visible:outline-none " +
    "focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] " +
    "focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_3px_var(--border-color-focus)] " +
    "disabled:hover:[&::-webkit-slider-thumb]:scale-100 disabled:active:[&::-webkit-slider-thumb]:scale-100 " +
    "disabled:hover:[&::-moz-range-thumb]:scale-100 disabled:active:[&::-moz-range-thumb]:scale-100";

  const rangeClass = $derived(cx(rangeBase, sizeThumb, thumb));

  function snap(v: number) {
    const s = step || 1;
    const ticks = Math.round((v - min) / s);
    const snapped = min + ticks * s;
    return clamp(Number(snapped.toFixed(6)), min, max);
  }

  let wrap: HTMLDivElement;

  function setFromClientX(x: number) {
    const r = wrap.getBoundingClientRect();
    const ratio = clamp((x - r.left) / r.width, 0, 1);
    value = snap(min + ratio * (max - min));
    onInput?.(value);
  }

  function onTrackClick(e: MouseEvent) {
    if (disabled) return;
    setFromClientX(e.clientX);
  }

  function onRangeInput(e: Event) {
    const t = e.currentTarget as HTMLInputElement;
    value = snap(Number(t.value));
    onInput?.(value);
  }

  function onKey(e: KeyboardEvent) {
    if (disabled) return;
    const span = max - min;
    const big = Math.max(step || 1, Math.round(span / 10));
    let v = value;

    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        v = value - (step || 1);
        break;
      case "ArrowRight":
      case "ArrowUp":
        v = value + (step || 1);
        break;
      case "PageDown":
        v = value - big;
        break;
      case "PageUp":
        v = value + big;
        break;
      case "Home":
        v = min;
        break;
      case "End":
        v = max;
        break;
      default:
        return;
    }

    value = snap(v);
    onInput?.(value);
    e.preventDefault();
  }
</script>

<div
  bind:this={wrap}
  class={rootClass}
  onclick={onTrackClick}
  data-disabled={disabled ? "true" : undefined}
  {...rest}
>
  <div class="relative flex items-center w-full h-10">
    <div class={trackClass}>
      <div
        class={cx("w-full h-full transition-[width]", bar)}
        style={`width:${pct}%`}
      ></div>
    </div>

    <input
      type="range"
      class={rangeClass}
      {min}
      {max}
      {step}
      {value}
      oninput={onRangeInput}
      onkeydown={onKey}
      {disabled}
      aria-label="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
    />
  </div>

  {#if showValue}
    <div class="flex justify-end mt-1">
      <div
        class="font-[var(--font-mono)] text-[var(--color-text-muted)] select-none {TEXT[
          sz
        ]}"
      >
        {value}
      </div>
    </div>
  {/if}
</div>
