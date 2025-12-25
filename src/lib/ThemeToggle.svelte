<!-- src/lib/ThemeToggle.svelte -->
<script lang="ts">
  /**
   * @component ThemeToggle
   * @description Lightweight theme switcher to toggle between light and dark mode. Applies or removes the `.dark` class on the document root.
   *
   * @prop disabled {boolean} - Disable the ThemeToggle
   *
   * @prop class {string} - Optional external class name (overrides default position)
   * @default ""
   *
   * @prop sz {SizeKey} - Adjusts button size and icon scale
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop type {string} - Button type attribute
   * @default "button"
   *
   * @note Uses `$effect` to sync the `dark` class on `<html>`.
   * @note Default position is `fixed top-4 right-4`, unless overridden by a custom `class`.
   * @note Styled entirely through CSS variables; fully theme-aware.
   * @note Smooth transition between sun and moon icons.
   */
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { type SizeKey, TEXT } from "./types";
  import { cx, storage } from "../utils";

  type Props = HTMLButtonAttributes & {
    disabled?: boolean;
    class?: string;
    sz?: SizeKey;
    type?: string;
  };

  let {
    disabled,
    class: externalClass = "",
    sz = "md",
    type = "button",
    ...rest
  }: Props = $props();

  const STORAGE_KEY = "theme-toggle:dark";
  const initialDark = storage.get<boolean>(STORAGE_KEY, false);
  let darkMode = $state(initialDark);

  const base = `inline-flex items-center justify-center rounded-[var(--radius-md)]
    border border-[var(--border-color-default)] bg-[var(--color-bg-secondary)]
    hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-[var(--border-color-focus)] transition-colors
    disabled:opacity-[var(--opacity-disabled)]
    disabled:cursor-not-allowed
    disabled:brightness-100
    disabled:active:scale-100
    disabled:hover:brightness-100
  `;

  const sizes: Record<SizeKey, string> = {
    xs: "px-2 py-0.5 h-6",
    sm: "px-3 py-1 h-7",
    md: "px-4 py-2 h-8",
    lg: "px-5 py-2.5 h-9",
    xl: "px-6 py-3 h-10",
  };

  const position = "fixed top-4 right-4 z-50";

  const mergedClass = $derived(
    cx(
      externalClass ? null : position,
      base,
      sizes[sz],
      TEXT[sz],
      externalClass
    )
  );

  $effect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    storage.set(STORAGE_KEY, darkMode);
  });
</script>

<button
  {type}
  {disabled}
  class={mergedClass}
  onclick={() => (darkMode = !darkMode)}
  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  {...rest}
>
  {#if darkMode}
    <svg
      class="w-[1em] h-[1em]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <line x1="12" y1="1" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  {:else}
    <svg
      class="w-[1em] h-[1em]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        d="M12 2
       A9 9 0 1 0 21 12
       A7.5 7.5 0 1 1 12 2
       Z"
        fill="currentColor"
      />
    </svg>
  {/if}
</button>
