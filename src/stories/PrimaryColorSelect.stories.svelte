<!-- src/stories/PrimaryColorSelect.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import PrimaryColorSelect from "$lib/PrimaryColorSelect.svelte";

  const { Story } = defineMeta({
    title: "Components/PrimaryColorSelect",
    component: PrimaryColorSelect,
    tags: ["autodocs"],
    args: {
      label: "Primary color",
      sz: "sm",
      class: "",
    },
    argTypes: {
      class: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { TEXTS } from "../lang";

  type LangKey = keyof typeof TEXTS;
  setContext("lang", { value: "en" as LangKey });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="min-h-[240px] flex items-center justify-center">
      <PrimaryColorSelect {...args} />
    </div>
  {/snippet}
</Story>