<!-- src/demo/MenuDemo.svelte -->
<script lang="ts">
  import { getContext } from "svelte";
  import { Menu } from "$lib";
  import type { SizeKey, MenuItem, MenuAction } from "$lib/types";
  import { TEXTS } from "../lang";

  type Props = {
    sz?: SizeKey;
    class?: string;
  };

  let { sz = "sm", class: externalClass = "" }: Props = $props();
  let currentSz = $derived<SizeKey>(sz);
  const lang = getContext<{ value: keyof typeof TEXTS }>("lang");
  const L = $derived(TEXTS[lang.value].menuDemo);

  const menus: MenuItem[] = $derived([
    {
      name: L.menus.file,
      actions: [
        { id: "new", label: L.actions.new, shortcut: "Ctrl+N" },
        { id: "open", label: L.actions.open, shortcut: "Ctrl+O" },
        { id: "save", label: L.actions.save, shortcut: "Ctrl+S" },
        { type: "separator" },
        {
          id: "export",
          label: L.actions.export,
          shortcut: "Ctrl+E",
          submenu: [
            { id: "export-csv", label: L.actions.exportCsv },
            { id: "export-pdf", label: L.actions.exportPdf },
            { type: "separator" },
            { id: "export-zip", label: L.actions.exportZip },
          ],
        },
        { type: "separator" },
        { id: "close", label: L.actions.close, shortcut: "Ctrl+W" },
      ],
    },
    {
      name: L.menus.edit,
      actions: [
        { id: "undo", label: L.actions.undo, shortcut: "Ctrl+Z" },
        { id: "redo", label: L.actions.redo, shortcut: "Ctrl+Y" },
        { type: "separator" },
        { id: "cut", label: L.actions.cut, shortcut: "Ctrl+X" },
        { id: "copy", label: L.actions.copy, shortcut: "Ctrl+C" },
        { id: "paste", label: L.actions.paste, shortcut: "Ctrl+V" },
        { type: "separator" },
        {
          id: "find",
          label: L.actions.find,
          shortcut: "Ctrl+F",
          submenu: [
            { id: "find-next", label: L.actions.findNext, shortcut: "F3" },
            {
              id: "find-prev",
              label: L.actions.findPrev,
              shortcut: "Shift+F3",
            },
          ],
        },
      ],
    },
    {
      name: L.menus.view,
      actions: [
        { id: "xs", label: "XS" },
        { id: "sm", label: "SM" },
        { id: "md", label: "MD" },
        { id: "lg", label: "LG" },
        { id: "xl", label: "XL" },
        { type: "separator" },
        {
          id: "theme",
          label: L.actions.theme,
          submenu: [
            { id: "light", label: L.actions.light },
            { id: "dark", label: L.actions.dark },
          ],
        },
      ],
    },
  ]);

  let lastSelection = $derived("");

  function handleSelect(menu: string, action: MenuAction) {
    const label =
      typeof action === "string"
        ? action
        : action.label || action.id || L.fallbackLabel;
    const id = typeof action === "string" ? action : action.id;
    if (id && ["xs", "sm", "md", "lg", "xl"].includes(id)) {
      currentSz = id as SizeKey;
    }
    lastSelection = `${menu}: ${label}`;
    console.log("Selected:", menu, action);
  }

  // Keep in sync if demo prop is driven externally
  $effect(() => {
    currentSz = sz;
  });

  $effect(() => {
    lastSelection = L.prompt;
  });
</script>

<div class="flex flex-col w-full {externalClass}">
  <div
    class="w-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] overflow-x-auto overflow-y-visible"
  >
    <Menu sz={currentSz} {menus} onSelect={handleSelect} />
  </div>

  <div
    class="bg-[var(--color-bg-surface)] h-40 border border-[var(--border-color-default)] border-t-0 p-4 text-[var(--color-text-muted)]"
  >
    {lastSelection}
  </div>
</div>
