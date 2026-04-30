import { render, fireEvent, screen, within } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import Todolist from "../Todolist.svelte";
import { TEXTS } from "../../lang";

async function chooseOption(label: string) {
  const option = await screen.findByRole("option", { name: label });
  await fireEvent.click(option.querySelector("button") ?? option);
}

describe("Todolist demo", () => {
  it("adds, toggles, filters, deletes and clears todos with toasts", async () => {
    const { container } = render(Todolist, { props: { L: TEXTS.en } });
    expect(
      container.querySelector("[class*='rounded-[var(--radius-xl)]']"),
    ).toBeTruthy();

    await fireEvent.click(
      screen.getByRole("button", { name: TEXTS.en.todolist.add }),
    );
    expect(
      await screen.findByText(TEXTS.en.todolist.validationMessage),
    ).toBeTruthy();

    const input = screen.getByLabelText(TEXTS.en.todolist.newTask);
    await fireEvent.input(input, { target: { value: "Ship demo" } });
    await fireEvent.click(
      screen.getByRole("button", { name: TEXTS.en.todolist.add }),
    );
    expect((await screen.findAllByText("Ship demo")).length).toBeGreaterThan(0);
    expect(await screen.findByText(TEXTS.en.todolist.taskAdded)).toBeTruthy();

    await fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText(`${TEXTS.en.todolist.completed}: 1`)).toBeTruthy();

    await fireEvent.click(
      screen.getByRole("tab", { name: TEXTS.en.todolist.active }),
    );
    expect(
      within(screen.getByLabelText(TEXTS.en.todolist.tasksLabel)).queryByText(
        "Ship demo",
      ),
    ).toBeNull();

    await fireEvent.click(
      screen.getByRole("tab", { name: TEXTS.en.todolist.completed }),
    );
    expect(
      within(screen.getByLabelText(TEXTS.en.todolist.tasksLabel)).getByText(
        "Ship demo",
      ),
    ).toBeTruthy();

    await fireEvent.click(
      screen.getByRole("button", { name: TEXTS.en.todolist.clearDone }),
    );
    expect(
      await screen.findByText(TEXTS.en.todolist.completedCleared),
    ).toBeTruthy();
    expect(
      within(screen.getByLabelText(TEXTS.en.todolist.tasksLabel)).queryByText(
        "Ship demo",
      ),
    ).toBeNull();

    await fireEvent.input(input, { target: { value: "Delete me" } });
    await fireEvent.click(
      screen.getByRole("button", { name: TEXTS.en.todolist.add }),
    );
    await fireEvent.click(
      screen.getByRole("tab", { name: TEXTS.en.todolist.all }),
    );
    await fireEvent.click(
      screen.getByRole("button", { name: TEXTS.en.todolist.delete }),
    );
    expect(await screen.findByText(TEXTS.en.todolist.taskDeleted)).toBeTruthy();

    const filterTrigger = within(container).getAllByRole("combobox").at(-1)!;
    await fireEvent.click(filterTrigger);
    await chooseOption(TEXTS.en.todolist.high);
    expect(screen.getByText(/No High priority tasks/)).toBeTruthy();
  });
});
