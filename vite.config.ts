// vite.config.ts
import path from "path";
import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

/* === VARIABLES === */
// const repoName = "svelte-comp"; // repo/project name (no leading /)
const appName = "Svelte Components"; // long app name
const shortName = "Components"; // short name (icon/menu)
const description =
  "A comprehensive component library built on Svelte 5 (runes) with design tokens (tailwind), accessibility focus, and TypeScript support";
const themeColor = "#007bff";
const backgroundColor = "#ffffff";
const lang = "en";

// For GitHub Pages: `/${repoName}/`
// For custom domain or local development: "/"
const basePath = "/svelte-comp/"; // Adjust per deployment
const isStorybook = (process.env.npm_lifecycle_event ?? "").includes(
  "storybook",
);

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte(),
    !isStorybook &&
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.png", "apple-touch-icon.png"],
        manifest: {
          name: appName,
          short_name: shortName,
          description,
          start_url: basePath,
          display: "standalone",
          background_color: backgroundColor,
          theme_color: themeColor,
          lang,
          scope: basePath,
          icons: [
            // NOTE: if your icons live in /public/assets/* this is fine.
            // On GH Pages base is applied at runtime, so prefixing with basePath works.
            {
              src: `${basePath}assets/icon-192x192.png`,
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: `${basePath}assets/icon-512x512.png`,
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
          skipWaiting: true,
          clientsClaim: true,
        },
      }),
  ],
  base: basePath,
  build: {
    target: "es2016",
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  // === Vitest integration ===
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, "src/lib"),
      $utils: path.resolve(__dirname, "src/utils"),
    },
    conditions: ["browser"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.ts"],
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage",
    },
  },
});
