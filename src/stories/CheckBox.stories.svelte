<!-- src/lib/CheckBox.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import CheckBox from "$lib/CheckBox.svelte";
  import { SIZES } from "$lib/types";

  const { Story } = defineMeta({
    title: "Components/CheckBox",
    component: CheckBox,
    tags: ["autodocs"],

    args: {
      label: "Check me",
      sz: "md",
      variant: "default",
      checked: false,
      indeterminate: false,
      disabled: false,
      invalid: false,
      describedBy: "",
      class: "",
    },

    argTypes: {
      label: { control: "text" },
      sz: { control: "select", options: SIZES },
      variant: { control: "select", options: ["default", "neutral"] },
      checked: { control: "boolean" },
      indeterminate: { control: "boolean" },
      disabled: { control: "boolean" },
      invalid: { control: "boolean" },
      describedBy: { control: "text" },
      onChange: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default" args={{ checked: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <CheckBox {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Neutral" args={{ checked: true, variant: "neutral" }}>
  {#snippet template(args)}
    <div class="story-center">
      <CheckBox {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Indeterminate" args={{ indeterminate: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <CheckBox {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <CheckBox {...args} />
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
