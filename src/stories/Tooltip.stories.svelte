<!-- src/stories/Tooltip.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Tooltip from "$lib/Tooltip.svelte";

  const { Story } = defineMeta({
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    args: {
      text: "Helpful hint",
      position: "top",
      delay: 0,
      open: false,
      class: "",
    },
    argTypes: {
      text: { control: "text" },
      position: { control: "select", options: ["top", "bottom", "left", "right"] },
      delay: { control: "number" },
      open: { control: "boolean" },
      class: { table: { disable: true } },
      children: { table: { disable: true } },
    },
  });
</script>

<Story name="Hover">
  {#snippet template(args)}
    <div class="story-center">
      <Tooltip {...args}>
        <button class="btn">Hover me</button>
      </Tooltip>
    </div>
  {/snippet}
</Story>

<Story name="Forced" args={{ open: true, position: "right" }}>
  {#snippet template(args)}
    <div class="story-center">
      <Tooltip {...args}>
        <button class="btn">Always visible</button>
      </Tooltip>
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }

  .btn {
    padding: 0.5rem 0.9rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color-default);
    background: var(--color-bg-surface);
    color: var(--color-text-default);
  }
</style>
