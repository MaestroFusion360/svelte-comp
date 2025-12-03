<!-- src/lib/Carousel.svelte -->
<script lang="ts">
  /**
   * @component Carousel
   * @description A responsive carousel component to display a sequence of items with optional autoplay, navigation arrows, and dots.
   *
   * @prop items {CarouselItem[]} - Array of carousel items
   * @default []
   *
   * @prop sz {SizeKey} - Size variant controlling text scale and rounding
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop autoplay {boolean} - Enables automatic slide rotation
   * @default false
   *
   * @prop interval {number} - Interval between slides in milliseconds
   * @default 5000
   *
   * @prop showDots {boolean} - Shows navigation dots
   * @default true
   *
   * @prop showArrows {boolean} - Shows navigation arrows
   * @default true
   *
   * @prop class {string} - Additional classes for the carousel container
   * @default ""
   *
   * @note Supports touch gestures (swipe left/right).
   * @note Autoplay pauses automatically when unmounted.
   * @note Uses `Card.svelte` internally for slide structure.
   * @note Navigation dots and arrows appear only if there’s more than one item.
   * @note Accessible via `aria-label`, `aria-current`, and keyboard focus on controls.
   */
  import Card from "./Card.svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import type { SizeKey, CarouselItem } from "$lib/types";
  import { cx } from "$utils";

  type Props = HTMLAttributes<HTMLDivElement> & {
    items?: CarouselItem[];
    sz?: SizeKey;
    autoplay?: boolean;
    interval?: number;
    showDots?: boolean;
    showArrows?: boolean;
  };

  let {
    items = [],
    sz = "md",
    autoplay = false,
    interval = 5000,
    showDots = true,
    showArrows = true,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  let current = $state(0);
  let autoplayTimer = $state<ReturnType<typeof setInterval> | null>(null);

  const hasItems = $derived(items.length > 0);

  const base =
    "relative w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)]";

  const sizes: Record<SizeKey, string> = {
    xs: "rounded-[var(--radius-md)] text-sm",
    sm: "rounded-[var(--radius-md)] text-base",
    md: "rounded-[var(--radius-lg)] text-lg",
    lg: "rounded-[var(--radius-lg)] text-xl",
    xl: "rounded-[var(--radius-xl)] text-2xl",
  };

  const contentSize: Record<SizeKey, string> = {
    xs: "p-3 gap-2",
    sm: "p-4 gap-2.5",
    md: "p-5 gap-3",
    lg: "p-6 gap-4",
    xl: "p-8 gap-5",
  };

  const arrowSize: Record<SizeKey, string> = {
    xs: "w-7 h-7",
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-10 h-10",
    xl: "w-11 h-11",
  };

  const dotSize: Record<SizeKey, string> = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-[10px] h-[10px]",
    lg: "w-3 h-3",
    xl: "w-[14px] h-[14px]",
  };

  const componentClass = $derived(cx(base, sizes[sz], externalClass));

  const minH: Record<SizeKey, string> = {
    xs: "min-h-[200px]",
    sm: "min-h-[240px]",
    md: "min-h-[300px]",
    lg: "min-h-[360px]",
    xl: "min-h-[420px]",
  };

  const viewportClass = $derived(cx("relative w-full", minH[sz]));
  const bodyClass = $derived(cx("flex flex-col", contentSize[sz]));

  const imgMax: Record<SizeKey, string> = {
    xs: "max-h-28",
    sm: "max-h-32",
    md: "max-h-40",
    lg: "max-h-48",
    xl: "max-h-56",
  };

  const imgClass = $derived(cx("w-full object-cover", imgMax[sz]));

  const arrowClass = $derived(
    cx(
      arrowSize[sz],
      "rounded-full bg-[var(--color-bg-surface)] shadow-lg flex items-center justify-center [color:var(--color-text-default)] hover:bg-[var(--color-bg-hover)] transition-colors"
    )
  );

  const dotClass = $derived(
    cx(dotSize[sz], "rounded-full transition-all duration-200")
  );

  $effect(() => {
    if (!hasItems) current = 0;
    else if (current >= items.length) current = items.length - 1;
    else if (current < 0) current = 0;
  });

  const next = () => {
    if (!hasItems) return;
    current = (current + 1) % items.length;
  };

  const prev = () => {
    if (!hasItems) return;
    current = (current - 1 + items.length) % items.length;
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < items.length) current = index;
  };

  $effect(() => {
    if (autoplay && hasItems && items.length > 1) {
      autoplayTimer = setInterval(next, interval);
    }
    return () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };
  });

  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent) {
    touchEndX = event.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) <= 50) return;
    if (diff > 0) next();
    else prev();
  }
</script>

<div
  aria-label="Carousel"
  class={componentClass}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
  {...rest}
>
  <div class="relative">
    <div class={viewportClass}>
      {#each items as item, i (item.id ?? i)}
        {#snippet header()}
          {#if item.image}
            <img
              src={item.image}
              alt={item.title || `Slide ${i + 1}`}
              class={imgClass}
            />
          {/if}
        {/snippet}

        <div
          class="transition-opacity duration-300 ease-in-out"
          class:opacity-100={i === current}
          class:opacity-0={i !== current}
          class:block={i === current}
          class:hidden={i !== current}
        >
          <Card {sz} {header} flushHeader={true} class="h-auto flex flex-col">
            <div class={cx(bodyClass, "flex-1 overflow-auto min-h-0")}>
              {#if item.title}
                <h3 class="font-semibold [color:var(--color-text-default)]">
                  {item.title}
                </h3>
              {/if}
              {#if item.content}
                <p class="[color:var(--color-text-muted)]">
                  {item.content}
                </p>
              {/if}
              {@render item.children?.()}
            </div>
          </Card>
        </div>
      {/each}

      {#if !hasItems}
        <div
          class="flex items-center justify-center h-full [color:var(--color-text-muted)]"
        >
          No items to display
        </div>
      {/if}
    </div>

    {#if showArrows && hasItems && items.length > 1}
      <button
        type="button"
        onclick={prev}
        class={cx("absolute left-2 top-1/2 -translate-y-1/2", arrowClass)}
        aria-label="Previous slide"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M10 12L6 8L10 4" />
        </svg>
      </button>
      <button
        type="button"
        onclick={next}
        class={cx("absolute right-2 top-1/2 -translate-y-1/2", arrowClass)}
        aria-label="Next slide"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 4L10 8L6 12" />
        </svg>
      </button>
    {/if}
  </div>

  {#if showDots && hasItems && items.length > 1}
    <div class="flex justify-center gap-2 p-4">
      {#each items as item, i (item.id ?? i)}
        <button
          type="button"
          onclick={() => goTo(i)}
          class={dotClass}
          class:bg-[var(--color-bg-primary)]={i === current}
          class:bg-[var(--color-bg-secondary)]={i !== current}
          class:hover:bg-[var(--color-bg-primary)]={i !== current}
          aria-label={`Go to slide ${item.title ?? `#${i + 1}`}`}
          aria-current={i === current ? "true" : undefined}
        ></button>
      {/each}
    </div>
  {/if}
</div>
