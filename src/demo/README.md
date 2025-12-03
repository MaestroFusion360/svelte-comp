# Demo components

This document provides a set of reusable Svelte 5 demo components with props, notes and usage examples. It’s meant as a quick reference for developers exploring the UI library.

---

- [Demo components](#demo-components)
  - [App.svelte](#appsvelte)
    - [Notes (App)](#notes-app)
    - [Usage (App)](#usage-app)
  - [CodeViewDemo.svelte](#codeviewdemosvelte)
    - [Notes (CodeViewDemo)](#notes-codeviewdemo)
    - [Usage (CodeViewDemo)](#usage-codeviewdemo)
  - [Component.svelte](#componentsvelte)
    - [Props (Component)](#props-component)
    - [Notes (Component)](#notes-component)
    - [Usage (Component)](#usage-component)
  - [Container.svelte](#containersvelte)
    - [Props (Container)](#props-container)
    - [Notes (Container)](#notes-container)
    - [Usage (Container)](#usage-container)
  - [FormDemo.svelte](#formdemosvelte)
    - [Notes (FormDemo)](#notes-formdemo)
    - [Usage (FormDemo)](#usage-formdemo)
  - [MenuDemo.svelte](#menudemosvelte)
    - [Notes (MenuDemo)](#notes-menudemo)
    - [Usage (MenuDemo)](#usage-menudemo)
  - [Notepad.svelte](#notepadsvelte)
    - [Notes (Notepad)](#notes-notepad)
    - [Props (Notepad)](#props-notepad)
    - [Usage (Notepad)](#usage-notepad)
  - [PlayCard.svelte](#playcardsvelte)
    - [Props (PlayCard)](#props-playcard)
    - [Notes (PlayCard)](#notes-playcard)
    - [Usage (PlayCard)](#usage-playcard)

---

## App.svelte

The main application shell that wires together global state, locale handling, navigation, demo components, and all UI building blocks of the library.
It acts as the interactive showcase for every component: forms, tables, dialogs, sliders, menus, pickers, and the entire demo suite.

### Notes (App)

- Initializes the global locale using Svelte context so that deeply nested components receive translated labels and messages.
- Generates the navigation menu dynamically from localized page labels, then binds it to a Hamburger-driven sidebar.
- Maintains state for every interactive element displayed in the demo: pagination, dialogs, toasts, color pickers, date/time pickers, selects, tables, tabs, sliders and field variations.
- Renders the correct demo or PlayCard preview based on the current `active` page, enabling fast switching between example screens.
- Provides helper functions like `addToast`, `dialogConfirm`, `dialogCancel`, and pagination logic to replicate real application flows.
- Uses snippets (`{#snippet}` / `{@render}`) extensively to keep the layout declarative and avoid prop-drilling.
- Includes complete demo flows:
  • table pagination with live derived rows
  • dialogs with confirm/cancel
  • toast system with variants
  • form submission with notifications
  • random autofill via FormDemo
- Wraps everything inside the shared `Container` layout so that the demo UI inherits theming, spacing and responsiveness.

### Usage (App)

```ts
// main.ts
import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
```

---

## CodeViewDemo.svelte

A small showcase for the CodeView component that demonstrates live syntax highlighting, language switching and optional editing.

### Notes (CodeViewDemo)

- Includes a language selector powered by the library’s `<Select>`.
- Toggles editing mode via a `<Switch>`, revealing the transparent textarea overlay.
- Uses a predefined set of code snippets (HTML, CSS, JS, JSON, Python, TXT) to show how Prism handles different grammars.
- Line numbers and active-line highlight remain synchronized while typing.
- The demo updates reactively when the selected language or edit mode changes.

### Usage (CodeViewDemo)

```svelte
<CodeViewDemo sz="sm" />
```

---

## Component.svelte

A low-level primitive that provides the same theming, sizing, and disabled states as the rest of the library.
Use it to prototype brand-new surfaces without re-implementing all of the design tokens.

### Props (Component)

- `class?: string` - Additional Tailwind/CSS classes appended to the computed styles.
- `children?: Snippet` - Default slot content rendered inside the wrapper.
- `disabled?: boolean` - Puts the component into a non-interactive state (default: `false`).
- `variant?: 'default' | 'neutral'` - Background/border scheme, using CSS variables (default: `'default'`).
- `sz?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'` - Controls gap, padding, and font-size scale (default: `'md'`).
- Inherits all native `<div>` attributes through rest props (e.g., `role`, `tabindex`, events).

### Notes (Component)

- Renders an `inline-flex` container with rounded borders and smooth transitions that match other components.
- `disabled` sets both `data-disabled` and `aria-disabled`, so CSS selectors and assistive tech stay in sync.
- Variants are built from the shared CSS variables in `src/app.css`, making it easy to keep light/dark themes consistent.
- Size presets reuse the same spacing tokens as buttons/cards, which keeps typography rhythm aligned.

### Usage (Component)

```svelte
<script lang="ts">
  import Component from "./demo/Component.svelte"
</script>

<div class="flex flex-col h-screen">
  <Component
    sz="lg"
    class="w-full flex-col items-center justify-center gap-1 px-4 py-3"
  >
    <span class="font-semibold">Server status</span>
    <span class="text-sm text-[var(--color-text-muted)]">All systems go</span>
  </Component>

  <div class="flex grow justify-center items-center">
    <Component disabled sz="sm" class="gap-2 px-4 py-1.5">
      <span>Offline mode</span>
      <span class="text-xs uppercase tracking-wide opacity-70">Temporarily disabled</span>
    </Component>
  </div>
</div>
```

---

## Container.svelte

A base layout component that defines the main page structure: `header`, `main`, `footer`, and optional `left` and `right` panels.
Implements a responsive CSS Grid and theme-aware background/text colors.

### Props (Container)

- `header?`: `Snippet` - top section content.
- `footer?`: `Snippet` - bottom section content.
- `left?`: `Snippet` - left sidebar (hidden on small screens).
- `right?`: `Snippet` - right sidebar (hidden on small screens).
- `children?`: `Snippet` - main content (`<main>`).
- `class?`: `string` - optional Tailwind class for the outer container.

### Notes (Container)

- Uses `grid-rows-[auto_1fr_auto]` to define layout rows: header, main, footer.
- Responsive sidebars become visible at `lg` breakpoints.
- Background and text colors are controlled via CSS variables (`--color-bg-page`, `--color-text-default`).
- Main content is centered using `max-w-*` inside `<main>`.

### Usage (Container)

```svelte
<script lang="ts">
  import Container from './demo/Container.svelte';
  import Card from '$lib/Card.svelte';
</script>

{#snippet header()}
  <h1 class="text-center font-bold text-lg">Page Header</h1>
{/snippet}

{#snippet footer()}
  <p class="text-center text-sm">Page Footer</p>
{/snippet}

<Container {header} {footer}>
  <div class="max-w-[400px] mx-auto text-center space-y-4">
    <Card sz="md">
      <p>Card content inside a themed container.</p>
    </Card>
  </div>
</Container>
```

---

## FormDemo.svelte

A complete demonstration of the Form component with validation, localization and a fully wired submit flow.

### Notes (FormDemo)

- Builds a full form schema with text fields, email, number validation, selects, checkboxes and custom validators.
- Uses localized labels and messages via the `lang` context and the `TEXTS` dictionary.
- Exposes the underlying Form API to trigger resets and programmatic value changes.
- Includes a helper that auto-fills the form with valid random data for testing.
- Wrapped in a Card with header and footer snippets for a more realistic layout.

### Usage (FormDemo)

```svelte
<FormDemo onSubmit={(data) => console.log(data)} />
```

---

## MenuDemo.svelte

A simple showcase of the Menu component with a couple of menu groups and basic action handling.

### Notes (MenuDemo)

- Demonstrates how to define menu sections with mixed string and object actions.
- Shows how the `onSelect` callback receives both the menu name and the selected action.
- Uses the shared size token (`sz`) to keep spacing and typography consistent with the rest of the UI.
- Wrapped in a bordered container to imitate a small application window.

### Usage (MenuDemo)

```svelte
<MenuDemo sz="sm" />
```

---

## Notepad.svelte

A compact text-editor component that renders a classic notepad-style UI with a menu bar, basic editing actions, and a live editable CodeView.

### Notes (Notepad)

- The top menu bar is provided by the library’s Menu component and receives a fully prebuilt `menus` structure.
- Supports the actions New, Open, Save, Undo, Redo, Cut, Copy, Paste and About.
- File operations use the File System Access API when available, with fallbacks to classic downloads for unsupported environments.
- Maintains a small undo/redo stack using simple string snapshots without diffing.
- Localization is handled through the optional `L` prop, which supplies dynamic labels for menu groups and actions.
- The UI size token `sz` (XS–XL) controls typography and spacing across both the menu bar and the editor.
- Syntax highlighting and editor behavior depend on the selected `lang` value.
- The component manages its own internal text state and file handle, with auto-tracking of user edits.

### Props (Notepad)

- `L?: Record<string, any>` localization source
- `lang?: Language` active syntax mode
- `sz?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'` UI size token
- `class?: string` optional external class

### Usage (Notepad)

```svelte
<script lang="ts">
  import Notepad from "./demo/Notepad.svelte";

  const L = {
    notepad: {
      menu: { file: "File", edit: "Edit" },
      actions: { new: "New", open: "Open" }
    }
  };
</script>

<Notepad
  L={L}
  lang="txt"
  sz="sm"
  class="w-full h-full"
/>
```

---

## PlayCard.svelte

An interactive playground wrapper for showcasing and testing UI components with live controls (`size`, `variant`, `label`, `disabled`, `type`, etc.).

### Props (PlayCard)

- **`component`**: `ComponentName`
  The component key from `componentMeta` that determines available sizes and variants.

- **`title?`**: `string`
  The title shown at the top of the card. Default: `"Play Component"`.

- **`subtitle?`**: `string`
  The subtitle displayed under the title. Default: `"Interactive examples"`.

- **`sz?`**: `SizeKey`
  The initial size passed to the preview renderer. Default: `"md"`.

- **`class?`**: `string`
  Additional CSS classes for the card wrapper.

- **`label?`**: `string`
  The initial label value.

- **`disabled?`**: `boolean`
  The initial disabled state.

- **`children?`**: `Snippet<[SizeKey, string, string, boolean, string]>`
  A snippet invoked with the current control values to render the live preview.

### Notes (PlayCard)

- Automatically displays the correct set of controls based on `componentMeta`.
- When `component === "Field"`, shows an additional `Select` for choosing field type (`input`, `number`, `textarea`).
- All control changes are reactive - the snippet updates instantly.

### Usage (PlayCard)

```svelte
<script lang="ts">
  import { setContext } from "svelte";
  import PlayCard from "./demo/PlayCard.svelte";
  import Accordion from "$lib/Accordion.svelte";
  import { TEXTS } from "./lang";
  import type { SizeKey } from "$lib/types";
  // Locale init
  type Locale = keyof typeof TEXTS;
  const lang = $state<{ value: Locale }>({ value: "en" });
  setContext("lang", lang);
  const L = $derived(TEXTS[lang.value]);

  const accordionItems = $derived([...L.snippets.accordion.items]);
</script>

<div
  class="grid min-h-dvh place-items-center bg-[var(--color-bg-page)] p-[var(--spacing-lg)]"
>
  <PlayCard
    component="Accordion"
    title={L.pageLabels.accordion}
    subtitle={L.snippets.accordionPlay.subtitle}
  >
    {#snippet children(sz: SizeKey, cls: string)}
      <Accordion {sz} class={cls} items={accordionItems} />
    {/snippet}
  </PlayCard>
</div>

```

---
