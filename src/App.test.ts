import { beforeEach, describe, it, expect } from "vitest";
import {
  render,
  fireEvent,
  screen,
  within,
  waitFor,
} from "@testing-library/svelte";
import { tick } from "svelte";
import { get } from "svelte/store";
import App from "./App.svelte";
import { TEXTS } from "./lang";
import { toasts } from "./demo/toastStore";

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function getSelectTriggerByLabelText(
  container: HTMLElement,
  labelText: string
) {
  const labelEl = within(container).getByText(labelText, {
    selector: "label",
  }) as HTMLLabelElement;

  const hiddenId = labelEl.htmlFor;
  if (!hiddenId) {
    throw new Error(`Label "${labelText}" has no 'for' attribute`);
  }

  const triggerId = hiddenId.replace(/-hidden$/, "");
  const trigger = document.getElementById(triggerId);
  if (!trigger) {
    throw new Error(`Could not find select trigger with id "${triggerId}"`);
  }

  return trigger as HTMLElement;
}

async function chooseOption(optionLabel: string) {
  const opt = await screen.findByRole("option", { name: optionLabel });
  const optBtn = opt.querySelector("button");
  await fireEvent.click(optBtn ?? opt);
}

async function openDrawer() {
  const toggle = screen.getByRole("button", { name: /toggle navigation/i });
  await fireEvent.click(toggle);
  return screen.findByRole("dialog");
}

async function goToPage(label: string) {
  const drawer = await openDrawer();
  const target = within(drawer).getByRole("button", {
    name: label,
  });
  await fireEvent.click(target);
  await tick();

  // Fallback: if drawer did not close via menu click, close via toggle button
  if (screen.queryByRole("dialog")) {
    const toggle = screen.getByRole("button", { name: /toggle navigation/i });
    await fireEvent.click(toggle);
  }

  await waitFor(() => {
    expect(screen.queryByRole("dialog")).toBeNull();
  });
}

async function changeLanguageToSpanish() {
  const drawer = await openDrawer();

  const spanishLabel =
    TEXTS.en.app.language.options.find((opt) => opt.value === "es")?.label ??
    "Spanish";
  const hiddenLangInput = drawer.querySelector(
    'input[type="hidden"][value="en"]'
  );
  const languageSelect = hiddenLangInput
    ? (hiddenLangInput.parentElement?.querySelector(
        'button[role="combobox"]'
      ) as HTMLElement | null)
    : null;

  expect(languageSelect).toBeTruthy();

  await fireEvent.click(languageSelect!);

  await chooseOption(spanishLabel);

  await waitFor(() => {
    expect(
      drawer.querySelector('input[type="hidden"][value="es"]')
    ).toBeTruthy();
  });

  const toggle = screen.getByRole("button", { name: /toggle navigation/i });
  await fireEvent.click(toggle);
  await waitFor(() => {
    expect(screen.queryByRole("dialog")).toBeNull();
  });
}

