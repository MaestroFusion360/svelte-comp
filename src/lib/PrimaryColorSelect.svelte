<!-- src/lib/PrimaryColorSelect.svelte -->
<script lang="ts">
  /**
   * @component PrimaryColorSelect
   * @description Theme primary-color selector built on top of Select. Provides a fixed palette,
   * handles persistence, and updates the global <html> attribute.
   *
   * @prop sz {SizeKey} - Sizing preset passed directly to Select
   * @options xs|sm|md|lg|xl
   * @default sm
   *
   * @prop label {string} - Custom label text. Falls back to localized copy when omitted.
   *
   * @prop class {string} - Extra classes forwarded to the underlying Select component
   * @default ""
   *
   * @note The palette is predefined internally (`{ value, label, swatch }`).
   * @note Selected value is stored in localStorage under "primary".
   * @note The `html` element receives `data-primary="{value}"` for theme styling.
   * @note Uses the same onChange contract as Select and forwards palette options as-is.
   */
  import Select from "./Select.svelte";
  import type { PrimaryKey, PaletteOption, SizeKey } from "./types";
  import { getComponentText, getLangContext, getLangKey } from "./lang-context";

  type Props = {
    sz?: SizeKey;
    label?: string;
    class?: string;
  };

  let { sz = "sm", label, class: externalClass = "" }: Props = $props();

  const langCtx = getLangContext();
  const langKey = $derived(getLangKey(langCtx));
  const L = $derived(getComponentText("primaryColorSelect", langKey));

  const labelFinal = $derived(label ?? L.text);

  const palette: PaletteOption[] = [
    {
      value: "default",
      label: "Indigo",
      swatch: "oklch(62.3% 0.214 259.8deg)",
    },
    { value: "cyan", label: "Cyan", swatch: "oklch(71.5% 0.143 215.221)" },
    { value: "red", label: "Red", swatch: "oklch(58% 0.24 30deg)" },
    { value: "green", label: "Green", swatch: "oklch(65% 0.22 140deg)" },
    { value: "yellow", label: "Yellow", swatch: "oklch(75% 0.18 90deg)" },
    { value: "pink", label: "Pink", swatch: "oklch(70% 0.25 350deg)" },
    { value: "orange", label: "Orange", swatch: "oklch(72% 0.22 60deg)" },
    { value: "purple", label: "Purple", swatch: "oklch(55% 0.22 290deg)" },
  ];

  const paletteMap = palette.reduce<Record<PrimaryKey, PaletteOption>>(
    (acc, option) => {
      acc[option.value] = option;
      return acc;
    },
    {} as Record<PrimaryKey, PaletteOption>
  );

  let selected = $state<PrimaryKey>("default");
  let mounted = $state(false);

  function isPrimaryKey(value: unknown): value is PrimaryKey {
    return typeof value === "string" && value in paletteMap;
  }

  $effect(() => {
    if (!mounted) {
      try {
        if (typeof window !== "undefined") {
          const saved = localStorage.getItem("primary");
          if (isPrimaryKey(saved)) {
            selected = saved;
          }
        }
      } catch {
        // ignore unavailable storage/environment
      }
      mounted = true;
    }
  });

  $effect(() => {
    if (mounted) {
      try {
        if (typeof document !== "undefined") {
          document.documentElement.setAttribute("data-primary", selected);
        }
        if (typeof window !== "undefined") {
          localStorage.setItem("primary", selected);
        }
      } catch {
        // ignore unavailable storage/environment
      }
    }
  });
</script>

<Select
  {sz}
  label={labelFinal}
  options={palette}
  value={selected}
  onChange={(v) => {
    if (isPrimaryKey(v)) selected = v;
  }}
  class={externalClass}
/>
