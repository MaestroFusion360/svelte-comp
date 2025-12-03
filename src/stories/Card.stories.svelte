<!-- src/stories/Card.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Card from "$lib/Card.svelte";
  import { SIZES } from "$lib/types";
  import { formatDate } from "$utils";
  import { TEXTS } from "../lang";

  const t = TEXTS.en;
  const today = formatDate(new Date());

  const { Story } = defineMeta({
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    args: { sz: "md", class: "", flushHeader: false, flushFooter: false },
    argTypes: {
      sz: { control: "select", options: SIZES },
      class: { control: "text" },
      flushHeader: { control: "boolean" },
      flushFooter: { control: "boolean" },
      header: { table: { disable: true } },
      footer: { table: { disable: true } },
      children: { table: { disable: true } },
    },
  });
</script>

{#snippet title()}
  <div class="text-lg text-center">About</div>
{/snippet}

{#snippet header()}
  <img
    src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=900&h=360&auto=format&fit=crop&ixlib=rb-4.0.3"
    alt="mountain view banner"
    class="w-full aspect-[21/9] object-cover"
  />
{/snippet}

{#snippet body()}
  <div class="space-y-3">
    <p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]">
      Update
    </p>
    <h2
      class="text-xl font-semibold tracking-tight [color:var(--color-text-default)]"
    >
      Improved Card Layout
    </h2>
    <p class="[color:var(--color-text-muted)]">
      The new card design adds visual balance, tighter spacing, and clearer text
      contrast. Ideal for feature previews and dashboard summaries.
    </p>
  </div>
{/snippet}

{#snippet footer()}
  <div class="text-right text-sm [color:var(--color-text-muted)]">
    {today}
  </div>
{/snippet}

<Story name="Default">
  {#snippet template(args)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Card sz={args.sz} class={args.class}>
        <div class="space-y-2 leading-relaxed">
          <p>{t.snippets.about.description}</p>
          <p class="text-[var(--color-text-muted)]">
            {t.snippets.about.helper}
          </p>
        </div>
      </Card>
    </div>
  {/snippet}
</Story>

<Story name="Header&Footer">
  {#snippet template(args)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Card sz={args.sz} class={args.class} header={title} {footer}>
        <div class="space-y-2 leading-relaxed">
          <p>{t.snippets.about.description}</p>
          <p class="text-[var(--color-text-muted)]">
            {t.snippets.about.helper}
          </p>
        </div>
      </Card>
    </div>
  {/snippet}
</Story>

<Story name="Image Header Card">
  {#snippet template(args)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Card
        {header}
        children={body}
        {footer}
        sz={args.sz}
        class={args.class}
        flushHeader={args.flushHeader}
        flushFooter={args.flushFooter}
      />
    </div>
  {/snippet}
</Story>
