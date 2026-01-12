<!-- src/stories/ThemeToggle.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
  import { SIZES } from "$lib/types";

  const { Story } = defineMeta({
    title: "Components/ThemeToggle",
    component: ThemeToggle,
    tags: ["autodocs"],
    args: {
      sz: "md",
      disabled: false,
      class: "relative",
      type: "button",
    },
    argTypes: {
      sz: { control: "select", options: SIZES },
      disabled: { control: "boolean" },
      type: { control: "select", options: ["button", "submit", "reset"] },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="story-center">
      <ThemeToggle {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <ThemeToggle {...args} />
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
</style>
