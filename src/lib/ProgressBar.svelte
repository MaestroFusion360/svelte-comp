<!-- src/lib/ProgressBar.svelte -->
<script lang="ts">
  /**
   * @component ProgressBar
   * @description A simple and accessible progress bar component that visually represents task completion.
   *
   * @prop value {number} - Current progress value from 0 to 100
   * @default 0
   *
   * @prop indeterminate {boolean} - Enables the animated indeterminate state
   * @default false
   *
   * @prop sz {SizeKey} - Controls the bar height
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {ComponentVariant} - Visual style of the progress bar
   * @options default|neutral
   * @default default
   *
   * @prop class {string} - Additional CSS classes for the wrapper element
   * @default ""
   *
   * @prop label {string} - Optional text label displayed above the bar
   * @default ""
   *
   * @prop disabled {boolean} - Applies a muted inactive visual style
   * @default false
   *
   * @note Indeterminate animation for unknown progress.
   * @note Auto-clamping between 0 and 100.
   * @note Adaptive height based on size.
   * @note Theming support via CSS variables.
   * @note Fully accessible with proper `aria` roles.
   * @note No invalid ARIA attributes.
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { type SizeKey, type ComponentVariant, TEXT } from "./types";
  import { cx, clamp } from "../utils";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: number;
    indeterminate?: boolean;
    sz?: SizeKey;
    variant?: ComponentVariant;
    class?: string;
    label?: string;
    disabled?: boolean;
  };

  let {
    value = 0,
    indeterminate = false,
    sz = "md",
    variant = "default",
    class: externalClass = "",
    label = "",
    disabled = false,
    ...rest
  }: Props = $props();

  const pct = $derived(`${clamp(value, 0, 100)}%`);

  const sizeTrack = $derived(
    {
      xs: "h-[4px]",
      sm: "h-[5px]",
      md: "h-[6px]",
      lg: "h-[7px]",
      xl: "h-[8px]",
    }[sz]
  );

  const bar = $derived(
    variant === "neutral"
      ? "bg-[var(--color-bg-secondary)]"
      : "bg-[var(--color-bg-primary)]"
  );

  const rootClass = $derived(
    cx(
      "relative flex flex-col gap-1 w-full data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
      externalClass
    )
  );

  const trackClass = $derived(
    cx(
      "absolute top-1/2 -translate-y-1/2 w-full bg-[var(--border-color-default)] rounded overflow-hidden",
      sizeTrack
    )
  );

  const barClass = $derived(cx("h-full", bar));
</script>

<div
  class={rootClass}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={indeterminate ? undefined : Math.round(clamp(value, 0, 100))}
  data-disabled={disabled ? "true" : undefined}
  {...rest}
>
  {#if label}
    <span class="text-[var(--color-text-muted)] select-none {TEXT[sz]}">
      {label}
    </span>
  {/if}

  <div class="relative w-full h-10">
    <div class={trackClass}>
      {#if indeterminate}
        <div class={cx(barClass, "pb-indet")}></div>
      {:else}
        <div
          class={cx(barClass, "transition-[width]")}
          style={`width:${pct}`}
        ></div>
      {/if}
    </div>
  </div>
</div>

<style>
  :global {
    @keyframes pb-indeterminate {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(250%);
      }
    }
  }
  .pb-indet {
    width: 40%;
    animation: pb-indeterminate 2s linear infinite;
  }
</style>
