<!-- src/stories/Calendar.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Calendar from "$lib/Calendar.svelte";

  const { Story } = defineMeta({
    title: "Components/Calendar",
    component: Calendar,
    tags: ["autodocs"],
    args: {
      value: "2025-05-20",
      min: "1926-01-01",
      max: undefined,
      locale: "en-US",
      weekStartsOn: 1,
      showOutsideDays: true,
      disabled: false,
      class: "",
    },
    argTypes: {
      value: { control: "text" },
      min: { control: "text" },
      max: { control: "text" },
      locale: { control: "text" },
      weekStartsOn: {
        control: "select",
        options: [0, 1, 2, 3, 4, 5, 6],
      },
      showOutsideDays: { control: "boolean" },
      disabled: { control: "boolean" },
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
        class="inline-flex items-center justify-center border-1 border-[var(--border-color-default)] rounded-[var(--radius-md)] p-3"
      >
        <div class="w-[240px] aspect-square">
          <Calendar {...args} class="w-full h-full" />
        </div>
      </div>
    </div>
  {/snippet}
</Story>
