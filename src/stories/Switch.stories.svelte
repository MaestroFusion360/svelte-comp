<!-- src/lib/Switch.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Switch from "$lib/Switch.svelte";
  import { SIZES } from "$lib/types";

  const { Story } = defineMeta({
    title: "Components/Switch",
    component: Switch,
    tags: ["autodocs"],

    args: {
      sz: "md",
      checked: false,
      disabled: false,
      leftLabel: "Off",
      rightLabel: "On",
      topLabel: "",
      class: "",
    },

    argTypes: {
      sz: { control: "select", options: SIZES },
      checked: { control: "boolean" },
      disabled: { control: "boolean" },
      leftLabel: { control: "text" },
      rightLabel: { control: "text" },
      topLabel: { control: "text" },
      onChange: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Unchecked">
  {#snippet template(args)}
    <div class="story-center">
      <Switch {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Checked" args={{ checked: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <Switch {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <Switch {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Top Label" args={{ topLabel: "Notifications" }}>
  {#snippet template(args)}
    <div class="story-center">
      <Switch {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Side Labels" args={{ leftLabel: "Off", rightLabel: "On" }}>
  {#snippet template(args)}
    <div class="story-center">
      <Switch {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
