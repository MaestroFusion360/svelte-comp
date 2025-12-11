<!-- src/lib/Menu.svelte -->
<script lang="ts">
  /**
   * @component Menu
   * @description A dropdown menu bar component with hover and click interactions.
   *
   * @prop menus {MenuItem[]} - Menu definitions with actions
   * @default []
   *
   * @prop onSelect {(menu: string, action: MenuAction) => void} - Fired when an action is chosen
   * @default () => {}
   *
   * @prop class {string} - Extra classes applied to the menu bar
   * @default ""
   *
   * @prop sz {SizeKey} - Size preset for spacing and text
   * @options xs|sm|md|lg|xl
   * @default sm
   *
   * @note Fully keyboard-safe for focus and mouse interactions.
   * @note Submenus open on hover when another menu is already open.
   * @note Actions that match size keys (`xs`, `sm`, `md`, `lg`, `xl`) are automatically highlighted to reflect the current UI size.
   * @note Uses the same CSS variable architecture as Tabs for consistent look across components.
   * @note No slots; fully controlled via the `menus` structure and `onSelect`.
   */
  import type { SizeKey, MenuItem, MenuAction } from "./types";
  import { TEXT } from "./types";
  import { cx } from "../utils";

  type Props = {
    menus?: MenuItem[];
    onSelect?: (menu: string, action: MenuAction) => void;
    class?: string;
    sz?: SizeKey;
  };

  let {
    menus = [],
    onSelect = () => {},
    class: externalClass = "",
    sz = "sm",
  }: Props = $props();

  let open = $state<string>("");
  let openSub = $state<string>("");
  let activeIndex = $state(-1);
  let activeSubIndex = $state(-1);

  // Refs for focus control
  let triggerRefs = $state<Record<string, HTMLButtonElement>>({});
  let menuRefs = $state<Record<string, HTMLDivElement>>({});
  let itemRefs = $state<Record<string, HTMLButtonElement>>({});
  let subItemRefs = $state<Record<string, HTMLButtonElement>>({});

  // Positioning
  let menuTop = $state(0);
  let menuLeft = $state(0);

  let subMenuRefs = $state<Record<string, HTMLDivElement>>({});
  let subMenuTop = $state(0);
  let subMenuLeft = $state(0);

  const sizes: Record<SizeKey, string> = {
    xs: "h-7 px-3",
    sm: "h-8 px-3",
    md: "h-9 px-4",
    lg: "h-10 px-4",
    xl: "h-11 px-5",
  };

  const navBase =
    "flex items-stretch pl-2 gap-1 border-b relative z-10 bg-[var(--color-bg-surface)] text-[var(--color-text-default)] border-[var(--border-color-default)]";

  const subMenuGutter = 8;

  const topButtonBase =
    "px-4 rounded-xs leading-none transition-colors outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]";

  const topButtonActive =
    "bg-[var(--color-bg-muted)] text-[var(--color-text-default)]";
  const topButtonIdle =
    "hover:bg-[var(--color-bg-muted)] text-[var(--color-text-default)]";

  const menuStyle = $derived(
    `position:fixed; top:${menuTop}px; left:${menuLeft}px; width:max-content; max-width:calc(100vw - 16px);`
  );
  const subMenuStyle = $derived(
    `position:fixed; top:${subMenuTop}px; left:${subMenuLeft}px; width:max-content; max-width:calc(100vw - 16px);`
  );

  const textCls = $derived(TEXT[sz]);
  const hotkeyColCls = "flex items-center shrink-0";

  const navCls = $derived(cx(navBase, sizes[sz], textCls, externalClass));
  const topBtnBaseCls = $derived(cx(topButtonBase, sizes[sz], textCls));

  function actionText(a: MenuAction) {
    if (typeof a === "string") return a;
    return a.label;
  }

  function actionId(a: MenuAction) {
    if (typeof a === "string") return a;
    return a.id ?? a.label ?? "";
  }

  function actionShortcut(a: MenuAction) {
    return typeof a === "string" ? "" : (a.shortcut ?? "");
  }

  function isSeparator(
    a: MenuAction
  ): a is Exclude<MenuAction, string> & { type: "separator" } {
    return typeof a !== "string" && "type" in a && a.type === "separator";
  }

  function hasSubmenu(
    a: MenuAction
  ): a is Exclude<MenuAction, string> & { submenu: MenuAction[] } {
    return (
      typeof a !== "string" && Array.isArray(a.submenu) && a.submenu.length > 0
    );
  }

  function actionKey(a: MenuAction, idx: number) {
    const id = actionId(a);
    return id || `__action-${idx}`;
  }

  function select(menu: string, action: MenuAction) {
    closeMenus();
    onSelect(menu, action);
  }

  function closeMenus() {
    open = "";
    openSub = "";
    activeIndex = -1;
    activeSubIndex = -1;
  }

  // Positioning dropdown
  function updateMenuPosition(
    triggerEl: HTMLElement,
    menuEl?: HTMLElement | null
  ) {
    const rect = triggerEl.getBoundingClientRect();
    const menuWidth = Math.min(
      menuEl?.getBoundingClientRect().width ?? rect.width,
      window.innerWidth - 16
    );
    const spaceRight = window.innerWidth - rect.left;
    const spaceLeft = rect.right;
    const alignRight = spaceRight < menuWidth && spaceLeft > spaceRight;
    const viewportLeft = window.scrollX;
    const viewportRight = window.scrollX + window.innerWidth;

    menuTop = rect.bottom + window.scrollY;
    const targetLeft = alignRight
      ? rect.right + window.scrollX - menuWidth
      : rect.left + window.scrollX;
    const maxLeft = viewportRight - menuWidth;
    menuLeft = Math.max(viewportLeft, Math.min(targetLeft, maxLeft));
  }

  function updateSubMenuPosition(
    parentItemEl: HTMLElement,
    subMenuEl?: HTMLElement | null
  ) {
    const rect = parentItemEl.getBoundingClientRect();
    const subRect = subMenuEl?.getBoundingClientRect();
    const subWidth = Math.min(
      subRect?.width ?? rect.width,
      window.innerWidth - 16
    );
    const spaceRight = window.innerWidth - rect.right;
    const spaceLeft = rect.left;
    const shouldFlipLeft = spaceRight < subWidth && spaceLeft > spaceRight;

    subMenuTop = rect.top + window.scrollY;
    const viewportLeft = window.scrollX;
    const viewportRight = window.scrollX + window.innerWidth;
    const targetLeft = shouldFlipLeft
      ? rect.left + window.scrollX - subWidth - subMenuGutter
      : rect.right + window.scrollX + subMenuGutter;
    const maxLeft = viewportRight - subWidth - subMenuGutter;
    subMenuLeft = Math.max(viewportLeft, Math.min(targetLeft, maxLeft));
  }

  function firstActionIndex(actions: MenuAction[]) {
    return actions.findIndex((a) => !isSeparator(a));
  }

  function nextActionIndex(actions: MenuAction[], current: number) {
    if (!actions.length) return -1;
    let idx = current;
    for (let i = 0; i < actions.length; i++) {
      idx = (idx + 1 + actions.length) % actions.length;
      if (!isSeparator(actions[idx])) return idx;
    }
    return current;
  }

  function prevActionIndex(actions: MenuAction[], current: number) {
    if (!actions.length) return -1;
    let idx = current;
    for (let i = 0; i < actions.length; i++) {
      idx = (idx - 1 + actions.length) % actions.length;
      if (!isSeparator(actions[idx])) return idx;
    }
    return current;
  }

  function focusMenuAction(menuItem: MenuItem, index: number) {
    if (index < 0 || index >= menuItem.actions.length) return;
    const action = menuItem.actions[index];
    if (!action || isSeparator(action)) return;
    if (!hasSubmenu(action) || openSub !== actionId(action)) {
      openSub = "";
      activeSubIndex = -1;
    }
    activeIndex = index;
    queueMicrotask(() => {
      if (open === menuItem.name) {
        itemRefs[actionId(action)]?.focus();
      }
    });
  }

  function focusSubAction(parentAction: MenuAction, index: number) {
    if (!hasSubmenu(parentAction)) return;
    if (index < 0 || index >= parentAction.submenu.length) return;
    const subAction = parentAction.submenu[index];
    if (!subAction || isSeparator(subAction)) return;
    activeSubIndex = index;
    queueMicrotask(() => {
      if (openSub === actionId(parentAction)) {
        subItemRefs[actionId(subAction)]?.focus();
      }
    });
  }

  function openMenu(menuItem: MenuItem, focusFirst = false) {
    open = menuItem.name;
    openSub = "";
    activeSubIndex = -1;
    const firstIndex = focusFirst ? firstActionIndex(menuItem.actions) : -1;
    activeIndex = firstIndex;
    const triggerEl = triggerRefs[menuItem.name];
    if (triggerEl) {
      updateMenuPosition(triggerEl, menuRefs[menuItem.name]);
    }
    if (focusFirst && firstIndex !== -1) {
      focusMenuAction(menuItem, firstIndex);
    }
  }

  function openSubMenu(parentAction: MenuAction, focusFirst = false) {
    if (!hasSubmenu(parentAction)) return;
    openSub = actionId(parentAction);
    const parentEl = itemRefs[actionId(parentAction)];
    if (parentEl) {
      updateSubMenuPosition(parentEl, subMenuRefs[actionId(parentAction)]);
    }
    const firstIndex = focusFirst ? firstActionIndex(parentAction.submenu) : -1;
    activeSubIndex = firstIndex;
    if (focusFirst && firstIndex !== -1) {
      focusSubAction(parentAction, firstIndex);
    }
  }

  // Keyboard navigation
  function handleTopLevelKeydown(
    e: KeyboardEvent,
    menuItem: MenuItem,
    index: number
  ) {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      openMenu(menuItem, true);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % menus.length;
      triggerRefs[menus[nextIndex].name]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + menus.length) % menus.length;
      triggerRefs[menus[prevIndex].name]?.focus();
    }
  }

  function handleMenuKeydown(e: KeyboardEvent, menuItem: MenuItem) {
    e.stopPropagation();
    if (!open) return;

    const actions = menuItem.actions;
    const firstIndex = firstActionIndex(actions);
    if (firstIndex === -1) return;
    const currentIndex = activeIndex === -1 ? firstIndex : activeIndex;

    if (e.key === "Escape") {
      e.preventDefault();
      closeMenus();
      triggerRefs[menuItem.name]?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = nextActionIndex(actions, currentIndex);
      focusMenuAction(menuItem, next);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = prevActionIndex(actions, currentIndex);
      focusMenuAction(menuItem, prev);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const action = actions[currentIndex];
      if (action && hasSubmenu(action)) {
        openSubMenu(action, true);
      }
    } else if (e.key === "ArrowLeft" && openSub) {
      e.preventDefault();
      openSub = "";
      activeSubIndex = -1;
      focusMenuAction(menuItem, currentIndex);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const action = actions[currentIndex];
      if (action) {
        if (hasSubmenu(action)) {
          openSubMenu(action, true);
        } else {
          select(menuItem.name, action);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const target = e.shiftKey
        ? prevActionIndex(actions, currentIndex)
        : nextActionIndex(actions, currentIndex);
      focusMenuAction(menuItem, target);
    }
  }

  function handleSubMenuKeydown(
    e: KeyboardEvent,
    parentAction: MenuAction,
    menuName: string
  ) {
    e.stopPropagation();
    if (!openSub || !hasSubmenu(parentAction)) return;

    const subActions = parentAction.submenu;
    const firstIndex = firstActionIndex(subActions);
    if (firstIndex === -1) return;
    const currentIndex = activeSubIndex === -1 ? firstIndex : activeSubIndex;

    if (e.key === "Escape") {
      e.preventDefault();
      openSub = "";
      activeSubIndex = -1;
      itemRefs[actionId(parentAction)]?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = nextActionIndex(subActions, currentIndex);
      focusSubAction(parentAction, next);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = prevActionIndex(subActions, currentIndex);
      focusSubAction(parentAction, prev);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      openSub = "";
      activeSubIndex = -1;
      itemRefs[actionId(parentAction)]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const action = subActions[currentIndex];
      if (action) {
        select(menuName, action);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const target = e.shiftKey
        ? prevActionIndex(subActions, currentIndex)
        : nextActionIndex(subActions, currentIndex);
      focusSubAction(parentAction, target);
    }
  }

  // Position update
  $effect(() => {
    if (open) {
      const triggerEl = triggerRefs[open];
      if (triggerEl) {
        updateMenuPosition(triggerEl, menuRefs[open]);

        const handleScrollResize = () => {
          updateMenuPosition(triggerEl, menuRefs[open]);
        };

        window.addEventListener("scroll", handleScrollResize, true);
        window.addEventListener("resize", handleScrollResize);

        return () => {
          window.removeEventListener("scroll", handleScrollResize, true);
          window.removeEventListener("resize", handleScrollResize);
        };
      }
    }
  });

  $effect(() => {
    if (openSub) {
      const itemEl = itemRefs[openSub];
      const subEl = subMenuRefs[openSub];
      if (itemEl) {
        updateSubMenuPosition(itemEl, subEl);

        const handleScrollResize = () => {
          updateSubMenuPosition(itemEl, subMenuRefs[openSub]);
        };

        window.addEventListener("scroll", handleScrollResize, true);
        window.addEventListener("resize", handleScrollResize);

        return () => {
          window.removeEventListener("scroll", handleScrollResize, true);
          window.removeEventListener("resize", handleScrollResize);
        };
      }
    }
  });
</script>

<nav class={navCls} aria-label="Menu bar">
  {#each menus as menuItem, idx (menuItem.name)}
    <div role="group" class="relative inline-block overflow-visible">
      <button
        bind:this={triggerRefs[menuItem.name]}
        type="button"
        class={cx(
          topBtnBaseCls,
          open === menuItem.name ? topButtonActive : topButtonIdle
        )}
        aria-haspopup="menu"
        aria-expanded={open === menuItem.name}
        onmousedown={(e) => e.preventDefault()}
        onclick={() => {
          if (open === menuItem.name) {
            closeMenus();
          } else {
            openMenu(menuItem, true);
          }
        }}
        onmouseenter={() => {
          if (open && open !== menuItem.name) {
            openMenu(menuItem, true);
          }
        }}
        onkeydown={(e) => handleTopLevelKeydown(e, menuItem, idx)}
      >
        {menuItem.name}
      </button>
    </div>
  {/each}
</nav>

<!-- Dropdown Menu -->
{#if open}
  {#each menus as menuItem (menuItem.name)}
    {#if open === menuItem.name}
      <!-- Overlay to close -->
      <div
        role="presentation"
        tabindex="-1"
        class="fixed inset-0 z-40"
        onmousedown={closeMenus}
      ></div>

      <!-- Main Menu -->
      <div
        bind:this={menuRefs[menuItem.name]}
        class={cx(
          "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)] ",
          "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
        )}
        style={menuStyle}
        role="menu"
        tabindex="-1"
        onkeydown={(e) => handleMenuKeydown(e, menuItem)}
      >
        {#each menuItem.actions as action, i (actionKey(action, i))}
          {#if isSeparator(action)}
            <div
              class="my-1 mx-1 border-t border-[var(--border-color-default)]"
              role="separator"
            ></div>
          {:else}
            <div class="relative">
              <button
                bind:this={itemRefs[actionId(action)]}
                type="button"
                role="menuitem"
                class={cx(
                  "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5 my-1 mr-1 min-w-full flex items-center",
                  "gap-3 hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                  "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                  textCls
                )}
                onmousedown={(e) => e.preventDefault()}
                onclick={() => {
                  if (!hasSubmenu(action)) {
                    select(menuItem.name, action);
                  } else {
                    focusMenuAction(menuItem, i);
                    openSubMenu(action, true);
                  }
                }}
                onmouseenter={() => {
                  activeIndex = i;
                  if (hasSubmenu(action) && openSub !== actionId(action)) {
                    openSubMenu(action);
                  } else if (!hasSubmenu(action)) {
                    openSub = "";
                    activeSubIndex = -1;
                  }
                }}
                onfocus={() => {
                  focusMenuAction(menuItem, i);
                }}
              >
                <span class="flex items-center gap-2 flex-1 min-w-0">
                  <span class="truncate">{actionText(action)}</span>
                </span>

                <span class="flex items-center shrink-0 ml-auto gap-1">
                  {#if actionShortcut(action)}
                    <span
                      class={cx(
                        "text-[var(--color-text-muted)] text-right",
                        textCls
                      )}
                    >
                      {actionShortcut(action)}
                    </span>
                  {/if}

                  {#if hasSubmenu(action)}
                    <span
                      class={cx(
                        "text-[var(--color-text-muted)] flex-shrink-0",
                        textCls
                      )}
                    >
                      &gt;
                    </span>
                  {/if}
                </span>
              </button>

              <!-- Sub Menu -->
              {#if hasSubmenu(action) && openSub === actionId(action)}
                <div
                  bind:this={subMenuRefs[actionId(action)]}
                  class={cx(
                    "fixed z-50 min-w-44 p-2 rounded-xs shadow-[0_2px_4px_var(--shadow-color)]",
                    "border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
                  )}
                  style={subMenuStyle}
                  role="menu"
                  tabindex="0"
                  onkeydown={(e) =>
                    handleSubMenuKeydown(e, action, menuItem.name)}
                >
                  {#each action.submenu as sub, j (actionKey(sub, j))}
                    {#if isSeparator(sub)}
                      <div
                        class="my-1 mx-1 border-t border-[var(--border-color-default)]"
                        role="separator"
                      ></div>
                    {:else}
                      <button
                        bind:this={subItemRefs[actionId(sub)]}
                        type="button"
                        role="menuitem"
                        class={cx(
                          "relative text-left rounded-xs transition-colors outline-none px-1.5 py-0.5",
                          "my-1 mr-1 w-full flex items-center justify-between gap-3",
                          "hover:bg-[var(--color-bg-muted)] focus-visible:bg-[var(--color-bg-muted)]",
                          "focus-visible:shadow-[inset_0_0_0_2px_var(--border-color-focus)]",
                          "decoration-[var(--color-text-default)]",
                          textCls
                        )}
                        onmousedown={(e) => e.preventDefault()}
                        onclick={() => select(menuItem.name, sub)}
                        onmouseenter={() => (activeSubIndex = j)}
                        onfocus={() => (activeSubIndex = j)}
                      >
                        <span class="flex items-center gap-2 flex-1 min-w-0">
                          <span class="truncate">{actionText(sub)}</span>
                        </span>

                        <span class={hotkeyColCls}>
                          {#if actionShortcut(sub)}
                            <span
                              class={cx(
                                "text-[var(--color-text-muted)]",
                                textCls
                              )}>{actionShortcut(sub)}</span
                            >
                          {/if}
                        </span>
                      </button>
                    {/if}
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    {/if}
  {/each}
{/if}
