<!-- src/lib/FilePicker.svelte -->
<script lang="ts">
  /**
   * @component FilePicker
   * @description Lightweight file selector with click support and drag-and-drop. Internally uses a hidden `<input type="file">` plus a drop zone.
   *
   * @prop accept {string} - Accepted file types
   * @default "*\\/*"
   *
   * @prop multiple {boolean} - Allows selecting multiple files
   * @default false
   *
   * @prop label {string} - Button label; falls back to localized text
   *
   * @prop disabled {boolean} - Disables all interactions
   * @default false
   *
   * @prop clearable {boolean} - Shows a clear button to reset selection
   * @default true
   *
   * @prop placeholder {string} - Placeholder text for the drop zone
   *
   * @prop value {FileList | null} - Controlled selected files (bindable)
   * @default null
   *
   * @prop onFilesSelected {(files: FileList | null) => void} - Fired when files are chosen
   *
   * @prop onError {(error: string) => void} - Fired on validation errors
   *
   * @prop class {string} - Additional classes for the wrapper
   * @default ""
   *
   * @note The entire area is clickable and supports drag-and-drop.
   * @note After a selection, the underlying input resets its value, so choosing the same file twice still triggers updates.
   * @note `accept` does not apply to dropped files, only to the picker UI; validate files inside `onFilesSelected`.
   * @note When `clearable=true`, the user can clear selected files and the callback receives `null`.
   * @note When `disabled=true`, clicks, drag events, focus, and keyboard input are blocked.
   */
  import type { HTMLAttributes } from "svelte/elements";
  import { getContext } from "svelte";
  import Button from "./Button.svelte";
  import { cx } from "../utils";
  import { TEXTS } from "./lang";

  type Props = HTMLAttributes<HTMLDivElement> & {
    accept?: string;
    multiple?: boolean;
    label?: string;
    disabled?: boolean;
    clearable?: boolean;
    placeholder?: string;
    value?: FileList | null;
    onFilesSelected?: (files: FileList | null) => void;
    onError?: (error: string) => void;
    class?: string;
  };

  let {
    accept = "*/*",
    multiple = false,
    label,
    disabled = false,
    clearable = true,
    placeholder,
    value: propValue = null,
    onFilesSelected,
    class: externalClass = "",
    ...rest
  }: Props = $props();

  const lang = getContext<{ value: keyof typeof TEXTS }>("lang");
  const L = $derived(TEXTS[lang.value].components.filePicker);

  const labelFinal = $derived(label ?? L.text);
  const placeholderFinal = $derived(placeholder ?? L.placeholder);

  let inputEl: HTMLInputElement;
  let internalValue: FileList | null = $derived(propValue);
  let isDragOver = $state(false);

  const base = "inline-block w-full";
  const pickerClass = $derived(cx(base, externalClass));

  const hasValue = $derived(Boolean(internalValue && internalValue.length > 0));
  const fileNames = $derived(
    internalValue
      ? Array.from(internalValue)
          .map((file) => file.name)
          .join(", ")
      : ""
  );

  function handleButtonClick() {
    if (disabled) return;
    inputEl?.click();
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    internalValue = files;
    if (files && files.length > 0) {
      onFilesSelected?.(files);
    }
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    isDragOver = false;
    if (disabled) return;
    const files = event.dataTransfer?.files;
    internalValue = files || null;
    if (files && files.length > 0) {
      onFilesSelected?.(files);
    }
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  function handleDragEnter(event: DragEvent) {
    event.preventDefault();
    if (!disabled) {
      isDragOver = true;
    }
  }

  function handleDragLeave(event: DragEvent) {
    event.preventDefault();
    isDragOver = false;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (disabled) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleButtonClick();
    }
  }

  function clearSelection() {
    if (!clearable) return;
    internalValue = null;
    if (inputEl) {
      inputEl.value = "";
    }
    onFilesSelected?.(null);
  }
</script>

<div class={pickerClass} {...rest}>
  <input
    bind:this={inputEl}
    type="file"
    {accept}
    {multiple}
    class="hidden"
    onchange={handleFileChange}
  />

  <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
    <Button {disabled} onClick={handleButtonClick} class="relative" sz="xs">
      {labelFinal}
    </Button>

    {#if clearable}
      <Button
        onClick={clearSelection}
        variant="danger"
        disabled={!hasValue || disabled}
        sz="xs"
      >
        {L.clear}
      </Button>
    {/if}
  </div>

  <div
    class="mt-2 p-4 border-2 border-dashed rounded-[var(--radius-md)] text-center transition-colors duration-200"
    class:border-[var(--color-primary)]={isDragOver && !disabled}
    class:border-[var(--border-color-default)]={!isDragOver || disabled}
    class:bg-[var(--color-bg-surface-hover)]={isDragOver && !disabled}
    class:cursor-pointer={!disabled}
    class:opacity-[var(--opacity-disabled)]={disabled}
    class:cursor-not-allowed={disabled}
    class:cursor-copy={isDragOver && !disabled}
    role="button"
    tabindex={disabled ? -1 : 0}
    aria-disabled={disabled}
    ondrop={handleDrop}
    ondragover={handleDragOver}
    ondragenter={handleDragEnter}
    ondragleave={handleDragLeave}
    onclick={handleButtonClick}
    onkeydown={handleKeyDown}
  >
    <p class="text-sm [color:var(--color-text-muted)]">
      {L.dragDrop}
    </p>
    {#if accept !== "*/*"}
      <p class="text-xs mt-1 [color:var(--color-text-muted)]">
        {L.accepted}: {accept}
      </p>
    {/if}
  </div>

  <div
    class="mt-3 p-4 bg-[var(--color-bg-surface)] text-center"
    aria-live="polite"
  >
    <p class="text-xs uppercase tracking-wide [color:var(--color-text-muted)]">
      {L.selectedFiles}
    </p>
    <p
      class="text-sm font-semibold mt-1 [color:var(--color-text-default)] break-words"
    >
      {#if hasValue}
        {fileNames}
      {:else}
        {placeholderFinal}
      {/if}
    </p>
    {#if hasValue && internalValue}
      <p class="text-sm mt-1 [color:var(--color-text-muted)]">
        {L.fileCount.replace("{n}", String(internalValue.length))}

        {#if multiple && internalValue.length > 1}
          • {L.totalSize}: {(
            Array.from(internalValue).reduce(
              (acc, file) => acc + file.size,
              0
            ) /
            1024 /
            1024
          ).toFixed(2)} MB
        {/if}
      </p>
    {/if}
  </div>
</div>
