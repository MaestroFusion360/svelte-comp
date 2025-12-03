<!-- src/lib/Button.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "$lib/Button.svelte";
  import { variants as BUTTON_VARIANTS, SIZES } from "$lib/types";

  type ButtonArgs = ComponentProps<typeof Button>;

  const { Story } = defineMeta({
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
      variant: "primary",
      disabled: false,
      sz: "md",
      type: "button",
      loaded: false,
      link: "",
      class: "",
    },
    argTypes: {
      variant: { control: "select", options: BUTTON_VARIANTS },
      sz: { control: "select", options: SIZES },
      disabled: { control: "boolean" },
      loaded: { control: "boolean" },
      type: { control: "select", options: ["button", "submit", "reset"] },
      link: { control: "text" },
      onClick: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Primary" args={{ variant: "primary" }}>
  {#snippet template(args: ButtonArgs)}
    <div class="story-center">
      <Button {...args}>Button</Button>
    </div>
  {/snippet}
</Story>

<Story name="Secondary" args={{ variant: "secondary" }}>
  {#snippet template(args: ButtonArgs)}
    <div class="story-center">
      <Button {...args}>Button</Button>
    </div>
  {/snippet}
</Story>

<Story name="Link" args={{ variant: "link", link: "https://svelte.dev" }}>
  {#snippet template(args: ButtonArgs)}
    <div class="story-center">
      <Button {...args}>Button</Button>
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }}>
  {#snippet template(args: ButtonArgs)}
    <div class="story-center">
      <Button {...args}>Button</Button>
    </div>
  {/snippet}
</Story>

<Story name="Loading" args={{ loaded: true }}>
  {#snippet template(args: ButtonArgs)}
    <div class="story-center">
      <Button {...args}>Button</Button>
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
