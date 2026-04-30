# AGENTS.md

## Project summary

- Svelte 5 component library built with TailwindCSS v4 and CSS variables.
- Theme tokens live in `src/app.css`; dark mode is enabled by adding `.dark` on a parent, usually `html`.
- Components are self-contained and use Svelte 5 snippets instead of legacy slots.
- The package is intended for npm publishing, so library runtime code must not depend on project-only aliases.

## Repo layout

- `src/lib/*.svelte` component sources
- `src/lib/__tests__/` unit tests for library components
- `src/demo/` demo-only showcase components
- `src/demo/__tests__/` demo-only tests
- `src/stories/` Storybook stories
- `src/lib/types/` shared types
- `src/lib/index.ts` public exports
- `src/app.css` design tokens and CSS variables
- `src/lang.ts` demo app localization
- `src/lib/lang.ts` library localization
- `src/App.svelte` demo app
- `.storybook/` Storybook config
- `scripts/` helper scripts

## Dev commands

- `npm i`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run storybook`
- `npm run check`
- `npm run lint`
- `npm run lint:fix`
- `npm run format`
- `npm run test`
- `npm run test:watch`
- `npm run test:ui`
- `npm run md src/lib`

Before finishing non-trivial code changes, run:

- `npm run check`
- `npm run lint`
- `npm run test -- --run`

Before npm publishing, also run:

- `npm run check:lib-imports`

## Component guidelines

- Use Svelte 5 runes API: `$state`, `$derived`, `$effect`, `$props`.
- Use snippets instead of legacy slots.
- Keep components predictable and self-contained.
- Avoid global side effects unless the component explicitly needs them.
- Clean up global listeners in `$effect` teardown.
- Prefer props, bindable props, and snippets over deep wrapper hierarchies.
- Do not change public component APIs unless explicitly requested.
- Keep component behavior stable when doing visual/token refactors.

## Styling guidelines

- Use CSS variables from `src/app.css`.
- Avoid hard-coded colors such as `text-white`, `bg-white`, `bg-black/40`, raw hex colors for styling.
- Prefer tokenized classes:
  - `text-[var(--color-text-default)]`
  - `text-[var(--color-text-muted)]`
  - `text-[var(--color-text-inverse)]`
  - `bg-[var(--color-bg-surface)]`
  - `bg-[var(--color-bg-primary)]`
  - `border-[var(--border-color-default)]`
  - `rounded-[var(--radius-md)]`
  - `duration-[var(--transition-fast)]`
- Dark mode must work through `.dark`.
- Primary color must work through `data-primary` and `var(--color-bg-primary)`.
- Do not introduce layout that breaks at 320px width.

## Responsive layout rules

- Check 320px and 768px layouts mentally or manually.
- Use `min-w-0` for flex/grid children that can shrink.
- Use `max-w-full`, `overflow-hidden`, `truncate`, `break-words`, or scroll containers where needed.
- Avoid fixed widths that can overflow mobile screens.
- Touch targets should be at least 44px on coarse pointers where practical.
- Popups/dropdowns must clamp to viewport and update on scroll/resize if positioned manually.

## Import rules for npm safety

Inside `src/lib/**/*.{svelte,ts,js}`, do not use project aliases:

- Do not use `$lib`
- Do not use `$utils`

Use relative imports instead.

Examples:

```ts
// Bad inside src/lib
import { cx } from "$utils";
import Button from "$lib/Button.svelte";
import type { SizeKey } from "$lib/types";

// Good inside src/lib
import { cx } from "../utils";
import Button from "./Button.svelte";
import type { SizeKey } from "./types";
````

Aliases are allowed in demo-only and app-only code:

* `src/App.svelte`
* `src/demo/**`
* `src/stories/**`
* tests, if they are not part of published runtime code

When changing imports, do not change behavior.

## Localization rules

* User-facing strings in reusable components should be localized through `src/lib/lang.ts` or the existing library localization mechanism.
* Demo app strings should use `src/lang.ts`.
* Keep `en`, `ru`, and `es` key structures aligned.
* Do not leave broken mojibake text such as `B?sica`, `Peque?a`, `A?adir`.
* Do not leave Russian text inside Spanish localization or Spanish text inside Russian localization.
* Technical AM/PM labels are allowed to remain `AM` and `PM`.

## Encoding note

* `src/lang.ts` and `src/lib/lang.ts` contain Cyrillic and Spanish accented characters.
* Preserve UTF-8 without corrupting characters.
* Avoid overwriting localization files through PowerShell commands that may introduce BOM or mojibake.
* After editing localization files, visually check Cyrillic and Spanish accented text.

## Testing and stories

* Unit tests live in `src/lib/__tests__/` with Vitest + Testing Library.
* Demo app tests live in `src/demo/__tests__/` when they exercise demo-only components.
* Storybook stories live in `src/stories/` and should cover each public component.
* Update `TODO.md` coverage matrix when adding or removing tests/stories.
* Prefer behavior tests over snapshot-style tests.

## Refactor rules

* Do not rewrite unrelated files.
* Do not do broad formatting-only changes unless requested.
* Keep diffs focused.
* Preserve existing tokens, secrets, URLs, and public metadata.
* Do not delete tests or stories to make checks pass.
* Do not add dependencies unless explicitly requested.
* If a component is only a demo showcase, keep it demo-sized and avoid turning it into a full application.

## Required final report

After changes, report:

* files changed;
* important behavior changes;
* localization keys added or changed;
* responsive/layout fixes;
* commands run and their result;
* any checks not run and why.
