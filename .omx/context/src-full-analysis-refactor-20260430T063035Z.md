# Context snapshot: src full analysis/refactor

- UTC timestamp: 20260430T063035Z
- Task statement: full analysis and refactor of src: bugs, vulnerabilities, architecture, code quality, tests, UI, performance, documentation.
- Desired outcome: verified Svelte 5 component library with fixed concrete issues, improved error handling/guards, modernized UI where safe, tests for every fixed bug, and documented plan/change log.
- Known facts/evidence: Svelte 5 + Tailwind v4 component library; components in src/lib; tests in src/lib/__tests__; demo in src/demo; stories in src/stories; localization files contain Cyrillic and must not be overwritten with unsafe encoding.
- Constraints: keep diffs small/reversible; no new dependencies without explicit request; update TODO.md only for coverage matrix changes; must create .omx/plans artifacts before implementation due Ralph planning gate.
- Unknowns/open questions: exact failing tests/type errors to be discovered; concrete bug list to be based on local evidence rather than broad speculative rewrites.
- Likely touchpoints: src/lib/*.svelte, src/lib/__tests__/*.test.ts, src/App.svelte, src/app.css, src/demo/*, src/lib/index.ts, src/utils/index.ts.
