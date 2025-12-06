<!-- src/lib/Card.svelte -->
<script lang="ts">
  /**
   * @component Card
   * @description Flexible layout component with optional `header` and `footer` sections. Supports predefined size variants (xs to xl) through the `sz` prop.
   *
   * @prop header {Snippet} - Content rendered in the card header
   *
   * @prop footer {Snippet} - Content rendered in the card footer
   *
   * @prop children {Snippet} - Main body content of the card
   *
   * @prop class {string} - Additional CSS classes for the card
   * @default ""
   *
   * @prop sz {SizeKey} - Padding and typography preset
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop flushHeader {boolean} - Removes padding and border from the header
   * @default false
   *
   * @prop flushFooter {boolean} - Removes padding and border from the footer
   * @default false
   *
   * @note Theme-aware: uses CSS variables (`--color-bg-surface`, `--border-color-default`).
   * @note Rounded corners, subtle shadow, and border for a clean visual hierarchy.
   * @note Padding and typography scale automatically with `sz`.
   * @note Uses `{@render}` snippets instead of legacy `slots`.
   */
  import type { Snippet } from "svelte";
  import { type SizeKey, TEXT } from "./types";
  import { cx } from "../utils";

  type Props = {
    header?: Snippet;
    footer?: Snippet;
    children?: Snippet;
    class?: string;
    sz?: SizeKey;
    flushHeader?: boolean;
    flushFooter?: boolean;
  };

  let {
    header,
    footer,
    children,
    class: externalClass = "",
    sz = "md",
    flushHeader = false,
    flushFooter = false,
  }: Props = $props();

  const paddingSizes: Record<SizeKey, string> = {
    xs: "px-3 py-2",
    sm: "px-4 py-2",
    md: "px-5 py-3",
    lg: "px-6 py-4",
    xl: "px-7 py-5",
  };

  const cardClass = $derived(
    cx(
      "bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-xl shadow-sm overflow-hidden",
      TEXT[sz],
      "flex flex-col",
      externalClass
    )
  );

  const headerClass = $derived(
    flushHeader
      ? ""
      : cx("border-b border-[var(--border-color-default)]", paddingSizes[sz])
  );

  const contentClass = $derived(cx(paddingSizes[sz], "flex-1 min-h-0"));

  const footerClass = $derived(
    flushFooter
      ? ""
      : cx("border-t border-[var(--border-color-default)]", paddingSizes[sz])
  );
</script>

<div class={cardClass}>
  {#if header}
    <div class={headerClass}>
      {@render header?.()}
    </div>
  {/if}

  <div class={contentClass}>
    {@render children?.()}
  </div>

  {#if footer}
    <div class={footerClass}>
      {@render footer?.()}
    </div>
  {/if}
</div>
