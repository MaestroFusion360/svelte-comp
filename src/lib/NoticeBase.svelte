<!-- src/lib/NoticeBase.svelte -->
<script lang="ts">
  /**
   * @component NoticeBase
   * @description Shared base for Toast and Badge visuals.
   *
   * @prop title {string} - Optional title displayed above the message
   *
   * @prop message {string} - Notice text content
   *
   * @prop variant {ToastVariant} - Visual style
   * @options success|danger|warning|info
   * @default info
   *
   * @prop showIcon {boolean} - Shows an icon matching the variant
   * @default true
   *
   * @prop inline {boolean} - Inline layout without overlay styling
   * @default false
   *
   * @prop size {"sm" | "md"} - Size preset for spacing and typography
   * @default "sm"
   *
   * @prop end {Snippet} - Trailing content (e.g. close button)
   *
   * @prop class {string} - Additional wrapper classes
   * @default ""
   *
   * @note Used by Toast and Badge to keep styles consistent.
   */
  import type { Snippet } from "svelte";
  import type { ToastVariant } from "./types";
  import { cx } from "../utils";

  type Props = {
    title?: string;
    message: string;
    variant?: ToastVariant;
    showIcon?: boolean;
    class?: string;
    inline?: boolean;
    size?: "sm" | "md";
    end?: Snippet;
  };

  let {
    title,
    message,
    variant = "info",
    showIcon = true,
    inline = false,
    size = "sm",
    end,
    class: externalClass = "",
  }: Props = $props();

  function variantClasses(v: ToastVariant) {
    switch (v) {
      case "success":
        return "bg-[var(--color-bg-success)] text-[var(--color-text-success)]";
      case "danger":
        return "bg-[var(--color-bg-danger)] text-[var(--color-text-danger)]";
      case "warning":
        return "bg-[var(--color-bg-warning)] text-[var(--color-text-warning)]";
      default:
        return "bg-[var(--color-bg-page)] text-[var(--color-text-default)]";
    }
  }

  const sizeClasses = $derived(
    size === "md"
      ? "gap-3 px-4 py-3 rounded-[var(--radius-lg)]"
      : "gap-2 px-3 py-1.5 rounded-[var(--radius-md)]"
  );

  const iconClass = $derived(size === "md" ? "w-5 h-5" : "w-4 h-4");

  const titleClass = $derived(
    size === "md"
      ? "font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"
      : "font-[var(--font-weight-medium)] truncate text-sm"
  );

  const messageClass = $derived(
    size === "md"
      ? "line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"
      : "truncate text-xs"
  );

  const rootClass = $derived(
    cx(
      "flex items-center border border-[var(--border-color-default)]",
      sizeClasses,
      !inline && "shadow-lg backdrop-blur-sm",
      variantClasses(variant),
      externalClass
    )
  );
</script>

<div class={rootClass} role="status" aria-live="polite">
  {#if showIcon}
    <span class={cx(iconClass, "flex-shrink-0")} aria-hidden="true">
      {#if variant === "success"}
        <svg fill="none" viewBox="0 0 26 26">
          <path d="M8.5 14L11.1 16.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M18.2 10L11.6 16.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M13 25C19.6 25 25 19.6 25 13C25 6.4 19.6 1 13 1C6.4 1 1 6.4 1 13C1 19.6 6.4 25 13 25Z" stroke="currentColor" stroke-width="2"/>
        </svg>
      {:else if variant === "danger"}
        <svg fill="none" viewBox="0 0 26 26">
          <path d="M13 25C19.6 25 25 19.6 25 13C25 6.4 19.6 1 13 1C6.4 1 1 6.4 1 13C1 19.6 6.4 25 13 25Z" stroke="currentColor" stroke-width="2"/>
          <path d="M9 9.5L16.7 17.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M16.7 9.5L9 17.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      {:else if variant === "warning"}
        <svg fill="none" viewBox="0 0 27 27">
          <path d="M4.6 25.9H22.5C25.2 25.9 26.8 23 25.6 20.6L16.6 3.8C15.3 1.3 11.8 1.3 10.5 3.8L1.5 20.6C0.3 23 1.9 25.9 4.6 25.9Z" stroke="currentColor" stroke-width="2"/>
          <path d="M13.9 18H13.2L11.9 9.3C11.9 8.6 12.5 8 13.2 8H13.9C14.6 8 15.2 8.6 15.2 9.3L13.9 18Z" fill="currentColor"/>
          <circle cx="13.5" cy="20.6" r="1.3" fill="currentColor"/>
        </svg>
      {:else}
        <svg fill="none" viewBox="0 0 26 26">
          <path d="M13 25C19.6 25 25 19.6 25 13C25 6.4 19.6 1 13 1C6.4 1 1 6.4 1 13C1 19.6 6.4 25 13 25Z" stroke="currentColor" stroke-width="2"/>
          <circle cx="13" cy="7.7" r="1.3" fill="currentColor"/>
          <rect x="11.6" y="10.3" width="2.7" height="9.4" rx="1.3" fill="currentColor"/>
        </svg>
      {/if}
    </span>
  {/if}

  <div class="flex-1 min-w-0">
    {#if title}
      <div class={titleClass}>{title}</div>
    {/if}
    <div class={messageClass} title={message}>{message}</div>
  </div>

  {@render end?.()}
</div>
