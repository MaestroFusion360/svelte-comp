<!-- src/demo/PlayCard.svelte -->
<script lang="ts">
  /**
   * Public component props for PlayCard (playground wrapper).
   *
   * Notes:
   * - `component` selects component metadata (sizes/variants).
   * - `title`/`subtitle` label the playground card.
   * - `sz` seeds the initial size; `label`/`disabled` seed control defaults.
   * - `children` is a snippet receiving size, variant, label, disabled, type, and boolean value flags.
   * - `class` merges external classes on the root card.
   */
  import type { Snippet } from "svelte";
  import { getContext } from "svelte";
  import Card from "$lib/Card.svelte";
  import Select from "$lib/Select.svelte";
  import Field from "$lib/Field.svelte";
  import CheckBox from "$lib/CheckBox.svelte";
  import type { SizeKey } from "$lib/types";
  import { componentMeta, fieldTypes, type ComponentName } from "../demo";
  import { cx } from "$utils";
  import { TEXTS } from "../lang";

  type Props = {
    component: ComponentName;
    title?: string;
    subtitle?: string;
    sz?: SizeKey;
    class?: string;
    label?: string;
    disabled?: boolean;
    children?: Snippet<[SizeKey, string, string, boolean, string, boolean]>;
  };

  let {
    component,
    title = "",
    subtitle = "",
    sz = "md",
    class: externalClass = "",
    label = "",
    disabled = false,
    children,
  }: Props = $props();

  const lang = getContext<{ value: keyof typeof TEXTS }>("lang");
  const L = $derived(TEXTS[lang.value].playground.controls);

  const meta = componentMeta[component];

  const fieldTypeOptions = $derived(
    fieldTypes.map((t) => ({
      label: t.charAt(0).toUpperCase() + t.slice(1),
      value: t,
    }))
  );

  let curSize = $state(sz);
  let curVariant = $state(meta.variants[0] ?? "");
  let curLabel = $state(label);
  let curDisabled = $state(disabled);
  let curType = $state("input");
  let curValue = $state(false);

  const rootClass = $derived(cx("w-full flex flex-col", externalClass));
</script>

<Card class={rootClass}>
  <header
    class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"
  >
    <h2 class="text-2xl font-semibold tracking-tight">
      {title || L.playcardLabel}
    </h2>

    <span class="text-sm [color:var(--color-text-muted)]">
      {subtitle || L.playcardSubtitle}
    </span>
  </header>

  <section class="p-3 md:p-3 lg:p-3">
    <div class="flex gap-4 flex-wrap items-end">
      {#if meta.sizes.length}
        <Select
          label={L.size}
          bind:value={curSize}
          options={meta.sizes.map((s) => ({
            label: s.toUpperCase(),
            value: s,
          }))}
          sz="xs"
          class="min-w-[4rem]"
        />
      {/if}

      {#if meta.variants.length}
        <Select
          label={L.variant}
          bind:value={curVariant}
          options={meta.variants.map((v) => ({
            label: v.charAt(0).toUpperCase() + v.slice(1),
            value: v,
          }))}
          sz="xs"
        />
      {/if}

      {#if meta.supports.label}
        <div class="flex items-end gap-2">
          <Field
            label={L.label}
            bind:value={curLabel}
            sz="xs"
            variant="default"
            maxlength={20}
            class="flex-1"
          />

          <span class="text-xs text-[var(--color-text-muted)] mb-1">
            {curLabel.length}/20
          </span>
        </div>
      {/if}

      {#if meta.supports.disabled}
        <CheckBox
          label={L.disabled}
          bind:checked={curDisabled}
          sz="sm"
          variant="default"
        />
      {/if}

      {#if component === "Field"}
        <Select
          sz="xs"
          variant="default"
          label={L.fieldType}
          bind:value={curType}
          options={fieldTypeOptions}
        />
      {/if}

      {#if component === "Slider"}
        <CheckBox
          label={L.sliderShowValue}
          bind:checked={curValue}
          sz="sm"
          variant="default"
          onChange={(v) => (curValue = v)}
        />
      {/if}
    </div>
  </section>

  <section class="p-3 md:p-3 lg:p-3">
    <div
      class="bg-[var(--color-bg-surface)] rounded-[var(--radius-xl)] p-4 md:p-6 lg:p-10 shadow-lg w-full border border-[var(--border-color-default)] flex items-center justify-center"
    >
      {@render children?.(
        curSize,
        curVariant,
        curLabel,
        curDisabled,
        curType,
        curValue
      )}
    </div>
  </section>
</Card>
