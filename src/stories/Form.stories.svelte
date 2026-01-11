<!-- src/stories/Form.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Form from "$lib/Form.svelte";

  const { Story } = defineMeta({
    title: "Components/Form",
    component: Form,
    tags: ["autodocs"],
    args: {
      rowGap: "md",
      validateOn: "blur",
      labelAlign: "left",
      labelWeight: "medium",
      labelSize: "md",
      compact: false,
    },
    argTypes: {
      schema: { table: { disable: true } },
      value: { table: { disable: true } },
      onChange: { table: { disable: true } },
      onSubmit: { table: { disable: true } },
      formId: { table: { disable: true } },
      expose: { table: { disable: true } },
    },
  });
</script>

<script lang="ts">
  import { setContext } from "svelte";
  import { TEXTS } from "../lang";
  import type { FieldSchema, FormApi, FormValues } from "$lib/types";
  import Button from "$lib/Button.svelte";

  type LangKey = keyof typeof TEXTS;
  setContext("lang", { value: "en" as LangKey });

  const schema: FieldSchema[] = [
    { name: "email", type: "email", label: "Email", required: true },
    {
      name: "plan",
      type: "select",
      label: "Plan",
      required: true,
      options: [
        { label: "Free", value: "free" },
        { label: "Pro", value: "pro" },
        { label: "Enterprise", value: "enterprise" },
      ],
    },
    { name: "notes", type: "textarea", label: "Notes", rows: 3 },
    { name: "tos", type: "checkbox", label: "Accept terms", required: true },
  ];

  const formId = "storybook-form";
  let api: FormApi | null = $state(null);
  let lastSubmit = $state<FormValues | null>(null);

  function handleSubmit(data: FormValues) {
    lastSubmit = data;
  }

  function handleReset() {
    api?.reset();
    lastSubmit = null;
  }

  function grabExpose(a: FormApi) {
    api = a;
  }
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="min-h-screen flex items-center justify-center">
      <div
        class="w-full max-w-2xl border border-[var(--border-color-default)] rounded-[var(--radius-md)] p-6 bg-[var(--color-bg-surface)]"
      >
        <Form
          {...args}
          {schema}
          {formId}
          expose={grabExpose}
          onSubmit={handleSubmit}
        />
        <div class="mt-4 flex flex-wrap gap-2 justify-end">
          <Button variant="secondary" type="button" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" type="submit" form={formId}>
            Submit
          </Button>
        </div>
        {#if lastSubmit}
          <pre class="mt-4 text-[var(--color-text-muted)] text-xs whitespace-pre-wrap">{JSON.stringify(
              lastSubmit,
              null,
              2
            )}</pre>
        {/if}
      </div>
    </div>
  {/snippet}
</Story>
