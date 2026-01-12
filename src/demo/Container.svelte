<!-- src/demo/Container.svelte -->
<script lang="ts">
  /**
   * @component Container
   * @description Layout shell with header, footer, sidebars, and main content.
   *
   * @prop header {Snippet} - Header content.
   * @prop footer {Snippet} - Footer content.
   * @prop left {Snippet} - Left sidebar content.
   * @prop right {Snippet} - Right sidebar content.
   * @prop children {Snippet} - Main content.
   * @prop class {string} - Extra wrapper classes (default: "").
   *
   * @note Sidebars render only at the lg breakpoint and above.
   */
  import type { Snippet } from "svelte";
  import { cx } from "$utils";

  type Props = {
    header?: Snippet;
    footer?: Snippet;
    left?: Snippet;
    right?: Snippet;
    children?: Snippet;
    class?: string;
  };

  let {
    header,
    footer,
    left,
    right,
    children,
    class: externalClass = "",
  }: Props = $props();

  const baseClass =
    "min-h-dvh w-full bg-[var(--color-bg-page,oklch(98%_0_0))] text-[var(--color-text-default,oklch(15%_0_0))] transition-colors duration-[var(--transition-normal,300ms)]";

  const rootClass = $derived(cx(baseClass, externalClass));
</script>

<div class={rootClass}>
  <div class="grid min-h-dvh grid-rows-[auto_1fr_auto]">
    {#if header}
      <header class="p-[var(--spacing-md,1rem)]">
        {@render header?.()}
      </header>
    {/if}

    {#if left}
      <aside class="hidden lg:block p-[var(--spacing-md,1rem)]">
        {@render left?.()}
      </aside>
    {/if}

    <main class="p-[var(--spacing-md,1rem)]">
      {@render children?.()}
    </main>

    {#if right}
      <aside class="hidden lg:block p-[var(--spacing-md,1rem)]">
        {@render right?.()}
      </aside>
    {/if}

    {#if footer}
      <footer class="p-[var(--spacing-md,1rem)]">
        {@render footer?.()}
      </footer>
    {/if}
  </div>
</div>
