<!-- src/lib/Radio.svelte -->
<script lang="ts">
  /**
   * @component Radio
   * @description Single choice input with optional label, custom sizing and theme variants.
   *
   * @prop label {string} - Text label shown next to the radio
   *
   * @prop children {Snippet} - Custom label content
   *
   * @prop sz {SizeKey} - Size option
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {ComponentVariant} - Visual style preset
   * @options default|neutral
   * @default default
   *
   * @prop checked {boolean} - Controlled checked state
   * @default false
   *
   * @prop group {unknown} - Native radio group binding (`bind:group`)
   *
   * @prop onChange {(checked: boolean) => void} - Fired when the radio toggles
   *
   * @prop class {string} - Extra classes applied to the root container
   * @default ""
   *
   * @prop describedBy {string} - ID of helper or error text for accessibility
   *
   * @prop value {string} - Radio value
   * @default "on"
   *
   * @note Fully supports native radio grouping through `bind:group`
   * @note Works as a controlled component when `checked` and `onChange` are used together
   * @note `children` takes priority over `label`
   * @note Size and variant affect circle size, dot size and colors
   * @note Hidden native input is focusable and exposes full accessibility attributes
   * @note Uses data-state attributes to enable custom styling
   */
  import type { Snippet } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { type SizeKey, type ComponentVariant, TEXT } from "./types";
  import { cx, uid } from "../utils";

  type Props = HTMLInputAttributes & {
    label?: string;
    children?: Snippet;
    sz?: SizeKey;
    variant?: ComponentVariant;
    checked?: boolean;
    group?: unknown;
    onChange?: (checked: boolean) => void;
    class?: string;
    describedBy?: string;
  };

  let {
    label,
    children,
    sz = "md",
    variant = "default",
    checked = $bindable(false),
    group = $bindable<unknown>(undefined),
    onChange,
    class: externalClass = "",
    describedBy,
    value = "on",
    ...rest
  }: Props = $props();

  const inputId = $derived(rest.id ?? uid("rd-"));

  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-[18px] h-[18px]",
    xl: "w-5 h-5",
  } as const;

  const dotSizes: Record<SizeKey, string> = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-3.5 h-3.5",
  };

  const gapBySize: Record<SizeKey, string> = {
    xs: "gap-1.5",
    sm: "gap-2",
    md: "gap-2.5",
    lg: "gap-3",
    xl: "gap-3.5",
  };

  const variants = $derived(
    variant === "neutral"
      ? {
          checked: "bg-transparent border-[var(--border-color-strong)]",
          unchecked: "bg-transparent border-[var(--border-color-default)]",
        }
      : {
          checked: "bg-transparent border-[var(--color-bg-primary)]",
          unchecked: "bg-transparent border-[var(--border-color-default)]",
        }
  );

  const baseCircle =
    "rounded-full border border-solid cursor-pointer transition-all duration-[var(--transition-fast)] ease-[var(--timing-default)] flex items-center justify-center";

  const focusFromPeer =
    "peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--border-color-focus)] peer-focus-visible:border-[var(--border-color-focus)]";

  const dotColor = $derived(
    variant === "neutral"
      ? "bg-[var(--border-color-strong)]"
      : "bg-[var(--color-bg-primary)]"
  );

  const isUsingGroup = $derived(typeof group !== "undefined");
  const isChecked = $derived(isUsingGroup ? group === value : checked);
  const state = $derived(isChecked ? "checked" : "unchecked");

  const rootClass = $derived(
    cx(
      "inline-flex items-center cursor-pointer select-none",
      gapBySize[sz],
      externalClass
    )
  );

  const radioClass = $derived(
    cx(
      baseCircle,
      focusFromPeer,
      sizeClasses[sz],
      isChecked && variants.checked,
      !isChecked && variants.unchecked,
      "peer-disabled:opacity-[var(--opacity-disabled)] peer-disabled:cursor-not-allowed"
    )
  );

  const dotClass = $derived(
    cx(
      "rounded-full transition-transform duration-[var(--transition-fast)] ease-[var(--timing-default)]",
      dotSizes[sz],
      dotColor,
      isChecked ? "scale-100 opacity-100" : "scale-50 opacity-0"
    )
  );

  const labelClass = $derived(
    cx(
      TEXT[sz],
      "[color:var(--color-text-muted)] font-medium peer-disabled:cursor-not-allowed"
    )
  );
</script>

<label class={rootClass} for={inputId}>
  <input
    id={inputId}
    type="radio"
    {value}
    bind:group
    checked={isChecked}
    {...rest}
    class="sr-only peer"
    aria-checked={isChecked}
    aria-describedby={describedBy}
    onchange={(event) => {
      const next = (event.currentTarget as HTMLInputElement).checked;
      checked = next;
      onChange?.(next);
    }}
  />

  <span data-state={state} class={radioClass} aria-hidden="true">
    <span class={dotClass}></span>
  </span>

  {#if children}
    <span class={labelClass}>{@render children?.()}</span>
  {:else if label}
    <span class={labelClass}>{label}</span>
  {/if}
</label>
