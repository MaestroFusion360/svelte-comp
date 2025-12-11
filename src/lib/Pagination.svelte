<!-- src/lib/Pagination.svelte -->
<script lang="ts">
  /**
   * @component Pagination
   * @description Compact pagination component for table or list navigation.
   *
   * @prop currentPage {number} - The active page number (1-based)
   *
   * @prop totalPages {number} - Total number of pages available
   *
   * @prop onPageChange {(page: number) => void} - Fired when a page button is clicked
   *
   * @prop class {string} - Custom classes applied to the pagination wrapper
   * @default ""
   *
   * @note Displays “Page X of Y” and numbered page buttons.
   * @note Prev/next buttons are disabled at the edges.
   * @note Shows up to 3 numbered buttons centered around the current page.
   * @note Uses `aria-current=\"page\"` on the active page for accessibility.
   * @note Buttons are native `<button>` elements for keyboard support.
   */
  import { cx, times } from "../utils";
  import Button from "./Button.svelte";

  type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    class?: string;
  };

  let {
    currentPage,
    totalPages,
    onPageChange,
    class: externalClass = "",
  }: Props = $props();

  const wrapperClass = $derived(
    cx(
      "flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--color-text-muted)] py-0.5 overflow-visible",
      externalClass
    )
  );

  function nextPage() {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  }

  function prevPage() {
    if (currentPage > 1) onPageChange(currentPage - 1);
  }

  function getVisiblePages(): number[] {
    const maxVisible = 3;
    if (totalPages <= maxVisible) return times(totalPages, (i) => i + 1);

    let start = currentPage - 1;
    if (start < 1) start = 1;
    if (start + maxVisible - 1 > totalPages)
      start = totalPages - maxVisible + 1;

    return times(maxVisible, (i) => start + i);
  }
</script>

<div class={wrapperClass}>
  <span>Page {currentPage} of {totalPages}</span>

  <Button
    onClick={prevPage}
    disabled={currentPage === 1}
    sz="xs"
    variant="secondary"
  >
    &lt;
  </Button>

  {#each getVisiblePages() as page (page)}
    <Button
      onClick={() => onPageChange(page)}
      sz="xs"
      variant={currentPage === page ? "primary" : "secondary"}
      aria-current={currentPage === page ? "page" : undefined}
    >
      {page}
    </Button>
  {/each}

  <Button
    onClick={nextPage}
    disabled={currentPage === totalPages}
    sz="xs"
    variant="secondary"
  >
    &gt;
  </Button>
</div>