describe("App", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    window.localStorage.clear();
    toasts.set([]);
  });

  it("updates paginated table rows when locale changes", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.tablePagination);

    expect(
      await screen.findByText(`${TEXTS.en.table.positionPrefix} 1`)
    ).toBeTruthy();

    await changeLanguageToSpanish();
    await tick();

    const expectedPrefix = normalize(TEXTS.es.table.positionPrefix).toLowerCase();
    expect(
      await screen.findByText((text) => {
        const normalized = normalize(text).toLowerCase();
        return normalized.includes(expectedPrefix) && text.includes("1");
      })
    ).toBeTruthy();

    expect(
      await screen.findByText(TEXTS.es.table.columns.item)
    ).toBeTruthy();
  });

  it("navigates to About and renders localized heading", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.about);

    expect(await screen.findByText(TEXTS.en.about.heading)).toBeTruthy();
    expect(screen.getByText(TEXTS.en.about.meta)).toBeTruthy();
  });

  it("toggles theme and syncs html.dark", async () => {
    render(App);

    const themeToggle = screen.getByRole("button", {
      name: /switch to dark mode/i,
    });

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    await fireEvent.click(themeToggle);
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeTruthy();
  });

  it("switches Tabs content when selecting another tab", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.tabs);

    expect(await screen.findByText("One content")).toBeTruthy();

    const tabTwo = screen.getByRole("tab", { name: "Two" });
    await fireEvent.click(tabTwo);

    expect(await screen.findByText("Two content")).toBeTruthy();
  });

  it("opens dialog, confirms, and shows success toast", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.dialog);

    await fireEvent.click(
      screen.getByRole("button", { name: TEXTS.en.snippets.dialog.button })
    );

    expect(
      await screen.findByRole("dialog", { name: TEXTS.en.snippets.dialog.title })
    ).toBeTruthy();

    await fireEvent.click(screen.getByRole("button", { name: "OK" }));

    await waitFor(() => {
      const all = get(toasts);
      expect(all.length).toBeGreaterThan(0);
      expect(all[all.length - 1]?.message).toBe(TEXTS.en.toasts.confirmMessage);
      expect(all[all.length - 1]?.variant).toBe("success");
    });
  });

  it("changes selected Radio option", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.radio);

    const banana = screen.getByLabelText(TEXTS.en.snippets.radio.banana);
    const apple = screen.getByLabelText(TEXTS.en.snippets.radio.apple);

    expect((banana as HTMLInputElement).checked).toBe(true);
    expect((apple as HTMLInputElement).checked).toBe(false);

    await fireEvent.click(screen.getByText(TEXTS.en.snippets.radio.apple));

    expect((apple as HTMLInputElement).checked).toBe(true);
    expect((banana as HTMLInputElement).checked).toBe(false);
  });

  it("switches Field type to number and renders numeric input", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.field);

    const fieldTypeSelect = getSelectTriggerByLabelText(
      document.body,
      TEXTS.en.playground.controls.fieldType
    );
    await fireEvent.click(fieldTypeSelect);
    await chooseOption("Number");

    const numberInput = await screen.findByPlaceholderText(
      TEXTS.en.snippets.field.placeholder
    );
    expect(numberInput.getAttribute("type")).toBe("number");
  });

  it("paginates table rows when navigating pages", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.tablePagination);

    expect(screen.getByText("Page 1 of 5")).toBeTruthy();
    expect(screen.getByText(`${TEXTS.en.table.positionPrefix} 1`)).toBeTruthy();

    const next = screen.getByRole("button", { name: ">" });
    await fireEvent.click(next);

    expect(screen.getByText("Page 2 of 5")).toBeTruthy();
    expect(screen.queryByText(`${TEXTS.en.table.positionPrefix} 1`)).toBeNull();
    expect(
      screen.getByText(`${TEXTS.en.table.positionPrefix} 6`)
    ).toBeTruthy();
  });

  it("shows slider value when toggled and reflects updates", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.slider);

    const valueToggle = screen.getByLabelText(
      TEXTS.en.playground.controls.sliderShowValue
    );
    expect(valueToggle).toBeTruthy();

    expect(screen.queryByText("42")).toBeNull();
    await fireEvent.click(valueToggle);

    const slider = screen.getByRole("slider");
    await fireEvent.input(slider, { target: { value: "42" } });

    expect(screen.getByText("42")).toBeTruthy();
  });

  it("renders and dismisses toast notifications", async () => {
    render(App);

    await goToPage(TEXTS.en.pageLabels.toast);

    const toastBtn = screen.getByRole("button", { name: /show success/i });
    await fireEvent.click(toastBtn);

    const toastMessage = await screen.findByText(
      "Operation completed successfully!"
    );
    expect(toastMessage).toBeTruthy();

    const toastStatus = screen.getByRole("status");
    const closeBtn = within(toastStatus).getByRole("button", { name: /close/i });
    await fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(
        screen.queryByText("Operation completed successfully!")
      ).toBeNull();
    });
  });
});
