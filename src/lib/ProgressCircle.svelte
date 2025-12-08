<!-- src/lib/ProgressCircle.svelte -->
<script lang="ts">
  /**
   * @component ProgressCircle
   * @description Circular progress indicator for visualizing completion or load state (0-100). Supports indeterminate mode.
   * @prop value {number} - Current progress value
   * @default 0
   * @prop indeterminate {boolean} - Enables spinning infinite mode
   * @default false
   * @prop size {number} - Diameter in px
   * @default 48
   * @prop stroke {number} - Stroke width in px
   * @default 4
   * @prop variant {ComponentVariant} - Color/style variant
   * @options default|neutral|success|warning|error
   * @default default
   * @prop label {string} - Optional text shown in center
   * @default ""
   * @prop max {number} - Max progress value for normalization
   * @default 100
   * @prop class {string} - Extra wrapper classes
   * @default ""
   * @note Clamps value between 0-max
   * @note Uses SVG stroke-dashoffset animation
   * @note Accessible role=progressbar with aria-valuenow
   * @note Works in both determinate/indeterminate modes
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { type SizeKey, type ComponentVariant, TEXT } from "$lib/types";
  import { cx, clamp } from "$utils";

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

  const sizes: Record<SizeKey, { diameter: number; stroke: number }> = {
    xs: { diameter: 40, stroke: 4 },
    sm: { diameter: 48, stroke: 5 },
    md: { diameter: 56, stroke: 6 },
    lg: { diameter: 64, stroke: 7 },
    xl: { diameter: 72, stroke: 8 },
  };

  const pctValue = $derived(clamp(value, 0, 100));
  const pctText = $derived(Math.round(pctValue));

  const geometry = $derived(sizes[sz]);
  const center = $derived(geometry.diameter / 2);
  const radius = $derived(center - geometry.stroke / 2);
  const circumference = $derived(2 * Math.PI * radius);

  const dashOffset = $derived(((100 - pctValue) / 100) * circumference);
  const dashArray = $derived(`${circumference} ${circumference}`);
  const indeterminateDash = $derived(`${circumference * 0.3} ${circumference}`);

  const strokeColor = $derived(
    variant === "neutral"
      ? "stroke-[var(--color-bg-secondary)]"
      : "stroke-[var(--color-bg-primary)]"
  );

  const rootClass = $derived(
    cx(
      "inline-flex flex-col items-center gap-1 data-[disabled=true]:opacity-[var(--opacity-disabled)] data-[disabled=true]:cursor-not-allowed",
      externalClass
    )
  );
</script>

<div
  class={rootClass}
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={indeterminate ? undefined : pctText}
  data-disabled={disabled ? "true" : undefined}
  {...rest}
>
  {#if label}
    <span class="text-[var(--color-text-muted)] select-none {TEXT[sz]}">
      {label}
    </span>
  {/if}

  <div
    class="relative inline-flex items-center justify-center"
    style={`width:${geometry.diameter}px;height:${geometry.diameter}px;`}
  >
    <svg
      class="pc-svg"
      viewBox={`0 0 ${geometry.diameter} ${geometry.diameter}`}
      role="presentation"
      aria-hidden="true"
    >
      <g class="pc-rot">
        <circle
          class="pc-track"
          cx={center}
          cy={center}
          r={radius}
          stroke-width={geometry.stroke}
        ></circle>

        {#if indeterminate}
          <circle
            class={cx("pc-bar pc-indet", strokeColor)}
            cx={center}
            cy={center}
            r={radius}
            stroke-width={geometry.stroke}
            stroke-dasharray={indeterminateDash}
          ></circle>
        {:else}
          <circle
            class={cx("pc-bar", strokeColor)}
            cx={center}
            cy={center}
            r={radius}
            stroke-width={geometry.stroke}
            stroke-dasharray={dashArray}
            stroke-dashoffset={dashOffset}
          ></circle>
        {/if}
      </g>
    </svg>

    {#if !indeterminate}
      <div
        class="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] font-medium select-none {TEXT[
          sz
        ]}"
      >
        {pctText}%
      </div>
    {/if}
  </div>
</div>

<style>
  .pc-svg {
    width: 100%;
    height: 100%;
  }
  .pc-rot {
    transform: rotate(-90deg);
    transform-origin: center;
  }
  .pc-track {
    fill: none;
    stroke: var(--border-color-default);
  }
  .pc-bar {
    fill: none;
    stroke-linecap: round;
    transition:
      stroke-dashoffset 0.25s ease,
      stroke 0.2s ease;
    transform-origin: center;
  }
  .pc-indet {
    animation: pc-spin 1.2s linear infinite;
  }

  :global {
    @keyframes pc-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
