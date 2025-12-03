<!-- src/stories/Accordion.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import type { ComponentProps } from "svelte";
  import Accordion from "$lib/Accordion.svelte";
  import { SIZES } from "$lib/types";

  type AccordionArgs = ComponentProps<typeof Accordion>;

  const sampleItems: AccordionArgs["items"] = [
    {
      id: "intro",
      title: "What is this library?",
      content:
        "A curated set of accessible, theme-ready Svelte components built with the Runes API.",
    },
    {
      id: "tokens",
      title: "Does it support tokens?",
      content:
        "Yes. All primitives consume CSS variables so theme overrides are straightforward.",
    },
    {
      id: "usage",
      title: "How do I get started?",
      content:
        "Install the package, import the components you need, and wrap them inside your layout.",
    },
  ];

  const { Story } = defineMeta({
    title: "Components/Accordion",
    component: Accordion,
    tags: ["autodocs"],
    args: {
      items: sampleItems,
      multiple: false,
      defaultOpen: [],
      sz: "md",
      class: "",
    },
    argTypes: {
      multiple: { control: "boolean" },
      defaultOpen: { control: "object" },
      items: { control: "object" },
      sz: { control: "select", options: SIZES },
      onToggle: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default" args={{ defaultOpen: [0] }}>
  {#snippet template(args: AccordionArgs)}
    <div class="min-w-[300px] max-w-lg mx-auto min-h-screen flex items-center">
      <Accordion {...args} />
    </div>
  {/snippet}
</Story>
