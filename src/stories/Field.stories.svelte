<!-- src/stories/Field.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from "svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Field from "$lib/Field.svelte";
  import { SIZES } from "$lib/types";

  type FieldArgs = ComponentProps<typeof Field>;

  const { Story } = defineMeta({
    title: "Components/Field",
    component: Field,
    tags: ["autodocs"],

    args: {
      label: "Label",
      as: "input",
      variant: "default",
      sz: "md",
      value: "",
      clearable: true,
      parseNumber: false,
      rows: 3,
      type: "text",
      invalid: false,
      describedBy: "",
      class: "",
    },

    argTypes: {
      label: { control: "text" },
      as: { control: "select", options: ["input", "textarea"] },
      variant: { control: "select", options: ["default", "filled", "neutral"] },
      sz: { control: "select", options: SIZES },
      clearable: { control: "boolean" },
      parseNumber: { control: "boolean" },
      rows: { control: "number" },
      type: { control: "text" },
      value: { control: "text" },
      invalid: { control: "boolean" },
      describedBy: { control: "text" },
      onChange: { table: { disable: true } },
      leading: { table: { disable: true } },
      trailing: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Password" args={{ type: "password" }}>
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Number" args={{ type: "number", parseNumber: true }}>
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Textarea" args={{ as: "textarea", rows: 4 }}>
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Filled" args={{ variant: "filled" }}>
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Neutral" args={{ variant: "neutral" }}>
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Value" args={{ value: "Hello" }}>
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Icons">
  {#snippet template(args: FieldArgs)}
    <div class="story-center">
      <Field
        {...args}
        leading=">"
        trailing="Ctrl+K"
        label="Search"
        value="Example"
      />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    display: grid;
    place-items: center;
    height: 100dvh;
    margin: 0 auto;
    max-width: 300px;
  }
</style>
