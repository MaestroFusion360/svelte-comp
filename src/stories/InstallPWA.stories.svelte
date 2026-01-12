<!-- src/stories/InstallPWA.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import InstallPWA from "$lib/InstallPWA.svelte";

  type InstallPWAArgs = ComponentProps<typeof InstallPWA>;

  const { Story } = defineMeta({
    title: "Components/InstallPWA",
    component: InstallPWA,
    tags: ["autodocs"],
    args: { alwaysShow: true, inline: true },
    argTypes: {
      alwaysShow: { control: "boolean" },
      inline: { control: "boolean" },
      class: { control: "text" },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args: InstallPWAArgs)}
    <div class="min-h-[200px] flex items-center justify-center">
      <InstallPWA {...args} />
    </div>
  {/snippet}
</Story>
