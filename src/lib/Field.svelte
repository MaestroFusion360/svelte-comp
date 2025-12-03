<!-- src/lib/Field.svelte -->
<script lang="ts">
  /**
   * @component Field
   * @description Unified input/textarea field with label, leading/trailing content, clear button, and validation.
   *
   * @prop as {"input" | "textarea"} - Underlying element to render
   * @default "input"
   *
   * @prop label {string} - Label text rendered above the field
   *
   * @prop sz {SizeKey} - Size preset for spacing and typography
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {FieldVariant} - Visual style variant
   * @options default|filled|neutral
   * @default default
   *
   * @prop clearable {boolean} - Shows a clear button for text inputs
   * @default true
   *
   * @prop rows {number} - Row count for textarea mode
   * @default 3
   *
   * @prop parseNumber {boolean} - Coerces numeric input when possible
   * @default false
   *
   * @prop leading {Snippet | string} - Leading content rendered inside the field
   *
   * @prop trailing {Snippet | string} - Trailing content rendered inside the field
   *
   * @prop onChange {(val: string | number) => void} - Fired when the value changes
   *
   * @prop value {string | number} - Controlled field value (bindable)
   * @default ""
   *
   * @prop class {string} - Additional classes applied to the root label
   * @default ""
   *
   * @prop id {string} - Custom id used for label and input linkage
   *
   * @prop type {string} - Input type when `as="input"`
   *
   * @prop invalid {boolean} - Marks the field invalid and sets `aria-invalid`
   * @default false
   *
   * @prop describedBy {string} - ID of helper or error text for accessibility
   *
   * @note `bind:value` is supported; `onChange` receives cast value (`number` when `parseNumber` succeeds, otherwise `string` or `""`).
   * @note Clear button appears only for text inputs (not for `type="number"`) and sets value to an empty string.
   * @note Automatic padding for leading/trailing content; label is linked via an auto-generated `id`.
   * @note Accessibility: sets `aria-invalid`, `aria-describedby`; number inputs also set `inputmode="decimal"`.
   */
  import type { Snippet } from "svelte";
  import type {
    HTMLInputAttributes,
    HTMLTextareaAttributes,
  } from "svelte/elements";
  import type { SizeKey, FieldVariant, FieldType } from "$lib/types";
  import { TEXT } from "$lib/types";
  import { uid, cx } from "$utils";

  type Props = (HTMLInputAttributes & HTMLTextareaAttributes & FieldType) & {
    value?: string | number;
  };

  let {
    as = "input",
    label,
    sz = "md",
    variant = "default",
    clearable = true,
    rows = 3,
    parseNumber = false,
    leading,
    trailing,
    onChange,
    value = $bindable<string | number>(""),
    class: externalClass = "",
    id: externalId,
    type,
    invalid = false,
    describedBy,
    ...rest
  }: Props = $props();

  const base =
    "w-full outline-none transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed";

  const sizes: Record<SizeKey, string> = {
    xs: "px-2 h-6",
    sm: "px-3 h-7",
    md: "px-4 h-8",
    lg: "px-5 h-9",
    xl: "px-6 h-10",
  };

  const variants: Record<FieldVariant, string> = {
    default:
      "bg-[var(--color-bg-surface)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
    filled:
      "bg-[var(--color-bg-muted)] [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-[var(--border-color-default)]",
    neutral:
      "bg-transparent [color:var(--color-text-default)] placeholder:[color:var(--color-text-muted)] border-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
  };

  const rootClass = $derived(cx("flex flex-col gap-1", externalClass));

  const inputClass = $derived(
    as === "textarea"
      ? cx(base, variants[variant], TEXT.md, "px-4")
      : cx(base, sizes[sz], TEXT[sz], variants[variant])
  );

  const containerClass = $derived(
    cx("relative flex items-stretch", as === "textarea" && "items-start")
  );

  const id = $derived(externalId ?? uid("fld-"));

  const effectiveType = $derived(
    as === "input"
      ? type || (rest as HTMLInputAttributes).type || "text"
      : undefined
  );

  const isNumber = $derived(as === "input" && effectiveType === "number");
  const isPassword = $derived(as === "input" && effectiveType === "password");

  let showPassword = $state(false);

  function toOutgoing(v: string): string | number {
    if (parseNumber && isNumber) {
      if (v === "" || v === "-" || v === "." || v === "-.") {
        return v;
      }
      const n = Number(v);
      return Number.isNaN(n) ? "" : n;
    }
    return v;
  }

  function handleInput(e: Event) {
    const t = e.target as HTMLInputElement | HTMLTextAreaElement;
    const rawValue = t.value;
    const outgoing = toOutgoing(rawValue);
    value = outgoing;
    onChange?.(outgoing);
  }

  function clear() {
    const newValue = parseNumber && isNumber ? 0 : "";
    value = newValue;
    onChange?.(newValue);
  }

  const displayValue = $derived(String(value ?? ""));
  const showClear = $derived(
    clearable && as === "input" && displayValue.length > 0 && !isNumber
  );
  const needsRightPad = $derived(Boolean(trailing) || showClear || isPassword);

  const labelColor = "[color:var(--color-text-muted)]";
</script>

<label for={id} class={rootClass}>
  {#if label}
    <span class={cx(TEXT[sz], "font-medium", labelColor)}>{label}</span>
  {/if}

  <div class={containerClass}>
    {#if leading}
      {@const leadingIsSnippet = typeof leading === "function"}
      <div
        class={cx(
          "absolute inset-y-0 left-2 flex items-center [color:var(--color-text-muted)]"
        )}
        aria-hidden="true"
      >
        {#if leadingIsSnippet}
          {@render (leading as Snippet)()}
        {:else}
          {leading}
        {/if}
      </div>
    {/if}

    {#if as === "textarea"}
      <textarea
        {...rest}
        {id}
        {rows}
        class={cx(inputClass, needsRightPad && "pr-8", leading && "pl-8")}
        value={displayValue}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        oninput={handleInput}
      ></textarea>
    {:else}
      <input
        {...rest}
        {id}
        type={isPassword ? (showPassword ? "text" : "password") : effectiveType}
        inputmode={isNumber ? "decimal" : undefined}
        class={cx(inputClass, needsRightPad && "pr-8", leading && "pl-8")}
        value={displayValue}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        oninput={handleInput}
      />
    {/if}

    <div class={cx("absolute inset-y-0 right-2 flex items-center gap-1")}>
      {#if trailing}
        {@const trailingIsSnippet = typeof trailing === "function"}
        <span aria-hidden="true">
          {#if trailingIsSnippet}
            {@render (trailing as Snippet)()}
          {:else}
            {trailing}
          {/if}
        </span>
      {/if}

      {#if isPassword}
        <button
          type="button"
          class={cx("password-toggle [color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]")}
          onmousedown={(e) => e.preventDefault()}
          onclick={() => (showPassword = !showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {#if showPassword}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 3L21 21" stroke="currentColor" stroke-width="2" />
              <path
                d="M10.5 10.677a2 2 0 002.823 2.823"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c2.4 3.6 6 6 9 6 1.4 0 2.8-.5 4.1-1.2"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M12 6c3 0 6 2.4 9 6-.6.9-1.3 1.7-2 2.5"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          {:else}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          {/if}
        </button>
      {/if}

      {#if showClear}
        <button
          type="button"
          tabindex="-1"
          onmousedown={(e) => e.preventDefault()}
          class={cx("[color:var(--color-text-muted)] hover:opacity-[var(--opacity-hover)]")}
          onclick={clear}
          aria-label="Clear"
          title="Clear"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      {/if}
    </div>
  </div>
</label>
