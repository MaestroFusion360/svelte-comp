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
  import type { ToastVariant } from "$lib/types";
  import { cx } from "$utils";

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

  const rootClass = $derived(
    cx(
      "fixed bottom-4 right-4 flex items-center gap-3 px-4 py-3 rounded-[var(--radius-lg)] shadow-lg min-w-[220px] max-w-[calc(100vw-2rem)] border border-[var(--border-color-default)] backdrop-blur-sm",
      variantClasses(variant),
      externalClass
    )
  );
</script>

{#if visible}
  <div
    class={rootClass}
    role="status"
    aria-live="polite"
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
  >
    {#if showIcon}
      <span class="w-5 h-5 flex-shrink-0" aria-hidden="true">
        {#if variant === "success"}
          <svg fill="none" viewBox="0 0 26 26">
            <path
              d="M8.5 14L11.1 16.6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M18.2 10L11.6 16.6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        {:else if variant === "danger"}
          <svg fill="none" viewBox="0 0 26 26">
            <path
              d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M9 9.5L16.7 17.3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M16.7 9.5L9 17.3"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        {:else if variant === "warning"}
          <svg fill="none" viewBox="0 0 27 27">
            <path
              d="M4.6 25.925H22.5C25.2 25.925 26.8 23.022 25.6 20.6195L16.6 3.80194C15.3 1.29934 11.8 1.29934 10.5 3.80194L1.5 20.6195C0.299997 23.022 1.9 25.925 4.6 25.925Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M13.9 18.0168H13.2C12.5 18.0168 12.6 17.4162 12.6 16.7154L11.9 9.30769C11.9 8.60696 12.5 8.00635 13.2 8.00635H13.9C14.6 8.00635 15.2 8.60696 15.2 9.30769L14.5 16.7154C14.5 17.4162 14.6 18.0168 13.9 18.0168Z"
              fill="currentColor"
            />
            <path
              d="M13.5 21.9208C14.4389 21.9208 15.2 21.3382 15.2 20.6195C15.2 19.9008 14.4389 19.3181 13.5 19.3181C12.5611 19.3181 11.8 19.9008 11.8 20.6195C11.8 21.3382 12.5611 21.9208 13.5 21.9208Z"
              fill="currentColor"
            />
          </svg>
        {:else}
          <svg fill="none" viewBox="0 0 26 26">
            <path
              d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              d="M13 9.00003C13.718 9.00003 14.3 8.41801 14.3 7.70004C14.3 6.98207 13.718 6.40002 13 6.40002C12.282 6.40002 11.7 6.98207 11.7 7.70004C11.7 8.41801 12.282 9.00003 13 9.00003Z"
              fill="currentColor"
            />
            <path
              d="M13 19.7C12.2 19.7 11.6 19.1 11.6 18.4V11.6C11.6 10.9 12.2 10.3 12.9 10.3H13C13.7 10.3 14.3 10.9 14.3 11.6V18.4C14.3 19.1 13.8 19.7 13 19.7Z"
              fill="currentColor"
            />
          </svg>
        {/if}
      </span>
    {/if}

    <div class="flex-1 min-w-0">
      {#if title}
        <div
          class="font-[var(--font-weight-medium)] truncate [font-size:var(--text-md)] max-sm:[font-size:var(--text-sm)]"
        >
          {title}
        </div>
      {/if}
      <div
        class="line-clamp-3 [font-size:var(--text-sm)] max-sm:[font-size:var(--text-xs)]"
        title={message}
      >
        {message}
      </div>
    </div>

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
  </div>
{/if}
