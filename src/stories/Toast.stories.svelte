<!-- src/stories/Toast.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Toast from "$lib/Toast.svelte";

  const VARIANTS = ["success", "danger", "warning", "info"] as const;

  const { Story } = defineMeta({
    title: "Components/Toast",
    component: Toast,
    tags: ["autodocs"],
    args: {
      title: "Saved",
      message: "Settings updated",
      variant: "success",
      showIcon: true,
      closable: true,
      timeout: 0,
      class: "",
    },
    argTypes: {
      title: { control: "text" },
      message: { control: "text" },
      variant: { control: "select", options: VARIANTS },
      showIcon: { control: "boolean" },
      closable: { control: "boolean" },
      timeout: { control: "number" },
      onClose: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="story-shell">
      <Toast {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Info" args={{ title: "Info", message: "New update available", variant: "info" }}>
  {#snippet template(args)}
    <div class="story-shell">
      <Toast {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Non-closable" args={{ closable: false }}>
  {#snippet template(args)}
    <div class="story-shell">
      <Toast {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-shell {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
</style>
