<!-- src/demo/CodeViewDemo.svelte -->
<script lang="ts">
  import { CodeView, Select, Switch } from "$lib";
  import type { SizeKey, Language, SelectOption } from "$lib/types";

  type Props = {
    sz?: SizeKey;
    class?: string;
  };

  let { sz, class: externalClass = "" }: Props = $props();

  const languageOptions: SelectOption[] = [
    { value: "txt", label: "Text" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "js", label: "JavaScript" },
    { value: "json", label: "JSON" },
    { value: "python", label: "Python" }
  ];

  const scriptClose = "</scr" + "ipt>";
  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="assets/icon.svg" />
    <link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Svelte Components</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts">${scriptClose}
  </body>
</html>`;

  let language = $state<Language>("html");
  let codes = $state<Record<Language, string>>({
    txt: `CodeView demo
Switch language with the select above.`,
    html: indexHtml,
    css: `:root {
  --radius-md: 8px;
  --color-primary: oklch(0.67 0.21 35);
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: radial-gradient(circle at 20% 20%, #f3f4f6, #fff 60%);
  color: #0f172a;
}`,
    js: `export function greet(name) {
  return \`Hello, \${name}!\`;
}`,
    json: `{
  "name": "svelte-comp",
  "version": "1.0.0",
  "description": "Svelte 5 UI component library"
}`,
    python: `def greet(name):
    return f"Hello, {name}!"`
  });

  let code = $state("");
  let editable = $state(false);

  const currentCode = $derived(codes[language]);
  const displayCode = $derived(code.trimStart());

  $effect(() => {
    if (currentCode !== code) code = currentCode;
  });
</script>

<div class="w-full flex flex-col gap-3 {externalClass}">
  <div class="flex flex-wrap items-baseline gap-3">
    <div class="shrink-0">
      <Select
        label="Language"
        options={languageOptions}
        bind:value={language}
        onChange={(val) => (language = val as Language)}
        class="min-w-[6rem]"
        sz="xs"
      />
    </div>

    <Switch
      topLabel="Editable"
      bind:checked={editable}
      onChange={(val) => (editable = val)}
      sz="xs"
    />
  </div>

  <CodeView
    code={displayCode}
    title="CODE"
    {language}
    showCopyButton={true}
    showLineNumbers={true}
    {editable}
    activeLine={true}
    {sz}
  />
</div>
