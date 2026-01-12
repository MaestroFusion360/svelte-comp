<!-- src/lib/InstallPWA.svelte -->
<script lang="ts">
  /**
   * @component InstallPWA
   * @description Installs the app using the browser PWA prompt.
   *
   * @prop alwaysShow {boolean} - Forces the install button to be visible
   * @default false
   *
   * @prop inline {boolean} - Renders the button inline instead of fixed
   * @default false
   *
   * @prop class {string} - Additional button classes
   * @default ""
   *
   * @note Uses the `beforeinstallprompt` event and defers the prompt until user action.
   */
  import Button from "./Button.svelte";
  
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  }

  type Props = {
    alwaysShow?: boolean;
    inline?: boolean;
    class?: string;
  };

  let {
    alwaysShow = false,
    inline = false,
    class: externalClass = "",
  }: Props = $props();

  let deferredPrompt = $state<BeforeInstallPromptEvent | null>(null);
  let showButton = $state(false);

  $effect(() => {
    const handler = (e: Event) => {
      const bipEvent = e as BeforeInstallPromptEvent;
      bipEvent.preventDefault();
      deferredPrompt = bipEvent;
      showButton = true;
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  });
  
  function installPWA() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        showButton = false;
      });
    }
  }
</script>

{#if showButton || alwaysShow}
  <Button
    onClick={installPWA}
    sz="sm"
    class={inline
      ? `z-[1000] flex items-center gap-2.5 ${externalClass}`
      : `fixed bottom-5 right-5 z-[10] flex items-center gap-2.5 ${externalClass}`}
    variant="pill"
  >
    <span class="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M12 15V3" />
        <path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        />
        <path d="m7 10 5 5 5-5" />
      </svg>
      <span>Install App</span>
    </span>
  </Button>
{/if}
