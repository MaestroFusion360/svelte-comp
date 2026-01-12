<!-- src/demo/Notepad.svelte -->
<script lang="ts">
  /**
   * @component Notepad
   * @description Feature-rich notepad demo with menus, editor, and dialogs.
   *
   * @prop L {NotepadLocale} - Optional localization source (default: {}).
   * @prop lang {Language} - Active syntax mode (default: "txt").
   * @prop sz {SizeKey} - UI size token (default: "sm").
   * @prop class {string} - Extra wrapper classes (default: "").
   *
   * @note Supports undo/redo, file open/save, clipboard actions, and hotkeys.
   * @note Uses Menu, CodeView, Dialog, Toast, and ContextMenu components.
   */
  import { Menu, Toast } from "$lib";
  import Dialog from "$lib/Dialog.svelte";
  import CheckBox from "$lib/CheckBox.svelte";
  import CodeView from "$lib/CodeView.svelte";
  import ContextMenu from "$lib/ContextMenu.svelte";
  import { TEXT } from "$lib/types";
  import { cx } from "$utils";
  import type {
    MenuAction,
    MenuItem,
    SizeKey,
    Language,
    SelectOption,
    ToastVariant,
  } from "$lib/types";

  type NotepadLocale = {
    readonly notepad?: {
      readonly menu?: Partial<Record<string, string>>;
      readonly actions?: Partial<Record<string, string>>;
      readonly confirmNew?: string;
      readonly openError?: string;
      readonly saveError?: string;
      readonly cutError?: string;
      readonly copyError?: string;
      readonly pasteError?: string;
      readonly undoError?: string;
      readonly redoError?: string;
      readonly aboutText?: string;
      readonly optionsText?: string;
    };
    readonly menuItems?: Partial<Record<string, string>>;
    readonly [key: string]: unknown;
  };

  type Props = {
    L?: NotepadLocale;
    lang?: Language;
    sz?: SizeKey;
    class?: string;
  };

  let {
    L = {},
    lang = "txt",
    sz = "sm",
    class: externalClass = "",
  }: Props = $props();

  const M = $derived(L?.notepad?.menu ?? {});
  const A = $derived(L?.notepad?.actions ?? {});
  const MI = $derived(L?.menuItems ?? {});
  const fileLabel = $derived(M.file ?? MI.file ?? "File");
  const editLabel = $derived(M.edit ?? MI.edit ?? "Edit");
  const viewLabel = $derived(M.view ?? MI.view ?? "View");
  const languageLabel = $derived(M.language ?? MI.language ?? "Language");
  const helpLabel = $derived(M.help ?? MI.help ?? "Help");
  const settingsLabel = $derived(M.settings ?? MI.settings ?? "Settings");
  const statusBarLabel = $derived(A.statusBar ?? MI.statusBar ?? "Status bar");
  const aboutLabel = $derived(A.about ?? MI.about ?? "About");
  const optionsLabel = $derived(A.options ?? MI.options ?? "Options");
  const aboutMessage = $derived(
    L?.notepad?.aboutText ??
      "A lightweight notepad demo using the component library."
  );
  const optionsMessage = $derived(
    L?.notepad?.optionsText ??
      "Change appearance options such as status bar visibility."
  );

  const languageOptions: SelectOption[] = [
    { value: "txt", label: "Text" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "js", label: "JavaScript" },
    { value: "json", label: "JSON" },
    { value: "python", label: "Python" },
  ];

  type ToastEntry = {
    id: number;
    title?: string;
    message: string;
    variant: ToastVariant;
  };

  const languageMenuActions: MenuAction[] = $derived(
    languageOptions.map(({ value, label }) => {
      const active = value === lang;

      return {
        id: active ? sz : value,
        real: value,
        label,
      };
    })
  );

  const menus: MenuItem[] = $derived([
    {
      name: fileLabel,
      actions: [
        { id: "new", label: A.new ?? MI.new ?? "New", shortcut: "Ctrl+N" },
        { id: "open", label: A.open ?? MI.open ?? "Open", shortcut: "Ctrl+O" },
        { id: "save", label: A.save ?? MI.save ?? "Save", shortcut: "Ctrl+S" },
      ],
    },
    {
      name: editLabel,
      actions: [
        { id: "undo", label: A.undo ?? MI.undo ?? "Undo", shortcut: "Ctrl+Z" },
        {
          id: "redo",
          label: A.redo ?? MI.redo ?? "Redo",
          shortcut: "Ctrl+Y",
        },
        { id: "cut", label: A.cut ?? MI.cut ?? "Cut", shortcut: "Ctrl+X" },
        { id: "copy", label: A.copy ?? MI.copy ?? "Copy", shortcut: "Ctrl+C" },
        {
          id: "paste",
          label: A.paste ?? MI.paste ?? "Paste",
          shortcut: "Ctrl+V",
        },
      ],
    },
    {
      name: viewLabel,
      actions: [
        { id: "xs", label: A.xs ?? MI.xs ?? "XS" },
        { id: "sm", label: A.sm ?? MI.sm ?? "SM" },
        { id: "md", label: A.md ?? MI.md ?? "MD" },
        { id: "lg", label: A.lg ?? MI.lg ?? "LG" },
        { id: "xl", label: A.xl ?? MI.xl ?? "XL" },
        { id: "separator", type: "separator" },
        { id: "toggle-statusbar", label: statusBarLabel, shortcut: "Ctrl+B" },
      ],
    },
    {
      name: languageLabel,
      actions: languageMenuActions,
    },
    {
      name: settingsLabel,
      actions: [{ id: "options", label: optionsLabel }],
    },
    {
      name: helpLabel,
      actions: [{ id: "about", label: aboutLabel, shortcut: "F1" }],
    },
  ]);

  type FilePickerOptions = {
    multiple?: boolean;
    suggestedName?: string;
    types?: { description?: string; accept?: Record<string, string[]> }[];
  };

  type FilePickerWindow = Window & {
    showOpenFilePicker?: (
      options?: FilePickerOptions
    ) => Promise<FileSystemFileHandle[]>;
    showSaveFilePicker?: (
      options?: FilePickerOptions
    ) => Promise<FileSystemFileHandle>;
    isSecureContext?: boolean;
  };

  let textContent = $state("");
  let fileHandle = $state<FileSystemFileHandle | null>(null);
  let history = $state<string[]>([]);
  let redoStack = $state<string[]>([]);
  let prevContent = $state("");
  let hasPrev = $state(false);
  let suppress = $state(false);
  let toasts = $state<ToastEntry[]>([]);
  let toastId = 0;
  let fileInput: HTMLInputElement | null = null;
  let showStatusBar = $state(true);
  let aboutOpen = $state(false);
  let optionsOpen = $state(false);
  let cursorLine = $state(1);
  let cursorColumn = $state(1);
  let editorEl = $state<HTMLDivElement | null>(null);
  let lastSelectionStart = $state(0);
  let lastSelectionEnd = $state(0);
  let contextMenu:
    | {
        openAt: (event: MouseEvent) => void;
        close: () => void;
      }
    | null = null;

  const charCount = $derived(textContent.length);
  const lineCount = $derived(
    textContent === "" ? 1 : textContent.split("\n").length
  );
  const wordCount = $derived(
    textContent.trim()
      ? textContent.trim().split(/\s+/).filter(Boolean).length
      : 0
  );

  function addToast(variant: ToastVariant, message: string, title?: string) {
    toasts = [...toasts, { id: toastId++, title, message, variant }];
  }

  function removeToast(id: number) {
    toasts = toasts.filter((t) => t.id !== id);
  }

  function pushHistory(v: string) {
    if (!history.length || history.at(-1) !== v) {
      history = [...history, v].slice(-3);
    }
  }
  function pushRedo(v: string) {
    redoStack = [...redoStack, v].slice(-3);
  }
  function clearRedo() {
    redoStack = [];
  }

  $effect(() => {
    if (!hasPrev) {
      prevContent = textContent;
      hasPrev = true;
      return;
    }
    if (suppress) {
      prevContent = textContent;
      return;
    }
    if (textContent !== prevContent) {
      pushHistory(prevContent);
      clearRedo();
      prevContent = textContent;
    }
  });

  function setContentWithHistory(next: string) {
    pushHistory(textContent);
    clearRedo();
    suppress = true;
    textContent = next;
    suppress = false;
    prevContent = textContent;
  }

  function newDocument() {
    const msg = L?.notepad?.confirmNew ?? "";
    if (textContent && msg && !confirm(msg)) return;
    setContentWithHistory("");
    fileHandle = null;
  }

  async function openDocument() {
    try {
      const pickerWin = window as FilePickerWindow;
      if (pickerWin.showOpenFilePicker) {
        const [handle] = await pickerWin.showOpenFilePicker({
          multiple: false,
          types: [
            {
              description: "Text",
              accept: { "text/plain": [".txt", ".md", ".log"] },
            },
            { description: "All", accept: { "*/*": [".*"] } },
          ],
        });

        const file = await handle.getFile();
        const text = await file.text();
        setContentWithHistory(text);
        fileHandle = handle;
        return;
      }

      if (fileInput) {
        fileInput.value = "";
        fileInput.click();
        return;
      }

      addToast(
        "warning",
        L?.notepad?.openError ?? "File opening is not supported in this browser"
      );
    } catch {
      addToast("danger", L?.notepad?.openError ?? "Error");
    }
  }

  async function saveDocument() {
    try {
      const pickerWin = window as FilePickerWindow;

      if (
        fileHandle &&
        pickerWin.isSecureContext &&
        fileHandle.createWritable
      ) {
        const writable = await fileHandle.createWritable();
        await writable.write(
          new Blob([textContent], { type: "text/plain;charset=utf-8" })
        );
        await writable.close();
        return;
      }

      if (pickerWin.showSaveFilePicker) {
        const handle = await pickerWin.showSaveFilePicker({
          suggestedName: "note.txt",
          types: [{ description: "Text", accept: { "text/plain": [".txt"] } }],
        });
        const writable = await handle.createWritable();
        await writable.write(
          new Blob([textContent], { type: "text/plain;charset=utf-8" })
        );
        await writable.close();
        fileHandle = handle;
        return;
      }

      const blob = new Blob([textContent], {
        type: "text/plain;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "note.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      addToast("danger", L?.notepad?.saveError ?? "Error");
    }
  }

  function isTextInput(
    el: Element | null
  ): el is HTMLTextAreaElement | HTMLInputElement {
    if (!el) return false;
    if (el instanceof HTMLTextAreaElement) return true;
    if (el instanceof HTMLInputElement)
      return ["text", "search", "url", "tel", "password"].includes(el.type);
    return false;
  }

  function getEditable() {
    const el = document.activeElement;
    return isTextInput(el) ? el : null;
  }

  function getEditorTextarea() {
    return editorEl?.querySelector("textarea") ?? null;
  }

  function getSelectionRange() {
    const el = getEditable() ?? getEditorTextarea();
    const start = el?.selectionStart ?? lastSelectionStart;
    const end = el?.selectionEnd ?? lastSelectionEnd;
    if (el) {
      lastSelectionStart = start;
      lastSelectionEnd = end;
    }
    return { el, start, end };
  }

  function updateCursorPosition() {
    const editable = getEditorTextarea();
    if (editable) {
      lastSelectionStart = editable.selectionStart ?? lastSelectionStart;
      lastSelectionEnd = editable.selectionEnd ?? lastSelectionEnd;
    }
    const pos = editable?.selectionStart ?? lastSelectionStart;
    const before = textContent.slice(0, pos);
    const segments = before.split("\n");
    cursorLine = Math.max(segments.length, 1);
    cursorColumn = (segments.at(-1)?.length ?? 0) + 1;
  }

  async function cut() {
    try {
      const { start, end } = getSelectionRange();
      if (start === end) return;
      const slice = textContent.slice(start, end);
      await navigator.clipboard.writeText(slice);
      const next = textContent.slice(0, start) + textContent.slice(end);
      pushHistory(textContent);
      clearRedo();
      suppress = true;
      textContent = next;
      suppress = false;
      prevContent = textContent;
      queueMicrotask(() => {
        const t = getEditorTextarea();
        if (t) t.selectionStart = t.selectionEnd = start;
      });
    } catch {
      addToast("danger", L?.notepad?.cutError ?? "Error");
    }
  }

  async function copy() {
    try {
      const { start, end } = getSelectionRange();
      if (start === end) return;
      const slice = textContent.slice(start, end);
      await navigator.clipboard.writeText(slice);
    } catch {
      addToast("danger", L?.notepad?.copyError ?? "Error");
    }
  }

  async function paste() {
    try {
      const pasteText = await navigator.clipboard.readText();
      const { start, end } = getSelectionRange();
      const next =
        textContent.slice(0, start) + pasteText + textContent.slice(end);
      pushHistory(textContent);
      clearRedo();
      suppress = true;
      textContent = next;
      suppress = false;
      prevContent = textContent;
      const caret = start + pasteText.length;
      queueMicrotask(() => {
        const t = getEditorTextarea();
        if (t) t.selectionStart = t.selectionEnd = caret;
      });
    } catch {
      addToast("danger", L?.notepad?.pasteError ?? "Error");
    }
  }

  function deleteSelection() {
    const { start, end } = getSelectionRange();
    if (start === end) return;
    const next = textContent.slice(0, start) + textContent.slice(end);
    pushHistory(textContent);
    clearRedo();
    suppress = true;
    textContent = next;
    suppress = false;
    prevContent = textContent;
    queueMicrotask(() => {
      const t = getEditorTextarea();
      if (t) t.selectionStart = t.selectionEnd = start;
    });
  }

  function undo() {
    try {
      if (!history.length) return;
      const prev = history.at(-1)!;
      history = history.slice(0, -1);
      pushRedo(textContent);
      suppress = true;
      textContent = prev;
      suppress = false;
      prevContent = textContent;
    } catch {
      addToast("danger", L?.notepad?.undoError ?? "Error");
    }
  }

  function redo() {
    try {
      if (!redoStack.length) return;
      const next = redoStack.at(-1)!;
      redoStack = redoStack.slice(0, -1);
      pushHistory(textContent);
      suppress = true;
      textContent = next;
      suppress = false;
      prevContent = textContent;
    } catch {
      addToast("danger", L?.notepad?.redoError ?? "Error");
    }
  }

  function showAbout() {
    aboutOpen = true;
  }

  async function handleLegacyFileChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    const file = target?.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      setContentWithHistory(text);
      fileHandle = null;
    } catch {
      addToast("danger", L?.notepad?.openError ?? "Error");
    } finally {
      if (target) target.value = "";
    }
  }

  function handleSelect(_menu: string, action: MenuAction) {
    const id = typeof action === "string" ? action : (action.real ?? action.id);

    if (!id) return;

    switch (id) {
      case "new":
        newDocument();
        break;
      case "open":
        openDocument();
        break;
      case "save":
        saveDocument();
        break;
      case "undo":
        undo();
        break;
      case "redo":
        redo();
        break;
      case "cut":
        cut();
        break;
      case "copy":
        copy();
        break;
      case "paste":
        paste();
        break;
      case "delete":
        deleteSelection();
        break;
      case "about":
        showAbout();
        break;
      case "options":
        optionsOpen = true;
        break;
      case "xs":
      case "sm":
      case "md":
      case "lg":
      case "xl":
        sz = id as SizeKey;
        break;
      case "txt":
      case "html":
      case "css":
      case "js":
      case "json":
      case "python":
        lang = id as Language;
        break;
      case "toggle-statusbar":
        showStatusBar = !showStatusBar;
        break;
    }
  }

  const hotkeyHandlers = $derived<Record<string, () => void>>({
    "ctrl+n": () => handleSelect(fileLabel, "new"),
    "ctrl+o": () => handleSelect(fileLabel, "open"),
    "ctrl+s": () => handleSelect(fileLabel, "save"),
    "ctrl+z": () => handleSelect(editLabel, "undo"),
    "ctrl+y": () => handleSelect(editLabel, "redo"),
    "ctrl+x": () => handleSelect(editLabel, "cut"),
    "ctrl+c": () => handleSelect(editLabel, "copy"),
    "ctrl+v": () => handleSelect(editLabel, "paste"),
    "ctrl+b": () => handleSelect(viewLabel, "toggle-statusbar"),
    f1: () => handleSelect(helpLabel, "about"),
  });

  function handleHotkeys(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    const parts: string[] = [];
    if (event.ctrlKey || event.metaKey) parts.push("ctrl");
    if (event.shiftKey) parts.push("shift");
    parts.push(key);
    const combo = parts.join("+");
    const action = hotkeyHandlers[combo] ?? hotkeyHandlers[key];
    if (!action) return;
    event.preventDefault();
    action();
  }

  $effect(() => {
    void textContent;
    updateCursorPosition();
  });

  $effect(() => {
    if (typeof document === "undefined") return;
    const handler = () => updateCursorPosition();
    document.addEventListener("selectionchange", handler);
    return () => document.removeEventListener("selectionchange", handler);
  });

  function handleContextMenu(event: MouseEvent) {
    event.preventDefault();
    const t = getEditorTextarea();
    if (t) {
      lastSelectionStart = t.selectionStart ?? lastSelectionStart;
      lastSelectionEnd = t.selectionEnd ?? lastSelectionEnd;
    }
    contextMenu?.openAt(event);
  }
