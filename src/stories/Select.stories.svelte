<!-- src/stories/Select.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Select from "$lib/Select.svelte";
  import { SIZES } from "$lib/types";

  const baseOptions = [
    { label: "Vanilla", value: "vanilla" },
    { label: "Chocolate", value: "choco" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Mint (sold out)", value: "mint", disabled: true },
  ];

  const longOptions = Array.from({ length: 14 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `${i + 1}`,
    disabled: i === 5,
  }));

  const { Story } = defineMeta({
    title: "Components/Select",
    component: Select,
    tags: ["autodocs"],
    args: {
      label: "Favorite flavor",
      placeholder: "Pick a flavor",
      help: "Arrow keys + Enter confirm, Escape closes.",
      options: baseOptions,
      variant: "default",
      sz: "md",
      value: "",
      invalid: false,
      describedBy: "",
      open: false,
      maxHeight: undefined,
      class: "",
    },
    argTypes: {
      label: { control: "text" },
      placeholder: { control: "text" },
      help: { control: "text" },
      variant: { control: "select", options: ["default", "filled", "neutral"] },
      sz: { control: "select", options: SIZES },
      value: { control: "text" },
      options: { control: { type: "object" } },
      open: { control: { type: "boolean" } },
      invalid: { control: "boolean" },
      describedBy: { control: "text" },
      maxHeight: { control: { type: "number", min: 80, step: 10 } },
      onChange: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default Combobox">
  {#snippet template(args)}
    <div class="story-center">
      <Select {...args} />
    </div>
  {/snippet}
</Story>

<Story
  name="Filled Variant"
  args={{
    variant: "filled",
    help: "Filled surface keeps padding with the same combobox behavior.",
  }}
>
  {#snippet template(args)}
    <div class="story-center">
      <Select {...args} />
    </div>
  {/snippet}
</Story>

<Story
  name="Neutral Large"
  args={{
    variant: "neutral",
    sz: "lg",
    placeholder: "Neutral chrome, large tap target",
    label: "Menu button styling",
  }}
>
  {#snippet template(args)}
    <div class="story-center">
      <Select {...args} />
    </div>
  {/snippet}
</Story>

<Story
  name="Scrollable Menu"
  args={{
    label: "Long option list",
    placeholder: "Scroll or use Home/End",
    options: longOptions,
    maxHeight: 180,
    value: "",
    help: "Max height constrains the list while keeping focus trapping.",
  }}
>
  {#snippet template(args)}
    <div class="story-center">
      <Select {...args} />
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
