<!-- src/stories/Splitter.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Splitter from "$lib/Splitter.svelte";

  const { Story } = defineMeta({
    title: "Components/Splitter",
    component: Splitter,
    tags: ["autodocs"],
    args: {
      direction: "horizontal",
      initialSize: 40,
      dividerSize: 6,
      minSize: 15,
      maxSize: 85,
    },
    argTypes: {
      direction: { control: "select", options: ["horizontal", "vertical"] },
      initialSize: { control: "number" },
      dividerSize: { control: "number" },
      minSize: { control: "number" },
      maxSize: { control: "number" },
      first: { table: { disable: true } },
      second: { table: { disable: true } },
    },
  });
</script>

<Story name="Horizontal">
  {#snippet template(args)}
    {#snippet first()}
      <div class="panel panel-a">First panel</div>
    {/snippet}
    {#snippet second()}
      <div class="panel panel-b">Second panel</div>
    {/snippet}
    <div class="story-splitter">
      <Splitter {...args} {first} {second} />
    </div>
  {/snippet}
</Story>

<Story name="Vertical" args={{ direction: "vertical" }}>
  {#snippet template(args)}
    {#snippet first()}
      <div class="panel panel-a">First panel</div>
    {/snippet}
    {#snippet second()}
      <div class="panel panel-b">Second panel</div>
    {/snippet}
    <div class="story-splitter">
      <Splitter {...args} {first} {second} />
    </div>
  {/snippet}
</Story>

<style>
  .story-splitter {
    width: min(900px, 90vw);
    height: min(70vh, 520px);
    margin: 0 auto;
    border: 1px solid var(--border-color-default);
    border-radius: var(--radius-xl);
    overflow: hidden;
    background: var(--color-bg-page);
  }

  .panel {
    height: 100%;
    display: grid;
    place-items: center;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .panel-a {
    background: var(--color-bg-surface);
  }

  .panel-b {
    background: var(--color-bg-secondary);
  }
</style>
