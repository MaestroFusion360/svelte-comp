<!-- src/lib/Topbar.svelte -->
<script lang="ts">
  import { Hamburger, ThemeToggle, InstallPWA } from "../lib";
  /**
   * @component Topbar
   * @description A responsive top navigation bar with optional hamburger menu and PWA install button.
   *
   * @prop title {string} - The title displayed in the center of the topbar
   * @default "App"
   *
   * @prop menuItems {Array<{ id: string; label: string }>} - Items for the hamburger menu
   * @default []
   *
   * @prop onMenuSelect {(id: string) => void} - Callback when a menu item is selected
   * @default () => {}
   *
   * @prop hamburgerHeader {import("svelte").Snippet} - Custom header content for the hamburger menu
   * @default undefined
   *
   * @prop hamburgerFooter {import("svelte").Snippet} - Custom footer content for the hamburger menu
   * @default undefined
   *
   * @prop showHamburger {boolean} - Whether to show the hamburger menu
   * @default false
   *
   * @prop children {import("svelte").Snippet} - Custom content to display in the center of the topbar
   * @default undefined
   *
   * @prop right {import("svelte").Snippet} - Custom content to display on the right side of the topbar
   * @default undefined
   */

  type Props = {
    title?: string;
    menuItems?: Array<{ id: string; label: string }>;
    onMenuSelect?: (id: string) => void;
    hamburgerHeader?: import("svelte").Snippet;
    hamburgerFooter?: import("svelte").Snippet;
    showHamburger?: boolean;
    children?: import("svelte").Snippet;
    right?: import("svelte").Snippet;
  };

  let {
    title = "App",
    menuItems = [],
    onMenuSelect = () => {},
    hamburgerHeader,
    hamburgerFooter,
    showHamburger = false,
    children,
    right,
  }: Props = $props();

  let viewportWidth = $state(0);
  const hamburgerWidth = $derived(viewportWidth < 768 ? 250 : 300);
  const hamburgerTextClass = $derived(viewportWidth < 768 ? "text-sm" : "text-base");
  const isMobile = $derived(viewportWidth < 640);
</script>

{#snippet mobileHamburgerHeader()}
  <div class="flex flex-col gap-2 items-center pt-10">
    {@render hamburgerHeader?.()}
    <InstallPWA alwaysShow={true} inline={true} class="w-auto self-center" />
  </div>
{/snippet}

<svelte:window bind:innerWidth={viewportWidth} />

<header
  class="fixed top-0 left-0 right-0 z-40 grid grid-cols-[auto_1fr_auto] items-center gap-2 bg-[var(--color-bg-surface)] text-[var(--color-text-default)] border-b border-[var(--border-color-default)] font-[var(--font-sans)] px-3 h-16 w-screen max-w-none box-border sm:px-2 sm:h-14"
>
  <div class="flex items-center h-full min-w-0 shrink-0 sm:min-w-9">
    {#if showHamburger}
      {#if isMobile}
        <Hamburger
          header={mobileHamburgerHeader}
          footer={hamburgerFooter}
          menuItems={menuItems}
          onSelect={onMenuSelect}
          closeOnSelect={true}
          width={hamburgerWidth}
          class={hamburgerTextClass}
        />
      {:else}
        <Hamburger
          header={hamburgerHeader}
          footer={hamburgerFooter}
          menuItems={menuItems}
          onSelect={onMenuSelect}
          closeOnSelect={true}
          width={hamburgerWidth}
          class={hamburgerTextClass}
        />
      {/if}
    {/if}
  </div>
  <div
    class="min-w-0 flex items-center justify-center text-center text-[var(--text-md)] font-semibold overflow-hidden px-2 sm:text-[var(--text-sm)] sm:px-2 gap-2"
  >
    <span class="truncate max-w-full">
      {#if children}{@render children()}{:else}{title}{/if}
    </span>
    {#if !isMobile}
      <InstallPWA inline={true} class="max-w-full shrink-0" />
    {/if}
  </div>
  <div class="flex items-center h-full min-w-0 shrink-0 sm:min-w-9 gap-2">
    {@render right?.()}
    <ThemeToggle />
  </div>
</header>
