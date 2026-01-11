import type { Preview } from "@storybook/svelte-vite";
import type { Decorator } from "@storybook/svelte";
import "../src/app.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

const withDarkClass: Decorator = (Story, ctx) => {
  const isDark = ctx.globals.theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.body.classList.toggle("dark", isDark);
  const bg = "var(--color-bg-page)";
  const text = "var(--color-text-default)";
  document.body.style.backgroundColor = bg;
  document.body.style.color = text;
  const root = document.getElementById("storybook-root");
  if (root) {
    root.classList.toggle("dark", isDark);
    (root as HTMLElement).style.backgroundColor = bg;
    (root as HTMLElement).style.color = text;
  }
  return Story();
};

export const decorators = [withDarkClass];

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "page",
      values: [
        { name: "page", value: "var(--color-bg-page)" },
        { name: "surface", value: "var(--color-bg-surface)" },
      ],
    },
    a11y: { test: "todo" },
  },
};

export default preview;
