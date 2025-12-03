<!-- src/stories/Menu.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Menu from "$lib/Menu.svelte";
  import type { MenuItem } from "$lib/types";
  import { SIZES } from "$lib/types";

  const defaultMenus: MenuItem[] = [
    { name: "File", actions: ["New", { id: "open", label: "Open…" }, "Save", "Exit"] },
    { name: "Edit", actions: ["Undo", "Redo", "Cut", "Copy", "Paste"] },
    { name: "View", actions: ["xs", "sm", "md", "lg", "xl"] },
    { name: "Help", actions: ["Documentation", { id: "about", label: "About" }] },
  ];

  const { Story } = defineMeta({
    title: "Components/Menu",
    component: Menu,
    tags: ["autodocs"],
    args: {
      menus: defaultMenus,
      sz: "sm",
      class: "",
    },
    argTypes: {
      sz: { control: "select", options: SIZES },
      menus: { control: { type: "object" } },
      onSelect: { table: { disable: true } },
      class: { control: "text" },
    },
  });
</script>

<Story name="Default Menu Bar">
  {#snippet template(args)}
    <div class="story-area">
      <Menu {...args} onSelect={(menu, action) => console.log(menu, action)} />
    </div>
  {/snippet}
</Story>

<Story
  name="Large Sizing Menu"
  args={{
    sz: "md",
    menus: [
      { name: "View", actions: ["xs", "sm", "md", "lg", "xl"] },
      { name: "Theme", actions: ["Light", "Dark"] },
    ],
  }}
>
  {#snippet template(args)}
    <div class="story-area">
      <Menu {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-area {
    padding: 16px;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
