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
        { url: "index.js", revision: "c99266e4fb85ff4e82757184dfcd98eb" },
        { url: "index.html", revision: "43727b0a42af605273199c30412167e0" },
        { url: "index.css", revision: "61a1fa447d57e76321200e3a4b412ae8" },
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
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    ));
});
