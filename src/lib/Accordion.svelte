<!-- src/lib/Accordion.svelte -->
<script lang="ts">
  /**
   * @component Accordion
   * @description Collapsible content container with flexible sizing and optional multi-open behavior.
   *
   * @prop items {AccordionItem[]} - Array of sections `{ id?, title, content }`
   * @default []
   *
   * @prop multiple {boolean} - Allow more than one section to be open at the same time
   * @default false
   *
   * @prop defaultOpen {number[]} - Indexes of initially opened sections
   * @default []
   *
   * @prop onToggle {(index: number, open: boolean) => void} - Callback fired when a section is toggled
   *
   * @prop sz {SizeKey} - Size variant
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop class {string} - Additional classes for the outer container
   * @default ""
   *
   * @note Smooth expand/collapse via CSS grid transitions
   * @note Accessible triggers (button + aria-expanded)
   * @note For full ARIA compliance, pair triggers with aria-controls and hide collapsed panels using aria-hidden or inert
   * @note State is index-based; reordering items will change which panels start open
   * @note AccordionItem.content is a plain string; wrap HTML inside the string or fork the component if you need custom nodes
   */

  import { type AccordionItem, type SizeKey, TEXT } from "./types";
  import { cx } from "../utils";

  type Props = {
    items?: AccordionItem[];
    multiple?: boolean;
    defaultOpen?: number[];
    onToggle?: (index: number, open: boolean) => void;
    sz?: SizeKey;
    class?: string;
  };

  let {
    items = [],
    multiple = false,
    defaultOpen = [],
    onToggle,
    sz = "md",
    class: externalClass = "",
  }: Props = $props();

  const base =
    "w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] shadow-[0_1px_2px_var(--shadow-color)]";

  const sizes: Record<SizeKey, string> = {
    xs: cx("rounded-[var(--radius-md)]", TEXT.xs),
    sm: cx("rounded-[var(--radius-md)]", TEXT.sm),
    md: cx("rounded-[var(--radius-lg)]", TEXT.md),
    lg: cx("rounded-[var(--radius-lg)]", TEXT.lg),
    xl: cx("rounded-[var(--radius-xl)]", TEXT.xl),
  };

  const contentSize: Record<SizeKey, string> = {
    xs: "px-[var(--spacing-md)] pb-[var(--spacing-md)] mt-[var(--spacing-xs)]",
    sm: "px-[calc(var(--spacing-md)+var(--spacing-xs))] pb-[calc(var(--spacing-md)+var(--spacing-xs))] mt-[var(--spacing-sm)]",
    md: "px-[calc(var(--spacing-md)+var(--spacing-sm))] pb-[calc(var(--spacing-md)+var(--spacing-sm))] mt-[calc(var(--spacing-sm)+var(--spacing-xs))]",
    lg: "px-[var(--spacing-xl)] pb-[var(--spacing-xl)] mt-[var(--spacing-md)]",
    xl: "px-[calc(var(--spacing-xl)+var(--spacing-sm))] pb-[calc(var(--spacing-xl)+var(--spacing-sm))] mt-[calc(var(--spacing-md)+var(--spacing-xs))]",
  };

  const iconSize: Record<SizeKey, string> = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-[18px] h-[18px]",
    xl: "w-5 h-5",
  };

  const componentClass = $derived(cx(base, sizes[sz], externalClass));

  const iconClass = $derived(iconSize[sz]);

  const contentClass = $derived(cx(contentSize[sz], TEXT[sz]));

  let open = $derived(defaultOpen);

  const isOpen = (i: number) => open.includes(i);

  const toggle = (i: number) => {
    const opened = isOpen(i);
    open = multiple
      ? opened
        ? open.filter((x) => x !== i)
        : [...open, i]
      : opened
        ? []
        : [i];
    onToggle?.(i, !opened);
  };
</script>

<div class={componentClass}>
  {#each items as item, i (item.id ?? i)}
    <section
      class="group border-b border-[var(--border-color-default)] last:border-b-0 overflow-hidden"
      class:first-of-type:rounded-t={items.length > 1}
      class:last-of-type:rounded-b={items.length > 1}
    >
      <h3>
        <button
          type="button"
          class="flex w-full items-center justify-between gap-[calc(var(--spacing-sm)+var(--spacing-xs))] p-[var(--spacing-sm)] text-left font-medium text-[var(--color-text-default)] bg-transparent transition-colors hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)] focus:ring-inset"
          aria-expanded={isOpen(i)}
          onclick={() => toggle(i)}
        >
          <span>{item.title}</span>
          <svg
            class={cx(
              "shrink-0 transition-transform duration-[var(--transition-fast)] text-[var(--color-text-muted)]",
              iconClass
            )}
            class:rotate-180={isOpen(i)}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.135l3.71-3.904a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </h3>

      <div
        class="grid overflow-hidden transition-[grid-template-rows] duration-[var(--transition-fast)]"
        class:grid-rows-[1fr]={isOpen(i)}
        class:grid-rows-[0fr]={!isOpen(i)}
      >
        <div class="min-h-0">
          <div
            class={cx(
              "leading-relaxed text-[var(--color-text-default)]",
              contentClass
            )}
          >
            {item.content}
          </div>
        </div>
      </div>
    </section>
  {/each}
</div>
