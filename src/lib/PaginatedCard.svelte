<!-- src/lib/PaginatedCard.svelte -->
<script lang="ts">
  /**
   * @component PaginatedCard
   * @description A card component with built-in pagination. Renders items page by page inside a `Card` and appends `Pagination` in the footer.
   *
   * @prop items {Snippet[]} - Array of renderable snippets for each item
   * @default []
   *
   * @prop itemsPerPage {number} - Items per page (must be >= 1)
   * @default 1
   *
   * @prop header {Snippet} - Optional `Card` header content
   *
   * @prop footer {Snippet} - Custom footer content shown above pagination
   *
   * @prop class {string} - Extra classes passed to the underlying `Card`
   * @default ""
   *
   * @note Maintains internal `currentPage` state (starts at `1`).
   * @note `totalPages` is clamped to at least `1`; empty `items` still yields one page.
   * @note Pagination is always visible; your `footer` snippet renders before it.
   * @note Uses `Pagination.svelte` internally with `{ currentPage, totalPages, onPageChange }`.
   * @note `itemsPerPage` must be `>= 1`; smaller values are not supported.
   */
  import Card from "./Card.svelte";
  import Pagination from "./Pagination.svelte";
  import type { Snippet } from "svelte";

  type Props = {
    items?: Snippet[];
    itemsPerPage?: number;
    header?: Snippet;
    footer?: Snippet;
    class?: string;
  };

  let {
    items = [],
    itemsPerPage = 1,
    header,
    footer,
    class: externalClass = "",
  }: Props = $props();

  let currentPage = $state(1);

  const totalPages = $derived(
    Math.max(1, Math.ceil(items.length / itemsPerPage))
  );

  const pageItems = $derived(
    items.slice(
      (currentPage - 1) * itemsPerPage,
      (currentPage - 1) * itemsPerPage + itemsPerPage
    )
  );

  function handlePageChange(p: number) {
    currentPage = p;
  }
</script>

{#snippet composedFooter()}
  {#if footer}{@render footer?.()}{/if}
  <Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
{/snippet}

<Card class={externalClass} {header} footer={composedFooter}>
  {#each pageItems as it, idx (idx)}
    {@render it?.()}
  {/each}
</Card>
