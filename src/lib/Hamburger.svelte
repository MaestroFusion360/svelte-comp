<!-- src/lib/Hamburger.svelte -->
<script lang="ts">
  /**
   * @component Hamburger
   * @description Off-canvas navigation drawer controlled by a floating hamburger button.
   *
   * @prop menuItems {Item[]} - Menu entries rendered in the drawer
   * @default []
   *
   * @prop activeItem {string} - ID of the currently active item
   * @default ""
   *
   * @prop header {Snippet} - Custom content rendered above the menu
   *
   * @prop footer {Snippet} - Custom content rendered below the menu
   *
   * @prop closeOnSelect {boolean} - Automatically closes after selecting an item
   * @default true
   *
   * @prop onSelect {(id: string) => void} - Fired when a menu item is chosen
   *
   * @prop onOpenChange {(v: boolean) => void} - Fired when open state changes in controlled mode
   *
   * @prop pressed {boolean} - Controlled open state
   *
   * @prop class {string} - Extra classes applied to the trigger button
   * @default ""
   *
   * @prop width {number | string} - Drawer width (px or CSS value)
   * @default 300
   *
   * @note Clicking outside the panel or pressing `Escape` closes the drawer.
   * @note Focus moves to the first interactive element inside the panel, is trapped while open, and returns to the trigger on close.
   * @note In controlled mode (`pressed` is defined), state changes are requested via `onOpenChange(open)`.
   * @note When `menuItems` is empty, a "No items" placeholder is shown.
   * @note The drawer uses `role=\"dialog\"` and `aria-modal=\"true\"`; the trigger reflects state via `aria-expanded`.
   */
  import type { Snippet } from "svelte";
  import type { Item } from "./types";
  import { cx, throttle, focusFirstInteractive, trapFocus } from "../utils";

  type Props = {
    menuItems?: Item[];
    activeItem?: string;
    header?: Snippet;
    footer?: Snippet;
    closeOnSelect?: boolean;
    onSelect?: (id: string) => void;
    onOpenChange?: (v: boolean) => void;
    pressed?: boolean;
    class?: string;
    width?: number | string;
  };

  let {
    menuItems = [],
    activeItem = "",
    header,
    footer,
    closeOnSelect = true,
    onSelect,
    onOpenChange,
    pressed,
    class: externalClass = "",
    width = 300,
  }: Props = $props();

  let triggerEl = $state<HTMLButtonElement | undefined>(undefined);
  let panelEl = $state<HTMLDivElement | undefined>(undefined);
  let releaseFocus: (() => void) | null = null;

  let _open = $state(false);
  const open = $derived(pressed ?? _open);

  function setOpen(v: boolean) {
    if (pressed === undefined) {
      _open = v;
    } else {
      onOpenChange?.(v);
    }
  }

  function toggle() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
    queueMicrotask(() => triggerEl?.focus());
  }

  const throttledClose = throttle(() => closeMenu(), 150);

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") throttledClose();
  }

  $effect(() => {
    if (open && panelEl) {
      queueMicrotask(() => {
        focusFirstInteractive(panelEl!);
      });
      releaseFocus?.();
      releaseFocus = trapFocus(panelEl);
      document.addEventListener("keydown", handleKeydown);
    } else {
      releaseFocus?.();
      releaseFocus = null;
      document.removeEventListener("keydown", handleKeydown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      releaseFocus?.();
      releaseFocus = null;
    };
  });

  const triggerBase =
    "fixed top-4 left-4 inline-flex items-center justify-center h-8 w-8 rounded-md border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] transition-colors z-[var(--z-modal)]";

  const triggerClass = $derived(cx(triggerBase, externalClass));
</script>

<button
  type="button"
  aria-label="Toggle navigation"
  aria-expanded={open}
  class={triggerClass}
  onclick={toggle}
  bind:this={triggerEl}
>
  <span class="relative block w-5 h-3.5">
    <span
      class={cx(
        "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
        open ? "translate-y-[-50%] rotate-45" : "translate-y-[calc(-50%_-_6px)]"
      )}
    ></span>
    <span
      class={cx(
        "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-opacity duration-200 translate-y-[-50%]",
        open ? "opacity-0" : "opacity-100"
      )}
    ></span>
    <span
      class={cx(
        "absolute left-0 top-1/2 h-[2px] w-full bg-current transition-transform duration-200",
        open
          ? "translate-y-[-50%] -rotate-45"
          : "translate-y-[calc(-50%_+_6px)]"
      )}
    ></span>
  </span>
</button>

{#if open}
  <div class="fixed inset-0 z-[var(--z-overlay)] flex">
    <div
      role="dialog"
      aria-modal="true"
      tabindex="-1"
      bind:this={panelEl}
      class="flex flex-col h-full bg-[var(--color-bg-surface)] shadow-xl"
      style={`width:${typeof width === "number" ? `${width}px` : width}`}
    >
      {#if header}
        <div class="p-4 border-b border-[var(--border-color-default)]">
          {@render header?.()}
        </div>
      {/if}

      <div class="flex-1 overflow-y-auto" tabindex="-1">
        {#if menuItems.length === 0}
          <div class="text-xs opacity-70 px-3 py-2 text-center">No items</div>
        {:else}
          <ul class="grid gap-2 p-4">
            {#each menuItems as it (it.id)}
              {#if it.type === "section"}
                <li class="px-3 pt-2 mt-3 text-[var(--color-text-muted)] text-[var(--text-xs)] lowercase tracking-wide opacity-70">
                  {it.label}
                </li>
              {:else}
                <li>
                  <button
                    type="button"
                    class="w-full text-left px-3 py-2 rounded-md hover:bg-[var(--color-bg-hover)] focus:outline-[var(--border-color-focus)] focus:outline-2 transition-colors"
                    aria-current={activeItem === it.id ? "page" : undefined}
                    onclick={() => {
                      onSelect?.(it.id);
                      if (closeOnSelect) closeMenu();
                    }}
                  >
                    {it.label}
                  </button>
                </li>
              {/if}
            {/each}
          </ul>
        {/if}
      </div>

      {#if footer}
        <div class="p-4 border-t border-[var(--border-color-default)]">
          {@render footer?.()}
        </div>
      {/if}
    </div>

    <button
      type="button"
      class="flex-1 bg-black/40"
      aria-hidden="true"
      onclick={closeMenu}
    ></button>
  </div>
{/if}
