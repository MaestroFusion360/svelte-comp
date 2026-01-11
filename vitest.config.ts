import { defineConfig, mergeConfig } from "vitest/config";
import baseConfig from "./vite.config";

const isStorybook = process.env.VITEST_STORYBOOK === "true";
const storybookConfigDir = process.env.STORYBOOK_CONFIG_DIR?.replace(/\\/g, "/");

const storybookTestConfig = isStorybook
  ? {
      test: {
        name: storybookConfigDir
          ? `storybook:${storybookConfigDir}`
          : undefined,
        include: ["src/**/*.stories.@(js|ts|svelte)"],
        setupFiles: ["./.storybook/vitest.setup.ts"],
        environment: "jsdom",
      },
    }
  : {};

export default mergeConfig(baseConfig, defineConfig(storybookTestConfig));
