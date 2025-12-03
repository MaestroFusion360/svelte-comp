<!-- src/stories/ColorPicker.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ColorPicker from "$lib/ColorPicker.svelte";

  type ColorPickerArgs = ComponentProps<typeof ColorPicker>;

  const { Story } = defineMeta({
    title: "Components/ColorPicker",
    component: ColorPicker,
    tags: ["autodocs"],
    args: {
      value: null,
      label: "Choose color",
      placeholder: "No color selected",
      clearable: true,
      disabled: false,
      class: "",
    },
    argTypes: {
      label: { control: "text" },
      placeholder: { control: "text" },
      clearable: { control: "boolean" },
      disabled: { control: "boolean" },
      value: { control: "text" },
      onChange: { table: { disable: true } },
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
  {#snippet template(args: ColorPickerArgs)}
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="inline-flex items-center justify-center border-1 border-[var(--border-color-default)] rounded-[var(--radius-md)] px-6 py-4"
      >
        <ColorPicker {...args} />
      </div>
    </div>
  {/snippet}
</Story>
