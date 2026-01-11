<!-- src/stories/Hamburger.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Hamburger from "$lib/Hamburger.svelte";

  const { Story } = defineMeta({
    title: "Components/Hamburger",
    component: Hamburger,
    tags: ["autodocs"],
    args: {
      closeOnSelect: true,
      width: 280,
      class: "",
    },
    argTypes: {
      menuItems: { table: { disable: true } },
      activeItem: { table: { disable: true } },
      header: { table: { disable: true } },
      footer: { table: { disable: true } },
      onSelect: { table: { disable: true } },
      onOpenChange: { table: { disable: true } },
      pressed: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  import type { Item } from "$lib/types";

  const menuItems: Item[] = [
    { id: "dashboard", label: "Dashboard" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
    { id: "settings", label: "Settings" },
  ];

  let activeItem = $state("dashboard");
  let lastSelected = $state<string | null>(null);

  function handleSelect(id: string) {
    activeItem = id;
    lastSelected = id;
  }
</script>

{#snippet header()}
  <div class="text-sm text-center font-semibold text-[var(--color-text-default)]">
    Navigation
  </div>
{/snippet}

{#snippet footer()}
  <div class="text-xs text-[var(--color-text-muted)]">
    {lastSelected ? `Last: ${lastSelected}` : "Pick a destination"}
  </div>
{/snippet}

<Story name="Default">
  {#snippet template(args)}
    <div class="min-h-screen bg-[var(--color-bg-page)]">
      <Hamburger
        {...args}
        {menuItems}
        {activeItem}
        {header}
        {footer}
        onSelect={handleSelect}
      />
    </div>
  {/snippet}
</Story>
