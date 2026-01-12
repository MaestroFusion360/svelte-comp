<!-- src/lib/ContextMenu.svelte -->
<script lang="ts">
  /**
   * @component ContextMenu
   * @description Right-click context menu for editor actions.
   *
   * @prop onUndo {() => void} - Fired when Undo is selected
   * @prop onRedo {() => void} - Fired when Redo is selected
   * @prop onCopy {() => void} - Fired when Copy is selected
   * @prop onCut {() => void} - Fired when Cut is selected
   * @prop onPaste {() => void} - Fired when Paste is selected
   * @prop onDelete {() => void} - Fired when Delete is selected
   *
   * @note Call `openAt(event)` to show the menu at the pointer.
   * @note Uses lang-context for localization.
   */
  import {
    getComponentText,
    getLangContext,
    getLangKey,
  } from "./lang-context";

  interface Props {
    onUndo?: () => void;
    onRedo?: () => void;
    onCopy?: () => void;
    onCut?: () => void;
    onPaste?: () => void;
    onDelete?: () => void;
  }

  let {
    onUndo = () => {},
    onRedo = () => {},
    onCopy = () => {},
    onCut = () => {},
    onPaste = () => {},
    onDelete = () => {},
  }: Props = $props();
  const langCtx = getLangContext();
  const langKey = $derived(getLangKey(langCtx));
  const L = $derived(getComponentText("contextMenu", langKey));

  let visible = $state(false);
  let x = $state(0);
  let y = $state(0);

  function clampToViewport(): void {
    requestAnimationFrame(() => {
      const menu = document.getElementById("ctx-menu");
      if (!menu) return;
      const rect = menu.getBoundingClientRect();
      const pad = 8;
      let nextX = x;
      let nextY = y;
      if (rect.right > window.innerWidth - pad) {
        nextX = Math.max(
          pad,
          x - (rect.right - (window.innerWidth - pad))
        );
      }
      if (rect.bottom > window.innerHeight - pad) {
        nextY = Math.max(
          pad,
          y - (rect.bottom - (window.innerHeight - pad))
        );
      }
      if (nextX !== x) x = nextX;
      if (nextY !== y) y = nextY;
    });
  }

  export function openAt(event: MouseEvent): void {
    event?.preventDefault?.();
    const hasClient =
      Number.isFinite(event?.clientX) && Number.isFinite(event?.clientY);
    const hasPage =
      Number.isFinite(event?.pageX) && Number.isFinite(event?.pageY);
    if (hasClient && (event.clientX !== 0 || event.clientY !== 0)) {
      x = event.clientX;
      y = event.clientY;
    } else if (hasPage) {
      x = event.pageX - window.scrollX;
      y = event.pageY - window.scrollY;
    } else {
      x = 0;
      y = 0;
    }
    visible = true;
    clampToViewport();
  }

  export function close(): void {
    visible = false;
  }

  function handleDocClick(e: MouseEvent): void {
    if (!visible) return;
    const menu = document.getElementById("ctx-menu");
    if (!menu) return;
    if (!menu.contains(e.target as Node)) close();
  }

  function handleEsc(e: KeyboardEvent): void {
    if (e.key === "Escape" && visible) close();
  }

  $effect(() => {
    document.addEventListener("click", handleDocClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleDocClick);
      document.removeEventListener("keydown", handleEsc);
    };
  });

  const doUndo = () => (onUndo(), close());
  const doRedo = () => (onRedo(), close());
  const doCopy = () => (onCopy(), close());
  const doCut = () => (onCut(), close());
  const doPaste = () => (onPaste(), close());
  const doDelete = () => (onDelete(), close());
</script>

