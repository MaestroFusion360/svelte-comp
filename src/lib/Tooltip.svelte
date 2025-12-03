<!-- src/lib/Tooltip.svelte -->
<script lang="ts">
  /**
   * @component Tooltip
   * @description Context-aware hint for inline controls and labels.
   *
   * @prop children {Snippet} - Inline trigger content
   *
   * @prop text {string} - Tooltip text
   *
   * @prop position {"top" | "bottom" | "left" | "right"} - Tooltip placement
   * @default "top"
   *
   * @prop delay {number} - Delay before showing the tooltip (ms)
   * @default 300
   *
   * @prop open {boolean} - Forces visibility when true
   * @default false
   *
   * @prop class {string} - Wrapper classes
   * @default ""
   *
   * @note Wraps any inline element and shows a floating bubble with `text`.
   * @note `open` overrides hover/focus behavior when set to `true`.
   * @note `position` controls which side of the trigger the bubble appears on.
   * @note `delay` adds a small pause before showing the tooltip to avoid flicker.
   * @note `class` is applied to the root wrapper, useful for layout tweaks.
   */
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import type { Position } from "$lib/types";
  import { cx } from "$utils";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: Snippet;
    position?: Position;
    delay?: number;
    open?: boolean;
    text?: string;
    class?: string;
  };

  let {
    children,
    position = "top",
    delay = 300,
    open = false,
    text = "",
    class: externalClass = "",
    ...rest
  }: Props = $props();

  let visible = $state(false);
  let isHover = $state(false);
  let isFocus = $state(false);
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const show = $derived(open || isHover || isFocus);

  $effect(() => {
    if (timeout) clearTimeout(timeout);

    if (show) {
      timeout = setTimeout(() => {
        visible = true;
      }, delay);
    } else {
      visible = false;
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  });

  const positionClass: Record<Position, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const rootClass = $derived(cx("relative inline-block", externalClass));

  const bubbleClass = $derived(
    cx(
      "absolute z-20 p-0.5 italic text-xs font-medium whitespace-nowrap rounded-[var(--radius-xs)]",
      "bg-[var(--color-bg-surface)] text-[var(--color-text-default)] shadow-lg border border-[var(--border-color-default)]",
      "transition-opacity duration-150 ease-linear",
      visible ? "opacity-100" : "opacity-0 pointer-events-none"
    )
  );
</script>

<div
  class={rootClass}
  onmouseenter={() => (isHover = true)}
  onmouseleave={() => (isHover = false)}
  onfocus={() => (isFocus = true)}
  onblur={() => (isFocus = false)}
  {...rest}
>
  {@render children?.()}

  {#if text && visible}
    <div role="tooltip" class={cx(bubbleClass, positionClass[position])}>
      {text}
    </div>
  {/if}
</div>
