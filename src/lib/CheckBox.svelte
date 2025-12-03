<!-- src/lib/CheckBox.svelte -->
<script lang="ts">
  /**
   * @component CheckBox
   * @description Accessible custom checkbox with `indeterminate` support.
   *
   * @prop label {string} - Text label shown next to the checkbox
   *
   * @prop sz {SizeKey} - Size option
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {ComponentVariant} - Visual style preset
   * @options default|neutral
   * @default default
   *
   * @prop indeterminate {boolean} - Enables the mixed state
   * @default false
   *
   * @prop checked {boolean} - Controlled checked state (bindable)
   * @default false
   *
   * @prop onChange {(checked: boolean) => void} - Fired when the checkbox toggles
   *
   * @prop class {string} - Extra classes applied to the root container
   * @default ""
   *
   * @prop invalid {boolean} - Marks the field invalid and sets `aria-invalid`
   * @default false
   *
   * @prop describedBy {string} - ID of helper or error text for accessibility
   *
   * @note Fully bindable via `bind:checked`; `onChange` receives the final boolean.
   * @note `indeterminate` is applied to the underlying input and reported as `aria-checked="mixed"`.
   * @note Clicking the custom box while `indeterminate` clears it and sets `checked=true`.
   * @note `invalid` maps to `aria-invalid`; `describedBy` maps to `aria-describedby`.
   * @note SVG check and dash are inline; colors adapt per `variant` (`neutral` uses border color).
   * @note Sizes scale the control box (`xs → xl`).
   */
  import type { HTMLInputAttributes } from "svelte/elements";
  import { type SizeKey, type ComponentVariant, TEXT } from "$lib/types";
  import { cx, uid } from "$utils";

  type Props = HTMLInputAttributes & {
    label?: string;
    sz?: SizeKey;
    variant?: ComponentVariant;
    indeterminate?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    class?: string;
    invalid?: boolean;
    describedBy?: string;
  };

  let {
    label,
    sz = "md",
    variant = "default",
    indeterminate = false,
    checked = $bindable(false),
    onChange,
    class: externalClass = "",
    invalid = false,
    describedBy,
    ...rest
  }: Props = $props();

  const inputId = $derived(rest.id ?? uid("chk-"));

  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-[18px] h-[18px]",
    xl: "w-5 h-5",
  } as const;

  const gapBySize: Record<SizeKey, string> = {
    xs: "gap-1.5",
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-3",
    xl: "gap-3.5",
  };

  const variants = $derived(
    {
      default: {
        checked:
          "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]",
        unchecked:
          "bg-[var(--color-bg-surface)] border-[var(--border-color-default)]",
        mixed:
          "bg-[var(--color-bg-secondary)] border-[var(--border-color-default)]",
      },
      neutral: {
        checked: "bg-transparent border-[var(--border-color-strong)]",
        unchecked: "bg-transparent border-[var(--border-color-default)]",
        mixed: "bg-transparent border-[var(--border-color-strong)]",
      },
    }[variant]
  );

  const boxBase =
    "rounded-[var(--radius-sm)] border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center";

  const focusFromPeer =
    "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]";

  const state = $derived(
    indeterminate ? "mixed" : checked ? "checked" : "unchecked"
  );

  const strokeColor = $derived(
    variant === "neutral"
      ? state === "checked" || state === "mixed"
        ? "var(--border-color-strong)"
        : "var(--border-color-default)"
      : "white"
  );

  const rootClass = $derived(
    cx(
      "inline-flex items-center cursor-pointer select-none",
      gapBySize[sz],
      externalClass
    )
  );

  const checkboxClass = $derived(
    cx(
      boxBase,
      focusFromPeer,
      sizeClasses[sz],
      state === "checked" && variants.checked,
      state === "mixed" && variants.mixed,
      state === "unchecked" && variants.unchecked,
      "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
    )
  );

  const labelClass = $derived(
    cx(
      TEXT[sz],
      "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
    )
  );

  function handleClick(e: MouseEvent) {
    if (indeterminate) {
      e.preventDefault();
      checked = true;
      indeterminate = false;
      onChange?.(true);
    }
  }
</script>

<label class={rootClass} for={inputId}>
  <input
    id={inputId}
    type="checkbox"
    bind:checked
    {...rest}
    class="sr-only peer"
    aria-checked={indeterminate ? "mixed" : checked}
    aria-invalid={invalid || undefined}
    aria-describedby={describedBy}
    onchange={() => {
      if (indeterminate) indeterminate = false;
      onChange?.(checked);
    }}
  />

  <span
    data-state={state}
    class={checkboxClass}
    onclick={handleClick}
    aria-hidden="true"
  >
    {#if indeterminate}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
      >
        <line x1="4" y1="12" x2="20" y2="12" />
      </svg>
    {:else if checked}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={strokeColor}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    {/if}
  </span>

  {#if label}
    <span class={labelClass}>{label}</span>
  {/if}
</label>
