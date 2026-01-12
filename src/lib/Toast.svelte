<!-- src/lib/Toast.svelte -->
<script lang="ts">
  /**
   * @component Toast
   * @description Lightweight notification component for transient messages.
   *
   * @prop title {string} - Optional title displayed above the message
   *
   * @prop message {string} - Toast message content
   *
   * @prop variant {ToastVariant} - Visual style
   * @options success|danger|warning|info
   * @default info
   *
   * @prop showIcon {boolean} - Shows an icon matching the variant
   * @default true
   *
   * @prop closable {boolean} - Shows a close button
   * @default true
   *
   * @prop timeout {number} - Auto-hide timeout in milliseconds
   * @default 3000
   *
   * @prop onClose {() => void} - Fired when the toast closes
   * @default () => {}
   *
   * @prop class {string} - Additional wrapper classes
   * @default ""
   *
   * @note Automatically hides after `timeout`.
   * @note Can be closed manually if `closable = true`.
   * @note Variant controls color and icon style.
   */
  import { fade } from "svelte/transition";
  import type { ToastVariant } from "./types";
  import NoticeBase from "./NoticeBase.svelte";

  type Props = {
    title?: string;
    message: string;
    variant?: ToastVariant;
    showIcon?: boolean;
    closable?: boolean;
    timeout?: number;
    onClose?: () => void;
    class?: string;
  };

  let {
    title,
    message,
    variant = "info",
    showIcon = true,
    closable = true,
    timeout = 3000,
    onClose = () => {},
    class: externalClass = "",
  }: Props = $props();

  let visible = $state(true);

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

  function close() {
    visible = false;
    onClose();
  }

  $effect(() => {
    if (timeout > 0) {
      const id = setTimeout(() => close(), timeout);
      return () => clearTimeout(id);
    }
  });

</script>

{#if visible}
  {#snippet end()}
    {#if closable}
      <button
        class="opacity-70 hover:opacity-100 transition-opacity duration-[var(--transition-fast)] ml-3"
        aria-label="Close"
        onclick={close}
      >
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path
            d="M7 7l6 6M13 7l-6 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    {/if}
  {/snippet}

  <div
    class={`fixed bottom-4 right-4 min-w-[220px] max-w-[calc(100vw-2rem)] ${variantClasses(variant)} ${externalClass}`}
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
  >
    <NoticeBase
      {title}
      {message}
      {variant}
      {showIcon}
      size="md"
      end={end}
    />
  </div>
{/if}
