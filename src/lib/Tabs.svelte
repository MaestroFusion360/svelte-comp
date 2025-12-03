<!-- src/lib/Tabs.svelte -->
<script lang="ts">
  /**
   * @component Tabs
   * @description A tab navigation component for switching between sections of content.
   *
   * @prop tabs {TabItem[]} - Array of tab items with `id` and `label`
   * @default []
   *
   * @prop activeTab {string} - The currently active tab id
   * @default ""
   *
   * @prop sz {SizeKey} - Size preset for tabs and content
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop variant {TabsVariant} - Visual style of the tabs
   * @options default|pills|underline
   * @default default
   *
   * @prop fitted {boolean} - Stretches tabs to fill available width
   * @default false
   *
   * @prop onChange {(tabId: string) => void} - Callback when the active tab changes
   *
   * @prop class {string} - Custom class for the container
   * @default ""
   *
   * @prop children {Snippet} - Content panel rendered below the tabs
   *
   * @note Supports multiple visual styles (`default`, `pills`, `underline`).
   * @note Fully accessible with keyboard navigation (Arrow keys, Home, End, Enter).
   * @note Automatically adapts to container width.
   * @note The panel content (`children`) scales visually with the selected tab size.
   */
  import type { Snippet } from "svelte";
  import type { SizeKey, TabsVariant, TabItem } from "$lib/types";
  import { TEXT } from "$lib/types";
  import { cx } from "$utils";

  type Props = {
    tabs?: TabItem[];
    activeTab?: string;
    sz?: SizeKey;
    variant?: TabsVariant;
    fitted?: boolean;
    onChange?: (tabId: string) => void;
    class?: string;
    children?: Snippet;
  };

  let {
    tabs = [],
    activeTab = "",
    sz = "md",
    variant = "default",
    fitted = false,
    onChange,
    class: externalClass = "",
    children,
    ...rest
  }: Props = $props();

  $effect(() => {
    if (!activeTab && tabs.length) activeTab = tabs[0].id;
    if (activeTab && !tabs.find((t) => t.id === activeTab) && tabs.length) {
      activeTab = tabs[0].id;
    }
  });

  function handleTabClick(tab: TabItem) {
    if (tab.disabled) return;
    activeTab = tab.id;
    onChange?.(tab.id);
  }

  function handleKeyDown(e: KeyboardEvent) {
    const enabled = tabs.filter((t) => !t.disabled);
    if (!enabled.length) return;

    const idx = Math.max(
      0,
      enabled.findIndex((t) => t.id === activeTab)
    );
    let next = idx;

    if (e.key === "ArrowRight") next = (idx + 1) % enabled.length;
    else if (e.key === "ArrowLeft")
      next = (idx - 1 + enabled.length) % enabled.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = enabled.length - 1;
    else return;

    e.preventDefault();
    const nextId = enabled[next].id;
    activeTab = nextId;
    onChange?.(nextId);
    queueMicrotask(() => {
      const btn = document.getElementById(
        `tab-${nextId}`
      ) as HTMLButtonElement | null;
      btn?.focus();
    });
  }

  const sizes: Record<SizeKey, string> = {
    xs: "px-2 py-1",
    sm: "px-3 py-1.5",
    md: "px-4 py-2",
    lg: "px-5 py-2.5",
    xl: "px-6 py-3",
  };

  const base =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--border-color-focus)] focus-visible:outline-offset-2 disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed";

  const variants = $derived({
    default: {
      base: "border-b-2 border-transparent text-[var(--color-text-muted)]",
      active:
        "bg-[var(--color-bg-secondary)] !text-[var(--color-text-default)] border-[var(--border-color-strong)]",
      hover:
        "hover:text-[var(--color-text-default)] hover:bg-[var(--color-bg-muted)]",
    },
    underline: {
      base: "border-b-2 border-transparent text-[var(--color-text-muted)]",
      active:
        "border-[var(--border-color-focus)] !text-[var(--color-text-default)]",
      hover:
        "hover:text-[var(--color-text-default)] hover:border-[var(--border-color-strong)]",
    },
    pills: {
      base: "text-[var(--color-text-muted)] border border-transparent font-medium",
      active:
        "bg-[var(--color-bg-primary)] text-white border-[var(--color-bg-primary)]",
      hover:
        "hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-default)]",
    },
  });

  const rootClass = $derived(
    cx("w-full self-stretch flex flex-col", TEXT[sz], externalClass)
  );

  const tablistClass = $derived(
    cx(
      "flex w-full flex-nowrap overflow-x-auto whitespace-nowrap relative z-10 bg-[var(--color-bg-surface)]",
      TEXT[sz],
      variant === "pills" && "gap-1",
      variant === "underline" && "gap-6",
      fitted ? "justify-between" : "justify-start"
    )
  );
</script>

<div class={rootClass} {...rest}>
  <div
    role="tablist"
    tabindex="0"
    aria-orientation="horizontal"
    class={tablistClass}
    onkeydown={handleKeyDown}
  >
    {#each tabs as tab (tab.id)}
      <button
        id={`tab-${tab.id}`}
        type="button"
        role="tab"
        aria-selected={tab.id === activeTab ? "true" : "false"}
        aria-controls={`panel-${tab.id}`}
        aria-disabled={tab.disabled ? "true" : "false"}
        tabindex={tab.id === activeTab ? 0 : -1}
        disabled={tab.disabled}
        class={cx(
          "relative z-20",
          base,
          sizes[sz],
          TEXT[sz],
          fitted ? "basis-0 grow flex-1 min-w-0 text-center" : "shrink-0",
          variants[variant]?.base,
          tab.id === activeTab
            ? variants[variant]?.active
            : !tab.disabled
              ? variants[variant]?.hover
              : ""
        )}
        onclick={() => handleTabClick(tab)}
        onkeydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleTabClick(tab);
          }
        }}
      >
        <span>{tab.label}</span>
      </button>
    {/each}
  </div>

  <div
    id={`panel-${activeTab}`}
    role="tabpanel"
    tabindex="0"
    aria-labelledby={`tab-${activeTab}`}
    class="w-full min-w-0 relative z-0 border-t border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-md)] rounded-b-[var(--radius-sm)] shadow-[0_1px_2px_0_var(--shadow-color)]"
  >
    {@render children?.()}
  </div>
</div>
