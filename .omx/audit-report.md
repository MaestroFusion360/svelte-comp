# Audit report: `src/lib` components

Дата: 2026-04-30  
Область: все компоненты из README (`src/lib/*.svelte`).  
Критерии: адаптивность 320px/768px, CSS-переменные из `src/app.css`, поведение в `.dark`, `PrimaryColorSelect[data-primary]`.

## Сводная таблица

| Компонент | Адаптивность | CSS-переменные | Тёмная тема | Проблемы |
|-----------|--------------|----------------|-------------|----------|
| Accordion | ✅ | ✅ | ✅ | Исправлено: spacing, text-size, duration и shadow переведены на CSS-токены. |
| Badge | ✅ | ✅ | ✅ | - |
| Button | ✅ | ✅ | ✅ | Исправлено: touch hit-area через `[@media(pointer:coarse)]:min-h-11/min-w-11`; `text-white` заменён на `var(--color-text-inverse)`; unsafe links закрыты тестом. |
| Calendar | ✅ | ✅ | ✅ | Компактная сетка корректна для 320px; интерактивные day/month/year кнопки остаются компактными по дизайну внутри ограниченного календарного поля. |
| Card | ✅ | ✅ | ✅ | Исправлено: radius, shadow и padding переведены на CSS-токены; layout не ломает 320px. |
| Carousel | ✅ | ✅ | ✅ | Исправлено: autoplay interval clamp, body `overflow-auto`, duration/shadow/text/spacing переведены на CSS-токены. |
| CheckBox | ✅ | ✅ | ✅ | Исправлено: touch min-height; checkmark stroke использует `var(--color-text-inverse)`. |
| CodeView | ✅ | ✅ | ✅ | Исправлено: copy button inverse text, header/gutter padding и editor padding переведены на CSS-токены; clipboard guard добавлен. |
| ColorPicker | ✅ | ✅ | ✅ | `#000000` — значение цвета input по умолчанию, не CSS-стиль; styling через tokens. |
| ContextMenu | ✅ | ✅ | ✅ | Исправлено: повторяющиеся utility-строки вынесены в константы; spacing, line-height, duration и shadow tokenized. |
| DatePicker | ✅ | ✅ | ✅ | Popup пересчитывает позицию на scroll/resize; max-height viewport-safe через Calendar/popup constraints. |
| Dialog | ✅ | ✅ | ✅ | Исправлено: `min-w-80` заменён на `min-w-0 max-w-[min(100%,28rem)]`; добавлен `max-h` + `overflow-auto`; non-modal max-width viewport-safe. |
| Field | ✅ | ✅ | ✅ | Исправлено: coarse pointer `min-h-11`; размеры xs-sm сохраняются для desktop density. |
| FilePicker | ✅ | ✅ | ✅ | Исправлено: drop/input validation по `accept` и `maxBytes`; добавлены regression tests. |
| Form | ✅ | ✅ | ✅ | Использует `min-w-0`, validation/toast states tokenized; no mobile overflow found statically. |
| Hamburger | ✅ | ✅ | ✅ | Исправлено: trigger touch hit-area, radius, drawer spacing/duration и overlay tokenized. |
| InstallPWA | ✅ | ✅ | ✅ | - |
| Menu | ✅ | ✅ | ✅ | Исправлено: menubar/popup/submenu spacing, radius и item sizing tokenized; resize/scroll listeners и viewport max-width сохранены. |
| NoticeBase | ✅ | ✅ | ✅ | Исправлено: spacing, text sizes и floating shadow tokenized; responsive text clamp сохранён. |
| PaginatedCard | ✅ | ✅ | ✅ | - |
| Pagination | ✅ | ✅ | ✅ | Buttons wrap; active button inherits fixed Button inverse token. |
| PrimaryColorSelect | ✅ | ✅ | ✅ | Проверено: валидирует saved value и выставляет `document.documentElement.setAttribute("data-primary", selected)`; app.css содержит palette selectors. |
| ProgressBar | ✅ | ✅ | ✅ | Uses CSS vars for progress colors; fixed height is component intent. |
| ProgressCircle | ✅ | ✅ | ✅ | SVG/token colors; no layout overflow found. |
| Radio | ✅ | ✅ | ✅ | Native input + token colors; compact desktop sizes acceptable. |
| SearchInput | ✅ | ✅ | ✅ | Layout stable; decorative icon 24px is not a separate touch target. |
| Select | ✅ | ✅ | ✅ | Исправлено: trigger/options coarse `min-h-11`; popup position updates on scroll/resize and max-height clamps to viewport. |
| Slider | ✅ | ✅ | ✅ | Range control uses 40px track wrapper; thumb sizes scale; no horizontal overflow. |
| Splitter | ✅ | ✅ | ✅ | Исправлено: guard от `containerSize <= 0`; coarse pointer handle min 44px; resize listener present. |
| Switch | ✅ | ✅ | ✅ | Исправлено: label class bug (`{TEXT[sz]}` literal), coarse hit-area, knob `bg-white` -> inverse token. |
| Table | ✅ | ✅ | ✅ | Uses truncation/min-width guards; consumer should wrap wide tables in overflow container (demo already does). |
| Tabs | ✅ | ✅ | ✅ | Horizontal scroll at small width; fixed active `text-white` -> inverse token; transition tokenized. |
| ThemeToggle | ✅ | ✅ | ✅ | Исправлено: coarse touch hit-area; toggles `.dark` via document class. |
| TimePicker | ✅ | ✅ | ✅ | Popup/grid controls tokenized; no static overflow issue. |
| Toast | ✅ | ✅ | ✅ | Fixed bottom/right max-width viewport-safe; NoticeBase handles text truncation. |
| Tooltip | ✅ | ✅ | ✅ | Исправлено: offset spacing, font-size, radius, shadow и transition duration tokenized. |
| Topbar | ✅ | ✅ | ✅ | Uses min-width/overflow guards and responsive text sizing. |

