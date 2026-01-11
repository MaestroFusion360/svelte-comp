<!-- src/stories/Dialog.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Dialog from "$lib/Dialog.svelte";

  const { Story } = defineMeta({
    title: "Components/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    args: {
      title: "Delete item",
      message: "This action cannot be undone.",
      modal: true,
      sz: "md",
      class: "",
    },
    argTypes: {
      open: { table: { disable: true } },
      onConfirm: { table: { disable: true } },
      onCancel: { table: { disable: true } },
      onClose: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { TEXTS } from "../lang";

  type LangKey = keyof typeof TEXTS;
  setContext("lang", { value: "en" as LangKey });

  let open = $state(false);

  function handleClose() {
    open = false;
  }

  function openDialog() {
    open = true;
  }
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="min-h-[240px] flex items-center justify-center">
      <button
        type="button"
        class="px-4 py-2 rounded-[var(--radius-md)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover)]"
        onclick={openDialog}
      >
        Open dialog
      </button>
      <Dialog
        {...args}
        {open}
        onConfirm={handleClose}
        onCancel={handleClose}
        onClose={handleClose}
      />
    </div>
  {/snippet}
</Story>
