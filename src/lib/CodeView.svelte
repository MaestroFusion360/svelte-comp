<!-- src/lib/CodeView.svelte -->
<script lang="ts">
  /**
   * @component CodeView
   * @description CodeView is a small prism.js powered code block that supports syntax highlighting, optional editing, line numbers and active-line highlighting.
   *
   * @prop code {string} - Code content to render
   * @default ""
   *
   * @prop language {Language} - Syntax highlighting language
   * @options txt|html|css|js|json|python
   * @default "txt"
   *
   * @prop title {string} - Title displayed above the code block
   * @default "Code"
   *
   * @prop showCopyButton {boolean} - Shows the copy-to-clipboard button
   * @default true
   *
   * @prop showLineNumbers {boolean} - Displays line numbers alongside the code
   * @default false
   *
   * @prop editable {boolean} - Enables editable mode with a textarea overlay
   * @default false
   *
   * @prop activeLine {boolean} - Highlights the current cursor line in editable mode
   * @default false
   *
   * @prop sz {SizeKey} - Size preset affecting spacing and typography
   * @options xs|sm|md|lg|xl
   * @default md
   *
   * @prop class {string} - Extra classes applied to the root container
   * @default ""
   * 
   * @note Uses Prism for syntax highlighting; HTML/CSS/TXT grammars are bundled by default.
   * @note Editable mode renders a transparent textarea above a highlighted code layer, mirroring real editors.
   * @note Cursor-line highlight is overlaid using CSS variables and scroll-position tracking.
   * @note Line numbers are fully scroll-synchronized with the editor content.
   * @note Readonly mode shows static highlighted code, without textarea.
   * @note Copy button writes the full code string to the clipboard.
   * @note All sizing and spacing scale automatically with the shared `sz` token.
   * @note Supports dark/light themes via existing design-token colors.
   * @note Designed as a low-level editor component, not a full IDE replacement.
   */
  import { type SizeKey, type Language, TEXT } from "./types";
  import * as Prism from "prismjs";
  import "prismjs/components/prism-markup";
  import "prismjs/components/prism-css";
  import "prismjs/components/prism-javascript";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-python";
  import "prismjs/themes/prism.css";
  import { cx } from "../utils";

  type Props = {
    code?: string;
    language?: Language;
    title?: string;
    showCopyButton?: boolean;
    showLineNumbers?: boolean;
    editable?: boolean;
    activeLine?: boolean;
    sz?: SizeKey;
    class?: string;
  };

  let {
    code = $bindable(""),
    language = "txt",
    title = "Code",
    showCopyButton = true,
    showLineNumbers = false,
    editable = false,
    activeLine = false,
    sz = "md",
    class: externalClass = "",
  }: Props = $props();

  let textareaEl = $state<HTMLTextAreaElement | null>(null);
  let gutterEl = $state<HTMLDivElement | null>(null);
  let highlightEl = $state<HTMLDivElement | null>(null);
  let copied = $state(false);
  let activeLineIndex = $state(0);
  let highlightScroll = $state(0);
  let padTopPx = $state(12);

  const lines = $derived(code.split("\n"));

  const LINE_HEIGHT: Record<SizeKey, string> = {
    xs: "leading-4",
    sm: "leading-[1.1rem]",
    md: "leading-[1.3rem]",
    lg: "leading-[1.45rem]",
    xl: "leading-7",
  };

  let lineHeightPx = $state(20);

  function escapeHtml(x: string) {
    return x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlight(src: string, lang: Language) {
    if (src === "") return "";
    if (lang === "txt") return escapeHtml(src);
    const key = lang === "html" ? "markup" : lang;
    const grammar = Prism.languages[key];
    return Prism.highlight(src, grammar, key);
  }

  const highlighted = $derived(highlight(code, language));

  function updateActiveLine() {
    if (!activeLine || !textareaEl) return;
    const pos = textareaEl.selectionStart ?? 0;
    const before = code.slice(0, pos);
    activeLineIndex = before.split("\n").length - 1;
  }

  function syncScroll(event: Event) {
    const el = event.currentTarget as HTMLElement;
    if (gutterEl) gutterEl.scrollTop = el.scrollTop;
    if (highlightEl) {
      highlightEl.scrollTop = el.scrollTop;
      highlightEl.scrollLeft = el.scrollLeft;
      highlightScroll = el.scrollTop;
    }
  }

  $effect(() => {
    void sz;
    if (!textareaEl) return;
    const styles = getComputedStyle(textareaEl);
    const lh = Number.parseFloat(styles.lineHeight);
    if (!Number.isNaN(lh)) lineHeightPx = lh;
    const pt = Number.parseFloat(styles.paddingTop);
    if (!Number.isNaN(pt)) padTopPx = pt;
  });

  async function copyToClipboard() {
    await navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => (copied = false), 1200);
  }
