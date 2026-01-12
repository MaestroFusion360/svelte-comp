<!-- src/DialogDemo.svelte -->
<script lang="ts">
  /**
   * @component DialogDemo
   * @description Demo for Dialog with confirm/cancel flows.
   *
   * @prop sz {SizeKey} - Size token forwarded to Dialog (default: "sm").
   * @prop class {string} - Extra classes passed to Dialog (default: "").
   * @prop message {string} - Optional message shown in Dialog (default: "").
   *
   * @note Uses lang context and toastStore to show confirm/cancel toasts.
   */
  import type { SizeKey } from "$lib/types";
  import { cx } from "$utils";
  import { Button, Dialog } from "$lib";
  import { getContext } from "svelte";
  import { TEXTS } from "../lang";

  import { addToast } from "./toastStore";

  type Props = {
    sz?: SizeKey;
    class?: string;
    message?: string;
  };

  let { sz = "sm", class: externalClass = "", message = "" }: Props = $props();

  let currentSz = $derived<SizeKey>(sz);
  const lang = getContext<{ value: keyof typeof TEXTS }>("lang");
  const L = $derived(TEXTS[lang.value]);
  let dialogOpen = $state(false);

  $effect(() => {
    currentSz = sz;
  });

  function openDialog() {
    dialogOpen = true;
  }

  function dialogConfirm() {
    dialogOpen = false;
    addToast("success", {
      title: L.toasts.confirmTitle,
      message: L.toasts.confirmMessage,
    });
  }

  function dialogCancel() {
    dialogOpen = false;
    addToast("warning", {
      title: L.toasts.cancelTitle,
      message: L.toasts.cancelMessage,
    });
  }
</script>

<div class={cx("flex flex-wrap gap-3")}>
  <Button variant="primary" onClick={openDialog}>
    {L.snippets.dialog.button}
  </Button>
</div>

<Dialog
  title={L.snippets.dialog.title}
  sz={currentSz}
  open={dialogOpen}
  onConfirm={dialogConfirm}
  onCancel={dialogCancel}
  class={externalClass}
  {message}
/>
