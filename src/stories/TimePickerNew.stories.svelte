<!-- src/stories/TimePickerNew.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import TimePickerNew from "$lib/TimePickerNew.svelte";

  type TimePickerNewArgs = ComponentProps<typeof TimePickerNew>;

  const { Story } = defineMeta({
    title: "Components/TimePickerNew",
    component: TimePickerNew,
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
      value: { control: "text" },
      step: { control: { type: "number", min: 1 } },
      clearable: { control: "boolean" },
      disabled: { control: "boolean" },
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

  function logChange(value: string | null) {
    console.info("TimePickerNew value", value);
  }
</script>

<Story name="Default">
  {#snippet template(args: TimePickerNewArgs)}
    <div
      class="min-h-screen bg-[var(--color-bg-page)] p-[var(--spacing-lg)] text-[var(--color-text-default)]"
    >
      <div class="mx-auto flex w-full max-w-sm flex-col gap-[var(--spacing-lg)]">
        <TimePickerNew {...args} onChange={logChange} />
      </div>
    </div>
  {/snippet}
</Story>

<Story name="With ISO value" args={{ value: "13:45" }}>
  {#snippet template(args: TimePickerNewArgs)}
    <div
      class="min-h-screen bg-[var(--color-bg-page)] p-[var(--spacing-lg)] text-[var(--color-text-default)]"
    >
      <div class="mx-auto flex w-full max-w-sm flex-col gap-[var(--spacing-lg)]">
        <TimePickerNew {...args} onChange={logChange} />
      </div>
    </div>
  {/snippet}
</Story>

<Story
  name="12-hour mode"
  args={{ value: "21:30", initialSystem: "english", label: "Meeting time" }}
>
  {#snippet template(args: TimePickerNewArgs)}
    <div
      class="min-h-screen bg-[var(--color-bg-page)] p-[var(--spacing-lg)] text-[var(--color-text-default)]"
    >
      <div class="mx-auto flex w-full max-w-sm flex-col gap-[var(--spacing-lg)]">
        <TimePickerNew {...args} onChange={logChange} />
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Quarter-hour step" args={{ value: "08:15", step: 900 }}>
  {#snippet template(args: TimePickerNewArgs)}
    <div
      class="min-h-screen bg-[var(--color-bg-page)] p-[var(--spacing-lg)] text-[var(--color-text-default)]"
    >
      <div class="mx-auto flex w-full max-w-sm flex-col gap-[var(--spacing-lg)]">
        <TimePickerNew {...args} onChange={logChange} />
      </div>
    </div>
  {/snippet}
</Story>

<Story name="Disabled" args={{ value: "10:00", disabled: true }}>
  {#snippet template(args: TimePickerNewArgs)}
    <div
      class="min-h-screen bg-[var(--color-bg-page)] p-[var(--spacing-lg)] text-[var(--color-text-default)]"
    >
      <div class="mx-auto flex w-full max-w-sm flex-col gap-[var(--spacing-lg)]">
        <TimePickerNew {...args} onChange={logChange} />
      </div>
    </div>
  {/snippet}
</Story>
