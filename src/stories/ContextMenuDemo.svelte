<!-- src/stories/ContextMenuDemo.svelte -->
<script lang="ts">
  import { setContext } from "svelte";
  import ContextMenu from "$lib/ContextMenu.svelte";

  setContext("lang", { value: "en" });

  let menu:
    | {
        openAt: (event: MouseEvent) => void;
        close: () => void;
      }
    | null = null;

  function openMenu(event: MouseEvent) {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement | null;
    if (target) {
      const rect = target.getBoundingClientRect();
      menu?.openAt(
        new MouseEvent("contextmenu", {
          clientX: rect.left + rect.width / 2,
          clientY: rect.bottom + 8,
        })
      );
      return;
    }
    menu?.openAt(event);
  }
</script>

<div class="min-h-[240px] flex items-center justify-center">
  <button
    type="button"
    class="px-4 py-2 rounded-md border border-[var(--border-color-default)]"
    onclick={openMenu}
  >
    Open menu
  </button>
  <ContextMenu bind:this={menu} />
</div>
