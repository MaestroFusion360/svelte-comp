<!-- src/lib/Splitter.svelte -->
<script lang="ts">
  /**
   * @component Splitter
   * @description Resizable split panel container with horizontal or vertical orientation.
   *
   * @prop direction {'horizontal' | 'vertical'} - Split orientation
   * @options horizontal|vertical
   * @default horizontal
   *
   * @prop initialSize {number} - Initial size of the first panel as percentage
   * @default 30
   *
   * @prop dividerSize {number} - Width/height of the divider handle in pixels
   * @default 4
   *
   * @prop minSize {number} - Minimum size of the first panel as percentage
   * @default 10
   *
   * @prop maxSize {number} - Maximum size of the first panel as percentage
   * @default 90
   *
   * @prop first {Snippet} - Content for the first panel
   *
   * @prop second {Snippet} - Content for the second panel
   *
   * @note Uses pointer events for smooth dragging with proper event delegation
   * @note Responsive - automatically adjusts to container resize
   * @note Accessible with proper cursor hints and hover states
   * @note No wrapper elements - panels render directly for clean DOM structure
   * @note Supports any content type through snippet rendering
   */

  import type { Snippet } from "svelte";

  type Props = {
    direction?: "horizontal" | "vertical";
    initialSize?: number;
    dividerSize?: number;
    minSize?: number;
    maxSize?: number;
    first?: Snippet;
    second?: Snippet;
  };

  let {
    direction = "horizontal",
    initialSize = 30,
    dividerSize = 4,
    minSize = 10,
    maxSize = 90,
    first,
    second,
  }: Props = $props();

  let container: HTMLElement;

  let size = $state(initialSize);
  let isDragging = $state(false);
  let startSize = 0;
  let startPos = 0;
  let containerSize = 0;

  function getContainerSize(): number {
    if (!container) return 0;
    return direction === "horizontal"
      ? container.offsetWidth
      : container.offsetHeight;
  }

  function startDrag(e: PointerEvent): void {
    isDragging = true;
    startSize = size;
    startPos = direction === "horizontal" ? e.clientX : e.clientY;
    containerSize = getContainerSize();

    document.addEventListener("pointermove", onDrag);
    document.addEventListener("pointerup", stopDrag);
    document.addEventListener("pointercancel", stopDrag);

    e.preventDefault();
    e.stopPropagation();
  }

  function onDrag(e: PointerEvent): void {
    if (!isDragging) return;

    const currentPos = direction === "horizontal" ? e.clientX : e.clientY;
    const delta = currentPos - startPos;
    const deltaPercent = (delta / containerSize) * 100;
    const newSize = startSize + deltaPercent;

    size = Math.max(minSize, Math.min(maxSize, newSize));

    e.preventDefault();
    e.stopPropagation();
  }

  function stopDrag(): void {
    isDragging = false;
    document.removeEventListener("pointermove", onDrag);
    document.removeEventListener("pointerup", stopDrag);
    document.removeEventListener("pointercancel", stopDrag);
  }

  $effect(() => {
    const onResize = () => {
      containerSize = getContainerSize();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
</script>

<div
  bind:this={container}
  class="w-full h-full overflow-hidden"
  class:flex={direction === "horizontal"}
  class:flex-col={direction === "vertical"}
>
  {#if direction === "horizontal"}
    <div class="overflow-auto min-w-0 min-h-0" style="width: {size}%">
      {@render first?.()}
    </div>

    <div
      class="touch-none select-none z-10 cursor-col-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"
      style="width: {dividerSize}px"
      onpointerdown={startDrag}
    ></div>

    <div class="overflow-auto min-w-0 min-h-0 flex-1">
      {@render second?.()}
    </div>
  {:else}
    <div class="overflow-auto min-w-0 min-h-0" style="height: {size}%">
      {@render first?.()}
    </div>

    <div
      class="touch-none select-none z-10 cursor-row-resize bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-hover)] transition-colors"
      style="height: {dividerSize}px"
      onpointerdown={startDrag}
    ></div>

    <div class="overflow-auto min-w-0 min-h-0" style="height: calc(100% - {size}% - {dividerSize}px)">
      {@render second?.()}
    </div>
  {/if}
</div>
