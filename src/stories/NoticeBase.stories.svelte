<!-- src/stories/NoticeBase.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import NoticeBase from "$lib/NoticeBase.svelte";

  const VARIANTS = ["success", "danger", "warning", "info"] as const;

  const { Story } = defineMeta({
    title: "Components/NoticeBase",
    component: NoticeBase,
    tags: ["autodocs"],
    args: {
      title: "Notice",
      message: "System updated successfully",
      variant: "info",
      showIcon: true,
      inline: false,
      size: "sm",
      class: "",
    },
    argTypes: {
      title: { control: "text" },
      message: { control: "text" },
      variant: { control: "select", options: VARIANTS },
      showIcon: { control: "boolean" },
      inline: { control: "boolean" },
      size: { control: "select", options: ["sm", "md"] },
      class: { table: { disable: true } },
      end: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="story-center">
      <NoticeBase {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Inline" args={{ inline: true }}>
  {#snippet template(args)}
    <div class="story-center">
      <NoticeBase {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Large" args={{ size: "md" }}>
  {#snippet template(args)}
    <div class="story-center">
      <NoticeBase {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With End Action">
  {#snippet template(args)}
    {#snippet end()}
      <button class="text-xs underline opacity-80 hover:opacity-100">
        Undo
      </button>
    {/snippet}
    <div class="story-center">
      <NoticeBase {...args} end={end} />
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