</script>

<svelte:window onkeydown={handleHotkeys} />

<div class={cx("flex flex-col w-full min-w-0 h-full", externalClass)}>
  <div
    class="overflow-x-auto overflow-y-visible w-full min-w-full bg-[var(--color-bg-surface)] border-b border-[var(--border-color-default)]"
  >
    <Menu
      class="block min-w-full bg-transparent border-0"
      {menus}
      onSelect={handleSelect}
      {sz}
    />
  </div>

  <div
    class="flex-1 min-h-0"
    role="region"
    aria-label="Editor"
    bind:this={editorEl}
    oncontextmenu={handleContextMenu}
  >
    <CodeView
      title=""
      language={lang}
      bind:code={textContent}
      showCopyButton={false}
      showLineNumbers={true}
      editable={true}
      activeLine={true}
      {sz}
      class="h-full"
    />
  </div>

  {#if showStatusBar}
    <div
      class={cx(
        "rounded-xs border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]",
        "text-[var(--color-text-muted)] px-3 py-2",
        "flex flex-wrap items-center justify-between gap-3",
        TEXT[sz]
      )}
    >
      <div class={cx("flex flex-wrap items-center gap-3")}>
        <span>Ln {cursorLine}, Col {cursorColumn}</span>
        <span>{lineCount} lines</span>
        <span>{wordCount} words</span>
        <span>{charCount} chars</span>
      </div>

      <div class={cx("flex flex-wrap items-center gap-3")}>
        <span>{lang.toUpperCase()}</span>
        <span>Size {sz.toUpperCase()}</span>
      </div>
    </div>
  {/if}

  <input
    type="file"
    class="hidden"
    bind:this={fileInput}
    accept=".txt,.md,.log,.html,.css,.js,.json,.py,.yml,.yaml,*/*"
    onchange={handleLegacyFileChange}
  />

  {#each toasts as t (t.id)}
    <Toast
      title={t.title}
      message={t.message}
      variant={t.variant}
      onClose={() => removeToast(t.id)}
    />
  {/each}

  {#if aboutOpen}
    <Dialog
      open={true}
      title={aboutLabel}
      message={aboutMessage}
      onClose={() => (aboutOpen = false)}
      onCancel={() => (aboutOpen = false)}
      onConfirm={() => (aboutOpen = false)}
      {sz}
    />
  {/if}

  {#if optionsOpen}
    <Dialog
      open={true}
      title={optionsLabel}
      onClose={() => (optionsOpen = false)}
      onCancel={() => (optionsOpen = false)}
      onConfirm={() => (optionsOpen = false)}
      {sz}
    >
      <div class={cx("flex flex-col gap-3")}>
        <p class={cx("text-[var(--color-text-muted)]", TEXT[sz])}>
          {optionsMessage}
        </p>

        <div class={cx("flex items-center justify-between px-1 py-2")}>
          <CheckBox
            label={statusBarLabel}
            bind:checked={showStatusBar}
            {sz}
            variant="neutral"
          />
        </div>
      </div>
    </Dialog>
  {/if}

  <ContextMenu
    bind:this={contextMenu}
    onUndo={undo}
    onRedo={redo}
    onCopy={copy}
    onCut={cut}
    onPaste={paste}
    onDelete={deleteSelection}
  />
</div>
