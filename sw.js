if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = s), (e.onload = i), document.head.appendChild(e));
        } else ((e = s), importScripts(s), i());
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let c = {};
    const t = (e) => s(e, o),
      l = { module: { uri: o }, exports: c, require: t };
    i[o] = Promise.all(n.map((e) => l[e] || t(e))).then((e) => (r(...e), c));
  };
}
define(["./workbox-8c29f6e4"], function (e) {
  "use strict";
  (self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "registerSW.js", revision: "634057e96e4a625382ac231aab6cc1a9" },
        {
          url: "manifest.webmanifest",
          revision: "caf5c32711f8f765a3063eb70c7cc155",
        },
        { url: "index.js", revision: "a09178dcfa16fb133417863f6f0518d3" },
        { url: "index.html", revision: "0b5e838ed95b7de5c1dd352649a32adf" },
        { url: "index.css", revision: "a00cf8eeaef31284e450251c6765eb94" },
        { url: "assets/icon.svg", revision: null },
        { url: "assets/icon-512x512.png", revision: null },
        { url: "assets/icon-192x192.png", revision: null },
        { url: "assets/favicon.ico", revision: null },
        { url: "assets/apple-touch-icon.png", revision: null },
        {
          url: "manifest.webmanifest",
          revision: "caf5c32711f8f765a3063eb70c7cc155",
        },
      ],
      {},
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html")),
    ));
});
