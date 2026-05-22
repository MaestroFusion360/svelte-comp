import { render, fireEvent, screen, within } from "@testing-library/svelte";
import { beforeEach, describe, expect, it } from "vitest";
import Calculator from "../Calculator.svelte";
import { TEXTS } from "../../lang";

function displayText() {
  return within(
    screen.getByLabelText(TEXTS.en.calculator.displayLabel),
  ).getByRole("status", { hidden: true });
}

async function press(name: string) {
  await fireEvent.click(screen.getByRole("button", { name }));
}

describe("Calculator demo", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("keeps the full UI inside a card and evaluates basic expressions", async () => {
    const { container } = render(Calculator, { props: { L: TEXTS.en } });

    expect(
      container.querySelector("[class*='rounded-[var(--radius-xl)]']"),
    ).toBeTruthy();
    expect(screen.queryByText(/Keyboard:/i)).toBeNull();

    await press("2");
    await press("+");
    await press("3");
    await press("=");

    expect(displayText().textContent).toContain("5");
    expect(screen.getByText("2+3 = 5")).toBeTruthy();
  });

  it("supports memory and scientific mode", async () => {
    render(Calculator, { props: { L: TEXTS.en } });

    await press("9");
    await press("M+");
    await press("C");
    await press("MR");
    expect(displayText().textContent).toContain("9");

    await press(TEXTS.en.calculator.modeBasic);
    await press("√");
    expect(displayText().textContent).toContain("3");
  });
});
