<!-- src/stories/TimePicker.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TimePicker from "$lib/TimePicker.svelte";

  type TimePickerArgs = ComponentProps<typeof TimePicker>;

  const { Story } = defineMeta({
    title: "Components/TimePicker",
    component: TimePicker,
    tags: ["autodocs"],
    args: {
      label: "Select time",
      placeholder: "No time selected",
      value: null,
      step: 60,
      clearable: true,
      disabled: false,
      initialSystem: "iso",
      class: "",
    },
    argTypes: {
      label: { control: "text" },
      placeholder: { control: "text" },
      step: { control: { type: "number", min: 1 } },
      clearable: { control: "boolean" },
      disabled: { control: "boolean" },
      value: { control: "text" },
      initialSystem: { control: "select", options: ["iso", "english"] },
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
  {#snippet template(args: TimePickerArgs)}
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="inline-flex items-center justify-center border-1 border-[var(--border-color-default)] rounded-[var(--radius-md)] px-6 py-4"
      >
        <TimePicker {...args} />
      </div>
    </div>
  {/snippet}
</Story>
