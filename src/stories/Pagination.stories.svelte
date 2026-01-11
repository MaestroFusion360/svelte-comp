<!-- src/stories/Pagination.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Pagination from "$lib/Pagination.svelte";

  const { Story } = defineMeta({
    title: "Components/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    args: {
      totalPages: 8,
      class: "",
    },
    argTypes: {
      currentPage: { table: { disable: true } },
      onPageChange: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  let currentPage = $state(1);

  function handlePageChange(page: number) {
    currentPage = page;
  }
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="min-h-[240px] flex items-center justify-center">
      <Pagination
        {...args}
        {currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  {/snippet}
</Story>