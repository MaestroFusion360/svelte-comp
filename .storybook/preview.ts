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
  return Story();
};

export const decorators = [withDarkClass];

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
  },
};

export default preview;
