<!-- src/stories/FilePicker.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import FilePicker from "$lib/FilePicker.svelte";

  type FilePickerArgs = ComponentProps<typeof FilePicker>;

  const { Story } = defineMeta({
    title: "Components/FilePicker",
    component: FilePicker,
    tags: ["autodocs"],
    args: {
      label: "Upload files",
      accept: "*/*",
      multiple: false,
      disabled: false,
      clearable: true,
      placeholder: "No files selected",
      value: null,
      class: "",
    },
    argTypes: {
      label: { control: "text" },
      accept: { control: "text" },
      multiple: { control: "boolean" },
      disabled: { control: "boolean" },
      onFilesSelected: { table: { disable: true } },
      clearable: { control: "boolean" },
      placeholder: { control: "text" },
      value: { table: { disable: true } },
      onError: { table: { disable: true } },
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
  {#snippet template(args: FilePickerArgs)}
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="inline-flex items-center justify-center border-1 border-[var(--border-color-default)] rounded-[var(--radius-md)] px-6 py-4"
      >
        <FilePicker {...args} />
      </div>
    </div>
  {/snippet}
</Story>
