// eslint.config.ts
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

export default defineConfig([
  {
    ignores: [
      "dist",
      "build",
      ".svelte-kit",
      "node_modules",
      "storybook-static",
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.vitest },
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,
  ...svelte.configs["flat/recommended"],

  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".svelte"],
      },
    },
  },

  {
    files: ["**/__tests__/**/*.{ts,svelte}", "**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["**/*.{ts,svelte}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  {
    files: ["vite.config.ts", "svelte.config.*", "eslint.config.*"],
    rules: { "@typescript-eslint/triple-slash-reference": "off" },
  },
]);
