# UI Components Library (Svelte 5 + TailwindCSS)

A compact, modular UI toolkit built on **Svelte 5** with styling powered by **TailwindCSS** and a clean layer of custom CSS variables. The library is engineered around a simple idea: components should be predictable, lightweight and transparent inside. No framework gymnastics, no slot jungles, no global side effects. Every piece stands alone and behaves exactly as written.

The visual system is driven by Tailwind, but core design tokens live in `app.css` as CSS variables. This keeps the theme consistent, avoids scattered magic numbers and makes dark mode trivial: add `.dark` to any parent and the whole UI switches instantly. Styles stay portable, the bundle stays small, and components don’t pull in hidden global utilities.

Svelte 5 gives the library a clean execution model: state is explicit, updates are deterministic, composition is simple, and the output is easy to reason about. Snippets replace legacy slots and avoid wrapper hierarchies that typically bloat component libraries.

The toolkit is built for engineers: no hidden behavior, no opaque abstractions, no vendor lock–just straightforward components you can read, modify and trust. Everything plays nicely with Vite, Storybook, strict TypeScript, unit tests and real-world SPA workflows where clarity and maintainability matter more than magic.

---

- [UI Components Library (Svelte 5 + TailwindCSS)](#ui-components-library-svelte-5--tailwindcss)
  - [✨ Features](#-features)
  - [🚀 Quick Start](#-quick-start)
  - [📁 Project Structure](#-project-structure)
  - [🎨 Global Styles (Theme Tokens)](#-global-styles-theme-tokens)
    - [Theme Tokens - Text Colors](#theme-tokens---text-colors)
    - [Theme Tokens - Backgrounds](#theme-tokens---backgrounds)
    - [Theme Tokens - Interaction States](#theme-tokens---interaction-states)
    - [Theme Tokens - Borders](#theme-tokens---borders)
    - [Theme Tokens - Shadow](#theme-tokens---shadow)
    - [Theme Tokens - Spacing](#theme-tokens---spacing)
    - [Theme Tokens - Typography Families](#theme-tokens---typography-families)
    - [Theme Tokens - Font Weights](#theme-tokens---font-weights)
    - [Theme Tokens - Text Sizes](#theme-tokens---text-sizes)
    - [Theme Tokens - Line Height and Letter Spacing](#theme-tokens---line-height-and-letter-spacing)
    - [Theme Tokens - Radius](#theme-tokens---radius)
    - [Theme Tokens - Transitions](#theme-tokens---transitions)
    - [Theme Tokens - Opacity](#theme-tokens---opacity)
    - [Theme Tokens - Z-Index](#theme-tokens---z-index)
  - [🧱 Components](#-components)
    - [Accordion.svelte](#accordionsvelte)
      - [Props (Accordion)](#props-accordion)
      - [Notes (Accordion)](#notes-accordion)
      - [Usage (Accordion)](#usage-accordion)
    - [Button.svelte](#buttonsvelte)
      - [Props (Button)](#props-button)
      - [Notes (Button)](#notes-button)
      - [Usage (Button)](#usage-button)
    - [Card.svelte](#cardsvelte)
      - [Props (Card)](#props-card)
      - [Notes (Card)](#notes-card)
      - [Usage (Card)](#usage-card)
    - [Carousel.svelte](#carouselsvelte)
      - [Props (Carousel)](#props-carousel)
      - [Notes (Carousel)](#notes-carousel)
      - [Usage (Carousel)](#usage-carousel)
    - [CheckBox.svelte](#checkboxsvelte)
      - [Props (CheckBox)](#props-checkbox)
      - [Notes (CheckBox)](#notes-checkbox)
      - [Usage (CheckBox)](#usage-checkbox)
    - [CodeView.svelte](#codeviewsvelte)
      - [Props (CodeView)](#props-codeview)
      - [Notes (CodeView)](#notes-codeview)
      - [Usage (CodeView)](#usage-codeview)
    - [ColorPicker.svelte](#colorpickersvelte)
      - [Props (ColorPicker)](#props-colorpicker)
      - [Notes (ColorPicker)](#notes-colorpicker)
      - [Usage (ColorPicker)](#usage-colorpicker)
    - [DatePicker.svelte](#datepickersvelte)
      - [Props (DatePicker)](#props-datepicker)
      - [Notes (DatePicker)](#notes-datepicker)
      - [Usage (DatePicker)](#usage-datepicker)
    - [Dialog.svelte](#dialogsvelte)
      - [Props (Dialog)](#props-dialog)
      - [Notes (Dialog)](#notes-dialog)
      - [Usage (Dialog)](#usage-dialog)
    - [Field.svelte](#fieldsvelte)
      - [Props (Field)](#props-field)
      - [Notes (Field)](#notes-field)
      - [Usage (Field)](#usage-field)
    - [FilePicker.svelte](#filepickersvelte)
      - [Props (FilePicker)](#props-filepicker)
      - [Notes (FilePicker)](#notes-filepicker)
      - [Usage (FilePicker)](#usage-filepicker)
    - [Form.svelte](#formsvelte)
      - [Props (Form)](#props-form)
      - [Notes (Form)](#notes-form)
      - [Usage (Form)](#usage-form)
    - [Hamburger.svelte](#hamburgersvelte)
      - [Props (Hamburger)](#props-hamburger)
      - [Notes (Hamburger)](#notes-hamburger)
      - [Usage (Hamburger)](#usage-hamburger)
    - [Menu.svelte](#menusvelte)
      - [Props (Menu)](#props-menu)
      - [Notes (Menu)](#notes-menu)
      - [Usage (Menu)](#usage-menu)
    - [PaginatedCard.svelte](#paginatedcardsvelte)
      - [Props (PaginatedCard)](#props-paginatedcard)
      - [Notes (PaginatedCard)](#notes-paginatedcard)
      - [Usage (PaginatedCard)](#usage-paginatedcard)
    - [Pagination.svelte](#paginationsvelte)
      - [Props (Pagination)](#props-pagination)
      - [Notes (Pagination)](#notes-pagination)
      - [Usage (Pagination)](#usage-pagination)
    - [ProgressBar.svelte](#progressbarsvelte)
      - [Props (ProgressBar)](#props-progressbar)
      - [Notes (ProgressBar)](#notes-progressbar)
      - [Usage (ProgressBar)](#usage-progressbar)
    - [Radio.svelte](#radiosvelte)
      - [Props (Radio)](#props-radio)
      - [Notes (Radio)](#notes-radio)
      - [Usage (Radio)](#usage-radio)
    - [Select.svelte](#selectsvelte)
      - [Props (Select)](#props-select)
      - [Notes (Select)](#notes-select)
      - [Usage (Select)](#usage-select)
    - [Slider.svelte](#slidersvelte)
      - [Props (Slider)](#props-slider)
      - [Notes (Slider)](#notes-slider)
      - [Usage (Slider)](#usage-slider)
    - [Splitter.svelte](#splittersvelte)
      - [Props (Splitter)](#props-splitter)
      - [Notes (Splitter)](#notes-splitter)
      - [Usage (Splitter)](#usage-splitter)
    - [Switch.svelte](#switchsvelte)
      - [Props (Switch)](#props-switch)
      - [Notes (Switch)](#notes-switch)
      - [Usage (Switch)](#usage-switch)
    - [Table.svelte](#tablesvelte)
      - [Props (Table)](#props-table)
      - [Notes (Table)](#notes-table)
      - [Usage (Table)](#usage-table)
    - [Tabs.svelte](#tabssvelte)
      - [Props (Tabs)](#props-tabs)
      - [Notes (Tabs)](#notes-tabs)
      - [Usage (Tabs)](#usage-tabs)
    - [ThemeToggle.svelte](#themetogglesvelte)
      - [Props (ThemeToggle)](#props-themetoggle)
      - [Notes (ThemeToggle)](#notes-themetoggle)
      - [Usage (ThemeToggle)](#usage-themetoggle)
    - [TimePicker.svelte](#timepickersvelte)
      - [Props (TimePicker)](#props-timepicker)
      - [Notes (TimePicker)](#notes-timepicker)
      - [Usage (TimePicker)](#usage-timepicker)
    - [Toast.svelte](#toastsvelte)
      - [Props (Toast)](#props-toast)
      - [Notes (Toast)](#notes-toast)
      - [Usage (Toast)](#usage-toast)
    - [Tooltip.svelte](#tooltipsvelte)
      - [Props (Tooltip)](#props-tooltip)
      - [Notes (Tooltip)](#notes-tooltip)
      - [Usage (Tooltip)](#usage-tooltip)
  - [🎯 Design Principles](#-design-principles)
  - [🧪 Testing \& Development](#-testing--development)
  - [📄 License](#-license)

---

## ✨ Features

- 💡 Built on **Svelte 5 Runes API** (`$state`, `$derived`, `$effect`, `$props`)
- 🎨 Styled with **TailwindCSS v4** using CSS variables
- 🌗 Full **dark mode** support via `.dark` class
- 🧩 Completely **self-contained** components (no global dependencies)
- ⚙️ **Composable API** – props and functional children instead of slots
- 🪶 Minimal bundle size and zero runtime styling overhead
- 🧱 Clear design tokens defined in `src/app.css` for consistent theming
- 🌍 Built-in **internationalization** with support for **English**, **Russian**, and **Spanish**

---

## 🚀 Quick Start

```bash
# clone
git clone https://github.com/MaestroFusion360/svelte-comp.git
cd svelte-comp

# install
npm i

# dev / build / preview
npm run dev
npm run build
npm run preview

```

## 📁 Project Structure

```plaintext
scripts/                   # Scripts
src/
├── demo/                  # Demo components
├── lib/                   # Component library
│   ├── __tests__/         # Component tests
│   ├── types/             # Component types
│   ├── *.svelte           # Component files
│   └── index.ts           # Public exports

├── stories/               # Storybook stories
├── utils/                 # Utility functions
├── App.svelte             # Demo application
├── lang.ts                # Localization
└── app.css                # Theme tokens (CSS variables)
```

## 🎨 Global Styles (Theme Tokens)

All tokens below map 1:1 to the variables in `src/app.css`.
Values under "Dark" are overrides applied inside `.dark { … }`.

All tables below stay unchanged - verified against app.css.

### Theme Tokens - Text Colors

| Token                  | Light                    | Dark                     |
| ---------------------- | ------------------------ | ------------------------ |
| `--color-text-default` | `oklch(15% 0 0deg)`      | `oklch(98% 0 0deg)`      |
| `--color-text-muted`   | `oklch(60% 0 0deg)`      | `oklch(50% 0 0deg)`      |
| `--color-text-danger`  | `oklch(92% 0.05 25deg)`  | `oklch(98% 0.02 25deg)`  |
| `--color-text-success` | `oklch(92% 0.05 150deg)` | `oklch(92% 0.05 150deg)` |
| `--color-text-warning` | `oklch(95% 0.05 90deg)`  | `oklch(95% 0.05 90deg)`  |
| `--color-text-link`    | `oklch(35% 0.3 250deg)`  | `oklch(65% 0.3 250deg)`  |
| `--color-text-red`     | `oklch(50% 0.25 30deg)`  | `oklch(50% 0.25 30deg)`  |

### Theme Tokens - Backgrounds

| Token                  | Light                         | Dark                          |
| ---------------------- | ----------------------------- | ----------------------------- |
| `--color-bg-page`      | `oklch(98% 0 0deg)`           | `oklch(15% 0 0deg)`           |
| `--color-bg-surface`   | `oklch(100% 0 0deg)`          | `oklch(26% 0 0deg)`           |
| `--color-bg-primary`   | `oklch(62.3% 0.214 259.8deg)` | `oklch(62.3% 0.214 259.8deg)` |
| `--color-bg-secondary` | `oklch(80% 0 0deg)`           | `oklch(45% 0 0deg)`           |
| `--color-bg-danger`    | `oklch(60% 0.25 30deg)`       | `oklch(50% 0.25 30deg)`       |
| `--color-bg-success`   | `oklch(55% 0.2 150deg)`       | `oklch(45% 0.2 150deg)`       |
| `--color-bg-warning`   | `oklch(75% 0.2 70deg)`        | `oklch(65% 0.2 70deg)`        |
| `--color-bg-muted`     | `oklch(90% 0 0deg)`           | `oklch(30% 0 0deg)`           |

### Theme Tokens - Interaction States

| Token               | Light               | Dark                |
| ------------------- | ------------------- | ------------------- |
| `--color-bg-hover`  | `oklch(94% 0 0deg)` | `oklch(25% 0 0deg)` |
| `--color-bg-active` | `oklch(88% 0 0deg)` | `oklch(18% 0 0deg)` |

### Theme Tokens - Borders

| Token                    | Light                        | Dark                         |
| ------------------------ | ---------------------------- | ---------------------------- |
| `--border-color-default` | `oklch(85% 0 0deg)`          | `oklch(35% 0 0deg)`          |
| `--border-color-strong`  | `oklch(75% 0 0deg)`          | `oklch(45% 0 0deg)`          |
| `--border-color-focus`   | `oklch(68.7% 0.14 237.5deg)` | `oklch(68.7% 0.14 237.5deg)` |

### Theme Tokens - Shadow

| Token            | Light                     | Dark                     |
| ---------------- | ------------------------- | ------------------------ |
| `--shadow-color` | `oklch(0% 0 0deg / 0.15)` | `oklch(0% 0 0deg / 0.6)` |

### Theme Tokens - Spacing

| Token          | Value     |
| -------------- | --------- |
| `--spacing-xs` | `0.25rem` |
| `--spacing-sm` | `0.5rem`  |
| `--spacing-md` | `1rem`    |
| `--spacing-lg` | `1.5rem`  |
| `--spacing-xl` | `2rem`    |

### Theme Tokens - Typography Families

| Token         | Value                                                    |
| ------------- | -------------------------------------------------------- |
| `--font-sans` | `"Inter", -apple-system, BlinkMacSystemFont, sans-serif` |
| `--font-mono` | `"Fira Code", "Consolas", "Monaco", monospace`           |

### Theme Tokens - Font Weights

| Token                    | Value |
| ------------------------ | ----- |
| `--font-weight-normal`   | `400` |
| `--font-weight-medium`   | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold`     | `700` |

### Theme Tokens - Text Sizes

| Token       | Value      |
| ----------- | ---------- |
| `--text-xs` | `0.75rem`  |
| `--text-sm` | `0.875rem` |
| `--text-md` | `1rem`     |
| `--text-lg` | `1.125rem` |
| `--text-xl` | `1.25rem`  |

### Theme Tokens - Line Height and Letter Spacing

| Token                     | Value     |
| ------------------------- | --------- |
| `--line-height-tight`     | `1.1`     |
| `--line-height-normal`    | `1.4`     |
| `--line-height-relaxed`   | `1.6`     |
| `--letter-spacing-tight`  | `-0.01em` |
| `--letter-spacing-normal` | `0`       |
| `--letter-spacing-wide`   | `0.02em`  |

### Theme Tokens - Radius

| Token           | Value      |
| --------------- | ---------- |
| `--radius-sm`   | `0.125rem` |
| `--radius-md`   | `0.375rem` |
| `--radius-lg`   | `0.5rem`   |
| `--radius-xl`   | `0.75rem`  |
| `--radius-2xl`  | `1rem`     |
| `--radius-full` | `9999px`   |

### Theme Tokens - Transitions

| Token                 | Value         |
| --------------------- | ------------- |
| `--transition-fast`   | `150ms`       |
| `--transition-normal` | `300ms`       |
| `--transition-slow`   | `500ms`       |
| `--timing-default`    | `ease-in-out` |

### Theme Tokens - Opacity

| Token                | Light | Dark   |
| -------------------- | ----- | ------ |
| `--opacity-disabled` | `0.5` | `0.4`  |
| `--opacity-hover`    | `0.9` | `0.85` |
| `--opacity-overlay`  | `0.7` | `0.6`  |

### Theme Tokens - Z-Index

| Token          | Value |
| -------------- | ----- |
| `--z-base`     | `0`   |
| `--z-dropdown` | `10`  |
| `--z-overlay`  | `50`  |
| `--z-modal`    | `100` |
| `--z-toast`    | `200` |

---

## 🧱 Components

### Accordion.svelte

Collapsible content container with flexible sizing and optional multi-open behavior.

#### Props (Accordion)

- `items?: AccordionItem[]` - Array of sections `{ id?, title, content }` (default: `[]`)
- `multiple?: boolean` - Allow more than one section to be open at the same time (default: `false`)
- `defaultOpen?: number[]` - Indexes of initially opened sections (default: `[]`)
- `onToggle?: (index: number, open: boolean) => void` - Callback fired when a section is toggled
- `sz?: SizeKey` - Size variant (xs|sm|md|lg|xl) (default: `md`)
- `class?: string` - Additional classes for the outer container (default: `""`)

#### Notes (Accordion)

- Smooth expand/collapse via CSS grid transitions
- Accessible triggers (button + aria-expanded)
- For full ARIA compliance, pair triggers with aria-controls and hide collapsed panels using aria-hidden or inert
- State is index-based; reordering items will change which panels start open
- AccordionItem.content is a plain string; wrap HTML inside the string or fork the component if you need custom nodes

#### Usage (Accordion)

```svelte
<script lang="ts">
  import Accordion from '$lib/Accordion.svelte';

  const items = [
    { title: 'First', content: 'This is the first item' },
    { title: 'Second', content: 'This is the second item' },
    { title: 'Third', content: 'This is the third item' }
  ];

  const handleToggle = (index: number, open: boolean) => {
    console.log(index, open);
  };
</script>

<Accordion {items} multiple defaultOpen={[0]} sz="md" onToggle={handleToggle} />
```

---

### Button.svelte

Versatile button supporting multiple variants, sizes, loading state, and link behavior.

#### Props (Button)

- `disabled?: boolean` - Disables interaction (default: `false`)
- `children?: Snippet` - Content rendered inside the button
- `onClick?: (e: MouseEvent) => void` - Click handler
- `sz?: SizeKey` - Button size variant (xs|sm|md|lg|xl) (default: `md`)
- `variant?: ButtonVariant` - Visual style preset (primary|secondary|pill|danger|success|warning|ghost|link|info) (default: `primary`)
- `type?: "button" | "submit" | "reset"` - Button type attribute (default: `"button"`)
- `loaded?: boolean` - Shows loading spinner and blocks clicks (default: `false`)
- `link?: string` - Navigates to a URL when clicked
- `class?: string` - Additional classes for the button (default: `""`)

#### Notes (Button)

- `disabled` and `loaded` both prevent click events.
- Automatically shows a centered spinner when `loaded` is `true`.
- Link navigation supports `target` and `rel` attributes.
- Accessible with `aria-disabled` and `aria-busy` states.
- The component uses CSS variables for colors, spacing, and transitions.

#### Usage (Button)

```svelte
<script lang="ts">
  import Button from '$lib/Button.svelte';
</script>

<Button onClick={() => console.log('clicked')}>
  Save
</Button>

<Button variant="danger" loaded>
  Deleting
</Button>

<Button link="/about" variant="link">
  Navigate
</Button>
```

---

### Card.svelte

Flexible layout component with optional `header` and `footer` sections. Supports predefined size variants (xs to xl) through the `sz` prop.

#### Props (Card)

- `header?: Snippet` - Content rendered in the card header
- `footer?: Snippet` - Content rendered in the card footer
- `children?: Snippet` - Main body content of the card
- `class?: string` - Additional CSS classes for the card (default: `""`)
- `sz?: SizeKey` - Padding and typography preset (xs|sm|md|lg|xl) (default: `md`)
- `flushHeader?: boolean` - Removes padding and border from the header (default: `false`)
- `flushFooter?: boolean` - Removes padding and border from the footer (default: `false`)

#### Notes (Card)

- Theme-aware: uses CSS variables (`--color-bg-surface`, `--border-color-default`).
- Rounded corners, subtle shadow, and border for a clean visual hierarchy.
- Padding and typography scale automatically with `sz`.
- Uses `{@render}` snippets instead of legacy `slots`.

#### Usage (Card)

```svelte
<script lang="ts">
  import Card from '$lib/Card.svelte';
</script>

{#snippet header()}
  <h2 class="font-semibold text-center">Card Header</h2>
{/snippet}

{#snippet footer()}
  <p class="text-sm text-center text-[var(--color-text-muted)]">
    © 2025 MaestroFusion360
  </p>
{/snippet}

<Card {header} {footer} sz="md">
  <p>Main content of the card.</p>
</Card>
```

---

### Carousel.svelte

A responsive carousel component to display a sequence of items with optional autoplay, navigation arrows, and dots.

#### Props (Carousel)

- `items?: CarouselItem[]` - Array of carousel items (default: `[]`)
- `sz?: SizeKey` - Size variant controlling text scale and rounding (xs|sm|md|lg|xl) (default: `md`)
- `autoplay?: boolean` - Enables automatic slide rotation (default: `false`)
- `interval?: number` - Interval between slides in milliseconds (default: `5000`)
- `showDots?: boolean` - Shows navigation dots (default: `true`)
- `showArrows?: boolean` - Shows navigation arrows (default: `true`)
- `class?: string` - Additional classes for the carousel container (default: `""`)

#### Notes (Carousel)

- Supports touch gestures (swipe left/right).
- Autoplay pauses automatically when unmounted.
- Uses `Card.svelte` internally for slide structure.
- Navigation dots and arrows appear only if there’s more than one item.
- Accessible via `aria-label`, `aria-current`, and keyboard focus on controls.

#### Usage (Carousel)

```svelte
<script lang="ts">
  import Carousel from '$lib/Carousel.svelte';
  import type { CarouselItem } from '$lib/types';

  const items: CarouselItem[] = [
    { title: 'Item 1', content: 'Content 1', image: 'image1.jpg' },
    { title: 'Item 2', content: 'Content 2', image: 'image2.jpg' }
  ];
</script>

<Carousel {items} autoplay interval={3000} showDots showArrows />
```

---

### CheckBox.svelte

Accessible custom checkbox with `indeterminate` support.

#### Props (CheckBox)

- `label?: string` - Text label shown next to the checkbox
- `sz?: SizeKey` - Size option (xs|sm|md|lg|xl) (default: `md`)
- `variant?: ComponentVariant` - Visual style preset (default|neutral) (default: `default`)
- `indeterminate?: boolean` - Enables the mixed state (default: `false`)
- `checked?: boolean` - Controlled checked state (bindable) (default: `false`)
- `onChange?: (checked: boolean) => void` - Fired when the checkbox toggles
- `class?: string` - Extra classes applied to the root container (default: `""`)
- `invalid?: boolean` - Marks the field invalid and sets `aria-invalid` (default: `false`)
- `describedBy?: string` - ID of helper or error text for accessibility

#### Notes (CheckBox)

- Fully bindable via `bind:checked`; `onChange` receives the final boolean.
- `indeterminate` is applied to the underlying input and reported as `aria-checked="mixed"`.
- Clicking the custom box while `indeterminate` clears it and sets `checked=true`.
- `invalid` maps to `aria-invalid`; `describedBy` maps to `aria-describedby`.
- SVG check and dash are inline; colors adapt per `variant` (`neutral` uses border color).
- Sizes scale the control box (`xs → xl`).

#### Usage (CheckBox)

```svelte
<script lang="ts">
  import CheckBox from '$lib/CheckBox.svelte';
  let agree = false;
</script>

<CheckBox
  label="I agree"
  bind:checked={agree}
  onChange={(v) => (agree = v)}
/>

<CheckBox
  label="Partially selected"
  indeterminate
  variant="neutral"
/>
```

---

### CodeView.svelte

CodeView is a small prism.js powered code block that supports syntax highlighting, optional editing, line numbers and active-line highlighting.

#### Props (CodeView)

- `code?: string` - Code content to render (default: `""`)
- `language?: Language` - Syntax highlighting language (txt|html|css|js|json|python) (default: `"txt"`)
- `title?: string` - Title displayed above the code block (default: `"Code"`)
- `showCopyButton?: boolean` - Shows the copy-to-clipboard button (default: `true`)
- `showLineNumbers?: boolean` - Displays line numbers alongside the code (default: `false`)
- `editable?: boolean` - Enables editable mode with a textarea overlay (default: `false`)
- `activeLine?: boolean` - Highlights the current cursor line in editable mode (default: `false`)
- `sz?: SizeKey` - Size preset affecting spacing and typography (xs|sm|md|lg|xl) (default: `md`)

#### Notes (CodeView)

- Uses Prism for syntax highlighting; HTML/CSS/TXT grammars are bundled by default.
- Editable mode renders a transparent textarea above a highlighted code layer, mirroring real editors.
- Cursor-line highlight is overlaid using CSS variables and scroll-position tracking.
- Line numbers are fully scroll-synchronized with the editor content.
- Readonly mode shows static highlighted code, without textarea.
- Copy button writes the full code string to the clipboard.
- All sizing and spacing scale automatically with the shared `sz` token.
- Supports dark/light themes via existing design-token colors.
- Designed as a low-level editor component, not a full IDE replacement.

#### Usage (CodeView)

```svelte
<script lang="ts">
  import CodeView from '$lib/CodeView.svelte';

  let snippet = `<div class="box">Hello</div>`;
  let editable = true;
</script>

<CodeView
  title="Example"
  language="html"
  bind:code={snippet}
  {editable}
  showLineNumbers
  activeLine
/>
```

---

### ColorPicker.svelte

Accessible wrapper around the native `<input type="color">` with a trigger button and preview card.

#### Props (ColorPicker)

- `value?: string | null` - Selected color value (hex) (default: `null`)
- `label?: string` - Label displayed above the control
- `placeholder?: string` - Placeholder text when no color is chosen
- `disabled?: boolean` - Disables all interactions (default: `false`)
- `clearable?: boolean` - Shows a clear/reset button (default: `true`)
- `onChange?: (value: string | null) => void` - Fired when the color changes
- `class?: string` - Additional classes for the wrapper element (default: `""`)

#### Notes (ColorPicker)

- Uses the new `HTMLInputElement.showPicker()` API when available; falls back to focusing/clicking the hidden input.
- Keeps the hidden color input in sync with controlled `value` through `$effect`.
- Preview swatch mirrors the current color and announces via `aria-label`.
- `clearable=false` hides the clear button; when `disabled`, pointer/keyboard handlers are skipped.

#### Usage (ColorPicker)

```svelte
<script lang="ts">
  import ColorPicker from '$lib/ColorPicker.svelte';
  let accent: string | null = null;
</script>

<ColorPicker
  label="Brand color"
  placeholder="Pick a hue"
  bind:value={accent}
/>

<p>Preview: {accent ?? 'No color selected'}</p>
```

---

### DatePicker.svelte

Button-driven date selector that formats the chosen value and supports min/max limits.

#### Props (DatePicker)

- `value?: string | null` - Selected date value (ISO `YYYY-MM-DD`) (default: `null`)
- `min?: string` - Minimum selectable date (ISO `YYYY-MM-DD`)
- `max?: string` - Maximum selectable date (ISO `YYYY-MM-DD`)
- `label?: string` - Label text displayed above the picker
- `placeholder?: string` - Placeholder shown when no date is selected
- `locale?: string` - Locale used for formatting
- `formatOptions?: Intl.DateTimeFormatOptions` - Custom date formatting options
- `disabled?: boolean` - Disables all interactions (default: `false`)
- `clearable?: boolean` - Shows a clear button to reset the value (default: `true`)
- `onChange?: (value: string | null) => void` - Fired when the date changes
- `class?: string` - Additional classes for the wrapper element (default: `""`)

#### Notes (DatePicker)

- Wraps a hidden `<input type="date">` so native date-pickers, keyboard, and validation work automatically.
- `showPicker()` is used when available for a consistent trigger; fallback is focus + click.
- Formatter uses `Intl.DateTimeFormat` (with `locale`/`formatOptions`) and gracefully falls back to `toLocaleDateString()`.
- `clearable` resets the underlying input value and dispatches `onChange(null)`.
- Preview card includes `aria-live="polite"` to announce updated dates.

#### Usage (DatePicker)

```svelte
<script lang="ts">
  import DatePicker from '$lib/DatePicker.svelte';
  let launchDate: string | null = null;
</script>

<DatePicker
  label="Launch date"
  min="2025-01-01"
  max="2025-12-31"
  bind:value={launchDate}
/>

<p>Scheduled for: {launchDate ?? 'TBD'}</p>
```

---

### Dialog.svelte

Modal dialog for confirmations or alerts.

#### Props (Dialog)

- `open?: boolean` - Controls dialog visibility (default: `false`)
- `title?: string` - Dialog title used for labeling (default: `""`)
- `message?: string` - Simple message content (default: `""`)
- `onConfirm?: () => void` - Fired when the confirm action is triggered (default: `() => {}`)
- `onCancel?: () => void` - Fired when the cancel action is triggered (default: `() => {}`)
- `onClose?: () => void` - Fired after confirm or cancel to centralize cleanup (default: `() => {}`)
- `modal?: boolean` - Enables modal mode with overlay and focus trap (default: `true`)
- `class?: string` - Extra classes applied to the dialog container (default: `""`)
- `sz?: SizeKey` - Size preset for padding and text (xs|sm|md|lg|xl) (default: `md`)
- `children?: Snippet` - Custom dialog body content

#### Notes (Dialog)

- In modal mode the first interactive element is focused automatically and focus is trapped inside the dialog; `Escape` triggers cancel.
- `onClose` runs after `onConfirm`/`onCancel`, so you can centralize cleanup.
- Non-modal mode (`modal=false`) renders a floating panel without overlay or focus trap.
- Buttons are labeled "OK" and "Cancel" and aren't customizable via props; provide `children` for full custom UI.
- Set a meaningful `title` for accessibility; it's used as the dialog's `aria-label`.
- `sz` adjusts both dialog padding and text sizes to match the rest of the system tokens.

#### Usage (Dialog)

```svelte
<script lang="ts">
  import Dialog from '$lib/Dialog.svelte';
  import Button from '$lib/Button.svelte';
  let open = false;
</script>

<Button onClick={() => (open = true)}>
  Delete
</Button>

<Dialog
  {open}
  sz="sm"
  title="Delete item"
  message="This action cannot be undone."
  onConfirm={() => { open = false; }}
  onCancel={() => (open = false)}
  onClose={() => (open = false)}
/>
```

---

### Field.svelte

Unified input/textarea field with label, leading/trailing content, clear button, and validation.

#### Props (Field)

- `as?: "input" | "textarea"` - Underlying element to render (default: `"input"`)
- `label?: string` - Label text rendered above the field
- `sz?: SizeKey` - Size preset for spacing and typography (xs|sm|md|lg|xl) (default: `md`)
- `variant?: FieldVariant` - Visual style variant (default|filled|neutral) (default: `default`)
- `clearable?: boolean` - Shows a clear button for text inputs (default: `true`)
- `rows?: number` - Row count for textarea mode (default: `3`)
- `parseNumber?: boolean` - Coerces numeric input when possible (default: `false`)
- `leading?: Snippet | string` - Leading content rendered inside the field
- `trailing?: Snippet | string` - Trailing content rendered inside the field
- `onChange?: (val: string | number) => void` - Fired when the value changes
- `value?: string | number` - Controlled field value (bindable) (default: `""`)
- `class?: string` - Additional classes applied to the root label (default: `""`)
- `id?: string` - Custom id used for label and input linkage
- `type?: string` - Input type when `as="input"`
- `invalid?: boolean` - Marks the field invalid and sets `aria-invalid` (default: `false`)
- `describedBy?: string` - ID of helper or error text for accessibility

#### Notes (Field)

- `bind:value` is supported; `onChange` receives cast value (`number` when `parseNumber` succeeds, otherwise `string` or `""`).
- Clear button appears only for text inputs (not for `type="number"`) and sets value to an empty string.
- Automatic padding for leading/trailing content; label is linked via an auto-generated `id`.
- Accessibility: sets `aria-invalid`, `aria-describedby`; number inputs also set `inputmode="decimal"`.

#### Usage (Field)

```svelte
<script lang="ts">
  import Field from '$lib/Field.svelte';
  let q = '';
  let description = '';
  let amount: number | '' = '';
</script>

<Field label="Search" placeholder="Type here…" bind:value={q} />

<Field
  as="textarea"
  label="Description"
  rows={4}
  bind:value={description}
/>

<!-- Leading as a string -->
<Field
  label="Amount"
  type="number"
  parseNumber
  bind:value={amount}
  leading="$"
/>

<!-- Trailing as a snippet -->
{#snippet percent()}
  %
{/snippet}
<Field
  label="Discount"
  trailing={percent}
/>
```

---

### FilePicker.svelte

Lightweight file selector with click support and drag-and-drop. Internally uses a hidden `<input type="file">` plus a drop zone.

#### Props (FilePicker)

- `accept?: string` - Accepted file types (default: `"*\\/*"`)
- `multiple?: boolean` - Allows selecting multiple files (default: `false`)
- `label?: string` - Button label; falls back to localized text
- `disabled?: boolean` - Disables all interactions (default: `false`)
- `clearable?: boolean` - Shows a clear button to reset selection (default: `true`)
- `placeholder?: string` - Placeholder text for the drop zone
- `value?: FileList | null` - Controlled selected files (bindable) (default: `null`)
- `onFilesSelected?: (files: FileList | null) => void` - Fired when files are chosen
- `onError?: (error: string) => void` - Fired on validation errors
- `class?: string` - Additional classes for the wrapper (default: `""`)

#### Notes (FilePicker)

- The entire area is clickable and supports drag-and-drop.
- After a selection, the underlying input resets its value, so choosing the same file twice still triggers updates.
- `accept` does not apply to dropped files, only to the picker UI; validate files inside `onFilesSelected`.
- When `clearable=true`, the user can clear selected files and the callback receives `null`.
- When `disabled=true`, clicks, drag events, focus, and keyboard input are blocked.

#### Usage (FilePicker)

```svelte
<script lang="ts">
  import FilePicker from '$lib/FilePicker.svelte';

  function handleFiles(files: FileList | null) {
    if (!files) {
      console.log('Cleared');
      return;
    }
    const names = Array.from(files).map(f => f.name);
    console.log('Selected:', names);
  }
</script>

<FilePicker
  accept="image/*,.pdf"
  multiple
  label="Upload files"
  onFilesSelected={handleFiles}
/>
```

---

### Form.svelte

Declarative, schema-driven form generator. Renders `Field`, `Select`, and `CheckBox` based on `FieldSchema`. Supports validation, controlled state, and an external API via `expose`.

#### Props (Form)

- `schema?: FieldSchema[]` - Field configuration for the generated form
- `value?: FormValues` - Initial form data (default: `{}`)
- `rowGap?: number | SizeKey` - Vertical spacing between fields (default: `"md"`)
- `validateOn?: "input" | "blur" | "submit"` - When validation should run (default: `"blur"`)
- `onChange?: (form: FormValues) => void` - Fired when form values change
- `onChange?: (form: FormValues) => void` - Fired when form values change
- `formId?: string` - Stable identifier for form elements
- `expose?: (api: FormApi) => void` - Exposes imperative Form API
- `labelAlign?: AlignText` - Alignment for labels (left|center|right) (default: `"left"`)
- `labelWeight?: LabelWeight` - Font weight for labels (normal|medium|semibold|bold) (default: `"medium"`)
- `labelSize?: SizeKey` - Size preset for labels (xs|sm|md|lg|xl) (default: `"md"`)
- `compact?: boolean` - Enables denser sizing across controls (default: `false`)

#### Notes (Form)

- Initial value for each field: `value[name]` → `schema.default` → `''` (or `false` for checkboxes).
- `validateOn='input'|'blur'|'submit'` controls when validators run; built-in checks: `required`, `number`, and `email` regex.
- `when(form)` hides a field dynamically; hidden fields are skipped during validation.
- `Select` options are coerced to strings for the underlying control; provide string values if you rely on strict equality.
- Errors are rendered with stable `id`s and wired via `aria-describedby`; `invalid` flags are passed to inputs.
- `expose` provides `{ reset, submit, validate, getData }`; `validate` returns `Promise<boolean>`.
- `compact` reduces control sizes (`xs→xs`, `sm→xs`, `md→sm`, `lg→md`, `xl→lg`) and centers labels where applicable.

#### Usage (Form)

```svelte
<script lang="ts">
  import Form from '$lib/Form.svelte';
  import type { FieldSchema } from '$lib/types';

  const schema: FieldSchema[] = [
    { name: 'email', type: 'email', label: 'Email', required: true,
      validators: [(v) => (!v ? 'Required' : null)] },
    { name: 'password', type: 'password', label: 'Password', required: true },
    { name: 'remember', type: 'checkbox', label: 'Remember me', default: true },
    { name: 'plan', type: 'select', label: 'Plan',
      options: [{ value: 'free', label: 'Free' }, { value: 'pro', label: 'Pro' }], default: 'free' },
    { name: 'bio', type: 'textarea', label: 'Bio', rows: 3, when: (f) => f.plan === 'pro' }
  ];

  let api: { submit: () => void } | undefined;
  const grabExpose = (x: any) => { api = x; };
</script>

<Form
  {schema}
  onSubmit={(form) => console.log(form)}
  onChange={(form) => console.debug(form)}
  expose={grabExpose}
/>

<Button onClick={() => api?.submit()}>
  Submit
</Button>
```

---

### Hamburger.svelte

Off-canvas navigation drawer controlled by a floating hamburger button.

#### Props (Hamburger)

- `menuItems?: Item[]` - Menu entries rendered in the drawer (default: `[]`)
- `activeItem?: string` - ID of the currently active item (default: `""`)
- `header?: Snippet` - Custom content rendered above the menu
- `footer?: Snippet` - Custom content rendered below the menu
- `closeOnSelect?: boolean` - Automatically closes after selecting an item (default: `true`)
- `onSelect?: (id: string) => void` - Fired when a menu item is chosen
- `onOpenChange?: (v: boolean) => void` - Fired when open state changes in controlled mode
- `pressed?: boolean` - Controlled open state
- `class?: string` - Extra classes applied to the trigger button (default: `""`)
- `width?: number | string` - Drawer width (px or CSS value) (default: `300`)

#### Notes (Hamburger)

- Clicking outside the panel or pressing `Escape` closes the drawer.
- Focus moves to the first interactive element inside the panel, is trapped while open, and returns to the trigger on close.
- In controlled mode (`pressed` is defined), state changes are requested via `onOpenChange(open)`.
- When `menuItems` is empty, a “No items” placeholder is shown.
- The drawer uses `role=\"dialog\"` and `aria-modal=\"true\"`; the trigger reflects state via `aria-expanded`.

#### Usage (Hamburger)

```svelte
<script lang="ts">
  import Hamburger from '$lib/Hamburger.svelte';

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'settings', label: 'Settings' }
  ];

  const header = () => 'Main navigation';
  const footer = () => '© 2025 Widgets Inc.';
</script>

<Hamburger
  {menuItems}
  activeItem="home"
  header={header}
  footer={footer}
  onSelect={(id) => console.log('navigate', id)}
/>
```

---

### Menu.svelte

A dropdown menu bar component with hover and click interactions.

#### Props (Menu)

- `menus?: MenuItem[]` - Menu definitions with actions (default: `[]`)
- `onSelect?: (menu: string, action: MenuAction) => void` - Fired when an action is chosen (default: `() => {}`)
- `class?: string` - Extra classes applied to the menu bar (default: `""`)
- `sz?: SizeKey` - Size preset for spacing and text (xs|sm|md|lg|xl) (default: `sm`)

#### Notes (Menu)

- Fully keyboard-safe for focus and mouse interactions.
- Submenus open on hover when another menu is already open.
- Actions that match size keys (`xs`, `sm`, `md`, `lg`, `xl`) are automatically highlighted to reflect the current UI size.
- Uses the same CSS variable architecture as Tabs for consistent look across components.
- No slots; fully controlled via the `menus` structure and `onSelect`.

#### Usage (Menu)

```svelte
<script lang="ts">
  import Menu from '$lib/Menu.svelte';
  import type { MenuItem } from '$lib/types';

  const menus: MenuItem[] = [
    {
      name: 'File',
      actions: [
        'New',
        'Open',
        { id: 'save', label: 'Save' },
        { id: 'sm', label: 'Small UI' }
      ]
    },
    {
      name: 'Edit',
      actions: ['Undo', 'Redo', 'Copy', 'Paste']
    }
  ];

  function handleSelect(menu: string, action: string) {
    console.log('Selected:', menu, action);
  }
</script>

<Menu
  {menus}
  sz="sm"
  onSelect={handleSelect}
/>
```

---

### PaginatedCard.svelte

A card component with built-in pagination. Renders items page by page inside a `Card` and appends `Pagination` in the footer.

#### Props (PaginatedCard)

- `items?: Snippet[]` - Array of renderable snippets for each item (default: `[]`)
- `itemsPerPage?: number` - Items per page (must be >= 1) (default: `1`)
- `header?: Snippet` - Optional `Card` header content
- `footer?: Snippet` - Custom footer content shown above pagination
- `class?: string` - Extra classes passed to the underlying `Card` (default: `""`)

#### Notes (PaginatedCard)

- Maintains internal `currentPage` state (starts at `1`).
- `totalPages` is clamped to at least `1`; empty `items` still yields one page.
- Pagination is always visible; your `footer` snippet renders before it.
- Uses `Pagination.svelte` internally with `{ currentPage, totalPages, onPageChange }`.
- `itemsPerPage` must be `>= 1`; smaller values are not supported.

#### Usage (PaginatedCard)

```svelte
<script lang="ts">
  import PaginatedCard from '$lib/PaginatedCard.svelte';
  import type { Snippet } from 'svelte';

  const items: Snippet[] = Array.from({ length: 7 }, (_, i) => () => `Item ${i + 1}`);

  const header: Snippet = () => 'Item list';
  const footer: Snippet = () => 'Total: 7';
</script>

<PaginatedCard {items} {header} {footer} itemsPerPage={3} class="max-w-xl" />
```

---

### Pagination.svelte

Compact pagination component for table or list navigation.

#### Props (Pagination)

- `currentPage?: number` - The active page number (1-based)
- `totalPages?: number` - Total number of pages available
- `onPageChange?: (page: number) => void` - Fired when a page button is clicked
- `class?: string` - Custom classes applied to the pagination wrapper (default: `""`)

#### Notes (Pagination)

- Displays “Page X of Y” and numbered page buttons.
- Prev/next buttons are disabled at the edges.
- Shows up to 3 numbered buttons centered around the current page.
- Uses `aria-current=\"page\"` on the active page for accessibility.
- Buttons are native `<button>` elements for keyboard support.

#### Usage (Pagination)

```svelte
<script lang="ts">
  import Pagination from '$lib/Pagination.svelte';

  let currentPage = 1;
  const totalPages = 10;

  function handlePageChange(page: number) {
    currentPage = page;
  }
</script>

<Pagination
  {currentPage}
  {totalPages}
  onPageChange={handlePageChange}
/>
```

---

### ProgressBar.svelte

A simple and accessible progress bar component that visually represents task completion.

#### Props (ProgressBar)

- `value?: number` - Current progress value from 0 to 100 (default: `0`)
- `indeterminate?: boolean` - Enables the animated indeterminate state (default: `false`)
- `sz?: SizeKey` - Controls the bar height (xs|sm|md|lg|xl) (default: `md`)
- `variant?: ComponentVariant` - Visual style of the progress bar (default|neutral) (default: `default`)
- `class?: string` - Additional CSS classes for the wrapper element (default: `""`)
- `label?: string` - Optional text label displayed above the bar (default: `""`)
- `disabled?: boolean` - Applies a muted inactive visual style (default: `false`)

#### Notes (ProgressBar)

- Indeterminate animation for unknown progress.
- Auto-clamping between 0 and 100.
- Adaptive height based on size.
- Theming support via CSS variables.
- Fully accessible with proper `aria` roles.
- No invalid ARIA attributes.

#### Usage (ProgressBar)

```svelte
<script lang="ts">
  import ProgressBar from '$lib/ProgressBar.svelte';
  let progress = 65;
</script>

<ProgressBar value={progress} label="Loading..." />
<ProgressBar value={progress} variant="neutral" disabled />
<ProgressBar indeterminate label="Syncing..." />
```

---

### Radio.svelte

Single choice input with optional label, custom sizing and theme variants.

#### Props (Radio)

- `label?: string` - Text label shown next to the radio
- `children?: Snippet` - Custom label content
- `sz?: SizeKey` - Size option (xs|sm|md|lg|xl) (default: `md`)
- `variant?: ComponentVariant` - Visual style preset (default|neutral) (default: `default`)
- `checked?: boolean` - Controlled checked state (default: `false`)
- `group?: unknown` - Native radio group binding (`bind:group`)
- `onChange?: (checked: boolean) => void` - Fired when the radio toggles
- `class?: string` - Extra classes applied to the root container (default: `""`)
- `describedBy?: string` - ID of helper or error text for accessibility
- `value?: string` - Radio value (default: `"on"`)

#### Notes (Radio)

- Fully supports native radio grouping through `bind:group`
- Works as a controlled component when `checked` and `onChange` are used together
- `children` takes priority over `label`
- Size and variant affect circle size, dot size and colors
- Hidden native input is focusable and exposes full accessibility attributes
- Uses data-state attributes to enable custom styling

#### Usage (Radio)

```svelte
<script lang="ts">
  import { Radio } from '$lib';

  let fruit = $state('banana');
</script>

<div class="flex flex-col gap-2">
  <Radio value="apple" bind:group={fruit}>Apple</Radio>
  <Radio value="banana" bind:group={fruit}>Banana</Radio>
  <Radio value="cherry" bind:group={fruit}>Cherry</Radio>
</div>
```

---

### Select.svelte

Accessible custom combobox with label, portal listbox, hidden form input, and configurable sizing.

#### Props (Select)

- `label?: string` - Field label rendered above the trigger
- `help?: string` - Optional helper copy rendered below the field
- `placeholder?: string` - Text shown when nothing is selected
- `options?: SelectOption[]` - Available options (`{ label, value, disabled? }`) (default: `[]`)
- `sz?: SizeKey` - Sizing preset (xs|sm|md|lg|xl) (default: `md`)
- `variant?: FieldVariant` - Surface style preset (default|filled|neutral) (default: `default`)
- `value?: string` - Selected value (bindable) (default: `""`)
- `onChange?: (val: string) => void` - Fired when a new option is chosen
- `class?: string` - Extra classes for the root `<label>` (default: `""`)
- `id?: string` - Custom id for the field
- `invalid?: boolean` - Shows invalid state and sets `aria-invalid` (default: `false`)
- `describedBy?: string` - Links to helper or error text ids
- `open?: boolean` - Controlled dropdown visibility (bindable) (default: `false`)
- `maxHeight?: number` - Max dropdown height before scrolling

#### Notes (Select)

- Fully keyboard navigable (`Arrow`, `Home/End`, `Enter/Space`, looped `Tab`) with roving tabindex buttons inside a listbox.
- Dropdown is portalled with `position: fixed` math to stay aligned with the trigger (including scroll/resize listeners).
- Hidden `<input type=\"hidden\">` mirrors `bind:value` so forms and contextual `BaseField` integrations keep working.
- Disabled options remain focus-skippable and never call `onChange`.
- Size + variant tokens control both trigger padding and icon scale through the same Tailwind-driven design tokens.

#### Usage (Select)

```svelte
<script lang="ts">
  import Select from '$lib/Select.svelte';

  const flavorOptions = [
    { label: 'Vanilla', value: 'vanilla' },
    { label: 'Chocolate', value: 'choco' },
    { label: 'Coming Soon', value: 'mint', disabled: true }
  ];

  let flavor = '';
  let isMenuOpen = false;
</script>

<Select
  label="Favorite flavor"
  placeholder="Pick one"
  help="Disabled items mean we ran out :("
  options={flavorOptions}
  bind:value={flavor}
  bind:open={isMenuOpen}
  variant="filled"
  onChange={(val) => console.log('selected', val)}
/>
```

---

### Slider.svelte

A customizable slider component for selecting a value from a range.

#### Props (Slider)

- `value?: number` - The current value (bindable) (default: `0`)
- `min?: number` - Minimum value (default: `0`)
- `max?: number` - Maximum value (default: `100`)
- `step?: number` - Step size (default: `1`)
- `sz?: SizeKey` - Slider size (xs|sm|md|lg|xl) (default: `md`)
- `variant?: ComponentVariant` - Color variant (default|neutral) (default: `default`)
- `disabled?: boolean` - Disable the slider (default: `false`)
- `showValue?: boolean` - Show the current value (default: `false`)
- `onInput?: (value: number) => void` - Fires on value change
- `class?: string` - Custom wrapper classes (default: `""`)

#### Notes (Slider)

- Works with both keyboard and mouse.
- Size and variant control appearance.
- Uses proper ARIA attributes.

#### Usage (Slider)

```svelte
<script lang="ts">
  import Slider from '$lib/Slider.svelte';
  let value = 50;
</script>

<Slider bind:value={value} min={0} max={100} step={5} showValue />
```

---

### Splitter.svelte

Resizable split panel container with horizontal or vertical orientation.

#### Props (Splitter)

- `direction?: 'horizontal' | 'vertical'` - Split orientation (horizontal|vertical) (default: `horizontal`)
- `initialSize?: number` - Initial size of the first panel as percentage (default: `30`)
- `dividerSize?: number` - Width/height of the divider handle in pixels (default: `4`)
- `minSize?: number` - Minimum size of the first panel as percentage (default: `10`)
- `maxSize?: number` - Maximum size of the first panel as percentage (default: `90`)
- `first?: Snippet` - Content for the first panel
- `second?: Snippet` - Content for the second panel

#### Notes (Splitter)

- Uses pointer events for smooth dragging with proper event delegation
- Responsive - automatically adjusts to container resize
- Accessible with proper cursor hints and hover states
- No wrapper elements - panels render directly for clean DOM structure
- Supports any content type through snippet rendering

#### Usage (Splitter)

```svelte
<script lang="ts">
  import Splitter from "$lib/Splitter.svelte";
</script>

{#snippet first()}
  <div
    class="p-[var(--spacing-lg)] bg-[var(--color-bg-surface)] text-[var(--color-text-default)] h-full"
  >
    First
  </div>
{/snippet}

{#snippet second()}
  <div
    class="p-[var(--spacing-lg)] bg-[var(--color-bg-surface)] text-[var(--color-text-default)] h-full"
  >
    Second
  </div>
{/snippet}

<div
  class="
    fixed inset-0
    bg-[var(--color-bg-page)]
    flex items-center justify-center
  "
>
  <div class="w-[80vw] h-[80vh] flex flex-col">
    <!-- Horizontal -->
    <div class="h-[45%] border-[var(--border-color-default)] rounded-[var(--radius-xl)] overflow-hidden mb-[var(--spacing-xl)]">
      <Splitter
        direction="horizontal"
        initialSize={50}
        dividerSize={8}
        minSize={15}
        maxSize={85}
        {first}
        {second}
      />
    </div>

    <!-- Vertical -->
    <div class="h-[55%] border-[var(--border-color-default)] rounded-[var(--radius-xl)] overflow-hidden">
      <Splitter
        direction="vertical"
        initialSize={40}
        dividerSize={8}
        minSize={15}
        maxSize={85}
        {first}
        {second}
      />
    </div>
  </div>
</div>
```

---

### Switch.svelte

A compact toggle switch component built on top of a native `<input type="checkbox">`. Supports optional labels around the control and works naturally with `bind:checked`.

#### Props (Switch)

- `sz?: SizeKey` - Size preset for the control (xs|sm|md|lg|xl) (default: `md`)
- `checked?: boolean` - Current state (bindable) (default: `false`)
- `leftLabel?: string` - Optional label rendered on the left side
- `rightLabel?: string` - Optional label rendered on the right side
- `topLabel?: string` - Optional label placed above the switch
- `onChange?: (v: boolean) => void` - Fired on toggle with the new value
- `class?: string` - External wrapper classes (default: `""`)

#### Notes (Switch)

- Built over a real checkbox so browser accessibility comes for free: keyboard (Space/Enter), focus ring, and screen reader semantics.
- Labels do not affect the actual checkbox hitbox, but the whole area is clickable if wrapped correctly.
- Size preset adjusts track width, knob size, and spacing.
- Reflects `disabled` by dimming visuals and removing pointer events.
- The component keeps no internal state besides the bound `checked` value, so it's predictable in forms and controlled UI.

#### Usage (Switch)

```svelte
<script lang="ts">
  import Switch from '$lib/Switch.svelte';
  let enabled = false;
</script>

<Switch
  topLabel="Notifications"
  leftLabel="Off"
  rightLabel="On"
  bind:checked={enabled}
  onChange={(v) => (enabled = v)}
/>

<p>Current state: {enabled ? 'on' : 'off'}</p>
```

---

### Table.svelte

Sortable table with optional zebra striping, sticky header, and external pagination. Compact variants (`dense`, `list`) shrink horizontally to fit content.

#### Props (Table)

- `columns?: readonly Column<T>[]` - Column definitions with labels and keys (default: `[]`)
- `rows?: readonly T[]` - Row data objects (default: `[]`)
- `class?: string` - Custom classes for the table container (default: `""`)
- `variant?: TableVariant` - Visual style variant (default|dense|list|noBorder|noTitle|zebra) (default: `default`)
- `stickyHeader?: boolean` - Makes the header row sticky (default: `false`)
- `sz?: SizeKey` - Size preset for spacing and text (xs|sm|md|lg|xl) (default: `md`)
- `sz?: SizeKey` - Size preset for spacing and text (xs|sm|md|lg|xl) (default: `md`)

#### Notes (Table)

- Click a column header to toggle ascending or descending.
- In `dense` and `list` the table uses content width (`inline-table` + `w-fit`).
- Column `width` is applied only in non-compact variants (`default`, `zebra`, `noBorder`, `noTitle`).
- `list` hides the header row.
- Integrates with `Pagination.svelte` via the `pagination` prop.
- Works in dark mode and supports keyboard sorting (Enter or Space on headers).

#### Usage (Table)

```svelte
<script lang="ts">
  import Table from '$lib/Table.svelte';
  import type { Column } from '$lib/types';

  type Row = { name: string; age: number; city: string };

  const columns: Column<Row>[] = [
    { key: 'name', label: 'Name', align: 'start' },
    { key: 'age', label: 'Age', align: 'end', width: '80px' },
    { key: 'city', label: 'City', align: 'start' }
  ];

  const rows: Row[] = [
    { name: 'Ada', age: 36, city: 'London' },
    { name: 'Linus', age: 55, city: 'Helsinki' }
  ];
</script>

<Table {columns} {rows} variant="zebra" stickyHeader />

<!-- Compact list variant -->
<Table {columns} {rows} variant="list" />
```

---

### Tabs.svelte

A tab navigation component for switching between sections of content.

#### Props (Tabs)

- `tabs?: TabItem[]` - Array of tab items with `id` and `label` (default: `[]`)
- `activeTab?: string` - The currently active tab id (default: `""`)
- `sz?: SizeKey` - Size preset for tabs and content (xs|sm|md|lg|xl) (default: `md`)
- `variant?: TabsVariant` - Visual style of the tabs (default|pills|underline) (default: `default`)
- `fitted?: boolean` - Stretches tabs to fill available width (default: `false`)
- `onChange?: (tabId: string) => void` - Callback when the active tab changes
- `class?: string` - Custom class for the container (default: `""`)
- `children?: Snippet` - Content panel rendered below the tabs

#### Notes (Tabs)

- Supports multiple visual styles (`default`, `pills`, `underline`).
- Fully accessible with keyboard navigation (Arrow keys, Home, End, Enter).
- Automatically adapts to container width.
- The panel content (`children`) scales visually with the selected tab size.

#### Usage (Tabs)

```svelte
<script lang="ts">
  import Tabs from '$lib/Tabs.svelte';
  import type { TabsVariant, SizeKey } from '$lib/types';

  let activeDefault = 't1';
  let sz: SizeKey = 'md';
  let variant: TabsVariant = 'default';
</script>

<Tabs
  tabs={[
    { id: 't1', label: 'One' },
    { id: 't2', label: 'Two' },
    { id: 't3', label: 'Three' },
  ]}
  {sz}
  {variant}
  activeTab={activeDefault}
  onChange={(id) => (activeDefault = id)}
>
  {#if activeDefault === 't1'}
    <div class="py-8">One content</div>
  {/if}
  {#if activeDefault === 't2'}
    <div class="py-8">Two content</div>
  {/if}
  {#if activeDefault === 't3'}
    <div class="py-8">Three content</div>
  {/if}
</Tabs>
```

---

### ThemeToggle.svelte

Lightweight theme switcher to toggle between light and dark mode. Applies or removes the `.dark` class on the document root.

#### Props (ThemeToggle)

- `disabled?: boolean` - Disable the ThemeToggle
- `class?: string` - Optional external class name (overrides default position) (default: `""`)
- `sz?: SizeKey` - Adjusts button size and icon scale (xs|sm|md|lg|xl) (default: `md`)
- `type?: string` - Button type attribute (default: `"button"`)

#### Notes (ThemeToggle)

- Uses `$effect` to sync the `dark` class on `<html>`.
- Default position is `fixed top-4 right-4`, unless overridden by a custom `class`.
- Styled entirely through CSS variables; fully theme-aware.
- Smooth transition between sun and moon icons.

#### Usage (ThemeToggle)

```svelte
<script lang="ts">
  import ThemeToggle from '$lib/ThemeToggle.svelte';
</script>

<!-- Default (top-right) -->
<ThemeToggle />

<!-- Custom position and size -->
<ThemeToggle class="fixed bottom-4 right-4 z-50" sz="lg" />
```

**Behavior:**
Click to switch between light and dark modes.
The button updates its icon automatically (sun in dark mode, moon in light mode).

---

### TimePicker.svelte

Simple time selector that stores values in ISO `HH:MM` format. Supports a fixed step and two display systems.

#### Props (TimePicker)

- `value?: string | null` - Stored time in ISO `HH:MM` (bindable) (default: `null`)
- `step?: number` - Step in seconds (default: `60`)
- `label?: string` - Label text
- `placeholder?: string` - Placeholder when value is null
- `disabled?: boolean` - Disable all interactions (default: `false`)
- `clearable?: boolean` - Show the clear button (default: `true`)
- `initialSystem?: "iso" | "english"` - Picker mode (24h vs 12h) (default: `"iso"`)
- `onChange?: (value: string | null) => void` - Fired when value changes
- `class?: string` - Wrapper classes (default: `""`)

#### Notes (TimePicker)

- ISO mode uses 24-hour time; English mode uses 12-hour time with AM/PM
- The stored value is always ISO (`HH:MM`)
- `step` defines the minute grid (derived from seconds)
- No locale or date-formatting APIs are used internally

#### Usage (TimePicker)

```svelte
<script lang="ts">
  import TimePicker from '$lib/TimePicker.svelte';
  let time: string | null = null;
</script>

<TimePicker
  label="Pick a time"
  step={300}
  bind:value={time}
  initialSystem="english"
/>

<p>Stored: {time ?? 'None'}</p>
```

---

### Toast.svelte

Lightweight notification component for transient messages.

#### Props (Toast)

- `title?: string` - Optional title displayed above the message
- `message?: string` - Toast message content
- `variant?: ToastVariant` - Visual style (success|danger|warning|info) (default: `info`)
- `showIcon?: boolean` - Shows an icon matching the variant (default: `true`)
- `closable?: boolean` - Shows a close button (default: `true`)
- `timeout?: number` - Auto-hide timeout in milliseconds (default: `3000`)
- `onClose?: () => void` - Fired when the toast closes (default: `() => {}`)
- `class?: string` - Additional wrapper classes (default: `""`)

#### Notes (Toast)

- Automatically hides after `timeout`.
- Can be closed manually if `closable = true`.
- Variant controls color and icon style.

#### Usage (Toast)

```svelte
<script lang="ts">
  import Toast from '$lib/Toast.svelte';
  let show = false;
  function notify() {
    show = true;
    setTimeout(() => (show = false), 3000);
  }
</script>

<button onclick={notify}>Show toast</button>

{#if show}
  <Toast
    title="Saved"
    message="Settings updated"
    variant="success"
    onClose={() => (show = false)}
  />
{/if}
```

---

### Tooltip.svelte

Context-aware hint for inline controls and labels.

#### Props (Tooltip)

- `children?: Snippet` - Inline trigger content
- `text?: string` - Tooltip text
- `position?: "top" | "bottom" | "left" | "right"` - Tooltip placement (default: `"top"`)
- `delay?: number` - Delay before showing the tooltip (ms) (default: `300`)
- `open?: boolean` - Forces visibility when true (default: `false`)
- `class?: string` - Wrapper classes (default: `""`)

#### Notes (Tooltip)

- Wraps any inline element and shows a floating bubble with `text`.
- `open` overrides hover/focus behavior when set to `true`.
- `position` controls which side of the trigger the bubble appears on.
- `delay` adds a small pause before showing the tooltip to avoid flicker.
- `class` is applied to the root wrapper, useful for layout tweaks.

#### Usage (Tooltip)

```svelte
<script lang="ts">
  import Tooltip from "$lib/Tooltip.svelte";
  import Button from "$lib/Button.svelte";

  let forced = false;
</script>

<Tooltip text="Primary action button">
  {#snippet children()}
    <Button sz="sm" variant="primary">
      Save
    </Button>
  {/snippet}
</Tooltip>

<Tooltip text="Forced tooltip" open={forced}>
  {#snippet children()}
    <button onclick={() => (forced = !forced)}>
      Toggle tooltip
    </button>
  {/snippet}
</Tooltip>
```

---

## 🎯 Design Principles

- Built with **Svelte 5 Runes** (`$state`, `$derived`, `$effect`, `$props`).
- Styled with **TailwindCSS** and CSS variables; dark mode by `.dark`.
- Self-contained components; no global slots - content is passed via snippets using `{@render}`.

## 🧪 Testing & Development

```bash
# Development
npm run dev          # Vite dev server
npm run storybook    # Storybook on :6006

# Code Quality
npm run check        # TypeScript checking
npm run lint         # ESLint validation
npm run lint:fix     # Auto-fix lint issues
npm run format       # Prettier formatting

# Testing
npm run test         # Vitest unit tests
npm run test:watch   # Vitest watch mode
npm run test:ui      # Vitest UI interface

# Docs
npm run md src/lib   # Generate Components.md from all Svelte components

```

Testing Stack:

· Vitest + Testing Library - Unit tests with DOM testing
· jsdom - Browser environment simulation
· Coverage via @vitest/coverage-v8

Code Quality:

· ESLint with TypeScript + Svelte plugins
· Prettier for consistent formatting
· TypeScript strict type checking

Storybook:

· Component documentation & testing
· Accessibility addons (@storybook/addon-a11y)
· Vitest integration (@storybook/addon-vitest)

---

## 📄 License

MIT License - See [LICENSE](LICENSE.md) for details.

---

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="https://github.com/MaestroFusion360/svelte-comp/issues">
    <img src="https://img.shields.io/github/issues/MaestroFusion360/svelte-comp" alt="Issues" />
  </a>
  <a href="https://github.com/MaestroFusion360/svelte-comp/stargazers">
    <img src="https://img.shields.io/github/stars/MaestroFusion360/svelte-comp" alt="Stars" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=MaestroFusion360-SmartPost&label=Project+Views&color=blue" alt="Project Views" />
</p>
