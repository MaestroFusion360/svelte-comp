<!-- src/lib/TimePickerNew.svelte -->
<script lang="ts">
  /**
   * @component TimePickerNew
   * @description Second time picker implementation with improved functionality and UI.
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
   * @prop clearable {boolean} - Show clear action
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
   * @note `step` defines the minute grid, derived from seconds
   * @note No locale or date-formatting APIs are used internally
   */

  import type { HTMLAttributes } from "svelte/elements";
  import Button from "./Button.svelte";
  import { cx } from "../utils";
  import { getComponentText, getLangContext, getLangKey } from "./lang-context";

  type TimeSystem = "iso" | "english";
  type Period = "AM" | "PM";

  type Props = HTMLAttributes<HTMLDivElement> & {
    value?: string | null;
    step?: number;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    initialSystem?: TimeSystem;
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

  const langCtx = getLangContext();
  const langKey = $derived(getLangKey(langCtx));
  const L = $derived(getComponentText("timePicker", langKey));

  const labelFinal = $derived(label ?? L.text);
  const placeholderFinal = $derived(placeholder ?? L.placeholder);

  let triggerEl = $state<HTMLButtonElement | null>(null);
  let popupEl = $state<HTMLDivElement | null>(null);
  let popupStyle = $state("");
  let open = $state(false);

  let timeSystem = $state<TimeSystem>("iso");
  let didInitSystem = $state(false);

  let hour = $state("00");
  let minute = $state("00");
  let period = $state<Period>("AM");

  const hasValue = $derived(value != null);
  const pickerClass = $derived(
    cx("relative inline-block w-full", externalClass),
  );

  const isoHours = Array.from({ length: 24 }, (_, index) => {
    const item = index.toString().padStart(2, "0");
    return { value: item, label: item };
  });

  const englishHours = Array.from({ length: 12 }, (_, index) => {
    const item = (index + 1).toString().padStart(2, "0");
    return { value: item, label: item };
  });

  const periodOptions: Array<{ value: Period; label: Period }> = [
    { value: "AM", label: "AM" },
    { value: "PM", label: "PM" },
  ];

  const minuteIncrement = $derived(
    !step || step <= 0 ? 1 : Math.min(60, Math.max(1, Math.round(step / 60))),
  );

  const minuteOptions = $derived.by(() => {
    const options: Array<{ value: string; label: string }> = [];

    for (let index = 0; index < 60; index += minuteIncrement) {
      const item = index.toString().padStart(2, "0");
      options.push({ value: item, label: item });
    }

    if (!options.some((item) => item.value === minute)) {
      options.push({ value: minute, label: minute });
      options.sort((a, b) => Number(a.value) - Number(b.value));
    }

    return options;
  });

  const hourOptions = $derived(timeSystem === "iso" ? isoHours : englishHours);

  const displayValue = $derived.by(() => {
    if (!value) return "";

    const parsed = parseTimeValue(value);
    if (!parsed) return "";

    if (timeSystem === "english") {
      const mapped = toEnglishHour(parsed.hour);
      return `${mapped.hour}:${parsed.minute} ${mapped.period}`;
    }

    return `${parsed.hour}:${parsed.minute}`;
  });

  const triggerText = $derived(hasValue ? displayValue : placeholderFinal);

  function normalizeNumberPart(
    raw: string | number | undefined | null,
    fallback: number,
    min: number,
    max: number,
  ) {
    const parsed = Number.parseInt(String(raw ?? ""), 10);
    const safe = Number.isFinite(parsed) ? parsed : fallback;
    const clamped = Math.min(max, Math.max(min, safe));

    return clamped.toString().padStart(2, "0");
  }

  function normalizeHour24(raw: string | number | undefined | null) {
    return normalizeNumberPart(raw, 0, 0, 23);
  }

  function normalizeHour12(raw: string | number | undefined | null) {
    return normalizeNumberPart(raw, 12, 1, 12);
  }

  function normalizeMinute(raw: string | number | undefined | null) {
    return normalizeNumberPart(raw, 0, 0, 59);
  }

  function normalizePeriod(raw: string | undefined | null): Period {
    return raw === "PM" ? "PM" : "AM";
  }

  function toIsoHour(h: string, p: Period) {
    const numeric = Number.parseInt(h, 10);

    if (!Number.isFinite(numeric)) {
      return "00";
    }

    const base = numeric % 12;
    const withPeriod = p === "PM" ? base + 12 : base;

    return normalizeHour24(withPeriod);
  }

  function toEnglishHour(isoHour: string): { hour: string; period: Period } {
    const numeric = Number.parseInt(isoHour, 10);

    if (!Number.isFinite(numeric)) {
      return { hour: "12", period: "AM" };
    }

    const periodValue: Period = numeric >= 12 ? "PM" : "AM";
    const normalized = numeric % 12 || 12;

    return {
      hour: normalizeHour12(normalized),
      period: periodValue,
    };
  }

  function parseTimeValue(rawValue: string | null) {
    if (!rawValue) return null;

    const trimmed = rawValue.trim();
    const parsedPeriod: Period | null = trimmed.includes("PM")
      ? "PM"
      : trimmed.includes("AM")
        ? "AM"
        : null;

    const withoutPeriod = trimmed.replace(/\s?(AM|PM)$/u, "");
    const [rawHour, rawMinute] = withoutPeriod.split(":");

    if (parsedPeriod) {
      return {
        hour: toIsoHour(normalizeHour12(rawHour), parsedPeriod),
        minute: normalizeMinute(rawMinute),
      };
    }

    return {
      hour: normalizeHour24(rawHour),
      minute: normalizeMinute(rawMinute),
    };
  }

  function emitCurrent() {
    const isoHour =
      timeSystem === "english"
        ? toIsoHour(hour, period)
        : normalizeHour24(hour);

    const nextValue = `${isoHour}:${normalizeMinute(minute)}`;

    value = nextValue;
    onChange?.(nextValue);
  }

  function syncStateFromIso(isoHour: string, isoMinute: string) {
    if (timeSystem === "english") {
      const mapped = toEnglishHour(isoHour);
      hour = mapped.hour;
      period = mapped.period;
    } else {
      hour = normalizeHour24(isoHour);
      period = toEnglishHour(isoHour).period;
    }

    minute = normalizeMinute(isoMinute);
  }

  function updatePopupPosition() {
    if (!triggerEl || typeof window === "undefined") return;

    const rect = triggerEl.getBoundingClientRect();
    const margin = 8;
    const gap = 4;
    const preferredWidth = Math.max(rect.width, 168);
    const left = Math.min(
      Math.max(margin, rect.left),
      Math.max(margin, window.innerWidth - preferredWidth - margin),
    );
    const availableBelow = window.innerHeight - rect.bottom - gap - margin;
    const availableAbove = rect.top - gap - margin;
    const placeAbove = availableBelow < 180 && availableAbove > availableBelow;
    const maxHeight = Math.max(
      160,
      placeAbove ? availableAbove : availableBelow,
    );
    const top = placeAbove
      ? Math.max(margin, rect.top - gap - Math.min(272, maxHeight))
      : rect.bottom + gap;

    popupStyle = [
      `position: fixed`,
      `left: ${left}px`,
      `top: ${top}px`,
      `width: ${preferredWidth}px`,
      `max-height: ${maxHeight}px`,
    ].join("; ");
  }

  function focusSelectedOption() {
    window.requestAnimationFrame(() => {
      updatePopupPosition();

      const selected = popupEl?.querySelector<HTMLButtonElement>(
        "button[data-selected='true']",
      );

      selected?.focus();
    });
  }

  function openPicker() {
    if (disabled) return;

    open = true;
    focusSelectedOption();
  }

  function closePicker() {
    open = false;
    triggerEl?.focus();
  }

  function toggleOpen() {
    if (open) {
      closePicker();
      return;
    }

    openPicker();
  }

  function selectHour(nextHour: string) {
    hour =
      timeSystem === "english"
        ? normalizeHour12(nextHour)
        : normalizeHour24(nextHour);

    emitCurrent();
  }

  function selectMinute(nextMinute: string) {
    minute = normalizeMinute(nextMinute);
    emitCurrent();
  }

  function selectPeriod(nextPeriod: string) {
    period = normalizePeriod(nextPeriod);
    emitCurrent();
  }

  function toggleSystem() {
    if (disabled) return;

    if (timeSystem === "iso") {
      timeSystem = "english";

      const mapped = toEnglishHour(hour);
      hour = mapped.hour;
      period = mapped.period;
    } else {
      timeSystem = "iso";
      hour = toIsoHour(hour, period);
      period = "AM";
    }

    emitCurrent();
    focusSelectedOption();
  }

  function clearSelection() {
    if (!clearable || disabled) return;

    hour = timeSystem === "english" ? "12" : "00";
    minute = "00";
    period = "AM";
    value = null;
    onChange?.(null);
    open = false;
    triggerEl?.focus();
  }

  function snapMinute(rawMinute: number) {
    if (minuteIncrement >= 60) return 0;

    return Math.floor(rawMinute / minuteIncrement) * minuteIncrement;
  }

  function selectNow() {
    if (disabled) return;

    const now = new Date();
    const nextHour = normalizeHour24(now.getHours());
    const nextMinute = normalizeMinute(snapMinute(now.getMinutes()));

    syncStateFromIso(nextHour, nextMinute);

    value = `${nextHour}:${nextMinute}`;
    onChange?.(value);
  }

  function handleWindowClick(event: MouseEvent) {
    if (!open) return;

    const target = event.target;

    if (!(target instanceof Node)) return;
    if (triggerEl?.contains(target) || popupEl?.contains(target)) return;

    open = false;
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (!open) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closePicker();
    }
  }

  $effect(() => {
    if (didInitSystem) return;

    didInitSystem = true;
    timeSystem = initialSystem;
    hour = initialSystem === "english" ? "12" : "00";
  });

  $effect(() => {
    const parsed = parseTimeValue(value);

    if (!parsed) return;

    syncStateFromIso(parsed.hour, parsed.minute);
  });

  $effect(() => {
    if (!open) return;

    updatePopupPosition();

    const handleViewportChange = () => updatePopupPosition();

    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  });
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<div class={pickerClass} {...rest}>
  <div
    class="mb-[var(--spacing-sm)] text-[length:var(--text-md)] [font-weight:var(--font-weight-medium)] text-[var(--color-text-default)]"
  >
    {labelFinal}
  </div>

  <button
    bind:this={triggerEl}
    type="button"
    class={cx(
      "flex min-h-11 w-full min-w-0 items-center justify-between gap-[var(--spacing-sm)] rounded-[var(--radius-md)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-[var(--spacing-sm)] py-[var(--spacing-sm)] text-left text-[length:var(--text-sm)] text-[var(--color-text-default)] shadow-[0_1px_2px_var(--shadow-color)] transition-[border-color,box-shadow,background-color] duration-[var(--transition-fast)] ease-[var(--timing-default)]",
      "hover:bg-[var(--color-bg-hover)] focus:border-[var(--border-color-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--border-color-focus)]/30",
      disabled && "cursor-not-allowed opacity-[var(--opacity-disabled)]",
      !hasValue && "text-[var(--color-text-muted)]",
    )}
    aria-label={labelFinal}
    aria-haspopup="dialog"
    aria-expanded={open}
    {disabled}
    onclick={toggleOpen}
  >
    <span class="min-w-0 truncate">{triggerText}</span>

    <svg
      class="size-4 shrink-0 text-[var(--color-text-muted)]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>

  {#if open}
    <div
      bind:this={popupEl}
      role="dialog"
      aria-label={labelFinal}
      class="z-[var(--z-dropdown)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] shadow-[0_12px_32px_var(--shadow-color)]"
      style={popupStyle}
    >
      <div
        class={cx(
          "grid min-h-0 overflow-hidden",
          timeSystem === "english" ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        <section class="min-w-0 border-r border-[var(--border-color-default)]">
          <div
            class="sticky top-0 z-[var(--z-base)] border-b border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[length:var(--text-xs)] text-[var(--color-text-muted)]"
          >
            {L.hour}
          </div>

          <div class="max-h-56 overflow-y-auto py-[var(--spacing-xs)]">
            {#each hourOptions as option (option.value)}
              <button
                type="button"
                class={cx(
                  "block min-h-9 w-full px-[var(--spacing-sm)] text-left text-[length:var(--text-sm)] transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)]",
                  option.value === hour
                    ? "bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)]"
                    : "text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover)]",
                )}
                data-selected={option.value === hour}
                onclick={() => selectHour(option.value)}
              >
                {option.label}
              </button>
            {/each}
          </div>
        </section>

        <section
          class={cx(
            "min-w-0",
            timeSystem === "english" &&
              "border-r border-[var(--border-color-default)]",
          )}
        >
          <div
            class="sticky top-0 z-[var(--z-base)] border-b border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[length:var(--text-xs)] text-[var(--color-text-muted)]"
          >
            {L.minute}
          </div>

          <div class="max-h-56 overflow-y-auto py-[var(--spacing-xs)]">
            {#each minuteOptions as option (option.value)}
              <button
                type="button"
                class={cx(
                  "block min-h-9 w-full px-[var(--spacing-sm)] text-left text-[length:var(--text-sm)] transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)]",
                  option.value === minute
                    ? "bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)]"
                    : "text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover)]",
                )}
                data-selected={option.value === minute}
                onclick={() => selectMinute(option.value)}
              >
                {option.label}
              </button>
            {/each}
          </div>
        </section>

        {#if timeSystem === "english"}
          <section class="min-w-0">
            <div
              class="sticky top-0 z-[var(--z-base)] border-b border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[length:var(--text-xs)] text-[var(--color-text-muted)]"
            >
              {L.period}
            </div>

            <div class="py-[var(--spacing-xs)]">
              {#each periodOptions as option (option.value)}
                <button
                  type="button"
                  class={cx(
                    "block min-h-9 w-full px-[var(--spacing-sm)] text-left text-[length:var(--text-sm)] transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)]",
                    option.value === period
                      ? "bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)]"
                      : "text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover)]",
                  )}
                  data-selected={option.value === period}
                  onclick={() => selectPeriod(option.value)}
                >
                  {option.label}
                </button>
              {/each}
            </div>
          </section>
        {/if}
      </div>

      <div
        class="flex flex-wrap items-center justify-between gap-[var(--spacing-xs)] border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-sm)]"
      >
        <div class="flex flex-wrap items-center gap-[var(--spacing-xs)]">
          <Button variant="ghost" sz="xs" onClick={selectNow} {disabled}>
            {L.now}
          </Button>

          <Button variant="ghost" sz="xs" onClick={toggleSystem} {disabled}>
            {timeSystem === "iso" ? L.switchTo12h : L.switchTo24h}
          </Button>

          {#if clearable}
            <Button
              variant="danger"
              sz="xs"
              onClick={clearSelection}
              disabled={!hasValue || disabled}
            >
              {L.clear}
            </Button>
          {/if}
        </div>

        <Button variant="secondary" sz="xs" onClick={closePicker}>{L.ok}</Button>
      </div>
    </div>
  {/if}

  <div
    class="mt-[var(--spacing-md)] rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] text-center"
  >
    <p
      class="text-[length:var(--text-xs)] uppercase tracking-[var(--letter-spacing-wide)] text-[var(--color-text-muted)]"
    >
      {L.selectedTime}
    </p>

    <p
      class="mt-[var(--spacing-xs)] text-[length:var(--text-sm)] [font-weight:var(--font-weight-semibold)] text-[var(--color-text-default)]"
    >
      {#if hasValue}
        {displayValue}
      {:else}
        {placeholderFinal}
      {/if}
    </p>
  </div>
</div>
