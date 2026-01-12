<!-- src/lib/Badge.svelte -->
<script lang="ts">
  /**
   * @component Badge
   * @description Compact status badge for inline labels and small indicators.
   *
   * @prop message {string} - Badge text
   *
   * @prop variant {ToastVariant} - Visual style
   * @options success|danger|warning|info
   * @default info
   *
   * @prop showIcon {boolean} - Shows a variant icon
   * @default false
   *
   * @prop class {string} - Additional wrapper classes
   * @default ""
   *
   * @note Intended for inline status labels.
   * @note Uses NoticeBase for shared styling with Toast.
   */
  import NoticeBase from "./NoticeBase.svelte";
  import type { ToastVariant } from "./types";

  let {
    message,
    variant = "info",
    showIcon = false,
    class: externalClass = "",
  }: {
    message: string;
    variant?: ToastVariant;
    showIcon?: boolean;
    class?: string;
  } = $props();
</script>

<NoticeBase
  {message}
  {variant}
  {showIcon}
  inline
  class={externalClass}
/>
