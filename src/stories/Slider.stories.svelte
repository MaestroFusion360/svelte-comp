<!-- src/stories/Slider.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Slider from "$lib/Slider.svelte";
  import { SIZES } from "$lib/types";

  const { Story } = defineMeta({
    title: "Components/Slider",
    component: Slider,
    tags: ["autodocs"],
    args: {
      value: 32,
      min: 0,
      max: 100,
      step: 1,
      sz: "md",
      variant: "default",
      disabled: false,
      showValue: true,
      class: "",
    },
    argTypes: {
      value: { control: { type: "range", min: 0, max: 100, step: 1 } },
      min: { control: { type: "number" } },
      max: { control: { type: "number" } },
      step: { control: { type: "number", min: 1, step: 1 } },
      sz: { control: "select", options: SIZES },
      variant: { control: "select", options: ["default", "neutral"] },
      disabled: { control: "boolean" },
      showValue: { control: "boolean" },
      onInput: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="story-center">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Neutral Variant" args={{ variant: "neutral", value: 60 }}>
  {#snippet template(args)}
    <div class="story-center">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true, value: 40 }}>
  {#snippet template(args)}
    <div class="story-center">
      <Slider {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    display: grid;
    place-items: center;
    height: 100dvh;
    margin: 0 auto;
    max-width: 300px;
  }
</style>
