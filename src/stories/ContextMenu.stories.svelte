<!-- src/stories/ContextMenu.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ContextMenuDemo from "./ContextMenuDemo.svelte";

  const { Story } = defineMeta({
    title: "Components/ContextMenu",
    component: ContextMenuDemo,
    tags: ["autodocs"],
  });
</script>

<Story name="Default">
  {#snippet template()}
    <ContextMenuDemo />
  {/snippet}
</Story>
