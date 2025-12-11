<!-- src/lib/Select.svelte -->
<script lang="ts">
  /**
   * @component Select
   * @description Accessible custom combobox with label, portal listbox, hidden form input, and configurable sizing.
   *
   * @prop label {string} - Field label rendered above the trigger
   *
   * @prop help {string} - Optional helper copy rendered below the field
   *
   * @prop placeholder {string} - Text shown when nothing is selected
   *
   * @prop options {SelectOption[]} - Available options (`{ label, value, disabled? }`)
   * @default []
   *
   * @prop sz {SizeKey} - Sizing preset
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {FieldVariant} - Surface style preset
   * @options default|filled|neutral
   * @default default
   *
   * @prop value {string} - Selected value (bindable)
   * @default ""
   *
   * @prop onChange {(val: string) => void} - Fired when a new option is chosen
   *
   * @prop class {string} - Extra classes for the root `<label>`
   * @default ""
   *
   * @prop id {string} - Custom id for the field
   *
   * @prop invalid {boolean} - Shows invalid state and sets `aria-invalid`
   * @default false
   *
   * @prop describedBy {string} - Links to helper or error text ids
   *
   * @prop open {boolean} - Controlled dropdown visibility (bindable)
   * @default false
   *
   * @prop maxHeight {number} - Max dropdown height before scrolling
   *
   * @note Fully keyboard navigable (`Arrow`, `Home/End`, `Enter/Space`, looped `Tab`) with roving tabindex buttons inside a listbox.
   * @note Dropdown is portalled with `position: fixed` math to stay aligned with the trigger (including scroll/resize listeners).
   * @note Hidden `<input type=\"hidden\">` mirrors `bind:value` so forms and contextual `BaseField` integrations keep working.
   * @note Disabled options remain focus-skippable and never call `onChange`.
   * @note Size + variant tokens control both trigger padding and icon scale through the same Tailwind-driven design tokens.
   */
  import { getContext } from "svelte";
  import type { HTMLSelectAttributes } from "svelte/elements";
  import type { SizeKey, FieldVariant, SelectOption } from "$lib/types";
  import { TEXT } from "$lib/types";
  import { uid, cx } from "$utils";

  type Props = HTMLSelectAttributes & {
    label?: string;
    help?: string;
    placeholder?: string;
    options?: SelectOption[];
    sz?: SizeKey;
    variant?: FieldVariant;
    value?: string;
    onChange?: (val: string) => void;
    class?: string;
    id?: string;
    invalid?: boolean;
    describedBy?: string;
    open?: boolean;
    maxHeight?: number;
  };

  let {
    label,
    help,
    placeholder,
    options = [],
    sz = "md",
    variant = "default",
    value = $bindable(""),
    onChange,
    class: externalClass = "",
    id: externalId,
    invalid = false,
    describedBy,
    open = $bindable(false),
    maxHeight,
    ...rest
  }: Props = $props();

  type BaseFieldCtx = { readonly id: string; readonly name: string };
  const bf = getContext<BaseFieldCtx>("BaseField");

  const fieldId = $derived(externalId ?? bf?.id ?? uid("sel-"));
  const fieldName = $derived(bf?.name ?? fieldId);
  const listboxId = $derived(`${fieldId}-listbox`);

  let listEl = $state<HTMLUListElement | null>(null);
  let triggerEl = $state<HTMLButtonElement | null>(null);
  let highlighted = $state(-1);
  let itemBtns = $state<Array<HTMLButtonElement>>([]);
  let menuPosition = $state<"top" | "bottom">("bottom");

  const base =
    "relative w-full outline-none appearance-none cursor-pointer transition-colors duration-[var(--transition-fast)] ease-[var(--timing-default)] box-border rounded-[var(--radius-md)] border focus:border-[var(--border-color-focus)] focus:ring-2 focus:ring-[var(--border-color-focus)] [color:var(--color-text-default)] disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed";

  const sizes: Record<SizeKey, string> = {
    xs: "px-2 pr-6 h-6",
    sm: "px-3 pr-8 h-7",
    md: "px-4 pr-10 h-8",
    lg: "px-5 pr-12 h-9",
    xl: "px-6 pr-14 h-10",
  };

  const heights: Record<SizeKey, number> = {
    xs: 120,
    sm: 144,
    md: 168,
    lg: 192,
    xl: 216,
  };

  const variants: Record<FieldVariant, string> = {
    default:
      "border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
    filled: "border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
    neutral:
      "border-transparent bg-transparent hover:border-[var(--border-color-default)] focus:border-[var(--border-color-focus)]",
  };

  const iconsSizes: Record<SizeKey, string> = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-[18px] h-[18px]",
    xl: "w-5 h-5",
  };

  const rootClass = $derived(cx("flex flex-col gap-1", externalClass));

  const triggerClass = $derived(
    cx(base, sizes[sz], TEXT[sz], variants[variant], "text-left")
  );

  const menuMaxHeight = $derived(maxHeight ?? heights[sz]);

  const listClass = $derived(
    cx(
      "z-50 border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] shadow-lg overflow-auto focus:outline-none"
    )
  );

  const itemBaseClass = $derived(
    cx(
      "w-full text-left px-4 py-2 transition-colors duration-[var(--transition-fast)] cursor-pointer",
      TEXT[sz]
    )
  );
  const itemDisabledClass =
    "opacity-[var(--opacity-disabled)] cursor-not-allowed";

  let menuTop = $state(0);
  let menuLeft = $state(0);
  let menuWidth = $state(0);

  const listStyle = $derived(
    `position:fixed;top:${menuTop}px;left:${menuLeft}px;min-width:${menuWidth}px;max-height:${menuMaxHeight}px;`
  );

  const selectedOption = $derived(options.find((o) => o.value === value));

  $effect(() => {
    const currentTriggerEl = triggerEl;
    const currentListEl = listEl;

    if (open && currentTriggerEl && currentListEl) {
      const updatePosition = () => {
        const triggerRect = currentTriggerEl.getBoundingClientRect();
        const spaceBelow = window.innerHeight - triggerRect.bottom;
        const spaceAbove = triggerRect.top;
        const menuHeight = Math.min(currentListEl.scrollHeight, menuMaxHeight);

        const pos =
          spaceBelow < menuHeight && spaceAbove > spaceBelow ? "top" : "bottom";

        menuPosition = pos;
        currentListEl.dataset.position = pos;

        if (pos === "top") {
          menuTop = Math.max(0, triggerRect.top - menuHeight);
        } else {
          menuTop = triggerRect.bottom;
        }

        menuLeft = triggerRect.left;
        menuWidth = triggerRect.width;
      };

      queueMicrotask(updatePosition);

      const handleClickOutside = (event: MouseEvent) => {
        if (
          currentTriggerEl &&
          currentListEl &&
          !currentTriggerEl.contains(event.target as Node) &&
          !currentListEl.contains(event.target as Node)
        ) {
          closeMenu();
        }
      };

      const handleScroll = () => updatePosition();
      const handleResize = () => updatePosition();

      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", handleResize);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("scroll", handleScroll, true);
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  $effect(() => {
    const currentListEl = listEl;
    if (!open || !currentListEl) return;

    queueMicrotask(() => {
      if (currentListEl) {
        itemBtns = Array.from(
          currentListEl.querySelectorAll<HTMLButtonElement>("button")
        );
      } else {
        itemBtns = [];
      }
    });
  });

  function focusEnabled(index: number | null) {
    if (!itemBtns.length || !options.length) return;
    const len = options.length;
    let start = typeof index === "number" && index >= 0 ? index : 0;
    for (let step = 0; step < len; step++) {
      const i = (start + step) % len;
      if (!options[i]?.disabled && itemBtns[i]) {
        itemBtns[i].focus();
        highlighted = i;
        return;
      }
    }
  }

  function focusFirstEnabled() {
    focusEnabled(0);
  }

  function focusLastEnabled() {
    if (!options.length || !itemBtns.length) return;
    for (let i = options.length - 1; i >= 0; i--) {
      if (!options[i]?.disabled && itemBtns[i]) {
        itemBtns[i].focus();
        highlighted = i;
        return;
      }
    }
  }

  function openMenu() {
    if (rest.disabled) return;
    open = true;
  }

  function closeMenu() {
    open = false;
    highlighted = -1;
  }

  function toggleMenu() {
    if (open) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function move(delta: number) {
    if (!open || !options.length) return;
    const len = options.length;
    let i = highlighted;
    for (let step = 0; step < len; step++) {
      i = (i + delta + len) % len;
      if (!options[i].disabled) break;
    }
    highlighted = i;
    if (itemBtns[i]) itemBtns[i].focus();
  }

  function choose(i: number) {
    const opt = options[i];
    if (!opt || opt.disabled) return;
    value = opt.value;
    onChange?.(opt.value);
    closeMenu();
  }

  function onTriggerKeydown(e: KeyboardEvent) {
    if (rest.disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleMenu();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) openMenu();
      move(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) openMenu();
      move(-1);
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      closeMenu();
    }
  }

  function onListKeydown(e: KeyboardEvent) {
    if (!open) return;

    if (e.key === "Tab") {
      const active = document.activeElement as HTMLElement | null;
      const currentIndex = itemBtns.findIndex((btn) => btn === active);
      let lastEnabledIndex = -1;
      for (let i = options.length - 1; i >= 0; i--) {
        if (!options[i]?.disabled) {
          lastEnabledIndex = i;
          break;
        }
      }
      if (e.shiftKey) {
        if (currentIndex <= 0) {
          e.preventDefault();
          focusLastEnabled();
        }
      } else {
        if (currentIndex === lastEnabledIndex) {
          e.preventDefault();
          focusFirstEnabled();
        }
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusFirstEnabled();
    } else if (e.key === "End") {
      e.preventDefault();
      focusLastEnabled();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (highlighted >= 0) choose(highlighted);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
    }
  }

  function onOverlayKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
    }
  }
</script>

<div class={rootClass}>
  {#if label}
    <label
      for={`${fieldId}-hidden`}
      class={cx(TEXT[sz], "font-medium [color:var(--color-text-muted)]")}
    >
      {label}
    </label>
  {/if}

  <div class="w-full">
    <button
      bind:this={triggerEl}
      id={fieldId}
      type="button"
      role="combobox"
      class={triggerClass}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={listboxId}
      aria-describedby={describedBy}
      aria-invalid={invalid}
      aria-required={rest.required}
      disabled={rest.disabled}
      onclick={() => {
        toggleMenu();
      }}
      onkeydown={onTriggerKeydown}
    >
      <span class="min-w-0 grow truncate">
        {#if selectedOption}
          <span class="inline-flex items-center gap-2 min-w-0">
            {#if selectedOption.swatch}
              <span
                aria-hidden="true"
                class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"
                style={`background:${selectedOption.swatch}`}
              ></span>
            {/if}
            <span class="truncate">{selectedOption.label}</span>
          </span>
        {:else}
          <span class="[color:var(--color-text-muted)]">{placeholder}</span>
        {/if}
      </span>
      <span
        class={cx("pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 [color:var(--color-text-default)]")}
      >
        <svg
          class={iconsSizes[sz]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>
  </div>

  {#if open}
    <div
      role="presentation"
      tabindex="-1"
      class="fixed inset-0 z-40"
      onclick={closeMenu}
      onkeydown={onOverlayKeydown}
    ></div>

    <ul
      bind:this={listEl}
      id={listboxId}
      role="listbox"
      class={listClass}
      style={listStyle}
      data-position={menuPosition}
      aria-labelledby={label ? `${fieldId}-hidden-label` : undefined}
      aria-activedescendant={highlighted >= 0
        ? `${fieldId}-opt-${highlighted}`
        : undefined}
      tabindex="-1"
      onkeydown={onListKeydown}
    >
      {#each options as opt, i (opt.value)}
        <li
          id={`${fieldId}-opt-${i}`}
          role="option"
          aria-selected={!opt.disabled && opt.value === value}
          aria-disabled={opt.disabled}
          class={cx(itemBaseClass, opt.disabled ? itemDisabledClass : "")}
        >
          <button
            type="button"
            tabindex="0"
            class={cx("w-full text-left focus:outline-[3px] focus:outline-offset-3 focus:outline-[var(--border-color-focus)] rounded flex items-center gap-2")}
            disabled={opt.disabled}
            onclick={() => choose(i)}
            onfocus={() => (highlighted = i)}
            onmouseenter={() => (highlighted = i)}
          >
            {#if opt.swatch}
              <span
                aria-hidden="true"
                class="block w-3 h-3 rounded-[var(--radius-xs)] border border-[var(--border-color-default)] shadow-sm shrink-0"
                style={`background:${opt.swatch}`}
              ></span>
            {/if}
            <span class="truncate">{opt.label}</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}

  <input
    id={`${fieldId}-hidden`}
    type="hidden"
    name={fieldName}
    value={value ?? ""}
  />

  {#if help}
    <div
      id={describedBy}
      class={cx("[color:var(--color-text-muted)]", TEXT.sm)}
    >
      {help}
    </div>
  {/if}
</div>
