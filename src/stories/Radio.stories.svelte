<!-- src/stories/Radio.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Radio from "$lib/Radio.svelte";
  import { SIZES } from "$lib/types";

  const { Story } = defineMeta({
    title: "Components/Radio",
    component: Radio,
    tags: ["autodocs"],
    args: {
      sz: "md",
      variant: "default",
      disabled: false,
      class: "",
    },
    argTypes: {
      sz: { control: "select", options: SIZES },
      variant: { control: "select", options: ["default", "neutral"] },
      disabled: { control: "boolean" },
      class: { table: { disable: true } },
      onChange: { table: { disable: true } },
      group: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  let selected = "option-a";
</script>

<Story name="Group">
  {#snippet template(args)}
    <div class="story-center">
      <div class="stack">
        <Radio {...args} value="option-a" bind:group={selected} label="Option A" />
        <Radio {...args} value="option-b" bind:group={selected} label="Option B" />
        <Radio {...args} value="option-c" bind:group={selected} label="Option C" />
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <div class="stack">
        <Radio {...args} value="option-a" bind:group={selected} label="Option A" />
        <Radio {...args} value="option-b" bind:group={selected} label="Option B" />
      </div>
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

  .stack {
    display: grid;
    gap: 12px;
  }
</style>
