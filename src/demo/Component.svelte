<!-- src/demo/components/UI/Component.svelte -->
<script lang="ts">
  /**
   * @component Component
   * @description Generic demo wrapper that mirrors library sizing and variants.
   *
   * @prop class {string} - Extra wrapper classes (default: "").
   * @prop children {Snippet} - Content rendered inside.
   * @prop disabled {boolean} - Apply disabled styles (default: false).
   * @prop variant {ComponentVariant} - Visual style preset (default: "default").
   * @prop sz {SizeKey} - Size preset (default: "md").
   *
   * @note Spreads remaining div attributes to the root element.
   */
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { type SizeKey, type ComponentVariant, TEXT } from "$lib/types";
  import { cx } from "$utils";

  type Props = HTMLAttributes<HTMLDivElement> & {
    class?: string;
    children?: Snippet;
    disabled?: boolean;
    variant?: ComponentVariant;
    sz?: SizeKey;
  };

  let {
    class: externalClass = "",
    children,
    disabled = false,
    variant = "default",
    sz = "md",
    ...rest
  }: Props = $props();

  const base = `
    inline-flex items-center justify-center
    border font-medium
    transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)]
    select-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)]
    data-[disabled=true]:opacity-[var(--opacity-disabled)]
    data-[disabled=true]:cursor-not-allowed
  `;

  const variants: Record<ComponentVariant, string> = {
    default: `
      bg-[var(--color-bg-surface)] text-[var(--color-text-default)]
      border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)]
      data-[disabled=true]:hover:bg-[var(--color-bg-surface)]
    `,
    neutral: `
      bg-[var(--color-bg-secondary)] text-[var(--color-text-default)]
      border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)]
      data-[disabled=true]:hover:bg-[var(--color-bg-secondary)]
    `,
  };

  const sizes: Record<SizeKey, string> = {
    xs: "px-[var(--spacing-sm)] py-[var(--spacing-xs)] gap-[var(--spacing-xs)]",
    sm: "px-[var(--spacing-md)] py-[var(--spacing-xs)] gap-[var(--spacing-xs)]",
    md: "px-[var(--spacing-md)] py-[var(--spacing-sm)] gap-[var(--spacing-sm)]",
    lg: "px-[var(--spacing-lg)] py-[var(--spacing-md)] gap-[var(--spacing-sm)]",
    xl: "px-[var(--spacing-xl)] py-[var(--spacing-md)] gap-[var(--spacing-md)]",
  };

  const componentClass = $derived(
    cx(base, variants[variant], sizes[sz], TEXT[sz], externalClass)
  );
</script>

<div
  class={componentClass}
  data-variant={variant}
  data-size={sz}
  data-disabled={disabled ? "true" : undefined}
  aria-disabled={disabled ? "true" : undefined}
  {...rest}
>
  {@render children?.()}
</div>