## Исправленные проблемы с привязкой к файлам

- `src/lib/Accordion.svelte` — заменены `shadow-sm`, `duration-200`, text-size и spacing utilities на CSS variables (`--shadow-color`, `--transition-fast`, `--text-*`, `--spacing-*`).
- `src/lib/Card.svelte` — `rounded-xl`, `shadow-sm` и padding size map переведены на `--radius-xl`, `--shadow-color`, `--spacing-*`.
- `src/lib/Carousel.svelte` — text sizes через `TEXT`, content/dots spacing, duration и arrow shadow переведены на tokens; сохранён clamp autoplay interval.
- `src/lib/CodeView.svelte` — header/copy/gutter/editor padding и copy typography/radius переведены на tokens; добавлен guard для отсутствующего `navigator.clipboard`.
- `src/lib/ContextMenu.svelte` — повторяющиеся классы item/menu вынесены в константы; spacing, line-height, duration и shadow переведены на tokens.
- `src/lib/Hamburger.svelte` — drawer spacing/radius/duration и overlay tokenized; touch hit-area сохранён.
- `src/lib/Menu.svelte` — top-level menu, popup items, separators и submenu spacing/radius/sizing переведены на tokens.
- `src/lib/NoticeBase.svelte` — size classes, small typography и floating shadow переведены на tokens.
- `src/lib/Tooltip.svelte` — position offsets, padding, font-size, radius, shadow и transition duration переведены на tokens.
- `src/lib/__tests__/Card.test.ts`, `src/lib/__tests__/Carousel.test.ts`, `src/lib/__tests__/Menu.test.ts`, `src/lib/__tests__/NoticeBase.test.ts` — существующие ожидания обновлены под реальные tokenized-классы; новых тестов «ради тестов» не добавлялось.

## Хардкод, найденный и классифицированный

- **Исправлено:** все ранее отмеченные token/style debt items в таблице: Tailwind spacing/duration/shadow/radius/text utility hardcode для Accordion, Card, Carousel, CodeView, ContextMenu, Hamburger, Menu, NoticeBase, Tooltip.
- **Не считается CSS-style нарушением:** `ColorPicker` `#000000` — value/default для native color input, а не hardcoded visual style.

## Проверки после исправлений

- `npm.cmd run check` — passed, 0 errors/warnings.
- `npm.cmd run lint` — passed.
- `npm.cmd run test -- --run` — passed, 41 files / 318 tests.
- `npm.cmd run build` — passed.

