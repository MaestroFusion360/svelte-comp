<!-- src/lib/Switch.svelte -->
<script lang="ts">
  /**
   * @component Switch
   * @description A compact toggle switch component built on top of a native `<input type="checkbox">`. Supports optional labels around the control and works naturally with `bind:checked`.
   *
   * @prop sz {SizeKey} - Size preset for the control
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop checked {boolean} - Current state (bindable)
   * @default false
   *
   * @prop leftLabel {string} - Optional label rendered on the left side
   *
   * @prop rightLabel {string} - Optional label rendered on the right side
   *
   * @prop topLabel {string} - Optional label placed above the switch
   *
   * @prop onChange {(v: boolean) => void} - Fired on toggle with the new value
   *
   * @prop class {string} - External wrapper classes
   * @default ""
   *
   * @note Built over a real checkbox so browser accessibility comes for free: keyboard (Space/Enter), focus ring, and screen reader semantics.
   * @note Labels do not affect the actual checkbox hitbox, but the whole area is clickable if wrapped correctly.
   * @note Size preset adjusts track width, knob size, and spacing.
   * @note Reflects `disabled` by dimming visuals and removing pointer events.
   * @note The component keeps no internal state besides the bound `checked` value, so it's predictable in forms and controlled UI.
   */
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { SizeKey } from "$lib/types";
  import { TEXT } from "$lib/types";
  import { cx, uid } from "$utils";

  type Props = HTMLInputAttributes & {
    sz?: SizeKey;
    checked?: boolean;
    leftLabel?: string;
    rightLabel?: string;
    topLabel?: string;
    onChange?: (v: boolean) => void;
    class?: string;
  };

  let {
    sz = "md",
    checked = $bindable(false),
    leftLabel,
    rightLabel,
    topLabel,
    onChange,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const inputId = $derived(rest.id ?? uid("sw-"));

  const track = {
    xs: "w-8 h-4",
    sm: "w-10 h-5",
    md: "w-12 h-6",
    lg: "w-14 h-7",
    xl: "w-16 h-8",
  } as const;

  const knob = {
    xs: "h-[14px] w-[14px]",
    sm: "h-[17px] w-[17px]",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  } as const;

  const pad = {
    xs: "p-[1px]",
    sm: "p-[1.5px]",
    md: "p-[2px]",
    lg: "p-[2px]",
    xl: "p-[2px]",
  } as const;

  const isDisabled = $derived(
    "disabled" in rest ? Boolean(rest.disabled) : false
  );

  function toggle() {
    if (isDisabled) return;
    checked = !checked;
    onChange?.(checked);
  }

  const justifyClass = $derived(checked ? "justify-end" : "justify-start");

  const trackClass = $derived(
    cx(
      "relative inline-flex items-center rounded-full border transition focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]",
      track[sz],
      pad[sz],
      checked
        ? "bg-[var(--color-bg-primary)] border-[var(--color-bg-primary)]"
        : "bg-[var(--color-bg-muted)] border-[var(--border-color-default)]",
      isDisabled
        ? "opacity-[var(--opacity-disabled)] cursor-not-allowed"
        : "cursor-pointer",
      justifyClass
    )
  );

  const rootClass = $derived(
    cx("inline-flex flex-col items-center gap-1 select-none", externalClass)
  );

  const knobClass = $derived(
    cx(
      knob[sz],
      "rounded-full bg-white border border-[var(--border-color-default)] shadow-sm"
    )
  );
</script>

<label class={rootClass} for={inputId}>
  {#if topLabel}
    <span class="text-[var(--color-text-muted)] {TEXT[sz]}">
      {topLabel}
    </span>
  {/if}

  <div class="inline-flex items-center gap-2">
    {#if leftLabel}
      <span class="text-[var(--color-text-muted)] {TEXT[sz]}">
        {leftLabel}
      </span>
    {/if}

    <input
      id={inputId}
      type="checkbox"
      {checked}
      {...rest}
      class="sr-only"
      aria-checked={checked}
      aria-invalid={rest["aria-invalid"] || undefined}
      aria-describedby={rest["aria-describedby"]}
      onchange={() => toggle()}
    />

    <button
      type="button"
      class={trackClass}
      onclick={toggle}
      aria-pressed={checked}
      aria-label={typeof rest["aria-label"] === "string"
        ? rest["aria-label"]
        : "Switch"}
      disabled={isDisabled}
    >
      <span class={knobClass}></span>
    </button>

    {#if rightLabel}
      <span class="text-[var(--color-text-muted)] {TEXT[sz]}">
        {rightLabel}
      </span>
    {/if}
  </div>
</label>
