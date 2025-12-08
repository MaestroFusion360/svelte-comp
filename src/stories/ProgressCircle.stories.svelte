<!-- src/stories/ProgressCircle.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ProgressCircle from "$lib/ProgressCircle.svelte";
  import { SIZES } from "$lib/types";

  const { Story } = defineMeta({
    title: "Components/ProgressCircle",
    component: ProgressCircle,
    tags: ["autodocs"],
    args: {
      value: 60,
      indeterminate: false,
      sz: "md",
      variant: "default",
      label: "",
      disabled: false,
      class: "",
    },
    argTypes: {
      value: { control: { type: "range", min: 0, max: 100, step: 5 } },
      indeterminate: { control: "boolean" },
      sz: { control: "select", options: SIZES },
      variant: { control: "select", options: ["default", "neutral"] },
      label: { control: "text" },
      disabled: { control: "boolean" },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="story-center">
      <ProgressCircle {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Neutral" args={{ variant: "neutral" }}>
  {#snippet template(args)}
    <div class="story-center">
      <ProgressCircle {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Indeterminate" args={{ indeterminate: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <ProgressCircle {...args} />
    </div>
  {/snippet}
</Story>

<Story name="WithLabel" args={{ label: "Uploading..." }}>
  {#snippet template(args)}
    <div class="story-center">
      <ProgressCircle {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    display: grid;
    place-items: center;
    height: 100dvh;
    margin: 0 auto;
    max-width: 320px;
  }
</style>