{#if visible}
  <div
    id="ctx-menu"
    class="fixed bg-[var(--color-bg-surface)] border border-[var(--border-color-default)] rounded-[var(--radius-md)] min-w-[160px] max-w-[260px] py-1 z-[9999] box-border text-[var(--text-sm)] shadow-md font-[var(--font-sans)] text-[var(--color-text-default)] m-0 scale-90 origin-top-left"
    style="top: {y}px; left: {x}px;"
    role="menu"
    tabindex="-1"
  >
    <button 
      class="w-full flex items-center justify-between bg-transparent border-0 text-[var(--color-text-default)] px-3 py-2 m-0 font-inherit cursor-pointer rounded-[var(--radius-sm)] whitespace-nowrap leading-[1.3] gap-3 outline-none shadow-none relative hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-default)] active:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg-hover)_88%)] active:text-[var(--color-text-default)] transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        doUndo();
      }}
      title={L.hotkeys.undo}
    >
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 opacity-80"
          aria-hidden="true"
        >
          <path d="M3 7v6h6" />
          <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
        </svg>
        <span>{L.contextMenu.undo.replace(/↩️\s*/, "")}</span>
      </div>
      <span class="text-[var(--color-text-muted)] text-[0.7rem]">{L.hotkeys.undo}</span>
    </button>

    <button 
      class="w-full flex items-center justify-between bg-transparent border-0 text-[var(--color-text-default)] px-3 py-2 m-0 font-inherit cursor-pointer rounded-[var(--radius-sm)] whitespace-nowrap leading-[1.3] gap-3 outline-none shadow-none relative hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-default)] active:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg-hover)_88%)] active:text-[var(--color-text-default)] transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        doRedo();
      }}
      title={L.hotkeys.redo}
    >
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 opacity-80"
          aria-hidden="true"
        >
          <path d="M21 7v6h-6" />
          <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
        </svg>
        <span>{L.contextMenu.redo.replace(/↪️\s*/, "")}</span>
      </div>
      <span class="text-[var(--color-text-muted)] text-[0.7rem]">{L.hotkeys.redo}</span>
    </button>

    <button 
      class="w-full flex items-center justify-between bg-transparent border-0 text-[var(--color-text-default)] px-3 py-2 m-0 font-inherit cursor-pointer rounded-[var(--radius-sm)] whitespace-nowrap leading-[1.3] gap-3 outline-none shadow-none relative hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-default)] active:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg-hover)_88%)] active:text-[var(--color-text-default)] transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        doCopy();
      }}
      title={L.hotkeys.copy}
    >
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 opacity-80"
          aria-hidden="true"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
        <span>{L.contextMenu.copy.replace(/📑\s*/, "")}</span>
      </div>
      <span class="text-[var(--color-text-muted)] text-[0.7rem]">{L.hotkeys.copy}</span>
    </button>

    <button 
      class="w-full flex items-center justify-between bg-transparent border-0 text-[var(--color-text-default)] px-3 py-2 m-0 font-inherit cursor-pointer rounded-[var(--radius-sm)] whitespace-nowrap leading-[1.3] gap-3 outline-none shadow-none relative hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-default)] active:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg-hover)_88%)] active:text-[var(--color-text-default)] transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        doCut();
      }}
      title={L.hotkeys.cut}
    >
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 opacity-80"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="3" />
          <path d="M8.12 8.12 12 12" />
          <path d="M20 4 8.12 15.88" />
          <circle cx="6" cy="18" r="3" />
          <path d="M14.8 14.8 20 20" />
        </svg>
        <span>{L.contextMenu.cut.replace(/✂️\s*/, "")}</span>
      </div>
      <span class="text-[var(--color-text-muted)] text-[0.7rem]">{L.hotkeys.cut}</span>
    </button>

    <button 
      class="w-full flex items-center justify-between bg-transparent border-0 text-[var(--color-text-default)] px-3 py-2 m-0 font-inherit cursor-pointer rounded-[var(--radius-sm)] whitespace-nowrap leading-[1.3] gap-3 outline-none shadow-none relative hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-default)] active:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg-hover)_88%)] active:text-[var(--color-text-default)] transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        doPaste();
      }}
      title={L.hotkeys.paste}
    >
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 opacity-80"
          aria-hidden="true"
        >
          <path d="M11 14h10" />
          <path d="M16 4h2a2 2 0 0 1 2 2v1.344" />
          <path d="m17 18 4-4-4-4" />
          <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
        </svg>
        <span>{L.contextMenu.paste.replace(/📋\s*/, "")}</span>
      </div>
      <span class="text-[var(--color-text-muted)] text-[0.7rem]">{L.hotkeys.paste}</span>
    </button>

    <button 
      class="w-full flex items-center justify-between bg-transparent border-0 text-[var(--color-text-default)] px-3 py-2 m-0 font-inherit cursor-pointer rounded-[var(--radius-sm)] whitespace-nowrap leading-[1.3] gap-3 outline-none shadow-none relative hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-default)] active:bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg-hover)_88%)] active:text-[var(--color-text-default)] transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        doDelete();
      }}
      title={L.hotkeys.delete}
    >
      <div class="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 opacity-80"
          aria-hidden="true"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
        <span>{L.contextMenu.delete}</span>
      </div>
      <span class="text-[var(--color-text-muted)] text-[0.7rem]">{L.hotkeys.delete}</span>
    </button>
  </div>
{/if}
