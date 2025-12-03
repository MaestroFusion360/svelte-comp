<!-- src/demo/AboutDemo.svelte -->
<script lang="ts">
  import { getContext } from "svelte";
  import { Card } from "$lib";
  import { TEXTS } from "../lang";

  const lang = getContext<{ value: keyof typeof TEXTS }>("lang");
  const L = $derived(TEXTS[lang.value]);
</script>

<Card>
  <header
    class="flex items-end justify-between gap-4 -mx-5 px-5 py-5 border-b border-[var(--border-color-default)]"
  >
    <h2 class="text-2xl font-semibold tracking-tight">{L.about.heading}</h2>
    <span class="text-sm [color:var(--color-text-muted)]">{L.about.meta}</span>
  </header>
  <div class="p-5 space-y-4 text-sm opacity-90 leading-relaxed">
    <p>
      <strong>{L.app.title}</strong>{L.about.intro.description}
      <strong>{L.about.intro.frameworks.runes}</strong>
      {L.about.intro.connector}
      <strong>{L.about.intro.frameworks.tailwind}</strong>
      {L.about.intro.closing}
    </p>
    <p>
      {L.about.styling.beforeFile}
      <code>{L.about.styling.file}</code>{L.about.styling.afterFile}
      <code>{L.about.styling.darkClass}</code>
      {L.about.styling.afterDark}
    </p>
    <p>
      {L.about.patterns}
    </p>
    <p>
      {L.about.versionLabel}: <strong>{L.app.version}</strong><br />
      {L.about.authorLabel}:
      <a href={L.app.authorUrl}>
        <strong>{L.about.authorName}</strong>
      </a>
    </p>
  </div>
</Card>
