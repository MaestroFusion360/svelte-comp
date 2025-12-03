if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/svelte-comp/sw.js", {
      scope: "/svelte-comp/",
    });
  });
}
