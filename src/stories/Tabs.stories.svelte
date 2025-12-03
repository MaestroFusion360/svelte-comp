<!-- src/stories/Tabs.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Tabs from "$lib/Tabs.svelte";
  import { SIZES, type TabItem } from "$lib/types";

  const baseTabs: TabItem[] = [
    { id: "overview", label: "Overview" },
    { id: "details", label: "Details" },
    { id: "reviews", label: "Reviews" }
  ];

  const { Story } = defineMeta({
    title: "Components/Tabs",
    component: Tabs,
    tags: ["autodocs"],
    args: {
      tabs: baseTabs,
      activeTab: "overview",
      sz: "md",
      variant: "default",
      fitted: false,
      class: ""
    },
    argTypes: {
      sz: { control: "select", options: SIZES },
      variant: { control: "select", options: ["default", "pills", "underline"] },
      fitted: { control: "boolean" },
      tabs: { control: "object" },
      onChange: { table: { disable: true } },
      class: { table: { disable: true } }
    }
  });
</script>

<script lang="ts">
  let current = "overview";
  const update = (id: string) => current = id;

  const content: Record<string, string> = {
    overview: "Overview content",
    details: "Details content",
    reviews: "Reviews content"
  };
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center justify-center">
      <Tabs {...args} onChange={update}>
        <div class="w-full aspect-square flex items-center justify-center bg-[var(--color-bg-surface)] rounded-[var(--radius-md)]">
          {content[current]}
        </div>
      </Tabs>
    </div>
  {/snippet}
</Story>
