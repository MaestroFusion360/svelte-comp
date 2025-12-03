<!-- src/lib/Button.svelte -->
<script lang="ts">
  /**
   * @component Button
   * @description Versatile button supporting multiple variants, sizes, loading state, and link behavior.
   *
   * @prop disabled {boolean} - Disables interaction
   * @default false
   *
   * @prop children {Snippet} - Content rendered inside the button
   *
   * @prop onClick {(e: MouseEvent) => void} - Click handler
   *
   * @prop sz {SizeKey} - Button size variant
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {ButtonVariant} - Visual style preset
   * @options primary|secondary|pill|danger|success|warning|ghost|link|info
   * @default primary
   *
   * @prop type {"button" | "submit" | "reset"} - Button type attribute
   * @default "button"
   *
   * @prop loaded {boolean} - Shows loading spinner and blocks clicks
   * @default false
   *
   * @prop link {string} - Navigates to a URL when clicked
   *
   * @prop class {string} - Additional classes for the button
   * @default ""
   *
   * @note `disabled` and `loaded` both prevent click events.
   * @note Automatically shows a centered spinner when `loaded` is `true`.
   * @note Link navigation supports `target` and `rel` attributes.
   * @note Accessible with `aria-disabled` and `aria-busy` states.
   * @note The component uses CSS variables for colors, spacing, and transitions.
   */
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";
  import { type SizeKey, type ButtonVariant, TEXT } from "$lib/types";
  import { cx } from "$utils";

  type Props = HTMLButtonAttributes & {
    disabled?: boolean;
    children?: Snippet;
    onClick?: (e: MouseEvent) => void;
    sz?: SizeKey;
    variant?: ButtonVariant;
    type?: "button" | "submit" | "reset";
    loaded?: boolean;
    link?: string;
    class?: string;
  };

  let {
    disabled,
    children,
    onClick,
    sz = "md",
    variant = "primary",
    type = "button",
    loaded = false,
    link,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const base = `
    relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-medium
    transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] whitespace-nowrap select-none
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)]
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

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-bg-primary)] text-white border-[var(--border-color-primary)] hover:brightness-110 active:scale-95",
    secondary:
      "bg-[var(--color-bg-secondary)] [color:var(--color-text-default)] border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)] active:scale-95",
    pill: "bg-[var(--color-bg-primary)] text-white border-[var(--border-color-primary)] rounded-full hover:brightness-110 active:scale-95",
    danger:
      "bg-[var(--color-bg-danger)] text-white border-[var(--color-bg-danger)] hover:brightness-110 active:scale-95",
    success:
      "bg-[var(--color-bg-success)] text-white border-[var(--color-bg-success)] hover:brightness-110 active:scale-95",
    warning:
      "bg-[var(--color-bg-warning)] text-white border-[var(--color-bg-warning)] hover:brightness-110 active:scale-95",
    ghost:
      "bg-transparent [color:var(--color-text-default)] border-transparent hover:bg-[var(--color-bg-hover)] active:bg-[var(--color-bg-active)] active:scale-95",
    link: "bg-transparent underline border-transparent [color:var(--color-text-link)] hover:brightness-110 active:scale-95 transition-transform ",
    info: "bg-[var(--color-bg-secondary)] text-white border-[var(--border-color-default)] hover:bg-[var(--color-bg-hover)] active:scale-95",
  };

  const buttonClass = $derived(
    cx(base, sizes[sz], TEXT[sz], variants[variant], externalClass)
  );

  const state = $derived(loaded ? "loading" : disabled ? "disabled" : "idle");

  function handleClick(e: MouseEvent) {
    if (disabled || loaded) {
      e.preventDefault();
      return;
    }

    if (type === "submit" || type === "reset") {
      onClick?.(e);
      return;
    }

    onClick?.(e);
    if (!link || e.defaultPrevented) return;

    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    navigateToLink();
  }

  function navigateToLink() {
    if (!link || typeof window === "undefined") return;

    const restAttrs = rest as Record<string, unknown>;
    const target =
      typeof restAttrs.target === "string" ? restAttrs.target : undefined;

    if (target === "_blank") {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.location.assign(link);
    }
  }
</script>

<button
  {type}
  {disabled}
  data-state={state}
  aria-disabled={disabled || loaded || undefined}
  aria-busy={loaded || undefined}
  onclick={handleClick}
  class={buttonClass}
  {...rest}
>
  <span class={cx({ "opacity-0 pointer-events-none": loaded })}>
    {@render children?.()}
  </span>

  {#if loaded}
    <span
      class={cx(
        "absolute inset-0 m-auto w-[1em] h-[1em] border-2 [border-color:var(--color-spinner,currentColor)] border-r-transparent rounded-full motion-safe:[animation:spin_0.6s_linear_infinite]"
      )}
      aria-hidden="true"
    ></span>
  {/if}
</button>
