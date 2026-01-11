<!-- src/stories/DatePicker.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import DatePicker from "$lib/DatePicker.svelte";

  const { Story } = defineMeta({
    title: "Components/DatePicker",
    component: DatePicker,
    tags: ["autodocs"],
    args: {
      label: "Select date",
      placeholder: "Pick a date",
      value: null,
      min: "1926-01-01",
      max: undefined,
      clearable: true,
      disabled: false,
      locale: "",
      formatOptions: undefined,
      class: "",
    },
    argTypes: {
      label: { control: "text" },
      placeholder: { control: "text" },
      clearable: { control: "boolean" },
      disabled: { control: "boolean" },
      min: { control: "text" },
      max: { control: "text" },
      value: { control: "text" },
      locale: { control: "text" },
      formatOptions: { control: "object" },
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
  {#snippet template(args)}
    <div class="min-h-screen flex items-center justify-center bg-[var(--color-bg-page)] text-[var(--color-text-default)]">
      <div
        class="inline-flex items-center justify-center border-1 border-[var(--border-color-default)] rounded-[var(--radius-md)] px-6 py-4"
      >
        <DatePicker {...args} />
      </div>
    </div>
  {/snippet}
</Story>
