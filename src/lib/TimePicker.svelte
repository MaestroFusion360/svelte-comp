<!-- src/lib/TimePicker.svelte -->
<script lang="ts">
  /**
   * @component TimePicker
   * @description Simple time selector that stores values in ISO `HH:MM` format. Supports a fixed step and two display systems.
   *
   * @prop value {string | null} - Stored time in ISO `HH:MM` (bindable)
   * @default null
   *
   * @prop step {number} - Step in seconds
   * @default 60
   *
   * @prop label {string} - Label text
   *
   * @prop placeholder {string} - Placeholder when value is null
   *
   * @prop disabled {boolean} - Disable all interactions
   * @default false
   *
   * @prop clearable {boolean} - Show the clear button
   * @default true
   *
   * @prop initialSystem {"iso" | "english"} - Picker mode (24h vs 12h)
   * @default "iso"
   *
   * @prop onChange {(value: string | null) => void} - Fired when value changes
   *
   * @prop class {string} - Wrapper classes
   * @default ""
   *
   * @note ISO mode uses 24-hour time; English mode uses 12-hour time with AM/PM
   * @note The stored value is always ISO (`HH:MM`)
   * @note `step` defines the minute grid (derived from seconds)
   * @note No locale or date-formatting APIs are used internally
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { getContext } from "svelte";
  import Button from "./Button.svelte";
  import Select from "./Select.svelte";
  import { cx } from "../utils";
  import { TEXTS } from "./lang";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string | null;
    step?: number;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    initialSystem?: "iso" | "english";
    onChange?: (value: string | null) => void;
    class?: string;
  };

  let {
    value = $bindable<string | null>(null),
    step = 60,
    label,
    placeholder,
    disabled = false,
    clearable = true,
    initialSystem = "iso",
    onChange,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const langCtx =
    getContext<{ value: keyof typeof TEXTS } | undefined>("lang") ?? null;
  const langKey = $derived(langCtx?.value ?? "en");
  const L = $derived(TEXTS[langKey].components.timePicker);

  const labelFinal = $derived(label ?? L.text);
  const placeholderFinal = $derived(placeholder ?? L.placeholder);

  const pickerClass = $derived(cx("inline-block w-full", externalClass));

  let timeSystem = $derived(initialSystem);

  let hour = $state("00");
  let minute = $state("00");
  let period = $state<"AM" | "PM">("AM");

  const hasValue = $derived(value != null);

  const isoHours = Array.from({ length: 24 }, (_, i) => {
    const h = i.toString().padStart(2, "0");
    return { value: h, label: h };
  });

  const englishHours = Array.from({ length: 12 }, (_, i) => {
    const h = (i + 1).toString().padStart(2, "0");
    return { value: h, label: h };
  });

  const periodOptions = [
    { value: "AM", label: "AM" },
    { value: "PM", label: "PM" },
  ];

  const minuteIncrement = $derived(
    !step || step <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(step / 60)))
  );

  const minuteOptions = $derived.by(() => {
    const arr = [];
    for (let i = 0; i < 60; i += minuteIncrement) {
      const m = i.toString().padStart(2, "0");
      arr.push({ value: m, label: m });
    }
    return arr;
  });

  function normalize(x: string) {
    return x.padStart(2, "0").slice(-2);
  }

  function emit() {
    const v =
      timeSystem === "english"
        ? `${hour}:${minute} ${period}`
        : `${hour}:${minute}`;

    value = v;
    onChange?.(v);
  }

  function handleIsoHour(v: string) {
    hour = normalize(v);
    emit();
  }

  function handleMinute(v: string) {
    minute = normalize(v);
    emit();
  }

  function handleEnglishHour(v: string) {
    hour = normalize(v);
    emit();
  }

  function handlePeriod(v: string) {
    period = v === "AM" || v === "PM" ? v : "AM";
    emit();
  }

  function toggleSystem() {
    if (disabled) return;

    if (timeSystem === "iso") {
      timeSystem = "english";

      const h = parseInt(hour, 10);

      if (h >= 0) {
        hour = "12";
      }

      handlePeriod("AM");
    } else {
      timeSystem = "iso";
    }

    emit();
  }

  function clearSelection() {
    if (!clearable) return;
    hour = "00";
    minute = "00";
    period = "AM";
    value = null;
    onChange?.(null);
  }

  $effect(() => {
    if (value == null) return;

    let raw = value;

    if (raw.includes("AM") || raw.includes("PM")) {
      raw = raw.replace(" AM", "").replace(" PM", "");
    }

    const [h, m] = raw.split(":");
    hour = normalize(h);
    minute = normalize(m);
  });
</script>

<div class={pickerClass} {...rest}>
  <div class="text-sm font-medium mb-2 [color:var(--color-text-default)]">
    {labelFinal}
  </div>

  <div class="flex items-start gap-4">
    <div class="flex flex-wrap gap-3 min-w-[0]">
      {#if timeSystem === "iso"}
        <Select
          label={L.hour}
          options={isoHours}
          value={hour}
          onChange={handleIsoHour}
          {disabled}
          sz="sm"
        />
      {:else}
        <Select
          label={L.hour}
          options={englishHours}
          value={hour}
          onChange={handleEnglishHour}
          {disabled}
          sz="sm"
        />

        <Select
          label={L.period}
          options={periodOptions}
          value={period}
          onChange={handlePeriod}
          {disabled}
          sz="sm"
        />
      {/if}

      <Select
        label={L.minute}
        options={minuteOptions}
        value={minute}
        onChange={handleMinute}
        {disabled}
        sz="sm"
      />
    </div>

    <div class="flex items-center gap-3 pt-6">
      <Button onClick={toggleSystem} {disabled} sz="xs">
        {timeSystem === "iso" ? L.switchTo12h : L.switchTo24h}
      </Button>

      {#if clearable}
        <Button
          onClick={clearSelection}
          variant="danger"
          disabled={!hasValue || disabled}
          sz="xs"
        >
          {L.clear}
        </Button>
      {/if}
    </div>
  </div>

  <div class="mt-4 p-4 bg-[var(--color-bg-surface)] text-center">
    <p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]">
      {L.selectedTime}
    </p>

    <p class="text-sm font-semibold mt-1 [color:var(--color-text-default)]">
      {#if hasValue}
        {value}
      {:else}
        {placeholderFinal}
      {/if}
    </p>
  </div>
</div>
