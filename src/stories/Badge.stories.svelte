<!-- src/stories/Badge.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Badge from "$lib/Badge.svelte";

  const VARIANTS = ["success", "danger", "warning", "info"] as const;

  const { Story } = defineMeta({
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    args: {
      message: "Active",
      variant: "info",
      showIcon: false,
      class: "",
    },
    argTypes: {
      message: { control: "text" },
      variant: { control: "select", options: VARIANTS },
      showIcon: { control: "boolean" },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="story-center">
      <Badge {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Icon" args={{ showIcon: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <Badge {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Success" args={{ variant: "success", showIcon: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <Badge {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    width: 100%;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
</style>
