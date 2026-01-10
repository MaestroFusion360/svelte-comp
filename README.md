# svelte-comp

Lightweight UI component library for **Svelte 5 (Runes API)** styled with **TailwindCSS**.
Zero slots, simple props, themeable with CSS variables.

---

## 📦 Install

```bash
npm i svelte-comp
```

---

## 🔧 Setup TailwindCSS

```bash
npm i tailwindcss @tailwindcss/vite
```

`vite.config.ts`:

```ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte() // Must be after tailwindcss()
  ],
});
```

Add to `src/app.css`:

```css
@import "tailwindcss";
@import "svelte-comp/styles.css";
```

---

## 🔧 Setup Prism

```bash
npm i prismjs @types/prismjs
```

---

## 📁 Components included

Accordion • Button • Calendar • Card • Carousel • CheckBox • CodeView • ColorPicker •
DatePicker • Dialog • Field • FilePicker • Form • Hamburger • Menu •
PaginatedCard • Pagination • PrimaryColorSelect • ProgressBar • ProgressCircle •
Radio • SearchInput • Select • Slider • Splitter • Switch • Tabs • Table • ThemeToggle •
TimePicker • Toast • Tooltip

Full component list in repository

---

## 🚀 Quick example

Accordion usage:

```svelte
<script lang="ts">
  import { Accordion } from "svelte-comp";

  const items = [
    { title: "First", content: "This is the first item" },
    { title: "Second", content: "This is the second item" },
    { title: "Third", content: "This is the third item" }
  ];

  const handleToggle = (index: number, open: boolean) => {
    console.log(index, open);
  };
</script>

<Accordion {items} multiple defaultOpen={[0]} sz="md" onToggle={handleToggle} />
```

---

## 📄 License

MIT License

---

## 🔗 Links

GitHub: [https://github.com/MaestroFusion360/svelte-comp](https://github.com/MaestroFusion360/svelte-comp)

Demo: [https://maestrofusion360.github.io/svelte-comp/](https://maestrofusion360.github.io/svelte-comp/)
