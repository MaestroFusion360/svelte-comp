<!-- src/stories/Topbar.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Topbar from "$lib/Topbar.svelte";

  type TopbarArgs = ComponentProps<typeof Topbar>;

  const { Story } = defineMeta({
    title: "Components/Topbar",
    component: Topbar,
    tags: ["autodocs"],
    args: {
      title: "Svelte 5 UI Components",
      menuItems: [
        { id: "open", label: "Open" },
        { id: "save", label: "Save" },
      ],
      showHamburger: true,
    },
    argTypes: {
      onMenuSelect: { table: { disable: true } },
      hamburgerHeader: { table: { disable: true } },
      hamburgerFooter: { table: { disable: true } },
      children: { table: { disable: true } },
      right: { table: { disable: true } },
    },
  });
</script>

{#snippet header()}
  <div class="text-sm">Menu Header</div>
{/snippet}

{#snippet footer()}
  <div class="text-sm">Menu Footer</div>
{/snippet}

{#snippet right()}
  <div class="text-xs text-[var(--color-text-muted)]">Right slot</div>
{/snippet}

<Story name="Default">
  {#snippet template(args: TopbarArgs)}
    <div class="min-h-[160px]">
      <Topbar {...args} hamburgerHeader={header} hamburgerFooter={footer} {right} />
      <div class="pt-20 px-4 text-sm text-[var(--color-text-muted)]">
        Content goes here.
      </div>
    </div>
  {/snippet}
</Story>
