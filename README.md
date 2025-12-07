# svelte-comp

Lightweight UI component library for **Svelte 5 (Runes API)** styled with **TailwindCSS**.
Zero slots, simple props, themeable with CSS variables.

---

## 📦 Install

```bash
npm install svelte-comp
```

---

## 🔧 Setup TailwindCSS

Install Tailwind and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Enable it in `vite.config.ts` / `vite.config.js`:

```ts
import { defineConfig } from "vite";
import svelte from "@vitejs/plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte() // Must be after tailwindcss()
  ],
});
```

Add global styles in `src/app.css` (or main stylesheet):

```css
@import "tailwindcss";
@import "svelte-comp/styles.css";
```

---

## 📁 Components included

Buttons • Cards • Tabs • Dialog • Menu • Form • Inputs
Select • Checkbox • Radio • Slider • Splitter • Date/Time Pickers
ColorPicker • Toast • Tooltip • Carousel • Pagination • Table
ThemeToggle • CodeView • and more…

Full component list in repository.

---

## 📄 License

MIT License - See [LICENSE](LICENSE.md) for details.

---

## 🔗 Links

GitHub: [https://github.com/MaestroFusion360/svelte-comp](https://github.com/MaestroFusion360/svelte-comp)
