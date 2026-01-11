// .storybook/main.ts
import type { StorybookConfig } from "@storybook/svelte-vite";

const enableVitest = process.env.STORYBOOK_VITEST === "true";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    { name: "@storybook/addon-svelte-csf", options: { legacyTemplate: false } },
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    ...(enableVitest ? ["@storybook/addon-vitest"] : []),
  ],
  framework: { name: "@storybook/svelte-vite", options: {} },
};
export default config;