</script>

<div
  class={cx(
    "cv-root w-full h-full min-h-0 flex flex-col border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]",
    "text-[var(--color-text-default)]",
    externalClass
  )}
>
  {#if title}
    <div
      class={cx(
        "px-3 py-1 bg-[var(--color-bg-muted)] font-semibold uppercase flex items-center justify-between",
        TEXT[sz]
      )}
    >
      <div>{title}</div>

      {#if showCopyButton}
        <button
          onclick={copyToClipboard}
          class={cx(
            "px-3 py-0.5 text-xs rounded bg-[var(--color-primary)] text-white hover:opacity-[var(--opacity-hover)]",
            "transition focus-visible:ring-2 focus-visible:ring-[var(--border-color-focus)] focus:outline-none"
          )}
          class:!bg-green-600={copied}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      {/if}
    </div>
  {/if}

  <div
    class={cx(
      "cv-body flex flex-1 min-h-0 font-mono",
      TEXT[sz],
      LINE_HEIGHT[sz]
    )}
  >
    {#if showLineNumbers}
      <div
        bind:this={gutterEl}
        class={cx(
          "select-none px-3 py-[12px] border-r border-[var(--border-color-default)]",
          "text-[var(--color-text-muted)] text-right overflow-hidden",
          "cv-gutter bg-[var(--color-bg-surface)] tabular-nums h-full min-h-0"
        )}
      >
        {#each lines as _, i (i)}
          <div class={LINE_HEIGHT[sz]}>{i + 1}</div>
        {/each}
      </div>
    {/if}

    <div class="cv-editor relative flex-1 min-h-0">
      <div
        bind:this={highlightEl}
        class={cx("cv-highlight cv-layer", TEXT[sz], LINE_HEIGHT[sz])}
        class:cv-active-line={activeLine && editable}
        style={activeLine && editable
          ? `--cv-line-height: ${lineHeightPx}px; --cv-active-line-top: ${padTopPx + activeLineIndex * lineHeightPx - highlightScroll}px;`
          : undefined}
        aria-hidden="true"
      >
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html highlighted}
      </div>

      <textarea
        bind:this={textareaEl}
        bind:value={code}
        onscroll={syncScroll}
        oninput={editable ? updateActiveLine : undefined}
        onkeyup={editable ? updateActiveLine : undefined}
        onclick={editable ? updateActiveLine : undefined}
        onmouseup={editable ? updateActiveLine : undefined}
        onfocus={editable ? updateActiveLine : undefined}
        spellcheck="false"
        readonly={!editable}
        class={cx("cv-input cv-layer", TEXT[sz], LINE_HEIGHT[sz])}
      ></textarea>
    </div>
  </div>
</div>

<style>
  .cv-layer {
    position: absolute;
    padding: 12px;
    white-space: pre;
    box-sizing: border-box;
    font: inherit;
    line-height: inherit;
  }

  .cv-highlight {
    --cv-active-color: color-mix(
      in oklab,
      var(--color-text-default) 16%,
      transparent
    );
    inset: 0;
    overflow: auto;
    pointer-events: none;
    color: var(--color-text-default);
    background: transparent;
    padding-bottom: 100px;
  }

  .cv-active-line {
    background-image: linear-gradient(
      var(--cv-active-color),
      var(--cv-active-color)
    );
    background-repeat: no-repeat;
    background-size: 100% var(--cv-line-height);
    background-position: 0 var(--cv-active-line-top);
  }

  .cv-input {
    inset: 0;
    color: transparent;
    caret-color: var(--color-text-default);
    outline: none;
    resize: none;
    overflow: auto;
    border: none;
    box-sizing: border-box;
  }

  .cv-input:focus {
    outline: none;
  }

  .cv-input:focus-visible {
    outline: none !important;
  }

  /* Prism */
  .token.comment {
    color: oklch(0.937 0.019 256 / 0.45);
  }
  .token.punctuation {
    color: oklch(0.726 0.051 239);
  }
  .token.tag {
    color: oklch(0.725 0.192 338);
  }
  .token.attr-name {
    color: oklch(0.747 0.157 254);
  }
  .token.attr-value {
    color: oklch(0.835 0.181 139);
  }
  .token.string {
    color: oklch(0.835 0.181 139);
  }
  .token.keyword {
    color: oklch(0.701 0.206 27);
  }
</style>
