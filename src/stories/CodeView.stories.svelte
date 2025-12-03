<!-- src/stories/CodeView.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import CodeView from "$lib/CodeView.svelte";
  import { SIZES } from "$lib/types";

  const sampleHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CodeView</title>
  </head>
  <body>
    <div id="app">Hello Storybook</div>
  </body>
</html>`;

  const sampleCss = `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: radial-gradient(circle at 20% 20%, #f3f4f6, #fff 60%);
  color: #0f172a;
}`;

  const { Story } = defineMeta({
    title: "Components/CodeView",
    component: CodeView,
    tags: ["autodocs"],
    args: {
      title: "CODE",
      code: sampleHtml,
      language: "html",
      showCopyButton: true,
      showLineNumbers: true,
      editable: false,
      activeLine: false,
      sz: "md",
    },
    argTypes: {
      sz: { control: "select", options: SIZES },
      language: {
        control: "select",
        options: ["txt", "html", "css", "js", "json", "python"],
      },
      showCopyButton: { control: "boolean" },
      showLineNumbers: { control: "boolean" },
      editable: { control: "boolean" },
      activeLine: { control: "boolean" },
      code: { control: "text" },
      title: { control: "text" },
    },
  });
</script>

<Story name="Readonly HTML">
  {#snippet template(args)}
    <div class="story-center">
      <CodeView {...args} />
    </div>
  {/snippet}
</Story>

<Story
  name="Editable CSS"
  args={{
    code: sampleCss,
    language: "css",
    editable: true,
    activeLine: true,
    showLineNumbers: true,
  }}
>
  {#snippet template(args)}
    <div class="story-center">
      <CodeView {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    padding: 24px;
    max-width: 760px;
    margin: 0 auto;
  }
</style>
