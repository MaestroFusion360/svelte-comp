<!-- src/lib/Dialog.svelte -->
<script lang="ts">
  /**
   * @component Dialog
   * @description Modal dialog for confirmations or alerts.
   *
   * @prop open {boolean} - Controls dialog visibility
   * @default false
   *
   * @prop title {string} - Dialog title used for labeling
   * @default ""
   *
   * @prop message {string} - Simple message content
   * @default ""
   *
   * @prop onConfirm {() => void} - Fired when the confirm action is triggered
   * @default () => {}
   *
   * @prop onCancel {() => void} - Fired when the cancel action is triggered
   * @default () => {}
   *
   * @prop onClose {() => void} - Fired after confirm or cancel to centralize cleanup
   * @default () => {}
   *
   * @prop modal {boolean} - Enables modal mode with overlay and focus trap
   * @default true
   *
   * @prop class {string} - Extra classes applied to the dialog container
   * @default ""
   *
   * @prop sz {SizeKey} - Size preset for padding and text
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop children {Snippet} - Custom dialog body content
   *
   * @note In modal mode the first interactive element is focused automatically and focus is trapped inside the dialog; `Escape` triggers cancel.
   * @note `onClose` runs after `onConfirm`/`onCancel`, so you can centralize cleanup.
   * @note Non-modal mode (`modal=false`) renders a floating panel without overlay or focus trap.
   * @note Buttons are labeled "OK" and "Cancel" and aren't customizable via props; provide `children` for full custom UI.
   * @note Set a meaningful `title` for accessibility; it's used as the dialog's `aria-label`.
   * @note `sz` adjusts both dialog padding and text sizes to match the rest of the system tokens.
   */
  import type { Snippet } from "svelte";
  import Button from "./Button.svelte";
  import { type SizeKey, TEXT } from "./types";
  import { cx, focusFirstInteractive, trapFocus } from "../utils";
  import { getComponentText, getLangContext, getLangKey } from "./lang-context";

  type Props = {
    open?: boolean;
    title?: string;
    message?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    modal?: boolean;
    class?: string;
    sz?: SizeKey;
    children?: Snippet<[SizeKey]>;
  };

  let {
    open = false,
    title = "",
    message = "",
    onConfirm = () => {},
    onCancel = () => {},
    onClose = () => {},
    modal = true,
    class: externalClass = "",
    sz = "md",
    children,
  }: Props = $props();

  const langCtx = getLangContext();
  const langKey = $derived(getLangKey(langCtx));
  const L = $derived(getComponentText("dialog", langKey));

  let panelEl = $state<HTMLDivElement | null>(null);
  let releaseFocus: (() => void) | null = null;

  function handleConfirm() {
    onConfirm();
    onClose();
  }

  function handleCancel() {
    onCancel();
    onClose();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      handleCancel();
    }
  }

  const panelBase =
    "fusion-dialog bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] shadow-lg min-w-80 max-w-md w-full border border-[var(--border-color-default)]";

  const paddingBySize: Record<SizeKey, string> = {
    xs: "p-[var(--spacing-sm)]",
    sm: "p-[var(--spacing-md)]",
    md: "p-[var(--spacing-lg)]",
    lg: "p-[var(--spacing-xl)]",
    xl: "p-[var(--spacing-xl)]",
  };

  const titleTextBySize: Record<SizeKey, string> = {
    xs: TEXT.md,
    sm: TEXT.md,
    md: TEXT.xl,
    lg: TEXT.xl,
    xl: "text-2xl",
  };

  const panelClass = $derived(cx(panelBase, externalClass));
  const paddingCls = $derived(paddingBySize[sz]);
  const footerPaddingCls = $derived(cx(paddingCls, "pt-0"));
  const titleTextCls = $derived(titleTextBySize[sz]);
  const bodyTextCls = $derived(TEXT[sz]);

  $effect(() => {
    releaseFocus?.();
    if (open && panelEl) {
      queueMicrotask(() => {
        focusFirstInteractive(panelEl!);
        if (modal) {
          releaseFocus = trapFocus(panelEl!);
        }
      });
    } else {
      releaseFocus = null;
    }

    return () => {
      releaseFocus?.();
      releaseFocus = null;
    };
  });
</script>

{#snippet titleBlock()}
  <h3
    class={cx(
      "mb-2 font-[var(--font-weight-semibold)] color-[var(--color-text-default)]",
      titleTextCls
    )}
  >
    {title}
  </h3>
  <p
    class={cx(
      "leading-[var(--line-height-normal)] color-[var(--color-text-muted)]",
      bodyTextCls
    )}
  >
    {message}
  </p>
{/snippet}

{#if open}
  {#if modal}
    <div
      class="fixed inset-0 z-[var(--z-modal)] bg-oklch(0_0_0/var(--opacity-overlay)) flex items-center justify-center p-4"
      role="presentation"
      tabindex="-1"
      onkeydown={handleKeydown}
    >
      <div
        class={panelClass}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        bind:this={panelEl}
      >
        <div class={paddingCls}>
          {@render titleBlock()}

          {#if children}
            <div class="mt-3">
              {@render children?.(sz)}
            </div>
          {/if}
        </div>

        <div class={cx("flex gap-2 justify-end", footerPaddingCls)}>
          <Button {sz} variant="primary" onClick={handleConfirm}>{L.ok}</Button>
          <Button {sz} variant="secondary" onClick={handleCancel}>{L.cancel}</Button
          >
        </div>
      </div>
    </div>
  {:else}
    <div
      class="fixed top-4 right-4 z-[var(--z-modal)]"
      role="dialog"
      aria-modal="false"
      aria-label={title}
      tabindex="-1"
      onkeydown={handleKeydown}
    >
      <div class={panelClass} bind:this={panelEl}>
        <div class={paddingCls}>
          {@render titleBlock()}

          {#if children}
            <div class={cx("mt-3", bodyTextCls)}>
              {@render children?.(sz)}
            </div>
          {/if}
        </div>

        <div class={cx("flex gap-2 justify-end", footerPaddingCls)}>
          <Button {sz} variant="primary" onClick={handleConfirm}>{L.ok}</Button>
          <Button {sz} variant="secondary" onClick={handleCancel}>{L.cancel}</Button
          >
        </div>
      </div>
    </div>
  {/if}
{/if}
<style>
  :global(.fusion-dialog h3) {
    color: var(--color-text-default);
  }

  :global(.fusion-dialog p) {
    color: var(--color-text-muted);
  }
</style>
