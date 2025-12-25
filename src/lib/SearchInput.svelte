<script lang="ts">
  /**
   * @component SearchInput
   * @description Search input field with a leading search icon.
   *
   * @prop label {string} - Label text rendered above the field
   *
   * @prop placeholder {string} - Placeholder text (localized by default)
   *
   * @prop value {string} - Controlled field value (bindable)
   * @default ""
   *
   * @prop sz {SizeKey} - Size preset for spacing and typography
   * @options xs|sm|md|lg|xl
   * @default sm
   *
   * @prop variant {FieldVariant} - Visual style variant
   * @options default|filled|neutral
   * @default filled
   *
   * @prop class {string} - Additional classes applied to the Field root
   * @default ""
   *
   * @note Renders a leading search icon and uses `Field` with `type="search"` and `clearable`.
   */
  import { getContext } from "svelte";
  import Field from "./Field.svelte";
  import type { FieldVariant, SizeKey } from "./types";
  import { TEXTS } from "./lang";

  type Props = {
    label?: string;
    placeholder?: string;
    value?: string;
    sz?: SizeKey;
    variant?: FieldVariant;
    class?: string;
    [key: string]: unknown;
  };

  let {
    label,
    placeholder,
    value = $bindable(''),
    sz = 'sm',
    variant = 'filled',
    class: externalClass = '',
    ...rest
  }: Props = $props();

  const langCtx =
    getContext<{ value: keyof typeof TEXTS } | undefined>("lang") ?? null;
  const langKey = $derived(langCtx?.value ?? "en");
  const L = $derived(TEXTS[langKey].components.searchInput);

  const placeholderFinal = $derived(placeholder ?? L.placeholder);
</script>

{#snippet leading()}
  <span class="ml-1 inline-flex h-6 w-6 items-center justify-center text-[var(--color-text-muted)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-search-icon lucide-search"
    >
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  </span>
{/snippet}

<Field
  {label}
  bind:value
  {sz}
  {variant}
  type="search"
  clearable={true}
  {leading}
  placeholder={placeholderFinal}
  class={`search-input w-full max-w-[520px] [&_input]:pl-10 ${externalClass}`}
  {...rest}
/>

<style>
  :global(.search-input input[type="search"]) {
    -webkit-appearance: none;
    appearance: none;
  }

  :global(.search-input input[type="search"]::-webkit-search-cancel-button),
  :global(.search-input input[type="search"]::-webkit-search-decoration),
  :global(.search-input input[type="search"]::-webkit-search-results-button),
  :global(.search-input input[type="search"]::-webkit-search-results-decoration) {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }
</style>
