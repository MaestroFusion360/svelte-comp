# Demo components

This document describes the reusable Svelte 5 demo components in `src/demo`. It is a quick reference for developers exploring the UI library and the demo application.

---

- [Demo components](#demo-components)
  - [App.svelte](#appsvelte)
  - [AboutDemo.svelte](#aboutdemosvelte)
  - [Calculator.svelte](#calculatorsvelte)
  - [CodeViewDemo.svelte](#codeviewdemosvelte)
  - [Component.svelte](#componentsvelte)
  - [Container.svelte](#containersvelte)
  - [DialogDemo.svelte](#dialogdemosvelte)
  - [FormDemo.svelte](#formdemosvelte)
  - [MenuDemo.svelte](#menudemosvelte)
  - [Notepad.svelte](#notepadsvelte)
  - [PlayCard.svelte](#playcardsvelte)
  - [SplitterDemo.svelte](#splitterdemosvelte)
  - [Todolist.svelte](#todolistsvelte)

---

## App.svelte

The main application shell that wires together global state, locale handling, navigation, demo components, and all UI building blocks of the library.

### Notes

- Initializes the global locale through Svelte context so nested components receive translated labels and messages.
- Generates localized navigation for the Hamburger sidebar.
- Keeps the app examples grouped by purpose; Notepad, Calculator and Todo List are exposed in the `apps` burger group.
- Renders the selected demo or PlayCard preview by the active page id.
- Maintains interactive demo state for dialogs, toasts, forms, tables, pickers, sliders and demo applications.
- Uses snippets to keep the layout declarative and avoid prop-drilling.
- Wraps content inside the shared `Container` layout so demos inherit theming, spacing and responsive behavior.

### Usage

```ts
import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
```

---

## AboutDemo.svelte

About panel used in the demo app, showing localized library details and metadata inside a Card.

### Usage

```svelte
<AboutDemo />
```

---

## Calculator.svelte

Card-contained calculator demo with basic and scientific modes, memory controls and expression history.

### Props

- `L?: typeof TEXTS[keyof typeof TEXTS]` - Optional localization source.
- `sz?: SizeKey` - UI size token (default: `"sm"`).
- `class?: string` - Additional wrapper classes.

### Notes

- The complete UI is rendered inside a library `Card`.
- User-facing labels come from `L.calculator`; no keyboard hint text is rendered.
- Supports arithmetic operations, percent, sign toggle, square root, square, reciprocal and memory actions (`MC`, `MR`, `M+`, `M-`).
- Stores recent history in `localStorage` and exposes a clear-history action.
- Uses `min-w-0`, wrapping controls and overflow guards so the layout remains usable at 320px and 768px.
- Uses CSS variables through library components and Tailwind arbitrary token utilities.

### Usage

```svelte
<script lang="ts">
  import Calculator from "./demo/Calculator.svelte";
  import { TEXTS } from "./lang";
</script>

<Calculator L={TEXTS.en} sz="sm" class="w-full" />
```

---

## CodeViewDemo.svelte

Showcase for the CodeView component: live syntax highlighting, language switching and optional editing.

### Props

- `sz?: SizeKey` - Size token forwarded to CodeView.
- `class?: string` - Extra wrapper classes.

### Notes

- Uses the library `Select` for language changes.
- Toggles editing through `Switch`.
- Demonstrates HTML, CSS, JS, JSON, Python and TXT snippets.
- Keeps line numbers and active-line highlighting synchronized while editing.

### Usage

```svelte
<CodeViewDemo sz="sm" />
```

---

## Component.svelte

Low-level themed primitive for prototyping new surfaces without re-implementing design-token behavior.

### Props

- `class?: string` - Additional classes.
- `children?: Snippet` - Default content.
- `disabled?: boolean` - Disabled state.
- `variant?: "default" | "neutral"` - Background/border scheme.
- `sz?: "xs" | "sm" | "md" | "lg" | "xl"` - Size token.

### Usage

```svelte
<Component sz="lg" class="w-full justify-center">
  <span>Server status</span>
</Component>
```

---

## Container.svelte

Responsive page layout with `header`, `main`, `footer`, and optional side panels.

### Props

- `header?: Snippet` - Top section.
- `footer?: Snippet` - Bottom section.
- `left?: Snippet` - Left sidebar.
- `right?: Snippet` - Right sidebar.
- `children?: Snippet` - Main content.
- `class?: string` - Outer class.

### Usage

```svelte
<Container {header} {footer}>
  <Card sz="md">Card content</Card>
</Container>
```

---

## DialogDemo.svelte

Demo for Dialog confirm/cancel flows and toast feedback.

### Props

- `sz?: SizeKey` - Size token forwarded to Dialog.
- `class?: string` - Extra classes passed to Dialog.
- `message?: string` - Optional dialog message.

### Usage

```svelte
<DialogDemo sz="sm" message="Are you sure?" />
```

---

## FormDemo.svelte

Complete Form demonstration with validation, localization and submit handling.

### Props

- `onSubmit?: (data: FormValues) => void` - Called with validated form values.

### Notes

- Covers text, email, password, number, select and checkbox fields.
- Uses localized labels/messages through lang context.
- Includes random autofill for fast demo testing.

### Usage

```svelte
<FormDemo onSubmit={(data) => console.log(data)} />
```

---

## MenuDemo.svelte

Small showcase of the Menu component with grouped actions and select callbacks.

### Props

- `sz?: SizeKey` - Size token forwarded to Menu.
- `class?: string` - Extra wrapper classes.

### Usage

```svelte
<MenuDemo sz="sm" />
```

---

## Notepad.svelte

Compact notepad-style text editor with a menu bar, editable CodeView, status bar and dialogs.

### Props

- `L?: NotepadLocale` - Optional localization source.
- `lang?: Language` - Active syntax mode (default: `"txt"`).
- `sz?: "xs" | "sm" | "md" | "lg" | "xl"` - UI size token.
- `class?: string` - Additional wrapper classes.

### Notes

- Uses the library `Menu`, `CodeView`, `Dialog`, `Toast` and `ContextMenu` components.
- Supports New, Open, Save, Undo, Redo, Cut, Copy, Paste, language switching, status-bar toggle and About.
- File operations use the File System Access API when available, with download/input fallbacks.
- Maintains a small undo/redo stack with string snapshots.
- Localized through the optional `L` prop.

### Usage

```svelte
<Notepad L={TEXTS.en} lang="txt" sz="sm" class="w-full h-full" />
```

---

## PlayCard.svelte

Interactive playground wrapper for showcasing UI components with live controls.

### Props

- `component: ComponentName` - Component key from `componentMeta`.
- `title?: string` - Card title.
- `subtitle?: string` - Card subtitle.
- `class?: string` - Additional wrapper classes.
- `label?: string` - Initial label control value.
- `disabled?: boolean` - Initial disabled state.
- `children?: Snippet<[SizeKey, string, string, boolean, string, boolean]>` - Preview renderer.

### Usage

```svelte
<PlayCard component="Accordion" title="Accordion">
  {#snippet children(sz, cls)}
    <Accordion {sz} class={cls} items={items} />
  {/snippet}
</PlayCard>
```

---

## SplitterDemo.svelte

Demo showcasing horizontal and vertical Splitter layouts.

### Usage

```svelte
<SplitterDemo />
```

---

## Todolist.svelte

Card-contained todo application demo with priority filtering and toast feedback.

### Props

- `L?: typeof TEXTS[keyof typeof TEXTS]` - Optional localization source.
- `sz?: SizeKey` - UI size token (default: `"sm"`).
- `class?: string` - Additional wrapper classes.

### Notes

- The component owns its outer `Card`, so it can be mounted directly in the Apps area.
- Supports add, delete, toggle complete, clear completed, status filters and priority filters.
- Uses localized labels/messages from `L.todolist`.
- Uses `min-w-0`, wrapping layout and overflow guards for 320px and 768px widths.
- Emits toasts for validation, add/delete and clear actions.

### Usage

```svelte
<script lang="ts">
  import Todolist from "./demo/Todolist.svelte";
  import { TEXTS } from "./lang";
</script>

<Todolist L={TEXTS.en} sz="sm" class="w-full" />
```
