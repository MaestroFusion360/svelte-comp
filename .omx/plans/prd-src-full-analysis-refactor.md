# PRD: src full analysis and refactor

## Goal
Improve reliability, security posture, maintainability, UI polish, responsiveness, and test coverage for the src directory without changing public APIs unnecessarily.

## Scope
- Analyze src code, tests, demo, stories, and exports.
- Fix evidence-backed bugs and unsafe edge cases.
- Add or update regression tests for each bug fixed.
- Improve UI polish using existing Tailwind/CSS-variable system.
- Refactor duplication only where it reduces complexity without widening risk.
- Run check, lint, tests, and build before completion.

## Non-goals
- No new dependencies.
- No broad public API redesign unless required by a bug.
- No destructive cleanup outside src except .omx planning/log artifacts.

## Acceptance criteria
- Baseline findings documented.
- Each implemented bug fix has a regression test or existing test evidence.
- 
pm run check, 
pm run lint, 
pm run test, and 
pm run build pass after changes.
- Security review finds no unresolved high/critical source issues.
- Architect review approves final state.
