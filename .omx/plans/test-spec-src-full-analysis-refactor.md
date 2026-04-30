# Test spec: src full analysis and refactor

## Required verification
1. 
pm run check for Svelte/TypeScript diagnostics.
2. 
pm run lint for static linting.
3. 
pm run test -- --run for unit/regression tests.
4. 
pm run build for production build validation.

## Regression policy
- For every concrete bug fixed, add or adjust a targeted Vitest test under src/lib/__tests__ or src/App.test.ts as appropriate.
- Keep tests behavior-focused and avoid deleting existing assertions to pass.

## UI verification
- Prefer testable class/attribute changes and existing Storybook coverage.
- Use CSS variables/Tailwind utilities; preserve dark mode behavior.

## Security verification
- Review direct DOM/HTML usage, file inputs, localStorage/sessionStorage usage, URL handling, timers/listeners, and global side effects.
