<!-- src/stories/PaginatedCard.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import PaginatedCard from "$lib/PaginatedCard.svelte";

  const { Story } = defineMeta({
    title: "Components/PaginatedCard",
    component: PaginatedCard,
    tags: ["autodocs"],
    args: {
      itemsPerPage: 2,
      class: "",
    },
    argTypes: {
      items: { table: { disable: true } },
      header: { table: { disable: true } },
      footer: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  import { createRawSnippet, type Snippet } from "svelte";

  const items: Snippet[] = Array.from({ length: 6 }, (_, idx) => {
    const n = idx + 1;
    return createRawSnippet(() => ({ render: () => `<span>Item ${n}</span>` }));
  });
</script>

{#snippet header()}
  <div class="text-sm font-semibold text-[var(--color-text-default)]">
    Paginated items
  </div>
{/snippet}

{#snippet footer()}
  <div class="text-xs text-[var(--color-text-muted)]">
    Showing a subset of items.
  </div>
{/snippet}

<Story name="Default">
  {#snippet template(args)}
    <div class="min-h-screen flex items-center justify-center">
      <div class="w-full max-w-2xl">
        <PaginatedCard {...args} {items} {header} {footer} />
      </div>
    </div>
  {/snippet}
</Story>
